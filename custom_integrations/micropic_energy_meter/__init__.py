import logging
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.typing import ConfigType
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator
from .sensor import MicropicEnergyCoordinator  
from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)

async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Configura la integración desde configuration.yaml."""
    return True

async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry):
    """Configura la integración desde la IU."""
    hass.data.setdefault(DOMAIN, {})

    # Inicializa el coordinador con el tiempo de actualización
    coordinator = MicropicEnergyCoordinator(hass, entry)
    await coordinator.async_config_entry_first_refresh()

    # Guarda el coordinador en hass.data
    hass.data[DOMAIN][entry.entry_id] = coordinator

    # Configura las entidades del sensor
    await hass.config_entries.async_forward_entry_setup(entry, "sensor")
    return True

async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Elimina la configuración de la integración."""
    await hass.config_entries.async_forward_entry_unload(entry, "sensor")
    hass.data[DOMAIN].pop(entry.entry_id)
    return True
