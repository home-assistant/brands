
from __future__ import annotations

import async_timeout
from datetime import timedelta
from homeassistant.components.sensor import SensorEntity, SensorDeviceClass
from homeassistant.const import (
    TEMP_CELSIUS,
    PERCENTAGE,
    CONCENTRATION_PARTS_PER_MILLION,
)
from homeassistant.core import HomeAssistant
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.config_entries import ConfigEntry

from .const import (
    DUCOBOX_NODE1,
    DUCOBOX_BOXINFO,
    DUCO_ZONE1,
    DUCO_ZONE2,
    DUCO_NODE2,
    DUCO_NODE3,
    DUCO_NODE4,
    SCAN_INTERVAL as SCAN_SECONDS,
)

SCAN_INTERVAL = timedelta(seconds=SCAN_SECONDS)

SENSOR_DESCRIPTIONS = [
    {"name": "DucoBox trgt", "unique_id": "ducobox_trgt", "unit": PERCENTAGE, "url": DUCOBOX_NODE1, "path": ["trgt"]},
    {"name": "DucoBox actl", "unique_id": "ducobox_actl", "unit": PERCENTAGE, "url": DUCOBOX_NODE1, "path": ["actl"]},
    {"name": "DucoBox snsr", "unique_id": "ducobox_snsr", "unit": PERCENTAGE, "url": DUCOBOX_NODE1, "path": ["snsr"]},

    {"name": "DucoBox temp aanzuiging vers", "unique_id": "ducobox_temp_oda", "unit": TEMP_CELSIUS,
     "url": DUCOBOX_BOXINFO, "path": ["EnergyInfo", "TempODA"], "scale": 0.1,
     "device_class": SensorDeviceClass.TEMPERATURE},
    {"name": "DucoBox temp aanvoer woning", "unique_id": "ducobox_temp_sup", "unit": TEMP_CELSIUS,
     "url": DUCOBOX_BOXINFO, "path": ["EnergyInfo", "TempSUP"], "scale": 0.1,
     "device_class": SensorDeviceClass.TEMPERATURE},
    {"name": "DucoBox temp afzuiging woning", "unique_id": "ducobox_temp_eta", "unit": TEMP_CELSIUS,
     "url": DUCOBOX_BOXINFO, "path": ["EnergyInfo", "TempETA"], "scale": 0.1,
     "device_class": SensorDeviceClass.TEMPERATURE},
    {"name": "DucoBox temp afvoer", "unique_id": "ducobox_temp_eha", "unit": TEMP_CELSIUS,
     "url": DUCOBOX_BOXINFO, "path": ["EnergyInfo", "TempEHA"], "scale": 0.1,
     "device_class": SensorDeviceClass.TEMPERATURE},

    {"name": "Duco zone 1 beneden trgt", "unique_id": "duco_zone1_trgt", "unit": PERCENTAGE,
     "url": DUCO_ZONE1, "path": ["trgt"]},
    {"name": "Duco zone 1 beneden actl", "unique_id": "duco_zone1_actl", "unit": PERCENTAGE,
     "url": DUCO_ZONE1, "path": ["actl"]},
    {"name": "Duco zone 1 beneden snsr", "unique_id": "duco_zone1_snsr", "unit": PERCENTAGE,
     "url": DUCO_ZONE1, "path": ["snsr"]},

    {"name": "Duco zone 2 boven trgt", "unique_id": "duco_zone2_trgt", "unit": PERCENTAGE,
     "url": DUCO_ZONE2, "path": ["trgt"]},
    {"name": "Duco zone 2 boven actl", "unique_id": "duco_zone2_actl", "unit": PERCENTAGE,
     "url": DUCO_ZONE2, "path": ["actl"]},
    {"name": "Duco zone 2 boven snsr", "unique_id": "duco_zone2_snsr", "unit": PERCENTAGE,
     "url": DUCO_ZONE2, "path": ["snsr"]},

    {"name": "Duco node 2 Badkamer Temp", "unique_id": "duco_node2_temp", "unit": TEMP_CELSIUS,
     "url": DUCO_NODE2, "path": ["temp"], "device_class": SensorDeviceClass.TEMPERATURE},
    {"name": "Duco node 2 Badkamer rh", "unique_id": "duco_node2_rh", "unit": PERCENTAGE,
     "url": DUCO_NODE2, "path": ["rh"], "device_class": SensorDeviceClass.HUMIDITY},
    {"name": "Duco node 2 Badkamer snsr", "unique_id": "duco_node2_snsr", "unit": PERCENTAGE,
     "url": DUCO_NODE2, "path": ["snsr"]},

    {"name": "Duco node 3 Slaapkamer Temp", "unique_id": "duco_node3_temp", "unit": TEMP_CELSIUS,
     "url": DUCO_NODE3, "path": ["temp"], "device_class": SensorDeviceClass.TEMPERATURE},
    {"name": "Duco node 3 Slaapkamer co2", "unique_id": "duco_node3_co2",
     "unit": CONCENTRATION_PARTS_PER_MILLION, "url": DUCO_NODE3, "path": ["co2"],
     "device_class": SensorDeviceClass.CO2},
    {"name": "Duco node 3 Slaapkamer snsr", "unique_id": "duco_node3_snsr", "unit": PERCENTAGE,
     "url": DUCO_NODE3, "path": ["snsr"]},

    {"name": "Duco node 4 Woonkamer Temp", "unique_id": "duco_node4_temp", "unit": TEMP_CELSIUS,
     "url": DUCO_NODE4, "path": ["temp"], "device_class": SensorDeviceClass.TEMPERATURE},
    {"name": "Duco node 4 Woonkamer co2", "unique_id": "duco_node4_co2",
     "unit": CONCENTRATION_PARTS_PER_MILLION, "url": DUCO_NODE4, "path": ["co2"],
     "device_class": SensorDeviceClass.CO2},
    {"name": "Duco node 4 Woonkamer snsr", "unique_id": "duco_node4_snsr", "unit": PERCENTAGE,
     "url": DUCO_NODE4, "path": ["snsr"]},
]


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry, async_add_entities):
    """Set up sensors from a config entry (UI)."""
    session = async_get_clientsession(hass)
    host = entry.data.get("host")
    verify_ssl = entry.data.get("verify_ssl", False)
    if not host:
        return

    entities = [
        DucoBoxSensor(
            session=session,
            name=desc["name"],
            unique_id=desc["unique_id"],
            unit=desc.get("unit"),
            url=desc["url"].format(host=host),
            path=desc["path"],
            scale=desc.get("scale", 1.0),
            device_class=desc.get("device_class"),
            verify_ssl=verify_ssl,
        )
        for desc in SENSOR_DESCRIPTIONS
    ]
    async_add_entities(entities, True)


# (optioneel) legacy YAML-setup
async def async_setup_platform(hass, config, async_add_entities, discovery_info=None):
    session = async_get_clientsession(hass)
    host = config.get("host")
    verify_ssl = config.get("verify_ssl", False)
    if not host:
        return
    entities = [
        DucoBoxSensor(
            session=session,
            name=desc["name"],
            unique_id=desc["unique_id"],
            unit=desc.get("unit"),
            url=desc["url"].format(host=host),
            path=desc["path"],
            scale=desc.get("scale", 1.0),
            device_class=desc.get("device_class"),
            verify_ssl=verify_ssl,
        )
        for desc in SENSOR_DESCRIPTIONS
    ]
    async_add_entities(entities, True)


def _extract_value(data: dict, path: list[str]):
    cur = data
    for key in path:
        if not isinstance(cur, dict):
            return None
        cur = cur.get(key)
        if cur is None:
            return None
    return cur


class DucoBoxSensor(SensorEntity):
    _attr_should_poll = True

    def __init__(self, session, name, unique_id, unit, url, path, scale=1.0, device_class=None, verify_ssl=False):
        self._session = session
        self._attr_name = name
        self._attr_unique_id = unique_id
        self._attr_native_unit_of_measurement = unit
        self._url = url
        self._path = path
        self._scale = scale
        self._attr_native_value = None
        self._verify_ssl = verify_ssl
        if device_class:
            self._attr_device_class = device_class

    async def async_update(self):
        try:
            async with async_timeout.timeout(10):
                resp = await self._session.get(self._url, ssl=self._verify_ssl or None)
                if resp.status != 200:
                    return
                data = await resp.json(content_type=None)
        except Exception:
            return

        raw = _extract_value(data, self._path)
        if raw is None:
            return

        try:
            value = float(raw) * self._scale
        except Exception:
            value = raw

        self._attr_native_value = value
