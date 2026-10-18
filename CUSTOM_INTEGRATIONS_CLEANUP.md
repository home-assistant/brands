# Custom integrations cleanup

Custom integrations can ship local brand images in `custom_components/<domain>/brand/` since Home Assistant 2026.3. This file tracks the migration of existing `custom_integrations/` entries out of this repository.

Announcement: https://contributors.home-assistant.io/blog/2026/02/24/brands-proxy-api/

## Batch 1

| Domain | Original brands PR | Upstream repository | Upstream state | Local brand folder | Action | Tracking PR |
| --- | --- | --- | --- | --- | --- | --- |
| `0711smarthome_fernwartungs_modus` | home-assistant/brands#8250 | https://github.com/0711smarthome/0711smarthome_fernwartungs_modus | Active, pushed 2025-11-10 | No | Needs upstream PR | |
| `12123` | home-assistant/brands#8482 | https://github.com/758639304/12123 | Repository unavailable | Unknown | Needs manual follow-up | |
| `21energy_heater_control` | home-assistant/brands#6879 | Unknown | Unknown | Unknown | Needs source repo lookup | |
| `2minersinfo` | home-assistant/brands#3398 | https://github.com/ThomasPrior/2minersInfo | Archived, pushed 2022-05-24 | No | Remove from brands repo | home-assistant/brands#11332 |
| `2n_intercom` | home-assistant/brands#8883 | https://github.com/genka13/ha-2n-intercom | Active, pushed 2026-01-04 | No | Needs upstream PR | |
| `3bmeteo` | home-assistant/brands#9542 | https://github.com/matte-oss/hass-3bmeteo | Active, pushed 2026-02-12 | No | Needs upstream PR | |
| `4heat` | home-assistant/brands#3154 | Unknown | Unknown | Unknown | Needs source repo lookup | |
| `4noks_elios4you` | home-assistant/brands#5199 | https://github.com/alexdelprete/ha-4noks-elios4you | Active, pushed 2026-10-02 | Yes | Remove from brands repo | home-assistant/brands#11332 |
| `aapalarm` | home-assistant/brands#6128 | https://github.com/osotechie/ha_aapalarm | Active, pushed 2026-10-10 | Yes | Remove from brands repo | home-assistant/brands#11332 |
| `aarlo` | home-assistant/brands#2523 | https://github.com/twrecked/hass-aarlo | Active, pushed 2026-10-16 | No | Needs upstream PR | |

## Batch 2

| Domain | Original brands PR | Upstream repository | Upstream state | Local brand folder | Action | Tracking PR |
| --- | --- | --- | --- | --- | --- | --- |
| `abalin_nameday` | home-assistant/brands#2392 | https://github.com/viktak/ha-cc-abalin-nameday | Archived, pushed 2025-03-21 | No | Remove from brands repo | home-assistant/brands#11332 |
| `abb_fimer_pvi_sunspec` | home-assistant/brands#8284 | https://github.com/alexdelprete/ha-abb-fimer-pvi-vsn-rest | Active, pushed 2026-10-03 | Unknown | Needs manual follow-up |  |
| `abb_fimer_pvi_vsn_rest` | home-assistant/brands#8284 | https://github.com/alexdelprete/ha-abb-fimer-pvi-vsn-rest | Active, pushed 2026-10-03 | Yes | Remove from brands repo | home-assistant/brands#11332 |
| `abbfreeathome_ci` | home-assistant/brands#5937 | https://github.com/kingsleyadam/local-abbfreeathome-hass | Active, pushed 2026-10-18 | No | Needs upstream PR |  |
| `ab_ble_gateway` | home-assistant/brands#5486 | https://github.com/chkuendig/hass-ab_ble_gateway | Active, pushed 2026-01-14 | No | Needs upstream PR |  |
| `abb_powerone_pvi_sunspec` | home-assistant/brands#2628 | https://github.com/alexdelprete/ha-abb-powerone-pvi-sunspec | Active, pushed 2026-10-16 | Yes | Remove from brands repo | home-assistant/brands#11332 |
| `abb_terra_ac` | home-assistant/brands#9600 | https://github.com/JernejHren/ABB-Terra-AC | Active, pushed 2026-10-17 | Yes | Remove from brands repo | home-assistant/brands#11332 |
| `abc_council_bin_collection` | home-assistant/brands#7050 | https://github.com/jordanhinks/abc_council_bin_collection | Active, pushed 2026-10-13 | No | Needs upstream PR |  |
| `abcemergency` | home-assistant/brands#8649 | https://github.com/troykelly/homeassistant-abcemergency | Active, pushed 2026-01-10 | No | Needs upstream PR |  |
| `abetterrouteplanner` | home-assistant/brands#8526 | https://github.com/jannis3005/hass-abrp | Active, pushed 2026-09-28 | No | Needs upstream PR |  |
| `abfallplus` | home-assistant/brands#3176 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `ab_gateway` | home-assistant/brands#3920 | https://github.com/AprilBrother/component-ab-gateway | Active, pushed 2024-09-26 | No | Needs upstream PR |  |
| `acer_air_monitor` | home-assistant/brands#2874 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `ac_infinity` | home-assistant/brands#4565 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `ACInfinity` | home-assistant/brands#4788 | https://github.com/Cavaliers/ha-ACInfinity | Active, pushed 2023-10-31 | No | Needs upstream PR |  |
| `acit` | home-assistant/brands#9553 | https://github.com/jdu-acit/ACIT_HA_ThermACEC | Active, pushed 2026-09-10 | No | Needs upstream PR |  |
| `acogo` | home-assistant/brands#9026 | https://github.com/acoGO/HomeAssistant-acoGO | Active, pushed 2026-01-14 | No | Needs upstream PR |  |
| `acond` | home-assistant/brands#8624 | https://github.com/piotrekcrash/acond_pro_heat_pump | Active, pushed 2026-10-14 | No | Needs upstream PR |  |
| `actec` | home-assistant/brands#6767 | https://github.com/AcTECElectronics/ha_actec_home | Active, pushed 2025-06-19 | No | Needs upstream PR |  |
| `actron_air_esphome` | home-assistant/brands#8993 | https://github.com/johnf/actron-air-esphome | Active, pushed 2026-09-21 | Yes | Remove from brands repo | home-assistant/brands#11332 |
| `actronair_neo` | home-assistant/brands#5818 | https://github.com/domalab/ha-actronair-neo | Active, pushed 2026-10-16 | No | Needs upstream PR |  |
| `actualbudget` | home-assistant/brands#6343 | https://github.com/jlvcm/ha-actualbudget | Active, pushed 2026-04-13 | No | Needs upstream PR |  |
| `acv` | home-assistant/brands#2401 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `acwd` | home-assistant/brands#8657 | https://github.com/funkadelic/ha-acwd | Active, pushed 2026-10-18 | No | Needs upstream PR |  |
| `acwd_water_usage` | home-assistant/brands#5005 | https://github.com/parvez/acwd_water_usage | Active, pushed 2025-08-13 | No | Needs upstream PR |  |
| `adano` | home-assistant/brands#5191 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `adap1ii` | home-assistant/brands#9371 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `adap1status` | home-assistant/brands#9371 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `adaptive_climate` | home-assistant/brands#7412 | https://github.com/msinhore/adaptive_climate | Unavailable | Unknown | Needs manual follow-up |  |
| `adaptive_cover` | home-assistant/brands#5117 | https://github.com/basbruss/adaptive-cover | Active, pushed 2026-08-03 | No | Needs upstream PR |  |
| `adaptive_lighting` | home-assistant/brands#2727 | https://github.com/basnijholt/adaptive-lighting | Active, pushed 2026-10-12 | No | Needs upstream PR |  |
| `adaptive_thermostat` | home-assistant/brands#6768 | https://github.com/Horia73/adaptive_thermostat | Active, pushed 2026-06-24 | No | Needs upstream PR |  |
| `adax_heater` | home-assistant/brands#1853 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `additional_ca` | home-assistant/brands#4418 | https://github.com/Athozs/hass-additional-ca | Active, pushed 2026-10-17 | No | Needs upstream PR |  |
| `adjustable_bed` | home-assistant/brands#9116 | https://github.com/kristofferR/ha-adjustable-bed | Active, pushed 2026-10-18 | No | Needs upstream PR |  |
| `adsb_lol` | home-assistant/brands#5319 | https://github.com/vingerha/ha_adsb_lol | Archived, pushed 2026-01-11 | No | Remove from brands repo | home-assistant/brands#11332 |
| `adtpulse` | home-assistant/brands#4341 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `aduro` | home-assistant/brands#3867 | https://github.com/clementprevot/aduro | Archived, pushed 2025-10-18 | No | Remove from brands repo | home-assistant/brands#11332 |
| `advanced_snapshot` | home-assistant/brands#6594 | https://github.com/Phil7989/advanced_snapshot | Active, pushed 2026-01-12 | No | Needs upstream PR |  |
| `advanced_switches` | home-assistant/brands#9032 | https://github.com/hoizi89/advanced_switches | Active, pushed 2026-10-12 | No | Needs upstream PR |  |
| `advanced_trading_wallet` | home-assistant/brands#5906 | https://github.com/ad-ha/atw | Active, pushed 2025-02-12 | No | Needs upstream PR |  |
| `aemo_nem` | home-assistant/brands#5639 | https://github.com/cabberley/HA_AemoNemData | Active, pushed 2026-07-09 | No | Needs upstream PR |  |
| `aerogarden` | home-assistant/brands#3458 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `affalddk` | home-assistant/brands#5261 | https://github.com/briis/affalddk | Active, pushed 2026-10-13 | No | Needs upstream PR |  |
| `afire` | home-assistant/brands#7936 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `afvalbeheer` | home-assistant/brands#7114 | https://github.com/pippyn/Home-Assistant-Sensor-Afvalbeheer | Active, pushed 2026-10-13 | No | Needs upstream PR |  |
| `afvalinfo` | home-assistant/brands#1632 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `afvalwijzer` | home-assistant/brands#1851 | https://github.com/xirixiz/homeassistant-afvalwijzer | Active, pushed 2026-10-18 | No | Needs upstream PR |  |
| `aguacatec` | home-assistant/brands#6912 | https://github.com/AguacatecHA/brands | Active, pushed 2026-02-23 | Unknown | Needs manual follow-up |  |
| `aguaiot` | home-assistant/brands#4410 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `aguasdegaia` | home-assistant/brands#5492 | https://github.com/zerolo/aguasgaiaHA | Active, pushed 2024-08-24 | No | Needs upstream PR |  |
| `agui_agent` | home-assistant/brands#9041 | https://github.com/contextablemark/home-agui-agent | Active, pushed 2026-10-17 | No | Needs upstream PR |  |
| `agur` | home-assistant/brands#5016 | https://github.com/tbouron/ha-agur | Active, pushed 2026-05-04 | No | Needs upstream PR |  |
| `aha_trash` | home-assistant/brands#9036 | https://github.com/soundstorm/aha_trash | Active, pushed 2026-02-24 | No | Needs upstream PR |  |
| `ai_agent_ha` | home-assistant/brands#7140 | https://github.com/sbenodiz/ai_agent_ha | Active, pushed 2026-07-14 | No | Needs upstream PR |  |
| `ai_automation_suggester` | home-assistant/brands#5981 | https://github.com/ITSpecialist111/ai_automation_suggester | Active, pushed 2026-10-02 | Yes | Remove from brands repo | home-assistant/brands#11332 |
| `ai_config_agent` | home-assistant/brands#8335 | https://github.com/yinzara/ha-config-ai-agent | Active, pushed 2026-05-05 | No | Needs upstream PR |  |
| `aigues_barcelona` | home-assistant/brands#4055 | https://github.com/duhow/hass-aigues-barcelona | Archived, pushed 2024-11-18 | No | Remove from brands repo | home-assistant/brands#11332 |
| `ai_hub` | home-assistant/brands#8322 | https://github.com/ha-china/ai_hub | Active, pushed 2026-10-14 | Yes | Remove from brands repo | home-assistant/brands#11332 |
| `ail` | home-assistant/brands#9199 | https://github.com/lukefx/ail-ha | Active, pushed 2026-10-11 | No | Needs upstream PR |  |
| `aimp` | home-assistant/brands#2632 | https://github.com/xilense/aimp_custom_component | Active, pushed 2021-06-21 | Unknown | Needs manual follow-up |  |
| `airahome` | home-assistant/brands#8252 | https://github.com/Invy55/Ha-AiraHome | Active, pushed 2026-09-14 | No | Needs upstream PR |  |
| `air_cloud` | home-assistant/brands#5214 | https://github.com/svmironov/aircloud_ha | Active, pushed 2026-08-17 | No | Needs upstream PR |  |
| `aircloud` | home-assistant/brands#5242 | https://github.com/ylemoigne/aircloud-hass | Active, pushed 2025-11-17 | No | Needs upstream PR |  |
| `airco2ntrol` | home-assistant/brands#6486 | https://github.com/leorbs/airco2ntrol | Active, pushed 2026-03-28 | No | Needs upstream PR |  |
| `aircontrolbase` | home-assistant/brands#9254 | https://github.com/enudler/homeassistant-aircontrol | Active, pushed 2026-01-24 | No | Needs upstream PR |  |
| `airibes` | home-assistant/brands#6317 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `airios_ventilation` | home-assistant/brands#7392 | https://github.com/scabrero/homeassistant-airios-component | Active, pushed 2026-09-30 | No | Needs upstream PR |  |
| `airmusic` | home-assistant/brands#5671 | https://github.com/DominikWrobel/airmusic | Active, pushed 2026-10-03 | No | Needs upstream PR |  |
| `airmx` | home-assistant/brands#4982 | https://github.com/dext0r/airmx | Active, pushed 2024-11-22 | No | Needs upstream PR |  |
| `airthings_integration` | home-assistant/brands#2269 | https://github.com/braibaud/airthings-integration | Active, pushed 2026-05-21 | No | Needs upstream PR |  |
| `airtouch` | home-assistant/brands#5050 | https://github.com/TheNoctambulist/hass-airtouch | Active, pushed 2026-08-16 | No | Needs upstream PR |  |
| `airtouch2` | home-assistant/brands#5997 | https://github.com/nathanvdh/homeassistant-airtouch2 | Active, pushed 2025-01-14 | No | Needs upstream PR |  |
| `airtouch3` | home-assistant/brands#8701 | https://github.com/bradmatt275/ha-airtouch3 | Active, pushed 2026-07-25 | No | Needs upstream PR |  |
| `airtouch4_advanced` | home-assistant/brands#6699 | https://github.com/doenau/airtouch4 | Active, pushed 2026-09-24 | No | Needs upstream PR |  |
| `airtub_udp` | home-assistant/brands#5737 | https://github.com/zenz/airtub_ha_reader | Active, pushed 2025-02-13 | No | Needs upstream PR |  |
| `airvpn` | home-assistant/brands#7604 | https://github.com/J-shw/ha-airvpn | Active, pushed 2026-03-01 | No | Needs upstream PR |  |
| `airzonecloud` | home-assistant/brands#3270 | https://github.com/max13fr/Airzonecloud-HomeAssistant | Active, pushed 2025-01-11 | No | Needs upstream PR |  |
| `airzoneclouddaikin` | home-assistant/brands#8190 | https://github.com/eXPerience83/DKNCloud-HASS | Active, pushed 2026-10-11 | No | Needs upstream PR |  |
| `airzone_control` | home-assistant/brands#6748 | https://github.com/tecnoyfoto/airzone_control | Active, pushed 2026-09-15 | No | Needs upstream PR |  |
| `ajax` | home-assistant/brands#8379 | https://github.com/foXaCe/ajax-hass | Unavailable | Unknown | Needs manual follow-up |  |
| `ajax_uart` | home-assistant/brands#8340 | https://github.com/FScoua/ha-ajax-uart | Active, pushed 2025-11-10 | No | Needs upstream PR |  |
| `akuvox` | home-assistant/brands#4670 | https://github.com/nimroddolev/akuvox | Active, pushed 2026-10-08 | No | Needs upstream PR |  |
| `aladin_online` | home-assistant/brands#5724 | https://github.com/kukulich/home-assistant-aladin-online | Active, pushed 2026-07-29 | Yes | Remove from brands repo | home-assistant/brands#11332 |
| `alarmdotcom` | home-assistant/brands#2042 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `alarmo` | home-assistant/brands#2021 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `alarms_and_reminders` | home-assistant/brands#6914 | https://github.com/omaramin-2000/HA-Alarms-and-Reminders | Active, pushed 2026-07-21 | No | Needs upstream PR |  |
| `aldes` | home-assistant/brands#3280 | https://github.com/aalmazanarbs/hassio_aldes | Active, pushed 2023-06-07 | Unknown | Needs manual follow-up |  |
| `aldi_talk` | home-assistant/brands#5310 | https://github.com/JonasJoKuJonas/homeassistant-AldiTalk | Active, pushed 2026-09-02 | Yes | Remove from brands repo | home-assistant/brands#11332 |
| `alert2` | home-assistant/brands#6577 | https://github.com/redstone99/hass-alert2 | Active, pushed 2026-10-11 | No | Needs upstream PR |  |
| `alexa_media` | home-assistant/brands#1561 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `alfen_modbus` | home-assistant/brands#4391 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `alfen_wallbox` | home-assistant/brands#3544 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `aliexpress_package_tracker` | home-assistant/brands#6746 | https://github.com/yohaybn/HA_aliexpress_package_tracker_sensor | Active, pushed 2026-10-06 | No | Needs upstream PR |  |
| `aliyun_bailian_tts` | home-assistant/brands#7823 | https://github.com/itning/hass-aliyun_bailian_tts | Active, pushed 2026-01-08 | No | Needs upstream PR |  |
| `alko` | home-assistant/brands#2708 | https://github.com/jonkristian/alko | Active, pushed 2025-09-10 | No | Needs upstream PR |  |
| `allegro` | home-assistant/brands#4063 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `alliant_energy` | home-assistant/brands#6093 | https://github.com/detour1999/ha-alliant-energy | Active, pushed 2024-11-19 | No | Needs upstream PR |  |
| `allin_io_8` | home-assistant/brands#8501 | Unknown | Unknown | Unknown | Needs source repo lookup |  |
| `alltalktts` | home-assistant/brands#5346 | https://github.com/ser/AllTalkTTS | Active, pushed 2024-04-08 | No | Needs upstream PR |  |
