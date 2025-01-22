from homeassistant import config_entries
import voluptuous as vol

from .const import DOMAIN  # Asegúrate de que const.py define correctamente DOMAIN

class ConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Flujo de configuración para Micropic Energy Meter."""

    VERSION = 1

    async def async_step_user(self, user_input=None):
        """Primera etapa de configuración."""
        if user_input is not None:
            # Validar que el tiempo de actualización sea positivo
            if user_input.get("update_interval", 5) <= 0:
                return self.async_show_form(
                    step_id="user",
                    errors={"update_interval": "Debe ser mayor que 0."},
                    data_schema=self._build_schema(),
                )

            # Crear la entrada de configuración
            return self.async_create_entry(
                title="Micropic Energy Meter",
                data=user_input,
            )

        # Mostrar el formulario de configuración
        return self.async_show_form(
            step_id="user",
            data_schema=self._build_schema(),
        )

    def _build_schema(self):
        """Construye el esquema del formulario."""
        return vol.Schema({
            vol.Required("sensor_power", default="sensor.inverter_active_power"): str,
            vol.Required("sensor_consumption", default="sensor.huawei_directo_consumo"): str,
            vol.Required("mqtt_topic", default="homeassistant/micropic_energy_meter"): str,
            vol.Optional("update_interval", default=5): int,
        })
