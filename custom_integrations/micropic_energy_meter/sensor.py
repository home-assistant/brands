import logging
from datetime import datetime, timedelta
from typing import Mapping, Any

from homeassistant.components.sensor import (
    SensorEntity, SensorEntityDescription, SensorStateClass
)
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, CoordinatorEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.const import UnitOfPower

import json

_LOGGER = logging.getLogger(__name__)

DOMAIN = "micropic_energy_meter"

async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry, async_add_entities):
    """Configura la entidad del sensor."""
    coordinator = MicropicEnergyCoordinator(hass, entry)
    await coordinator.async_config_entry_first_refresh()

    sensors = [
        MicropicEnergyMeter(coordinator, entry.entry_id, "Producción"),
        MicropicEnergyMeter(coordinator, entry.entry_id, "Consumo")
    ]
    async_add_entities(sensors)


class MicropicEnergyCoordinator(DataUpdateCoordinator):
    """Coordinador para manejar la actualización de datos periódicamente."""

    def __init__(self, hass: HomeAssistant, entry: ConfigEntry):
        # Obtén el intervalo de actualización desde la configuración
        update_interval = entry.data.get("update_interval", 5)  # Por defecto, 5 segundos
        super().__init__(
            hass,
            _LOGGER,
            name="Micropic Energy Meter",
            update_interval=timedelta(seconds=update_interval),  # Convierte a timedelta
        )
        self.sensor_power = entry.data["sensor_power"]
        self.sensor_consumption = entry.data["sensor_consumption"]
        self.mqtt_topic = entry.data["mqtt_topic"]

    async def _async_update_data(self):
        """Actualiza los datos obtenidos de las entidades."""
        try:
            power_state = self.hass.states.get(self.sensor_power)
            consumption_state = self.hass.states.get(self.sensor_consumption)

            if power_state is None or consumption_state is None:
                raise ValueError("Una o más entidades configuradas no están disponibles.")

            power = power_state.state
            consumption = consumption_state.state

            return {
                "power": int(float(power)) if power else 0,
                "consumption": int(float(consumption)) if consumption else 0,
                "timestamp": datetime.utcnow().isoformat(),
            }
        except Exception as e:
            _LOGGER.error("Error al actualizar los datos: %s", e)
            raise



class MicropicEnergyMeter(CoordinatorEntity, SensorEntity):
    """Entidad para el sensor Micropic Energy Meter."""

    def __init__(self, coordinator: MicropicEnergyCoordinator, entry_id: str, sensor_type: str):
        super().__init__(coordinator)
        self._type = sensor_type
        self._attr_name = f"Micropic Energy {sensor_type}"
        self._attr_unique_id = f"micropic_energy_meter_{sensor_type.lower()}_{entry_id}"
        self._attr_entity_picture = f"/config/custom_components/micropic_energy_meter/icon.png"  # Ruta al ícono personalizado
        self.entity_description = SensorEntityDescription(
            key=sensor_type.lower(),
            name=f"Micropic Energy {sensor_type}",
            icon="mdi:flash",
            native_unit_of_measurement=UnitOfPower.WATT,
        )

    async def async_added_to_hass(self) -> None:
        """Configura la entidad cuando se añade a Home Assistant."""
        await super().async_added_to_hass()
        self._handle_coordinator_update()

    @callback
    def _handle_coordinator_update(self) -> None:
        """Actualiza el estado del sensor y publica datos en MQTT."""
        try:
            data = self.coordinator.data
            if self._type == "Producción":
                self._state = data.get("power", 0)
            elif self._type == "Consumo":
                self._state = data.get("consumption", 0)

            # Publica datos en MQTT
            message = {
                "fec": data["timestamp"],
                "pro": data["power"],
                "con": data["consumption"],
            }

            # Registro para depuración
            _LOGGER.debug("Publicando mensaje MQTT: %s", message)

            # Publicar MQTT como tarea
            self.hass.async_create_task(
                self.hass.services.async_call(
                    "mqtt",
                    "publish",
                    {
                        "topic": self.coordinator.mqtt_topic,
                        "payload": json.dumps(message),
                    },
                )
            )

            # Actualiza el estado del sensor
            self.async_write_ha_state()
        except Exception as e:
            _LOGGER.error("Error al manejar la actualización del coordinador: %s", e)

    @property
    def native_value(self):
        """Devuelve el estado del sensor."""
        return self._state
