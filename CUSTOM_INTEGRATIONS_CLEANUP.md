# Custom integrations cleanup

Custom integrations can ship local brand images in `custom_components/<domain>/brand/` since Home Assistant 2026.3. This file tracks the migration of existing `custom_integrations/` entries out of this repository.

Announcement: https://contributors.home-assistant.io/blog/2026/02/24/brands-proxy-api/

## Summary

| Action | Count |
| --- | ---: |
| Remove from brands repo | 579 |
| Needs upstream PR | 684 |
| Needs source repo lookup | 981 |
| Needs manual follow-up | 1984 |

Upstream PRs opened: 873. Status on 2026-10-21: 203 merged, 666 open, 4 closed without merging.

## Remove from brands repo

| Domain | Original brands PR | Upstream repository | Upstream state | Reason | Tracking PR |
| --- | --- | --- | --- | --- | --- |
| `2minersinfo` | home-assistant/brands#3398 | https://github.com/ThomasPrior/2minersInfo | Archived, pushed 2022-05-24 | Upstream repository is archived. | home-assistant/brands#11332 |
| `4noks_elios4you` | home-assistant/brands#5199 | https://github.com/alexdelprete/ha-4noks-elios4you | Active, pushed 2026-10-02 | Upstream repository already ships local brand assets in `custom_components/4noks_elios4you/brand/`. | home-assistant/brands#11332 |
| `aapalarm` | home-assistant/brands#6128 | https://github.com/osotechie/ha_aapalarm | Active, pushed 2026-10-10 | Upstream repository already ships local brand assets in `custom_components/aapalarm/brand/`. | home-assistant/brands#11332 |
| `abalin_nameday` | home-assistant/brands#2392 | https://github.com/viktak/ha-cc-abalin-nameday | Archived, pushed 2025-03-21 | Upstream repository is archived. | home-assistant/brands#11332 |
| `abb_fimer_pvi_vsn_rest` | home-assistant/brands#8284 | https://github.com/alexdelprete/ha-abb-fimer-pvi-vsn-rest | Active, pushed 2026-10-03 | Upstream repository already ships local brand assets in `custom_components/abb_fimer_pvi_vsn_rest/brand/`. | home-assistant/brands#11332 |
| `abb_powerone_pvi_sunspec` | home-assistant/brands#2628 | https://github.com/alexdelprete/ha-abb-powerone-pvi-sunspec | Active, pushed 2026-10-16 | Upstream repository already ships local brand assets in `custom_components/abb_powerone_pvi_sunspec/brand/`. | home-assistant/brands#11332 |
| `abb_terra_ac` | home-assistant/brands#9600 | https://github.com/JernejHren/ABB-Terra-AC | Active, pushed 2026-10-17 | Upstream repository already ships local brand assets in `custom_components/abb_terra_ac/brand/`. | home-assistant/brands#11332 |
| `actron_air_esphome` | home-assistant/brands#8993 | https://github.com/johnf/actron-air-esphome | Active, pushed 2026-09-21 | Upstream repository already ships local brand assets in `custom_components/actron_air_esphome/brand/`. | home-assistant/brands#11332 |
| `adsb_lol` | home-assistant/brands#5319 | https://github.com/vingerha/ha_adsb_lol | Archived, pushed 2026-01-11 | Upstream repository is archived. | home-assistant/brands#11332 |
| `aduro` | home-assistant/brands#3867 | https://github.com/clementprevot/aduro | Archived, pushed 2025-10-18 | Upstream repository is archived. | home-assistant/brands#11332 |
| `ai_automation_suggester` | home-assistant/brands#5981 | https://github.com/ITSpecialist111/ai_automation_suggester | Active, pushed 2026-10-02 | Upstream repository already ships local brand assets in `custom_components/ai_automation_suggester/brand/`. | home-assistant/brands#11332 |
| `ai_hub` | home-assistant/brands#8322 | https://github.com/ha-china/ai_hub | Active, pushed 2026-10-14 | Upstream repository already ships local brand assets in `custom_components/ai_hub/brand/`. | home-assistant/brands#11332 |
| `aigues_barcelona` | home-assistant/brands#4055 | https://github.com/duhow/hass-aigues-barcelona | Archived, pushed 2024-11-18 | Upstream repository is archived. | home-assistant/brands#11332 |
| `aladin_online` | home-assistant/brands#5724 | https://github.com/kukulich/home-assistant-aladin-online | Active, pushed 2026-07-29 | Upstream repository already ships local brand assets in `custom_components/aladin_online/brand/`. | home-assistant/brands#11332 |
| `aldi_talk` | home-assistant/brands#5310 | https://github.com/JonasJoKuJonas/homeassistant-AldiTalk | Active, pushed 2026-09-02 | Upstream repository already ships local brand assets in `custom_components/aldi_talk/brand/`. | home-assistant/brands#11332 |
| `alpha_innotec` | home-assistant/brands#4834 | https://github.com/arjenbos/ha_alpha_innotec | Archived, pushed 2023-11-30 | Upstream repository is archived. | home-assistant/brands#11332 |
| `andrews_arnold_quota` | home-assistant/brands#4566 | https://github.com/andrew-codechimp/HA-Andrews-Arnold-Quota | Active, pushed 2026-10-16 | Upstream repository already ships local brand assets in `custom_components/andrews_arnold_quota/brand/`. | home-assistant/brands#11332 |
| `applejuice_core` | home-assistant/brands#6687 | https://github.com/applejuicenetz/ha-applejuice-core | Active, pushed 2026-10-06 | Upstream repository already ships local brand assets in `custom_components/applejuice_core/brand/`. | home-assistant/brands#11332 |
| `applejuice_server` | home-assistant/brands#6691 | https://github.com/applejuicenetz/ha-applejuice-server | Active, pushed 2026-10-17 | Upstream repository already ships local brand assets in `custom_components/applejuice_server/brand/`. | home-assistant/brands#11332 |
| `aprilaire` | home-assistant/brands#4051 | https://github.com/chamberlain2007/aprilaire-ha | Archived, pushed 2024-07-04 | Upstream repository is archived. | home-assistant/brands#11332 |
| `aqara_advanced_lighting` | home-assistant/brands#9076 | https://github.com/absent42/Aqara-Advanced-Lighting | Active, pushed 2026-10-05 | Upstream repository already ships local brand assets in `custom_components/aqara_advanced_lighting/brand/`. | home-assistant/brands#11332 |
| `aquarea` | home-assistant/brands#3635 | https://github.com/cjaliaga/home-assistant-aquarea | Archived, pushed 2026-03-11 | Upstream repository is archived. | home-assistant/brands#11332 |
| `aquarite` | home-assistant/brands#5130 | https://github.com/fdebrus/hayward-ha | Archived, pushed 2026-10-13 | Upstream repository is archived. | home-assistant/brands#11332 |
| `auth_oidc` | home-assistant/brands#7444 | https://github.com/christiaangoossens/hass-oidc-auth | Active, pushed 2026-10-17 | Upstream repository already ships local brand assets in `custom_components/auth_oidc/brand/`. | home-assistant/brands#11332 |
| `autoamap` | home-assistant/brands#4090 | https://github.com/dscao/autoamap | Archived, pushed 2025-08-17 | Upstream repository is archived. | home-assistant/brands#11332 |
| `axaremote` | home-assistant/brands#3890 | https://github.com/rrooggiieerr/homeassistant-axaremote | Active, pushed 2026-08-03 | Upstream repository already ships local brand assets in `custom_components/axaremote/brand/`. | home-assistant/brands#11332 |
| `azrouter` | home-assistant/brands#8371 | https://github.com/Jenik5/azrouter | Active, pushed 2026-05-13 | Upstream repository already ships local brand assets in `custom_components/azrouter/brand/`. | home-assistant/brands#11332 |
| `bahnvorhersage` | home-assistant/brands#6473 | https://github.com/FaserF/ha-bahnvorhersage | Archived, pushed 2025-02-06 | Upstream repository is archived. | home-assistant/brands#11332 |
| `battery_devices_monitor` | home-assistant/brands#9562 | https://github.com/Geek-MD/Battery_Devices_Monitor | Active, pushed 2026-10-08 | Upstream repository already ships local brand assets in `custom_components/battery_devices_monitor/brand/`. | home-assistant/brands#11332 |
| `battery_notes` | home-assistant/brands#4622 | https://github.com/andrew-codechimp/HA-Battery-Notes | Active, pushed 2026-10-18 | Upstream repository already ships local brand assets in `custom_components/battery_notes/brand/`. | home-assistant/brands#11332 |
| `battery_smartflow_ai` | home-assistant/brands#9594 | https://github.com/PalmManiac/battery-smartflow-ai | Active, pushed 2026-10-18 | Upstream repository already ships local brand assets in `custom_components/battery_smartflow_ai/brand/`. | home-assistant/brands#11332 |
| `bedjet` | home-assistant/brands#4924 | https://github.com/asheliahut/ha-bedjet | Archived, pushed 2025-11-30 | Upstream repository is archived. | home-assistant/brands#11332 |
| `bedste_lectio` | home-assistant/brands#5138 | https://github.com/JohnnyJTH/BedsteLectioHA | Archived, pushed 2024-04-29 | Upstream repository is archived. | home-assistant/brands#11332 |
| `bitpanda` | home-assistant/brands#8108 | https://github.com/Spegeli/hacs_bitpanda | Active, pushed 2026-10-15 | Upstream repository already ships local brand assets in `custom_components/bitpanda/brand/`. | home-assistant/brands#11332 |
| `blanco_unit` | home-assistant/brands#9102 | https://github.com/Nailik/blanco_unit | Active, pushed 2026-10-17 | Upstream repository already ships local brand assets in `custom_components/blanco_unit/brand/`. | home-assistant/brands#11332 |
| `blaulichtsms` | home-assistant/brands#5439 | https://github.com/r00tat/hassio_blaulichtsms | Active, pushed 2026-10-15 | Upstream repository already ships local brand assets in `custom_components/blaulichtsms/brand/`. | home-assistant/brands#11332 |
| `ble_adv` | home-assistant/brands#8003 | https://github.com/NicoIIT/ha-ble-adv | Active, pushed 2026-10-18 | Upstream repository already ships local brand assets in `custom_components/ble_adv/brand/`. | home-assistant/brands#11332 |
| `blitzortung_image` | home-assistant/brands#8306 | https://github.com/MarcoGos/blitzortung_image | Active, pushed 2026-07-27 | Upstream repository already ships local brand assets in `custom_components/blitzortung_image/brand/`. | home-assistant/brands#11332 |
| `bmw_wallbox` | home-assistant/brands#8667 | https://github.com/JoaoPedroBelo/bmw-wallbox-ha | Active, pushed 2026-09-21 | Upstream repository already ships local brand assets in `custom_components/bmw_wallbox/brand/`. | home-assistant/brands#11332 |
| `boi_exchange_rates` | home-assistant/brands#5641 | https://github.com/Gugulator/boi_exchange_rates | Active, pushed 2026-06-16 | Upstream repository already ships local brand assets in `custom_components/boi_exchange_rates/brand/`. | home-assistant/brands#11332 |
| `boilerjuice` | home-assistant/brands#6927 | https://github.com/willbeeching/boilerjuice | Active, pushed 2026-10-15 | Upstream repository already ships local brand assets in `custom_components/boilerjuice/brand/`. | home-assistant/brands#11332 |
| `brunner_eas` | home-assistant/brands#9693 | https://github.com/Manschitz/hacs-brunner-eas | Active, pushed 2026-03-16 | Upstream repository already ships local brand assets in `custom_components/brunner_eas/brand/`. | home-assistant/brands#11332 |
| `buienalarm` | home-assistant/brands#6122 | https://github.com/HiDiHo01/Buienalarm | Active, pushed 2026-10-18 | Upstream repository already ships local brand assets in `custom_components/buienalarm/brand/`. | home-assistant/brands#11332 |
| `cala` | home-assistant/brands#9404 | https://github.com/RAR/Cala-HA | Archived, pushed 2026-03-05 | Upstream repository is archived. | home-assistant/brands#11332 |
| `calendar_event` | home-assistant/brands#7622 | https://github.com/andrew-codechimp/HA-Calendar-Event | Active, pushed 2026-10-16 | Upstream repository already ships local brand assets in `custom_components/calendar_event/brand/`. | home-assistant/brands#11332 |
| `carbon_offsetting_web3` | home-assistant/brands#4217 | https://github.com/Multi-Agent-io/carbon-offsetting-web3-integration | Archived, pushed 2023-05-18 | Upstream repository is archived. | home-assistant/brands#11332 |
| `casambi` | home-assistant/brands#2324 | https://github.com/hellqvio86/home_assistant_casambi | Archived, pushed 2025-01-06 | Upstream repository is archived. | home-assistant/brands#11332 |
| `check_weather` | home-assistant/brands#5575 | https://github.com/denysdovhan/ha-check-weather | Active, pushed 2026-10-05 | Upstream repository already ships local brand assets in `custom_components/check_weather/brand/`. | home-assistant/brands#11332 |
| `cleverspa` | home-assistant/brands#2783 | https://github.com/Wh1terat/cleverspa-component | Archived, pushed 2022-08-21 | Upstream repository is archived. | home-assistant/brands#11332 |
| `climate_group_helper` | home-assistant/brands#8609 | https://github.com/bjrnptrsn/climate_group_helper | Active, pushed 2026-10-16 | Upstream repository already ships local brand assets in `custom_components/climate_group_helper/brand/`. | home-assistant/brands#11332 |
| `contact_energy` | home-assistant/brands#4899 | https://github.com/codyc1515/ha-contact-energy | Archived, pushed 2024-08-15 | Upstream repository is archived. | home-assistant/brands#11332 |
| `cosa_thermostat` | home-assistant/brands#6634 | https://github.com/aykutvr/smartcosa-home-assistant-integration | Active, pushed 2026-09-29 | Upstream repository already ships local brand assets in `custom_components/cosa_thermostat/brand/`. | home-assistant/brands#11332 |
| `cozify_han` | home-assistant/brands#9400 | https://github.com/cozify/han-home-assistant | Active, pushed 2026-04-25 | Upstream repository already ships local brand assets in `custom_components/cozify_han/brand/`. | home-assistant/brands#11332 |
| `cumulusmx` | home-assistant/brands#7632 | https://github.com/dhover/ha-cumulusmx | Active, pushed 2026-09-03 | Upstream repository already ships local brand assets in `custom_components/cumulusmx/brand/`. | home-assistant/brands#11332 |
| `cup_component` | home-assistant/brands#6710 | https://github.com/bastgau/ha-cup-component | Active, pushed 2026-10-18 | Upstream repository already ships local brand assets in `custom_components/cup_component/brand/`. | home-assistant/brands#11332 |
| `cupra_we_connect` | home-assistant/brands#4448 | https://github.com/daernsinstantfortress/cupra_we_connect | Archived, pushed 2026-07-13 | Upstream repository is archived. | home-assistant/brands#11332 |
| `cursbnr` | home-assistant/brands#6370 | https://github.com/cnecrea/cursbnr | Active, pushed 2026-09-22 | Upstream repository already ships local brand assets in `custom_components/cursbnr/brand/`. | home-assistant/brands#11332 |
| `custom_universal_media_player` | home-assistant/brands#5848 | https://github.com/bastgau/ha-custom-universal-media-player | Active, pushed 2026-10-16 | Upstream repository already ships local brand assets in `custom_components/custom_universal_media_player/brand/`. | home-assistant/brands#11332 |
| `dawarich` | home-assistant/brands#6384 | https://github.com/AlbinLind/dawarich-home-assistant | Active, pushed 2026-09-08 | Upstream repository already ships local brand assets in `custom_components/dawarich/brand/`. | home-assistant/brands#11332 |
| `db_info` | home-assistant/brands#8183 | https://github.com/EiS94/db_info | Active, pushed 2026-10-13 | Upstream repository already ships local brand assets in `custom_components/db_info/brand/`. | home-assistant/brands#11332 |
| `db_infoscreen` | home-assistant/brands#6406 | https://github.com/FaserF/ha-db_infoscreen | Active, pushed 2026-10-17 | Upstream repository already ships local brand assets in `custom_components/db_infoscreen/brand/`. | home-assistant/brands#11332 |
| `deebot` | home-assistant/brands#2327 | https://github.com/And3rsL/Deebot-for-Home-Assistant | Archived, pushed 2022-03-07 | Upstream repository is archived. | home-assistant/brands#11332 |
| `deutschebahn` | home-assistant/brands#3643 | https://github.com/FaserF/ha-deutschebahn | Archived, pushed 2025-01-21 | Upstream repository is archived. | home-assistant/brands#11332 |
| `dimplex` | home-assistant/brands#9698 | https://github.com/KRoperUK/dimplex-controller-hass | Active, pushed 2026-10-18 | Upstream repository already ships local brand assets in `custom_components/dimplex/brand/`. | home-assistant/brands#11332 |
| `drag_and_drop_card_backend` | home-assistant/brands#7973 | https://github.com/Prosono/Drag-And-Drop-Card-Backend | Active, pushed 2026-08-29 | Upstream repository already ships local brand assets in `custom_components/drag_and_drop_card_backend/brand/`. | home-assistant/brands#11332 |
| `duux_fan_local` | home-assistant/brands#7499 | https://github.com/LouisR-git/duux-fan-local | Active, pushed 2026-10-18 | Upstream repository already ships local brand assets in `custom_components/duux_fan_local/brand/`. | home-assistant/brands#11332 |
| `dynamic_energy_contract_calculator` | home-assistant/brands#7492 | https://github.com/bvweerd/dynamic_energy_contract_calculator | Active, pushed 2026-10-09 | Upstream repository already ships local brand assets in `custom_components/dynamic_energy_contract_calculator/brand/`. | home-assistant/brands#11332 |
| `ecoflow` | home-assistant/brands#3357 | https://github.com/vwt12eh8/hassio-ecoflow | Archived, pushed 2023-05-04 | Upstream repository is archived. | home-assistant/brands#11332 |
| `ecoflow_river3_plus` | home-assistant/brands#9511 | https://github.com/makerwolf/ecoflow-river3-plus-usb | Active, pushed 2026-10-18 | Upstream repository already ships local brand assets in `custom_components/ecoflow_river3_plus/brand/`. | home-assistant/brands#11332 |
| `ekz_tariffs` | home-assistant/brands#8855 | https://github.com/schmidtfx/ekz-tariffs | Active, pushed 2026-09-14 | Upstream repository already ships local brand assets in `custom_components/ekz_tariffs/brand/`. | home-assistant/brands#11332 |
| `elevenlabs_tts` | home-assistant/brands#4809 | https://github.com/carleeno/elevenlabs_tts | Archived, pushed 2025-06-20 | Upstream repository is archived. | home-assistant/brands#11332 |
| `elnur_gabarron` | home-assistant/brands#9559 | https://github.com/fr33mang/homeassistant-elnur-gabarron | Active, pushed 2026-10-11 | Upstream repository already ships local brand assets in `custom_components/elnur_gabarron/brand/`. | home-assistant/brands#11332 |
| `emcd_pool` | home-assistant/brands#3598 | https://github.com/shammysha/homeassistant-emcd-pool | Archived, pushed 2022-10-09 | Upstream repository is archived. | home-assistant/brands#11332 |
| `emotiva_xmc` | home-assistant/brands#5301 | https://github.com/peteS-UK/xmc | Archived, pushed 2024-06-08 | Upstream repository is archived. | home-assistant/brands#11332 |
| `emulated_color_temp` | home-assistant/brands#2576 | https://github.com/Mr-Groch/HA-Emulated-Color-Temp-Light | Archived, pushed 2022-08-18 | Upstream repository is archived. | home-assistant/brands#11332 |
| `enecess` | home-assistant/brands#8872 | https://github.com/enecess/ha-enecess | Active, pushed 2026-10-18 | Upstream repository already ships local brand assets in `custom_components/enecess/brand/`. | home-assistant/brands#11332 |
| `enphase_ev` | home-assistant/brands#7908 | https://github.com/barneyonline/ha-enphase-ev-charger | Active, pushed 2026-10-18 | Upstream repository already ships local brand assets in `custom_components/enphase_ev/brand/`. | home-assistant/brands#11332 |
| `entity_ghost` | home-assistant/brands#7409 | https://github.com/HAEdwin/homeassistant-entity_ghost | Active, pushed 2026-09-12 | Upstream repository already ships local brand assets in `custom_components/entity_ghost/brand/`. | home-assistant/brands#11332 |
| `eon_energia` | home-assistant/brands#9007 | https://github.com/FezVrasta/eon-energia-italia-hass | Active, pushed 2026-09-25 | Upstream repository already ships local brand assets in `custom_components/eon_energia/brand/`. | home-assistant/brands#11332 |
| `eonromania` | home-assistant/brands#6371 | https://github.com/cnecrea/eonromania | Active, pushed 2026-09-22 | Upstream repository already ships local brand assets in `custom_components/eonromania/brand/`. | home-assistant/brands#11332 |
| `erovinieta` | home-assistant/brands#6372 | https://github.com/cnecrea/erovinieta | Active, pushed 2026-09-22 | Upstream repository already ships local brand assets in `custom_components/erovinieta/brand/`. | home-assistant/brands#11332 |
| `eta_webservices` | home-assistant/brands#8042 | https://github.com/Tidone/homeassistant_eta_integration | Active, pushed 2026-10-05 | Upstream repository already ships local brand assets in `custom_components/eta_webservices/brand/`. | home-assistant/brands#11332 |
| `ethermineinfo` | home-assistant/brands#2515 | https://github.com/ThomasPrior/EthermineInfo | Archived, pushed 2022-09-17 | Upstream repository is archived. | home-assistant/brands#11332 |
| `euribor_rates` | home-assistant/brands#4838 | https://github.com/jesmak/euribor_rates | Active, pushed 2026-10-12 | Upstream repository already ships local brand assets in `custom_components/euribor_rates/brand/`. | home-assistant/brands#11332 |
| `evcm` | home-assistant/brands#8399 | https://github.com/KriVaTri/EVCM | Active, pushed 2026-05-13 | Upstream repository already ships local brand assets in `custom_components/evcm/brand/`. | home-assistant/brands#11332 |
| `everhome` | home-assistant/brands#7575 | https://github.com/alexlenk/ha-everhome | Active, pushed 2026-03-29 | Upstream repository already ships local brand assets in `custom_components/everhome/brand/`. | home-assistant/brands#11332 |
| `exoy_one` | home-assistant/brands#5776 | https://github.com/Djelibeybi/hass-ExoyONE | Archived, pushed 2026-05-19 | Upstream repository is archived. | home-assistant/brands#11332 |
| `fado` | home-assistant/brands#9503 | https://github.com/clintongormley/ha-fado | Active, pushed 2026-10-05 | Upstream repository already ships local brand assets in `custom_components/fado/brand/`. | home-assistant/brands#11332 |
| `fenix_tft` | home-assistant/brands#8143 | https://github.com/baracudaz/fenix_tft | Active, pushed 2026-10-16 | Upstream repository already ships local brand assets in `custom_components/fenix_tft/brand/`. | home-assistant/brands#11332 |
| `fileflows` | home-assistant/brands#5567 | https://github.com/deosrc/home-assistant-fileflows | Archived, pushed 2024-06-10 | Upstream repository is archived. | home-assistant/brands#11332 |
| `flashforge_adventurer_4` | home-assistant/brands#4392 | https://github.com/darek-margas/hass-flashforge-adventurer-4 | Archived, pushed 2024-08-25 | Upstream repository is archived. | home-assistant/brands#11332 |
| `flitsmeister` | home-assistant/brands#5547 | https://github.com/DCSBL/home-assistant-flitsmeister | Archived, pushed 2024-06-08 | Upstream repository is archived. | home-assistant/brands#11332 |
| `fmd` | home-assistant/brands#8242 | https://github.com/devinslick/home-assistant-fmd | Active, pushed 2026-10-09 | Upstream repository already ships local brand assets in `custom_components/fmd/brand/`. | home-assistant/brands#11332 |
| `freebox_homexa` | home-assistant/brands#6573 | https://github.com/XAV59213/freebox_homexa | Active, pushed 2026-09-28 | Upstream repository already ships local brand assets in `custom_components/freebox_homexa/brand/`. | home-assistant/brands#11332 |
| `freesmsxa` | home-assistant/brands#7028 | https://github.com/XAV59213/freesmsxa | Active, pushed 2026-10-01 | Upstream repository already ships local brand assets in `custom_components/freesmsxa/brand/`. | home-assistant/brands#11332 |
| `froeling_lambdatronic_modbus` | home-assistant/brands#6589 | https://github.com/GyroGearl00se/hacs_froeling_lambdatronic_modbus | Active, pushed 2026-10-15 | Upstream repository already ships local brand assets in `custom_components/froeling_lambdatronic_modbus/brand/`. | home-assistant/brands#11332 |
| `fusionsolarplus` | home-assistant/brands#7239 | https://github.com/JortvanSchijndel/FusionSolarPlus | Active, pushed 2026-10-14 | Upstream repository already ships local brand assets in `custom_components/fusionsolarplus/brand/`. | home-assistant/brands#11332 |
| `gaggimate` | home-assistant/brands#9472 | https://github.com/gaggimate/ha-integration | Active, pushed 2026-09-22 | Upstream repository already ships local brand assets in `custom_components/gaggimate/brand/`. | home-assistant/brands#11332 |
| `gce_xdisplay_v2` | home-assistant/brands#6955 | https://github.com/Aohzan/hass-gce-xdisplay-v2 | Archived, pushed 2026-01-26 | Upstream repository is archived. | home-assistant/brands#11332 |
| `gooddriver` | home-assistant/brands#4036 | https://github.com/dscao/gooddriver | Archived, pushed 2023-11-21 | Upstream repository is archived. | home-assistant/brands#11332 |
| `google_fit` | home-assistant/brands#4261 | https://github.com/YorkshireIoT/ha-google-fit | Archived, pushed 2025-03-11 | Upstream repository is archived. | home-assistant/brands#11332 |
| `gree_hp` | home-assistant/brands#7331 | https://github.com/crazyfacka/gree_hp | Archived, pushed 2026-01-15 | Upstream repository is archived. | home-assistant/brands#11332 |
| `grohe_sense` | home-assistant/brands#5941 | https://github.com/Flo-Schilli/homeassistant-grohe_sense | Archived, pushed 2025-02-02 | Upstream repository is archived. | home-assistant/brands#11332 |
| `groheblue` | home-assistant/brands#5987 | https://github.com/koproductions-code/ha-groheblue | Archived, pushed 2025-01-16 | Upstream repository is archived. | home-assistant/brands#11332 |
| `groq_tts` | home-assistant/brands#7296 | https://github.com/barneyonline/groq_tts | Archived, pushed 2026-05-09 | Upstream repository is archived. | home-assistant/brands#11332 |
| `gtfs_realtime` | home-assistant/brands#6219 | https://github.com/bcpearce/homeassistant-gtfs-realtime | Active, pushed 2026-10-01 | Upstream repository already ships local brand assets in `custom_components/gtfs_realtime/brand/`. | home-assistant/brands#11332 |
| `guardsaas_events` | home-assistant/brands#7100 | https://github.com/alexanderznamensky/guardsaas-events | Active, pushed 2026-05-13 | Upstream repository already ships local brand assets in `custom_components/guardsaas_events/brand/`. | home-assistant/brands#11332 |
| `ha_registry` | home-assistant/brands#4061 | https://github.com/amosyuen/ha-registry | Archived, pushed 2025-09-05 | Upstream repository is archived. | home-assistant/brands#11332 |
| `ha_washdata` | home-assistant/brands#8920 | https://github.com/3dg1luk43/ha_washdata | Active, pushed 2026-10-08 | Upstream repository already ships local brand assets in `custom_components/ha_washdata/brand/`. | home-assistant/brands#11332 |
| `hass_dyson` | home-assistant/brands#7880 | https://github.com/cmgrayb/hass-dyson | Active, pushed 2026-10-18 | Upstream repository already ships local brand assets in `custom_components/hass_dyson/brand/`. | home-assistant/brands#11332 |
| `hass_hjq` | home-assistant/brands#6007 | https://github.com/XiaoMiku01/hass-hjq | Archived, pushed 2025-01-20 | Upstream repository is archived. | home-assistant/brands#11332 |
| `hcu_integration` | home-assistant/brands#8413 | https://github.com/Ediminator/hacs-homematicip-hcu | Active, pushed 2026-10-18 | Upstream repository already ships local brand assets in `custom_components/hcu_integration/brand/`. | home-assistant/brands#11332 |
| `heidelberg_energy_control` | home-assistant/brands#9571 | https://github.com/Schrolli91/heidelberg_energy_control | Active, pushed 2026-08-27 | Upstream repository already ships local brand assets in `custom_components/heidelberg_energy_control/brand/`. | home-assistant/brands#11332 |
| `helios_vallox_ventilation` | home-assistant/brands#6223 | https://github.com/Tom-Bom-badil/home-assistant_helios-vallox | Active, pushed 2026-10-01 | Upstream repository already ships local brand assets in `custom_components/helios_vallox_ventilation/brand/`. | home-assistant/brands#11332 |
| `hidroelectrica` | home-assistant/brands#6373 | https://github.com/cnecrea/hidroelectrica | Active, pushed 2026-09-22 | Upstream repository already ships local brand assets in `custom_components/hidroelectrica/brand/`. | home-assistant/brands#11332 |
| `hildebrandglow_dcc` | home-assistant/brands#2898 | https://github.com/ColinRobbins/ha-hildebrandglow-dcc | Archived, pushed 2022-11-04 | Upstream repository is archived. | home-assistant/brands#11332 |
| `hitachi_yutaki` | home-assistant/brands#6101 | https://github.com/alepee/hass-hitachi_yutaki | Active, pushed 2026-10-18 | Upstream repository already ships local brand assets in `custom_components/hitachi_yutaki/brand/`. | home-assistant/brands#11332 |
| `home_organizer` | home-assistant/brands#9514 | https://github.com/GuyAzria/home-organizer | Active, pushed 2026-10-14 | Upstream repository already ships local brand assets in `custom_components/home_organizer/brand/`. | home-assistant/brands#11332 |
| `homeassistantedupage` | home-assistant/brands#6072 | https://github.com/rine77/homeassistantedupage | Active, pushed 2026-10-14 | Upstream repository already ships local brand assets in `custom_components/homeassistantedupage/brand/`. | home-assistant/brands#11332 |
| `homebrainz` | home-assistant/brands#8064 | https://github.com/11ado33/ha-homebrainz-integration | Active, pushed 2026-10-18 | Upstream repository already ships local brand assets in `custom_components/homebrainz/brand/`. | home-assistant/brands#11332 |
| `homebridge_monitor` | home-assistant/brands#8773 | https://github.com/Geek-MD/Homebridge_Monitor | Active, pushed 2026-05-14 | Upstream repository already ships local brand assets in `custom_components/homebridge_monitor/brand/`. | home-assistant/brands#11332 |
| `honda_recall_check` | home-assistant/brands#6178 | https://github.com/Danieldiazi/honda_recall_check | Archived, pushed 2025-09-28 | Upstream repository is archived. | home-assistant/brands#11332 |
| `hunterdouglas_powerview_ble` | home-assistant/brands#6256 | https://github.com/patman15/hdpv_ble | Archived, pushed 2026-08-02 | Upstream repository is archived. | home-assistant/brands#11332 |
| `icsee_ptz` | home-assistant/brands#5129 | https://github.com/dbuezas/icsee-ptz | Active, pushed 2026-10-17 | Upstream repository already ships local brand assets in `custom_components/icsee_ptz/brand/`. | home-assistant/brands#11332 |
| `inmet_alertas` | home-assistant/brands#6313 | https://github.com/roalvesrj/hacs-inmet-alertas | Active, pushed 2026-10-09 | Upstream repository already ships local brand assets in `custom_components/inmet_alertas/brand/`. | home-assistant/brands#11332 |
| `isitpayday` | home-assistant/brands#6617 | https://github.com/UnoSite/IsItPayday | Active, pushed 2026-10-14 | Upstream repository already ships local brand assets in `custom_components/isitpayday/brand/`. | home-assistant/brands#11332 |
| `isolarcloud` | home-assistant/brands#6704 | https://github.com/bugjam/hass-isolarcloud | Active, pushed 2026-09-19 | Upstream repository already ships local brand assets in `custom_components/isolarcloud/brand/`. | home-assistant/brands#11332 |
| `itho_amber` | home-assistant/brands#5622 | https://github.com/remmob/itho_amber | Active, pushed 2026-09-11 | Upstream repository already ships local brand assets in `custom_components/itho_amber/brand/`. | home-assistant/brands#11332 |
| `iungo` | home-assistant/brands#7335 | https://github.com/dhover/ha-iungo | Active, pushed 2026-09-15 | Upstream repository already ships local brand assets in `custom_components/iungo/brand/`. | home-assistant/brands#11332 |
| `izypower_cloud` | home-assistant/brands#9582 | https://github.com/StefanPlizga/izypower_cloud | Active, pushed 2026-10-15 | Upstream repository already ships local brand assets in `custom_components/izypower_cloud/brand/`. | home-assistant/brands#11332 |
| `jvc_projectors` | home-assistant/brands#5219 | https://github.com/iloveicedgreentea/jvc_homeassistant | Archived, pushed 2026-03-18 | Upstream repository is archived. | home-assistant/brands#11332 |
| `kidde` | home-assistant/brands#4907 | https://github.com/865charlesw/homeassistant-kidde | Archived, pushed 2024-04-12 | Upstream repository is archived. | home-assistant/brands#11332 |
| `kidschores` | home-assistant/brands#6341 | https://github.com/ad-ha/kidschores-ha | Archived, pushed 2026-03-13 | Upstream repository is archived. | home-assistant/brands#11332 |
| `kore_wireless` | home-assistant/brands#8944 | https://github.com/manjotsc/ha-kore_wireless | Active, pushed 2026-07-22 | Upstream repository already ships local brand assets in `custom_components/kore_wireless/brand/`. | home-assistant/brands#11332 |
| `krado` | home-assistant/brands#5722 | https://github.com/natekspencer/hacs-krado | Active, pushed 2026-10-11 | Upstream repository already ships local brand assets in `custom_components/krado/brand/`. | home-assistant/brands#11332 |
| `label_state` | home-assistant/brands#7168 | https://github.com/andrew-codechimp/HA-Label-State | Active, pushed 2026-10-16 | Upstream repository already ships local brand assets in `custom_components/label_state/brand/`. | home-assistant/brands#11332 |
| `leasing_tracker` | home-assistant/brands#9523 | https://github.com/FoxXxHater/leasing-tracker | Active, pushed 2026-09-18 | Upstream repository already ships local brand assets in `custom_components/leasing_tracker/brand/`. | home-assistant/brands#11332 |
| `librespeed` | home-assistant/brands#7835 | https://github.com/gtxaspec/librespeed-ha | Active, pushed 2026-03-05 | Upstream repository already ships local brand assets in `custom_components/librespeed/brand/`. | home-assistant/brands#11332 |
| `lifesmart` | home-assistant/brands#4738 | https://github.com/iKaew/hass-lifesmart-addon | Active, pushed 2026-10-16 | Upstream repository already ships local brand assets in `custom_components/lifesmart/brand/`. | home-assistant/brands#11332 |
| `lifetime_fitness` | home-assistant/brands#3206 | https://github.com/GuyLewin/home-assistant-lifetime-fitness | Archived, pushed 2025-06-18 | Upstream repository is archived. | home-assistant/brands#11332 |
| `lifx_ceiling` | home-assistant/brands#7441 | https://github.com/Djelibeybi/hass-lifx-ceiling | Active, pushed 2026-10-08 | Upstream repository already ships local brand assets in `custom_components/lifx_ceiling/brand/`. | home-assistant/brands#11332 |
| `lksystems` | home-assistant/brands#6668 | https://github.com/angoyd/ha-lksystems | Active, pushed 2026-10-12 | Upstream repository already ships local brand assets in `custom_components/lksystems/brand/`. | home-assistant/brands#11332 |
| `logger_manager` | home-assistant/brands#8391 | https://github.com/gunnjr/ha-logger-manager | Active, pushed 2026-04-16 | Upstream repository already ships local brand assets in `custom_components/logger_manager/brand/`. | home-assistant/brands#11332 |
| `lun_misto_air` | home-assistant/brands#5719 | https://github.com/denysdovhan/ha-lun-misto-air | Active, pushed 2026-10-05 | Upstream repository already ships local brand assets in `custom_components/lun_misto_air/brand/`. | home-assistant/brands#11332 |
| `magentatv` | home-assistant/brands#6583 | https://github.com/Xyaren/homeassistant-magentatv | Archived, pushed 2025-09-26 | Upstream repository is archived. | home-assistant/brands#11332 |
| `magic_caster_wand` | home-assistant/brands#9016 | https://github.com/eigger/hass-magic-caster-wand | Active, pushed 2026-10-17 | Upstream repository already ships local brand assets in `custom_components/magic_caster_wand/brand/`. | home-assistant/brands#11332 |
| `material_symbols` | home-assistant/brands#5990 | https://github.com/beecho01/material-symbols | Active, pushed 2026-10-09 | Upstream repository already ships local brand assets in `custom_components/material_symbols/brand/`. | home-assistant/brands#11332 |
| `max_min` | home-assistant/brands#9129 | https://github.com/PacmanForever/max_min | Active, pushed 2026-10-18 | Upstream repository already ships local brand assets in `custom_components/max_min/brand/`. | home-assistant/brands#11332 |
| `meetnet_vlaamse_banken` | home-assistant/brands#8725 | https://github.com/eliaslecomte/meetnet-vlaamse-banken | Active, pushed 2026-09-20 | Upstream repository already ships local brand assets in `custom_components/meetnet_vlaamse_banken/brand/`. | home-assistant/brands#11332 |
| `melcloud_fixed` | home-assistant/brands#7681 | https://github.com/brouwerict/ha-melcloud-swing-fix | Active, pushed 2026-07-08 | Upstream repository already ships local brand assets in `custom_components/melcloud_fixed/brand/`. | home-assistant/brands#11332 |
| `member_adjacency` | home-assistant/brands#9111 | https://github.com/1bobby-git/HA-Member-Adjacency | Active, pushed 2026-09-30 | Upstream repository already ships local brand assets in `custom_components/member_adjacency/brand/`. | home-assistant/brands#11332 |
| `meridian_energy` | home-assistant/brands#4891 | https://github.com/codyc1515/ha-meridian-energy | Archived, pushed 2024-10-06 | Upstream repository is archived. | home-assistant/brands#11332 |
| `mikucare` | home-assistant/brands#4087 | https://github.com/amosyuen/ha-mikucare | Archived, pushed 2025-09-04 | Upstream repository is archived. | home-assistant/brands#11332 |
| `minecraft_profile` | home-assistant/brands#4638 | https://github.com/allenporter/home-assistant-minecraft-profile | Archived, pushed 2025-11-10 | Upstream repository is archived. | home-assistant/brands#11332 |
| `mipc_camera` | home-assistant/brands#4667 | https://github.com/0xybo/homeassistant-mipc-camera | Archived, pushed 2024-03-24 | Upstream repository is archived. | home-assistant/brands#11332 |
| `mosenergosbyt` | home-assistant/brands#1691 | https://github.com/alryaz/hass-mosenergosbyt | Archived, pushed 2021-06-16 | Upstream repository is archived. | home-assistant/brands#11332 |
| `music_assistant_jukebox` | home-assistant/brands#7229 | https://github.com/DJS91/HAMusicAssistantJukebox | Archived, pushed 2026-03-11 | Upstream repository is archived. | home-assistant/brands#11332 |
| `myair` | home-assistant/brands#1776 | https://github.com/Bre77/myair | Archived, pushed 2021-04-28 | Upstream repository is archived. | home-assistant/brands#11332 |
| `myedenred` | home-assistant/brands#3484 | https://github.com/netsoft-ruidias/ha-custom-component-myedenred | Archived, pushed 2023-05-08 | Upstream repository is archived. | home-assistant/brands#11332 |
| `myskoda` | home-assistant/brands#5840 | https://github.com/Prior99/myskoda | Archived, pushed 2024-09-12 | Upstream repository is archived. | home-assistant/brands#11332 |
| `nibe` | home-assistant/brands#1923 | https://github.com/elupus/hass_nibe | Archived, pushed 2024-12-03 | Upstream repository is archived. | home-assistant/brands#11332 |
| `nicehash` | home-assistant/brands#2276 | https://github.com/RomRider/ha_nicehash | Archived, pushed 2023-11-06 | Upstream repository is archived. | home-assistant/brands#11332 |
| `nrg_gyms` | home-assistant/brands#9642 | https://github.com/KRoperUK/nrg-gyms-hass | Archived, pushed 2026-09-20 | Upstream repository is archived. | home-assistant/brands#11332 |
| `o2` | home-assistant/brands#5364 | https://github.com/dan-r/HomeAssistant-O2 | Archived, pushed 2024-04-26 | Upstream repository is archived. | home-assistant/brands#11332 |
| `ollama_conversation` | home-assistant/brands#4854 | https://github.com/ej52/hass-ollama-conversation | Archived, pushed 2024-06-17 | Upstream repository is archived. | home-assistant/brands#11332 |
| `olympics_2026` | home-assistant/brands#9512 | https://github.com/crom1e/olympics_2026 | Archived, pushed 2026-02-09 | Upstream repository is archived. | home-assistant/brands#11332 |
| `openclaw_conversation` | home-assistant/brands#9402 | https://github.com/Djelibeybi/openclaw_conversation | Archived, pushed 2026-02-08 | Upstream repository is archived. | home-assistant/brands#11332 |
| `owlet` | home-assistant/brands#4349 | https://github.com/RyanClark123/owlet | Archived, pushed 2025-04-15 | Upstream repository is archived. | home-assistant/brands#11332 |
| `petlibro` | home-assistant/brands#5777 | https://github.com/flifloo/ha_petlibro | Archived, pushed 2025-03-29 | Upstream repository is archived. | home-assistant/brands#11332 |
| `pfsense_gateways` | home-assistant/brands#1970 | https://github.com/nagyrobi/home-assistant-custom-components-pfsense-gateways | Archived, pushed 2022-03-07 | Upstream repository is archived. | home-assistant/brands#11332 |
| `phyn` | home-assistant/brands#4033 | https://github.com/MizterB/homeassistant-phyn | Archived, pushed 2025-08-31 | Upstream repository is archived. | home-assistant/brands#11332 |
| `pollens` | home-assistant/brands#3537 | https://github.com/chris60600/pollens-home-assistant | Archived, pushed 2025-03-28 | Upstream repository is archived. | home-assistant/brands#11332 |
| `qmdevha` | home-assistant/brands#7996 | https://github.com/QuickMadeSimulation/QmdevHA | Archived, pushed 2025-10-29 | Upstream repository is archived. | home-assistant/brands#11332 |
| `sdnotify` | home-assistant/brands#3135 | https://github.com/brianegge/home-assistant-sdnotify | Archived, pushed 2026-10-01 | Upstream repository is archived. | home-assistant/brands#11332 |
| `senso4s` | home-assistant/brands#5673 | https://github.com/jpmeijers/senso4s-home-assistant | Archived, pushed 2026-07-10 | Upstream repository is archived. | home-assistant/brands#11332 |
| `smartthings_find` | home-assistant/brands#5497 | https://github.com/Vedeneb/HA-SmartThings-Find | Archived, pushed 2024-09-11 | Upstream repository is archived. | home-assistant/brands#11332 |
| `smartwb` | home-assistant/brands#5904 | https://github.com/DominikWrobel/SmartWB | Archived, pushed 2026-05-13 | Upstream repository is archived. | home-assistant/brands#11332 |
| `somfy_protexial` | home-assistant/brands#4351 | https://github.com/the8tre/somfy-protexial | Archived, pushed 2026-08-05 | Upstream repository is archived. | home-assistant/brands#11332 |
| `spotify_plus` | home-assistant/brands#4347 | https://github.com/hokiebrian/spotify_plus | Archived, pushed 2025-01-13 | Upstream repository is archived. | home-assistant/brands#11332 |
| `stackspot` | home-assistant/brands#7419 | https://github.com/alves-dev/stackspot-homeassistant | Archived, pushed 2026-03-13 | Upstream repository is archived. | home-assistant/brands#11332 |
| `tami4edge` | home-assistant/brands#3599 | https://github.com/0xAlon/hass-tami4edge | Archived, pushed 2025-09-05 | Upstream repository is archived. | home-assistant/brands#11332 |
| `ticktick` | home-assistant/brands#8835 | https://github.com/marco308/HA_ticktick | Archived, pushed 2026-08-22 | Upstream repository is archived. | home-assistant/brands#11332 |
| `tinxy` | home-assistant/brands#4138 | https://github.com/arevindh/tinxy-hacs | Archived, pushed 2026-03-07 | Upstream repository is archived. | home-assistant/brands#11332 |
| `tk_husteblume` | home-assistant/brands#5283 | https://github.com/artspb/homeassistant-tk-husteblume | Archived, pushed 2026-04-05 | Upstream repository is archived. | home-assistant/brands#11332 |
| `torque_logger` | home-assistant/brands#6188 | https://github.com/DominikWrobel/homeassistant-torque | Archived, pushed 2026-10-02 | Upstream repository is archived. | home-assistant/brands#11332 |
| `tuya_openapi` | home-assistant/brands#5297 | https://github.com/EvanSchalton/tuya-homeassistant-openapi | Archived, pushed 2025-06-13 | Upstream repository is archived. | home-assistant/brands#11332 |
| `uhooair` | home-assistant/brands#8500 | https://github.com/getuhoo/uhooair-homeassistant | Archived, pushed 2026-10-06 | Upstream repository is archived. | home-assistant/brands#11332 |
| `unifi_ap_led` | home-assistant/brands#7364 | https://github.com/omgitslurch/hass-unifi-ap-led | Archived, pushed 2025-12-12 | Upstream repository is archived. | home-assistant/brands#11332 |
| `v2c_trydan` | home-assistant/brands#4242 | https://github.com/Rain1971/V2C_trydant | Archived, pushed 2026-04-03 | Upstream repository is archived. | home-assistant/brands#11332 |
| `virginmedia_tv` | home-assistant/brands#3468 | https://github.com/uvjim/virginmedia_tv | Archived, pushed 2023-05-08 | Upstream repository is archived. | home-assistant/brands#11332 |
| `voice_flow` | home-assistant/brands#6114 | https://github.com/anthonymkz/Voice-Flow | Archived, pushed 2024-11-17 | Upstream repository is archived. | home-assistant/brands#11332 |
| `volvooncall_cn_aaos` | home-assistant/brands#6753 | https://github.com/chliny/hass-volvooncall-cn-aaos | Archived, pushed 2025-03-22 | Upstream repository is archived. | home-assistant/brands#11332 |
| `vrr` | home-assistant/brands#7290 | https://github.com/NerdySoftPaw/VRRAPI-HACS | Archived, pushed 2026-01-22 | Upstream repository is archived. | home-assistant/brands#11332 |
| `whats_up_docker` | home-assistant/brands#6793 | https://github.com/SisyphusMD/whats_up_docker | Archived, pushed 2026-07-26 | Upstream repository is archived. | home-assistant/brands#11332 |
| `xsense` | home-assistant/brands#5419 | https://github.com/Elwinmage/ha-xsense-component | Archived, pushed 2024-10-14 | Upstream repository is archived. | home-assistant/brands#11332 |
| `xtool` | home-assistant/brands#6318 | https://github.com/BassXT/xtool | Archived, pushed 2026-05-04 | Upstream repository is archived. | home-assistant/brands#11332 |
| `yandex_smart_home` | home-assistant/brands#1699 | https://github.com/alryaz/hass-component-yandex-smart-home | Archived, pushed 2021-11-14 | Upstream repository is archived. | home-assistant/brands#11332 |
| `zadnego_ale` | home-assistant/brands#2366 | https://github.com/bieniu/ha-zadnego-ale | Archived, pushed 2023-04-28 | Upstream repository is archived. | home-assistant/brands#11332 |
| `ab_gateway` | home-assistant/brands#3920 | https://github.com/AprilBrother/component-ab-gateway | Active, pushed 2024-09-26 | Upstream merged our brand images (AprilBrother/component-ab-gateway#2). |  |
| `abc_council_bin_collection` | home-assistant/brands#7050 | https://github.com/jordanhinks/abc_council_bin_collection | Active, pushed 2026-10-13 | Upstream merged our brand images (jordanhinks/abc_council_bin_collection#22). |  |
| `abetterrouteplanner` | home-assistant/brands#8526 | https://github.com/jannis3005/hass-abrp | Active, pushed 2026-09-28 | Upstream already ships local brand assets in `custom_components/abetterrouteplanner/brand/`. |  |
| `actec` | home-assistant/brands#6767 | https://github.com/AcTECElectronics/ha_actec_home | Active, pushed 2025-06-19 | Upstream merged our brand images (AcTECElectronics/ha_actec_home#1). |  |
| `actronair_neo` | home-assistant/brands#5818 | https://github.com/domalab/ha-actronair-neo | Active, pushed 2026-10-16 | Upstream merged our brand images (tinkerologie/ha-actronair-neo#192). |  |
| `acwd` | home-assistant/brands#8657 | https://github.com/funkadelic/ha-acwd | Active, pushed 2026-10-18 | Upstream merged our brand images (funkadelic/ha-acwd#137). |  |
| `adaptive_lighting` | home-assistant/brands#2727 | https://github.com/basnijholt/adaptive-lighting | Active, pushed 2026-10-12 | Upstream merged our brand images (basnijholt/adaptive-lighting#1643). |  |
| `advanced_snapshot` | home-assistant/brands#6594 | https://github.com/Phil7989/advanced_snapshot | Active, pushed 2026-01-12 | Upstream merged our brand images (Phil7989/advanced_snapshot#15). |  |
| `affalddk` | home-assistant/brands#5261 | https://github.com/briis/affalddk | Active, pushed 2026-10-13 | Upstream merged our brand images (briis/affalddk#463). |  |
| `afvalbeheer` | home-assistant/brands#7114 | https://github.com/pippyn/Home-Assistant-Sensor-Afvalbeheer | Active, pushed 2026-10-13 | Upstream merged our brand images (pippyn/Home-Assistant-Sensor-Afvalbeheer#753). |  |
| `afvalwijzer` | home-assistant/brands#1851 | https://github.com/xirixiz/homeassistant-afvalwijzer | Unavailable | Upstream already ships local brand assets in `custom_components/afvalwijzer/brand/`. |  |
| `agui_agent` | home-assistant/brands#9041 | https://github.com/contextablemark/home-agui-agent | Active, pushed 2026-10-17 | Upstream merged our brand images (contextablemark/home-agui-agent#124). |  |
| `airahome` | home-assistant/brands#8252 | https://github.com/Invy55/Ha-AiraHome | Active, pushed 2026-09-14 | Upstream merged our brand images (Invy55/ha-airahome#29). |  |
| `airtouch2` | home-assistant/brands#5997 | https://github.com/nathanvdh/homeassistant-airtouch2 | Active, pushed 2025-01-14 | Upstream merged our brand images (nathanvdh/homeassistant-airtouch2#25). |  |
| `airtouch4_advanced` | home-assistant/brands#6699 | https://github.com/doenau/airtouch4 | Active, pushed 2026-09-24 | Upstream merged our brand images (0xAHA/airtouch4_advanced#18). |  |
| `amazon_cloudwatch` | home-assistant/brands#4922 | https://github.com/Mallonbacka/custom-component-cloudwatch | Active, pushed 2026-10-13 | Upstream merged our brand images (Mallonbacka/custom-component-cloudwatch#207). |  |
| `ambeo_soundbar` | home-assistant/brands#5226 | https://github.com/faizpuru/ha-ambeo_soundbar | Active, pushed 2026-10-09 | Upstream merged our brand images (faizpuru/ha-ambeo_soundbar#118). |  |
| `amber_express` | home-assistant/brands#9356 | https://github.com/hass-energy/amber-express | Active, pushed 2026-10-18 | Upstream merged our brand images (hass-energy/amber-express#101). |  |
| `amberelectric_usages` | home-assistant/brands#6215 | https://github.com/Tmbao/amberelectric-usages | Active, pushed 2026-07-13 | Upstream merged our brand images (Tmbao/amberelectric-usages#14). |  |
| `ambient_music` | home-assistant/brands#7778 | https://github.com/connochio/ambient_music | Active, pushed 2026-04-29 | Upstream merged our brand images (connochio/ambient_music#67). |  |
| `andersen_ev` | home-assistant/brands#6896 | https://github.com/lwsrbrts/hassio-andersen-ev | Unavailable | Upstream already ships local brand assets in `custom_components/andersen_ev/brand/`. |  |
| `anker_solix` | home-assistant/brands#5263 | https://github.com/thomluther/hacs-anker-solix | Unavailable | Upstream already ships local brand assets in `custom_components/anker_solix/brand/`. |  |
| `anniversary` | home-assistant/brands#2746 | https://github.com/amaximus/anniversary | Active, pushed 2026-09-21 | Upstream merged our brand images (amaximus/anniversary#25). |  |
| `apsystems_ecu_proxy` | home-assistant/brands#6026 | https://github.com/HAEdwin/homeassistant-apsystems_ecu_proxy | Active, pushed 2025-08-25 | Upstream merged our brand images (HAEdwin/homeassistant-apsystems_ecu_proxy#22). |  |
| `apsystems_ecu_reader` | home-assistant/brands#6516 | https://github.com/HAEdwin/homeassistant-apsystems_ecu_reader | Active, pushed 2026-09-03 | Upstream merged our brand images (HAEdwin/homeassistant-apsystems_ecu_reader#166). |  |
| `arctic_spa` | home-assistant/brands#9771 | https://github.com/jensenbox/ha-arctic-spa | Unavailable | Upstream already ships local brand assets in `custom_components/arctic_spa/brand/`. |  |
| `arso_potresi` | home-assistant/brands#6613 | https://github.com/andrejs2/arso_potresi | Active, pushed 2026-03-13 | Upstream merged our brand images (andrejs2/arso_potresi#12). |  |
| `asterisk_call_status` | home-assistant/brands#4559 | https://github.com/bkbilly/asterisk_call_status | Active, pushed 2024-01-29 | Upstream merged our brand images (bkbilly/asterisk_call_status#9). |  |
| `asterisk` | home-assistant/brands#3296 | https://github.com/TECH7Fox/asterisk-hass-integration | Active, pushed 2026-04-15 | Upstream merged our brand images (TECH7Fox/asterisk-hass-integration#130). |  |
| `asusrouter` | home-assistant/brands#3366 | https://github.com/Vaskivskyi/ha-asusrouter | Active, pushed 2026-10-15 | Upstream merged our brand images (Vaskivskyi/ha-asusrouter#1428). |  |
| `atmo` | home-assistant/brands#4556 | https://github.com/natekspencer/hacs-atmo | Unavailable | Upstream already ships local brand assets in `custom_components/atmo/brand/`. |  |
| `atmos_energy` | home-assistant/brands#9526 | https://github.com/Valdorama/ha-atmos-energy-sensor | Active, pushed 2026-09-25 | Upstream merged our brand images (Valdorama/ha-atmos-energy-sensor#6). |  |
| `atrea` | home-assistant/brands#3633 | https://github.com/JurajNyiri/HomeAssistant-Atrea | Active, pushed 2026-07-27 | Upstream merged our brand images (JurajNyiri/HomeAssistant-Atrea#47). |  |
| `attribute_as_sensor` | home-assistant/brands#4916 | https://github.com/gjohansson-ST/attribute_as_sensor | Active, pushed 2026-10-09 | Upstream merged our brand images (gjohansson-ST/attribute_as_sensor#87). |  |
| `attributes` | home-assistant/brands#2320 | https://github.com/pilotak/homeassistant-attributes | Active, pushed 2026-07-21 | Upstream merged our brand images (pilotak/homeassistant-attributes#64). |  |
| `audioflow` | home-assistant/brands#4619 | https://github.com/siku2/hass-audioflow | Active, pushed 2026-08-07 | Upstream merged our brand images (siku2/hass-audioflow#22). |  |
| `autoarm` | home-assistant/brands#8545 | https://github.com/rhizomatics/autoarm | Unavailable | Upstream already ships local brand assets in `custom_components/autoarm/brand/`. |  |
| `autopi` | home-assistant/brands#7543 | https://github.com/rknightion/autopi-ha | Active, pushed 2026-10-15 | Upstream merged our brand images (rknightion/autopi-ha#432). |  |
| `aux_cloud` | home-assistant/brands#6874 | https://github.com/maeek/ha-aux-cloud | Active, pushed 2026-09-13 | Upstream merged our brand images (maeek/ha-aux-cloud#91). |  |
| `avalon_nano3s` | home-assistant/brands#9596 | https://github.com/jinx-22/avalon_nano3s | Unavailable | Upstream already ships local brand assets in `custom_components/avalon_nano3s/brand/`. |  |
| `ave_dominaplus` | home-assistant/brands#7039 | https://github.com/emmeoerre/ave_dominaplus | Active, pushed 2026-10-12 | Upstream merged our brand images (emmeoerre/ave_dominaplus#37). |  |
| `aviationweather` | home-assistant/brands#7300 | https://github.com/eduwardpost/aviation-weather | Active, pushed 2026-09-14 | Upstream merged our brand images (eduwardpost/aviation-weather#28). |  |
| `awox` | home-assistant/brands#2102 | https://github.com/fsaris/home-assistant-awox | Active, pushed 2026-06-14 | Upstream merged our brand images (fsaris/home-assistant-awox#130). |  |
| `awtrix` | home-assistant/brands#6801 | https://github.com/MiguelAngelLV/ha-awtrix | Active, pushed 2026-04-26 | Upstream merged our brand images (miguelangellv/ha-awtrix#36). |  |
| `basestation` | home-assistant/brands#5187 | https://github.com/MineTech13/homeassistant-basestation | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/basestation/brand/`. |  |
| `battery_monitor` | home-assistant/brands#9334 | https://github.com/DomoticaFacile/battery_monitor | Active, pushed 2026-10-08 | Upstream merged our brand images (DomoticaFacile/battery_monitor#16). |  |
| `bcnn` | home-assistant/brands#5523 | https://github.com/Muxee4ka/hass-bcnn | Active, pushed 2026-05-24 | Upstream merged our brand images (Muxee4ka/hass-bcnn#7). |  |
| `becker_centralcontrol_has` | home-assistant/brands#6692 | https://github.com/DominikStarke/becker_centralcontrol_has | Active, pushed 2026-10-12 | Upstream merged our brand images (DominikStarke/becker_centralcontrol_has#30). |  |
| `bedrock_server_manager` | home-assistant/brands#7025 | https://github.com/DMedina559/bsm-home-assistant-integration | Active, pushed 2026-10-18 | Upstream merged our brand images (DMedina559/bsm-home-assistant-integration#28). |  |
| `bergfex` | home-assistant/brands#8307 | https://github.com/timmaurice/bergfex | Unavailable | Upstream already ships local brand assets in `custom_components/bergfex/brand/`. |  |
| `bettercozylife` | home-assistant/brands#6550 | https://github.com/IIRoan/bettercozylife | Active, pushed 2026-02-06 | Upstream merged our brand images (IIRoan/bettercozylife#16). |  |
| `bezeq_energy` | home-assistant/brands#6031 | https://github.com/GuyKh/bezeq-energy-custom-component | Active, pushed 2026-10-15 | Upstream merged our brand images (GuyKh/bezeq-energy-custom-component#178). |  |
| `bibliotek_dk` | home-assistant/brands#8754 | https://github.com/TermeHansen/Bibliotek_dk | Active, pushed 2026-10-11 | Upstream merged our brand images (TermeHansen/Bibliotek_dk#14). |  |
| `bj_led` | home-assistant/brands#5241 | https://github.com/8none1/bj_led | Active, pushed 2024-03-23 | Upstream merged our brand images (8none1/bj_led#9). |  |
| `bjsy_water_gas` | home-assistant/brands#5626 | https://github.com/jianyun8023/bjsy_water_gas | Active, pushed 2024-12-22 | Upstream merged our brand images (jianyun8023/bjsy_water_gas#1). |  |
| `blauberg_s21` | home-assistant/brands#5007 | https://github.com/jvitkauskas/homeassistant_blauberg_s21 | Unavailable | Upstream already ships local brand assets in `custom_components/blauberg_s21/brand/`. |  |
| `blebox_shutterbox_tilt` | home-assistant/brands#3480 | https://github.com/andrzejchm/blebox_shutterbox_tilt | Active, pushed 2025-06-13 | Upstream merged our brand images (andrzejchm/blebox_shutterbox_tilt#241). |  |
| `bloomin8_pull` | home-assistant/brands#8979 | https://github.com/fwmone/bloomin8_pull | Active, pushed 2026-09-26 | Upstream merged our brand images (fwmone/bloomin8_pull#2). |  |
| `bluebubbles` | home-assistant/brands#7744 | https://github.com/helv-io/ha-bluebubbles | Active, pushed 2026-10-17 | Upstream merged our brand images (helv-io/ha-bluebubbles#31). |  |
| `bluesound_alt` | home-assistant/brands#5171 | https://github.com/aunefyren/bluesound_alt | Active, pushed 2026-10-12 | Upstream merged our brand images (aunefyren/bluesound_alt#18). |  |
| `bodymiscale` | home-assistant/brands#2818 | https://github.com/dckiller51/bodymiscale | Active, pushed 2026-10-15 | Upstream merged our brand images (dckiller51/bodymiscale#472). |  |
| `bodypetscale` | home-assistant/brands#7021 | https://github.com/dckiller51/bodypetscale | Active, pushed 2026-10-16 | Upstream merged our brand images (dckiller51/bodypetscale#113). |  |
| `boneco` | home-assistant/brands#6660 | https://github.com/DeKaN/ha-boneco | Active, pushed 2026-03-09 | Upstream merged our brand images (DeKaN/ha-boneco#24). |  |
| `brewcreator` | home-assistant/brands#6262 | https://github.com/bjorncs/ha-brewcreator | Active, pushed 2025-06-24 | Upstream merged our brand images (bjorncs/ha-brewcreator#4). |  |
| `bring_shopping` | home-assistant/brands#8929 | https://github.com/costantinoai/bring-widget-hacs | Active, pushed 2026-07-03 | Upstream merged our brand images (costantinoai/bring-shopping-card#4). |  |
| `broetje_heating` | home-assistant/brands#9598 | https://github.com/henrywiechert/ha-broetje | Active, pushed 2026-10-13 | Upstream merged our brand images (henrywiechert/ha-broetje#36). |  |
| `bromic_smart_heat_link` | home-assistant/brands#7970 | https://github.com/bharat/homeassistant-bromic-smart-heat-link | Active, pushed 2026-10-15 | Upstream merged our brand images (bharat/homeassistant-bromic-smart-heat-link#121). |  |
| `browser_mod` | home-assistant/brands#3298 | https://github.com/thomasloven/hass-browser_mod | Active, pushed 2026-10-07 | Upstream merged our brand images (thomasloven/hass-browser_mod#1400). |  |
| `bureau_of_meteorology` | home-assistant/brands#1983 | https://github.com/bremor/bureau_of_meteorology | Active, pushed 2026-10-18 | Upstream merged our brand images (bremor/bureau_of_meteorology#323). |  |
| `bwt_perla` | home-assistant/brands#5027 | https://github.com/dkarv/hacs-bwt-perla | Active, pushed 2026-09-27 | Upstream merged our brand images (dkarv/ha-bwt-perla#63). |  |
| `byd_vehicle` | home-assistant/brands#9530 | https://github.com/jkaberg/hass-byd-vehicle | Active, pushed 2026-10-18 | Upstream merged our brand images (jkaberg/hass-byd-vehicle#200). |  |
| `calendar_merge` | home-assistant/brands#5670 | https://github.com/kgn3400/calendar_merge | Unavailable | Upstream already ships local brand assets in `custom_components/calendar_merge/brand/`. |  |
| `cardata` | home-assistant/brands#8642 | https://github.com/kvanbiesen/bmw-cardata-ha | Unavailable | Upstream already ships local brand assets in `custom_components/cardata/brand/`. |  |
| `cardiffwaste` | home-assistant/brands#3100 | https://github.com/TomBrien/cardiffwaste-ha | Active, pushed 2026-06-23 | Upstream merged our brand images (TomBrien/cardiffwaste-ha#46). |  |
| `ccei_tild` | home-assistant/brands#4878 | https://github.com/brenard/ccei-tild-custom-component | Active, pushed 2026-10-12 | Upstream merged our brand images (brenard/ccei-tild-custom-component#78). |  |
| `celcat_calendar` | home-assistant/brands#6653 | https://github.com/etiennec78/ha-celcat | Active, pushed 2026-04-06 | Upstream merged our brand images (etiennec78/ha-celcat#15). |  |
| `chameleon` | home-assistant/brands#8638 | https://github.com/MKSG-MugunthKumar/ha-chameleon | Active, pushed 2026-10-14 | Upstream merged our brand images (MKSG-MugunthKumar/ha-chameleon#9). |  |
| `chinese_calendar` | home-assistant/brands#7795 | https://github.com/knoop7/ha_laohuangli | Active, pushed 2026-02-16 | Upstream merged our brand images (knoop7/ha_laohuangli#15). |  |
| `chitubox_printer` | home-assistant/brands#6480 | https://github.com/bushvin/hass_chitubox_printer | Active, pushed 2026-08-27 | Upstream merged our brand images (bushvin/hass_chitubox_printer#7). |  |
| `chmu` | home-assistant/brands#8484 | https://github.com/lipelix/home-assistant-chmu-weather | Active, pushed 2026-10-14 | Upstream merged our brand images (lipelix/home-assistant-chmu-weather#33). |  |
| `chroma` | home-assistant/brands#3652 | https://github.com/Vaskivskyi/ha-chroma | Active, pushed 2026-10-14 | Upstream merged our brand images (Vaskivskyi/ha-chroma#107). |  |
| `city_visitor_parking` | home-assistant/brands#9048 | https://github.com/sir-Unknown/ha_City-Visitor-Parking | Unavailable | Upstream already ships local brand assets in `custom_components/city_visitor_parking/brand/`. |  |
| `cloudlibrary` | home-assistant/brands#4993 | https://github.com/geertmeersman/cloudlibrary | Active, pushed 2026-08-18 | Upstream merged our brand images (geertmeersman/cloudlibrary#156). |  |
| `color_notify` | home-assistant/brands#7127 | https://github.com/cobryan05/ha-color-notify | Active, pushed 2026-10-16 | Upstream merged our brand images (cobryan05/ha-color-notify#23). |  |
| `combivox_web` | home-assistant/brands#9362 | https://github.com/stich86/ha-combivox-web | Unavailable | Upstream already ships local brand assets in `custom_components/combivox_web/brand/`. |  |
| `commax_iot` | home-assistant/brands#8751 | https://github.com/yoonpooh/homeassistant-commax-iot | Unavailable | Upstream already ships local brand assets in `custom_components/commax_iot/brand/`. |  |
| `compal_wifi` | home-assistant/brands#2297 | https://github.com/frimtec/hass-compal-wifi | Active, pushed 2026-10-18 | Upstream merged our brand images (frimtec/hass-compal-wifi#64). |  |
| `companion_media_player` | home-assistant/brands#9656 | https://github.com/echocat/ha-companion-media-player | Active, pushed 2026-08-12 | Upstream merged our brand images (echocat/ha-companion-media-player#18). |  |
| `comwatt` | home-assistant/brands#4859 | https://github.com/MateoGreil/homeassistant-comwatt | Active, pushed 2026-10-12 | Upstream merged our brand images (MateoGreil/homeassistant-comwatt#58). |  |
| `connectivity_monitor` | home-assistant/brands#6155 | https://github.com/joshburkard/ConnectivityMonitor | Unavailable | Upstream already ships local brand assets in `custom_components/connectivity_monitor/brand/`. |  |
| `connectlife` | home-assistant/brands#5435 | https://github.com/oyvindwe/connectlife-ha | Unavailable | Upstream already ships local brand assets in `custom_components/connectlife/brand/`. |  |
| `control4_mediaplayer` | home-assistant/brands#7956 | https://github.com/OtisPresley/control4-mediaplayer | Active, pushed 2026-10-04 | Upstream already ships local brand assets in `custom_components/control4_mediaplayer/brand/`. |  |
| `control_my_spa` | home-assistant/brands#7152 | https://github.com/haresik/Hares-ControlMySpa | Active, pushed 2026-09-30 | Upstream merged our brand images (haresik/Hares-ControlMySpa#52). |  |
| `coverflex` | home-assistant/brands#3496 | https://github.com/netsoft-ruidias/ha-custom-component-coverflex | Unavailable | Upstream already ships local brand assets in `custom_components/coverflex/brand/`. |  |
| `creality_box_control` | home-assistant/brands#6029 | https://github.com/pcartwright81/creality_box_control | Active, pushed 2026-10-18 | Upstream merged our brand images (pcartwright81/creality_box_control#204). |  |
| `ctek_nanogrid_air` | home-assistant/brands#8782 | https://github.com/FreshJonte/CTEK-Nanogrid-Air | Active, pushed 2026-09-29 | Upstream merged our brand images (FreshJonte/CTEK-Nanogrid-Air#12). |  |
| `cummins_generator` | home-assistant/brands#7867 | https://github.com/mswilson/cummins-hass-integration | Unavailable | Upstream already ships local brand assets in `custom_components/cummins_generator/brand/`. |  |
| `custom_ambilight` | home-assistant/brands#5349 | https://github.com/aegjoyce/custom-ambilight | Active, pushed 2026-10-14 | Upstream merged our brand images (aegjoyce/custom-ambilight#12). |  |
| `dabpumps` | home-assistant/brands#4972 | https://github.com/ankohanse/hass-dab-pumps | Active, pushed 2026-10-15 | Upstream merged our brand images (ankohanse/hass-dab-pumps#115). |  |
| `dahua` | home-assistant/brands#2606 | https://github.com/rroller/dahua | Unavailable | Upstream already ships local brand assets in `custom_components/dahua/brand/`. |  |
| `daikin_onecta` | home-assistant/brands#5232 | https://github.com/jwillemsen/daikin_onecta | Unavailable | Upstream already ships local brand assets in `custom_components/daikin_onecta/brand/`. |  |
| `daikinskyport` | home-assistant/brands#4677 | https://github.com/apetrycki/daikinskyport | Active, pushed 2026-10-18 | Upstream merged our brand images (apetrycki/daikinskyport#161). |  |
| `danalock_cloud` | home-assistant/brands#7010 | https://github.com/furth3st/ha-danalock-cloud | Active, pushed 2025-07-01 | Upstream merged our brand images (furth3st/ha-danalock-cloud#13). |  |
| `danfoss_ally` | home-assistant/brands#2118 | https://github.com/MTrab/danfoss_ally | Active, pushed 2026-10-14 | Upstream merged our brand images (MTrab/danfoss_ally#433). |  |
| `dashie` | home-assistant/brands#9133 | https://github.com/jwlerch78/dashie-ha-integration | Unavailable | Upstream already ships local brand assets in `custom_components/dashie/brand/`. |  |
| `defa_power` | home-assistant/brands#6038 | https://github.com/Bebbssos/ha-defa-power | Active, pushed 2026-10-16 | Upstream merged our brand images (Bebbssos/ha-defa-power#32). |  |
| `degree_days` | home-assistant/brands#5064 | https://github.com/Ernst79/degree-days | Active, pushed 2026-08-14 | Upstream merged our brand images (Ernst79/degree-days#50). |  |
| `dess_monitor` | home-assistant/brands#7115 | https://github.com/Antoxa1081/home-assistant-dess-monitor | Active, pushed 2026-05-29 | Upstream merged our brand images (Antoxa1081/home-assistant-dess-monitor#97). |  |
| `device_tools` | home-assistant/brands#5436 | https://github.com/eulemitkeule/device-tools | Active, pushed 2026-09-25 | Upstream merged our brand images (EuleMitKeule/device-tools#85). |  |
| `dewpoint` | home-assistant/brands#8171 | https://github.com/andrewjswan/home-assistant-dewpoint | Active, pushed 2025-10-14 | Upstream merged our brand images (andrewjswan/home-assistant-dewpoint#2). |  |
| `deye_cloud` | home-assistant/brands#9667 | https://github.com/brettmeyerowitz/deye_cloud | Active, pushed 2026-02-16 | Upstream merged our brand images (brettmeyerowitz/deye_cloud#12). |  |
| `deye_dehumidifier` | home-assistant/brands#4221 | https://github.com/stackia/ha-deye-dehumidifier | Unavailable | Upstream already ships local brand assets in `custom_components/deye_dehumidifier/brand/`. |  |
| `diematic_3_c230_eco` | home-assistant/brands#3818 | https://github.com/IgnacioHR/de-dietrich-c230-ha | Active, pushed 2024-11-22 | Upstream merged our brand images (IgnacioHR/de-dietrich-c230-ha#1). |  |
| `discord_game` | home-assistant/brands#5380 | https://github.com/LordBoos/discord_game | Active, pushed 2026-10-09 | Upstream merged our brand images (LordBoos/discord_game#86). |  |
| `display_tools` | home-assistant/brands#8233 | https://github.com/alaltitov/homeassistant-display-tools | Active, pushed 2026-10-03 | Upstream merged our brand images (alaltitov/homeassistant-display-tools#7). |  |
| `divera247` | home-assistant/brands#6531 | https://github.com/Loony2392/ha_hacs_divera_247 | Active, pushed 2026-09-19 | Upstream merged our brand images (Loony2392/ha_hacs_divera_247#173). |  |
| `divoom_pixoo` | home-assistant/brands#4887 | https://github.com/gickowtf/pixoo-homeassistant | Active, pushed 2026-09-30 | Upstream merged our brand images (gickowtf/pixoo-homeassistant#165). |  |
| `divoom` | home-assistant/brands#5337 | https://github.com/d03n3rfr1tz3/hass-divoom | Active, pushed 2026-10-18 | Upstream merged our brand images (d03n3rfr1tz3/hass-divoom#93). |  |
| `domintell_ecopilot` | home-assistant/brands#8229 | https://github.com/Domintell/ha_domintell_ecopilot | Active, pushed 2026-02-09 | Upstream merged our brand images (Domintell/ha_domintell_ecopilot#1). |  |
| `domintell` | home-assistant/brands#6828 | https://github.com/Domintell/hacs_domintell | Active, pushed 2026-09-22 | Upstream merged our brand images (Domintell/ha_domintell#19). |  |
| `domonap` | home-assistant/brands#6428 | https://github.com/svmironov/domonap_intercom | Active, pushed 2026-09-17 | Upstream merged our brand images (svmironov/domonap_intercom#30). |  |
| `dreame_mower` | home-assistant/brands#7878 | https://github.com/antondaubert/dreame-mower | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/dreame_mower/brand/`. |  |
| `drinkaware` | home-assistant/brands#6921 | https://github.com/B-Hartley/drinkaware | Active, pushed 2025-04-23 | Upstream merged our brand images (B-Hartley/drinkaware#11). |  |
| `dropboxbackup` | home-assistant/brands#7079 | https://github.com/jasonwragg/HA-Dropbox-Backup | Active, pushed 2026-04-01 | Upstream merged our brand images (jasonwragg/HA-Dropbox-Backup#35). |  |
| `dummy_tracker` | home-assistant/brands#7066 | https://github.com/zubir2k/homeassistant-dummytracker | Active, pushed 2025-05-20 | Upstream merged our brand images (zubir2k/homeassistant-dummytracker#1). |  |
| `dvla` | home-assistant/brands#4079 | https://github.com/jampez77/DVLA-Vehicle-Enquiry-Service | Active, pushed 2026-10-07 | Upstream merged our brand images (jampez77/DVLA-Vehicle-Enquiry-Service#49). |  |
| `dwd_precipitation` | home-assistant/brands#7484 | https://github.com/Hoffmann77/ha-dwd-precipitation | Active, pushed 2026-10-18 | Upstream merged our brand images (Hoffmann77/ha-dwd-precipitation#126). |  |
| `dynamic_energy_cost` | home-assistant/brands#6413 | https://github.com/martinarva/dynamic_energy_cost | Unavailable | Upstream already ships local brand assets in `custom_components/dynamic_energy_cost/brand/`. |  |
| `easyathome` | home-assistant/brands#9495 | https://github.com/chmielowiec/hass-easyathome | Active, pushed 2026-10-14 | Upstream merged our brand images (chmielowiec/hass-easyathome#63). |  |
| `ecobulles` | home-assistant/brands#7216 | https://github.com/jul-fls/ha_ecobulles | Unavailable | Upstream already ships local brand assets in `custom_components/ecobulles/brand/`. |  |
| `ecocompteur` | home-assistant/brands#5943 | https://github.com/AlexandreFournier/ha-ecocompteur | Active, pushed 2026-05-15 | Upstream merged our brand images (AlexandreFournier/ha-ecocompteur#130). |  |
| `ecodevices` | home-assistant/brands#2203 | https://github.com/Aohzan/ecodevices | Active, pushed 2026-10-14 | Upstream merged our brand images (Aohzan/ecodevices#73). |  |
| `ecole_directe` | home-assistant/brands#5281 | https://github.com/hacf-fr/hass-ecoledirecte | Active, pushed 2026-10-17 | Upstream merged our brand images (hacf-fr/hass-ecoledirecte#329). |  |
| `ecovent_v2` | home-assistant/brands#4150 | https://github.com/gody01/ecovent_v2 | Active, pushed 2026-10-15 | Upstream merged our brand images (gody01/ecovent_v2#123). |  |
| `edge_tts` | home-assistant/brands#3452 | https://github.com/hasscc/hass-edge-tts | Active, pushed 2026-10-13 | Upstream merged our brand images (hasscc/hass-edge-tts#84). |  |
| `eeveemobility` | home-assistant/brands#4837 | https://github.com/geertmeersman/eeveemobility | Active, pushed 2026-08-18 | Upstream already ships local brand assets in `custom_components/eeveemobility/brand/`. |  |
| `ef_ble` | home-assistant/brands#5918 | https://github.com/rabits/ha-ef-ble | Active, pushed 2026-10-17 | Upstream merged our brand images (rabits/ha-ef-ble#534). |  |
| `effektguard` | home-assistant/brands#8216 | https://github.com/enoch85/EffektGuard | Active, pushed 2026-10-18 | Upstream merged our brand images (enoch85/EffektGuard#56). |  |
| `eg4_web_monitor` | home-assistant/brands#7893 | https://github.com/joyfulhouse/eg4_web_monitor | Active, pushed 2026-10-14 | Upstream merged our brand images (joyfulhouse/eg4_web_monitor#669). |  |
| `egddistribuce` | home-assistant/brands#4743 | https://github.com/Antrac1t/HomeAssistant-EGDdistribuce | Active, pushed 2026-04-09 | Upstream merged our brand images (Antrac1t/HomeAssistant-EGDdistribuce#67). |  |
| `einskomma5grad` | home-assistant/brands#6116 | https://github.com/BirknerAlex/hacs_1komma5grad | Active, pushed 2026-10-02 | Upstream merged our brand images (BirknerAlex/ha-1komma5grad#56). |  |
| `elegoo_printer` | home-assistant/brands#6597 | https://github.com/danielcherubini/elegoo-homeassistant | Active, pushed 2026-10-11 | Upstream merged our brand images (danielcherubini/elegoo-homeassistant#434). |  |
| `elero` | home-assistant/brands#8085 | https://github.com/W00D00/home-assistant-elero | Active, pushed 2025-07-23 | Upstream merged our brand images (W00D00/home-assistant-elero#55). |  |
| `elk_bledob` | home-assistant/brands#5240 | https://github.com/8none1/elk-bledob | Active, pushed 2026-05-23 | Upstream merged our brand images (8none1/elk-bledob#6). |  |
| `elkbledom` | home-assistant/brands#3445 | https://github.com/dave-code-ruiz/elkbledom-ha | Active, pushed 2026-10-13 | Upstream merged our brand images (dave-code-ruiz/elkbledom#161). |  |
| `ember_mug` | home-assistant/brands#4140 | https://github.com/sopelj/hass-ember-mug-component | Active, pushed 2026-10-17 | Upstream merged our brand images (sopelj/hass-ember-mug-component#169). |  |
| `energa_mobile` | home-assistant/brands#8819 | https://github.com/ergo5/hass-energa-my-meter-api | Active, pushed 2026-09-10 | Upstream merged our brand images (ergo5/hass-energa-my-meter-api#39). |  |
| `energy_tracker` | home-assistant/brands#9217 | https://github.com/energy-tracker/home-assistant-energy-tracker | Active, pushed 2026-09-30 | Upstream merged our brand images (energy-tracker/home-assistant-energy-tracker#11). |  |
| `enpal_webparser` | home-assistant/brands#7023 | https://github.com/derolli1976/enpal | Active, pushed 2026-09-27 | Upstream merged our brand images (derolli1976/enpal#193). |  |
| `enphase_battery` | home-assistant/brands#8262 | https://github.com/foXaCe/enphase-battery | Active, pushed 2026-10-15 | Upstream merged our brand images (foXaCe/enphase-battery#40). |  |
| `entur_sx` | home-assistant/brands#8218 | https://github.com/jm-cook/entur_situation_exchange_custom_integration | Unavailable | Upstream already ships local brand assets in `custom_components/entur_sx/brand/`. |  |
| `epa_uvindex` | home-assistant/brands#4400 | https://github.com/davidn/epa_uvindex | Active, pushed 2024-05-10 | Upstream merged our brand images (davidn/epa_uvindex#8). |  |
| `eplucon` | home-assistant/brands#5799 | https://github.com/koenhendriks/ha-eplucon | Active, pushed 2026-09-12 | Upstream merged our brand images (koenhendriks/ha-eplucon#40). |  |
| `epson_workforce` | home-assistant/brands#7792 | https://github.com/lymanepp/ha-epson-workforce | Unavailable | Upstream already ships local brand assets in `custom_components/epson_workforce/brand/`. |  |
| `eso` | home-assistant/brands#6784 | https://github.com/algirdasc/hass-eso | Active, pushed 2026-08-30 | Upstream merged our brand images (algirdasc/hass-eso#51). |  |
| `esolatgps` | home-assistant/brands#6089 | https://github.com/zubir2k/homeassistant-esolatgps | Unavailable | Upstream already ships local brand assets in `custom_components/esolatgps/brand/`. |  |
| `esolattakwim` | home-assistant/brands#6296 | https://github.com/zubir2k/homeassistant-esolattakwim | Unavailable | Upstream already ships local brand assets in `custom_components/esolattakwim/brand/`. |  |
| `evcc_intg` | home-assistant/brands#5483 | https://github.com/marq24/ha-evcc | Unavailable | Upstream already ships local brand assets in `custom_components/evcc_intg/brand/`. |  |
| `evse_load_balancer` | home-assistant/brands#7174 | https://github.com/dirkgroenen/hass-evse-load-balancer | Active, pushed 2026-09-23 | Upstream merged our brand images (dirkgroenen/hass-evse-load-balancer#99). |  |
| `evsemaster` | home-assistant/brands#9280 | https://github.com/RafaelSchridi/evsemaster-homeassistant | Active, pushed 2026-10-16 | Upstream already ships local brand assets in `custom_components/evsemaster/brand/`. |  |
| `ex_habridge` | home-assistant/brands#7454 | https://github.com/SenMorgan/EX-HABridge | Active, pushed 2026-08-01 | Upstream merged our brand images (SenMorgan/EX-HABridge#53). |  |
| `ferroamp` | home-assistant/brands#2377 | https://github.com/henricm/ha-ferroamp | Active, pushed 2026-10-16 | Upstream merged our brand images (henricm/ha-ferroamp#941). |  |
| `file_plusplus` | home-assistant/brands#5928 | https://github.com/benjamin-dcs/File-plusplus | Active, pushed 2025-12-19 | Upstream merged our brand images (benjamin-dcs/file-plusplus#21). |  |
| `filter_tracker` | home-assistant/brands#8459 | https://github.com/bhaggs/ha-filter-tracker | Active, pushed 2026-09-22 | Upstream merged our brand images (bhaggs/ha-filter-tracker#17). |  |
| `flashbird` | home-assistant/brands#6358 | https://github.com/gorfo66/flashbird-homeassistant | Active, pushed 2026-04-25 | Upstream merged our brand images (gorfo66/flashbird-homeassistant#17). |  |
| `flightradar24` | home-assistant/brands#4913 | https://github.com/AlexandrErohin/home-assistant-flightradar24 | Active, pushed 2026-10-06 | Upstream merged our brand images (AlexandrErohin/home-assistant-flightradar24#344). |  |
| `fnos` | home-assistant/brands#8672 | https://github.com/Timandes/fnos-home-assistant | Active, pushed 2026-07-15 | Upstream merged our brand images (Timandes/fnos-home-assistant#6). |  |
| `frankenergy` | home-assistant/brands#5759 | https://github.com/brunsy/ha-frankenergy | Active, pushed 2025-07-29 | Upstream merged our brand images (brunsy/ha-frankenergy#4). |  |
| `freebox_connect` | home-assistant/brands#8148 | https://github.com/foXaCe/Freebox-connect | Active, pushed 2026-10-14 | Upstream merged our brand images (foXaCe/Freebox-connect#11). |  |
| `frisquet_connect` | home-assistant/brands#5047 | https://github.com/TheGui01/Frisquet-connect-for-home-assistant | Active, pushed 2026-03-15 | Upstream merged our brand images (TheGui01/Frisquet-connect-for-home-assistant#84). |  |
| `frontend_translations` | home-assistant/brands#6841 | https://github.com/alaltitov/hacs-frontend-translations | Active, pushed 2025-05-18 | Upstream merged our brand images (alaltitov/homeassistant-frontend-translations#1). |  |
| `g4smobility` | home-assistant/brands#6145 | https://github.com/bkbilly/G4S-Mobility | Active, pushed 2025-06-07 | Upstream merged our brand images (bkbilly/G4S-Mobility#2). |  |
| `gaggiuino` | home-assistant/brands#6633 | https://github.com/ALERTua/hass-gaggiuino | Active, pushed 2026-10-13 | Upstream merged our brand images (ALERTua/hass-gaggiuino#79). |  |
| `gas_station_spain` | home-assistant/brands#4451 | https://github.com/MiguelAngelLV/gas_station_spain | Active, pushed 2026-04-04 | Upstream merged our brand images (miguelangellv/ha-gas-station-spain#57). |  |
| `ge_spot` | home-assistant/brands#6902 | https://github.com/enoch85/ge-spot | Active, pushed 2026-10-17 | Upstream merged our brand images (enoch85/ge-spot#115). |  |
| `geek_magic` | home-assistant/brands#9245 | https://github.com/aydarik/hass-geekmagic | Active, pushed 2026-10-01 | Upstream merged our brand images (aydarik/hass-geekmagic#11). |  |
| `generic_water_heater` | home-assistant/brands#3343 | https://github.com/dgomes/ha_generic_water_heater | Active, pushed 2026-03-21 | Upstream merged our brand images (dgomes/ha_generic_water_heater#13). |  |
| `geolocator` | home-assistant/brands#7012 | https://github.com/SmartyVan/hass-geolocator | Active, pushed 2025-06-01 | Upstream merged our brand images (SmartyVan/hass-geolocator#27). |  |
| `gif` | home-assistant/brands#7839 | https://github.com/helv-io/ha-gif | Active, pushed 2026-10-17 | Upstream merged our brand images (helv-io/ha-gif#9). |  |
| `glowdreaming` | home-assistant/brands#6685 | https://github.com/domness/ha_glowdreaming | Active, pushed 2026-04-07 | Upstream merged our brand images (domness/ha_glowdreaming#10). |  |
| `goecharger_api2` | home-assistant/brands#5411 | https://github.com/marq24/ha-goecharger-api2 | Unavailable | Upstream already ships local brand assets in `custom_components/goecharger_api2/brand/`. |  |
| `google_vertex_ai_conversation` | home-assistant/brands#5368 | https://github.com/caraar12345/home-assistant-google-vertex-ai-conversation | Active, pushed 2024-04-13 | Upstream merged our brand images (caraar12345/home-assistant-google-vertex-ai-conversation#1). |  |
| `goveelife` | home-assistant/brands#9452 | https://github.com/disforw/goveelife | Active, pushed 2026-09-08 | Upstream merged our brand images (disforw/goveelife#173). |  |
| `growatt_modbus` | home-assistant/brands#8076 | https://github.com/0xAHA/Growatt_ModbusTCP | Active, pushed 2026-10-18 | Upstream merged our brand images (0xAHA/Growatt_ModbusTCP#478). |  |
| `ha_blueair` | home-assistant/brands#3363 | https://github.com/dahlb/ha_blueair | Active, pushed 2026-10-15 | Upstream merged our brand images (dahlb/ha_blueair#433). |  |
| `ha_guest_mode` | home-assistant/brands#6107 | https://github.com/Darkdragon14/ha-guest-mode | Active, pushed 2026-10-01 | Upstream merged our brand images (Darkdragon14/ha-guest-mode#63). |  |
| `ha_link2home` | home-assistant/brands#5094 | https://github.com/ReneNulschDE/ha_link2home | Active, pushed 2025-08-01 | Upstream merged our brand images (ReneNulschDE/ha_link2home#13). |  |
| `ha_text_ai` | home-assistant/brands#6140 | https://github.com/smkrv/ha-text-ai | Unavailable | Upstream already ships local brand assets in `custom_components/ha_text_ai/brand/`. |  |
| `haeo` | home-assistant/brands#8450 | https://github.com/hass-energy/haeo | Active, pushed 2026-10-18 | Upstream merged our brand images (hass-energy/haeo#580). |  |
| `hailin` | home-assistant/brands#7675 | https://github.com/alkalixin/Hailin-Climate | Active, pushed 2026-03-24 | Upstream merged our brand images (alkalixin/Hailin-Climate#5). |  |
| `hass_pontos` | home-assistant/brands#5421 | https://github.com/sangvikh/hass-pontos | Active, pushed 2026-07-16 | Upstream merged our brand images (sangvikh/hass-pontos#54). |  |
| `hass_vivreco_pac` | home-assistant/brands#7425 | https://github.com/fab5741/hass-vivreco-pac | Active, pushed 2026-03-21 | Upstream merged our brand images (fab5741/hass-vivreco-pac#16). |  |
| `hass_web_proxy` | home-assistant/brands#6070 | https://github.com/dermotduffy/hass-web-proxy-integration | Active, pushed 2026-02-02 | Upstream merged our brand images (dermotduffy/hass-web-proxy-integration#146). |  |
| `hav_og_vind` | home-assistant/brands#9545 | https://github.com/Howard0000/home-assistant-hav-og-vind | Active, pushed 2026-02-14 | Upstream merged our brand images (Howard0000/home-assistant-hav-og-vind#2). |  |
| `hdc` | home-assistant/brands#4570 | https://github.com/caraar12345/hass-hdc-bin-collection | Active, pushed 2026-03-02 | Upstream merged our brand images (caraar12345/hass-hdc-bin-collection#4). |  |
| `healthchecksio` | home-assistant/brands#4764 | https://github.com/custom-components/healthchecksio | Active, pushed 2026-07-29 | Upstream merged our brand images (custom-components/healthchecksio#220). |  |
| `heatmiser_edge` | home-assistant/brands#7777 | https://github.com/sftgunner/heatmiseredge-integration | Active, pushed 2026-09-03 | Upstream merged our brand images (sftgunner/heatmiseredge-integration#16). |  |
| `heatmiserneo` | home-assistant/brands#1998 | https://github.com/MindrustUK/Heatmiser-for-home-assistant | Active, pushed 2026-10-12 | Upstream merged our brand images (MindrustUK/Heatmiser-for-home-assistant#368). |  |
| `heytech` | home-assistant/brands#6120 | https://github.com/ansgarschulte/heytech-homeassistant-integration | Active, pushed 2026-10-05 | Upstream merged our brand images (ansgarschulte/heytech-homeassistant-integration#143). |  |
| `higoal` | home-assistant/brands#6830 | https://github.com/Minitour/ha-higoal | Active, pushed 2026-08-25 | Upstream merged our brand images (Minitour/ha-higoal#70). |  |
| `hilighting_ble` | home-assistant/brands#5308 | https://github.com/8none1/hilighting_homeassistant | Active, pushed 2025-01-01 | Upstream merged our brand images (8none1/hilighting_homeassistant#5). |  |
| `home_generative_agent` | home-assistant/brands#7497 | https://github.com/goruck/home-generative-agent | Active, pushed 2026-10-18 | Upstream merged our brand images (goruck/home-generative-agent#818). |  |
| `home_project_ledger` | home-assistant/brands#9377 | https://github.com/FredrikElliot/home-project-ledger | Active, pushed 2026-10-17 | Upstream already ships local brand assets in `custom_components/home_project_ledger/brand/`. |  |
| `homewhiz` | home-assistant/brands#3655 | https://github.com/rowysock/home-assistant-HomeWhiz | Active, pushed 2026-10-17 | Upstream merged our brand images (home-assistant-HomeWhiz/home-assistant-HomeWhiz#497). |  |
| `homgar` | home-assistant/brands#9633 | https://github.com/brettmeyerowitz/homeassistant-homgar | Active, pushed 2026-10-11 | Upstream already ships local brand assets in `custom_components/homgar/brand/`. |  |
| `hyperspace_lighting` | home-assistant/brands#7018 | https://github.com/ToddAlvord/hyperspace-homeassistant | Active, pushed 2026-09-12 | Upstream merged our brand images (ToddAlvord/hyperspace-homeassistant#5). |  |
| `ialarm_controller` | home-assistant/brands#5973 | https://github.com/bigmoby/ialarm_controller | Active, pushed 2026-10-13 | Upstream merged our brand images (bigmoby/ialarm_controller#155). |  |
| `ialarm_mk2` | home-assistant/brands#6035 | https://github.com/mistermax80/ialarm_mk2 | Active, pushed 2026-10-15 | Upstream merged our brand images (mistermax80/ialarm_mk2#12). |  |
| `ideal_led` | home-assistant/brands#5031 | https://github.com/8none1/idealLED | Active, pushed 2026-07-10 | Upstream merged our brand images (8none1/idealLED#33). |  |
| `inpost_air` | home-assistant/brands#5407 | https://github.com/CyberDeer/InPost-Air | Active, pushed 2026-10-14 | Upstream merged our brand images (CyberDeer/InPost-Air#152). |  |
| `insnrg_chlorinator` | home-assistant/brands#6025 | https://github.com/Mattat01/ha-insnrg-chlorinator | Active, pushed 2026-07-02 | Upstream merged our brand images (Mattat01/insnrg_chlorinator#5). |  |
| `insta_follower` | home-assistant/brands#6210 | https://github.com/xamrex/Hacs_Insta_follower | Active, pushed 2025-02-14 | Upstream merged our brand images (xamrex/Hacs_Insta_follower#2). |  |
| `inteno` | home-assistant/brands#7582 | https://github.com/nielstron/inteno_hass | Active, pushed 2026-02-03 | Upstream merged our brand images (nielstron/inteno_hass#42). |  |
| `interpolation` | home-assistant/brands#9278 | https://github.com/JoshuaLampert/homeassistant-interpolation | Active, pushed 2026-07-17 | Upstream merged our brand images (JoshuaLampert/homeassistant-interpolation#4). |  |
| `iohouse_climate` | home-assistant/brands#6787 | https://github.com/insound/iohouse_climate | Active, pushed 2026-09-02 | Upstream merged our brand images (insound/iohouse_climate#5). |  |
| `iolite` | home-assistant/brands#4123 | https://github.com/inverse/home-assistant-iolite-component | Active, pushed 2026-02-08 | Upstream merged our brand images (inverse/home-assistant-iolite-component#36). |  |
| `irtrans` | home-assistant/brands#4107 | https://github.com/schwarzenbergf/irtrans | Active, pushed 2026-07-20 | Upstream merged our brand images (schwarzenbergf/irtrans#192). |  |
| `jebao_aqua` | home-assistant/brands#5132 | https://github.com/chrisc123/jebao_aqua-homeassistant | Active, pushed 2026-08-29 | Upstream merged our brand images (chrisc123/jebao_aqua-homeassistant#79). |  |
| `kamstrup_403` | home-assistant/brands#2787 | https://github.com/golles/ha-kamstrup_403 | Active, pushed 2026-10-18 | Upstream merged our brand images (golles/ha-kamstrup_403#393). |  |
| `keenetic_router_pro` | home-assistant/brands#9392 | https://github.com/cataseven/Keenetic-Router-Pro | Active, pushed 2026-10-10 | Upstream merged our brand images (cataseven/Keenetic-Router-Pro#75). |  |
| `kia_connect` | home-assistant/brands#3346 | https://github.com/PimDoos/kia_connect | Active, pushed 2024-07-06 | Upstream merged our brand images (PimDoos/kia_connect#23). |  |
| `kodi_recently_added` | home-assistant/brands#1871 | https://github.com/boralyl/kodi-recently-added | Active, pushed 2026-09-10 | Upstream merged our brand images (boralyl/kodi-recently-added#24). |  |
| `komfovent_c5` | home-assistant/brands#4614 | https://github.com/siku2/hass-komfovent-c5 | Active, pushed 2026-08-06 | Upstream merged our brand images (siku2/hass-komfovent-c5#83). |  |
| `leakbot` | home-assistant/brands#5248 | https://github.com/sHedC/homeassistant-leakbot | Unavailable | Upstream already ships local brand assets in `custom_components/leakbot/brand/`. |  |
| `ledble_ledlamp` | home-assistant/brands#5320 | https://github.com/8none1/ledble-ledlamp | Active, pushed 2026-09-02 | Upstream merged our brand images (8none1/ledble-ledlamp#7). |  |
| `leo_ntp` | home-assistant/brands#4406 | https://github.com/CumpsD/home-assistant-leo-ntp | Active, pushed 2024-11-11 | Upstream merged our brand images (CumpsD/home-assistant-leo-ntp#90). |  |
| `leslies_pool` | home-assistant/brands#5551 | https://github.com/connorgallopo/leslies-pool | Active, pushed 2026-05-12 | Upstream merged our brand images (connorgallopo/leslies-pool#176). |  |
| `leviton_decora_smart_wifi` | home-assistant/brands#4377 | https://github.com/schmittx/home-assistant-leviton_decora_smart_wifi | Unavailable | Upstream already ships local brand assets in `custom_components/leviton_decora_smart_wifi/brand/`. |  |
| `lifedomus` | home-assistant/brands#8669 | https://github.com/svalsemey/hassio-lifedomus | Unavailable | Upstream already ships local brand assets in `custom_components/lifedomus/brand/`. |  |
| `lights_app` | home-assistant/brands#6212 | https://github.com/JurajNyiri/HomeAssistant-Lights-App | Active, pushed 2025-12-08 | Upstream merged our brand images (JurajNyiri/HomeAssistant-Lights-App#24). |  |
| `listenbrainz` | home-assistant/brands#5112 | https://github.com/Weissnix4711/hass-listenbrainz | Active, pushed 2026-10-05 | Upstream merged our brand images (Weissnix4711/hass-listenbrainz#154). |  |
| `localvolts` | home-assistant/brands#7772 | https://github.com/gurrier/localvolts | Active, pushed 2026-10-17 | Upstream merged our brand images (gurrier/localvolts#26). |  |
| `lockly` | home-assistant/brands#9218 | https://github.com/bharat/homeassistant-lockly | Active, pushed 2026-10-15 | Upstream merged our brand images (bharat/homeassistant-lockly#186). |  |
| `luas` | home-assistant/brands#6442 | https://github.com/lutzky/hass-luas | Active, pushed 2026-10-02 | Upstream merged our brand images (lutzky/hass-luas#230). |  |
| `lyrion_cli` | home-assistant/brands#6781 | https://github.com/peteS-UK/lyrion_cli | Active, pushed 2026-01-22 | Upstream merged our brand images (peteS-UK/lyrion_cli#9). |  |
| `maestro_mcz` | home-assistant/brands#4095 | https://github.com/Crisicus/maestro_mcz | Active, pushed 2026-05-13 | Upstream merged our brand images (Robbe-B/maestro_mcz#221). |  |
| `mailcow_ha_custom` | home-assistant/brands#6630 | https://github.com/Master13011/Mailcow-HA | Active, pushed 2026-09-01 | Upstream merged our brand images (Master13011/Mailcow-HA#11). |  |
| `maintenance_supporter` | home-assistant/brands#9499 | https://github.com/iluebbe/maintenance_supporter | Active, pushed 2026-10-18 | Upstream merged our brand images (iluebbe/maintenance_supporter#224). |  |
| `malaysia_weather` | home-assistant/brands#6314 | https://github.com/zubir2k/homeassistant-malaysiaweather | Active, pushed 2026-04-21 | Upstream merged our brand images (zubir2k/homeassistant-malaysiaweather#5). |  |
| `mammotion` | home-assistant/brands#5507 | https://github.com/mikey0000/HA-Luba | Active, pushed 2026-10-17 | Upstream merged our brand images (mikey0000/Mammotion-HA#953). |  |
| `mass_queue` | home-assistant/brands#7560 | https://github.com/droans/mass_queue | Active, pushed 2026-09-08 | Upstream merged our brand images (droans/mass_queue#135). |  |
| `matkahuolto_tracking` | home-assistant/brands#4841 | https://github.com/jesmak/matkahuolto_tracking | Unavailable | Upstream already ships local brand assets in `custom_components/matkahuolto_tracking/brand/`. |  |
| `mawaqit` | home-assistant/brands#4673 | https://github.com/mawaqit/home-assistant | Unavailable | Upstream already ships local brand assets in `custom_components/mawaqit/brand/`. |  |
| `mcp2221` | home-assistant/brands#5107 | https://github.com/pilotak/homeassistant-mcp2221 | Active, pushed 2026-06-22 | Upstream merged our brand images (pilotak/homeassistant-mcp2221#13). |  |
| `mcp23017` | home-assistant/brands#3217 | https://github.com/jpcornil-git/HA-mcp23017 | Active, pushed 2026-07-05 | Upstream merged our brand images (jpcornil-git/HA-mcp23017#54). |  |
| `mitsubishi_matouch` | home-assistant/brands#6240 | https://github.com/cyaneous/mitsubishi_matouch | Active, pushed 2026-08-02 | Upstream already ships local brand assets in `custom_components/mitsubishi_matouch/brand/`. |  |
| `miwa` | home-assistant/brands#4352 | https://github.com/geertmeersman/miwa | Active, pushed 2026-08-18 | Upstream already ships local brand assets in `custom_components/miwa/brand/`. |  |
| `modbus_connect` | home-assistant/brands#6666 | https://github.com/dmatscheko/modbus_connect | Active, pushed 2026-10-08 | Upstream already ships local brand assets in `custom_components/modbus_connect/brand/`. |  |
| `monoprice_htp1` | home-assistant/brands#9120 | https://github.com/TimoJJ/ha-monolith-htp1 | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/monoprice_htp1/brand/`. |  |
| `moon_astro` | home-assistant/brands#7871 | https://github.com/svalsemey/hassio-moon-astro | Unavailable | Upstream already ships local brand assets in `custom_components/moon_astro/brand/`. |  |
| `mozillion` | home-assistant/brands#9193 | https://github.com/KRoperUK/mozillion-hass | Active, pushed 2026-10-17 | Upstream already ships local brand assets in `custom_components/mozillion/brand/`. |  |
| `mqtt_discoverystream_alt` | home-assistant/brands#5391 | https://github.com/RogerSelwyn/mqtt_discoverystream_ha | Active, pushed 2026-10-13 | Upstream already ships local brand assets in `custom_components/mqtt_discoverystream_alt/brand/`. |  |
| `ms365_calendar` | home-assistant/brands#5511 | https://github.com/RogerSelwyn/MS365-Calendar | Active, pushed 2026-10-15 | Upstream already ships local brand assets in `custom_components/ms365_calendar/brand/`. |  |
| `ms365_contacts` | home-assistant/brands#7019 | https://github.com/RogerSelwyn/MS365-Contacts | Active, pushed 2026-10-14 | Upstream already ships local brand assets in `custom_components/ms365_contacts/brand/`. |  |
| `ms365_mail` | home-assistant/brands#5540 | https://github.com/RogerSelwyn/MS365-Mail | Active, pushed 2026-10-14 | Upstream already ships local brand assets in `custom_components/ms365_mail/brand/`. |  |
| `ms365_teams` | home-assistant/brands#5662 | https://github.com/RogerSelwyn/MS365-Teams | Active, pushed 2026-10-14 | Upstream already ships local brand assets in `custom_components/ms365_teams/brand/`. |  |
| `ms365_todo` | home-assistant/brands#5526 | https://github.com/RogerSelwyn/MS365-ToDo | Active, pushed 2026-10-15 | Upstream already ships local brand assets in `custom_components/ms365_todo/brand/`. |  |
| `mspa` | home-assistant/brands#7587 | https://github.com/jm-cook/mspa-homeassistant | Unavailable | Upstream already ships local brand assets in `custom_components/mspa/brand/`. |  |
| `myelectrica` | home-assistant/brands#6375 | https://github.com/cnecrea/myelectrica | Active, pushed 2026-09-22 | Upstream already ships local brand assets in `custom_components/myelectrica/brand/`. |  |
| `mysmartbike` | home-assistant/brands#5095 | https://github.com/ReneNulschDE/ha-mysmartbike | Active, pushed 2026-10-13 | Upstream already ships local brand assets in `custom_components/mysmartbike/brand/`. |  |
| `nextenergy_battery` | home-assistant/brands#8156 | https://github.com/wimb0/home-assistant-nextenergy-battery-modbus | Unavailable | Upstream already ships local brand assets in `custom_components/nextenergy_battery/brand/`. |  |
| `nexxtmove` | home-assistant/brands#4286 | https://github.com/geertmeersman/nexxtmove | Active, pushed 2026-10-14 | Upstream already ships local brand assets in `custom_components/nexxtmove/brand/`. |  |
| `norway_seaforecast` | home-assistant/brands#9248 | https://github.com/DTekNO/norway_seaforecast | Active, pushed 2026-06-16 | Upstream already ships local brand assets in `custom_components/norway_seaforecast/brand/`. |  |
| `nuvo_simple` | home-assistant/brands#5668 | https://github.com/brmccrary/nuvo_simple | Active, pushed 2026-10-16 | Upstream already ships local brand assets in `custom_components/nuvo_simple/brand/`. |  |
| `oasira_b2c` | home-assistant/brands#7826 | https://github.com/EffortlessHome/Oasira_B2C | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/oasira_b2c/brand/`. |  |
| `oasis_mini` | home-assistant/brands#5644 | https://github.com/natekspencer/hacs-oasis_mini | Unavailable | Upstream already ships local brand assets in `custom_components/oasis_mini/brand/`. |  |
| `ocado` | home-assistant/brands#7056 | https://github.com/PineappleEmperor/ocado-ha | Active, pushed 2026-10-12 | Upstream already ships local brand assets in `custom_components/ocado/brand/`. |  |
| `ochsner_local_ots` | home-assistant/brands#9175 | https://github.com/permissionBRICK/OTS-HomeAssistant | Unavailable | Upstream already ships local brand assets in `custom_components/ochsner_local_ots/brand/`. |  |
| `octopus_french` | home-assistant/brands#7842 | https://github.com/domodom30/ha-octopus-french | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/octopus_french/brand/`. |  |
| `octopus_germany` | home-assistant/brands#6572 | https://github.com/thecem/octopus_germany | Active, pushed 2026-10-14 | Upstream already ships local brand assets in `custom_components/octopus_germany/brand/`. |  |
| `octopus_spain` | home-assistant/brands#4396 | https://github.com/MiguelAngelLV/octopus_spain | Active, pushed 2026-10-08 | Upstream already ships local brand assets in `custom_components/octopus_spain/brand/`. |  |
| `ojmicroline_thermostat` | home-assistant/brands#4016 | https://github.com/robbinjanssen/home-assistant-ojmicroline-thermostat | Active, pushed 2026-10-17 | Upstream already ships local brand assets in `custom_components/ojmicroline_thermostat/brand/`. |  |
| `omnik_inverter` | home-assistant/brands#2850 | https://github.com/robbinjanssen/home-assistant-omnik-inverter | Active, pushed 2026-10-17 | Upstream already ships local brand assets in `custom_components/omnik_inverter/brand/`. |  |
| `omnilogic_local` | home-assistant/brands#4365 | https://github.com/cryptk/haomnilogic-local | Active, pushed 2026-09-07 | Upstream already ships local brand assets in `custom_components/omnilogic_local/brand/`. |  |
| `omnisense` | home-assistant/brands#6535 | https://github.com/sslivins/hass_omnisense | Unavailable | Upstream already ships local brand assets in `custom_components/omnisense/brand/`. |  |
| `omron` | home-assistant/brands#7391 | https://github.com/eigger/hass-omron | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/omron/brand/`. |  |
| `openai_whisper_cloud` | home-assistant/brands#5767 | https://github.com/fabio-garavini/ha-openai-whisper-stt-api | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/openai_whisper_cloud/brand/`. |  |
| `openems` | home-assistant/brands#6607 | https://github.com/Lamarqe/ha_openems | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/openems/brand/`. |  |
| `openwrt_mqtt` | home-assistant/brands#9538 | https://github.com/aldweb/ha-openwrt-mqtt | Active, pushed 2026-06-22 | Upstream already ships local brand assets in `custom_components/openwrt_mqtt/brand/`. |  |
| `opus_greennet` | home-assistant/brands#8590 | https://github.com/kegelmeier/opus_homeassistant | Unavailable | Upstream already ships local brand assets in `custom_components/opus_greennet/brand/`. |  |
| `palgate` | home-assistant/brands#6747 | https://github.com/ShonP40/ha-palgate | Active, pushed 2026-10-12 | Upstream already ships local brand assets in `custom_components/palgate/brand/`. |  |
| `pdf_scrape` | home-assistant/brands#7436 | https://github.com/iluvdata/pdf_scrape | Active, pushed 2026-09-17 | Upstream already ships local brand assets in `custom_components/pdf_scrape/brand/`. |  |
| `pdns` | home-assistant/brands#3524 | https://github.com/Cyr-ius/hass-pdns | Active, pushed 2026-10-10 | Upstream already ships local brand assets in `custom_components/pdns/brand/`. |  |
| `peloton` | home-assistant/brands#1837 | https://github.com/edwork/homeassistant-peloton-sensor | Active, pushed 2026-08-14 | Upstream already ships local brand assets in `custom_components/peloton/brand/`. |  |
| `periodic_min_max` | home-assistant/brands#6721 | https://github.com/andrew-codechimp/HA-Periodic-Min-Max | Active, pushed 2026-10-16 | Upstream already ships local brand assets in `custom_components/periodic_min_max/brand/`. |  |
| `phoenix_bad` | home-assistant/brands#6049 | https://github.com/FaserF/ha-phoenixbad | Active, pushed 2026-10-11 | Upstream already ships local brand assets in `custom_components/phoenix_bad/brand/`. |  |
| `pi_hole_v6` | home-assistant/brands#6642 | https://github.com/bastgau/ha-pi-hole-v6 | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/pi_hole_v6/brand/`. |  |
| `pico_link` | home-assistant/brands#8768 | https://github.com/smartqasa/pico-link | Unavailable | Upstream already ships local brand assets in `custom_components/pico_link/brand/`. |  |
| `planta` | home-assistant/brands#5723 | https://github.com/natekspencer/hacs-planta | Active, pushed 2026-10-17 | Upstream already ships local brand assets in `custom_components/planta/brand/`. |  |
| `plum_ecomax` | home-assistant/brands#3417 | https://github.com/denpamusic/homeassistant-plum-ecomax | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/plum_ecomax/brand/`. |  |
| `pollenlevels` | home-assistant/brands#7420 | https://github.com/eXPerience83/pollenlevels | Active, pushed 2026-10-17 | Upstream already ships local brand assets in `custom_components/pollenlevels/brand/`. |  |
| `posti_tracking` | home-assistant/brands#4840 | https://github.com/jesmak/posti_tracking | Active, pushed 2026-10-16 | Upstream already ships local brand assets in `custom_components/posti_tracking/brand/`. |  |
| `power_insight` | home-assistant/brands#7596 | https://github.com/Hoffmann77/ha-power-insight | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/power_insight/brand/`. |  |
| `powerocean` | home-assistant/brands#9609 | https://github.com/niltrip/powerocean | Unavailable | Upstream already ships local brand assets in `custom_components/powerocean/brand/`. |  |
| `powersensor` | home-assistant/brands#8133 | https://github.com/DiUS/homeassistant-powersensor | Active, pushed 2026-10-07 | Upstream already ships local brand assets in `custom_components/powersensor/brand/`. |  |
| `previous_state_tracker` | home-assistant/brands#7519 | https://github.com/klaptafel/ha-previous-state-tracker | Unavailable | Upstream already ships local brand assets in `custom_components/previous_state_tracker/brand/`. |  |
| `pura` | home-assistant/brands#4384 | https://github.com/natekspencer/hacs-pura | Active, pushed 2026-10-16 | Upstream already ships local brand assets in `custom_components/pura/brand/`. |  |
| `qld_fuel` | home-assistant/brands#9390 | https://github.com/spusuf/qld_fuel-hass | Unavailable | Upstream already ships local brand assets in `custom_components/qld_fuel/brand/`. |  |
| `quiet_solar` | home-assistant/brands#7883 | https://github.com/tmenguy/quiet-solar | Active, pushed 2026-10-17 | Upstream already ships local brand assets in `custom_components/quiet_solar/brand/`. |  |
| `raccolta_rifiuti` | home-assistant/brands#7002 | https://github.com/DomoticaFacile/raccolta_rifiuti | Active, pushed 2026-09-10 | Upstream already ships local brand assets in `custom_components/raccolta_rifiuti/brand/`. |  |
| `ramses_cc` | home-assistant/brands#5118 | https://github.com/zxdavb/ramses_cc | Unavailable | Upstream already ships local brand assets in `custom_components/ramses_cc/brand/`. |  |
| `rce_pse` | home-assistant/brands#7189 | https://github.com/Lewa-Reka/ha-rce-pse | Active, pushed 2026-10-17 | Upstream already ships local brand assets in `custom_components/rce_pse/brand/`. |  |
| `recycle_app` | home-assistant/brands#3843 | https://github.com/olibos/HomeAssistant-RecycleApp | Unavailable | Upstream already ships local brand assets in `custom_components/recycle_app/brand/`. |  |
| `redsea` | home-assistant/brands#7346 | https://github.com/Elwinmage/ha-reefbeat-component | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/redsea/brand/`. |  |
| `remeha_modbus` | home-assistant/brands#6908 | https://github.com/houthacker/remeha-modbus | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/remeha_modbus/brand/`. |  |
| `rfx9600` | home-assistant/brands#5566 | https://github.com/peteS-UK/rfx9600 | Unavailable | Upstream already ships local brand assets in `custom_components/rfx9600/brand/`. |  |
| `robonect` | home-assistant/brands#4354 | https://github.com/geertmeersman/robonect | Active, pushed 2026-09-30 | Upstream already ships local brand assets in `custom_components/robonect/brand/`. |  |
| `s7plc` | home-assistant/brands#7869 | https://github.com/xtimmy86x/ha-s7plc | Unavailable | Upstream already ships local brand assets in `custom_components/s7plc/brand/`. |  |
| `scentair` | home-assistant/brands#8991 | https://github.com/simplytoast1/ScentAirHABridge | Unavailable | Upstream already ships local brand assets in `custom_components/scentair/brand/`. |  |
| `scrutiny` | home-assistant/brands#7219 | https://github.com/vitals5/ha_scrutiny | Unavailable | Upstream already ships local brand assets in `custom_components/scrutiny/brand/`. |  |
| `sems` | home-assistant/brands#4399 | https://github.com/darek-margas/goodwe-sems-home-assistant | Active, pushed 2026-10-09 | Upstream already ships local brand assets in `custom_components/sems/brand/`. |  |
| `sg_bus_arrivals` | home-assistant/brands#7011 | https://github.com/hanwg/sg-bus-arrivals | Active, pushed 2026-05-08 | Upstream already ships local brand assets in `custom_components/sg_bus_arrivals/brand/`. |  |
| `simbase` | home-assistant/brands#8942 | https://github.com/manjotsc/ha-simbase | Unavailable | Upstream already ships local brand assets in `custom_components/simbase/brand/`. |  |
| `simple_device_creator` | home-assistant/brands#8973 | https://github.com/PacmanForever/simple_device_creator | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/simple_device_creator/brand/`. |  |
| `simple_pid_controller` | home-assistant/brands#7052 | https://github.com/bvweerd/simple_pid_controller | Active, pushed 2026-10-09 | Upstream already ships local brand assets in `custom_components/simple_pid_controller/brand/`. |  |
| `sinapsi_alfa` | home-assistant/brands#5198 | https://github.com/alexdelprete/ha-sinapsi-alfa | Active, pushed 2026-10-02 | Upstream already ships local brand assets in `custom_components/sinapsi_alfa/brand/`. |  |
| `skylinewebcams` | home-assistant/brands#9255 | https://github.com/timmaurice/skyline-webcams | Unavailable | Upstream already ships local brand assets in `custom_components/skylinewebcams/brand/`. |  |
| `smart_cover_automation` | home-assistant/brands#8004 | https://github.com/helgeklein/ha-smart-cover-automation | Active, pushed 2026-10-13 | Upstream already ships local brand assets in `custom_components/smart_cover_automation/brand/`. |  |
| `smartbox` | home-assistant/brands#6517 | https://github.com/ajtudela/hass-smartbox | Active, pushed 2026-10-17 | Upstream already ships local brand assets in `custom_components/smartbox/brand/`. |  |
| `smartmailbox` | home-assistant/brands#9416 | https://github.com/danyial/ha-smart-mailbox | Active, pushed 2026-07-06 | Upstream already ships local brand assets in `custom_components/smartmailbox/brand/`. |  |
| `smartslydr` | home-assistant/brands#7119 | https://github.com/djlactose/smartslydr | Active, pushed 2026-09-23 | Upstream already ships local brand assets in `custom_components/smartslydr/brand/`. |  |
| `smarwi` | home-assistant/brands#5371 | https://github.com/jirutka/hass-smarwi | Unavailable | Upstream already ships local brand assets in `custom_components/smarwi/brand/`. |  |
| `smogtok` | home-assistant/brands#9589 | https://github.com/ptrkoz/ha-smogtok | Unavailable | Upstream already ships local brand assets in `custom_components/smogtok/brand/`. |  |
| `sncf_trains` | home-assistant/brands#7562 | https://github.com/Master13011/SNCF-API-HA | Active, pushed 2026-10-07 | Upstream already ships local brand assets in `custom_components/sncf_trains/brand/`. |  |
| `snmp_switch_manager` | home-assistant/brands#8422 | https://github.com/OtisPresley/snmp-switch-manager | Active, pushed 2026-10-17 | Upstream already ships local brand assets in `custom_components/snmp_switch_manager/brand/`. |  |
| `sofabaton_x1s` | home-assistant/brands#8401 | https://github.com/m3tac0de/home-assistant-sofabaton-x1s | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/sofabaton_x1s/brand/`. |  |
| `solarcharger` | home-assistant/brands#8050 | https://github.com/flashg1/SolarCharger | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/solarcharger/brand/`. |  |
| `solardelta` | home-assistant/brands#8336 | https://github.com/KriVaTri/solardelta | Active, pushed 2026-03-09 | Upstream already ships local brand assets in `custom_components/solardelta/brand/`. |  |
| `solarmanager` | home-assistant/brands#7723 | https://github.com/Soardiac/ha-solarmanager | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/solarmanager/brand/`. |  |
| `solarwatt_manager` | home-assistant/brands#9168 | https://github.com/thokaro/solarwatt-manager-homeassistant | Active, pushed 2026-10-14 | Upstream already ships local brand assets in `custom_components/solarwatt_manager/brand/`. |  |
| `solax_cloud_api` | home-assistant/brands#8347 | https://github.com/NoUsername10/Solax-Cloud-API-for-Home-assistant | Active, pushed 2026-09-26 | Upstream already ships local brand assets in `custom_components/solax_cloud_api/brand/`. |  |
| `spock_ems_growatt` | home-assistant/brands#9139 | https://github.com/Spock-p2p/ha-spock_ems_growatt | Active, pushed 2026-06-26 | Upstream already ships local brand assets in `custom_components/spock_ems_growatt/brand/`. |  |
| `spock_ems_marstek` | home-assistant/brands#8359 | https://github.com/Spock-p2p/ha-spock_ems_marstek | Active, pushed 2026-06-26 | Upstream already ships local brand assets in `custom_components/spock_ems_marstek/brand/`. |  |
| `spock_ems_sma` | home-assistant/brands#8490 | https://github.com/Spock-p2p/ha-spock_ems_sma | Active, pushed 2026-06-26 | Upstream already ships local brand assets in `custom_components/spock_ems_sma/brand/`. |  |
| `spotifyplus` | home-assistant/brands#5253 | https://github.com/thlucas1/homeassistantcomponent_spotifyplus | Unavailable | Upstream already ships local brand assets in `custom_components/spotifyplus/brand/`. |  |
| `sscpoe` | home-assistant/brands#5119 | https://github.com/slydiman/sscpoe | Unavailable | Upstream already ships local brand assets in `custom_components/sscpoe/brand/`. |  |
| `ssm` | home-assistant/brands#6844 | https://github.com/ebertek/ssm | Active, pushed 2026-10-05 | Upstream already ships local brand assets in `custom_components/ssm/brand/`. |  |
| `stromkalkulator` | home-assistant/brands#9262 | https://github.com/fredrik-lindseth/Stromkalkulator | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/stromkalkulator/brand/`. |  |
| `sugar_valley_neopool` | home-assistant/brands#8722 | https://github.com/alexdelprete/ha-sugar-valley-neopool | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/sugar_valley_neopool/brand/`. |  |
| `supernotify` | home-assistant/brands#8269 | https://github.com/rhizomatics/supernotify | Unavailable | Upstream already ships local brand assets in `custom_components/supernotify/brand/`. |  |
| `svitlo_yeah` | home-assistant/brands#8297 | https://github.com/ALERTua/ha-svitlo-yeah | Active, pushed 2026-10-11 | Upstream already ships local brand assets in `custom_components/svitlo_yeah/brand/`. |  |
| `swatch_time` | home-assistant/brands#5215 | https://github.com/andrewjswan/SwatchTime | Active, pushed 2026-10-13 | Upstream already ships local brand assets in `custom_components/swatch_time/brand/`. |  |
| `swisscom_internetbox` | home-assistant/brands#5133 | https://github.com/schmidtfx/swisscom-internetbox-hass | Unavailable | Upstream already ships local brand assets in `custom_components/swisscom_internetbox/brand/`. |  |
| `switchbot_camera` | home-assistant/brands#7084 | https://github.com/hsakoh/ha-switchbot-kvs-camera | Active, pushed 2026-10-12 | Upstream already ships local brand assets in `custom_components/switchbot_camera/brand/`. |  |
| `tab5_lvgl` | home-assistant/brands#9515 | https://github.com/GalusPeres/ha-tab5-mqtt-bridge | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/tab5_lvgl/brand/`. |  |
| `tado_ce` | home-assistant/brands#9271 | https://github.com/hiall-fyi/tado_ce | Active, pushed 2026-10-17 | Upstream already ships local brand assets in `custom_components/tado_ce/brand/`. |  |
| `tasmota_mielhvac` | home-assistant/brands#9393 | https://github.com/aldweb/ha-tasmota-mielhvac | Active, pushed 2026-06-22 | Upstream already ships local brand assets in `custom_components/tasmota_mielhvac/brand/`. |  |
| `temperature_alarm` | home-assistant/brands#9645 | https://github.com/smart-ishhome/temperature_alarm | Unavailable | Upstream already ships local brand assets in `custom_components/temperature_alarm/brand/`. |  |
| `thermal_comfort` | home-assistant/brands#3001 | https://github.com/dolezsa/thermal_comfort | Active, pushed 2026-03-12 | Upstream already ships local brand assets in `custom_components/thermal_comfort/brand/`. |  |
| `tibber_local` | home-assistant/brands#4932 | https://github.com/marq24/ha-tibber-pulse-local | Unavailable | Upstream already ships local brand assets in `custom_components/tibber_local/brand/`. |  |
| `tibber_prices` | home-assistant/brands#8370 | https://github.com/jpawlowski/hass.tibber_prices | Unavailable | Upstream already ships local brand assets in `custom_components/tibber_prices/brand/`. |  |
| `tinxylocal` | home-assistant/brands#6057 | https://github.com/arevindh/tinxylocal | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/tinxylocal/brand/`. |  |
| `trinnov_altitude` | home-assistant/brands#8455 | https://github.com/binarylogic/trinnov-altitude-homeassistant | Active, pushed 2026-09-25 | Upstream already ships local brand assets in `custom_components/trinnov_altitude/brand/`. |  |
| `ttlock` | home-assistant/brands#4260 | https://github.com/jbergler/hass-ttlock | Unavailable | Upstream already ships local brand assets in `custom_components/ttlock/brand/`. |  |
| `tuya_smart_ir_ac` | home-assistant/brands#5686 | https://github.com/EnzoD86/tuya-smart-ir-ac | Active, pushed 2026-09-13 | Upstream already ships local brand assets in `custom_components/tuya_smart_ir_ac/brand/`. |  |
| `uconnect` | home-assistant/brands#6499 | https://github.com/hass-uconnect/hass-uconnect | Active, pushed 2026-09-13 | Upstream already ships local brand assets in `custom_components/uconnect/brand/`. |  |
| `ugreen` | home-assistant/brands#7309 | https://github.com/Tom-Bom-badil/home-assistant_ugreen-nas | Active, pushed 2026-10-11 | Upstream already ships local brand assets in `custom_components/ugreen/brand/`. |  |
| `unifi_insights` | home-assistant/brands#6392 | https://github.com/domalab/ha-unifi-insights | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/unifi_insights/brand/`. |  |
| `unii` | home-assistant/brands#5488 | https://github.com/unii-security/homeassistant-unii | Active, pushed 2026-06-22 | Upstream already ships local brand assets in `custom_components/unii/brand/`. |  |
| `unraid_management_agent` | home-assistant/brands#8111 | https://github.com/domalab/ha-unraid-management-agent | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/unraid_management_agent/brand/`. |  |
| `vegvesen_vehicle_lookup` | home-assistant/brands#9546 | https://github.com/esphm/Vegvesen-Vehicle-Lookup | Active, pushed 2026-10-01 | Upstream already ships local brand assets in `custom_components/vegvesen_vehicle_lookup/brand/`. |  |
| `venice_ai` | home-assistant/brands#9031 | https://github.com/grasponcrypto/venice_ai | Active, pushed 2026-07-10 | Upstream already ships local brand assets in `custom_components/venice_ai/brand/`. |  |
| `vestaboard` | home-assistant/brands#4445 | https://github.com/natekspencer/hacs-vestaboard | Active, pushed 2026-10-11 | Upstream already ships local brand assets in `custom_components/vestaboard/brand/`. |  |
| `violet_pool_controller` | home-assistant/brands#5907 | https://github.com/Xerolux/violet-hass | Active, pushed 2026-10-18 | Upstream already ships local brand assets in `custom_components/violet_pool_controller/brand/`. |  |
| `virtual_devices` | home-assistant/brands#8534 | https://github.com/ha-china/virtual_devices | Active, pushed 2026-08-11 | Upstream already ships local brand assets in `custom_components/virtual_devices/brand/`. |  |
| `voice_satellite` | home-assistant/brands#9673 | https://github.com/jxlarrea/voice-satellite-card-integration | Unavailable | Upstream already ships local brand assets in `custom_components/voice_satellite/brand/`. |  |
| `volcano_hybrid` | home-assistant/brands#6878 | https://github.com/SavageNL/home-assistant-volcano-hybrid | Active, pushed 2026-10-17 | Upstream already ships local brand assets in `custom_components/volcano_hybrid/brand/`. |  |
| `volcano_integration` | home-assistant/brands#7175 | https://github.com/Chuffnugget/volcano_integration | Active, pushed 2026-10-17 | Upstream already ships local brand assets in `custom_components/volcano_integration/brand/`. |  |
| `vpmobile24` | home-assistant/brands#9520 | https://github.com/Maximilian-Andrew-Kluge/VpMobile24 | Active, pushed 2026-10-17 | Upstream already ships local brand assets in `custom_components/vpmobile24/brand/`. |  |
| `wanas` | home-assistant/brands#9349 | https://github.com/micpub/homeassistant-wanas | Unavailable | Upstream already ships local brand assets in `custom_components/wanas/brand/`. |  |
| `wasp_in_a_box` | home-assistant/brands#9454 | https://github.com/andrew-codechimp/HA-Wasp-In-A-Box | Active, pushed 2026-10-13 | Upstream already ships local brand assets in `custom_components/wasp_in_a_box/brand/`. |  |
| `waterius` | home-assistant/brands#8897 | https://github.com/alexanderznamensky/waterius | Active, pushed 2026-09-13 | Upstream already ships local brand assets in `custom_components/waterius/brand/`. |  |
| `weerplaza` | home-assistant/brands#7498 | https://github.com/MarcoGos/weerplaza | Active, pushed 2026-09-19 | Upstream already ships local brand assets in `custom_components/weerplaza/brand/`. |  |
| `wifi_sensor_tracker` | home-assistant/brands#8012 | https://github.com/5a2v0/HA-WiFi-Sensor-Tracker | Active, pushed 2026-09-10 | Upstream already ships local brand assets in `custom_components/wifi_sensor_tracker/brand/`. |  |
| `xtend_tuya` | home-assistant/brands#5423 | https://github.com/azerty9971/xtend_tuya | Active, pushed 2026-10-14 | Upstream already ships local brand assets in `custom_components/xtend_tuya/brand/`. |  |
| `yasno_outages` | home-assistant/brands#5655 | https://github.com/denysdovhan/ha-yasno-outages | Active, pushed 2026-10-01 | Upstream already ships local brand assets in `custom_components/yasno_outages/brand/`. |  |
| `yidcal` | home-assistant/brands#7207 | https://github.com/hitchin999/yidcal | Active, pushed 2026-10-11 | Upstream already ships local brand assets in `custom_components/yidcal/brand/`. |  |
| `yoin` | home-assistant/brands#5378 | https://github.com/geertmeersman/yoin | Active, pushed 2026-10-01 | Upstream already ships local brand assets in `custom_components/yoin/brand/`. |  |
| `youfone` | home-assistant/brands#4292 | https://github.com/geertmeersman/youfone | Active, pushed 2026-10-01 | Upstream already ships local brand assets in `custom_components/youfone/brand/`. |  |
| `zonneplan_one` | home-assistant/brands#2282 | https://github.com/fsaris/home-assistant-zonneplan-one | Active, pushed 2026-10-13 | Upstream already ships local brand assets in `custom_components/zonneplan_one/brand/`. |  |
| `ztm_warsaw` | home-assistant/brands#6926 | https://github.com/solarssk/ztm_warsaw | Unavailable | Upstream already ships local brand assets in `custom_components/ztm_warsaw/brand/`. |  |

## Needs upstream PR

| Domain | Original brands PR | Upstream repository | Upstream state | Reason | Tracking PR |
| --- | --- | --- | --- | --- | --- |
| `0711smarthome_fernwartungs_modus` | home-assistant/brands#8250 | https://github.com/0711smarthome/0711smarthome_fernwartungs_modus | Active, pushed 2025-11-10 | Upstream PR opened. | 0711smarthome/0711smarthome_fernwartungs_modus#1 |
| `2n_intercom` | home-assistant/brands#8883 | https://github.com/genka13/ha-2n-intercom | Active, pushed 2026-01-04 | Upstream PR opened. | genka13/ha-2n-intercom#2 |
| `ab_ble_gateway` | home-assistant/brands#5486 | https://github.com/chkuendig/hass-ab_ble_gateway | Active, pushed 2026-01-14 | Upstream PR opened. | chkuendig/hass-ab_ble_gateway#7 |
| `ACInfinity` | home-assistant/brands#4788 | https://github.com/Cavaliers/ha-ACInfinity | Active, pushed 2023-10-31 | Upstream PR opened. | Cavaliers/ha-ACInfinity#1 |
| `acit` | home-assistant/brands#9553 | https://github.com/jdu-acit/ACIT_HA_ThermACEC | Active, pushed 2026-09-10 | Upstream PR opened. | jdu-acit/ACIT_HA_Integration#8 |
| `acogo` | home-assistant/brands#9026 | https://github.com/acoGO/HomeAssistant-acoGO | Active, pushed 2026-01-14 | Upstream PR opened. | acoGO/HomeAssistant-acoGo#1 |
| `actualbudget` | home-assistant/brands#6343 | https://github.com/jlvcm/ha-actualbudget | Active, pushed 2026-04-13 | Upstream PR opened. | jlvcm/ha-actualbudget#64 |
| `adaptive_cover` | home-assistant/brands#5117 | https://github.com/basbruss/adaptive-cover | Active, pushed 2026-08-03 | Upstream PR opened. | basbruss/adaptive-cover#508 |
| `adaptive_thermostat` | home-assistant/brands#6768 | https://github.com/Horia73/adaptive_thermostat | Active, pushed 2026-06-24 | Upstream PR opened. | Horia73/adaptive_thermostat#7 |
| `additional_ca` | home-assistant/brands#4418 | https://github.com/Athozs/hass-additional-ca | Active, pushed 2026-10-17 | Upstream PR opened. | Athozs/hass-additional-ca#39 |
| `advanced_switches` | home-assistant/brands#9032 | https://github.com/hoizi89/advanced_switches | Active, pushed 2026-10-12 | Upstream PR opened. | hoizi89/advanced_switches#6 |
| `advanced_trading_wallet` | home-assistant/brands#5906 | https://github.com/ad-ha/atw | Active, pushed 2025-02-12 | Upstream PR opened. | ad-ha/atw#12 |
| `aemo_nem` | home-assistant/brands#5639 | https://github.com/cabberley/HA_AemoNemData | Active, pushed 2026-07-09 | Upstream PR opened. | cabberley/HA_AemoNemData#25 |
| `aircontrolbase` | home-assistant/brands#9254 | https://github.com/enudler/homeassistant-aircontrol | Active, pushed 2026-01-24 | Upstream PR opened. | enudler/homeassistant-aircontrol#4 |
| `airmusic` | home-assistant/brands#5671 | https://github.com/DominikWrobel/airmusic | Active, pushed 2026-10-03 | Upstream PR opened. | DominikWrobel/airmusic#11 |
| `airmx` | home-assistant/brands#4982 | https://github.com/dext0r/airmx | Active, pushed 2024-11-22 | Upstream PR opened. | dext0r/airmx#14 |
| `airthings_integration` | home-assistant/brands#2269 | https://github.com/braibaud/airthings-integration | Active, pushed 2026-05-21 | Upstream PR opened. | braibaud/airthings_integration#342 |
| `airtouch` | home-assistant/brands#5050 | https://github.com/TheNoctambulist/hass-airtouch | Active, pushed 2026-08-16 | Upstream PR opened. | TheNoctambulist/hass-airtouch#51 |
| `airtouch3` | home-assistant/brands#8701 | https://github.com/bradmatt275/ha-airtouch3 | Active, pushed 2026-07-25 | Upstream PR opened. | bradmatt275/ha-airtouch3#1 |
| `airvpn` | home-assistant/brands#7604 | https://github.com/J-shw/ha-airvpn | Active, pushed 2026-03-01 | Upstream PR opened. | J-shw/ha-airvpn#24 |
| `airzone_control` | home-assistant/brands#6748 | https://github.com/tecnoyfoto/airzone_control | Active, pushed 2026-09-15 | Upstream PR opened. | tecnoyfoto/airzone_control#9 |
| `airzoneclouddaikin` | home-assistant/brands#8190 | https://github.com/eXPerience83/DKNCloud-HASS | Active, pushed 2026-10-11 | Upstream PR opened. | eXPerience83/DKNCloud-HASS#108 |
| `ajax_uart` | home-assistant/brands#8340 | https://github.com/FScoua/ha-ajax-uart | Active, pushed 2025-11-10 | Upstream PR opened. | FScoua/ha-ajax-uart#4 |
| `alko` | home-assistant/brands#2708 | https://github.com/jonkristian/alko | Active, pushed 2025-09-10 | Upstream PR opened. | jonkristian/alko#60 |
| `alliant_energy` | home-assistant/brands#6093 | https://github.com/detour1999/ha-alliant-energy | Active, pushed 2024-11-19 | Upstream PR opened. | detour1999/ha-alliant-energy#7 |
| `allin_io_8` | home-assistant/brands#8501 | https://github.com/CarapaceStore/ALLIN-I-O-8 | Active, pushed 2026-05-12 | Upstream PR opened. | CarapaceStore/ALLIN-I-O-8#4 |
| `alltalktts` | home-assistant/brands#5346 | https://github.com/ser/AllTalkTTS | Active, pushed 2024-04-08 | Upstream PR opened. | ser/AllTalkTTS#1 |
| `almatel` | home-assistant/brands#7316 | https://github.com/alexanderznamensky/Almatel | Active, pushed 2026-08-07 | Upstream PR opened. | alexanderznamensky/Almatel#1 |
| `alpha_speaker` | home-assistant/brands#9195 | https://github.com/VGCH/alpha-private-speaker-connector | Active, pushed 2026-02-10 | Upstream PR opened. | VGCH/alpha-private-speaker-connector#1 |
| `alpicool_ble` | home-assistant/brands#7468 | https://github.com/Gruni22/alpicool_ha_ble | Active, pushed 2026-09-25 | Upstream PR opened. | Gruni22/alpicool_ha_ble#39 |
| `alsavopro` | home-assistant/brands#5051 | https://github.com/goev/AlsavoProHomeAssistantIntegration | Active, pushed 2026-05-17 | Upstream PR opened. | goev/AlsavoProHomeAssistantIntegration#25 |
| `alternative_time` | home-assistant/brands#7709 | https://github.com/Lexorius/alternative_time | Active, pushed 2026-09-26 | Upstream PR opened. | Lexorius/alternative_time#3 |
| `amber_websocket` | home-assistant/brands#8572 | https://github.com/cabberley/AmberWebSocket | Active, pushed 2025-12-02 | Upstream PR opened. | cabberley/AmberWebSocket#2 |
| `ambientika` | home-assistant/brands#6131 | https://github.com/ambientika/HomeAssistant-integration-for-Ambientika | Active, pushed 2026-02-02 | Upstream PR opened. | ambientika/HomeAssistant-integration-for-Ambientika#137 |
| `ampere_modbus` | home-assistant/brands#5855 | https://github.com/dboeni/home-assistant-ampere-storage-pro-modbus | Active, pushed 2026-03-10 | Upstream PR opened. | dboeni/home-assistant-ampere-storage-pro-modbus#26 |
| `amphiro_ble` | home-assistant/brands#5344 | https://github.com/chkuendig/hass-amphiro-ble | Active, pushed 2026-01-14 | Upstream PR opened. | chkuendig/hass-amphiro-ble#17 |
| `ampvortex` | home-assistant/brands#8734 | https://github.com/AmpVortex/Home-Assistant-Integration-for-AmpVortex | Active, pushed 2026-06-16 | Upstream PR opened. | AmpVortex/Home-Assistant-Integration-for-AmpVortex#2 |
| `animated_scenes` | home-assistant/brands#5653 | https://github.com/chazzu/hass-animated-scenes | Active, pushed 2025-12-15 | Upstream PR opened. | chazzu/hass-animated-scenes#76 |
| `anio` | home-assistant/brands#9238 | https://github.com/hackwell/homeassistant-anio | Active, pushed 2026-09-15 | Upstream PR opened. | hackwell/homeassistant-anio#12 |
| `antistorm` | home-assistant/brands#5195 | https://github.com/PiotrMachowski/Home-Assistant-custom-components-Antistorm | Active, pushed 2025-04-05 | Upstream PR opened. | PiotrMachowski/Home-Assistant-custom-components-Antistorm#23 |
| `anycubic_cloud` | home-assistant/brands#5666 | https://github.com/WaresWichall/hass-anycubic_cloud | Active, pushed 2024-12-01 | Upstream PR opened. | WaresWichall/hass-anycubic_cloud#70 |
| `apanova` | home-assistant/brands#6455 | https://github.com/cnecrea/apanova | Active, pushed 2026-03-15 | Upstream PR opened. | cnecrea/apanova#1 |
| `apanova_ro` | home-assistant/brands#7825 | https://github.com/boogytotyo/apanova_ro | Active, pushed 2026-10-18 | Upstream PR opened. | boogytotyo/apanova_ro#10 |
| `apc_modbus` | home-assistant/brands#9300 | https://github.com/aburow/apc-modbus-snmp-ha | Active, pushed 2026-09-12 | Upstream PR opened. | aburow/apc-modbus-snmp-ha#21 |
| `apc_pdu` | home-assistant/brands#9080 | https://github.com/Tycho-MEC/apc-pdu | Active, pushed 2026-10-08 | Upstream PR opened. | Tycho-MEC/apc-pdu#11 |
| `apm` | home-assistant/brands#5672 | https://github.com/clarkewing/ha-apm-crewconnect | Active, pushed 2024-11-15 | Upstream PR opened. | clarkewing/ha-apm-crewconnect#2 |
| `appartme` | home-assistant/brands#6181 | https://github.com/Appartme/Appartme-System-HACI | Active, pushed 2026-09-08 | Upstream PR opened. | Appartme/Appartme-System-HACI#15 |
| `aqara_bridge` | home-assistant/brands#3730 | https://github.com/meishild/AqaraBridge | Active, pushed 2023-01-05 | Upstream PR opened. | meishild/AqaraBridge#17 |
| `aquaariston` | home-assistant/brands#2370 | https://github.com/chomupashchuk/ariston-aqua-remotethermo-home-assistant | Active, pushed 2022-07-13 | Upstream PR opened. | chomupashchuk/ariston-aqua-remotethermo-home-assistant#39 |
| `aquael` | home-assistant/brands#6391 | https://github.com/ChoffaH/homeassistant-aquael | Active, pushed 2025-01-17 | Upstream PR opened. | ChoffaH/homeassistant-aquael#1 |
| `aquaflower` | home-assistant/brands#6462 | https://github.com/theaquaflower/AquaFlower_HA_Integration | Active, pushed 2025-12-08 | Upstream PR opened. | Oasis-Enterprise/AquaFlower_HA_Integration#1 |
| `aquahawk` | home-assistant/brands#4804 | https://github.com/ablyler/home-assistant-aquahawk | Active, pushed 2026-10-01 | Upstream PR opened. | ablyler/home-assistant-aquahawk#86 |
| `aquastilla_softener` | home-assistant/brands#6868 | https://github.com/alakdae/AquastillaHA | Active, pushed 2026-10-12 | Upstream PR opened. | alakdae/AquastillaHA#2 |
| `ar_smart_scheduler` | home-assistant/brands#9628 | https://github.com/marsh4200/ar_smart_scheduler | Active, pushed 2026-08-29 | Upstream PR opened. | marsh4200/ar_smart_scheduler#1 |
| `area_label_stat` | home-assistant/brands#7821 | https://github.com/819548945/area_label_stat | Active, pushed 2025-09-16 | Upstream PR opened. | 819548945/area_label_stat#1 |
| `area_occupancy` | home-assistant/brands#6132 | https://github.com/Hankanman/Area-Occupancy-Detection | Active, pushed 2026-10-06 | Upstream PR opened. | Hankanman/Area-Occupancy-Detection#617 |
| `argon40` | home-assistant/brands#1720 | https://github.com/Misiu/argon40 | Active, pushed 2026-07-21 | Upstream PR opened. | Misiu/argon40#109 |
| `aritech_ats` | home-assistant/brands#9006 | https://github.com/sebakerckhof/aritech-ha | Active, pushed 2026-10-09 | Upstream PR opened. | sebakerckhof/aritech-ha#34 |
| `artnet_led` | home-assistant/brands#3526 | https://github.com/Breina/ha-artnet-led | Active, pushed 2026-10-16 | Upstream PR opened. | Breina/ha-artnet-led#131 |
| `artsauna_ble` | home-assistant/brands#9082 | https://github.com/Dacid99/artsauna_ble | Active, pushed 2026-10-06 | Upstream already ships `custom_components/artsauna_ble/brand/`. Candidate for removal from this repository. |  |
| `aseko_local` | home-assistant/brands#6970 | https://github.com/hopkins-tk/aseko-local | Active, pushed 2026-10-13 | Upstream PR opened. | hopkins-tk/home-assistant-aseko-local#176 |
| `atm_milano` | home-assistant/brands#8916 | https://github.com/JanOstrowka/atm-milano | Active, pushed 2026-01-02 | Upstream PR opened. | JanOstrowka/atm-milano#1 |
| `atomberg` | home-assistant/brands#5379 | https://github.com/dasshubham762/atomberg-integration | Active, pushed 2026-08-03 | Upstream PR opened. | dasshubham762/atomberg-integration#80 |
| `atrea_amotion` | home-assistant/brands#5982 | https://github.com/alexelite/atrea_amotion | Active, pushed 2026-10-17 | Upstream PR opened. | alexelite/atrea_amotion#8 |
| `auckland_transport` | home-assistant/brands#7027 | https://github.com/SeitzDaniel/auckland_transport | Active, pushed 2026-08-24 | Upstream PR opened. | SeitzDaniel/auckland_transport#9 |
| `audiopro_linkplay` | home-assistant/brands#8941 | https://github.com/amsound/audiopro_linkplay_hacs | Active, pushed 2026-01-20 | Upstream PR opened. | amsound/audiopro_linkplay_hacs#7 |
| `august_access_codes` | home-assistant/brands#8823 | https://github.com/iluvdata/august_access_codes | Active, pushed 2026-08-12 | Upstream PR opened. | iluvdata/august_access_codes#6 |
| `aula_easyiq` | home-assistant/brands#7942 | https://github.com/esbenwiberg/easyiq | Active, pushed 2026-06-22 | Upstream PR opened. | esbenwiberg/easyiq#11 |
| `aus_tfnsw_carparks` | home-assistant/brands#7146 | https://github.com/kcoffau/AUS_TfNSW_carparks | Active, pushed 2025-06-20 | Upstream PR opened. | kcoffau/AUS_TfNSW_carparks#2 |
| `auto_areas` | home-assistant/brands#3043 | https://github.com/c-st/auto_areas | Active, pushed 2026-09-10 | Upstream PR opened. | c-st/auto_areas#243 |
| `auto_backup` | home-assistant/brands#2295 | https://github.com/jcwillox/hass-auto-backup | Active, pushed 2026-10-13 | Upstream PR opened. | jcwillox/hass-auto-backup#233 |
| `auto_utility_meter` | home-assistant/brands#8815 | https://github.com/yunusp01/auto_utility_meter | Active, pushed 2026-01-13 | Upstream PR opened. | yunusp01/auto_utility_meter#7 |
| `autobayt` | home-assistant/brands#8825 | https://github.com/RASBR/home-assistant-autobayt | Active, pushed 2026-01-27 | Upstream PR opened. | RASBR/home-assistant-autobayt#1 |
| `automate` | home-assistant/brands#2599 | https://github.com/sillyfrog/Automate-Pulse-v2 | Active, pushed 2026-02-12 | Upstream PR opened. | sillyfrog/Automate-Pulse-v2#50 |
| `autonomic` | home-assistant/brands#5624 | https://github.com/toscano/hass-autonomic | Active, pushed 2026-08-06 | Upstream PR opened. | toscano/hass-autonomic#10 |
| `average` | home-assistant/brands#2302 | https://github.com/Limych/ha-average | Active, pushed 2025-04-21 | Upstream PR opened. | Limych/ha-average#271 |
| `aws_cost` | home-assistant/brands#5700 | https://github.com/diego7marques/ha-aws-cost | Active, pushed 2026-02-02 | Upstream PR opened. | diego7marques/ha-aws-cost#85 |
| `axpert_inverter` | home-assistant/brands#9068 | https://github.com/ArnyminerZ/ha-axpert-inverter | Active, pushed 2026-02-23 | Upstream PR opened. | ArnyminerZ/ha-axpert-inverter#7 |
| `azan` | home-assistant/brands#9311 | https://github.com/bewinxed/minaret | Active, pushed 2026-04-15 | Upstream PR opened. | Bewinxed/minaret#2 |
| `azimut_energy` | home-assistant/brands#9069 | https://github.com/azimut-energy/azimut-ha-integration | Active, pushed 2026-10-08 | Upstream PR opened. | azimut-energy/azimut-ha-integration#37 |
| `azure_openai_sdk_conversation` | home-assistant/brands#7877 | https://github.com/FoliniC/azure_openai_sdk_conversation | Active, pushed 2026-01-09 | Upstream PR opened. | FoliniC/azure_openai_sdk_conversation#9 |
| `balena_cloud` | home-assistant/brands#7183 | https://github.com/eseverson/hass-balena | Active, pushed 2026-10-17 | Upstream PR opened. | eseverson/hass-balena#1 |
| `bar228_ble` | home-assistant/brands#5355 | https://github.com/diepeterpan/HAIDTBA228 | Active, pushed 2024-04-08 | Upstream PR opened. | diepeterpan/HAIDTBA228#1 |
| `basis_smart_panel` | home-assistant/brands#9513 | https://github.com/wearebasis/ha-basis | Active, pushed 2026-03-10 | Upstream PR opened. | wearebasis/ha-basis#3 |
| `baxi_hybridapp_home` | home-assistant/brands#8066 | https://github.com/Cm-8/baxi_hybridapp_home | Active, pushed 2026-10-06 | Upstream PR opened. | Cm-8/baxi_hybridapp_home#24 |
| `bayrol` | home-assistant/brands#7139 | https://github.com/0xQuantumHome/bayrol-home-hassistant | Active, pushed 2026-10-15 | Upstream PR opened. | 0xQuantumHome/bayrol-home-hassistant#58 |
| `bazarr` | home-assistant/brands#8599 | https://github.com/owenvoke/hass-bazarr | Active, pushed 2026-10-18 | Upstream PR opened. | owenvoke/hass-bazarr#11 |
| `be_alert` | home-assistant/brands#9128 | https://github.com/Spiffo/be_alert | Active, pushed 2026-01-14 | Upstream PR opened. | Spiffo/be_alert#3 |
| `beem_energy` | home-assistant/brands#7448 | https://github.com/CharlesP44/Beem_Energy | Active, pushed 2026-08-15 | Upstream PR opened. | CharlesP44/Beem_Energy#94 |
| `beer_keg_ha` | home-assistant/brands#8380 | https://github.com/DarkJaeger/beer-keg-ha | Active, pushed 2026-04-24 | Upstream PR opened. | DarkJaeger/beer_keg_ha#4 |
| `beny_wifi` | home-assistant/brands#6338 | https://github.com/Jarauvi/beny_wifi | Active, pushed 2026-10-12 | Upstream PR opened. | Jarauvi/beny_wifi#42 |
| `beolink` | home-assistant/brands#4807 | https://github.com/djerik/beolink-ha | Active, pushed 2026-02-11 | Upstream PR opened. | djerik/beolink-ha#10 |
| `berluf_selen_2` | home-assistant/brands#6097 | https://github.com/3p3v/hass_berluf_selen_2 | Active, pushed 2025-03-20 | Upstream PR opened. | 3p3v/berluf_selen_2#28 |
| `bermuda` | home-assistant/brands#4772 | https://github.com/agittins/bermuda | Active, pushed 2026-10-14 | Upstream PR opened. | agittins/bermuda#878 |
| `besmart_thermostat` | home-assistant/brands#6207 | https://github.com/coder89/ha-besmart | Active, pushed 2026-07-20 | Upstream PR opened. | coder89/ha-besmart#7 |
| `bestway` | home-assistant/brands#3428 | https://github.com/cdpuk/ha-bestway | Active, pushed 2026-09-06 | Upstream PR opened. | cdpuk/ha-bestway#184 |
| `better_thermostat` | home-assistant/brands#3077 | https://github.com/KartoffelToby/better_thermostat | Active, pushed 2026-10-17 | Upstream PR opened. | KartoffelToby/better_thermostat#2769 |
| `beward` | home-assistant/brands#2304 | https://github.com/Limych/ha-beward | Active, pushed 2025-04-21 | Upstream PR opened. | Limych/ha-beward#92 |
| `bg_electricity_regulated_pricing` | home-assistant/brands#5029 | https://github.com/avataar/bg_electricity_regulated_pricing | Active, pushed 2026-07-01 | Upstream PR opened. | avataar/bg_electricity_regulated_pricing#14 |
| `bgg_collection` | home-assistant/brands#7745 | https://github.com/alberto-bottarini/home-assistant-bgg-collection | Active, pushed 2025-08-22 | Upstream PR opened. | alberto-bottarini/home-assistant-bgg-collection#1 |
| `billbuster` | home-assistant/brands#7124 | https://github.com/DominikBrezovsek/bb-hacs | Active, pushed 2025-05-25 | Upstream PR opened. | DominikBrezovsek/bb-hacs#1 |
| `birdfy` | home-assistant/brands#8992 | https://github.com/dakahler/homeassistant-birdfy | Active, pushed 2026-02-01 | Upstream PR opened. | dakahler/homeassistant-birdfy#11 |
| `ble_smartcube` | home-assistant/brands#9567 | https://github.com/jondycz/ble-smartcube | Active, pushed 2026-02-25 | Upstream PR opened. | jondycz/ble-smartcube#2 |
| `blinds_controller` | home-assistant/brands#5367 | https://github.com/MatthewOnTour/BUT_blinds_time_control | Active, pushed 2024-04-25 | Upstream PR opened. | MatthewOnTour/BUT_blinds_time_control#14 |
| `blood_donor` | home-assistant/brands#6647 | https://github.com/B-Hartley/blood_donor | Active, pushed 2025-05-23 | Upstream PR opened. | B-Hartley/blood_donor#4 |
| `bloomin8_eink_canvas` | home-assistant/brands#8760 | https://github.com/ARPOBOT-BLOOMIN8/eink_canvas_home_assistant_component | Active, pushed 2026-10-13 | Upstream PR opened. | ARPOBOT-BLOOMIN8/eink_canvas_home_assistant_component#28 |
| `blossom_be` | home-assistant/brands#6184 | https://github.com/thomas-svrts/hacs_blossom_energy | Active, pushed 2026-08-14 | Upstream PR opened. | thomas-svrts/blossom_be#9 |
| `blueair` | home-assistant/brands#2861 | https://github.com/aijayadams/hass-blueair | Active, pushed 2023-05-08 | Upstream PR opened. | aijayadams/hass-blueair#34 |
| `bluesky_feed` | home-assistant/brands#9476 | https://github.com/PersephoneKarnstein/ha-bluesky-feed | Active, pushed 2026-03-11 | Upstream PR opened. | PersephoneKarnstein/ha-bluesky-feed#2 |
| `bluetti` | home-assistant/brands#8226 | https://github.com/bluetti-official/bluetti-home-assistant | Active, pushed 2026-10-13 | Upstream PR opened. | bluetti-official/bluetti-home-assistant#191 |
| `bluetti_bt` | home-assistant/brands#4576 | https://github.com/Patrick762/hassio-bluetti-bt | Active, pushed 2026-07-08 | Upstream PR opened. | Patrick762/hassio-bluetti-bt#265 |
| `bm6` | home-assistant/brands#6438 | https://github.com/Rafciq/BM6 | Active, pushed 2026-02-11 | Upstream PR opened. | Rafciq/BM6#46 |
| `boiler_controller` | home-assistant/brands#9501 | https://github.com/BoilerController/boiler-controller-ha | Active, pushed 2026-05-28 | Upstream PR opened. | BoilerController/boiler-controller-ha#9 |
| `bokat_se` | home-assistant/brands#6663 | https://github.com/andymcloid/bokat_se_hass | Active, pushed 2025-06-06 | Upstream PR opened. | andymcloid/bokat_se_hass#1 |
| `bootstrap-icons` | home-assistant/brands#2658 | https://github.com/scottgearyau/hass-bootstrap-icons | Active, pushed 2021-06-28 | Upstream PR opened. | scottdotau/hass-bootstrap-icons#1 |
| `bopi` | home-assistant/brands#9135 | https://github.com/mderasse/ha-bopi-integration | Active, pushed 2026-01-17 | Upstream PR opened. | mderasse/ha-bopi-integration#2 |
| `bosch_ebike` | home-assistant/brands#8295 | https://github.com/Phil-Barker/hass-bosch-ebike | Active, pushed 2026-03-14 | Upstream PR opened. | Phil-Barker/hass-bosch-ebike#27 |
| `bose` | home-assistant/brands#6470 | https://github.com/cavefire/Bose-Homeassistant | Active, pushed 2026-10-10 | Upstream PR opened. | cavefire/Bose-Homeassistant#122 |
| `boulderwelt` | home-assistant/brands#5814 | https://github.com/FaserF/ha-boulderwelt | Active, pushed 2026-10-16 | Upstream PR opened. | FaserF/ha-boulderwelt#36 |
| `boy_notify_line` | home-assistant/brands#3502 | https://github.com/boyphongsakorn/HA-Line-Notify | Active, pushed 2022-08-13 | Upstream PR opened. | boyphongsakorn/HA-Line-Notify#1 |
| `bps` | home-assistant/brands#6522 | https://github.com/Hogster/BPS | Active, pushed 2026-08-12 | Upstream PR opened. | Hogster/BPS#41 |
| `bq25895` | home-assistant/brands#6913 | https://github.com/DJTerentjev/bq25895 | Active, pushed 2025-05-19 | Upstream PR opened. | DJTerentjev/bq25895#1 |
| `bradford_white_connect` | home-assistant/brands#5200 | https://github.com/ablyler/home-assistant-bradford-white-connect | Active, pushed 2026-09-21 | Upstream PR opened. | ablyler/home-assistant-bradford-white-connect#81 |
| `braiins_pool` | home-assistant/brands#7333 | https://github.com/fischerq/ha-braiins-pool | Active, pushed 2025-06-25 | Upstream PR opened. | fischerq/ha-braiins-pool#15 |
| `brewfather` | home-assistant/brands#3117 | https://github.com/mvddonk/brewfather | Active, pushed 2026-08-27 | Upstream PR opened. | MvdDonk/brewfather#72 |
| `brother_scanner` | home-assistant/brands#7725 | https://github.com/gabest11/homeassistant-brother_scanner | Active, pushed 2025-09-01 | Upstream PR opened. | gabest11/homeassistant-brother_scanner#1 |
| `brugmelding` | home-assistant/brands#8798 | https://github.com/svenkopp/brugmelding_HA | Active, pushed 2026-01-06 | Upstream PR opened. | svenkopp/brugmelding_HA#5 |
| `bsh_tides` | home-assistant/brands#6920 | https://github.com/EnlightningMan/ha-bsh_tides | Active, pushed 2026-06-02 | Upstream PR opened. | EnlightningMan/ha-bsh_tides#8 |
| `bsk_zephyr_lan` | home-assistant/brands#8251 | https://github.com/davideciarmiello/ha-bskzephyr-lan | Active, pushed 2025-10-29 | Upstream PR opened. | davideciarmiello/ha-bskzephyr-lan#3 |
| `bticino_hometouch` | home-assistant/brands#9353 | https://github.com/croll83/ha_bticino_hometouch | Active, pushed 2026-10-13 | Upstream PR opened. | croll83/ha_bticino_hometouch#1 |
| `bticino_intercom` | home-assistant/brands#6911 | https://github.com/k-the-hidden-hero/bticino_intercom | Active, pushed 2026-09-15 | Upstream PR opened. | k-the-hidden-hero/bticino_intercom#97 |
| `bttf_time_circuits` | home-assistant/brands#8118 | https://github.com/rananna/back-to-the-future-timecircuits | Active, pushed 2025-10-30 | Upstream PR opened. | rananna/back-to-the-future-timecircuits#1161 |
| `budget_manager` | home-assistant/brands#8746 | https://github.com/qlerup/budget-manager-sync | Active, pushed 2026-01-18 | Upstream PR opened. | qlerup/budget-manager-sync#1 |
| `budgetenvelope` | home-assistant/brands#5148 | https://github.com/mpschr/budgetenvelope-homeassistant | Active, pushed 2024-02-26 | Upstream PR opened. | mpschr/budgetenvelope-homeassistant#1 |
| `burze_dzis_net` | home-assistant/brands#4539 | https://github.com/PiotrMachowski/Home-Assistant-custom-components-Burze.dzis.net | Active, pushed 2025-04-05 | Upstream PR opened. | PiotrMachowski/Home-Assistant-custom-components-Burze.dzis.net#37 |
| `butt` | home-assistant/brands#5920 | https://github.com/dboeni/home-assistant-butt | Active, pushed 2026-04-22 | Upstream PR opened. | dboeni/home-assistant-butt#1 |
| `bwee_home` | home-assistant/brands#6813 | https://github.com/bweetech/ha_bwee_home | Active, pushed 2025-03-27 | Upstream PR opened. | bweetech/ha_bwee_home#1 |
| `bwt_cosmy` | home-assistant/brands#7691 | https://github.com/Hyrla/integration_bwt_cosmy_ha | Active, pushed 2025-08-16 | Upstream PR opened. | Hyrla/integration_bwt_cosmy_ha#1 |
| `byd_hvs` | home-assistant/brands#6087 | https://github.com/bbr111/byd_hvs | Active, pushed 2026-07-15 | Upstream PR opened. | bbr111/byd_hvs#39 |
| `c2_pm5` | home-assistant/brands#8810 | https://github.com/doug-hoffman/ha-c2_pm5 | Active, pushed 2026-01-06 | Upstream PR opened. | doug-hoffman/ha-c2_pm5#2 |
| `camp_chef` | home-assistant/brands#8968 | https://github.com/doggkruse/ha-campchef | Active, pushed 2026-03-24 | Upstream PR opened. | doggkruse/ha-campchef#3 |
| `carousel` | home-assistant/brands#5463 | https://github.com/kgn3400/carousel | Active, pushed 2025-06-25 | Upstream PR opened. | kgn3400/carousel#3 |
| `casambi_mqtt` | home-assistant/brands#6650 | https://github.com/peterklijn/casambi-mqtt | Active, pushed 2026-10-12 | Upstream PR opened. | peterklijn/casambi-mqtt#79 |
| `cat_scale` | home-assistant/brands#7569 | https://github.com/djbios/home-assistant-cat-scale | Active, pushed 2026-05-05 | Upstream PR opened. | djbios/home-assistant-cat-scale#34 |
| `catlink` | home-assistant/brands#5801 | https://github.com/alkalixin/catlink | Active, pushed 2025-08-13 | Upstream PR opened. | alkalixin/catlink#1 |
| `cbr_currency` | home-assistant/brands#7107 | https://github.com/alexanderznamensky/CBR-currency | Active, pushed 2025-05-17 | Upstream PR opened. | alexanderznamensky/CBR-currency#1 |
| `ccl` | home-assistant/brands#5817 | https://github.com/CCL-Electronics-Ltd/ccl | Active, pushed 2026-09-13 | Upstream PR opened. | CCL-Electronics-Ltd/ccl#20 |
| `cebl` | home-assistant/brands#5546 | https://github.com/ViceBooster/HA-CEBL | Active, pushed 2026-05-20 | Upstream PR opened. | vicebooster/HA-CEBL#1 |
| `cecotec_conga` | home-assistant/brands#3527 | https://github.com/alemuro/ha-cecotec-conga | Active, pushed 2026-10-11 | Upstream PR opened. | alemuro/ha-cecotec-conga#55 |
| `centralino` | home-assistant/brands#9465 | https://github.com/ago19800/centralino | Active, pushed 2026-03-05 | Upstream PR opened. | ago19800/centralino#1 |
| `chargecloud` | home-assistant/brands#4414 | https://github.com/functionpointer/home-assistant-chargecloud-integration | Active, pushed 2026-10-08 | Upstream PR opened. | functionpointer/home-assistant-chargecloud-integration#15 |
| `cheapest_energy_windows` | home-assistant/brands#8230 | https://github.com/cheapest-energy-windows/cheapest_energy_windows | Active, pushed 2025-12-30 | Upstream PR opened. | cheapest-energy-windows/cheapest_energy_windows#19 |
| `checkwatt` | home-assistant/brands#5014 | https://github.com/faanskit/ha-checkwatt | Active, pushed 2026-09-30 | Upstream PR opened. | faanskit/ha-checkwatt#97 |
| `chefkoch_ha` | home-assistant/brands#5815 | https://github.com/FaserF/ha-chefkoch | Active, pushed 2026-10-11 | Upstream PR opened. | FaserF/ha-chefkoch#40 |
| `chihiros` | home-assistant/brands#5451 | https://github.com/TheMicDiet/chihiros-led-control | Active, pushed 2026-10-17 | Upstream PR opened. | TheMicDiet/chihiros-led-control#137 |
| `china_southern_power_grid_stat` | home-assistant/brands#3855 | https://github.com/CubicPill/china_southern_power_grid_stat | Active, pushed 2024-09-18 | Upstream PR opened. | CubicPill/china_southern_power_grid_stat#55 |
| `china_telecom` | home-assistant/brands#7383 | https://github.com/hlhk2017/ChinaTelecomMonitor-Homeassistant-Integration | Active, pushed 2026-09-22 | Upstream PR opened. | hlhk2017/ChinaTelecomMonitor-Homeassistant-Integration#16 |
| `chinese_poetry` | home-assistant/brands#7630 | https://github.com/xiaoshi930/chinese_poetry | Active, pushed 2025-08-15 | Upstream PR opened. | xiaoshi930/chinese_poetry#1 |
| `chorecast` | home-assistant/brands#7816 | https://github.com/KenWeTech/Chorecast | Active, pushed 2025-09-26 | Upstream PR opened. | KenWeTech/Chorecast#3 |
| `chuango_alarm` | home-assistant/brands#9288 | https://github.com/NemoN/ha-chuango-ov300 | Active, pushed 2026-03-06 | Upstream PR opened. | NemoN/ha-chuango-ov300#4 |
| `chuck_control` | home-assistant/brands#5309 | https://github.com/TeepCo/chuck-control | Active, pushed 2025-09-22 | Upstream PR opened. | TeepCo/chuck_control#3 |
| `chuguan_home` | home-assistant/brands#8808 | https://github.com/wang-chuanhui/chuguan_home | Active, pushed 2026-07-27 | Upstream PR opened. | wang-chuanhui/chuguan_home#1 |
| `cimonitor` | home-assistant/brands#6312 | https://github.com/eXistenZNL/HomeAssistant-CIMonitor | Active, pushed 2025-01-17 | Upstream PR opened. | eXistenZNL/HomeAssistant-CIMonitor#2 |
| `circadian_lighting` | home-assistant/brands#8182 | https://github.com/claytonjn/hass-circadian_lighting | Active, pushed 2026-10-15 | Not opened. The existing fork frenck/hass-circadian_lighting is stale (2020), so GitHub rejects the push without the `workflow` scope. Needs `gh auth refresh -s workflow` or a fork sync, then retry. |  |
| `circular` | home-assistant/brands#6051 | https://github.com/GUILEB/integration_circular | Active, pushed 2025-12-07 | Upstream PR opened. | GUILEB/integration_circular#18 |
| `citizen` | home-assistant/brands#9477 | https://github.com/PersephoneKarnstein/ha-citizen-incidents | Active, pushed 2026-02-14 | Upstream PR opened. | PersephoneKarnstein/ha-citizen-incidents#1 |
| `citymind_water_meter` | home-assistant/brands#5613 | https://github.com/maorcc/citymind_water_meter | Active, pushed 2026-07-14 | Upstream PR opened. | maorcc/citymind_water_meter#91 |
| `cjmonitor` | home-assistant/brands#4461 | https://github.com/clydebarrow/ha-cjmonitor | Active, pushed 2024-06-06 | Upstream PR opened. | clydebarrow/ha-cjmonitor#1 |
| `clash_royale` | home-assistant/brands#8142 | https://github.com/HenkieThee/clash_royale | Active, pushed 2025-10-17 | Upstream PR opened. | HenkieThee/clash_royale#3 |
| `clickpi_garage_door` | home-assistant/brands#6646 | https://github.com/ChrisTracy/clickpi_garage_door | Active, pushed 2025-09-01 | Upstream PR opened. | ChrisTracy/clickpi_garage_door#1 |
| `clock_bh` | home-assistant/brands#9287 | https://github.com/iret33/ha-clock-bh | Active, pushed 2026-01-27 | Upstream PR opened. | iret33/ha-clock-bh#1 |
| `clockify` | home-assistant/brands#7828 | https://github.com/BlythMeister/Clockify-HA | Active, pushed 2026-10-14 | Upstream PR opened. | BlythMeister/Clockify-HA#3 |
| `cloud_gps` | home-assistant/brands#6441 | https://github.com/dscao/cloud_gps | Active, pushed 2026-05-09 | Upstream PR opened. | dscao/cloud_gps#39 |
| `cloudflare_speed_test` | home-assistant/brands#6682 | https://github.com/DigitallyRefined/ha-cloudflare-speed-test | Active, pushed 2026-10-18 | Upstream PR opened. | DigitallyRefined/ha-cloudflare-speed-test#127 |
| `cloudflare_tunnel_monitor` | home-assistant/brands#4754 | https://github.com/deadbeef3137/ha-cloudflare-tunnel-monitor | Active, pushed 2026-03-03 | Upstream PR opened. | deadbeef3137/ha-cloudflare-tunnel-monitor#35 |
| `clouding` | home-assistant/brands#9524 | https://github.com/bastgau/ha-clouding | Active, pushed 2026-10-18 | Upstream PR opened. | bastgau/ha-clouding#48 |
| `cloudstash` | home-assistant/brands#9614 | https://github.com/derolli1976/HomeassistantCloudStash | Active, pushed 2026-07-30 | Upstream PR opened. | derolli1976/HomeassistantCloudStash#7 |
| `cmg_waste_collection` | home-assistant/brands#8246 | https://github.com/ArturZurawski/hacs_cmg_waste_collection | Active, pushed 2025-11-20 | Upstream PR opened. | ArturZurawski/cmg_waste_collection#3 |
| `combined_energy` | home-assistant/brands#5398 | https://github.com/evilmarty/combined_energy | Active, pushed 2026-10-02 | Upstream PR opened. | evilmarty/combined_energy#70 |
| `combined_notifications` | home-assistant/brands#9346 | https://github.com/Pjarbit/home-assistant-combined-notification-integration | Active, pushed 2026-09-01 | Upstream PR opened. | Pjarbit/home-assistant-combined-notification-integration#26 |
| `combustion` | home-assistant/brands#4959 | https://github.com/legrego/homeassistant-combustion | Active, pushed 2025-12-08 | Upstream PR opened. | legrego/homeassistant-combustion#114 |
| `comelit_intercom` | home-assistant/brands#7566 | https://github.com/nicolas-fricke/ha-component-comelit-intercom | Active, pushed 2025-09-10 | Upstream PR opened. | nicolas-fricke/ha-component-comelit-intercom#16 |
| `composite` | home-assistant/brands#4147 | https://github.com/pnbruckner/ha-composite-tracker | Active, pushed 2026-06-04 | Upstream PR opened. | pnbruckner/ha-composite-tracker#114 |
| `computherm_b` | home-assistant/brands#6529 | https://github.com/zadoli/ha-computherm-b | Active, pushed 2026-10-12 | Upstream PR opened. | zadoli/ha-computherm-b#9 |
| `connectsense` | home-assistant/brands#8632 | https://github.com/connectsense/homeassistant.custom | Active, pushed 2025-12-08 | Upstream PR opened. | connectsense/homeassistant.custom#1 |
| `containercleaning` | home-assistant/brands#7721 | https://github.com/PatrickSt1991/ha-afvalcontainer-cleaning | Active, pushed 2026-10-02 | Upstream PR opened. | PatrickSt1991/ha-afvalcontainer-cleaning#33 |
| `controllable` | home-assistant/brands#8757 | https://github.com/caplaz/home-assistant-controllable | Active, pushed 2026-01-08 | Upstream PR opened. | caplaz/home-assistant-controllable#1 |
| `cool_open_integration` | home-assistant/brands#3673 | https://github.com/ShayGus/cool-open-integration | Active, pushed 2026-08-25 | Upstream PR opened. | ShayGus/cool-open-integration#24 |
| `copenhagen_trackers` | home-assistant/brands#6321 | https://github.com/Lerbaek/hass-copenhagen-trackers | Active, pushed 2026-02-11 | Upstream PR opened. | Lerbaek/hass-copenhagen-trackers#8 |
| `cosa` | home-assistant/brands#8585 | https://github.com/ahamitd/cosa-homeassistant | Active, pushed 2026-10-12 | Upstream PR opened. | ahamitd/cosa-homeassistant#6 |
| `cosori_kettle_ble` | home-assistant/brands#9228 | https://github.com/rygwdn/ha-cosori-kettle | Active, pushed 2026-05-17 | Upstream PR opened. | rygwdn/ha-cosori-kettle#15 |
| `cover_time_based` | home-assistant/brands#4741 | https://github.com/Sese-Schneider/ha-cover-time-based | Active, pushed 2026-10-15 | Upstream PR opened. | Sese-Schneider/ha-cover-time-based#321 |
| `cowboy` | home-assistant/brands#5034 | https://github.com/elsbrock/cowboy-ha | Active, pushed 2026-10-18 | Upstream PR opened. | elsbrock/cowboy-ha#144 |
| `crafty_controller` | home-assistant/brands#5691 | https://github.com/Makhuta/homeassistant-crafty_controller | Active, pushed 2024-09-15 | Upstream PR opened. | Makhuta/homeassistant-crafty_controller#1 |
| `crescontrol` | home-assistant/brands#5881 | https://github.com/OpenGrow-Box/crescontrol | Active, pushed 2026-06-22 | Upstream PR opened. | OpenGrow-Box/crescontrol#1 |
| `cronicle` | home-assistant/brands#6708 | https://github.com/aropop/home-assistant-cronicle | Active, pushed 2025-03-11 | Upstream PR opened. | aropop/home-assistant-cronicle#2 |
| `cronostar` | home-assistant/brands#8994 | https://github.com/FoliniC/CronoStar | Active, pushed 2026-05-17 | Upstream PR opened. | FoliniC/CronoStar#1 |
| `crowdsec` | home-assistant/brands#8917 | https://github.com/brott8/ha-crowdsec | Active, pushed 2026-09-15 | Upstream PR opened. | brott8/ha-crowdsec#9 |
| `crunch_o_meter` | home-assistant/brands#2100 | https://github.com/GuyLewin/home-assistant-crunch-o-meter | Active, pushed 2025-06-21 | Upstream PR opened. | GuyLewin/home-assistant-crunch-o-meter#6 |
| `cryptoinfo_advanced` | home-assistant/brands#4326 | https://github.com/TheHolyRoger/hass-cryptoinfo | Active, pushed 2024-04-11 | Upstream PR opened. | TheHolyRoger/hass-cryptoinfo#18 |
| `cslab` | home-assistant/brands#5782 | https://github.com/andrzej79/csLights-hass-integration | Active, pushed 2025-12-08 | Upstream PR opened. | andrzej79/csLights-hass-integration#1 |
| `csu` | home-assistant/brands#5654 | https://github.com/HartD92/ha-cos-utilities | Active, pushed 2024-10-15 | Upstream PR opened. | HartD92/ha-cos-utilities#72 |
| `cubecoders` | home-assistant/brands#6571 | https://github.com/Samywamy10/ha-cubecoders-amp | Active, pushed 2025-02-17 | Upstream PR opened. | Samywamy10/ha-cubecoders-amp#5 |
| `cumtd_bus` | home-assistant/brands#9207 | https://github.com/crankynetman/ha-cumtd | Active, pushed 2026-04-21 | Upstream PR opened. | crankynetmaam/ha-cumtd#35 |
| `custom_alarmdecoder` | home-assistant/brands#7455 | https://github.com/SantiagoSotoC/ha_custom_components | Active, pushed 2026-07-07 | Upstream PR opened. | SantiagoSotoC/ha_custom_components#1 |
| `custom_areas` | home-assistant/brands#7892 | https://github.com/DefinitelyADev/custom-areas-integration | Active, pushed 2026-10-05 | Upstream PR opened. | DefinitelyADev/custom-areas-integration#90 |
| `custom_templates` | home-assistant/brands#4344 | https://github.com/PiotrMachowski/Home-Assistant-custom-components-Custom-Templates | Active, pushed 2026-05-03 | Upstream PR opened. | PiotrMachowski/Home-Assistant-custom-components-Custom-Templates#37 |
| `custstats` | home-assistant/brands#4337 | https://github.com/hekmon/ha-custstats | Active, pushed 2025-12-21 | Upstream PR opened. | hekmon/ha-custstats#4 |
| `cyberpower_modbus` | home-assistant/brands#9302 | https://github.com/aburow/cyberpower-modbus-ha | Active, pushed 2026-07-07 | Upstream PR opened. | aburow/cyberpower-modbus-ha#5 |
| `cyclepay` | home-assistant/brands#3477 | https://github.com/elahd/ha-cyclepay | Active, pushed 2026-10-12 | Upstream PR opened. | elahd/ha-cyclepay#27 |
| `cyltek_gateway` | home-assistant/brands#4459 | https://github.com/CYL-Mark/home-assistant-cyltek_gateway | Active, pushed 2023-06-21 | Upstream PR opened. | CYL-Mark/home-assistant-cyltek_gateway#1 |
| `czsvatek_sensor` | home-assistant/brands#5803 | https://github.com/LochyCZ/HomeAssistantCZSvatek | Active, pushed 2026-08-10 | Upstream PR opened. | LochyCZ/HomeAssistantCZSvatek#2 |
| `dae` | home-assistant/brands#5449 | https://github.com/ScottG489/ha-dae | Active, pushed 2026-03-31 | Upstream PR opened. | ScottG489/ha-dae#6 |
| `daikin_br` | home-assistant/brands#6625 | https://github.com/daikin-br/ha-custom-integration | Active, pushed 2025-07-06 | Upstream PR opened. | daikin-br/ha-custom-integration#12 |
| `daikin_ha_ekrhh_modbus` | home-assistant/brands#8095 | https://github.com/gerione/daikin-ha-ekrhh-modbus | Active, pushed 2026-10-07 | Upstream PR opened. | gerione/daikin-ha-ekrhh-modbus#37 |
| `daily_fingerpori` | home-assistant/brands#8415 | https://github.com/Aasikki/daily-fingerpori | Active, pushed 2025-11-14 | Upstream PR opened. | Aasikki/daily-fingerpori#15 |
| `dali2_iot` | home-assistant/brands#7711 | https://github.com/spuky/lunatone-dali-integration | Active, pushed 2025-10-04 | Upstream PR opened. | spuky/lunatone-dali-integration#5 |
| `dali_center` | home-assistant/brands#7414 | https://github.com/maginawin/ha-dali-center | Active, pushed 2026-04-07 | Upstream PR opened. | maginawin/ha-dali-center#83 |
| `danawa_shopping` | home-assistant/brands#4971 | https://github.com/oukene/danawa_shopping | Active, pushed 2025-12-16 | Upstream PR opened. | oukene/danawa_shopping#1 |
| `dash480` | home-assistant/brands#7950 | https://github.com/dsackr/dash480 | Active, pushed 2026-07-30 | Upstream PR opened. | dsackr/dash480#1 |
| `dash_bouncer` | home-assistant/brands#9132 | https://github.com/hfehrmann/hass-dash-bouncer | Active, pushed 2026-10-09 | Upstream PR opened. | hfehrmann/hass-dash-bouncer#18 |
| `dash_cast` | home-assistant/brands#8896 | https://github.com/AlexxIT/DashCast | Active, pushed 2024-12-08 | Upstream PR opened. | AlexxIT/DashCast#34 |
| `dataplicity` | home-assistant/brands#2492 | https://github.com/AlexxIT/Dataplicity | Active, pushed 2026-09-28 | Upstream PR opened. | AlexxIT/Dataplicity#58 |
| `ddns` | home-assistant/brands#6397 | https://github.com/weiangongsi/ddns | Active, pushed 2025-08-12 | Upstream PR opened. | dcssn/ddns#7 |
| `default_config_exclude` | home-assistant/brands#6192 | https://github.com/arturpragacz/hass-cc-default-config-exclude | Active, pushed 2025-02-24 | Upstream PR opened. | arturpragacz/hass-cc-default-config-exclude#4 |
| `delete` | home-assistant/brands#2354 | https://github.com/chomupashchuk/delete-file-home-assistant | Active, pushed 2023-01-09 | Upstream PR opened. | chomupashchuk/delete-file-home-assistant#34 |
| `delonghi_dehumidifier_api` | home-assistant/brands#6608 | https://github.com/rtfpessoa/homeassistant-delonghi-dehumidifier | Active, pushed 2025-02-21 | Upstream PR opened. | rtfpessoa/homeassistant-delonghi-dehumidifier#6 |
| `denon_avr_3805` | home-assistant/brands#8053 | https://github.com/grotan1/denon-avr-3805 | Active, pushed 2026-08-16 | Upstream PR opened. | grotan1/denon-avr-3805#12 |
| `denon_video_select` | home-assistant/brands#5974 | https://github.com/jzucker2/denon-video-select | Active, pushed 2026-02-03 | Upstream PR opened. | jzucker2/denon-video-select#174 |
| `desec_io` | home-assistant/brands#7800 | https://github.com/J-CMartin/hass-deSEC | Active, pushed 2025-09-02 | Upstream PR opened. | J-CMartin/hass-deSEC#1 |
| `dessmonitor` | home-assistant/brands#7769 | https://github.com/andreas-glaser/ha-dessmonitor | Active, pushed 2026-10-13 | Upstream PR opened. | andreas-glaser/ha-dessmonitor#51 |
| `devtools` | home-assistant/brands#6322 | https://github.com/bendikrb/ha-devtools | Active, pushed 2025-02-26 | Upstream PR opened. | bendikrb/ha-devtools#6 |
| `dew_point_calculator` | home-assistant/brands#9203 | https://github.com/iret33/ha-dew-point-calculator | Active, pushed 2026-01-27 | Upstream PR opened. | iret33/ha-dew-point-calculator#1 |
| `dewpoint_calculator` | home-assistant/brands#8978 | https://github.com/sebastian-software/ha-dewpoint-calculator | Active, pushed 2026-09-27 | Upstream PR opened. | sebastian-software/ha-dewpoint-calculator#13 |
| `dieliga` | home-assistant/brands#6604 | https://github.com/FaserF/ha-dieliga | Active, pushed 2026-10-11 | Upstream PR opened. | FaserF/ha-dieliga#34 |
| `diesel_heater_ble` | home-assistant/brands#9343 | https://github.com/MJIADEV/Diesel_Heater_BLE | Active, pushed 2026-02-09 | Upstream PR opened. | MJIADEV/Diesel_Heater_BLE#1 |
| `digital_pendulum` | home-assistant/brands#9341 | https://github.com/Dregi56/digital_pendulum | Active, pushed 2026-10-06 | Upstream PR opened. | Dregi56/digital_pendulum#42 |
| `digitransit` | home-assistant/brands#5706 | https://github.com/Mallonbacka/custom-component-digitransit | Active, pushed 2026-10-13 | Upstream PR opened. | Mallonbacka/custom-component-digitransit#229 |
| `dimo` | home-assistant/brands#6127 | https://github.com/ardevd/ha-dimo | Active, pushed 2026-10-17 | Upstream PR opened. | ardevd/ha-dimo#272 |
| `dingtalk_notify` | home-assistant/brands#8176 | https://github.com/938134/dingtalk_notify | Active, pushed 2026-10-11 | Upstream PR opened. | 938134/dingtalk_notify#1 |
| `disable_external_login` | home-assistant/brands#9342 | https://github.com/raivisdejus/ha-disable-external-login | Active, pushed 2026-01-31 | Upstream PR opened. | raivisdejus/ha-disable-external-login#1 |
| `discogs_enhanced` | home-assistant/brands#8732 | https://github.com/andreasc1/homeassistant-discogs-enhanced | Active, pushed 2026-09-06 | Upstream PR opened. | andreasc1/homeassistant-discogs-enhanced#4 |
| `discogs_sync` | home-assistant/brands#7785 | https://github.com/iamjoshk/discogs_sync | Active, pushed 2026-07-06 | Upstream PR opened. | iamjoshk/discogs_sync#6 |
| `divoom_pixoo64` | home-assistant/brands#7249 | https://github.com/KoenDierckx/divoom_pixoo64 | Active, pushed 2025-06-16 | Upstream PR opened. | KoenDierckx/divoom_pixoo64#2 |
| `divus_dplus` | home-assistant/brands#8680 | https://github.com/florianraffl/divus_dplus | Active, pushed 2026-07-20 | Upstream PR opened. | florianraffl/divus_dplus#58 |
| `dlink_presence` | home-assistant/brands#1863 | https://github.com/ayavilevich/homeassistant-dlink-presence | Active, pushed 2021-08-09 | Upstream PR opened. | ayavilevich/homeassistant-dlink-presence#5 |
| `docker_status` | home-assistant/brands#5467 | https://github.com/kgn3400/docker_status | Active, pushed 2025-11-28 | Upstream PR opened. | kgn3400/docker_status#6 |
| `dolby_cp750` | home-assistant/brands#6254 | https://github.com/donfrensis/Dolby-CP750-HA | Active, pushed 2024-12-20 | Upstream PR opened. | donfrensis/Dolby-CP750-HA#1 |
| `dolphin` | home-assistant/brands#3634 | https://github.com/0xAlon/dolphin | Active, pushed 2026-06-08 | Upstream PR opened. | 0xAlon/dolphin#22 |
| `domika` | home-assistant/brands#5789 | https://github.com/DevPocket/domika-ha-integration | Active, pushed 2024-09-18 | Upstream PR opened. | DevPocket/domika-ha-integration#1 |
| `donetick` | home-assistant/brands#6154 | https://github.com/donetick/donetick-hass-integration | Active, pushed 2026-10-14 | Upstream PR opened. | donetick/donetick-hass-integration#73 |
| `dorsalwatch` | home-assistant/brands#9104 | https://github.com/sh00t2kill/ha-dorsalwatch | Active, pushed 2026-01-14 | Upstream PR opened. | sh00t2kill/ha-dorsalwatch#1 |
| `drugstore_stock` | home-assistant/brands#7351 | https://github.com/BigPiloto/ha-drugstore-stock | Active, pushed 2025-07-02 | Upstream PR opened. | BigPiloto/ha-drugstore-stock#4 |
| `ducobox` | home-assistant/brands#8795 | https://github.com/Pauwlus/ha-ducobox-energy-comfort | Active, pushed 2026-06-21 | Upstream PR opened. | Pauwlus/ha-ducobox-energy-comfort#3 |
| `duet3d` | home-assistant/brands#4368 | https://github.com/Lyr3x/hass-Duet3D | Active, pushed 2026-04-04 | Upstream PR opened. | Lyr3x/hass-Duet3D#34 |
| `duosida_ev` | home-assistant/brands#8510 | https://github.com/americodias/duosida-ha | Active, pushed 2025-11-21 | Upstream PR opened. | americodias/duosida-ha#2 |
| `duplicati` | home-assistant/brands#5745 | https://github.com/txxa/hass-duplicati | Active, pushed 2026-01-26 | Upstream PR opened. | txxa/hass-duplicati#128 |
| `duux` | home-assistant/brands#8188 | https://github.com/SSmale/Duux-Home-Assistant | Active, pushed 2026-10-09 | Upstream PR opened. | SSmale/Duux-Home-Assistant#139 |
| `duwi_home` | home-assistant/brands#7172 | https://github.com/duwi2024/ha_duwi_home | Active, pushed 2026-10-10 | Upstream PR opened. | duwi2024/ha_duwi_home#2 |
| `dwd` | home-assistant/brands#2622 | https://github.com/hg1337/homeassistant-dwd | Active, pushed 2026-10-04 | Upstream PR opened. | hg1337/homeassistant-dwd#56 |
| `dyndns_manager` | home-assistant/brands#7707 | https://github.com/Q14siX/home-assistant-dyndns-manager | Active, pushed 2025-08-19 | Upstream PR opened. | Q14siX/home-assistant-dyndns-manager#1 |
| `e3dc` | home-assistant/brands#9209 | https://github.com/JohannLegler/e3dc-homeassistant | Active, pushed 2026-01-19 | Upstream PR opened. | JohannLegler/e3dc-homeassistant#1 |
| `e_redes_smart_metering_plus` | home-assistant/brands#7641 | https://github.com/MiguelTVMS/e-redes-smart-metering-plus-hass | Active, pushed 2026-09-04 | Upstream PR opened. | MiguelTVMS/e-redes-smart-metering-plus-hass#17 |
| `easee` | home-assistant/brands#1932 | https://github.com/fondberg/easee_hass | Active, pushed 2026-10-18 | Upstream PR opened. | nordicopen/easee_hass#712 |
| `easy_pv` | home-assistant/brands#7342 | https://github.com/BigBoot/ha-easy-pv | Active, pushed 2026-02-03 | Upstream PR opened. | BigBoot/ha-easy-pv#50 |
| `easylog_cloud` | home-assistant/brands#7428 | https://github.com/Cadabena/ha-easylog-cloud | Active, pushed 2026-09-05 | Upstream PR opened. | Cadabena/ha-easylog-cloud#98 |
| `eberspaecher` | home-assistant/brands#9535 | https://github.com/JPTK04/eberspaecher-ha | Active, pushed 2026-02-11 | Upstream PR opened. | JPTK04/eberspaecher-ha#1 |
| `ebloc_ro` | home-assistant/brands#8020 | https://github.com/boogytotyo/ebloc_ro | Active, pushed 2026-10-18 | Upstream PR opened. | boogytotyo/ebloc_ro#6 |
| `echorobotics` | home-assistant/brands#4423 | https://github.com/functionpointer/home-assistant-echorobotics-integration | Active, pushed 2026-09-25 | Upstream PR opened. | functionpointer/home-assistant-echorobotics-integration#2 |
| `econest` | home-assistant/brands#6352 | https://github.com/econest-energy/econest | Active, pushed 2025-01-20 | Upstream PR opened. | econest-energy/econest#1 |
| `econext` | home-assistant/brands#9458 | https://github.com/LeeNuss/econext | Active, pushed 2026-06-04 | Upstream PR opened. | LeeNuss/econext#25 |
| `ecopower_dynamic_prices` | home-assistant/brands#9040 | https://github.com/eliaslecomte/ecopower-dynamic-prices | Active, pushed 2026-07-28 | Upstream PR opened. | eliaslecomte/ecopower-dynamic-prices#1 |
| `ecovacs_cn` | home-assistant/brands#8806 | https://github.com/hoangminh1109/ecovacs_cn | Active, pushed 2026-03-27 | Upstream PR opened. | hoangminh1109/ecovacs_cn#2 |
| `ecovolter` | home-assistant/brands#7591 | https://github.com/samuelg0rd0n/ha-ecovolter-integration | Active, pushed 2026-07-31 | Upstream PR opened. | samuelg0rd0n/ha-ecovolter-integration#8 |
| `ecowitt_iot` | home-assistant/brands#6082 | https://github.com/Bwooce/ecowitt_iot | Active, pushed 2025-11-05 | Upstream PR opened. | Bwooce/ecowitt_iot#21 |
| `edesur_argentina` | home-assistant/brands#8802 | https://github.com/catastrophicode/ha-ar-edesur | Active, pushed 2025-12-30 | Upstream PR opened. | catastrophicode/ha-ar-edesur#5 |
| `edge_tts_proxy` | home-assistant/brands#6194 | https://github.com/netcookies/Edge-TTS-Proxy | Active, pushed 2025-01-02 | Upstream PR opened. | netcookies/Edge-TTS-Proxy#1 |
| `eedomus` | home-assistant/brands#9038 | https://github.com/Dan4Jer/hass-eedomus | Active, pushed 2026-10-15 | Upstream PR opened. | Dan4Jer/hass-eedomus#133 |
| `eetlijst` | home-assistant/brands#4334 | https://github.com/Slalamander/Home-Assistant-Eetlijst | Active, pushed 2024-02-21 | Upstream PR opened. | Slalamander/Home-Assistant-Eetlijst#4 |
| `eeve_mower_willow` | home-assistant/brands#4688 | https://github.com/flame4ever/eeve_mower_willow | Active, pushed 2026-09-07 | Upstream PR opened. | flame4ever/eeve_mower_willow#29 |
| `eg4_inverter_modbus` | home-assistant/brands#8655 | https://github.com/poldim/EG4-Inverter-Modbus | Active, pushed 2026-10-01 | Upstream PR opened. | poldim/EG4-Inverter-Modbus#10 |
| `egi` | home-assistant/brands#6925 | https://github.com/EarthGoodness/egi_vrf | Active, pushed 2025-10-14 | Upstream PR opened. | EarthGoodness/egi#1 |
| `eia_hourly_demand` | home-assistant/brands#4232 | https://github.com/hokiebrian/eia_hourly_demand | Active, pushed 2025-10-30 | Upstream PR opened. | hokiebrian/eia_hourly_demand#4 |
| `eldes_alarm` | home-assistant/brands#3102 | https://github.com/augustas2/eldes | Active, pushed 2026-01-03 | Upstream PR opened. | augustas2/eldes#58 |
| `electric_ireland_insights` | home-assistant/brands#6453 | https://github.com/barreeeiroo/Home-Assistant-Electric-Ireland | Active, pushed 2026-06-14 | Upstream PR opened. | barreeeiroo/Home-Assistant-Electric-Ireland#25 |
| `elehant` | home-assistant/brands#6108 | https://github.com/dudanov/hassio-elehant | Active, pushed 2026-02-09 | Upstream PR opened. | dudanov/hassio-elehant#3 |
| `elektrarna` | home-assistant/brands#9836 | https://github.com/RadekSip/homeassistant-elektrarna | Active, pushed 2026-02-18 | Upstream PR opened. | RadekSip/homeassistant-elektrarna#1 |
| `elektro_network_tariff` | home-assistant/brands#5998 | https://github.com/frlequ/home-assistant-network-tariff | Active, pushed 2024-11-06 | Upstream PR opened. | frlequ/home-assistant-network-tariff#23 |
| `elektronny_gorod` | home-assistant/brands#4976 | https://github.com/gentslava/elektronny-gorod | Active, pushed 2026-10-05 | Not opened. The upstream `.gitignore` ignores `*.png`, so the assets need a forced add. Needs a decision. |  |
| `eleven_energy` | home-assistant/brands#6923 | https://github.com/iPeel/HA-Eleven-Energy | Active, pushed 2025-11-12 | Upstream PR opened. | iPeel/HA-Eleven-Energy#4 |
| `elkbledom_fastlink` | home-assistant/brands#8241 | https://github.com/Satimaro/elkbledom-fastlink | Active, pushed 2025-12-14 | Not opened. The upstream repo is a fork in the same network as elkbledom, so the only fork is frenck/elkbledom and GitHub rejects the push without the `workflow` scope. Needs `gh auth refresh -s workflow`, then retry. |  |
| `elro_connects_realtime` | home-assistant/brands#7664 | https://github.com/dib0/ha-elro-connects-realtime | Active, pushed 2026-09-05 | Upstream PR opened. | dib0/ha-elro-connects-realtime#7 |
| `eltako` | home-assistant/brands#4408 | https://github.com/grimmpp/home-assistant-eltako | Active, pushed 2026-08-28 | Upstream PR opened. | grimmpp/home-assistant-eltako#227 |
| `em6` | home-assistant/brands#4900 | https://github.com/codyc1515/ha-em6 | Active, pushed 2025-08-22 | Upstream PR opened. | codyc1515/ha-em6#12 |
| `emaux_spv150` | home-assistant/brands#6897 | https://github.com/0jety0/emaux_spv150 | Active, pushed 2026-08-07 | Upstream PR opened. | 0jety0/emaux_spv150#5 |
| `emby_modern` | home-assistant/brands#8640 | https://github.com/sambarlick/emby | Active, pushed 2025-12-10 | Upstream PR opened. | sambarlick/emby#2 |
| `emlid` | home-assistant/brands#9563 | https://github.com/bscholer/home-assistant-emlid | Active, pushed 2026-02-13 | Upstream PR opened. | bscholer/home-assistant-emlid#1 |
| `emonio` | home-assistant/brands#5687 | https://github.com/Emonio/hacs-emonio-p3 | Active, pushed 2026-03-19 | Upstream PR opened. | Emonio/emonio-ha#1 |
| `emontx_config` | home-assistant/brands#9429 | https://github.com/FredM67/ha-emon-config | Active, pushed 2026-10-14 | Upstream PR opened. | FredM67/ha-emon-config#29 |
| `enbw_chargestations` | home-assistant/brands#5528 | https://github.com/mKenfenheuer/enbw_chargestations | Active, pushed 2026-10-12 | Upstream PR opened. | mKenfenheuer/enbw_chargestations#32 |
| `energa_awarie` | home-assistant/brands#8086 | https://github.com/chauek/energa_awarie | Active, pushed 2025-10-06 | Upstream PR opened. | chauek/energa_awarie#1 |
| `energie_impuls` | home-assistant/brands#7326 | https://github.com/doenke/ha-energie-impuls | Active, pushed 2026-05-12 | Upstream PR opened. | doenke/ha-energie-impuls#35 |
| `energosbyt_plus` | home-assistant/brands#2729 | https://github.com/alryaz/hass-energosbyt-plus | Active, pushed 2023-07-08 | Upstream PR opened. | alryaz/hass-energosbyt-plus#12 |
| `energy_hub_poland` | home-assistant/brands#9179 | https://github.com/AllonGit/energy_hub_poland | Active, pushed 2026-10-04 | Upstream PR opened. | AllonGit/energy_hub_poland#56 |
| `energy_management` | home-assistant/brands#8244 | https://github.com/davidrapan/ha-energy | Active, pushed 2026-10-07 | Upstream PR opened. | davidrapan/ha-energy#2 |
| `energycalc` | home-assistant/brands#8191 | https://github.com/zacs/ha-energycalc | Active, pushed 2026-08-17 | Upstream PR opened. | zacs/ha-energycalc#6 |
| `energylive` | home-assistant/brands#6434 | https://github.com/berwinter/ha-energylive | Active, pushed 2025-11-05 | Upstream PR opened. | berwinter/ha-energylive#2 |
| `energytariff` | home-assistant/brands#4096 | https://github.com/epaulsen/energytariff | Active, pushed 2026-10-01 | Upstream PR opened. | epaulsen/energytariff#54 |
| `energyzero_gql_sensor` | home-assistant/brands#5496 | https://github.com/Sikerdebaard/energyzero-all-in-gasprice | Active, pushed 2024-05-24 | Upstream PR opened. | Sikerdebaard/energyzero-all-in-gasprice#1 |
| `engie_ro` | home-assistant/brands#7773 | https://github.com/boogytotyo/engie_ro | Active, pushed 2026-10-18 | Upstream PR opened. | boogytotyo/engie_ro#42 |
| `enode` | home-assistant/brands#7059 | https://github.com/evilmarty/enode | Active, pushed 2026-08-15 | Upstream PR opened. | evilmarty/enode#33 |
| `enovates` | home-assistant/brands#9054 | https://github.com/enovates/home-assistant-enovates | Active, pushed 2026-04-22 | Upstream PR opened. | enovates/home-assistant-enovates#34 |
| `enpal_website` | home-assistant/brands#6892 | https://github.com/T3rr0rS0ck3/home-assistant-enpal-website | Active, pushed 2025-06-20 | Upstream PR opened. | T3rr0rS0ck3/home-assistant-enpal-website#1 |
| `enphase_gateway` | home-assistant/brands#4511 | https://github.com/Hoffmann77/home_assistant_enphase_gateway | Active, pushed 2025-11-24 | Upstream PR opened. | Hoffmann77/home_assistant_enphase_gateway#35 |
| `entity_tz` | home-assistant/brands#4977 | https://github.com/pnbruckner/ha-entity-tz | Active, pushed 2025-10-23 | Upstream PR opened. | pnbruckner/ha-entity-tz#19 |
| `entsoe` | home-assistant/brands#3715 | https://github.com/JaccoR/hass-entso-e | Active, pushed 2026-06-22 | Upstream PR opened. | JaccoR/hass-entso-e#332 |
| `envertech_local` | home-assistant/brands#7882 | https://github.com/Kaiserdragon2/Envertech_local | Active, pushed 2025-11-25 | Upstream PR opened. | Kaiserdragon2/Envertech_local#4 |
| `environment_variable` | home-assistant/brands#5812 | https://github.com/Athozs/hass-environment-variable | Active, pushed 2026-07-24 | Upstream PR opened. | Athozs/hass-environment-variable#1 |
| `eot_home` | home-assistant/brands#9412 | https://github.com/ElectroceanTech/HomeAssistant | Active, pushed 2026-04-13 | Upstream PR opened. | ElectroceanTech/HomeAssistant#9 |
| `epb` | home-assistant/brands#6709 | https://github.com/asachs01/ha-epb | Active, pushed 2026-07-23 | Upstream PR opened. | asachs01/ha-epb#6 |
| `epex_spot` | home-assistant/brands#3962 | https://github.com/mampfes/hacs_epex_spot | Active, pushed 2026-06-24 | Upstream PR opened. | mampfes/ha_epex_spot#327 |
| `epson_projector_link` | home-assistant/brands#3761 | https://github.com/amosyuen/ha-epson-projector-link | Active, pushed 2026-10-16 | Upstream PR opened. | amosyuen/ha-epson-projector-link#315 |
| `equation_ha` | home-assistant/brands#9221 | https://github.com/Nacho2001903/equation-heaters-ha | Active, pushed 2026-01-22 | Upstream PR opened. | Nacho2001903/equation-heaters-ha#1 |
| `ergomotion` | home-assistant/brands#4737 | https://github.com/AlexxIT/Ergomotion | Active, pushed 2024-12-06 | Upstream PR opened. | AlexxIT/Ergomotion#14 |
| `esa_nask` | home-assistant/brands#3983 | https://github.com/Mr-Groch/HA-ESA-NASK-Air-Quality | Active, pushed 2025-03-24 | Upstream PR opened. | Mr-Groch/HA-ESA-NASK-Air-Quality#9 |
| `esplus` | home-assistant/brands#7979 | https://github.com/g470258/hass-esplus | Active, pushed 2026-02-05 | Upstream PR opened. | g470258/hass-esplus#13 |
| `espuino` | home-assistant/brands#7274 | https://github.com/DexXxter007/ESPuino_HA_Integration | Active, pushed 2026-03-25 | Upstream PR opened. | DexXxter007/ESPuino_HA_Integration#4 |
| `estrannaise` | home-assistant/brands#9478 | https://github.com/PersephoneKarnstein/ha-estrannaise | Active, pushed 2026-08-18 | Upstream PR opened. | PersephoneKarnstein/ha-estrannaise#2 |
| `estudna` | home-assistant/brands#3469 | https://github.com/nijel/hass-estudna | Active, pushed 2026-10-17 | Upstream PR opened. | nijel/hass-estudna#195 |
| `esy_sunhome` | home-assistant/brands#7696 | https://github.com/branko-lazarevic/esysunhome | Active, pushed 2026-10-14 | Upstream PR opened. | branko-lazarevic/esysunhome#29 |
| `etatherm_modbus` | home-assistant/brands#6545 | https://github.com/PatrikTrestik/homeassistant_etatherm_modbus | Active, pushed 2026-08-30 | Upstream PR opened. | PatrikTrestik/homeassistant_etatherm_modbus#10 |
| `etekcitybp_ble` | home-assistant/brands#7531 | https://github.com/EdLeckert/ha_etekcity_blood_pressure_monitor | Active, pushed 2026-08-08 | Upstream PR opened. | EdLeckert/ha_etekcity_blood_pressure_monitor#5 |
| `euros_os` | home-assistant/brands#8519 | https://github.com/McKoPcIu/EurosOS | Active, pushed 2026-01-24 | Upstream PR opened. | McKoPcIu/EurosOS#2 |
| `euskalmet` | home-assistant/brands#8702 | https://github.com/Arbide/euskalmet-hassio | Active, pushed 2026-10-08 | Upstream PR opened. | Arbide/euskalmet-hassio#4 |
| `ev_load_balancing` | home-assistant/brands#6189 | https://github.com/dala318/ev_load_balancing | Active, pushed 2025-01-14 | Upstream PR opened. | dala318/ev_load_balancing#21 |
| `ev_optimizer` | home-assistant/brands#9338 | https://github.com/Tiimber/ev_optimizer | Active, pushed 2026-09-18 | Upstream PR opened. | Tiimber/ev_optimizer#1 |
| `ev_smart_charger` | home-assistant/brands#8358 | https://github.com/antbald/ha-ev-smart-charger | Active, pushed 2026-09-28 | Upstream PR opened. | antbald/ha-ev-smart-charger#64 |
| `evcnet` | home-assistant/brands#8245 | https://github.com/Platzii/homeassistant-evcnet | Active, pushed 2026-02-18 | Upstream PR opened. | Platzii/homeassistant-evcnet#44 |
| `evduty` | home-assistant/brands#5194 | https://github.com/happydev-ca/evduty-home-assistant | Active, pushed 2026-05-23 | Upstream PR opened. | happydev-ca/evduty-home-assistant#7 |
| `eventsensor` | home-assistant/brands#1576 | https://github.com/azogue/eventsensor | Active, pushed 2026-10-05 | Upstream PR opened. | azogue/eventsensor#78 |
| `eversolar_pmu` | home-assistant/brands#9298 | https://github.com/aburow/eversolar-pmu-ha | Active, pushed 2026-02-16 | Upstream PR opened. | aburow/eversolar-pmu-ha#1 |
| `evnex` | home-assistant/brands#3649 | https://github.com/hardbyte/ha-evnex | Active, pushed 2026-10-04 | Upstream PR opened. | hardbyte/ha-evnex#117 |
| `evocarshare` | home-assistant/brands#6351 | https://github.com/jazzz/ha-evocarshare | Active, pushed 2025-05-15 | Upstream PR opened. | jazzz/ha-evocarshare#12 |
| `evse_charger` | home-assistant/brands#9602 | https://github.com/DmytryS/ha-evse-charger | Active, pushed 2026-02-15 | Upstream PR opened. | DmytryS/ha-evse-charger#2 |
| `exaviz` | home-assistant/brands#9484 | https://github.com/exavizco/ha-poe-plugin | Active, pushed 2026-10-16 | Upstream PR opened. | exavizco/ha-poe-plugin#26 |
| `exchange_calendar` | home-assistant/brands#9554 | https://github.com/bohemtucsok/homeassistant-exchange-calendar | Active, pushed 2026-09-24 | Upstream PR opened. | bohemtucsok/homeassistant-exchange-calendar#17 |
| `exciting_information` | home-assistant/brands#9354 | https://github.com/404GamerNotFound/ha-exciting-information | Active, pushed 2026-02-01 | Upstream PR opened. | 404GamerNotFound/ha-exciting-information#19 |
| `exo_pool` | home-assistant/brands#7864 | https://github.com/benjycov/exo_pool | Active, pushed 2026-04-27 | Upstream PR opened. | benjycov/exo_pool#27 |
| `extron` | home-assistant/brands#5793 | https://github.com/NitorCreations/ha-extron | Active, pushed 2026-10-11 | Upstream PR opened. | NitorCreations/ha-extron#37 |
| `eyeonsaur` | home-assistant/brands#6542 | https://github.com/cekage/eyeonsaur-ha | Active, pushed 2025-03-03 | Upstream PR opened. | cekage/eyeonsaur-ha#18 |
| `ezviz_hp7` | home-assistant/brands#8417 | https://github.com/Bobsilvio/ezviz_hp7 | Active, pushed 2026-10-10 | Upstream PR opened. | Bobsilvio/ezviz_hp7#79 |
| `facebook_messenger` | home-assistant/brands#3660 | https://github.com/emes30/facebook_messenger | Active, pushed 2022-09-26 | Upstream PR opened. | emes30/facebook_messenger#10 |
| `family_bell` | home-assistant/brands#8619 | https://github.com/brewmarsh/family-bell | Active, pushed 2026-07-20 | Upstream PR opened. | brewmarsh/family-bell#105 |
| `feelfit` | home-assistant/brands#7899 | https://github.com/Sanji78/feelfit | Active, pushed 2026-10-03 | Upstream PR opened. | Sanji78/feelfit#6 |
| `fellow` | home-assistant/brands#6402 | https://github.com/NewsGuyTor/FellowAiden-HomeAssistant | Active, pushed 2026-10-05 | Not opened. The upstream PR template requires an "AI models used" disclosure. Needs a decision. |  |
| `fellow_stagg` | home-assistant/brands#9370 | https://github.com/bramboe/stagg-ekg-plus-ha | Active, pushed 2026-10-15 | Upstream PR opened. | bramboe/stagg-ekg-plus-ha#10 |
| `fellow_stagg_ekg_pro` | home-assistant/brands#8863 | https://github.com/cermakjn/ha-fellow-stagg-ekg-pro | Active, pushed 2026-01-20 | Upstream PR opened. | cermakjn/ha-fellow-stagg-ekg-pro#4 |
| `fermax_duoxme` | home-assistant/brands#7379 | https://github.com/edualm/ha-fermax-duoxme | Active, pushed 2026-10-12 | Upstream PR opened. | edualm/ha-fermax-duoxme#8 |
| `ferro_ai_companion` | home-assistant/brands#7246 | https://github.com/jonasbkarlsson/ferro_ai_companion | Active, pushed 2025-12-15 | Upstream PR opened. | jonasbkarlsson/ferro_ai_companion#48 |
| `fetch_latest_file` | home-assistant/brands#8204 | https://github.com/ScottESanDiego/Fetch-Latest-File | Active, pushed 2026-10-13 | Upstream PR opened. | ScottESanDiego/Fetch-Latest-File#3 |
| `ffes_sauna` | home-assistant/brands#8326 | https://github.com/LeszekWroblowski/ffes_sauna__modbus_home_assistant | Active, pushed 2026-03-20 | Upstream PR opened. | LeszekWroblowski/ffes_sauna__modbus_home_assistant#4 |
| `fglair_heatpump_controller` | home-assistant/brands#5972 | https://github.com/bigmoby/fglair_for_homeassistant | Active, pushed 2026-10-09 | Upstream PR opened. | bigmoby/fglair_for_homeassistant#354 |
| `fiftyfive` | home-assistant/brands#9089 | https://github.com/Crazy-Duck/home-assistant-fiftyfive | Active, pushed 2026-10-16 | Upstream PR opened. | Crazy-Duck/home-assistant-fiftyfive#107 |
| `fill_pdf_form` | home-assistant/brands#6424 | https://github.com/duvalale/fill-pdf-form | Active, pushed 2025-02-19 | Upstream PR opened. | duvalale/fill-pdf-form#1 |
| `fiobank_sensor` | home-assistant/brands#5900 | https://github.com/LochyCZ/HomeAssistantFiobank | Active, pushed 2024-08-29 | Upstream PR opened. | LochyCZ/HomeAssistantFiobank#1 |
| `fireboard` | home-assistant/brands#7046 | https://github.com/dvd604/fireboard-homeassistant | Active, pushed 2025-05-09 | Upstream PR opened. | dvd604/fireboard-homeassistant#1 |
| `firefly_cloud` | home-assistant/brands#8080 | https://github.com/matt-richardson/home-assistant-firefly-cloud | Active, pushed 2026-10-11 | Upstream PR opened. | matt-richardson/home-assistant-firefly-cloud#40 |
| `fishing_assistant` | home-assistant/brands#6916 | https://github.com/bairnhard/fishing_assistant | Active, pushed 2026-02-21 | Upstream PR opened. | bairnhard/fishing_assistant#8 |
| `flamerite` | home-assistant/brands#8951 | https://github.com/achilleasa/flamerite_ha | Active, pushed 2026-01-14 | Upstream PR opened. | achilleasa/flamerite_ha#6 |
| `flashforge_adventurer_5` | home-assistant/brands#7265 | https://github.com/kruzhkov/hass-flashforge-adventurer-5 | Active, pushed 2025-06-13 | Upstream PR opened. | kruzhkov/hass-flashforge-adventurer-5#15 |
| `flatastic` | home-assistant/brands#7430 | https://github.com/avidoni/hass-flatastic | Active, pushed 2025-11-27 | Upstream PR opened. | avidoni/hass-flatastic#3 |
| `flavor_of_the_day` | home-assistant/brands#8030 | https://github.com/abhichandra21/ha-flavoroftheday | Active, pushed 2025-10-02 | Upstream PR opened. | abhichandra21/ha-flavoroftheday#1 |
| `flexmeasures_hacs` | home-assistant/brands#4880 | https://github.com/FlexMeasures/flexmeasures-hacs | Active, pushed 2026-09-16 | Upstream PR opened. | FlexMeasures/flexmeasures-ha-integration#32 |
| `flexopus` | home-assistant/brands#4776 | https://github.com/flexopus/flexopus-hass-sensor | Active, pushed 2026-10-17 | Upstream PR opened. | flexopus/flexopus-hass-sensor#17 |
| `flipper_bridge` | home-assistant/brands#9244 | https://github.com/markszabo/home-assistant-flipper-bridge | Active, pushed 2026-01-23 | Upstream PR opened. | markszabo/home-assistant-flipper-bridge#2 |
| `flipper_rc` | home-assistant/brands#7123 | https://github.com/ClusterM/flipper_rc | Active, pushed 2026-08-16 | Upstream PR opened. | ClusterM/flipper_rc#14 |
| `flowerhub` | home-assistant/brands#8759 | https://github.com/MichaelPihlblad/flowerhub_homeassistant_integration | Active, pushed 2026-07-16 | Upstream PR opened. | MichaelPihlblad/flowerhub_homeassistant_integration#16 |
| `fluvius` | home-assistant/brands#8547 | https://github.com/sander110419/Fluvius-home-assistant | Active, pushed 2026-10-05 | Upstream PR opened. | sander110419/Fluvius-home-assistant#29 |
| `fn_nas` | home-assistant/brands#7330 | https://github.com/anxms/fn_nas | Active, pushed 2025-07-28 | Upstream PR opened. | anxms/fn_nas#22 |
| `foldingathomecontrol` | home-assistant/brands#1594 | https://github.com/eifinger/hass-foldingathomecontrol | Active, pushed 2024-11-26 | Upstream PR opened. | eifinger/hass-foldingathomecontrol#460 |
| `foobar2000` | home-assistant/brands#6548 | https://github.com/talmuth/ha_foobar2k | Active, pushed 2025-02-12 | Upstream PR opened. | talmuth/ha_foobar2k#1 |
| `foodsharing` | home-assistant/brands#3471 | https://github.com/FaserF/ha-foodsharing | Active, pushed 2026-10-14 | Upstream PR opened. | FaserF/ha-foodsharing#37 |
| `foxess_api` | home-assistant/brands#5145 | https://github.com/SoftXperience/home-assistant-foxess-api | Active, pushed 2024-03-04 | Upstream PR opened. | SoftXperience/home-assistant-foxess-api#9 |
| `frapol_econet300_heat_recovery` | home-assistant/brands#7872 | https://github.com/pworoniecki/frapol-ecoNET-300-Home-Assistant-Integration | Active, pushed 2025-09-15 | Upstream PR opened. | pworoniecki/frapol-ecoNET-300-Home-Assistant-Integration#1 |
| `free_sleep` | home-assistant/brands#8497 | https://github.com/Mrtenz/hass-free-sleep | Active, pushed 2026-10-12 | Upstream PR opened. | Mrtenz/hass-free-sleep#139 |
| `freebox_home` | home-assistant/brands#6363 | https://github.com/gvigroux/freebox_home | Active, pushed 2025-01-25 | Upstream PR opened. | gvigroux/freebox_home#31 |
| `fritzbox_callmonitor_raw` | home-assistant/brands#9310 | https://github.com/Sanji78/fritzbox_callmonitor_raw | Active, pushed 2026-02-14 | Upstream PR opened. | Sanji78/fritzbox_callmonitor_raw#3 |
| `frixos` | home-assistant/brands#8858 | https://github.com/ArtLogicIKE/frixos-ha-integration | Active, pushed 2026-07-23 | Upstream PR opened. | ArtLogicIKE/frixos-ha-integration#4 |
| `froeling_connect` | home-assistant/brands#5600 | https://github.com/d3nergy/froeling_connect | Active, pushed 2024-08-08 | Upstream PR opened. | d3nergy/froeling_connect#1 |
| `froeling_s3200_modbus` | home-assistant/brands#8061 | https://github.com/Toxo666/ha_froeling_modbus | Active, pushed 2026-09-14 | Upstream PR opened. | sbstn-0x2a/ha_froeling_modbus#1 |
| `fsk_armme` | home-assistant/brands#8187 | https://github.com/RenierM26/fsk_armme | Active, pushed 2025-11-21 | Upstream PR opened. | RenierM26/fsk_armme#3 |
| `fsolar_modbus` | home-assistant/brands#8535 | https://github.com/comcowo/fsolar_modbus | Active, pushed 2026-04-09 | Upstream PR opened. | comcowo/fsolar_modbus#29 |
| `ftms` | home-assistant/brands#5557 | https://github.com/dudanov/hassio-ftms | Active, pushed 2025-03-01 | Upstream PR opened. | dudanov/hassio-ftms#60 |
| `fujitsu_airstage` | home-assistant/brands#4603 | https://github.com/danielkaldheim/ha_airstage | Active, pushed 2026-09-14 | Upstream PR opened. | danielkaldheim/ha_airstage#128 |
| `fullup` | home-assistant/brands#6226 | https://github.com/zedissime/ha-fullup | Active, pushed 2024-12-16 | Upstream PR opened. | zedissime/ha-fullup#4 |
| `furbulous` | home-assistant/brands#8331 | https://github.com/FabienBounoir/furbulous-litterbox-home-assistant | Active, pushed 2025-11-08 | Upstream PR opened. | FabienBounoir/furbulous-litterbox-home-assistant#2 |
| `ga_autoexpose` | home-assistant/brands#8928 | https://github.com/pvries86/hass-ga-autoexpose | Active, pushed 2026-08-18 | Upstream PR opened. | pvries86/hass-ga-autoexpose#1 |
| `gama_300_dlms_meter_reader` | home-assistant/brands#4317 | https://github.com/astraliens/home-assistant-gama-300-dlms-meter | Active, pushed 2026-10-08 | Upstream PR opened. | astraliens/home-assistant-gama-300-dlms-meter#2 |
| `gamewire` | home-assistant/brands#5665 | https://github.com/actstorms/ha-gamewire | Active, pushed 2024-07-15 | Upstream PR opened. | actstorms/ha-gamewire#1 |
| `garmin_mapshare` | home-assistant/brands#4634 | https://github.com/BHSPitMonkey/homeassistant-garmin-mapshare | Active, pushed 2025-06-28 | Upstream PR opened. | BHSPitMonkey/homeassistant-garmin-mapshare#12 |
| `garnet` | home-assistant/brands#7075 | https://github.com/danTapps/garnet | Active, pushed 2026-02-17 | Upstream PR opened. | danTapps/garnet#9 |
| `garnet_home_assistant` | home-assistant/brands#7228 | https://github.com/claudio-pires/garnet-home-assistant | Active, pushed 2026-06-07 | Upstream PR opened. | claudio-pires/garnet_home_assistant#11 |
| `geappliances` | home-assistant/brands#7546 | https://github.com/geappliances/hacs-integration | Active, pushed 2026-09-22 | Upstream PR opened. | geappliances/geappliances-integration#43 |
| `geberit_aquaclean` | home-assistant/brands#7763 | https://github.com/avassdal/ha-geberit-aquaclean | Active, pushed 2025-09-04 | Upstream PR opened. | FacePlant101/ha-geberit-aquaclean#1 |
| `geizhals_integration` | home-assistant/brands#7527 | https://github.com/CommanderRedYT/homeassistant-geizhals-integration | Active, pushed 2025-12-01 | Upstream PR opened. | CommanderRedYT/homeassistant-geizhals-integration#26 |
| `generac` | home-assistant/brands#4601 | https://github.com/bentekkie/ha-generac | Active, pushed 2025-03-31 | Upstream PR opened. | bentekkie/ha-generac#142 |
| `geod_balance` | home-assistant/brands#7474 | https://github.com/rPonuganti/geod-balance-homeassistant | Active, pushed 2025-07-16 | Upstream PR opened. | rPonuganti/geod-balance-homeassistant#1 |
| `ghostfolio` | home-assistant/brands#7955 | https://github.com/MichelFR/ha_ghostfolio | Active, pushed 2026-10-16 | Upstream PR opened. | MichelFR/ha_ghostfolio#5 |
| `gismeteo` | home-assistant/brands#2311 | https://github.com/Limych/ha-gismeteo | Active, pushed 2024-12-23 | Upstream PR opened. | Limych/ha-gismeteo#235 |
| `givenergy_local` | home-assistant/brands#3318 | https://github.com/cdpuk/givenergy-local | Active, pushed 2026-09-10 | Upstream PR opened. | cdpuk/givenergy-local#166 |
| `glance_clock` | home-assistant/brands#8372 | https://github.com/PorlyBe/glance_clock_ha | Active, pushed 2025-11-13 | Upstream PR opened. | PorlyBe/glance_clock_ha#14 |
| `glkvm` | home-assistant/brands#9211 | https://github.com/Scalegj/glkvm-homeassistant-integration | Active, pushed 2026-01-20 | Upstream PR opened. | Scalegj/glkvm-homeassistant-integration#1 |
| `glue_lock` | home-assistant/brands#7749 | https://github.com/aniiik/glue_lock_hass | Active, pushed 2025-10-27 | Upstream PR opened. | aniiik/glue_lock_hass#15 |
| `gne_pv_monitoring` | home-assistant/brands#4066 | https://github.com/PiotrMachowski/Home-Assistant-custom-components-GNE-PV-Monitoring | Active, pushed 2025-04-05 | Upstream PR opened. | PiotrMachowski/Home-Assistant-custom-components-GNE-PV-Monitoring#11 |
| `gobzigh` | home-assistant/brands#7766 | https://github.com/RASBR/home-assistant-gobzigh | Active, pushed 2026-05-14 | Upstream PR opened. | RASBR/home-assistant-gobzigh#1 |
| `godaikin` | home-assistant/brands#8385 | https://github.com/doubleukay/godaikin-ha | Active, pushed 2025-11-15 | Upstream PR opened. | doubleukay/godaikin-ha#13 |
| `gofanco_prophecy` | home-assistant/brands#6158 | https://github.com/gloriousdisaster/Home-Assistant-HDMI-PRO-Matrix | Active, pushed 2026-04-24 | Upstream PR opened. | gloriousdisaster/Home-Assistant-HDMI-PRO-Matrix#1 |
| `gofullhanger` | home-assistant/brands#6919 | https://github.com/bobbyleu/gofullhanger | Active, pushed 2026-05-09 | Upstream PR opened. | bobbyleu/gofullhanger#1 |
| `gonzales` | home-assistant/brands#9413 | https://github.com/akustikrausch/gonzales-ha | Active, pushed 2026-06-11 | Upstream PR opened. | akustikrausch/gonzales-ha#1 |
| `google_aqi` | home-assistant/brands#6755 | https://github.com/bairnhard/home-assistant-google-aqi | Active, pushed 2026-02-21 | Upstream PR opened. | bairnhard/home-assistant-google-aqi#8 |
| `google_drive_file_manager` | home-assistant/brands#9216 | https://github.com/wisse-smit/ha_google_drive_file_manager | Active, pushed 2025-10-22 | Upstream PR opened. | wisse-smit/ha_google_drive_file_manager#21 |
| `google_pollen` | home-assistant/brands#9261 | https://github.com/robbybarnes/google_pollen | Active, pushed 2026-10-07 | Upstream PR opened. | robbybarnes/google_pollen#5 |
| `googlefindmy` | home-assistant/brands#7907 | https://github.com/BSkando/GoogleFindMy-HA | Active, pushed 2026-10-17 | Upstream PR opened. | BSkando/GoogleFindMy-HA#231 |
| `govee` | home-assistant/brands#2374 | https://github.com/LaggAt/hacs-govee | Active, pushed 2026-04-28 | Upstream PR opened. | LaggAt/hacs-govee#292 |
| `govee_cloud` | home-assistant/brands#6964 | https://github.com/DnAp/ha-govee-cloud | Active, pushed 2026-05-20 | Upstream PR opened. | DnAp/ha-govee-cloud#1 |
| `govje_parking` | home-assistant/brands#9188 | https://github.com/Migz93/ha-govje_parking | Active, pushed 2026-10-15 | Not opened. The upstream PR template requires AI assistance and human review disclosures. Needs a decision. |  |
| `govje_weather` | home-assistant/brands#9187 | https://github.com/Migz93/ha-govje_weather | Active, pushed 2026-10-13 | Not opened. The upstream PR template requires AI assistance and human review disclosures. Needs a decision. |  |
| `gpio` | home-assistant/brands#5123 | https://github.com/jlinford/ha-gpio | Active, pushed 2024-03-31 | Upstream PR opened. | jlinford/ha-gpio#5 |
| `gpodder` | home-assistant/brands#1737 | https://github.com/custom-components/gpodder | Active, pushed 2021-06-05 | Upstream PR opened. | custom-components/gpodder#26 |
| `gpslive` | home-assistant/brands#8574 | https://github.com/BenWolstencroft/home-assistant-gpslive-integration | Active, pushed 2025-11-28 | Upstream PR opened. | BenWolstencroft/home-assistant-gpslive-integration#1 |
| `gree_central` | home-assistant/brands#9434 | https://github.com/cyanogenic/Ha-GreeCentralClimate | Active, pushed 2026-02-06 | Upstream PR opened. | cyanogenic/Ha-GreeCentralClimate#3 |
| `greenhess` | home-assistant/brands#7863 | https://github.com/greenhess/adap1meter | Active, pushed 2026-01-27 | Upstream PR opened. | greenhess/adap1meter#10 |
| `greenworks` | home-assistant/brands#7506 | https://github.com/Boes24/GreenWorks-HA | Active, pushed 2025-08-16 | Upstream PR opened. | Boes24/GreenWorks-HA#4 |
| `grill_buddy` | home-assistant/brands#5489 | https://github.com/jeroenterheerdt/grillbuddy | Active, pushed 2025-07-14 | Upstream PR opened. | jeroenterheerdt/grillbuddy#16 |
| `grohe_smarthome` | home-assistant/brands#6305 | https://github.com/Flo-Schilli/ha-grohe_smarthome | Active, pushed 2026-10-14 | Upstream PR opened. | Flo-Schilli/ha-grohe_smarthome#117 |
| `grott` | home-assistant/brands#4342 | https://github.com/muppet3000/homeassistant-grott | Active, pushed 2026-04-14 | Upstream PR opened. | muppet3000/homeassistant-grott#124 |
| `growatt_thor` | home-assistant/brands#8963 | https://github.com/bobbesnl/growatt_thor | Active, pushed 2026-10-17 | Upstream PR opened. | bobbesnl/growatt_thor#61 |
| `gruenbeck_cloud` | home-assistant/brands#5126 | https://github.com/p0l0/hagruenbeck_cloud | Active, pushed 2025-11-24 | Upstream PR opened. | p0l0/hagruenbeck_cloud#276 |
| `gyverlamp` | home-assistant/brands#2491 | https://github.com/AlexxIT/GyverLamp | Active, pushed 2024-12-08 | Upstream PR opened. | AlexxIT/GyverLamp#22 |
| `ha_bm2monitor` | home-assistant/brands#7004 | https://github.com/andystewart999/ha_bm2monitor | Active, pushed 2026-09-04 | Upstream PR opened. | andystewart999/ha_bm2monitor#7 |
| `ha_creality_ws` | home-assistant/brands#8124 | https://github.com/3dg1luk43/ha_creality_ws | Active, pushed 2026-10-08 | Not opened. The upstream PR template says to open an issue first and wait for the `accepted` label, and closes PRs without one. |  |
| `ha_ddp2wled` | home-assistant/brands#8867 | https://github.com/iamjoshk/ha_ddp2wled | Active, pushed 2026-02-16 | Upstream PR opened. | iamjoshk/ha_ddp2wled#3 |
| `ha_departures` | home-assistant/brands#6183 | https://github.com/alex-jung/ha-departures | Active, pushed 2026-10-14 | Upstream PR opened. | alex-jung/ha-departures#239 |
| `ha_ecowitt_iot` | home-assistant/brands#8851 | https://github.com/Ecowitt/ha-ecowitt-iot | Active, pushed 2026-09-10 | Upstream PR opened. | Ecowitt/ha-ecowitt-iot#97 |
| `ha_gtt` | home-assistant/brands#8690 | https://github.com/aesoftsolutions/Home-Assistant-custom-components-GTT | Active, pushed 2026-01-13 | Upstream PR opened. | aesoftsolutions/Home-Assistant-custom-components-GTT#1 |
| `ha_kassalapp` | home-assistant/brands#5186 | https://github.com/bendikrb/ha-kassalapp | Active, pushed 2024-12-04 | Upstream PR opened. | bendikrb/ha-kassalapp#1 |
| `ha_keenetic` | home-assistant/brands#6584 | https://github.com/akinin/ha_keenetic | Active, pushed 2026-09-21 | Upstream PR opened. | akinin/ha_keenetic#28 |
| `ha_kumo_ws` | home-assistant/brands#8804 | https://github.com/EnumC/ha_kumo_ws | Active, pushed 2026-10-04 | Upstream PR opened. | EnumC/ha_kumo_ws#2 |
| `ha_light_controller` | home-assistant/brands#9263 | https://github.com/L3DigitalNet/HA-Light-Controller | Active, pushed 2026-06-25 | Upstream PR opened. | L3DigitalNet/ha-light-controller#21 |
| `ha_media_bridge` | home-assistant/brands#9361 | https://github.com/mwenghi/ha-media-bridge | Active, pushed 2026-02-03 | Upstream PR opened. | mwenghi/ha-media-bridge#1 |
| `ha_mystop` | home-assistant/brands#8594 | https://github.com/MapGuy11/ha-myStop | Active, pushed 2026-03-09 | Upstream PR opened. | MapGuy11/ha-myStop#2 |
| `ha_oekofen` | home-assistant/brands#4301 | https://github.com/ckarrie/homeassistant-oekofen | Active, pushed 2023-11-03 | Upstream PR opened. | ckarrie/homeassistant-oekofen#16 |
| `ha_opcua_discovery` | home-assistant/brands#7841 | https://github.com/guanaco0403/Home-Assistant-Opcua-Discovery | Active, pushed 2026-06-03 | Upstream PR opened. | guanaco0403/Home-Assistant-Opcua-Discovery#7 |
| `ha_politikontroller` | home-assistant/brands#6160 | https://github.com/bendikrb/ha-politikontroller | Active, pushed 2025-05-29 | Upstream PR opened. | bendikrb/ha-politikontroller#2 |
| `ha_scheduler` | home-assistant/brands#8711 | https://github.com/Smiley73/ha-scheduler | Active, pushed 2026-10-15 | Upstream PR opened. | Smiley73/ha-scheduler#113 |
| `ha_sunforecast_plus` | home-assistant/brands#6905 | https://github.com/chourmovs/ha-sunforecast-plus | Active, pushed 2026-04-11 | Upstream PR opened. | chourmovs/ha-sunforecast-plus#44 |
| `ha_tedee_lock` | home-assistant/brands#3505 | https://github.com/andrzejchm/ha_tedee_lock | Active, pushed 2023-03-03 | Upstream PR opened. | andrzejchm/ha_tedee_lock#187 |
| `ha_tracker` | home-assistant/brands#6494 | https://github.com/vgcouso/ha-tracker | Active, pushed 2026-10-10 | Upstream PR opened. | vgcouso/ha-tracker#44 |
| `ha_transportnsw` | home-assistant/brands#5885 | https://github.com/andystewart999/ha_transportnsw | Active, pushed 2026-09-18 | Upstream PR opened. | andystewart999/ha_transportnsw#51 |
| `ha_unavailable_devices_report` | home-assistant/brands#9449 | https://github.com/VilniusTechnology/ha-unavailable-devices-report | Active, pushed 2026-03-05 | Upstream PR opened. | VilniusTechnology/ha-unavailable-devices-report#8 |
| `ha_users` | home-assistant/brands#8967 | https://github.com/lukegackle/Home-Assistant-User-Info-Integration | Active, pushed 2026-02-21 | Upstream PR opened. | lukegackle/Home-Assistant-User-Info-Integration#1 |
| `ha_usms` | home-assistant/brands#6918 | https://github.com/azsaurr/ha_usms | Active, pushed 2026-10-13 | Upstream PR opened. | azsaurr/ha_usms#81 |
| `ha_vacation` | home-assistant/brands#6726 | https://github.com/touero/HaVacation | Active, pushed 2026-07-03 | Upstream PR opened. | touero/HaVacation#28 |
| `ha_wordplay` | home-assistant/brands#7692 | https://github.com/CBDesignS/ha-wordplay | Active, pushed 2026-01-05 | Upstream PR opened. | CBDesignS/ha-wordplay#5 |
| `hacs-minerstat` | home-assistant/brands#1684 | https://github.com/gilsonmandalogo/hacs-minerstat | Active, pushed 2022-01-11 | Upstream PR opened. | gilsonmandalogo/hacs-minerstat#11 |
| `hafele_connect_mesh` | home-assistant/brands#5504 | https://github.com/guillaumeseur/hafele_connect_mesh | Active, pushed 2025-01-22 | Upstream PR opened. | guillaumeseur/hafele_connect_mesh#6 |
| `hafo` | home-assistant/brands#8807 | https://github.com/hass-energy/hafo | Active, pushed 2026-04-14 | Upstream PR opened. | hass-energy/hafo#35 |
| `haier_evo` | home-assistant/brands#5465 | https://github.com/and7ey/haier_evo | Active, pushed 2026-05-15 | Upstream PR opened. | and7ey/haier_evo#104 |
| `hakboard` | home-assistant/brands#8606 | https://github.com/aktive/hakboard | Active, pushed 2025-12-02 | Upstream PR opened. | aktive/hakboard#2 |
| `ham_radio_propagation` | home-assistant/brands#4218 | https://github.com/emics/ham_radio_propagation | Active, pushed 2025-07-08 | Upstream PR opened. | emics/ham_radio_propagation#47 |
| `handballnet` | home-assistant/brands#7142 | https://github.com/miggi92/hass-handball.net | Active, pushed 2026-10-17 | Upstream PR opened. | miggi92/hass-handball.net#89 |
| `harvest_right` | home-assistant/brands#9490 | https://github.com/itsdrewmiller/ha-harvest-right | Active, pushed 2026-09-08 | Upstream PR opened. | itsdrewmiller/ha-harvest-right#5 |
| `harvest_time_tracker` | home-assistant/brands#4465 | https://github.com/BottlecapDave/HomeAssistant-HarvestTimeTracker | Active, pushed 2026-02-09 | Upstream PR opened. | BottlecapDave/HomeAssistant-HarvestTimeTracker#18 |
| `harvia_sauna` | home-assistant/brands#9630 | https://github.com/brettmeyerowitz/ha-harvia-xenio-wifi | Active, pushed 2026-08-08 | Upstream PR opened. | brettmeyerowitz/ha-harvia-xenio-wifi#2 |
| `haseiq` | home-assistant/brands#6080 | https://github.com/Xsez/haseiq | Active, pushed 2026-10-17 | Upstream PR opened. | Xsez/haseiq#3 |
| `hass_agent` | home-assistant/brands#3712 | https://github.com/LAB02-Research/HASS.Agent-Integration | Active, pushed 2024-05-09 | Upstream PR opened. | LAB02-Research/HASS.Agent-Integration#68 |
| `hass_agent_notifier` | home-assistant/brands#2961 | https://github.com/LAB02-Research/HASS.Agent-Notifier | Active, pushed 2022-11-17 | Upstream PR opened. | LAB02-Research/HASS.Agent-Notifier#32 |
| `hass_claude_usage` | home-assistant/brands#9491 | https://github.com/trickv/hass-claude-usage | Active, pushed 2026-08-28 | Upstream PR opened. | trickv/hass-claude-usage#18 |
| `hass_ensto_ble` | home-assistant/brands#6656 | https://github.com/ExMacro/hass_ensto_ble | Active, pushed 2026-10-09 | Upstream PR opened. | ExMacro/hass_ensto_ble#36 |
| `hass_gira_iot_api` | home-assistant/brands#8200 | https://github.com/MadOne/hass_gira_iot_api | Active, pushed 2026-01-04 | Upstream PR opened. | MadOne/hass_gira_iot_api#9 |
| `hass_meteolux` | home-assistant/brands#7580 | https://github.com/sim0nx/hass_meteolux | Active, pushed 2026-05-17 | Upstream PR opened. | sim0nx/hass_meteolux#1 |
| `hassarr` | home-assistant/brands#6268 | https://github.com/TegridyTate/Hassarr | Active, pushed 2024-12-26 | Upstream PR opened. | TegridyTate/Hassarr#18 |
| `hastrom_flex` | home-assistant/brands#9235 | https://github.com/f2daz/ha-integration_hastrom_flex | Active, pushed 2026-09-17 | Upstream PR opened. | f2daz/ha-integration_hastrom_flex#1 |
| `hausbus` | home-assistant/brands#7758 | https://github.com/hausbus/integration_hausbus | Active, pushed 2026-05-30 | Upstream PR opened. | hausbus/integration_hausbus#3 |
| `hdg_boiler` | home-assistant/brands#8812 | https://github.com/banter240/hdg_bavaria_homeassistant | Active, pushed 2026-10-18 | Upstream PR opened. | banter240/hdg_bavaria_homeassistant#67 |
| `healthsync_ha` | home-assistant/brands#8610 | https://github.com/InfoSecured/healthsync-ha | Active, pushed 2026-03-19 | Upstream PR opened. | WeaveHubHQ/healthsync-ha#4 |
| `heat_pump_pilot` | home-assistant/brands#8848 | https://github.com/andox/heat-pump-pilot | Active, pushed 2026-10-06 | Upstream PR opened. | andox/heat-pump-pilot#1 |
| `heatapp_local` | home-assistant/brands#4379 | https://github.com/sfstar/hass-heatapp_local | Active, pushed 2023-06-09 | Upstream PR opened. | sfstar/hass-heatapp_local#8 |
| `heizoel24mex` | home-assistant/brands#5621 | https://github.com/MartinStoffel/heizoel24mex | Active, pushed 2026-10-17 | Upstream PR opened. | MartinStoffel/heizoel24mex#15 |
| `heizungs_pull` | home-assistant/brands#9572 | https://github.com/manny0808/Heizungs-pull | Active, pushed 2026-02-17 | Upstream PR opened. | manny0808/Heizungs-pull#1 |
| `hekr` | home-assistant/brands#1678 | https://github.com/alryaz/hass-hekr-component | Active, pushed 2025-07-15 | Upstream PR opened. | alryaz/hass-hekr-component#33 |
| `helen_energy` | home-assistant/brands#7915 | https://github.com/carohauta/oma-helen-ha-integration | Active, pushed 2026-10-01 | Upstream PR opened. | carohauta/oma-helen-ha-integration#45 |
| `helium_solana` | home-assistant/brands#4340 | https://github.com/enes-oerdek/Home-Assistant-Helium-Integration | Active, pushed 2025-01-05 | Upstream PR opened. | enes-oerdek/Home-Assistant-Helium-Integration#24 |
| `hella_onyx` | home-assistant/brands#2257 | https://github.com/muhlba91/onyx-homeassistant-integration | Active, pushed 2026-10-17 | Upstream PR opened. | muhlba91/onyx-homeassistant-integration#696 |
| `herohealth` | home-assistant/brands#9522 | https://github.com/dakahler/ha_herohealth | Active, pushed 2026-02-11 | Upstream PR opened. | dakahler/ha_herohealth#1 |
| `herospeed_xvr` | home-assistant/brands#6040 | https://github.com/DominikWrobel/herospeed_xvr | Active, pushed 2026-09-05 | Upstream PR opened. | DominikWrobel/herospeed_xvr#1 |
| `hetzner` | home-assistant/brands#9332 | https://github.com/Dixet/homeassistant_hetzner | Active, pushed 2026-07-21 | Upstream PR opened. | Dixet/homeassistant_hetzner#9 |
| `hevy` | home-assistant/brands#6735 | https://github.com/hudsonbrendon/HA-hevy | Active, pushed 2026-07-20 | Upstream PR opened. | hudsonbrendon/HA-hevy#99 |
| `hgsmart` | home-assistant/brands#9347 | https://github.com/Serjlee/hacs_hgsmart-pet-feeder | Active, pushed 2026-09-14 | Upstream PR opened. | Serjlee/HA_hgsmart-pet-feeder#12 |
| `hid_usbrelay` | home-assistant/brands#8520 | https://github.com/arnoudkooi/ha-hid-usbrelay | Active, pushed 2025-11-24 | Upstream PR opened. | arnoudkooi/ha-hid-usbrelay#1 |
| `hisense` | home-assistant/brands#5588 | https://github.com/manymuch/HisenseHA | Active, pushed 2026-10-11 | Upstream PR opened. | manymuch/HisenseHA#32 |
| `hisense_ac_plugin` | home-assistant/brands#7422 | https://github.com/Connectlife-LLC/HomeAssistantPlugin | Active, pushed 2025-07-03 | Upstream PR opened. | Connectlife-LLC/HomeAssistantPlugin#47 |
| `hive_local_thermostat` | home-assistant/brands#5360 | https://github.com/andrew-codechimp/HA-Hive-Local-Thermostat | Active, pushed 2026-03-26 | Not opened. Pull requests are disabled on the upstream repository. |  |
| `hivi_speaker` | home-assistant/brands#9004 | https://github.com/swansmart/hivi_speaker | Active, pushed 2026-02-09 | Upstream PR opened. | swansmart/hivi_speaker#1 |
| `hk_air_quality` | home-assistant/brands#5606 | https://github.com/yangqian/hass-hk_air_quality | Active, pushed 2026-06-21 | Upstream PR opened. | yangqian/hass-hk_air_quality#1 |
| `holfuy` | home-assistant/brands#7016 | https://github.com/haavardj/ha-holfuy | Active, pushed 2025-05-17 | Upstream PR opened. | haavardj/ha-holfuy#1 |
| `home_agent` | home-assistant/brands#8567 | https://github.com/aradlein/hass-agent-llm | Active, pushed 2026-05-11 | Upstream PR opened. | aradlein/hass-agent-llm#53 |
| `home_infopoint` | home-assistant/brands#9470 | https://github.com/ToperGamesYT/home-infopoint | Active, pushed 2026-02-14 | Upstream PR opened. | ToperGamesYT/home-infopoint#1 |
| `home_inventory` | home-assistant/brands#8243 | https://github.com/SnipsC0/Home-Inventory | Active, pushed 2026-03-20 | Upstream PR opened. | SnipsC0/Home-Inventory#7 |
| `home_maintenance` | home-assistant/brands#7178 | https://github.com/TJPoorman/home_maintenance | Active, pushed 2026-02-03 | Upstream PR opened. | TJPoorman/home_maintenance#123 |
| `home_performance` | home-assistant/brands#8766 | https://github.com/Hugofromfrance/home_performance | Active, pushed 2026-06-12 | Upstream PR opened. | Hugofromfrance/home_performance#86 |
| `homeclaw` | home-assistant/brands#9517 | https://github.com/Thioby/homeclaw-agent | Active, pushed 2026-09-01 | Upstream PR opened. | Thioby/homeclaw-agent#8 |
| `homeconnect_ws` | home-assistant/brands#6707 | https://github.com/chris-mc1/homeconnect_local_hass | Active, pushed 2026-10-18 | Upstream PR opened. | chris-mc1/homeconnect_local_hass#538 |
| `homely` | home-assistant/brands#8110 | https://github.com/bjafl/homely-ha | Active, pushed 2026-07-06 | Upstream PR opened. | bjafl/homely-ha#5 |
| `homevolt_local` | home-assistant/brands#8681 | https://github.com/JohNan/homeassistant-homevolt-local | Active, pushed 2026-10-14 | Upstream PR opened. | JohNan/homeassistant-homevolt-local#127 |
| `homewerks_smart_fan` | home-assistant/brands#9243 | https://github.com/RayHollister/homewerks-smart-fan-integration | Active, pushed 2026-05-17 | Upstream PR opened. | RayHollister/homewerks-smart-fan-integration#7 |
| `hon` | home-assistant/brands#4196 | https://github.com/Andre0512/hon | Active, pushed 2024-08-15 | Upstream PR opened. | Andre0512/hon#332 |
| `honghui_climate` | home-assistant/brands#6776 | https://github.com/zhheo/ha_honghui_climate | Active, pushed 2026-04-27 | Upstream PR opened. | zhheo/ha_honghui_climate#9 |
| `hottoh` | home-assistant/brands#4889 | https://github.com/benlbrm/ha-hottoh-component | Active, pushed 2026-06-23 | Upstream PR opened. | benlbrm/ha-hottoh-component#29 |
| `hs_command_listener` | home-assistant/brands#7180 | https://github.com/alexbk66/hs_command_listener2 | Active, pushed 2026-10-13 | Upstream PR opened. | alexbk66/hs_command_listener2#2 |
| `htd` | home-assistant/brands#6333 | https://github.com/hikirsch/htd-home-assistant | Active, pushed 2026-02-15 | Upstream PR opened. | hikirsch/htd-home-assistant#45 |
| `http_garage_toggle` | home-assistant/brands#7697 | https://github.com/DoWenzl94/http_garage_toggle | Active, pushed 2025-08-16 | Upstream PR opened. | DoWenzl94/http_garage_toggle#1 |
| `hubc2000pp` | home-assistant/brands#4205 | https://github.com/Regressor/hass-hubc2000pp | Active, pushed 2026-09-21 | Upstream PR opened. | Regressor/hass-hubc2000pp#7 |
| `huerizon` | home-assistant/brands#8309 | https://github.com/Avasond/Huerizon | Active, pushed 2025-11-02 | Upstream PR opened. | Avasond/Huerizon#1 |
| `huffbox` | home-assistant/brands#5679 | https://github.com/AlienCatTech/ha-huffbox | Active, pushed 2025-01-25 | Upstream PR opened. | AlienCatTech/ha-huffbox#2 |
| `huggingchat_conversation` | home-assistant/brands#5088 | https://github.com/PhoenixR49/hass-huggingchat-conversation | Active, pushed 2025-04-30 | Upstream PR opened. | PhoenixR49/hass-huggingchat-conversation#27 |
| `hummingbot` | home-assistant/brands#4388 | https://github.com/TheHolyRoger/hass-hummingbot | Active, pushed 2023-05-21 | Upstream PR opened. | TheHolyRoger/hass-hummingbot#1 |
| `hunter_wifi` | home-assistant/brands#9631 | https://github.com/DmytryS/ha-hunter-wifi | Active, pushed 2026-05-01 | Upstream PR opened. | DmytryS/ha-hunter-wifi#10 |
| `hvac_group` | home-assistant/brands#4796 | https://github.com/tetele/hvac_group | Active, pushed 2025-06-20 | Upstream PR opened. | tetele/hvac_group#125 |
| `hydrolix_history` | home-assistant/brands#9518 | https://github.com/dsztykman/hydrolix_home_assistant | Active, pushed 2026-02-10 | Upstream PR opened. | dsztykman/hydrolix_home_assistant#1 |
| `hydropeak` | home-assistant/brands#6329 | https://github.com/Beat-YT/hydropeak-ha | Active, pushed 2026-06-16 | Upstream PR opened. | Beat-YT/hydropeak-ha#21 |
| `hydroqc` | home-assistant/brands#8621 | https://github.com/hydroqc/hydroqc-ha | Active, pushed 2026-09-19 | Upstream PR opened. | hydroqc/hydroqc-ha#146 |
| `hyperbase` | home-assistant/brands#7760 | https://github.com/eclipseron/homeassistant-hyperbase | Active, pushed 2025-09-30 | Upstream PR opened. | eclipseron/homeassistant-hyperbase#23 |
| `hyperliquid` | home-assistant/brands#9316 | https://github.com/beMoD/homeassistant-hyperliquid | Active, pushed 2026-10-16 | Upstream PR opened. | beMoD/homeassistant-hyperliquid#1 |
| `i_regul_heatpump` | home-assistant/brands#5347 | https://github.com/RedPaladin/i_regul_heatpump | Active, pushed 2025-09-30 | Upstream PR opened. | RedPaladin/i_regul_heatpump#1 |
| `iaquk` | home-assistant/brands#2312 | https://github.com/Limych/ha-iaquk | Active, pushed 2025-01-04 | Upstream PR opened. | Limych/ha-iaquk#177 |
| `ica` | home-assistant/brands#6632 | https://github.com/LazyTarget/ha-ica-todo | Active, pushed 2026-09-03 | Upstream PR opened. | lazytarget/ha-ica-todo#41 |
| `idiamant` | home-assistant/brands#3211 | https://github.com/clementprevot/home-assistant-idiamant | Active, pushed 2023-03-03 | Upstream PR opened. | clementprevot/home-assistant-idiamant#208 |
| `idm_hpweb` | home-assistant/brands#9425 | https://github.com/AndyNew2/hacs-idm-hpweb | Active, pushed 2026-08-03 | Upstream PR opened. | AndyNew2/hacs-idm-hpweb#13 |
| `ihomma_sml` | home-assistant/brands#6578 | https://github.com/gawindx/iHomma-SML | Active, pushed 2025-03-04 | Upstream PR opened. | gawindx/iHomma-SML#1 |
| `ikuai` | home-assistant/brands#4018 | https://github.com/dscao/ikuai | Active, pushed 2026-02-16 | Upstream PR opened. | dscao/ikuai#38 |
| `imgw_pib_monitor` | home-assistant/brands#9539 | https://github.com/abnvle/ha-imgw-pib-monitor | Active, pushed 2026-05-06 | Upstream PR opened. | abnvle/ha-imgw-pib-monitor#13 |
| `immersive_home` | home-assistant/brands#5477 | https://github.com/Nitwel/Immersive-Home | Active, pushed 2025-01-28 | Upstream PR opened. | Nitwel/Immersive-Home#193 |
| `imou_cam_ptz` | home-assistant/brands#8805 | https://github.com/hoangminh1109/imou_cam_ptz | Active, pushed 2026-01-10 | Upstream PR opened. | hoangminh1109/imou_cam_ptz#1 |
| `impc_energy` | home-assistant/brands#4235 | https://github.com/NiaoBlush/impc_energy | Active, pushed 2026-06-24 | Upstream PR opened. | NiaoBlush/impc_energy#9 |
| `ims_envista` | home-assistant/brands#5896 | https://github.com/guyKh/ims-envista-custom-component | Active, pushed 2026-10-13 | Upstream PR opened. | GuyKh/ims-envista-custom-component#115 |
| `ina219_ups_hat` | home-assistant/brands#4799 | https://github.com/odya/hacs-ina219-ups-hat | Active, pushed 2024-11-12 | Upstream PR opened. | odya/hass-ina219-ups-hat#42 |
| `indigo_springs` | home-assistant/brands#6838 | https://github.com/bhackworth/hass-indigo-springs | Active, pushed 2025-05-10 | Upstream PR opened. | bhackworth/hass-indigo-springs#2 |
| `influxdb_query_api` | home-assistant/brands#8325 | https://github.com/Riscue/ha-influxdb-query-api | Active, pushed 2025-11-17 | Upstream PR opened. | Riscue/ha-influxdb-query-api#1 |
| `infometric` | home-assistant/brands#7423 | https://github.com/AndersMarkoff/homeassistant-infometric | Active, pushed 2025-07-09 | Upstream PR opened. | AndersMarkoff/homeassistant-infometric#1 |
| `ingv_centro_nazionale_terremoti` | home-assistant/brands#1978 | https://github.com/caiosweet/Home-Assistant-custom-components-INGV | Active, pushed 2026-06-19 | Upstream PR opened. | caiosweet/Home-Assistant-custom-components-INGV#43 |
| `inim_cloud` | home-assistant/brands#7323 | https://github.com/lacherogwu/ha-inim_cloud | Active, pushed 2025-06-23 | Upstream PR opened. | lacherogwu/ha-inim_cloud#2 |
| `inmet_weather` | home-assistant/brands#8224 | https://github.com/zanaca/ha-inmet-weather | Active, pushed 2025-12-04 | Upstream PR opened. | zanaca/ha-inmet-weather#18 |
| `innova` | home-assistant/brands#3416 | https://github.com/danielrivard/homeassistant-innova | Active, pushed 2026-10-14 | Upstream PR opened. | danielrivard/homeassistant-innova#337 |
| `input_stats` | home-assistant/brands#5499 | https://github.com/MiguelAngelLV/ha-input-stats | Active, pushed 2024-11-13 | Upstream PR opened. | miguelangellv/ha-input-stats#7 |
| `inspire_home_automation` | home-assistant/brands#9482 | https://github.com/Smart-Home-Shop/ha-inspire-integration | Active, pushed 2026-02-08 | Upstream PR opened. | Smart-Home-Shop/ha-inspire-integration#1 |
| `intelbras_alarm` | home-assistant/brands#7489 | https://github.com/tarikbc/ha-intelbras-alarm | Active, pushed 2026-08-12 | Upstream PR opened. | tarikbc/ha-intelbras-alarm#5 |
| `intelligent_heating_pilot` | home-assistant/brands#9289 | https://github.com/RastaChaum/Intelligent-Heating-Pilot | Active, pushed 2026-10-13 | Upstream PR opened. | RastaChaum/Intelligent-Heating-Pilot#154 |
| `intersvyaz` | home-assistant/brands#6439 | https://github.com/hoolea/intersvyaz_hass | Active, pushed 2026-10-15 | Upstream PR opened. | hoolea/intersvyaz_hass#11 |
| `intesishome_local` | home-assistant/brands#6083 | https://github.com/donfrensis/HA-IntesisHome-Local | Active, pushed 2024-11-13 | Upstream PR opened. | donfrensis/HA-IntesisHome-Local#3 |
| `intex_spa` | home-assistant/brands#3550 | https://github.com/mathieu-mp/homeassistant-intex-spa | Active, pushed 2026-02-13 | Upstream PR opened. | mathieu-mp/homeassistant-intex-spa#157 |
| `intre_smart_home_control` | home-assistant/brands#7716 | https://github.com/xmhfw/Intre_Smart_Home_Control | Active, pushed 2025-12-04 | Upstream PR opened. | xmhfw/Intre_Smart_Home_Control#5 |
| `invader_tracker` | home-assistant/brands#9284 | https://github.com/Trolent/HA-Invader-Tracker | Active, pushed 2026-06-06 | Upstream PR opened. | Timothee-Rolland/HA-Invader-Tracker#1 |
| `inverter_controller` | home-assistant/brands#8868 | https://github.com/MarcelWepper/Inverter-Controller-HACS | Active, pushed 2026-03-18 | Upstream PR opened. | MarcelWepper/Inverter-Controller#2 |
| `inverter_xpert_king` | home-assistant/brands#4318 | https://github.com/astraliens/home-assistant-inverter-xpert-king | Active, pushed 2026-08-29 | Upstream PR opened. | astraliens/home-assistant-inverter-xpert-king#4 |
| `investing_portfolio` | home-assistant/brands#8852 | https://github.com/T-leco/investing_portfolio | Active, pushed 2025-12-24 | Upstream PR opened. | T-leco/investing_portfolio#1 |
| `iopool` | home-assistant/brands#7037 | https://github.com/mguyard/hass-iopool | Active, pushed 2026-10-12 | Upstream PR opened. | mguyard/hass-iopool#126 |
| `ipcom` | home-assistant/brands#9118 | https://github.com/J-Delsinne/AnB_Rimex-HomeAnyWhere-HA-Integration | Active, pushed 2026-02-08 | Upstream PR opened. | J-Delsinne/AnB_Rimex-HomeAnyWhere-HA-Integration#16 |
| `ipixel_color` | home-assistant/brands#8683 | https://github.com/cagcoach/ha-ipixel-color | Active, pushed 2025-12-16 | Upstream PR opened. | cagcoach/ha-ipixel-color#47 |
| `ipmi` | home-assistant/brands#4512 | https://github.com/ateodorescu/home-assistant-ipmi | Active, pushed 2026-09-15 | Upstream PR opened. | ateodorescu/home-assistant-ipmi#93 |
| `ipv64` | home-assistant/brands#4492 | https://github.com/Ludy87/ipv64 | Active, pushed 2026-10-17 | Upstream PR opened. | Ludy87/ipv64#473 |
| `ir_light` | home-assistant/brands#8769 | https://github.com/Infinitte/HA-IR-Light | Active, pushed 2026-02-06 | Upstream PR opened. | Infinitte/HA-IR-Light#4 |
| `iracing` | home-assistant/brands#4855 | https://github.com/cazeaux/ha-iracing | Active, pushed 2025-12-13 | Upstream PR opened. | cazeaux/ha-iracing#28 |
| `irsap_ha` | home-assistant/brands#6039 | https://github.com/hexCut/irsap-ha | Active, pushed 2026-10-17 | Not opened. The upstream PR template says to open PRs against `dev`, so the branch has to be based on `dev`, not the default branch. |  |
| `ista_calista` | home-assistant/brands#6893 | https://github.com/herruzo99/ista-calista | Active, pushed 2026-04-02 | Upstream PR opened. | herruzo99/ista-calista#2 |
| `ista_online` | home-assistant/brands#7567 | https://github.com/JeppeLeth/hass-ista-online | Active, pushed 2026-10-12 | Upstream PR opened. | JeppeLeth/hass-ista-online#2 |
| `istoreos` | home-assistant/brands#8355 | https://github.com/SJMTIII/istoreos | Active, pushed 2025-11-05 | Upstream PR opened. | SJMTIII/istoreos#2 |
| `itchio` | home-assistant/brands#6085 | https://github.com/Hermesiss/itchio_homeassistant | Active, pushed 2025-05-26 | Upstream PR opened. | Hermesiss/itchio_homeassistant#3 |
| `ivent` | home-assistant/brands#7366 | https://github.com/cbuctok/ha-ivent | Active, pushed 2025-06-14 | Upstream PR opened. | cbuctok/ha-ivent#2 |
| `ivideon` | home-assistant/brands#8959 | https://github.com/alexanderznamensky/ivideon | Active, pushed 2026-05-13 | Upstream PR opened. | alexanderznamensky/Ivideon#1 |
| `ixfield` | home-assistant/brands#7726 | https://github.com/samsk/ixfield-cloud | Active, pushed 2025-10-06 | Upstream PR opened. | samsk/ixfield-cloud#4 |
| `jet2` | home-assistant/brands#5764 | https://github.com/jampez77/Jet2 | Active, pushed 2026-09-01 | Upstream PR opened. | jampez77/Jet2#7 |
| `jira_filters` | home-assistant/brands#8125 | https://github.com/dotelpenguin/ha-integration-jirafilters | Active, pushed 2025-10-27 | Upstream PR opened. | dotelpenguin/ha-integration-jirafilters#11 |
| `jokes` | home-assistant/brands#3859 | https://github.com/LaggAt/hacs-jokes | Active, pushed 2025-01-07 | Upstream PR opened. | LaggAt/ha-jokes#18 |
| `jq300` | home-assistant/brands#2313 | https://github.com/Limych/ha-jq300 | Active, pushed 2023-03-08 | Upstream PR opened. | Limych/ha-jq300#139 |
| `jriver` | home-assistant/brands#5071 | https://github.com/3ll3d00d/jriver_homeassistant | Active, pushed 2025-10-03 | Upstream PR opened. | 3ll3d00d/jriver_homeassistant#29 |
| `judo_rest_api` | home-assistant/brands#6236 | https://github.com/OStrama/judo_rest_api | Active, pushed 2025-08-31 | Upstream PR opened. | OStrama/judo_rest_api#48 |
| `jura` | home-assistant/brands#4661 | https://github.com/AlexxIT/Jura | Active, pushed 2026-10-01 | Upstream PR opened. | AlexxIT/Jura#75 |
| `kadermanager` | home-assistant/brands#5550 | https://github.com/FaserF/ha-kadermanager | Active, pushed 2026-10-11 | Upstream PR opened. | FaserF/ha-kadermanager#42 |
| `kasa_ke100_min` | home-assistant/brands#8265 | https://github.com/MTTPoll/Kasa-KE-100-min | Active, pushed 2025-10-29 | Upstream PR opened. | MTTPoll/Kasa-KE-100-min#1 |
| `kat_bulgaria` | home-assistant/brands#4487 | https://github.com/Nedevski/hacs_kat_bulgaria | Active, pushed 2026-05-10 | Upstream PR opened. | nedevski/hass_kat_bulgaria#33 |
| `keemple` | home-assistant/brands#7408 | https://github.com/DawidPietrykowski/keemple-ha | Active, pushed 2026-03-18 | Upstream PR opened. | DawidPietrykowski/keemple-ha#2 |
| `kenter` | home-assistant/brands#7934 | https://github.com/filmgarage/ha-kenter | Active, pushed 2026-03-24 | Upstream PR opened. | filmgarage/ha-kenter#2 |
| `kevo_plus` | home-assistant/brands#3977 | https://github.com/dcmeglio/home-assistant-kevo | Active, pushed 2023-02-20 | Upstream PR opened. | dcmeglio/home-assistant-kevo#4 |
| `kia_uvo` | home-assistant/brands#2894 | https://github.com/fuatakgun/kia_uvo | Active, pushed 2026-10-18 | Upstream PR opened. | Hyundai-Kia-Connect/kia_uvo#1976 |
| `kidde_homesafe` | home-assistant/brands#7133 | https://github.com/snell-evan-itt/Kidde-HomeSafe | Active, pushed 2026-08-17 | Upstream PR opened. | snell-evan-itt/Kidde-HomeSafe#24 |
| `kilight` | home-assistant/brands#6832 | https://github.com/ErraticTech/kilight-hass | Active, pushed 2026-01-26 | Upstream PR opened. | ErraticTech/kilight-hass#74 |
| `king_smith` | home-assistant/brands#4851 | https://github.com/indiefan/king_smith | Active, pushed 2024-08-20 | Upstream PR opened. | indiefan/king_smith#59 |
| `kingsmith_walkingpad` | home-assistant/brands#7677 | https://github.com/UrbanTechIO/KingSmith-WalkingPad | Active, pushed 2026-06-16 | Upstream PR opened. | UrbanTechIO/KingSmith-WalkingPad#5 |
| `kippy` | home-assistant/brands#7861 | https://github.com/ThomasHFWright/kippy-homeassistant-hacs | Active, pushed 2026-09-21 | Upstream PR opened. | ThomasHFWright/kippy-homeassistant#182 |
| `kitchenowl` | home-assistant/brands#6311 | https://github.com/TomBursch/kitchenowl-ha | Active, pushed 2026-04-03 | Upstream PR opened. | TomBursch/kitchenowl-ha#9 |
| `knmi` | home-assistant/brands#2661 | https://github.com/golles/ha-knmi | Active, pushed 2026-10-18 | Not opened. The existing fork frenck/ha-knmi is 29 commits behind with workflow changes, so GitHub rejects the push without the `workflow` scope. Needs `gh auth refresh -s workflow`, then retry. |  |
| `kobold_vr7` | home-assistant/brands#6144 | https://github.com/jmzg93/koboldHAIntegration | Active, pushed 2026-06-07 | Upstream PR opened. | jmzg93/koboldVR7Integration#29 |
| `kocom_energy` | home-assistant/brands#6353 | https://github.com/angkk2u/kocom_energy | Active, pushed 2025-01-18 | Upstream PR opened. | angkk2u/kocom_energy#2 |
| `kodi_helpers` | home-assistant/brands#7673 | https://github.com/Bitte-ein-Git/ha_kodi_helpers | Active, pushed 2026-02-24 | Upstream PR opened. | Bitte-ein-Git/ha_kodi_helpers#5 |
| `komfovent` | home-assistant/brands#6778 | https://github.com/lnagel/hass-komfovent | Active, pushed 2026-10-18 | Upstream PR opened. | lnagel/hass-komfovent#252 |
| `komodo` | home-assistant/brands#9581 | https://github.com/dkarv/ha-komodo | Active, pushed 2026-10-12 | Upstream PR opened. | dkarv/ha-komodo#58 |
| `kopia_webhook` | home-assistant/brands#8427 | https://github.com/SpaceFrags/kopia_webhook | Active, pushed 2026-02-02 | Upstream PR opened. | SpaceFrags/kopia_webhook#2 |
| `kroger` | home-assistant/brands#9590 | https://github.com/fortepc/kroger-ha-integration | Active, pushed 2026-02-14 | Upstream PR opened. | fortepc/kroger-ha-integration#1 |
| `kronoterm` | home-assistant/brands#6359 | https://github.com/Favio25/Kronoterm-homeassistant | Active, pushed 2026-08-05 | Upstream PR opened. | Favio25/Kronoterm-homeassistant#65 |
| `kumo` | home-assistant/brands#1619 | https://github.com/dlarrick/hass-kumo | Active, pushed 2026-10-04 | Upstream PR opened. | dlarrick/hass-kumo#235 |
| `kvv_departure_monitor` | home-assistant/brands#7844 | https://github.com/drlaplace/KVV_Departure_Monitor | Active, pushed 2026-01-27 | Upstream PR opened. | drlaplace/KVV_Departure_Monitor#3 |
| `kwh_to_won_general` | home-assistant/brands#5480 | https://github.com/dugurs/kwh_to_won_general | Active, pushed 2024-11-17 | Upstream PR opened. | dugurs/kwh_to_won_general#1 |
| `kwikset` | home-assistant/brands#3364 | https://github.com/explosivo22/kwikset-ha | Active, pushed 2026-04-28 | Upstream PR opened. | explosivo22/kwikset-ha#130 |
| `lacrosse_alerts` | home-assistant/brands#8009 | https://github.com/craigbye/home-assistant-lacrosse-alerts | Active, pushed 2026-01-18 | Upstream PR opened. | craigbye/home-assistant-lacrosse-alerts#7 |
| `laifen_ble` | home-assistant/brands#6460 | https://github.com/UrbanTechIO/Laifen | Active, pushed 2026-09-02 | Upstream PR opened. | UrbanTechIO/Laifen#13 |
| `lambda_heat_pumps` | home-assistant/brands#7298 | https://github.com/GuidoJeuken-6512/lambda_wp_hacs | Active, pushed 2026-10-18 | Not opened. The upstream `.gitignore` ignores the brand images, so they need a forced add. Needs a decision. |  |
| `lambda_heatpump` | home-assistant/brands#6883 | https://github.com/route662/Lambda-Heatpump | Active, pushed 2025-10-07 | Upstream PR opened. | route662/Lambda-Heatpump#26 |
| `lampie` | home-assistant/brands#7446 | https://github.com/wbyoung/lampie | Active, pushed 2026-09-08 | Upstream PR opened. | wbyoung/lampie#39 |
| `ld2410` | home-assistant/brands#7806 | https://github.com/Megarushing/ha-ld2410 | Active, pushed 2026-10-06 | Upstream PR opened. | Megarushing/ha-ld2410#105 |
| `led_matrix_zmq` | home-assistant/brands#6153 | https://github.com/Knifa/led-matrix-zmq-hass | Active, pushed 2026-07-12 | Upstream PR opened. | Knifa/led-matrix-zmq-hass#1 |
| `ledfx` | home-assistant/brands#3408 | https://github.com/dmamontov/hass-ledfx | Active, pushed 2023-07-15 | Upstream PR opened. | dmamontov/hass-ledfx#29 |
| `leitir` | home-assistant/brands#9227 | https://github.com/axelpaul/leitir-ha | Active, pushed 2026-02-12 | Upstream PR opened. | axelpaul/leitir-ha#2 |
| `lennoxs30` | home-assistant/brands#3866 | https://github.com/PeteRager/lennoxs30 | Active, pushed 2026-08-13 | Upstream PR opened. | PeteRager/lennoxs30#437 |
| `lepro_led` | home-assistant/brands#7787 | https://github.com/Sanji78/lepro_led | Active, pushed 2026-05-14 | Upstream PR opened. | Sanji78/lepro_led#31 |
| `lexman_ble` | home-assistant/brands#6288 | https://github.com/davidsmfreire/lexman-ble | Active, pushed 2026-03-29 | Upstream PR opened. | davidsmfreire/lexman-ble#56 |
| `lg_ess` | home-assistant/brands#7394 | https://github.com/dkarv/ha-lg-ess | Active, pushed 2026-06-05 | Upstream PR opened. | dkarv/ha-lg-ess#35 |
| `lg_tv_serial` | home-assistant/brands#7143 | https://github.com/mvdwetering/lg_tv_serial | Active, pushed 2026-05-15 | Upstream PR opened. | mvdwetering/lg_tv_serial#18 |
| `libratone_zipp` | home-assistant/brands#2642 | https://github.com/Chouffy/home_assistant_libratone_zipp | Active, pushed 2025-10-08 | Upstream PR opened. | Chouffy/home_assistant_libratone_zipp#9 |
| `lifegear_hrv` | home-assistant/brands#8907 | https://github.com/3uperduck/lifegear_hrv | Active, pushed 2026-04-19 | Upstream PR opened. | 3uperduck/lifegear_hrv#1 |
| `light_sync_group` | home-assistant/brands#5446 | https://github.com/avishorp/sync_group | Active, pushed 2024-06-09 | Upstream PR opened. | avishorp/sync_group#2 |
| `lightener` | home-assistant/brands#4255 | https://github.com/fredck/lightener | Active, pushed 2025-10-21 | Upstream PR opened. | fredck/lightener#153 |
| `lighting_zone` | home-assistant/brands#6766 | https://github.com/rickmoonex/hass-lighting-zone | Active, pushed 2026-01-26 | Upstream PR opened. | rickmoonex/hass-lighting-zone#55 |
| `lightware_lw2` | home-assistant/brands#6909 | https://github.com/intermediateengineering/homeassistant-lightware-lw2 | Active, pushed 2025-04-16 | Upstream PR opened. | intermediateengineering/homeassistant-lightware-lw2#1 |
| `lightwave2` | home-assistant/brands#1566 | https://github.com/bigbadblunt/homeassistant-lightwave2 | Active, pushed 2025-10-22 | Upstream PR opened. | ikb42/homeassistant-lightwave2#131 |
| `lightwave_smart` | home-assistant/brands#4909 | https://github.com/LightwaveSmartHome/homeassistant-lightwave-smart | Active, pushed 2026-01-03 | Not opened. The upstream repo is a fork in the same network as lightwave2, so the only fork is frenck/homeassistant-lightwave2 and GitHub rejects the push without the `workflow` scope. Needs `gh auth refresh -s workflow`, then retry. |  |
| `line_notify` | home-assistant/brands#4497 | https://github.com/nao-pon/HA-Line-Notify | Active, pushed 2025-12-18 | Upstream PR opened. | nao-pon/HA-Line-Notify#1 |
| `linkstation` | home-assistant/brands#6202 | https://github.com/iKaew/hass-linkstation-addon | Active, pushed 2024-12-11 | Upstream PR opened. | iKaew/hass-linkstation-addon#10 |
| `linkytic` | home-assistant/brands#3989 | https://github.com/hekmon/lixeeticdin | Active, pushed 2026-09-12 | Upstream PR opened. | hekmon/linkytic#77 |
| `linus_dashboard` | home-assistant/brands#6156 | https://github.com/Thank-you-Linus/Linus-Dashboard | Active, pushed 2026-10-15 | Upstream PR opened. | Thank-you-Linus/Linus-Dashboard#231 |
| `lionel_controller` | home-assistant/brands#8881 | https://github.com/iamjoshk/lionel_controller | Active, pushed 2026-01-16 | Upstream PR opened. | iamjoshk/lionel_controller#10 |
| `listonic` | home-assistant/brands#7858 | https://github.com/Sanji78/listonic | Active, pushed 2025-10-16 | Upstream PR opened. | Sanji78/listonic#6 |
| `litime_bms_ble` | home-assistant/brands#9636 | https://github.com/rubenmuehlhans/litime-ble-hacs | Active, pushed 2026-02-15 | Upstream PR opened. | rubenmuehlhans/litime-ble-hacs#1 |
| `livoltek` | home-assistant/brands#5279 | https://github.com/adamlonsdale/hass-livoltek | Active, pushed 2026-06-29 | Upstream PR opened. | adamlonsdale/hass-livoltek#128 |
| `llmvision` | home-assistant/brands#5689 | https://github.com/valentinfrlch/ha-gpt4vision | Active, pushed 2026-09-17 | Upstream PR opened. | valentinfrlch/ha-llmvision#748 |
| `local_daikin` | home-assistant/brands#7111 | https://github.com/Apoc182/local_daikin | Active, pushed 2026-02-22 | Upstream PR opened. | Apoc182/local_daikin#59 |
| `local_fcsp` | home-assistant/brands#7393 | https://github.com/aminorjourney/local-fcsp | Active, pushed 2026-10-14 | Upstream PR opened. | aminorjourney/local-fcsp#9 |
| `local_photos` | home-assistant/brands#9183 | https://github.com/Migz93/ha-local_photos | Active, pushed 2026-10-02 | Not opened. The upstream PR template requires AI assistance and human review disclosures. Needs a decision. |  |
| `localtuya_rc` | home-assistant/brands#6196 | https://github.com/ClusterM/localtuya_rc | Active, pushed 2026-10-09 | Upstream PR opened. | ClusterM/localtuya_rc#50 |
| `loggamera` | home-assistant/brands#7203 | https://github.com/svante-jacobsen/loggamera-home-assistant | Active, pushed 2026-03-16 | Upstream PR opened. | svante-jacobsen/loggamera-home-assistant#4 |
| `loki` | home-assistant/brands#8454 | https://github.com/dafal/loki-logger-homeassistant | Active, pushed 2025-08-17 | Upstream PR opened. | dafal/loki-logger-homeassistant#1 |
| `lpubelts_ha` | home-assistant/brands#8785 | https://github.com/SasPes/lpubelts_ha | Active, pushed 2026-01-19 | Upstream PR opened. | SasPes/lpubelts_ha#1 |
| `lrt_wallbox` | home-assistant/brands#7624 | https://github.com/Upgreydd/lrt_wallbox_hacs | Active, pushed 2026-06-15 | Upstream PR opened. | upgreydd/lrt_wallbox_hacs#4 |
| `lubelogger` | home-assistant/brands#8777 | https://github.com/hollowpnt92/lubelogger-ha | Active, pushed 2026-01-05 | Upstream PR opened. | hollowpnt92/lubelogger-ha#9 |
| `lutron_lip` | home-assistant/brands#7603 | https://github.com/rzulian/lutron_lip | Active, pushed 2026-10-13 | Upstream PR opened. | rzulian/lutron_lip#79 |
| `luxor` | home-assistant/brands#2819 | https://github.com/dcramer/hass-luxor | Active, pushed 2026-01-12 | Upstream PR opened. | dcramer/hass-luxor#23 |
| `luxtronik2` | home-assistant/brands#4662 | https://github.com/BenPru/luxtronik | Active, pushed 2026-10-18 | Not opened. The upstream PR template says to delete its "Upgrade notes" section, which is copied into release notes. Needs a decision. |  |
| `lvgl_pages` | home-assistant/brands#6765 | https://github.com/dala318/lvgl_pages | Active, pushed 2025-04-08 | Upstream PR opened. | dala318/lvgl_pages#1 |
| `lxp_modbus` | home-assistant/brands#7487 | https://github.com/ant0nkr/luxpower-modbus-hacs | Active, pushed 2026-10-14 | Upstream PR opened. | ant0nkr/luxpower-ha-integration#179 |
| `lytko` | home-assistant/brands#6503 | https://github.com/ANARHIST1984/SmartClimat | Active, pushed 2025-02-05 | Upstream PR opened. | ANARHIST1984/SmartClimat#1 |
| `maalerportal` | home-assistant/brands#5303 | https://github.com/maalerportal/maalerportal | Active, pushed 2026-09-04 | Upstream PR opened. | maalerportal/maalerportal#15 |
| `macs` | home-assistant/brands#8878 | https://github.com/glyndavidson/MACS | Active, pushed 2026-01-23 | Upstream PR opened. | glyndavidson/MACS#15 |
| `magicswitchbot` | home-assistant/brands#2340 | https://github.com/ec-blaster/magicswitchbot-homeassistant | Active, pushed 2022-10-08 | Upstream PR opened. | ec-blaster/magicswitchbot-homeassistant#15 |
| `magiline_imagix` | home-assistant/brands#8203 | https://github.com/iioel/magiline-imagix-homeassistant | Active, pushed 2026-01-24 | Upstream PR opened. | iioel/magiline-imagix-homeassistant#6 |
| `magiqtouch` | home-assistant/brands#3951 | https://github.com/andrewleech/ha_magiqtouch | Active, pushed 2026-04-15 | Upstream PR opened. | andrewleech/ha_magiqtouch#51 |
| `maicows` | home-assistant/brands#9229 | https://github.com/isaya07/ha-maicows | Active, pushed 2026-08-24 | Upstream PR opened. | isaya07/ha-maicows#60 |
| `maint` | home-assistant/brands#8555 | https://github.com/chrisdoherty4/maint | Active, pushed 2026-02-23 | Upstream PR opened. | chrisdoherty4/maint#42 |
| `mantova_ambiente` | home-assistant/brands#8029 | https://github.com/Nerkyator/pyMantovaAmbiente | Active, pushed 2025-10-01 | Upstream PR opened. | Nerkyator/pyMantovaAmbiente#1 |
| `marees_france` | home-assistant/brands#6938 | https://github.com/KipK/marees_france | Active, pushed 2026-07-16 | Upstream PR opened. | KipK/marees_france#12 |
| `marstek_cloud` | home-assistant/brands#7895 | https://github.com/DoctaShizzle/marstek_cloud | Active, pushed 2026-03-04 | Upstream PR opened. | DoctaShizzle/marstek_cloud#24 |
| `marstek_ct` | home-assistant/brands#7507 | https://github.com/d-shmt/hass_marstek-smart-meter | Active, pushed 2025-08-04 | Upstream PR opened. | d-shmt/hass_marstek-smart-meter#32 |
| `marstek_local_api` | home-assistant/brands#8145 | https://github.com/DoctaShizzle/marstek_local_api | Active, pushed 2026-03-04 | Upstream PR opened. | DoctaShizzle/marstek_local_api#3 |
| `marstek_modbus` | home-assistant/brands#7464 | https://github.com/ViperRNMC/marstek_venus_modbus | Active, pushed 2026-08-31 | Not opened. The upstream `.gitignore` ignores the brand images, so they need a forced add. Needs a decision. |  |
| `marstek_venus_energy_manager` | home-assistant/brands#9555 | https://github.com/ffunes/Marstek-Venus-Energy-Manager | Active, pushed 2026-07-14 | Upstream PR opened. | ffunes/Marstek-Venus-Energy-Manager#465 |
| `matomo` | home-assistant/brands#9505 | https://github.com/abnvle/ha-matomo | Active, pushed 2026-02-14 | Upstream PR opened. | abnvle/ha-matomo#3 |
| `matriocontrol` | home-assistant/brands#7852 | https://github.com/FeatherKing/ha-matriocontrol | Active, pushed 2026-09-12 | Upstream PR opened. | FeatherKing/ha-matriocontrol#13 |
| `matter_binding_helper` | home-assistant/brands#8602 | https://github.com/cedricziel/ha-matter-binding-helper | Active, pushed 2026-10-18 | Upstream PR opened. | cedricziel/ha-matter-binding-helper#461 |
| `matter_time_sync` | home-assistant/brands#8936 | https://github.com/Loweack/Matter-Time-Sync | Active, pushed 2026-06-24 | Upstream PR opened. | Loweack/Matter-Time-Sync#64 |
| `maxstorage_ultimate` | home-assistant/brands#5208 | https://github.com/geeks-r-us/maxstorage_ultimate | Active, pushed 2024-08-29 | Upstream PR opened. | geeks-r-us/maxstorage_ultimate#14 |
| `mbtalive` | home-assistant/brands#6456 | https://github.com/chiabre/MBTALive | Active, pushed 2026-06-24 | Upstream PR opened. | chiabre/MBTALive#39 |
| `mcp_server_http_transport` | home-assistant/brands#8129 | https://github.com/ganhammar/hass-mcp-server | Active, pushed 2026-10-12 | Upstream PR opened. | ganhammar/hass-mcp-server#104 |
| `mdadm_state` | home-assistant/brands#2587 | https://github.com/LorenzoVasi/HA_mdadm | Active, pushed 2024-09-16 | Upstream PR opened. | LorenzoVasi/HA_mdadm#9 |
| `media_index` | home-assistant/brands#8333 | https://github.com/markaggar/ha-media-index | Active, pushed 2026-07-29 | Upstream PR opened. | markaggar/ha-media-index#37 |
| `medisanabp_ble` | home-assistant/brands#5288 | https://github.com/bkbilly/medisanabp_ble | Active, pushed 2026-09-27 | Upstream PR opened. | bkbilly/medisanabp_ble#18 |

## Needs source repo lookup

| Domain | Original brands PR | Upstream repository | Upstream state | Reason | Tracking PR |
| --- | --- | --- | --- | --- | --- |
| `21energy_heater_control` | home-assistant/brands#6879 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `4heat` | home-assistant/brands#3154 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `aarlo` | home-assistant/brands#2523 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `abfallplus` | home-assistant/brands#3176 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ac_infinity` | home-assistant/brands#4565 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `acer_air_monitor` | home-assistant/brands#2874 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `acv` | home-assistant/brands#2401 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `adano` | home-assistant/brands#5191 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `adap1ii` | home-assistant/brands#9371 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `adap1status` | home-assistant/brands#9371 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `adax_heater` | home-assistant/brands#1853 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `adtpulse` | home-assistant/brands#4341 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `aerogarden` | home-assistant/brands#3458 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `afire` | home-assistant/brands#7936 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `afvalinfo` | home-assistant/brands#1632 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `aguaiot` | home-assistant/brands#4410 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `airibes` | home-assistant/brands#6317 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `alarmdotcom` | home-assistant/brands#2042 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `alarmo` | home-assistant/brands#2021 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `alexa_media` | home-assistant/brands#1561 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `alfen_modbus` | home-assistant/brands#4391 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `alfen_wallbox` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `allegro` | home-assistant/brands#4063 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `alphaess` | home-assistant/brands#2831 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `amplifi` | home-assistant/brands#4541 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ams` | home-assistant/brands#1800 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `anniversaries` | home-assistant/brands#1694 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `anycubic_wifi` | home-assistant/brands#3288 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `anylist` | home-assistant/brands#4602 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `apanovaploiesti` | home-assistant/brands#6508 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `apparent_temperature` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `apple_airplayer` | home-assistant/brands#2679 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `appwash` | home-assistant/brands#3536 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `apsystems_ecur` | home-assistant/brands#2617 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `apsystemsapi_local` | home-assistant/brands#4926 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `aptus_home` | home-assistant/brands#7199 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `aquanta` | home-assistant/brands#3440 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `aquarium_ai` | home-assistant/brands#8001 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `argoclima` | home-assistant/brands#2688 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `aria2` | home-assistant/brands#2733 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `arso_sensor` | home-assistant/brands#5836 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `artificial_sunlight` | home-assistant/brands#3376 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `astralpool_chlorinator` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `astralpool_halo_chlorinator` | home-assistant/brands#5054 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `astroweather` | home-assistant/brands#2259 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `asuswrt_custom` | home-assistant/brands#3935 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `atagone` | home-assistant/brands#4797 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `atonstorage` | home-assistant/brands#3882 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `audiconnect` | home-assistant/brands#1664 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `audiobookshelf` | home-assistant/brands#4599 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `aula` | home-assistant/brands#3829 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `auroraplus` | home-assistant/brands#2723 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `automower` | home-assistant/brands#1960 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `avanza_stock` | home-assistant/brands#1575 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `avinor_flight_data` | home-assistant/brands#8411 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `awnet_local` | home-assistant/brands#4168 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `babybuddy` | home-assistant/brands#2212 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `balance_neto` | home-assistant/brands#4296 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `barneyman` | home-assistant/brands#2931 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `battery_consumption` | home-assistant/brands#2795 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `battery_sim` | home-assistant/brands#2812 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bayernluefter` | home-assistant/brands#4672 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bemfa_to_homeassistant` | home-assistant/brands#6564 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bemfa_wechat` | home-assistant/brands#6330 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `benqprojector` | home-assistant/brands#3896 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `beoplay` | home-assistant/brands#2184 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `best_bottrop_garbage_collection` | home-assistant/brands#4364 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bg_tok` | home-assistant/brands#5338 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bhyve` | home-assistant/brands#1700 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bibliotheek_be` | home-assistant/brands#4082 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `biketrax` | home-assistant/brands#3470 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `binance` | home-assistant/brands#4015 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bir` | home-assistant/brands#4949 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `birdbuddy` | home-assistant/brands#3905 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bj_sgcc_energy` | home-assistant/brands#4666 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ble_monitor` | home-assistant/brands#2063 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ble_yc01` | home-assistant/brands#5021 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `blitzortung` | home-assistant/brands#1730 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `blueiris` | home-assistant/brands#1571 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bluelab_guardian` | home-assistant/brands#6135 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bluelink_api_hacs` | home-assistant/brands#4983 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `blynk` | home-assistant/brands#7334 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bms_connector` | home-assistant/brands#4745 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bmw_connected` | home-assistant/brands#2739 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bobcatminer` | home-assistant/brands#3042 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bosch` | home-assistant/brands#1740 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bouncie` | home-assistant/brands#3909 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `braiins_os_plus` | home-assistant/brands#7747 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `brains` | home-assistant/brands#4756 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `brandriskute` | home-assistant/brands#2613 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `brandstofprijzen` | home-assistant/brands#2234 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `brinno_mail_notifications` | home-assistant/brands#5593 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `broadlink_hub` | home-assistant/brands#1785 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `broadlink_s1c` | home-assistant/brands#2293 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `brunata_online` | home-assistant/brands#9663 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bsh` | home-assistant/brands#2054 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bticino_x8000` | home-assistant/brands#5162 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bull` | home-assistant/brands#3533 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `bunq` | home-assistant/brands#4467 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `calcio_live` | home-assistant/brands#5856 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `came` | home-assistant/brands#2616 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `came_connect` | home-assistant/brands#7736 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `camect` | home-assistant/brands#3737 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `canvas` | home-assistant/brands#3621 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `carbu_com` | home-assistant/brands#4151 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `casatunes` | home-assistant/brands#2734 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `cashapp` | home-assistant/brands#2822 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `cem_monitor` | home-assistant/brands#8443 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `centrometal_boiler` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `cez_hdo` | home-assistant/brands#2431 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `cez_outages` | home-assistant/brands#2434 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `cezdistribuce` | home-assistant/brands#1952 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `cfa_fire_forecast` | home-assistant/brands#9691 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `cgesp` | home-assistant/brands#4526 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `changedetection` | home-assistant/brands#9226 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `channels_dvr_recently_recorded` | home-assistant/brands#2331 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `chime_tts` | home-assistant/brands#4419 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `chint_pm` | home-assistant/brands#4198 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ciaowarm` | home-assistant/brands#5385 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `cisco_imc` | home-assistant/brands#3127 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `cityhome-intercom` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `cityparking` | home-assistant/brands#9279 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `clash_controller` | home-assistant/brands#6399 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `clean_up_snapshots_service` | home-assistant/brands#4468 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `cleanmate` | home-assistant/brands#3922 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `clever_api` | home-assistant/brands#4058 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `cleveroom` | home-assistant/brands#6791 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `climate_ewelink` | home-assistant/brands#2654 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `climate_ip` | home-assistant/brands#1886 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `cloudflare6` | home-assistant/brands#6396 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `coct_loadshedding` | home-assistant/brands#3517 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `coingecko_crypto` | home-assistant/brands#6640 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `cololight` | home-assistant/brands#3441 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `colorfulclouds` | home-assistant/brands#1812 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `comelit` | home-assistant/brands#4164 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `config_editor` | home-assistant/brands#2985 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `connectedroom` | home-assistant/brands#5110 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `consul` | home-assistant/brands#2609 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `contarina` | home-assistant/brands#5892 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `continuously_casting_dashboards` | home-assistant/brands#4264 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `controlid` | home-assistant/brands#2268 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `copmax` | home-assistant/brands#6910 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `correios` | home-assistant/brands#3282 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `couchpotato` | home-assistant/brands#1597 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `countdown` | home-assistant/brands#4842 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `covid19_kr` | home-assistant/brands#2753 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `creasoldombus` | home-assistant/brands#2716 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `cryptoinfo` | home-assistant/brands#1632 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `cuculus_meterextension` | home-assistant/brands#7087 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `custody_schedule` | home-assistant/brands#9414 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dabblerdk_powermeterreader` | home-assistant/brands#3151 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `daikin_altherma` | home-assistant/brands#3099 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `daily` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `daily_schedule` | home-assistant/brands#3578 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `damda_awair` | home-assistant/brands#2989 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `damda_evcharger` | home-assistant/brands#2943 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `damda_pad` | home-assistant/brands#2368 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `damda_weather` | home-assistant/brands#2871 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dantherm` | home-assistant/brands#5395 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `davis_vantage` | home-assistant/brands#4739 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dell_printer` | home-assistant/brands#3050 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `delonghi_primadonna` | home-assistant/brands#3214 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `deltadore_tydom` | home-assistant/brands#4882 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `deltasol` | home-assistant/brands#2289 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `denonavr3806` | home-assistant/brands#2687 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `desktop_app` | home-assistant/brands#9561 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dewarmte` | home-assistant/brands#6882 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dijnet` | home-assistant/brands#1653 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `directadmin_quotas` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dirigera_platform` | home-assistant/brands#5121 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dlink_hnap` | home-assistant/brands#1759 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dlink_router` | home-assistant/brands#8434 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dmp` | home-assistant/brands#3952 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dobiss` | home-assistant/brands#2127 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `docker_socket_proxy` | home-assistant/brands#9260 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `domru` | home-assistant/brands#8396 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dpc` | home-assistant/brands#1660 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dream_maker` | home-assistant/brands#4867 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dreame_vacuum` | home-assistant/brands#3729 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `drkblutspende` | home-assistant/brands#3177 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `drone_mobile` | home-assistant/brands#2595 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dual_smart_thermostat` | home-assistant/brands#3146 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `duepi_evo` | home-assistant/brands#2792 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `duke_energy_gateway` | home-assistant/brands#2770 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `duolingo` | home-assistant/brands#2804 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `duravit_toilet` | home-assistant/brands#2719 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dusun` | home-assistant/brands#2878 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dusunbg96` | home-assistant/brands#2897 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dusunble` | home-assistant/brands#2897 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dusunwifi` | home-assistant/brands#2897 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dusunzigbee` | home-assistant/brands#2995 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dwains_dashboard` | home-assistant/brands#2987 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dwd_pollenflug` | home-assistant/brands#2852 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dwd_weather` | home-assistant/brands#1777 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `dyson_local` | home-assistant/brands#3047 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `e3dc_rscp` | home-assistant/brands#4434 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `easy_computer_manager` | home-assistant/brands#5042 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `easycontrols` | home-assistant/brands#1662 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `easyroll_blind` | home-assistant/brands#4701 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `eaton_battery_storage` | home-assistant/brands#7361 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `eaton_epdu` | home-assistant/brands#3624 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `eaton_ups` | home-assistant/brands#4669 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ebeco` | home-assistant/brands#1870 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ecodevices_rt2` | home-assistant/brands#2532 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `econet300` | home-assistant/brands#4953 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ecopower_dynamic_grid_prices` | home-assistant/brands#3491 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ecowitt_local` | home-assistant/brands#7714 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `edgeos` | home-assistant/brands#1577 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `eforsyning` | home-assistant/brands#3590 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `eheim_digital` | home-assistant/brands#4484 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `eight_sleep` | home-assistant/brands#4848 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `eight_sleep_climate` | home-assistant/brands#3631 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `elternportal` | home-assistant/brands#5942 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `email_notifier` | home-assistant/brands#7200 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ematrica_hu` | home-assistant/brands#4331 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `emergency_stop` | home-assistant/brands#9422 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `emporia_vue` | home-assistant/brands#3900 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `emscrss` | home-assistant/brands#2136 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `emt_madrid` | home-assistant/brands#5718 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `enasolar` | home-assistant/brands#2759 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `enedis` | home-assistant/brands#2936 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `energyme` | home-assistant/brands#5189 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `energyscore` | home-assistant/brands#3910 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `enet` | home-assistant/brands#3837 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `enpal` | home-assistant/brands#3539 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `entities_calendar` | home-assistant/brands#1666 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `epcube` | home-assistant/brands#6903 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `epic_games` | home-assistant/brands#4393 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `erse` | home-assistant/brands#1644 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `esb_faults` | home-assistant/brands#4473 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `esi_thermostat` | home-assistant/brands#7044 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `eskom_loadshedding` | home-assistant/brands#1813 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `espsomfy_rts` | home-assistant/brands#4105 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ev_smart_charging` | home-assistant/brands#3841 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `evchargingstations` | home-assistant/brands#8830 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ever_ups` | home-assistant/brands#6942 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `eversolo` | home-assistant/brands#4663 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `evodnik` | home-assistant/brands#8682 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `evonic` | home-assistant/brands#3639 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `evotech_iot` | home-assistant/brands#9643 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ewelink_aiot` | home-assistant/brands#3513 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `exchangerate-api` | home-assistant/brands#2509 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `extalife` | home-assistant/brands#1654 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `extend_temperature` | home-assistant/brands#4472 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `eyeonwater` | home-assistant/brands#5053 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ezviz_plug` | home-assistant/brands#3449 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `f1_sensor` | home-assistant/brands#6895 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `falcon_pi_player` | home-assistant/brands#2643 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fandffox` | home-assistant/brands#3170 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fasthue` | home-assistant/brands#1652 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fcu` | home-assistant/brands#6805 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fellerwiser` | home-assistant/brands#4587 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fire_protection_hu` | home-assistant/brands#3179 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `first_bus` | home-assistant/brands#3473 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fitx` | home-assistant/brands#2953 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `flagdays_dk` | home-assistant/brands#3114 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `flair` | home-assistant/brands#2500 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `flexpoolinfo` | home-assistant/brands#2970 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `flichub` | home-assistant/brands#4752 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `floureon` | home-assistant/brands#1709 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fontawesome` | home-assistant/brands#1881 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fordpass` | home-assistant/brands#2001 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fordpass_china` | home-assistant/brands#2660 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `formulaone_api` | home-assistant/brands#3763 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fortigate_stats` | home-assistant/brands#4273 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fortnite` | home-assistant/brands#1860 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `foxess_modbus` | home-assistant/brands#4328 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fpl` | home-assistant/brands#3303 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fpl_api` | home-assistant/brands#2877 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fplapi` | home-assistant/brands#2816 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `frank_energie` | home-assistant/brands#3446 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `freeathome` | home-assistant/brands#1951 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `freeds` | home-assistant/brands#4285 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `french_oceanographic_fleet` | home-assistant/brands#5131 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fresh_intellivent_sky` | home-assistant/brands#3979 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `frigate` | home-assistant/brands#2077 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fuel_prices_sweden` | home-assistant/brands#4883 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fullykiosk` | home-assistant/brands#2134 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fusion_solar_app` | home-assistant/brands#6276 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `fzgysw_water` | home-assistant/brands#9411 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `g4s_alarm` | home-assistant/brands#2806 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `garbage_collection` | home-assistant/brands#1564 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `gardena_smart_system` | home-assistant/brands#1690 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `garmin_connect` | home-assistant/brands#2758 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `garo_wallbox` | home-assistant/brands#1622 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `gasbuddy` | home-assistant/brands#4970 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `gazdebordeaux` | home-assistant/brands#4934 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `gazpar` | home-assistant/brands#3430 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ge_home` | home-assistant/brands#2737 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ge_kitchen` | home-assistant/brands#1798 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `gecko` | home-assistant/brands#2014 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `geo_home` | home-assistant/brands#3810 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `georide` | home-assistant/brands#1643 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `geovelo` | home-assistant/brands#5165 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `gfs_weather_forecast` | home-assistant/brands#4679 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `gicisky` | home-assistant/brands#7048 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `gigachain` | home-assistant/brands#5209 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `gigasetelements` | home-assistant/brands#1665 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `gitea` | home-assistant/brands#1624 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `glowmarkt` | home-assistant/brands#7161 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `goecharger` | home-assistant/brands#2394 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `goecharger_mqtt` | home-assistant/brands#3164 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `goldair_climate` | home-assistant/brands#1572 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `golemio` | home-assistant/brands#4615 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `google_home` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `google_trends` | home-assistant/brands#4449 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `googlewifi` | home-assistant/brands#2003 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `grad_vol` | home-assistant/brands#4212 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `gree_ext` | home-assistant/brands#2751 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `greenchoice` | home-assistant/brands#2075 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `greenely` | home-assistant/brands#3322 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `grocy` | home-assistant/brands#1832 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `gs_alarm` | home-assistant/brands#3167 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `gtfs_rt` | home-assistant/brands#3971 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `guntamatic_biostar` | home-assistant/brands#8947 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ha_carrier` | home-assistant/brands#4025 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ha_cloud_music` | home-assistant/brands#3012 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ha_coap` | home-assistant/brands#4829 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ha_comfoconnectpro` | home-assistant/brands#7978 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ha_connector` | home-assistant/brands#2241 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ha_daily_counter` | home-assistant/brands#7071 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ha_datakom` | home-assistant/brands#9239 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ha_file_explorer` | home-assistant/brands#3015 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ha_hatch` | home-assistant/brands#3213 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ha_heliotherm` | home-assistant/brands#3871 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ha_kia_hyundai` | home-assistant/brands#3011 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ha_pse_grid_stat` | home-assistant/brands#3350 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ha_pyamdgpuinfo` | home-assistant/brands#2741 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ha_sense` | home-assistant/brands#4241 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ha_services` | home-assistant/brands#3345 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ha_ssh_tunnel` | home-assistant/brands#8180 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ha_vscode` | home-assistant/brands#4761 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ha_win_wol` | home-assistant/brands#6071 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `habitron` | home-assistant/brands#4513 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `habo` | home-assistant/brands#2629 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hacs` | home-assistant/brands#1558 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hafas` | home-assistant/brands#5081 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `haier` | home-assistant/brands#3438 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hao_deng_cloud` | home-assistant/brands#6411 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hartkey` | home-assistant/brands#8292 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hasl` | home-assistant/brands#1606 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hasl3` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hassam` | home-assistant/brands#4606 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hasslife` | home-assistant/brands#3123 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hausnet_heartbeat` | home-assistant/brands#4045 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hbx_controls` | home-assistant/brands#9266 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hdhomerun` | home-assistant/brands#3331 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `heatmiser_wifi` | home-assistant/brands#2577 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `heatzy` | home-assistant/brands#1704 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hebcal` | home-assistant/brands#2393 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `helios` | home-assistant/brands#2009 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `helium` | home-assistant/brands#2620 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hemglass` | home-assistant/brands#4588 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `here_weather` | home-assistant/brands#2801 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `heweather` | home-assistant/brands#3528 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hi_mama` | home-assistant/brands#2711 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hikconnect` | home-assistant/brands#2847 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hikvision_next` | home-assistant/brands#4222 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hildebrand_glow_ihd` | home-assistant/brands#4420 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hilo` | home-assistant/brands#2226 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hiq` | home-assistant/brands#3575 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hkc_alarm` | home-assistant/brands#4831 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hnap_device` | home-assistant/brands#4481 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ho_mobile` | home-assistant/brands#6067 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `holidays` | home-assistant/brands#3095 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `home_connect_alt` | home-assistant/brands#3130 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `home_connect_beta` | home-assistant/brands#1786 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `home_energy_hub` | home-assistant/brands#4892 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `homeduino` | home-assistant/brands#4046 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `homeeasy_local` | home-assistant/brands#2830 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `homelink` | home-assistant/brands#4691 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `homematicip_local` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `homeseer` | home-assistant/brands#2286 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `honeygain` | home-assistant/brands#5004 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `honeygain_scrapper` | home-assistant/brands#5175 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `honor_x3` | home-assistant/brands#2731 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `household_chores` | home-assistant/brands#9655 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `householdchores` | home-assistant/brands#8041 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hpprinter` | home-assistant/brands#1569 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hra_recycling` | home-assistant/brands#3823 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hslhrt` | home-assistant/brands#5058 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `http_agent` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `huawei_hg659` | home-assistant/brands#5127 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `huawei_solar` | home-assistant/brands#2928 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hubitat` | home-assistant/brands#1584 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hubspace` | home-assistant/brands#3684 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `huesyncbox` | home-assistant/brands#1817 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hx3` | home-assistant/brands#2879 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hyperhdr` | home-assistant/brands#2990 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `hypervolt_charger` | home-assistant/brands#3930 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `iammeter_link` | home-assistant/brands#6734 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ical` | home-assistant/brands#2182 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `iclick` | home-assistant/brands#6834 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `icloud3` | home-assistant/brands#2965 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ics` | home-assistant/brands#1586 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ics_calendar` | home-assistant/brands#3307 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ideenergy` | home-assistant/brands#3439 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `idfm` | home-assistant/brands#3327 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `idokep` | home-assistant/brands#6251 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `idrac_power` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `iec` | home-assistant/brands#5254 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ikamand` | home-assistant/brands#4545 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `imaprotect` | home-assistant/brands#2406 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `imatrix` | home-assistant/brands#7311 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `import_statistics` | home-assistant/brands#5211 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `indego` | home-assistant/brands#1772 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `infinitecampus` | home-assistant/brands#3622 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ingenium` | home-assistant/brands#1698 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ingresso` | home-assistant/brands#4315 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `input_multiselect` | home-assistant/brands#9616 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `intellicenter` | home-assistant/brands#2137 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `internode` | home-assistant/brands#2726 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `inumet` | home-assistant/brands#5151 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `inverse` | home-assistant/brands#4489 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `invicta` | home-assistant/brands#3856 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `iparcelbox` | home-assistant/brands#2648 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ipcamlive` | home-assistant/brands#3410 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ipify` | home-assistant/brands#3490 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ipx800v4` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ipx800v5` | home-assistant/brands#2972 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `irrigationprogram` | home-assistant/brands#2957 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `itron` | home-assistant/brands#4709 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `jaalee` | home-assistant/brands#7109 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `jablotron100` | home-assistant/brands#1857 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `jablotron80` | home-assistant/brands#2066 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `jablotron_cloud` | home-assistant/brands#3995 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `jablotron_futura` | home-assistant/brands#4857 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `jcihitachi_tw` | home-assistant/brands#6953 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `jellyfish_lighting` | home-assistant/brands#3967 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `jfl_active` | home-assistant/brands#3895 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `jlrincontrol` | home-assistant/brands#1640 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `judo_isoft` | home-assistant/brands#6580 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `jukeaudio_ha` | home-assistant/brands#4583 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `juwel_helialux` | home-assistant/brands#3122 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `kaco` | home-assistant/brands#1815 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `kakao_tts` | home-assistant/brands#1917 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `kan_program` | home-assistant/brands#2058 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `kcs_n1cx` | home-assistant/brands#2906 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `kef_connector` | home-assistant/brands#2921 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `keyatome` | home-assistant/brands#3027 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `keymaster` | home-assistant/brands#2069 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `kilink` | home-assistant/brands#3071 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `kingspan_watchman_sensit` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `kleenex_pollenradar` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `klyqa` | home-assistant/brands#5161 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `kocom_smarthome` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `kontomierz_sensor` | home-assistant/brands#3230 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `kramer` | home-assistant/brands#5223 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `krisinformation` | home-assistant/brands#6528 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `kwb_heating` | home-assistant/brands#8270 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `kweather` | home-assistant/brands#2433 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `kwh_to_won` | home-assistant/brands#3008 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `lacrosseview` | home-assistant/brands#3352 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `lan_smartthings` | home-assistant/brands#2762 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `landroid_cloud` | home-assistant/brands#3285 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `lay_z_spa` | home-assistant/brands#2683 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ldata` | home-assistant/brands#4161 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `leafspy` | home-assistant/brands#1743 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ledfxrm` | home-assistant/brands#2006 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `lelight` | home-assistant/brands#3619 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `lghorizon` | home-assistant/brands#3816 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `liberty_rider` | home-assistant/brands#8002 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `librus` | home-assistant/brands#2249 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `line_bot` | home-assistant/brands#2567 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `linkedgo_bridge` | home-assistant/brands#7502 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `linksys_velop` | home-assistant/brands#3466 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `litetouch` | home-assistant/brands#1613 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `little_monkey` | home-assistant/brands#4869 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `livebox` | home-assistant/brands#1706 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `lkcomu_interrao` | home-assistant/brands#2641 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `llm_cached_conversation_agent` | home-assistant/brands#7699 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `lobe` | home-assistant/brands#2533 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `local_weather_rss` | home-assistant/brands#2252 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `lock-manager` | home-assistant/brands#1877 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `loex_xsmart` | home-assistant/brands#4274 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `lokalterm` | home-assistant/brands#9691 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `london_tfl` | home-assistant/brands#3153 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `loxone` | home-assistant/brands#2396 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `lsc_camera` | home-assistant/brands#7162 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `lucidmotors` | home-assistant/brands#4902 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `lumentree` | home-assistant/brands#8214 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `lunchaimjardevi` | home-assistant/brands#4712 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `lunos` | home-assistant/brands#2084 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `luxtronik` | home-assistant/brands#2399 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `lynkco` | home-assistant/brands#1841 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `magic_areas` | home-assistant/brands#1943 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mail_and_packages` | home-assistant/brands#1689 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `managemyhealth` | home-assistant/brands#4826 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `manchester_bins` | home-assistant/brands#4215 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mart_holiday` | home-assistant/brands#2875 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mashov` | home-assistant/brands#8116 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mass` | home-assistant/brands#3354 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mastertherm` | home-assistant/brands#3912 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `materialsymbols` | home-assistant/brands#4287 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `maxsmart` | home-assistant/brands#7516 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mbapi2020` | home-assistant/brands#2224 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `measureit` | home-assistant/brands#4775 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `media_player_template` | home-assistant/brands#1977 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `medole` | home-assistant/brands#7160 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mega` | home-assistant/brands#2114 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `meizu_remoter_gateway` | home-assistant/brands#2763 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `melcloud_custom` | home-assistant/brands#3595 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `meraki_ha` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `meross_cloud` | home-assistant/brands#1639 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `met_alerts_hu` | home-assistant/brands#2611 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `meteo-swiss` | home-assistant/brands#2704 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `meteoalarmeu` | home-assistant/brands#2230 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `meteoam` | home-assistant/brands#4740 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `meteobridge` | home-assistant/brands#1587 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `meteocat` | home-assistant/brands#6118 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `metservice_weather` | home-assistant/brands#4815 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mfi_mpower` | home-assistant/brands#4026 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mhtzn` | home-assistant/brands#3557 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `microbot_push` | home-assistant/brands#3013 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `microsoft_graph` | home-assistant/brands#3374 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `midea_ac` | home-assistant/brands#1658 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `midea_ac_lan` | home-assistant/brands#2747 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `midea_dehumidifier_lan` | home-assistant/brands#3016 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `miio_yeelink` | home-assistant/brands#2148 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mijntuin` | home-assistant/brands#4214 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mikrotik_router` | home-assistant/brands#1604 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mila` | home-assistant/brands#3281 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mindor_cloud` | home-assistant/brands#8293 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mintmobile` | home-assistant/brands#2051 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mitemp_bt2` | home-assistant/brands#1959 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mixergy` | home-assistant/brands#2772 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mjpeg_timelapse` | home-assistant/brands#3149 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mlb` | home-assistant/brands#3607 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mmpk` | home-assistant/brands#8495 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mobile_alerts` | home-assistant/brands#3569 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `modbus_local_gateway` | home-assistant/brands#4500 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mojelektro` | home-assistant/brands#5144 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mold_risk_index` | home-assistant/brands#3978 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `monarchmoney` | home-assistant/brands#4304 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `monta` | home-assistant/brands#4537 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `moogo` | home-assistant/brands#7902 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `moonraker` | home-assistant/brands#4086 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `moox_track` | home-assistant/brands#2647 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `moscow_pgu` | home-assistant/brands#2388 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `motalavattenavfall` | home-assistant/brands#4006 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `multimatic` | home-assistant/brands#2490 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `multiscrape` | home-assistant/brands#2480 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `multizone_controller` | home-assistant/brands#2610 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `musiccast_yamaha` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `must_inverter` | home-assistant/brands#5093 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `my_fisker` | home-assistant/brands#5230 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mybag_aero_tracker` | home-assistant/brands#9620 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `myelectricaldata` | home-assistant/brands#4316 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `myenergy` | home-assistant/brands#4731 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `myezviz` | home-assistant/brands#3860 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `myhome` | home-assistant/brands#2052 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `myjdownloader` | home-assistant/brands#2593 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `myneato` | home-assistant/brands#3788 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mypv` | home-assistant/brands#3155 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `myradar` | home-assistant/brands#4234 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `myschoolcard` | home-assistant/brands#6073 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `mywatertoronto` | home-assistant/brands#3605 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nanoleaf_panels` | home-assistant/brands#4262 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `naver_weather` | home-assistant/brands#1958 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nbp` | home-assistant/brands#2429 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nea_sg_weather` | home-assistant/brands#2955 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `neerslag` | home-assistant/brands#2715 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nefiteasy` | home-assistant/brands#2097 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `neovolt` | home-assistant/brands#8553 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nerdqaxe` | home-assistant/brands#8067 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nespresso` | home-assistant/brands#1671 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nestup_evn` | home-assistant/brands#3562 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `netcommander` | home-assistant/brands#8034 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `netdaemon` | home-assistant/brands#2966 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `netgear_plus` | home-assistant/brands#5909 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `netgear_wax` | home-assistant/brands#2669 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `netia_player` | home-assistant/brands#2387 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `netznoe` | home-assistant/brands#9369 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nextbike` | home-assistant/brands#1955 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ngenic` | home-assistant/brands#2055 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nh_nicehash` | home-assistant/brands#4488 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nhc2` | home-assistant/brands#2030 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nhl` | home-assistant/brands#3090 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nice` | home-assistant/brands#2623 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `niimbot` | home-assistant/brands#6336 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nilan` | home-assistant/brands#3380 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `niu` | home-assistant/brands#2646 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `noaa_weather` | home-assistant/brands#7555 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nobetci_eczane` | home-assistant/brands#7362 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nodered` | home-assistant/brands#1627 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nosnews` | home-assistant/brands#2601 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `novafos` | home-assistant/brands#3591 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `novus300bus` | home-assistant/brands#2833 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `npm_switches` | home-assistant/brands#4099 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nsw_rural_fire_service_fire_danger` | home-assistant/brands#2062 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nswcovid` | home-assistant/brands#2721 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nuvo_serial` | home-assistant/brands#2558 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nvenergy` | home-assistant/brands#2680 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nws_alerts` | home-assistant/brands#1672 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `nx_witness` | home-assistant/brands#9573 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `o365` | home-assistant/brands#2802 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ocpp` | home-assistant/brands#2671 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `octopus_energy` | home-assistant/brands#3472 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `octopusagile` | home-assistant/brands#2096 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `octopusnet` | home-assistant/brands#4369 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `oig_cloud` | home-assistant/brands#4516 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `oiot` | home-assistant/brands#3165 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `okokscale` | home-assistant/brands#4153 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `olarm_sensors` | home-assistant/brands#4236 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `once` | home-assistant/brands#6066 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `onewire_sysbus` | home-assistant/brands#3427 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `oocsi` | home-assistant/brands#4254 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `opal_ble` | home-assistant/brands#5036 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `opencwb` | home-assistant/brands#2570 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `openei` | home-assistant/brands#2777 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `openhasp` | home-assistant/brands#2477 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `openmediavault` | home-assistant/brands#1603 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `opennem` | home-assistant/brands#3156 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `openplantbook` | home-assistant/brands#3593 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `opensprinkler` | home-assistant/brands#2525 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `openwbmqtt` | home-assistant/brands#2829 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `openweathermaphistory` | home-assistant/brands#4171 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `oppo_udp` | home-assistant/brands#2724 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `optus` | home-assistant/brands#2146 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `oralb_ble` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `orange_internet_on_the_move` | home-assistant/brands#4124 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `orion` | home-assistant/brands#4843 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `osrm_travel_time` | home-assistant/brands#2663 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `oura` | home-assistant/brands#1646 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `outgoing_octopus` | home-assistant/brands#2248 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ovh` | home-assistant/brands#2565 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `packandsavepricechecker` | home-assistant/brands#5043 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `panasonic_cc` | home-assistant/brands#1612 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `panasonic_eolia` | home-assistant/brands#3926 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `pandora_cas` | home-assistant/brands#1808 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `paperspace` | home-assistant/brands#3808 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `pax_ble` | home-assistant/brands#4172 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `pc_ships` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `peacefair_energy` | home-assistant/brands#2695 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `peaqhvac` | home-assistant/brands#3953 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `peaqnext` | home-assistant/brands#4360 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `pentair_cloud` | home-assistant/brands#4093 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `person_location` | home-assistant/brands#2308 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `pfsense` | home-assistant/brands#2919 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `pgnig_gas_sensor` | home-assistant/brands#3212 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `philips_ambilight_hue` | home-assistant/brands#3286 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `phoenix_contact` | home-assistant/brands#1819 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `phoenix_ev_charger` | home-assistant/brands#2563 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `photoframecast` | home-assistant/brands#7786 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `pijuice` | home-assistant/brands#2564 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `pijups` | home-assistant/brands#4122 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `pitboss` | home-assistant/brands#4648 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `pixometer` | home-assistant/brands#4052 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `plantbot` | home-assistant/brands#7332 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `plcbus` | home-assistant/brands#1677 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `plejd` | home-assistant/brands#3764 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `plex_assistant` | home-assistant/brands#2225 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `plugwise-beta` | home-assistant/brands#1628 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `plugwise_usb` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `pod_point` | home-assistant/brands#3163 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `pokeys` | home-assistant/brands#4668 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `polaris` | home-assistant/brands#5207 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `pool_controller` | home-assistant/brands#9182 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `porscheconnect` | home-assistant/brands#2251 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `portacool_apex` | home-assistant/brands#9381 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `powerpal` | home-assistant/brands#3968 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `powerpetdoor` | home-assistant/brands#3602 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `powershaper` | home-assistant/brands#1916 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `pr_custom_component` | home-assistant/brands#2352 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `primare` | home-assistant/brands#6664 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `proflame_connect_wifi` | home-assistant/brands#5224 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `pronote` | home-assistant/brands#4479 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `proof` | home-assistant/brands#2277 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `prozeda` | home-assistant/brands#7588 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `public_transport_idos` | home-assistant/brands#4897 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `pumpspy_ha` | home-assistant/brands#3934 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `puzzle_game` | home-assistant/brands#8629 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `pvpc_energy` | home-assistant/brands#4781 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `pycupra` | home-assistant/brands#6865 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `qbittorrent_mkii` | home-assistant/brands#4611 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `qss` | home-assistant/brands#3964 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `radarr_upcoming_media` | home-assistant/brands#5180 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `rademacher` | home-assistant/brands#3091 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `radio_france` | home-assistant/brands#4895 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `radioactivity_hu` | home-assistant/brands#3243 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `raphson_music_headless` | home-assistant/brands#7355 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `rd200_ble` | home-assistant/brands#3963 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `rdtechum` | home-assistant/brands#3942 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `read_your_meter` | home-assistant/brands#1595 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ready4sky` | home-assistant/brands#1648 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `reaper` | home-assistant/brands#2843 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `recom` | home-assistant/brands#4656 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `redback` | home-assistant/brands#3653 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `redpocket` | home-assistant/brands#2552 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `remote_syslog` | home-assistant/brands#2436 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `renogy` | home-assistant/brands#6400 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `reolink_dev` | home-assistant/brands#1727 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `reolink_discovery` | home-assistant/brands#3534 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `reolink_rest` | home-assistant/brands#3534 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `resrobot` | home-assistant/brands#2022 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `reversotts` | home-assistant/brands#1915 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `rf_converter` | home-assistant/brands#5693 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `rhvoice` | home-assistant/brands#1764 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `rivian` | home-assistant/brands#3447 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `roblox` | home-assistant/brands#4134 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `robovac` | home-assistant/brands#3732 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `rocket_league_assistant` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `rocketlaunchlive` | home-assistant/brands#2065 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `rotel` | home-assistant/brands#1791 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `rpi_gpio` | home-assistant/brands#3132 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `rrd_recorder` | home-assistant/brands#3596 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `rtkkey` | home-assistant/brands#8198 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ruuvi` | home-assistant/brands#2330 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sabiana_cloud` | home-assistant/brands#8400 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sabiana_cloude` | home-assistant/brands#8386 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `safety_signing` | home-assistant/brands#3240 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sagemcom_fast` | home-assistant/brands#1663 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `saj_modbus` | home-assistant/brands#2319 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `salus` | home-assistant/brands#2223 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `samsung_soundbar` | home-assistant/brands#4480 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `samsungtv_smart` | home-assistant/brands#1608 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `samsungtv_tizen` | home-assistant/brands#1976 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sanitana_eden` | home-assistant/brands#5065 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `satellitetracker` | home-assistant/brands#2064 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `saver` | home-assistant/brands#1701 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `scomet` | home-assistant/brands#6560 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `scribe` | home-assistant/brands#8560 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `seccasa_simulator` | home-assistant/brands#1862 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sector` | home-assistant/brands#1681 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `securifi` | home-assistant/brands#1910 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `securityspy` | home-assistant/brands#1734 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `seedboxes_cc` | home-assistant/brands#1831 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `selve` | home-assistant/brands#3310 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `senec` | home-assistant/brands#1941 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `senertec` | home-assistant/brands#3462 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sensi` | home-assistant/brands#3985 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sensorist` | home-assistant/brands#3932 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sentio` | home-assistant/brands#1934 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sessy` | home-assistant/brands#4141 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `shairport_sync` | home-assistant/brands#4193 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `shell_recharge` | home-assistant/brands#5111 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `shinobi` | home-assistant/brands#2507 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `shopping_list_with_grocy` | home-assistant/brands#3854 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sht20` | home-assistant/brands#7851 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sickchill` | home-assistant/brands#1596 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `siegenia` | home-assistant/brands#8421 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sihas` | home-assistant/brands#4130 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `siku` | home-assistant/brands#3842 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `silencescooter` | home-assistant/brands#3949 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `simple_timer` | home-assistant/brands#7438 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `simpleicons` | home-assistant/brands#1565 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `simply_magic_areas` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sizzapp` | home-assistant/brands#7958 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sjofartsverket_viva` | home-assistant/brands#3273 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `skisporet` | home-assistant/brands#3594 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `skodaconnect` | home-assistant/brands#2061 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `skolmat` | home-assistant/brands#3333 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `skydance` | home-assistant/brands#2110 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `skykettle` | home-assistant/brands#3111 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `skyq` | home-assistant/brands#1582 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `slovenian_weather_integration` | home-assistant/brands#6356 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `smappee_ev` | home-assistant/brands#6147 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `smappee_official` | home-assistant/brands#1680 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `smart_climate_control` | home-assistant/brands#7746 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `smart_irrigation` | home-assistant/brands#1616 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `smart_thermostat` | home-assistant/brands#2925 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `smartcocoon` | home-assistant/brands#2808 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `smartdaily_postal_ha` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `smartelektra_tools` | home-assistant/brands#9623 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `smartercoffee` | home-assistant/brands#2827 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `smartevse` | home-assistant/brands#4024 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `smarthashtag` | home-assistant/brands#5183 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `smartschool` | home-assistant/brands#7235 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `smartsolar_mppt` | home-assistant/brands#8195 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `smartthinq_sensors` | home-assistant/brands#1607 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `smartweather` | home-assistant/brands#1645 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `smhi_alerts` | home-assistant/brands#5939 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `snapmaker` | home-assistant/brands#5277 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sodexo_dla_ciebie` | home-assistant/brands#3535 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `solar_frontier` | home-assistant/brands#5108 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `solar_optimizer` | home-assistant/brands#4604 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `solar_sunsynk` | home-assistant/brands#4528 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `solaredge_forecast` | home-assistant/brands#4503 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `solaredgeoptimizers` | home-assistant/brands#3849 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `solax_http` | home-assistant/brands#5091 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `solcast_solar` | home-assistant/brands#2844 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `solis_cloud_monitoring` | home-assistant/brands#8330 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `solis_modbus` | home-assistant/brands#4945 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `soma_connect` | home-assistant/brands#3936 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `somneo` | home-assistant/brands#2760 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `somnofy` | home-assistant/brands#2475 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `somweb` | home-assistant/brands#4290 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sonarr_upcoming_media` | home-assistant/brands#5181 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sonnenbatterie` | home-assistant/brands#4736 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sonoff` | home-assistant/brands#2019 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `southern_company` | home-assistant/brands#4692 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sox` | home-assistant/brands#1784 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `spacex` | home-assistant/brands#1826 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `spaclient` | home-assistant/brands#1755 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `spritmonitor` | home-assistant/brands#7375 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sql_json` | home-assistant/brands#1938 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `srv` | home-assistant/brands#4213 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sst_cloud` | home-assistant/brands#3324 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `starling_home_hub` | home-assistant/brands#5176 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `state_counter` | home-assistant/brands#5514 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `stateful_scenes` | home-assistant/brands#4616 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `steam_profile` | home-assistant/brands#4635 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `steamvr` | home-assistant/brands#5092 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `stellantis_vehicles` | home-assistant/brands#5738 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `stihl_imow` | home-assistant/brands#2639 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sunseeker` | home-assistant/brands#5280 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sunspec` | home-assistant/brands#2615 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sunweg_custom` | home-assistant/brands#7762 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `superloop` | home-assistant/brands#6869 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sureha` | home-assistant/brands#2653 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `surepetcarebeta` | home-assistant/brands#2566 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `sutro` | home-assistant/brands#3545 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `svitlo_live` | home-assistant/brands#8353 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `svk_mimer` | home-assistant/brands#4653 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `swatch` | home-assistant/brands#3330 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `swell_forecast` | home-assistant/brands#6475 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `swemail` | home-assistant/brands#3162 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `swissinno_ble` | home-assistant/brands#6671 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `switch_manager` | home-assistant/brands#3902 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `switchbotremote` | home-assistant/brands#4742 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `synology_vmm` | home-assistant/brands#3523 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `systemair` | home-assistant/brands#3580 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ta_cmi` | home-assistant/brands#3688 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ta_coe` | home-assistant/brands#4320 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tahoma` | home-assistant/brands#3017 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tailwind_iq3` | home-assistant/brands#2858 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `taphome` | home-assistant/brands#2125 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tarifa_20td` | home-assistant/brands#4270 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tasker` | home-assistant/brands#4421 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tauron-outages` | home-assistant/brands#2922 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tcl_tv_remote` | home-assistant/brands#4005 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tdameritrade` | home-assistant/brands#2232 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tech` | home-assistant/brands#5037 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `technicolor` | home-assistant/brands#2551 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tecnoalarm` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tele2_datausage` | home-assistant/brands#4443 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `telenet_telemeter` | home-assistant/brands#4037 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `teletask` | home-assistant/brands#2738 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `temperatur_nu` | home-assistant/brands#4010 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `teracom` | home-assistant/brands#2275 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `terma_moa_blue` | home-assistant/brands#9335 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `termux_api` | home-assistant/brands#4785 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tesla_custom` | home-assistant/brands#2527 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `teslafi` | home-assistant/brands#4475 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `teufel_raumfeld` | home-assistant/brands#2220 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `themeparks` | home-assistant/brands#3568 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `thermacell_liv` | home-assistant/brands#7854 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `thermia` | home-assistant/brands#3026 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `thermiagenesis` | home-assistant/brands#2992 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `thermiq_mqtt` | home-assistant/brands#1679 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `thermosmart` | home-assistant/brands#4278 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `thingwala_geyserwala_connect` | home-assistant/brands#4760 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tinkerforge` | home-assistant/brands#2901 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tns_energo` | home-assistant/brands#2650 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `trackimo` | home-assistant/brands#1878 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `trafikinfo_se` | home-assistant/brands#9014 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `trakt_tv` | home-assistant/brands#2682 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `trash_tracking` | home-assistant/brands#8532 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `trias` | home-assistant/brands#4956 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `truenas` | home-assistant/brands#3119 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tryfi` | home-assistant/brands#1996 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tuiss2ha` | home-assistant/brands#4224 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tuneblade` | home-assistant/brands#3010 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tuya_ble` | home-assistant/brands#4245 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tuya_body_fat_scale` | home-assistant/brands#7201 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tuya_cloud_map_extractor` | home-assistant/brands#4808 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tuya_heat_pump` | home-assistant/brands#8174 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tuya_local` | home-assistant/brands#1574 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tuya_scale` | home-assistant/brands#7134 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tuya_sensors` | home-assistant/brands#6780 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tuya_v2` | home-assistant/brands#2619 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tuyahombli` | home-assistant/brands#5152 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `tylo_sauna` | home-assistant/brands#8687 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ufanet` | home-assistant/brands#8698 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ukho_tides` | home-assistant/brands#2410 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ultimaker` | home-assistant/brands#2150 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `unifi_bandwidth` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `unifi_unas` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `unifi_voucher` | home-assistant/brands#4886 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `uniled` | home-assistant/brands#3916 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ups_snmp_ha` | home-assistant/brands#9308 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `upsplus` | home-assistant/brands#4083 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `usr_r16` | home-assistant/brands#1962 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `uvfive` | home-assistant/brands#2748 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `vapix` | home-assistant/brands#2346 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `var` | home-assistant/brands#1611 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `variable` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `vconnex_cc` | home-assistant/brands#2960 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `vektiva_smarwi` | home-assistant/brands#8509 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ventilation_advisor` | home-assistant/brands#9314 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ventoptimization` | home-assistant/brands#4167 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `versatile_thermostat` | home-assistant/brands#3990 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `victorsmartkill` | home-assistant/brands#1914 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `vigieau` | home-assistant/brands#4558 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `viomise` | home-assistant/brands#2202 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `virage_dashboard` | home-assistant/brands#2677 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `visonic` | home-assistant/brands#1583 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `visualcrossing` | home-assistant/brands#4702 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `viva` | home-assistant/brands#3819 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `vivint` | home-assistant/brands#2159 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `vodafone` | home-assistant/brands#4116 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `voiceassistant` | home-assistant/brands#3397 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `volkswagen_we_connect_id` | home-assistant/brands#3098 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `volkswagencarnet` | home-assistant/brands#1710 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `volvoaaos` | home-assistant/brands#4783 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `vson` | home-assistant/brands#7131 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `vyos` | home-assistant/brands#3551 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `warzone` | home-assistant/brands#2592 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `waste_collection_schedule` | home-assistant/brands#2945 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `water_quality_fvm` | home-assistant/brands#2911 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `waterguard_linkbox` | home-assistant/brands#7643 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `waterkotte_heatpump` | home-assistant/brands#4048 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `watermyyard-pro` | home-assistant/brands#2718 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `wattbox` | home-assistant/brands#1590 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `wattio` | home-assistant/brands#2145 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `watts_vision` | home-assistant/brands#3601 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `waveshare_ups_hat` | home-assistant/brands#5753 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `wavinsentio` | home-assistant/brands#2424 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `weatherbit` | home-assistant/brands#1591 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `weatherdotcom` | home-assistant/brands#4402 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `weatherflow_forecast` | home-assistant/brands#4733 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `weatherlink` | home-assistant/brands#2996 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `webhook_service` | home-assistant/brands#2769 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `webuntis` | home-assistant/brands#3744 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `weenect` | home-assistant/brands#2476 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `weight_gurus` | home-assistant/brands#2640 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `weight_recorder` | home-assistant/brands#5508 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `weishaupt_wcm_com` | home-assistant/brands#3604 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `wellbeing` | home-assistant/brands#3321 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `wemportal` | home-assistant/brands#2271 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `willyweather` | home-assistant/brands#2828 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `windhager` | home-assistant/brands#4918 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `wiser` | home-assistant/brands#1696 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `wn_smartmeter` | home-assistant/brands#4208 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `wolf` | home-assistant/brands#5068 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `worlds_air_quality_index` | home-assistant/brands#3423 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `worldtidesinfocustom` | home-assistant/brands#2144 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `wundergroundpws` | home-assistant/brands#4162 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xaal` | home-assistant/brands#7951 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xcomfort_bridge` | home-assistant/brands#4359 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xgimi` | home-assistant/brands#4295 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xiaomi_cloud` | home-assistant/brands#1840 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xiaomi_gateway3` | home-assistant/brands#1882 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xiaomi_miio_airconditioningcompanion` | home-assistant/brands#1949 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xiaomi_miio_airpurifier` | home-assistant/brands#1940 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xiaomi_miio_cooker` | home-assistant/brands#2554 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xiaomi_miio_fan` | home-assistant/brands#2553 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xiaomi_miio_philipslight` | home-assistant/brands#2143 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xiaomi_miio_plug` | home-assistant/brands#1992 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xiaomi_miio_raw` | home-assistant/brands#1992 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xiaomi_miot` | home-assistant/brands#2155 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xiaomi_miot_raw` | home-assistant/brands#2215 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xiaomi_viomi` | home-assistant/brands#2676 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xiaotu_door` | home-assistant/brands#5912 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xmrig` | home-assistant/brands#2713 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xmrpool_stat` | home-assistant/brands#2692 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `xyscreens` | home-assistant/brands#3886 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `yahoofinance` | home-assistant/brands#1980 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `yainternetometr` | home-assistant/brands#8444 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `yamaha_ynca` | home-assistant/brands#3426 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `yandex_music_browser` | home-assistant/brands#2649 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `yandex_weather` | home-assistant/brands#3092 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `yeelight_bt` | home-assistant/brands#1824 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `yeelight_v2` | home-assistant/brands#2216 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `yeelock` | home-assistant/brands#4824 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `youfone_be` | home-assistant/brands#4053 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `ytube_music_player` | home-assistant/brands#2045 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `zaptec` | home-assistant/brands#2245 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `zcsmower` | home-assistant/brands#4336 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `zha_custom` | home-assistant/brands#3039 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `zha_toolkit` | home-assistant/brands#3097 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `zidoo` | home-assistant/brands#2891 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `zigbang_doorlock` | home-assistant/brands#6048 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `zigbee_map` | home-assistant/brands#8071 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `zimi` | home-assistant/brands#3148 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `zone4` | home-assistant/brands#4409 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `zoom` |  | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `zowietek` | home-assistant/brands#8605 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `zte_tracker` | home-assistant/brands#3667 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `zyxel_snmp` | home-assistant/brands#5790 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |
| `zyxel_switch_poe` | home-assistant/brands#4999 | Unknown | Unknown | Original brands PR did not identify a usable upstream repository. |  |

## Needs manual follow-up

| Domain | Original brands PR | Upstream repository | Upstream state | Reason | Tracking PR |
| --- | --- | --- | --- | --- | --- |
| `12123` | home-assistant/brands#8482 | https://github.com/758639304/12123 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `3bmeteo` | home-assistant/brands#9542 | https://github.com/matte-oss/hass-3bmeteo | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `abb_fimer_pvi_sunspec` | home-assistant/brands#8284 | https://github.com/alexdelprete/ha-abb-fimer-pvi-vsn-rest | Active, pushed 2026-10-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `abbfreeathome_ci` | home-assistant/brands#5937 | https://github.com/kingsleyadam/local-abbfreeathome-hass | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `abcemergency` | home-assistant/brands#8649 | https://github.com/troykelly/homeassistant-abcemergency | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `acond` | home-assistant/brands#8624 | https://github.com/piotrekcrash/acond_pro_heat_pump | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `acwd_water_usage` | home-assistant/brands#5005 | https://github.com/parvez/acwd_water_usage | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `adaptive_climate` | home-assistant/brands#7412 | https://github.com/msinhore/adaptive_climate | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `adjustable_bed` | home-assistant/brands#9116 | https://github.com/kristofferR/ha-adjustable-bed | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `aguacatec` | home-assistant/brands#6912 | https://github.com/AguacatecHA/brands | Active, pushed 2026-02-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `aguasdegaia` | home-assistant/brands#5492 | https://github.com/zerolo/aguasgaiaHA | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `agur` | home-assistant/brands#5016 | https://github.com/tbouron/ha-agur | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `aha_trash` | home-assistant/brands#9036 | https://github.com/soundstorm/aha_trash | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ai_agent_ha` | home-assistant/brands#7140 | https://github.com/sbenodiz/ai_agent_ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ai_config_agent` | home-assistant/brands#8335 | https://github.com/yinzara/ha-config-ai-agent | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ail` | home-assistant/brands#9199 | https://github.com/lukefx/ail-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `aimp` | home-assistant/brands#2632 | https://github.com/xilense/aimp_custom_component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `air_cloud` | home-assistant/brands#5214 | https://github.com/svmironov/aircloud_ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `aircloud` | home-assistant/brands#5242 | https://github.com/ylemoigne/aircloud-hass | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `airco2ntrol` | home-assistant/brands#6486 | https://github.com/leorbs/airco2ntrol | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `airios_ventilation` | home-assistant/brands#7392 | https://github.com/scabrero/homeassistant-airios-component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `airtub_udp` | home-assistant/brands#5737 | https://github.com/zenz/airtub_ha_reader | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `airzonecloud` | home-assistant/brands#3270 | https://github.com/max13fr/Airzonecloud-HomeAssistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ajax` | home-assistant/brands#8379 | https://github.com/foXaCe/ajax-hass | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `akuvox` | home-assistant/brands#4670 | https://github.com/nimroddolev/akuvox | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `alarms_and_reminders` | home-assistant/brands#6914 | https://github.com/omaramin-2000/HA-Alarms-and-Reminders | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `aldes` | home-assistant/brands#3280 | https://github.com/aalmazanarbs/hassio_aldes | Active, pushed 2023-06-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `alert2` | home-assistant/brands#6577 | https://github.com/redstone99/hass-alert2 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `aliexpress_package_tracker` | home-assistant/brands#6746 | https://github.com/yohaybn/HA_aliexpress_package_tracker_sensor | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `aliyun_bailian_tts` | home-assistant/brands#7823 | https://github.com/itning/hass-aliyun_bailian_tts | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `amazon_order_status` | home-assistant/brands#9480 | https://github.com/koconnorgit/ha-amazon-order-status | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `amb_dynamic_energy` | home-assistant/brands#8119 | https://github.com/uschti/Hassio-AMB-Dynamic-Energy-Addons | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ambrogio_robot` | home-assistant/brands#4230 | https://github.com/sHedC/homeassistant-ambrogio | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `amc_alarm` | home-assistant/brands#5426 | https://github.com/vermut/ha_amc_alarm | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `amerigas` | home-assistant/brands#9251 | https://github.com/skircr115/ha-amerigas](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `amit` | home-assistant/brands#9364 | https://github.com/pekur/amit_ha_integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `amit_hvac` | home-assistant/brands#5351 | https://github.com/mitch3s/ha-amit-hvac | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ampaera` | home-assistant/brands#9176 | https://github.com/morteng/ampaera-homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ampster` | home-assistant/brands#7121 | https://github.com/ampster-co/ampster-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `amshan` | home-assistant/brands#1766 | https://github.com/toreamun/amshan-homeassistant](url | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ankermake` | home-assistant/brands#5643 | https://github.com/sondregronas/ankermake-hass-component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `anova_nano` | home-assistant/brands#6377 | https://github.com/mcolyer/hacs-anova-nano | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `apex` | home-assistant/brands#3554 | https://github.com/itchannel/apex-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `apex_fusion` | home-assistant/brands#9527 | https://github.com/roblandry/apex-fusion-home-assistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `apple_device_latest_version` | home-assistant/brands#8272 | https://github.com/potat0man/home-assistant-apple-device-latest-version | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `apti` | home-assistant/brands#5964 | https://github.com/lunDreame/homeassistant-apti | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `aqua_medic_dc_runner` | home-assistant/brands#6616 | https://github.com/maziggy/aqua_medic_dc_runner | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `aqua_temp` | home-assistant/brands#4389 | https://github.com/radical-squared/aquatemp | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `aquaforte` | home-assistant/brands#5925 | https://github.com/geelenbert/aquaforte](url | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `arris_cm3500` | home-assistant/brands#6489 | https://github.com/stickpin/homeassistant-arris_cm3500 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `arris_dcx960` | home-assistant/brands#2785 | https://github.com/Sholofly/arrisdcx960 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `artemis_rgb` | home-assistant/brands#8787 | https://github.com/Artemis-RGB/Artemis | Active, pushed 2026-10-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `askoheat` | home-assistant/brands#6232 | https://github.com/toggm/askoheat | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `askuuz` | home-assistant/brands#9430 | https://github.com/lavalex2003/askuuz | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `assistant_cooker` | home-assistant/brands#9246 | https://github.com/machintrucbidule/assistant-cooker | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `asys_ble` | home-assistant/brands#7480 | https://github.com/tom42530/asys_ble_ha](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `aten_pe` | home-assistant/brands#10626 | https://github.com/home-assistant/home-assistant.io | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `atmofrance` | home-assistant/brands#4367 | https://github.com/sebcaps/atmofrance | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `atomcam_hack` | home-assistant/brands#3328 | https://github.com/vwt12eh8/hassio-atomcam-hack | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `aus_space_weather` | home-assistant/brands#6862 | https://github.com/kcoffau/AUS_BOM_Space_Weather_Alert_System | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `auto_light` | home-assistant/brands#7724 | https://github.com/xiaoshi930/auto_light | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `automationhat` | home-assistant/brands#6320 | https://github.com/marcvivet/ha_automation_hat](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `autosnooze` | home-assistant/brands#9055 | https://github.com/mossipcams/autosnooze | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `avgear_matrix` | home-assistant/brands#7656 | https://github.com/marklynch/hass-avgear-matrix | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `aws_codepipeline` | home-assistant/brands#2217 | https://github.com/rj175/home-assistant-aws-codepipeline | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `azure_ai_tasks` | home-assistant/brands#7940 | https://github.com/loryanstrant/HA-Azure-AI-tasks | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `azure_openai_conversation` | home-assistant/brands#4291 | https://github.com/joselcaguilar/azure-openai-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `backup_guardian` | home-assistant/brands#9456 | https://github.com/leonardus1973/backup-guardian | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bafavorank` | home-assistant/brands#6549 | https://github.com/k96e/BAFavRank | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `baidu-charging` | home-assistant/brands#5917 | https://github.com/hasscc/baidu-charging | Active, pushed 2024-04-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bakalari` | home-assistant/brands#8232 | https://github.com/schizza/bakalari-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bambu_lab` | home-assistant/brands#4017 | https://github.com/greghesp/ha-bambulab-devtest | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bambu_lab_p1_spaghetti_detection` | home-assistant/brands#5146 | https://github.com/nberktumer/ha-bambu-lab-p1-spaghetti-detection | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bapiwireless` | home-assistant/brands#8094 | https://github.com/kwuest/BAPI-Wireless-HA-Integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bart_realtime` | home-assistant/brands#5948 | https://github.com/jzucker2/bart-realtime | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `beatify` | home-assistant/brands#9164 | https://github.com/mholzi/beatify | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `beckettlink` | home-assistant/brands#4057 | https://github.com/dcmeglio/homeassistant-beckettlink | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `behome` | home-assistant/brands#7561 | https://github.com/bemfa/behome](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bemfa` | home-assistant/brands#3118 | https://github.com/larry-wong/bemfa](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `berlin_transport` | home-assistant/brands#5077 | https://github.com/vas3k/home-assistant-berlin-transport | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bernerbox` | home-assistant/brands#8361 | https://github.com/moarph/homeassistant_berner_torantriebe | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bestin` | home-assistant/brands#5772 | https://github.com/lunDreame/ha-bestin | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `beszel` | home-assistant/brands#7278 | https://github.com/maxexcloo/beszel-homeassistant-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `beszel_api` | home-assistant/brands#7304 | https://github.com/ronjar/beszel-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `better_calendar` | home-assistant/brands#7541 | https://github.com/lotablet/better_calendar | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `better_trends` | home-assistant/brands#6175 | https://github.com/maziggy/BetterTrends | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `beurer_daylight_lamps` | home-assistant/brands#7974 | https://github.com/Bellamonte/brands | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bgg_sync` | home-assistant/brands#9073 | https://github.com/seanmccabe/bgg-sync | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bin_day` | home-assistant/brands#9647 | https://github.com/matterbury/Brisbane-Bin-Day | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `binance_pool` | home-assistant/brands#3589 | https://github.com/shammysha/homeassistant-binance-pool | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bing_wallpaper` | home-assistant/brands#7074 | https://github.com/ndesgranges/bing-wallpaper | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `birthdays` | home-assistant/brands#6749 | https://github.com/UnoSite/Birthdays | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bituopmd` | home-assistant/brands#5842 | https://github.com/script0803/BituoPMD | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bleep` | home-assistant/brands#6129 | https://github.com/magicus/ha-bleep | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `blitzerde` | home-assistant/brands#5991 | https://github.com/timniklas/hacs_blitzerde | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bluebolt` | home-assistant/brands#8801 | https://github.com/matthewdean/ha-bluebolt | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `blueprint_studio` | home-assistant/brands#8718 | https://github.com/soulripper13/blueprint-studio | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bluesky` | home-assistant/brands#6157 | https://github.com/ScreamingToaster/Bluesky-Integration](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bms_ble` | home-assistant/brands#5266 | https://github.com/patman15/BLE_BMS-HA | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `boks` | home-assistant/brands#8570 | https://github.com/thib3113/ha-boks | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bold` | home-assistant/brands#4734 | https://github.com/lwestenberg/homeassistant_bold | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bolletta` | home-assistant/brands#6233 | https://github.com/StefanoGiu/bolletta | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bonaire_myclimate` | home-assistant/brands#1848 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bonusdrive` | home-assistant/brands#8566 | https://github.com/xathon/Allianz-BonusDrive-HomeAssistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bookoo` | home-assistant/brands#9510 | https://github.com/makerwolf/bookoo | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bosch_homecom` | home-assistant/brands#6440 | https://github.com/serbanb11/bosch-homecom-hass | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bot_zalo` | home-assistant/brands#7789 | https://github.com/smarthomeblack/bot_zalo | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bpost` | home-assistant/brands#2986 | https://github.com/sdebruyn/homeassistant-bpost-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bravia_quad` | home-assistant/brands#8628 | https://github.com/steamEngineer/bravia-quad-homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `brink_ventilation` | home-assistant/brands#4361 | https://github.com/samuolis/brink | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bristol_water` | home-assistant/brands#7220 | https://github.com/owenvoke/hass-bristol-water | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `brother_ql` | home-assistant/brands#8892 | https://github.com/jzucker2/ha-brother-ql-printer | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bsk_zephyr` | home-assistant/brands#6759 | https://github.com/andersonshatch/hass-bskzephyr | Active, pushed 2026-01-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `buderus_wps` | home-assistant/brands#8740 | https://github.com/reinlemmens/buderus-wps-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `buspro` | home-assistant/brands#6586 | https://github.com/jnemecGordic/home_assistant_buspro | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `busvertrektijden` | home-assistant/brands#8282 | https://github.com/kerstenremco/hacs-busvertrektijden | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `butenunbinnen` | home-assistant/brands#6301 | https://github.com/timniklas/hass-butenunbinnen | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `button_plus` | home-assistant/brands#5397 | https://github.com/koenhendriks/ha-button-plus | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `bvg_berlin_public_transport` | home-assistant/brands#3436 | https://github.com/ryanbateman/bvg_hacs | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `byd_battery_box` | home-assistant/brands#6309 | https://github.com/redpomodoro/byd_battery_box | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `cable_modem_monitor` | home-assistant/brands#8237 | https://github.com/kwschulz/cable_modem_monitor | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `calaos` | home-assistant/brands#4266 | https://github.com/tiramiseb/calaos-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `calendar_events` | home-assistant/brands#5592 | https://github.com/kgn3400/calendar_events | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `calendarific` | home-assistant/brands#4893 | https://github.com/pinkywafer/Calendarific | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `calorie_tracker` | home-assistant/brands#7289 | https://github.com/kgstorm/home-assistant-calorie-tracker | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `cameralux` | home-assistant/brands#7655 | https://github.com/markfrancisonly/ha-cameralux | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `canaan` | home-assistant/brands#9593 | https://github.com/jinx-22/avalon_nano3s | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `candy` | home-assistant/brands#2884 | https://github.com/ofalvai/home-assistant-candy | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `carbon_intensity_uk` | home-assistant/brands#1669 | https://github.com/jscruz/sensor.carbon_intensity_uk | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `carelink` | home-assistant/brands#3898 | https://github.com/yo-han/Home-Assistant-Carelink | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `casambi_bt` | home-assistant/brands#3961 | https://github.com/lkempf/casambi-bt-hass | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `catholic_calendar` | home-assistant/brands#5041 | https://github.com/jmacri01/homeassistant-custom-components-catholic-calendar | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `catt_service` | home-assistant/brands#4876 | https://github.com/jrobichaud/ha-catt-service | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `cez_distribuce` | home-assistant/brands#8147 | https://github.com/konikvranik/hacs_cez_distribuce | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `cez_distribuce_hdo` | home-assistant/brands#8998 | https://github.com/pokornyIt/ha-cez-distribution-hdo | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `changsui_pdu` | home-assistant/brands#8871 | https://github.com/ZHonry/ziot](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `charge_advisor` | home-assistant/brands#4535 | https://github.com/vincenzo-suraci-ares2t/charge_advisor | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `chargeamps` | home-assistant/brands#1725 | https://github.com/kirei/hass-chargeamps | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `chargepoint` | home-assistant/brands#3312 | https://github.com/mbillow/ha-chargepoint | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `chatterbox_tts` | home-assistant/brands#7530 | https://github.com/jmdevita/chatterbox-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `checkly` | home-assistant/brands#3572 | https://github.com/ndom91/homeassistant-checkly | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `choremander` | home-assistant/brands#8913 | https://github.com/vinnybad/choremander | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `chores4kids` | home-assistant/brands#8321 | https://github.com/qlerup/chores4kids-sync | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `chronoshade` | home-assistant/brands#7431 | https://github.com/mikipal7/ha-chronoshade | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `citibike` | home-assistant/brands#5632 | https://github.com/ruchoff/homeassistant-citibike | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `cityhome_intercom` | home-assistant/brands#7548 | https://github.com/krassalexs/ha-cityhome-intercom | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `clage_homeserver` | home-assistant/brands#2930 | https://github.com/klacol/homeassistant-clage_homeserver | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `clash` | home-assistant/brands#6280 | https://github.com/yangtfu/hass-clash | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `clausius` | home-assistant/brands#9764 | https://github.com/jaqb12/home-assistant-clausius | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `clever` | home-assistant/brands#3891 | https://github.com/mtrab/clever | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `clevertouch` | home-assistant/brands#6665 | https://github.com/hemphen/hass-clevertouch | Active, pushed 2025-03-21 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `clientraw` | home-assistant/brands#2306 | https://github.com/pilotak/homeassistant-clientraw | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `climate_manager` | home-assistant/brands#7418 | https://github.com/lotablet/climate_manager | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `climate_scheduler` | home-assistant/brands#8577 | https://github.com/kneave/climate-scheduler | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `climate_template` | home-assistant/brands#6385 | https://github.com/jcwillox/hass-template-climate | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `clivet` | home-assistant/brands#7712 | https://github.com/sdebruyn/integration-clivet | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `clivet_bms` | home-assistant/brands#6743 | https://github.com/sinseman44/clivet-BMS-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `clockwork` | home-assistant/brands#9564 | https://github.com/mutilator/clockwork | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `cloudweatherproxy` | home-assistant/brands#5554 | https://github.com/lhw/cloudweatherproxy | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `cn360` | home-assistant/brands#6950 | https://github.com/cavefire/cn360-homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `cocoro_air` | home-assistant/brands#6575 | https://github.com/yuyuvn/cocoro-air | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `columbusgoesdigital` | home-assistant/brands#6756 | https://github.com/RobWildGarlic/zambretti-integration | Active, pushed 2026-03-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `comfoclime` | home-assistant/brands#6888 | https://github.com/msfuture/comfoclime | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `comma_ai` | home-assistant/brands#8283 | https://github.com/bscholer/home-assistant-comma-ai](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `connectd` | home-assistant/brands#8736 | https://github.com/sudoxnym/connectd | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `consumable_tracker` | home-assistant/brands#8964 | https://github.com/thetic/hass-consumable-tracker | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `controme` | home-assistant/brands#6554 | https://github.com/[flame4ever/homeassistant-controme-integration](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `convert_media_album_art` | home-assistant/brands#8707 | https://github.com/zembrzycki/convert-media-album-art | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `coral_mylo` | home-assistant/brands#7529 | https://github.com/jakeyr/coral_mylo_ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `countit` | home-assistant/brands#8084 | https://github.com/robinvervoort/countit-homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `cover_time_based_synced` | home-assistant/brands#2674 | https://github.com/kotborealis/home-assistant-custom-components-cover-time-based-synced | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `coway` | home-assistant/brands#2356 | https://github.com/sarahhenkens/home-assistant-iocare | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `crewmeister` | home-assistant/brands#8357 | https://github.com/mztechnik/hacs-crewmeister | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `cryptostate` | home-assistant/brands#2582 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `csgo_gamestate` | home-assistant/brands#1593 | https://github.com/lociii/homeassistant-csgo | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `csnet_home` | home-assistant/brands#8255 | https://github.com/mmornati/home-assistant-csnet-home | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `culligan` | home-assistant/brands#4759 | https://github.com/rewardone/homeassistant-culligan-water-softener | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `currentcost` | home-assistant/brands#1850 | https://github.com/lolouk44/CurrentCost_HA_CC | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `custom_icons` | home-assistant/brands#6989 | https://github.com/thomasloven/hass-custom_icons | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `custom_recorder` | home-assistant/brands#4961 | https://github.com/oukene/custom_recorder | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `cvnet` | home-assistant/brands#7301 | https://github.com/nnnlog/homeassistant-cvnet-smarthome | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `cwaweather` | home-assistant/brands#6435 | https://github.com/wctang/cwaweather | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `cyberq` | home-assistant/brands#6269 | https://github.com/jchonig/ha_cyberq | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `cync_lights` | home-assistant/brands#4412 | https://github.com/nikshriv/cync_lights | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `cz_energy_spot_prices` | home-assistant/brands#4104 | https://github.com/rnovacek/homeassistant_cz_energy_spot_prices | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `dahua_poe` | home-assistant/brands#6538 | https://github.com/slydiman/dahua_poe](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `dahua_vto` | home-assistant/brands#2369 | https://github.com/myhomeiot/DahuaVTO | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `daikin_d3net` | home-assistant/brands#5895 | https://github.com/martinstafford/daikin_d3net | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `daikin_residential` | home-assistant/brands#3584 | https://github.com/rospogrigio/daikin_residential | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `daikinone` | home-assistant/brands#4427 | https://github.com/zlangbert/ha-daikinone | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `daily_hadith` | home-assistant/brands#6706 | https://github.com/zubir2k/homeassistant-dailyhadith | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `daily_islamic_hadith` | home-assistant/brands#6447 | https://github.com/osama1225/daily-islamic-hadith-homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `daily_text` | home-assistant/brands#7324 | https://github.com/53l3cu5/daily_text | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `danfoss` | home-assistant/brands#9297 | https://github.com/jonbng/ha-danfoss-eco | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `dashcast` | home-assistant/brands#7150 | https://github.com/AlexxIT/DashCast | Active, pushed 2024-12-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `datadog_agentless` | home-assistant/brands#5559 | https://github.com/kamaradclimber/datadog-integration-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `davis_local` | home-assistant/brands#4617 | https://github.com/ryan-lang/homeassistant-davis-local | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `davis_weatherlink_live` | home-assistant/brands#6565 | https://github.com/stevesinchak/ha-weatherlink-live | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `deddie_metering` | home-assistant/brands#6977 | https://github.com/mike81gr/deddie-metering | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `deembot_atick` | home-assistant/brands#9233 | https://github.com/trudenboy/hassio-atick | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `deepgram_tts` | home-assistant/brands#9090 | https://github.com/alceasan/ha-deepgram-tts](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `default_config_disabler` | home-assistant/brands#4550 | https://github.com/tronikos/default_config_disabler | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `delawareoh_refuse` | home-assistant/brands#8261 | https://github.com/seanharsh/HA-DelOH-Refuse-Schedule | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `delco_water` | home-assistant/brands#9059 | https://github.com/patrickjcash/delco-water-hass | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `delios` | home-assistant/brands#4984 | https://github.com/lnx85/delios | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `deskbike` | home-assistant/brands#6214 | https://github.com/joshburkard/DeskBike | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `deva4004` | home-assistant/brands#4383 | https://github.com/s1lvi0/deva4004 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `device_maintenance_monitor` | home-assistant/brands#5602 | https://github.com/rafael-zilberman/device-maintenance-monitor-custom-component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `device_pulse` | home-assistant/brands#8298 | https://github.com/studiobts/home-assistant-device-pulse](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `diagral` | home-assistant/brands#6629 | https://github.com/mguyard/hass-diagral | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `dialect_thermometer` | home-assistant/brands#8077 | https://github.com/kbyrkjeland/dialect-thermometer | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `digitalstrom` | home-assistant/brands#1592 | https://github.com/lociii/homeassistant-digitalstrom | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `dingz` | home-assistant/brands#4612 | https://github.com/siku2/hass-dingz | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `disasterinformation` | home-assistant/brands#7358 | https://github.com/heartstatnet/ha-disasterinformation](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `divera` | home-assistant/brands#3464 | https://github.com/fwmarcel/home-assistant-divera | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `diveracontrol` | home-assistant/brands#6452 | https://github.com/moehrem/DiveraControl](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `djv_meter` | home-assistant/brands#8419 | https://github.com/mcapmari/ha-djv_meter | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `dmx` | home-assistant/brands#7238 | https://github.com/Breina/ha-artnet-led | Active, pushed 2026-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `dnsdist` | home-assistant/brands#8294 | https://github.com/renaudallard/homeassistant_dnsdist | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `donghang_lottery` | home-assistant/brands#9292 | https://github.com/1bobby-git/HA-DongHang-Lottery | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `dovecot_quotas` | home-assistant/brands#7064 | https://github.com/MarcoGos/dovecot_quotas | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `drivvo` | home-assistant/brands#3299 | https://github.com/hudsonbrendon/sensor.drivvo | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `drooff_fireplus` | home-assistant/brands#7051 | https://github.com/tehlers/ha-drooff-fireplus | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ds_air` | home-assistant/brands#4577 | https://github.com/mypal/ha-dsair | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `duco_ventilation_sun_control` | home-assistant/brands#6169 | https://github.com/Sikerdebaard/hacs-ducobox-connector | Active, pushed 2026-02-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `duke_energy` | home-assistant/brands#9895 | https://github.com/home-assistant/home-assistant.io | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `dutchdutch` | home-assistant/brands#6238 | https://github.com/trevorwarwick/dutchdutch | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `dvsportal` | home-assistant/brands#4991 | https://github.com/ChessSpider/dvsportal | Active, pushed 2026-09-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `dwd_precipitation_forecast` | home-assistant/brands#5591 | https://github.com/stoppegp/ha-dwd-precipitation-forecast | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `dynamic_dns` | home-assistant/brands#6436 | https://github.com/jdolieslager/homeassistant-dynamic-dns | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `eafm_enhanced` | home-assistant/brands#9325 | https://github.com/thefunkygibbon/eafm-enhanced | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `easun_inverter` | home-assistant/brands#6639 | https://github.com/vgsolar2/easunpy | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `easymonitor` | home-assistant/brands#6562 | https://github.com/home-assistant/wheels | Active, pushed 2026-10-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `eaton_ups_mqtt` | home-assistant/brands#6783 | https://github.com/lnagel/hass-eaton-ups-mqtt | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `eaton_upsc` | home-assistant/brands#6922 | https://github.com/sockless-coding/ha-eaton-ups-companion | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `eboks` | home-assistant/brands#9190 | https://github.com/Hovborg/ha-eboks | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ecactusecos` | home-assistant/brands#6065 | https://github.com/sjhoeksma/ecactus-ecos-cloud | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `echonetlite` | home-assistant/brands#2817 | https://github.com/scottyphillips/echonetlite_homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ecl_modbus` | home-assistant/brands#8623 | https://github.com/user-attachments/assets | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `eco2mix` | home-assistant/brands#6177 | https://github.com/lfpoulain/ha-eco2mix | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ecoflow_cloud` | home-assistant/brands#4686 | https://github.com/tolwi/hassio-ecoflow-cloud | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ecoguard` | home-assistant/brands#9024 | https://github.com/skogsmaskin/ecoguard-home-assistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ecologi` | home-assistant/brands#3851 | https://github.com/owenvoke/hass-ecologi | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `econnect_metronet` | home-assistant/brands#4750 | https://github.com/palazzem/ha-econnect-alarm | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ecotracker` | home-assistant/brands#9037 | https://github.com/stefanseeger/ecotracker | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ecotrend_ista` | home-assistant/brands#3338 | https://github.com/Ludy87/brands | Active, pushed 2026-07-21 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ecowater_softener` | home-assistant/brands#2796 | https://github.com/barleybobs/brands | Active, pushed 2021-09-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `edata` | home-assistant/brands#3918 | https://github.com/uvejota/homeassistant-edata | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `edf_freephase_dynamic_tariff` | home-assistant/brands#9087 | https://github.com/jswilkinson851/ha-edf-freephase-dynamic-tariff | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `edilkamin` | home-assistant/brands#5333 | https://github.com/nghaye/ha-edilkamin | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `edinplus` | home-assistant/brands#3937 | https://github.com/sftgunner/edinplus-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `eeproperty` | home-assistant/brands#8652 | https://github.com/timotheeandres/eeproperty_hacs | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `effortlesshome` | home-assistant/brands#5926 | https://github.com/EffortlessHome/eh_integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `eg4_inverter` | home-assistant/brands#6858 | https://github.com/twistedroutes/eg4_inverter_ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ekeylegacy` | home-assistant/brands#9506 | https://github.com/klein0r/ha-ekeylegacy | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `elasticsearch` | home-assistant/brands#2132 | https://github.com/legrego/homeassistant-elasticsearch | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `eldom` | home-assistant/brands#5843 | https://github.com/qbaware/homeassistant-eldom | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `electrolux_status` | home-assistant/brands#3238 | https://github.com/mauro-midolo/homeassistant_electrolux_status | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `elenia` | home-assistant/brands#6055 | https://github.com/user-attachments/assets | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `elevenlabs_custom_tts` | home-assistant/brands#8011 | https://github.com/loryanstrant/HA-ElevenLabs-Custom-TTS | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `elitecloud` | home-assistant/brands#9264 | https://github.com/ankohanse/hass-elite-cloud](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `elro_connects` | home-assistant/brands#3377 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `emaktab` | home-assistant/brands#9136 | https://github.com/lavalex2003/emaktab | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `embymedia` | home-assistant/brands#7310 | https://github.com/troykelly/homeassistant-emby | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `emeraldenergy` | home-assistant/brands#5406 | https://github.com/ross-w/emerald-hws-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `emf_service_connector` | home-assistant/brands#9115 | https://github.com/ahammers/emf_service_connector | Active, pushed 2026-01-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `emotiva` | home-assistant/brands#5345 | https://github.com/peteS-UK/emotiva | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `emu_m_bus_center` | home-assistant/brands#4001 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `enea_outages` | home-assistant/brands#8685 | https://github.com/theundefined/enea-outages-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `enelgrid` | home-assistant/brands#6689 | https://github.com/sathia-musso/enelGrid](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `energa_my_meter` | home-assistant/brands#6008 | https://github.com/thedeemling/hass-energa-my-meter | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `energidataservice` | home-assistant/brands#3301 | https://github.com/mtrab/energidataservice | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `energy_graph_scheduler` | home-assistant/brands#9475 | https://github.com/qlerup/energy-graph-scheduler | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `energy_id` | home-assistant/brands#3858 | https://github.com/tijsverkoyen/HomeAssistant-EnergyID | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `energy_meter` | home-assistant/brands#4390 | https://github.com/zeronounours/HA-custom-component-energy-meter | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `energyua` | home-assistant/brands#8365 | https://github.com/kihoro2d/ha-energyua | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `enhanced_people` | home-assistant/brands#6854 | https://github.com/mtwalkup/enhanced_people | Active, pushed 2026-01-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `enhanced_platerecognizer` | home-assistant/brands#7639 | https://github.com/smartkwadrat/enhanced-platerecognizer | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ennatuurlijk_disruptions` | home-assistant/brands#7148 | https://github.com/heindrichpaul/ennatuurlijk_disruptions](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ensure` | home-assistant/brands#7985 | https://github.com/markus99/ha-ensure-device-control | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `entity_copy` | home-assistant/brands#5003 | https://github.com/oukene/entity_copy | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `entity_notes` | home-assistant/brands#7623 | https://github.com/martindell/ha-entity-notes | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `envertech_solar` | home-assistant/brands#7652 | https://github.com/jimmybonesde/envertech_solar | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `envi_heater` | home-assistant/brands#5388 | https://github.com/wlatic/envi_heater | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `envisalink_new` | home-assistant/brands#6281 | https://github.com/ufodone/envisalink_new | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `eo_mini` | home-assistant/brands#4896 | https://github.com/twhittock/eo_mini | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `eon_next` | home-assistant/brands#6394 | https://github.com/madmachinations/eon-next | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `epa_victoria_air_quality` | home-assistant/brands#5529 | https://github.com/loryanstrant/EPA_AirQuality_HA | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `epex_spot_sensor` | home-assistant/brands#5086 | https://github.com/mampfes/ha_epex_spot | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `epg` | home-assistant/brands#6465 | https://github.com/yohaybn/HomeAssistant-EPG | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `eps_smart_pool_control` | home-assistant/brands#6224 | https://github.com/robsonke/eps_smart_pool_control | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `epson_snmp` | home-assistant/brands#9249 | https://github.com/thizanchettin/home-assistant-epson-snmp | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `equation` | home-assistant/brands#4955 | https://github.com/notifications/unsubscribe-auth | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `esphome_designer` | home-assistant/brands#9565 | https://github.com/koosoli/ESPHomeDesigner | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ess_controller` | home-assistant/brands#6060 | https://github.com/mgenrique/ESS_ControllerHA](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `estimenergy_integration` | home-assistant/brands#4330 | https://github.com/eulemitkeule/estimenergy | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `esxi_stats` | home-assistant/brands#3846 | https://github.com/wxt9861/esxi_stats | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `etekcity_fitness_scale_ble` | home-assistant/brands#5810 | https://github.com/ronnnnnnnnnnnnn/etekcity_fitness_scale_ble | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `eufy_security` | home-assistant/brands#2142 | https://github.com/nonsleepr/ha-eufy-security | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `euronext` | home-assistant/brands#4176 | https://github.com/hulkhaugen/hass_custom_components | Active, pushed 2023-06-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ev_charger_modbus` | home-assistant/brands#6498 | https://github.com/matfroh/abl_emh1_modbus | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `evconduit` | home-assistant/brands#9374 | https://github.com/stevelea/evconduit-homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `evlinkha` | home-assistant/brands#7313 | https://github.com/rogasp/evlinkha-homeassistant](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `evon` | home-assistant/brands#9137 | https://github.com/milanorszagh/evon-smart-home-homeassistant-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `evri` | home-assistant/brands#5870 | https://github.com/jampez77/Evri | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `exsys_usb_hub` | home-assistant/brands#6733 | https://github.com/veista/exsys_usb_hub | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `extended_openai_conversation` | home-assistant/brands#5006 | https://github.com/jekalmin/extended_openai_conversation | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `f1_25_telemetry` | home-assistant/brands#9149 | https://github.com/richardvinger/f1-25-telemetry-for-home-assistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `faastatus` | home-assistant/brands#1579 | https://github.com/ntilley905/faastatus | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fabman` | home-assistant/brands#6643 | https://github.com/stelzerroland/home-assistant-fabman](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `family_safety` | home-assistant/brands#4646 | https://github.com/pantherale0/ha-familysafety | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `familylink` | home-assistant/brands#8612 | https://github.com/noiwid/HAFamilyLink | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fan_master` | home-assistant/brands#7373 | https://github.com/robert1martin/fan_master | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fansync` | home-assistant/brands#8394 | https://github.com/tjbaker/homeassistant-fansync | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fatsecret` | home-assistant/brands#8093 | https://github.com/xplanes/ha-fatsecret | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ferroamp_operation_settings` | home-assistant/brands#7245 | https://github.com/jonasbkarlsson/ferroamp_operation_settings | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fiat` | home-assistant/brands#6388 | https://github.com/blind-oracle/hass-fiat | Active, pushed 2026-09-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `filament_weight` | home-assistant/brands#5720 | https://github.com/Striker72rus/filament_weight | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `file_utilities` | home-assistant/brands#9204 | https://github.com/smartqasa/file-utilities | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `findmy` | home-assistant/brands#6523 | https://github.com/krmax44/homeassistant-findmy | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fireflyiii_integration` | home-assistant/brands#5442 | https://github.com/soloam/ha-fireflyiii-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fireworks_tonight` | home-assistant/brands#9103 | https://github.com/sh00t2kill/ha_fireworks_tonight | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fitnesspark` | home-assistant/brands#5992 | https://github.com/timniklas/hacs_fitnesspark | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `flame_boss` | home-assistant/brands#4201 | https://github.com/tacerra/flame_boss | Active, pushed 2023-03-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `flashforge` | home-assistant/brands#5370 | https://github.com/joseffallman/hass_flashforge | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `flashforge_adventurer_3` | home-assistant/brands#3629 | https://github.com/modrzew/hass-flashforge-adventurer-3 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `flogas` | home-assistant/brands#9599 | https://github.com/videojedi/home-assistant-flogas | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fluidra_pool` | home-assistant/brands#8043 | https://github.com/foxace66/fluidra-pool | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fmi` | home-assistant/brands#7945 | https://github.com/anand-p-r/fmi-hass-custom | Active, pushed 2025-07-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fmi_waterlevel` | home-assistant/brands#4839 | https://github.com/jesmak/fmi_waterlevel | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fordconnect_query` | home-assistant/brands#9071 | https://github.com/marq24/ha-fordconnect-query | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `forsyning` | home-assistant/brands#3802 | https://github.com/mtrab/forsyning | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fortune` | home-assistant/brands#4979 | https://github.com/oukene/fortune | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fossibot` | home-assistant/brands#6764 | https://github.com/iamslan/fossibot | Active, pushed 2026-09-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fota_teltonika` | home-assistant/brands#8945 | https://github.com/manjotsc/ha-fota-teltonika | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `foxess` | home-assistant/brands#2927 | https://github.com/macxq/foxess-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `franklin_wh` | home-assistant/brands#6249 | https://github.com/richo/homeassistant-franklinwh | Active, pushed 2026-08-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `freeair_connect` | home-assistant/brands#4040 | https://github.com/mampfes/ha_freeair_connect | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fritzbox_vpn` | home-assistant/brands#8395 | https://github.com/rosch100/fritzbox-vpn | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fronius_modbus` | home-assistant/brands#6141 | https://github.com/redpomodoro/fronius_modbus | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fuel_prices` | home-assistant/brands#6090 | https://github.com/pantherale0/ha-fuelprices | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fuel_prices_uk` | home-assistant/brands#8540 | https://github.com/beecho01/Fuel-Prices-UK](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `fusion_solar` | home-assistant/brands#3815 | https://github.com/tijsverkoyen/HomeAssistant-FusionSolar | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `galatz_news` | home-assistant/brands#4644 | https://github.com/leranp/HomeAssistant-galatz-news | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `gaode_commute` | home-assistant/brands#7666 | https://github.com/xiaoshi930/gaode_commute | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ge_appliances` | home-assistant/brands#4509 | https://github.com/schmittx/home-assistant-ge-appliances | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `gemini_cloud_stt` | home-assistant/brands#7116 | https://github.com/Steven-Low/gemini_cloud_stt | Active, pushed 2026-04-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `gemns` | home-assistant/brands#8072 | https://github.com/manaam216/gemns_integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `general_link` | home-assistant/brands#4132 | https://github.com/leonardlcl/general_link | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `genius_lyrics` | home-assistant/brands#5076 | https://github.com/robert-alfaro/genius-lyrics | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `genvex_connect` | home-assistant/brands#5676 | https://github.com/superrob/genvexconnect | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `gewe_notify` | home-assistant/brands#6271 | https://github.com/netcookies/Gewe-Notify | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `glimmr` | home-assistant/brands#2915 | https://github.com/d8ahazard/glimmr | Active, pushed 2026-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `goalzero_ble` | home-assistant/brands#7515 | https://github.com/mattxcnm/goalzero_ble | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `goecontroller_mqtt` | home-assistant/brands#5020 | https://github.com/karloskar/homeassistant-goecontroller-mqtt | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `gogs` | home-assistant/brands#3126 | https://github.com/youdroid/home-assistant-gogs | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `google_assistant_relay` | home-assistant/brands#3760 | https://github.com/amosyuen/ha-google-assistant-relay | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `google_assistant_sdk_custom` | home-assistant/brands#4165 | https://github.com/tronikos/google_assistant_sdk_custom | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `google_keep_sync` | home-assistant/brands#5190 | https://github.com/watkins-matt/home-assistant-google-keep-sync | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `google_nest` | home-assistant/brands#4589 | https://github.com/schmittx/home-assistant-google-nest | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `google_nest_fan` | home-assistant/brands#7815 | https://github.com/iluvdata/google_nest_fan | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `govee_light_ble` | home-assistant/brands#6264 | https://github.com/timniklas/hass-govee_light_ble | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `goxlr_utility` | home-assistant/brands#4339 | https://github.com/timmo001/homeassistant-integration-goxlr-utility | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `gpio_integration` | home-assistant/brands#5787 | https://github.com/rosenkolev/home-assistant-gpio-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `gpm` | home-assistant/brands#6306 | https://github.com/tomasbedrich/gpm | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `gpt4vision` | home-assistant/brands#5460 | https://github.com/valentinfrlch/ha-gpt4vision | Active, pushed 2026-09-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `grasplet` | home-assistant/brands#7578 | https://github.com/rtozer/HA-Grasplet | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `green_button` | home-assistant/brands#9640 | https://github.com/rhounsell/home-assistant-green-button | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `grenton_objects` | home-assistant/brands#5963 | https://github.com/jnalepka/grenton-to-homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `grenton_watcher` | home-assistant/brands#8506 | https://github.com/jnalepka/grenton-watcher-home-assistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `grid_energy_tariff_monitor` | home-assistant/brands#4041 | https://github.com/epaulsen/grid-energy-tariff-monitor | Active, pushed 2026-10-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `grizzl_e` | home-assistant/brands#9169 | https://github.com/mclare/grizzl_e-for-HA | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `grok_conversation` | home-assistant/brands#6458 | https://github.com/braytonstafford/grok_conversation](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `groupe_e_consumption` | home-assistant/brands#6327 | https://github.com/DamienMrtl/homeassistant-groupe-e-consumption | Active, pushed 2026-08-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `growatt_server_api` | home-assistant/brands#4011 | https://github.com/muppet3000/growatt_server_hacs | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `growcube` | home-assistant/brands#4963 | https://github.com/jonnybergdahl/HomeAssistant_Growcube_Integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `gruenbeck_softliq_sc` | home-assistant/brands#7421 | https://github.com/tizianodeg/gruenbeck_softliQ_SC | Active, pushed 2026-04-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `gs_bio` | home-assistant/brands#8018 | https://github.com/Nyaaa/gs-bio](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `gtasks` | home-assistant/brands#4220 | https://github.com/myntath/gtasks-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `gte_tracker` | home-assistant/brands#6648 | https://github.com/B-Hartley/gte_tracker | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `gtfs2` | home-assistant/brands#4852 | https://github.com/vingerha/gtfs2 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `guk_krasnodar` | home-assistant/brands#6596 | https://github.com/kirill-k2/hass-guk-krasnodar | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `gwgj_pdu` | home-assistant/brands#8678 | https://github.com/ZHonry/ziot](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_access_control_manager` | home-assistant/brands#6992 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_alarm_clock` | home-assistant/brands#8568 | https://github.com/nirnachmani/HA-Alarm-Clock | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_aqara_devices` | home-assistant/brands#8684 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_behringer_mixer` | home-assistant/brands#4894 | https://github.com/wrodie/ha_behringer_mixer | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_bom_australia` | home-assistant/brands#8476 | https://github.com/safepay/ha_bom_australia | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_customcomponentmonitor` | home-assistant/brands#7903 | https://github.com/loryanstrant/HA-CustomComponentMonitor | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_daikin_altherma4_modbus` | home-assistant/brands#9424 | https://github.com/joklee/ha_daikin_altherma4_modbus | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_easgen` | home-assistant/brands#5816 | https://github.com/Makr91/brands | Active, pushed 2024-08-31 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_enocoo` | home-assistant/brands#5886 | https://github.com/sleiner/ha_enocoo | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_felicity` | home-assistant/brands#8796 | https://github.com/partach/ha_felicity | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_fritzprofiles` | home-assistant/brands#5323 | https://github.com/mithomas/ha-fritzprofiles | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_jokes` | home-assistant/brands#7837 | https://github.com/loryanstrant/ha-jokes | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_metar_weather` | home-assistant/brands#8869 | https://github.com/smkrv/ha-metar-weather | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_node_flow_manager` | home-assistant/brands#9450 | https://github.com/VilniusTechnology/ha-node-red-flow-manager | Active, pushed 2026-03-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_nostr_notifier` | home-assistant/brands#9365 | https://github.com/psic4t/ha-nostr-notifier | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_sotd` | home-assistant/brands#6936 | https://github.com/trollix/ha-sotd-int | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_strava` | home-assistant/brands#1746 | https://github.com/codingcyclist/ha_strava | Active, pushed 2023-03-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_the_masjid_app` | home-assistant/brands#7776 | https://github.com/sabaatworld/ha-the-masjid-app | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_urbansolar_bv` | home-assistant/brands#6999 | https://github.com/chourmovs/ha-urbansolar-bv | Active, pushed 2026-01-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_visualiser` | home-assistant/brands#7640 | https://github.com/jonducrou/ha_visualiser | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_vodarenska` | home-assistant/brands#7948 | https://github.com/petos/ha-vodarenska | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ha_zyxel` | home-assistant/brands#6998 | https://github.com/zulufoxtrot/ha-zyxel | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `haefele_connect_mesh` | home-assistant/brands#6052 | https://github.com/user-attachments/assets | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `haghs` | home-assistant/brands#9333 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hailolibero` | home-assistant/brands#5361 | https://github.com/voldemarpanso/ha-brands | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `harvst_watermate` | home-assistant/brands#5580 | https://github.com/yayadrian/HA-Harvst-Watermate | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hass_agent_mediaplayer` | home-assistant/brands#3361 | https://github.com/LAB02-Research/HASS.Agent | Active, pushed 2023-10-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hass_nuki_bt` | home-assistant/brands#4933 | https://github.com/ronengr/hass_nuki_bt | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hassbox` | home-assistant/brands#4833 | https://github.com/hass-box/hassbox-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hatch` | home-assistant/brands#4463 | https://github.com/schmittx/home-assistant-hatch | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hatch_rest` | home-assistant/brands#8493 | https://github.com/jcgoette/hatch_rest_homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `haven_lighting` | home-assistant/brands#6259 | https://github.com/mickeyschwab/haven-hass | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `havvarsel` | home-assistant/brands#8219 | https://github.com/jm-cook/ha-havvarsel-custom-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hayward_vistapool` | home-assistant/brands#7943 | https://github.com/srddevmt/hayward-vistapool-homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hdmi_assistant` | home-assistant/brands#7449 | https://github.com/[Chuffnugget/HDMI-Assistant](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `heatger` | home-assistant/brands#5631 | https://github.com/kevin-briand/heatger | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `heating_controller` | home-assistant/brands#8949 | https://github.com/notifications/unsubscribe-auth | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `heatit_wifi6` | home-assistant/brands#6800 | https://github.com/mattik-gh/ha-brands | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `heatzone` | home-assistant/brands#8467 | https://github.com/fpo/heatzone](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `heitzfit4` | home-assistant/brands#6289 | https://github.com/mrjulien44/hacs-heitzfit4 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hello_fairy_ble` | home-assistant/brands#9022 | https://github.com/nzrutman/hello_fairy_ble | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `here_comes_the_bus` | home-assistant/brands#6015 | https://github.com/pcartwright81/Home-Assistant-Here-Comes-The-Bus | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `heru` | home-assistant/brands#4312 | https://github.com/toringer/home-assistant-heru | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hhs_vertretungsplan` | home-assistant/brands#3073 | https://github.com/kongo09/hass-hhs-vertretungsplan | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hifiberry` | home-assistant/brands#1922 | https://github.com/willholdoway/hifiberry | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hikvision_axpro` | home-assistant/brands#4144 | https://github.com/petrleoocompel/hikaxpro_hacs | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hiper_drift` | home-assistant/brands#5471 | https://github.com/kgn3400/hiper_drift | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hisense_multi_idu` | home-assistant/brands#8829 | https://github.com/undrianov-dot/hisense-multi-idu | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hisense_tv` | home-assistant/brands#4076 | https://github.com/sehaas/ha_hisense_tv | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hochwasserportal` | home-assistant/brands#3610 | https://github.com/stephan192/hochwasserportal | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hockey_team_tracker` | home-assistant/brands#5298 | https://github.com/joosthoi1/hockey-team-tracker | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hole_v6` | home-assistant/brands#6677 | https://github.com/user-08-151/hole_v6 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `homeassistant_ai_support` | home-assistant/brands#6983 | https://github.com/smartkwadrat/homeassistant-ai-support | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `homenetworkmonitor` | home-assistant/brands#8763 | https://github.com/jarikai/HomeNetworkMonitor](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `homewizard_cloud_watermeter` | home-assistant/brands#9242 | https://github.com/pyrech/homewizard_cloud_watermeter | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `homewizard_instant` | home-assistant/brands#9247 | https://github.com/taurgis/homeassistant-homewizard-instant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `homewizard_vacuum` | home-assistant/brands#6241 | https://github.com/srkoster/hass-hw-cleaner | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `homie` | home-assistant/brands#4610 | https://github.com/elbowz/ha-homie | Active, pushed 2023-08-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `homie_scheduler` | home-assistant/brands#9493 | https://github.com/positivecrash/homie-scheduler-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `honda_generator` | home-assistant/brands#9276 | https://github.com/ksanislo/honda_generator | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `houzzkit_ai` | home-assistant/brands#8172 | https://github.com/yinbaiyuan/houzzkit-ai | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hoval_connect` | home-assistant/brands#9607 | https://github.com/trcyberoptic/hoval-connect-api | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hoymiles_wifi` | home-assistant/brands#4992 | https://github.com/suaveolent/ha-hoymiles-wifi | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hp_aruba_switch` | home-assistant/brands#7976 | https://github.com/farosch/hp_aruba_switch | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hsem` | home-assistant/brands#5984 | https://github.com/woopstar/hsem | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `huawei_mesh_router` | home-assistant/brands#3892 | https://github.com/vmakeev/huawei_mesh_router | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `huckleberry` | home-assistant/brands#8861 | https://github.com/konewka17/huckleberry-ha](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hue_dimmer` | home-assistant/brands#9286 | https://github.com/jasonmx/philips-hue-smooth-dimmer | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hvac_vent_optimizer` | home-assistant/brands#9191 | https://github.com/ljbotero/hvac-vent-optimizer | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hwam_stove` | home-assistant/brands#6395 | https://github.com/mvn23/hwam_stove | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hwmon_temp` | home-assistant/brands#7797 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hxon` | home-assistant/brands#3336 | https://github.com/zhoubest/hxon] | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hydrao` | home-assistant/brands#4715 | https://github.com/sebcaps/hydrao | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hydrogen_station_kr` | home-assistant/brands#7513 | https://github.com/nara1111/hydrogen_station_kr | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `hyperhdr_control` | home-assistant/brands#6350 | https://github.com/johnneerdael/hyperhdr_control](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `iammeter_http` | home-assistant/brands#3641 | https://github.com/lewei50/ha_iammeter | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `iammeter_modbus` | home-assistant/brands#3433 | https://github.com/wills106/homeassistant-iammeter-modbus | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `iammeter_wpc` | home-assistant/brands#6270 | https://github.com/yangbo1979/iammeter_wpc_hacs | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `iaqualinkrobots` | home-assistant/brands#7742 | https://github.com/galletn/iaqualink | Active, pushed 2026-08-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ibepower` | home-assistant/brands#5867 | https://github.com/Ibepower/brands | Active, pushed 2024-09-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ice_cream_benelux` | home-assistant/brands#5636 | https://github.com/studiojw/ice-cream-benelux-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `iconomi` | home-assistant/brands#4821 | https://github.com/topscoder/iconomi-homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `idisplay` | home-assistant/brands#7857 | https://github.com/joysfera/homeassistant-idisplay | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `idm_heatpump` | home-assistant/brands#6786 | https://github.com/kodebach/hacs-idm-heatpump | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `idotmatrix` | home-assistant/brands#8898 | https://github.com/tukies/iDotMatrix-HomeAssistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ids_hyyp` | home-assistant/brands#4469 | https://github.com/hawky358/hass_ids_hyyp](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `iiyama_sicp` | home-assistant/brands#6003 | https://github.com/konikvranik/hacs_iiyama_tv | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ilexconnect` | home-assistant/brands#9138 | https://github.com/kimme1024/ilexconnect-hacs | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ilifestyle` | home-assistant/brands#5999 | https://github.com/timniklas/hass-ilifestyle | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `immich_photos` | home-assistant/brands#5348 | https://github.com/immich-app/immich | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `imou_life` | home-assistant/brands#3702 | https://github.com/user2684/imou_life | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ims` | home-assistant/brands#4175 | https://github.com/t0mer/ims-custom-component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `inception` | home-assistant/brands#6161 | https://github.com/sebr/inception-home-assistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `incharge` | home-assistant/brands#4206 | https://github.com/home-assistant/home-assistant.io | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `infomaniak_kdrive` | home-assistant/brands#9142 | https://github.com/maximlefebvre/homeassistant-infomaniak-kdrive | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `infpro` | home-assistant/brands#6374 | https://github.com/cnecrea/infpro | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ingress` | home-assistant/brands#5328 | https://github.com/lovelylain/hass_ingress | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `inim` | home-assistant/brands#5571 | https://github.com/nidble/inim_alarm | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `inshow` | home-assistant/brands#5889 | https://github.com/pcjoih/inshow | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `integration_tester` | home-assistant/brands#9282 | https://github.com/raman325/ha-integration-tester | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `intelbras_amt` | home-assistant/brands#8822 | https://github.com/pehesi97/intelbras-amt-home-assistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `intelbras_twibi_router` | home-assistant/brands#7008 | https://github.com/chiconws/intelbras_twibi_router | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `inteo_v3` | home-assistant/brands#7581 | https://github.com/Somfy-Brasil/inteo_v3_ha | Active, pushed 2025-08-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `intesisbox` | home-assistant/brands#6924 | https://github.com/jnimmo/hass-intesisbox](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `inumet_uruguay` | home-assistant/brands#7348 | https://github.com/matbott/ha-inumet-uruguay | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `inventory_manager` | home-assistant/brands#8918 | https://github.com/mmaunier/ha-inventory-manager | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `invertechs` | home-assistant/brands#7738 | https://github.com/mpedziwiatr02/Invertechs-Integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `invisagig` | home-assistant/brands#8840 | https://github.com/taylor-snow33/ha-invisagig | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `iotix` | home-assistant/brands#9657 | https://github.com/johnywind/HA-IoTiX | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ipfs` | home-assistant/brands#4557 | https://github.com/vwt12eh8/hassio-ipfs | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `iphonedetect` | home-assistant/brands#4277 | https://github.com/mudape/iphonedetect | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `iport` | home-assistant/brands#5561 | https://github.com/peteS-UK/iport | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ipx800v3` | home-assistant/brands#5685 | https://github.com/remialban/ipx800v3 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `iqos` | home-assistant/brands#5933 | https://github.com/megarushing/ha-iqos | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `iqua_softener` | home-assistant/brands#8911 | https://github.com/mutilator/homeassistant-iqua-softener | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ir2mqtt` | home-assistant/brands#8223 | https://github.com/jmlt/ir2mqtt_integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ir_floor_heating` | home-assistant/brands#8930 | https://github.com/jellespijker/IR-floor-heating | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `irrigation_estimator` | home-assistant/brands#3682 | https://github.com/rondoval/IrrigationEstimator | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `irrigation_unlimited` | home-assistant/brands#2246 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ispmanager` | home-assistant/brands#6637 | https://github.com/IronButterfly/ispmanager_HA | Active, pushed 2025-02-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ista_vdm` | home-assistant/brands#9641 | https://github.com/BeniKing99/ista-vdm-hacs](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ithodaalderop` | home-assistant/brands#5429 | https://github.com/jasperslits/haithowifi | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `jackery` | home-assistant/brands#9322 | https://github.com/theak/jackery-homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `jbl_integration` | home-assistant/brands#5866 | https://github.com/MrBearPresident/JBL_Soundbar](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `jellyfin_status` | home-assistant/brands#7671 | https://github.com/thenextbutton/jellyfin_status | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `jellyha` | home-assistant/brands#9123 | https://github.com/zupancicmarko/JellyHA | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `jemenaoutlook` | home-assistant/brands#8598 | https://github.com/jonnynch/ha-jemenaoutlook | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `jetkvm` | home-assistant/brands#6143 | https://github.com/Poshy163/HomeAssistant-JetKVM](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `joule_connector` | home-assistant/brands#5664 | https://github.com/supergoudvis116/HA-Joule-connector | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `jourferier` | home-assistant/brands#7273 | https://github.com/XAV59213/jourferier* | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `jumbo` | home-assistant/brands#2359 | https://github.com/peternijssen/home-assistant-jumbo | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `junghome` | home-assistant/brands#7494 | https://github.com/mariusbiller/ha-junghome | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `juniper_mist` | home-assistant/brands#5940 | https://github.com/mvadstrup/haas_juniper_mist | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `jvc_projector_ha` | home-assistant/brands#9002 | https://github.com/mjmcg/jvc_projector_ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `kaizen_energy` | home-assistant/brands#8290 | https://github.com/olaldiko/homeassistant-kaizen-energy | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `kdbtick` | home-assistant/brands#9621 | https://github.com/peteclarkez/homeassistant-kdbtick | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `keba_heat_pump_modbus` | home-assistant/brands#8710 | https://github.com/johannesWen/KEBA-Heat-Pump-Modbus-Integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `keba_keenergy` | home-assistant/brands#7730 | https://github.com/superbox-dev/keba_keenergy | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `keenetic_api` | home-assistant/brands#7226 | https://github.com/malinovsku/ha-keenetic_api | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `keurig` | home-assistant/brands#3939 | https://github.com/dcmeglio/homeassistant-keurig | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `kidswatch_tracker` | home-assistant/brands#8774 | https://github.com/kasitoru/kidswatch_tracker | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `kincony_tuya_mqtt` | home-assistant/brands#5682 | https://github.com/hzkincony/hass-tuya-mqtt](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `kkt_kolbe` | home-assistant/brands#8765 | https://github.com/moag1000/HA-kkt-kolbe-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `klapp` | home-assistant/brands#8527 | https://github.com/mr-deamon/klapp | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `klipsch_flexus` | home-assistant/brands#9649 | https://github.com/razqqm/klipsch_flexus | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `klokku` | home-assistant/brands#7344 | https://github.com/klokku/klokku-home-assistant-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `kocom_wallpad` | home-assistant/brands#6205 | https://github.com/zmtq05/kocom_wallpad | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `kodi_media_sensors` | home-assistant/brands#2176 | https://github.com/jtbgroup/kodi-media-sensors | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `kohler` | home-assistant/brands#3685 | https://github.com/niemyjski/homeassistant-kohler | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `koolnova_bms` | home-assistant/brands#5256 | https://github.com/sinseman44/koolnova-BMS-Integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `kostal` | home-assistant/brands#5286 | https://github.com/rcasula/kostalpiko-homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `kostal_plenticore_modbus` | home-assistant/brands#8313 | https://github.com/CrunkA3/ha_kostal_plenticore_modbus | Active, pushed 2026-07-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `kr_eta` | home-assistant/brands#8697 | https://github.com/suapapa/ha_kr-eta | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ksenia_lares` | home-assistant/brands#4642 | https://github.com/johnnybegood/ha-ksenia-lares | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `kub` | home-assistant/brands#5521 | https://github.com/JackJPowell/hass-kub](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `kubernetes` | home-assistant/brands#7791 | https://github.com/tibuntu/homeassistant-kubernetes | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `laadpaal_io` | home-assistant/brands#9178 | https://github.com/inukiwi/ha-laadpaal-io | Active, pushed 2026-06-29 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `labelmate_scene` | home-assistant/brands#8859 | https://github.com/DigitalBites/LabelMateScene.git](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `lambda_modbus` | home-assistant/brands#6443 | https://github.com/johbau/home-assistant-lambda-modbus | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `launtel` | home-assistant/brands#7771 | https://github.com/yenchenLiu/home-assistant-launtel | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ldap_auth` | home-assistant/brands#8875 | https://github.com/stefandmn/ldap_auth￼ | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `leakomatic` | home-assistant/brands#7067 | https://github.com/johanwilliams/leakomatic_api | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `lednetwf_ble` | home-assistant/brands#4939 | https://github.com/raulgbcr/lednetwf_ble | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `leeds_bins` | home-assistant/brands#5396 | https://github.com/joemcc-90/leeds-bins-hass | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `lektrico_custom` | home-assistant/brands#3341 | https://github.com/home-assistant/home-assistant.io | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `leneda` | home-assistant/brands#6937 | https://github.com/fedus/leneda-client | Active, pushed 2026-06-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `lg_hombot` | home-assistant/brands#3040 | https://github.com/plakna/ha-lg-hombot | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `liander` | home-assistant/brands#8828 | https://github.com/TheDutchScorpion/ha-liander | Active, pushed 2026-01-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `librelink` | home-assistant/brands#4981 | https://github.com/notifications/unsubscribe-auth | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `libreview` | home-assistant/brands#5233 | https://github.com/PTST/LibreView-HomeAssistant](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `lierda_iot` | home-assistant/brands#5637 | https://github.com/qcgzxw/hass-lierda-iot | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `life360` | home-assistant/brands#5078 | https://github.com/home-assistant/home-assistant.io | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `light_group_dimmer` | home-assistant/brands#6703 | https://github.com/user-attachments/assets | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `light_reilluminator` | home-assistant/brands#8912 | https://github.com/ronaldheft/ha-light-reilluminator | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `line_messaging` | home-assistant/brands#6676 | https://github.com/nao-pon/ha-line-messaging | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `linknlink` | home-assistant/brands#5596 | https://github.com/linknlink/linknlink-local | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `linktap` | home-assistant/brands#4573 | https://github.com/sh00t2kill/linktap_local_http_component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `lippert_onecontrol` | home-assistant/brands#9277 | https://github.com/manos/HomeAssistant-Lippert-OneControl-Integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `liquid_check` | home-assistant/brands#4595 | https://github.com/shivan/homeassistant-liquidcheck | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `lisios` | home-assistant/brands#7809 | https://github.com/nilisos/hass-lisios-bridge | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `listifyer` | home-assistant/brands#8126 | https://github.com/supremelucifer/hass-listifyer | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `livef1` | home-assistant/brands#7751 | https://github.com/richtepa/livef1-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `livisi` | home-assistant/brands#3600 | https://github.com/home-assistant/home-assistant.io | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `livly` | home-assistant/brands#9461 | https://github.com/tessellate-io/ha-livly | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `load_shedding` | home-assistant/brands#3386 | https://github.com/wernerhp/ha_integration_load_shedding | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `localtuya` | home-assistant/brands#1887 | https://github.com/rospogrigio/localtuya-homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `loewe` | home-assistant/brands#8024 | https://github.com/gadgetbazza/hass-loewetv-remoteapi](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `lotto_dk` | home-assistant/brands#5472 | https://github.com/kgn3400/lotto_dk | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `lunar_calendar` | home-assistant/brands#7565 | https://github.com/xiaoshi930/lunar_calendar | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `lunar_phase` | home-assistant/brands#5681 | https://github.com/ngocjohn/lunar-phase | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `lunch_money` | home-assistant/brands#8791 | https://github.com/nprail/ha-lunch-money | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `luxpower` | home-assistant/brands#8390 | https://github.com/ant0nkr/luxpower-ha-integration | Active, pushed 2026-10-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `lviv_poweroff` | home-assistant/brands#5680 | https://github.com/tsdaemon/ha-lviv-poweroff | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `lwlcomtv` | home-assistant/brands#6300 | https://github.com/timniklas/hass-lwlcomtv | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `magicseaweed` | home-assistant/brands#4023 | https://github.com/home-assistant/home-assistant.io | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mahlkoenig` | home-assistant/brands#7026 | https://github.com/kevinschweikert/ha-mahlkoenig | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `manish` | home-assistant/brands#4174 | https://github.com/t0mer/manish-custom-notifier | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mannito_farming` | home-assistant/brands#7034 | https://github.com/mannipulator/mannito-farming-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `marshydro` | home-assistant/brands#6368 | https://github.com/suppqt/hass_mars_hydro | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `marstek` | home-assistant/brands#9312 | https://github.com/taurgis/has-marstek-local-api | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `marstek_ble` | home-assistant/brands#8341 | https://github.com/jaapp/ha-marstek-ble | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `masjidboardlive` | home-assistant/brands#6079 | https://github.com/meneerfrikkie/hass-masjidboardlive | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `masjidbox` | home-assistant/brands#8668 | https://github.com/sohailpervaiz/ha-masjidbox-custom-component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `massa_node` | home-assistant/brands#5408 | https://github.com/kevin-briand/massa_node](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mateo_meals` | home-assistant/brands#7957 | https://github.com/ketels/mateo-hacs | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `matterbridge` | home-assistant/brands#4665 | https://github.com/42wim/matterbridge | Active, pushed 2024-12-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mattermost` | home-assistant/brands#6148 | https://github.com/arkane-systems/ha-mattermost | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `max_notify` | home-assistant/brands#9533 | https://github.com/kai-zer-ru/max-notify-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `maxxisun` | home-assistant/brands#9291 | https://github.com/peter-lueer/Maxxisun-HA | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mc66c` | home-assistant/brands#3914 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mcp_assist` | home-assistant/brands#8728 | https://github.com/mike-nott/mcp-assist | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `media_downloader` | home-assistant/brands#8073 | https://github.com/Geek-MD/Media_Downloader | Active, pushed 2026-03-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mediabrowser` | home-assistant/brands#4462 | https://github.com/rumbu13/ha-mediabrowser | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `megad` | home-assistant/brands#6420 | https://github.com/MihVS/megad | Active, pushed 2026-10-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `meinvodafone` | home-assistant/brands#5353 | https://github.com/stickpin/homeassistant-meinvodafone | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `melcloudhome` | home-assistant/brands#8550 | https://github.com/andrew-blake/melcloudhome | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `meltem` | home-assistant/brands#6477 | https://github.com/leolabs/meltem-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `melview` | home-assistant/brands#6961 | https://github.com/jz-v/ha-melview | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `melzone_building` | home-assistant/brands#5212 | https://github.com/comtef/melzone-building | Active, pushed 2024-02-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `meraki_dashboard` | home-assistant/brands#7295 | https://github.com/rknightion/meraki-dashboard-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mercedesmeapi` | home-assistant/brands#2093 | https://github.com/notifications/unsubscribe-auth | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mercury_switch` | home-assistant/brands#9186 | https://github.com/daxingplay/home-assistant-mercury-switch | Active, pushed 2026-04-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mergbw` | home-assistant/brands#8793 | https://github.com/rexxars/ha-mergbw | Active, pushed 2025-12-21 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `meross_lan` | home-assistant/brands#2371 | https://github.com/krahabb/meross_lan | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `merrytek_sensor` | home-assistant/brands#8834 | https://github.com/xyiqq/merrytek_sensor | Active, pushed 2025-12-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `meshcore` | home-assistant/brands#6760 | https://github.com/awolden/meshcore-ha | Active, pushed 2026-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `meshtastic` | home-assistant/brands#6077 | https://github.com/broglep/homeassistant-meshtastic | Active, pushed 2026-08-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `message_log` | home-assistant/brands#5466 | https://github.com/kgn3400/message_log | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `messages_store` | home-assistant/brands#5821 | https://github.com/FernandoZueet/messages_store | Active, pushed 2025-08-29 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `met_eireann_warnings` | home-assistant/brands#7784 | https://github.com/dandanarsk/met_eireann_warnings | Active, pushed 2026-03-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `met_next_6_hours_forecast` | home-assistant/brands#3637 | https://github.com/toringer/home-assistant-met-next-6-hours-forecast | Active, pushed 2024-09-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `metar_weather` | home-assistant/brands#9540 | https://github.com/lfasci/homeassistant-metar | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `meteo_imgw_pib` | home-assistant/brands#6476 | https://github.com/bieniu/ha-meteo-imgw-pib | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `meteo_lt_by_brunas` | home-assistant/brands#8128 | https://github.com/Brunas/meteo_lt | Active, pushed 2026-09-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `meteocat_community_edition` | home-assistant/brands#8558 | https://github.com/PacmanForever/meteocat_community_edition | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `meteoeuregio` | home-assistant/brands#6558 | https://github.com/ilpianista/meteoeuregio | Active, pushed 2026-08-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `meteofrance_montagne` | home-assistant/brands#8627 | https://github.com/faizpuru/ha-meteofrance-montagne | Active, pushed 2026-10-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `meteogalicia` | home-assistant/brands#3678 | https://github.com/Danieldiazi/homeassistant-meteogalicia | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `meteogalicia_tides` | home-assistant/brands#4630 | https://github.com/Danieldiazi/homeassistant-meteogalicia_tides | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `meteogr` | home-assistant/brands#8117 | https://github.com/bkbilly/MeteoGR | Active, pushed 2026-09-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `meteoswiss` | home-assistant/brands#5796 | https://github.com/Rudd-O/homeassistant-meteoswiss | Active, pushed 2026-08-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `metlink` | home-assistant/brands#1760 | https://github.com/SmbKiwi/metlink-wellington-homeassistant | Active, pushed 2020-07-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `metnowcast` | home-assistant/brands#3271 | https://github.com/toringer/home-assistant-metnowcast | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `metoffice_datahub` | home-assistant/brands#7164 | https://github.com/joelvardy/home-assistant-metoffice-datahub | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `metra_tracker` | home-assistant/brands#7054 | https://github.com/benwittbrodt/Metra-Tracker | Active, pushed 2025-12-29 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `meural` | home-assistant/brands#1683 | https://github.com/GuySie/ha-meural | Active, pushed 2026-08-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mg_saic` | home-assistant/brands#5713 | https://github.com/ad-ha/mg-saic-ha | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mgm_weather` | home-assistant/brands#9440 | https://github.com/taskinfa/mgm-weather | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mhi_hvac` | home-assistant/brands#6797 | https://github.com/coserotondo/mhi_hvac | Active, pushed 2025-12-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mhub` | home-assistant/brands#9659 | https://github.com/marsh4200/mhub | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `micro_air_easytouch` | home-assistant/brands#6611 | https://github.com/k3vmcd/ha-micro-air-easytouch | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `micro_weather` | home-assistant/brands#7972 | https://github.com/caplaz/micro-weather-station | Active, pushed 2026-07-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `micropic_energy_meter` | home-assistant/brands#6839 | https://github.com/nocturno66/MicroPIC-Energy-Meter-comp | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `midas` | home-assistant/brands#6742 | https://github.com/MattDahEpic/ha-midas | Active, pushed 2026-10-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `midea_auto_cloud` | home-assistant/brands#8139 | https://github.com/sususweet/midea_auto_cloud](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `midea_dehumidifier` | home-assistant/brands#1782 | https://github.com/barban-dev/midea_inventor_dehumidifier | Active, pushed 2026-04-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `midea_heatpump_hws` | home-assistant/brands#7734 | https://github.com/0xAHA/Midea-Heat-Pump-HA | Active, pushed 2026-09-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `miheater` | home-assistant/brands#5857 | https://github.com/ee02217/homeassistant-mi-heater | Active, pushed 2026-02-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mijn_liander` | home-assistant/brands#7636 | https://github.com/HiDiHo01/mijn_liander | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mijn_pwn` | home-assistant/brands#7635 | https://github.com/HiDiHo01/mijn_pwn | Active, pushed 2026-03-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mijn_waterlink` | home-assistant/brands#7252 | https://github.com/zheffie/mijn_waterlink](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mikrotik_api` | home-assistant/brands#2949 | https://github.com/pilotak/homeassistant-mikrotik-api | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mikrotik_netwatch` | home-assistant/brands#7579 | https://github.com/simonkowallik/ha-mikrotik-netwatch | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mikrotik_switchos` | home-assistant/brands#8038 | https://github.com/probert94/ha-switchos | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mikrotik_swos_lite` | home-assistant/brands#7941 | https://github.com/probert94/ha-swos-lite | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `milesight` | home-assistant/brands#9386 | https://github.com/KomelT/ha-milesight | Active, pushed 2026-02-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `min_renovasjon` | home-assistant/brands#5707 | https://github.com/actstorms/ha-min-renovasjon | Active, pushed 2026-06-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `minibrew` | home-assistant/brands#6965 | https://github.com/stuartp44/hambrewclient | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `minidspshd` | home-assistant/brands#6275 | https://github.com/trevorwarwick/minidspshd | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `minrenovasjon` | home-assistant/brands#4324 | https://github.com/giaever-online-iot/hacs-home-assistant-minrenovasjon | Active, pushed 2023-12-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mir_meter` | home-assistant/brands#6722 | https://github.com/Hal9k0/ha-mir_meter | Active, pushed 2025-04-29 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `miraie` | home-assistant/brands#5731 | https://github.com/rkzofficial/ha-miraie-ac | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mistral_ai_api` | home-assistant/brands#6250 | https://github.com/BlaXun/home_assistant_mistral_ai | Active, pushed 2025-06-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mitmili` | home-assistant/brands#8864 | https://github.com/bartkummel/mitmili | Active, pushed 2026-01-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mitsubishi_ae200` | home-assistant/brands#8800 | https://github.com/sftgunner/mitsubishi-ae200-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mitsubishi_wf_rac` | home-assistant/brands#4580 | https://github.com/jeatheak/Mitsubishi-WF-RAC-Integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mittfortum` | home-assistant/brands#6339 | https://github.com/selleronom/mittfortum | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `miwifi` | home-assistant/brands#3300 | https://github.com/dmamontov/hass-miwifi | Active, pushed 2024-07-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `miwifi_cb0401v2` | home-assistant/brands#6076 | https://github.com/MKsys1337/MiWiFi-CB0401V2 | Active, pushed 2025-08-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `miyocube` | home-assistant/brands#8616 | https://github.com/miyosmart/miyocube-homeassistant-custom-component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mlgw` | home-assistant/brands#2333 | https://github.com/giachello/mlgw | Active, pushed 2024-09-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mnb_rates` | home-assistant/brands#5619 | https://github.com/amaximus/mnb_rates | Active, pushed 2024-10-29 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mobile_vikings` | home-assistant/brands#4238 | https://github.com/geertmeersman/mobile-vikings | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `modbus_devices` | home-assistant/brands#6641 | https://github.com/eriknn/ha-modbus_devices | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `modbus_logo` | home-assistant/brands#5586 | https://github.com/nos86/hacs-modbus-logo | Active, pushed 2026-02-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `modbus_manager` | home-assistant/brands#6229 | https://github.com/TCzerny/ha-modbus-manager | Active, pushed 2026-10-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `moderntides` | home-assistant/brands#7406 | https://github.com/ALArvi019/moderntides | Active, pushed 2026-06-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `moebot` | home-assistant/brands#5669 | https://github.com/Whytey/moebot-hass-integration | Active, pushed 2026-06-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `moen_smart_water` | home-assistant/brands#8057 | https://github.com/alexbbt/ha-moen-smart-water | Active, pushed 2026-10-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `moen_sump_pump` | home-assistant/brands#9060 | https://github.com/patrickjcash/ha-moen-flo | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `molad` | home-assistant/brands#4186 | https://github.com/chaimchaikin/molad-hacs | Active, pushed 2025-11-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `molekule` | home-assistant/brands#5905 | https://github.com/cowboyrushforth/home-assistant-molekule | Active, pushed 2025-05-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `momentary` | home-assistant/brands#4778 | https://github.com/twrecked/hass-momentary | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `monarco` | home-assistant/brands#6278 | https://github.com/cyaneous/monarco | Active, pushed 2025-01-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `monit` | home-assistant/brands#5527 | https://github.com/lordmike/hass-monit | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `monitor_docker` | home-assistant/brands#1703 | https://github.com/ualex73/monitor_docker | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `monitormysolar` | home-assistant/brands#5791 | https://github.com/zakery292/monitormysolar | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `monoprice_enhanced` | home-assistant/brands#8591 | https://github.com/derwoodums/monoprice-enhanced | Active, pushed 2026-03-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `montreal_aqi` | home-assistant/brands#6533 | https://github.com/normcyr/home-assistant-montreal-aqi | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `montreal_snow_removal` | home-assistant/brands#8860 | https://github.com/ludodefgh/montreal-snow-removal | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `moodo` | home-assistant/brands#8132 | https://github.com/deanlongstaff/home-assistant-moodo-integration | Active, pushed 2026-08-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `moonside` | home-assistant/brands#9005 | https://github.com/kylewhirl/homeassistant-moonside | Active, pushed 2026-01-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mopidy` | home-assistant/brands#3226 | https://github.com/mopidy/mopidy | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `morningstar` | home-assistant/brands#3455 | https://github.com/hulkhaugen/hass_custom_components | Active, pushed 2023-06-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `morph_numbers` | home-assistant/brands#2579 | https://github.com/AlexxIT/MorphNumbers | Active, pushed 2025-08-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `moscow_transport` | home-assistant/brands#5087 | https://github.com/egmen/moscow_transport | Active, pushed 2024-11-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mosoblgaz` | home-assistant/brands#1702 | https://github.com/alryaz/hass-mosoblgaz | Active, pushed 2025-06-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `motion_dimmer` | home-assistant/brands#5401 | https://github.com/randomletters/motion_dimmer | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `motion_fitness_occupancy` | home-assistant/brands#5237 | https://github.com/evansalter/ha-motion-fitness-occupancy | Active, pushed 2024-03-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `motorline_mconnect` | home-assistant/brands#7906 | https://github.com/microd2/ha-motorline-mconnect | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `moultrie` | home-assistant/brands#9622 | https://github.com/adamjacobmuller/homeassistant-moultrie | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `movement` | home-assistant/brands#7163 | https://github.com/wbyoung/movement | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `moving_colors` | home-assistant/brands#7594 | https://github.com/starwarsfan/moving-colors | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `moving_intelligence` | home-assistant/brands#3070 | https://github.com/cyberjunky/home-assistant-moving_intelligence | Active, pushed 2021-12-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `movistar_rft8115vw` | home-assistant/brands#6518 | https://github.com/luis-garza/movistar_rft8115vw | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mpk_lodz` | home-assistant/brands#6091 | https://github.com/DominikWrobel/mpk_lodz | Active, pushed 2025-07-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mqtt_connection_state` | home-assistant/brands#9303 | https://github.com/studioIngrid/mqtt_connection_state | Active, pushed 2026-02-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mqtt_discoverystream` | home-assistant/brands#2834 | https://github.com/koying/mqtt_discoverystream_ha | Active, pushed 2026-03-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mqtt_light_custom` | home-assistant/brands#7232 | https://github.com/huangfengdan/hwlight_ha_component | Active, pushed 2025-06-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mqtt_media_player` | home-assistant/brands#8473 | https://github.com/bkbilly/mqtt_media_player | Active, pushed 2026-10-10 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mqtt_sonos` | home-assistant/brands#3998 | https://github.com/svrooij/home-assistant-mqtt-component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mqtt_vacuum_camera` | home-assistant/brands#5570 | https://github.com/sca075/mqtt_vacuum_camera | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `multi_zone_receiver` | home-assistant/brands#5949 | https://github.com/jzucker2/multi-zone-receiver | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `multicraft` | home-assistant/brands#8972 | https://github.com/fre69/multicraft | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `multisport` | home-assistant/brands#8578 | https://github.com/theundefined/multisport-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `multizone_thermostat` | home-assistant/brands#2969 | https://github.com/vindaalex/multizone-thermostat | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `munich_public_transport` | home-assistant/brands#5914 | https://github.com/g4bri3lDev/munich_public_transport | Active, pushed 2026-05-21 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `my_luminus_pricing` | home-assistant/brands#8939 | https://github.com/VinzzB/my-luminus-pricing-ha-addon | Active, pushed 2026-08-21 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `my_rail_commute` | home-assistant/brands#9421 | https://github.com/adamf83/my-rail-commute | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mybusstop` | home-assistant/brands#8637 | https://github.com/briodan/mybusstop | Active, pushed 2026-10-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mycloud` | home-assistant/brands#7676 | https://github.com/J-shw/ha-mycloud | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mycodo_app` | home-assistant/brands#5474 | https://github.com/zachi40/home-assistant-mycodo | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mydolphin_plus` | home-assistant/brands#3686 | https://github.com/sh00t2kill/dolphin-robot | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `myenergi` | home-assistant/brands#2782 | https://github.com/CJNE/ha-myenergi | Active, pushed 2026-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `myfox` | home-assistant/brands#5860 | https://github.com/Angelius007/myfox-api | Active, pushed 2026-10-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `myfund` | home-assistant/brands#9096 | https://github.com/Morgaroth/ha-myfund | Active, pushed 2026-03-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mygas` | home-assistant/brands#5222 | https://github.com/lizardsystems/hass-mygas | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mygekko` | home-assistant/brands#4927 | https://github.com/StephanU/MyGekko | Active, pushed 2026-10-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `myheat` | home-assistant/brands#5216 | https://github.com/vooon/hass-myheat | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mylight_systems` | home-assistant/brands#4149 | https://github.com/acesyde/hassio_mylight_integration | Active, pushed 2026-08-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mylog` | home-assistant/brands#9437 | https://github.com/LL0rd/homeassistant-mylog | Active, pushed 2026-02-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mypyllant` | home-assistant/brands#4137 | https://github.com/signalkraft/mypyllant-component | Active, pushed 2026-07-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `myraid_box` | home-assistant/brands#8227 | https://github.com/938134/myraid_box | Active, pushed 2026-10-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mysa` | home-assistant/brands#9181 | https://github.com/kgelinas/Mysa_HA | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mysmartbike_ble` | home-assistant/brands#8525 | https://github.com/ReneNulschDE/ha-mysmartbike_ble | Active, pushed 2026-09-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mysmartwindow` | home-assistant/brands#6802 | https://github.com/IoTFenster/MySmartWindow | Active, pushed 2025-12-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mystic_light` | home-assistant/brands#6354 | https://github.com/and7ey/mystic_light_ha | Active, pushed 2025-01-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mystiebel` | home-assistant/brands#7357 | https://github.com/sanderkwantes/mystiebel | Active, pushed 2026-09-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mytpu` | home-assistant/brands#9152 | https://github.com/thetic/hass-mytpu | Active, pushed 2026-07-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `mytreno` | home-assistant/brands#6915 | https://github.com/lotablet/mytreno | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `myuplinkv3` | home-assistant/brands#5609 | https://github.com/a-mavrides/myuplinkv3 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `myweblog` | home-assistant/brands#9170 | https://github.com/faanskit/ha-myweblog | Active, pushed 2026-01-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `n3rgy` | home-assistant/brands#2231 | https://github.com/smartechru/n3rgy | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `n8n_conversation` | home-assistant/brands#7583 | https://github.com/eulemitkeule/n8n-conversation | Active, pushed 2026-09-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `n8n_conversation_agent` | home-assistant/brands#7599 | https://github.com/BigPappy098/n8n_conversation_agent | Active, pushed 2025-08-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nad_controller` | home-assistant/brands#3501 | https://github.com/Breina/nad_controller | Active, pushed 2025-08-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `naim_media_player` | home-assistant/brands#6429 | https://github.com/jorourke/naim-atom-home-assistant | Active, pushed 2026-09-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `naim_muso` | home-assistant/brands#5410 | https://github.com/blitzkopf/naim_muso | Active, pushed 2026-10-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `naim_streamer` | home-assistant/brands#7986 | https://github.com/[peteS-UK/naim_streamer](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nakdan` | home-assistant/brands#7387 | https://github.com/eyalmichon/ha-nakdan | Active, pushed 2025-07-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nanogreen` | home-assistant/brands#3768 | https://github.com/nanogreencz/homeassistant-integrations | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nanokvm` | home-assistant/brands#7224 | https://github.com/Wouter0100/homeassistant-nanokvm | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nanoleaf2` | home-assistant/brands#8661 | https://github.com/loebi-ch/nanoleaf2 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nanoleaf_essentials` | home-assistant/brands#7206 | https://github.com/mcaonline/nanoleaf-essentials-hass | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `napoleon_efire` | home-assistant/brands#4618 | https://github.com/kaechele/napoleon-efire | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `narodmon` | home-assistant/brands#2301 | https://github.com/Limych/ha-narodmon | Active, pushed 2026-01-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nasa` | home-assistant/brands#3349 | https://github.com/caiosweet/Home-Assistant-custom-components-NASA | Active, pushed 2025-11-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `national_grid` | home-assistant/brands#4530 | https://github.com/JRascagneres/HA-NationalGrid | Active, pushed 2026-10-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nationalrailtimes` | home-assistant/brands#3853 | https://github.com/crismc/homeassistant_nationalrailtimes_integration | Active, pushed 2023-11-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nationalrailuk` | home-assistant/brands#6649 | https://github.com/plutomedia987/homeassistant_nationalrail | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `naver_finance` | home-assistant/brands#5365 | https://github.com/oukene/naver_finance | Active, pushed 2024-07-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `naver_shopping` | home-assistant/brands#4978 | https://github.com/oukene/naver_shopping | Active, pushed 2025-12-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `navien_water_heater` | home-assistant/brands#5457 | https://github.com/SouravBasu/hass_navien_water_heater | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `navirec` | home-assistant/brands#9010 | https://github.com/lnagel/hass-navirec | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nayax` | home-assistant/brands#9077 | https://github.com/alpenava/home-assistant-nayax | Active, pushed 2026-04-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nbeconnect` | home-assistant/brands#8838 | https://github.com/svanggaard/NBEConnect | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nbpower` | home-assistant/brands#8248 | https://github.com/noslent/nbpower-ha | Active, pushed 2025-10-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nctalkbot` | home-assistant/brands#4717 | https://github.com/klatka/nc-talk-bot-component | Active, pushed 2026-06-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nea_electricity_usage` | home-assistant/brands#6009 | https://github.com/arunpdl/ha-nea-usage](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `neakasa` | home-assistant/brands#6167 | https://github.com/timniklas/hass-neakasa | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `neat_pulse` | home-assistant/brands#6004 | https://github.com/eisenman/neat_pulse | Active, pushed 2025-04-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nemon_intex_swg` | home-assistant/brands#7222 | https://github.com/NemoN/ha-intex-swg | Active, pushed 2026-06-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `neo_watcher` | home-assistant/brands#6886 | https://github.com/danq8/hacs_neo_watcher | Active, pushed 2026-01-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `neosmartblinds` | home-assistant/brands#5802 | https://github.com/mtgeekman/Home_Assistant_NeoSmartBlinds | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `neosmartblue` | home-assistant/brands#7360 | https://github.com/ikifar2012/neosmartblue-ha | Active, pushed 2026-10-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `neovolta` | home-assistant/brands#4192 | https://github.com/austinmroczek/neovolta | Active, pushed 2024-07-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `neptun_smart_local` | home-assistant/brands#6532 | https://github.com/sergeylysov/neptun_smart_local | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `neptune_apex` | home-assistant/brands#5699 | https://github.com/brettonw/neptune-apex | Active, pushed 2024-08-31 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nest_legacy` | home-assistant/brands#8189 | https://github.com/tronikos/nest_legacy | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nest_protect` | home-assistant/brands#3125 | https://github.com/iMicknl/ha-nest-protect | Active, pushed 2026-10-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nest_yale_lock` | home-assistant/brands#8164 | https://github.com/krozgrov/ha-nest-yale-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nestore` | home-assistant/brands#6479 | https://github.com/twvers/nestore | Active, pushed 2026-02-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `net4home` | home-assistant/brands#7184 | https://github.com/anynode/net4home | Active, pushed 2026-01-31 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `net_monitor` | home-assistant/brands#5851 | https://github.com/jjmonteiro/ha-net-monitor | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `neta_vehicle` | home-assistant/brands#6195 | https://github.com/netcookies/Neta-Vehicle | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `netflame` | home-assistant/brands#8576 | https://github.com/evaristocuesta/netflame-homeassistant-integration | Active, pushed 2026-01-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `netro_watering` | home-assistant/brands#4348 | https://github.com/kcofoni/ha-netro-watering | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `network_scanner` | home-assistant/brands#4968 | https://github.com/parvez/network_scanner | Active, pushed 2025-08-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `netx_thermostat` | home-assistant/brands#8720 | https://github.com/InsomniacByTrade/NetXThermostatHASS | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `neverin` | home-assistant/brands#9295 | https://github.com/potrgani/neverin | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `neviweb` | home-assistant/brands#6198 | https://github.com/claudegel/sinope-1 | Active, pushed 2026-02-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `neviweb130` | home-assistant/brands#6200 | https://github.com/claudegel/sinope-130 | Active, pushed 2026-10-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `new_bestway_spa` | home-assistant/brands#7417 | https://github.com/M1R4G376/New_bestway_spa | Active, pushed 2026-01-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `newsbinpro` | home-assistant/brands#6887 | https://github.com/jonnybergdahl/HomeAssistant_NewsbinPro_Integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nexa_bridge_x` | home-assistant/brands#3976 | https://github.com/andersevenrud/ha-nexa-bridge-x | Active, pushed 2026-08-21 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nexecur` | home-assistant/brands#7911 | https://github.com/Loule95450/HACS-Nexecur](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nexhome` | home-assistant/brands#5469 | https://github.com/nexhome-org/nexhome-homeassistant-component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `next_rocket_launch` | home-assistant/brands#4944 | https://github.com/Verbalinsurection/next_rocket_launch | Active, pushed 2026-09-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nfl` | home-assistant/brands#2857 | https://github.com/zacs/ha-nfl | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nfqws` | home-assistant/brands#7853 | https://github.com/IdadonI/nfqws-ha | Active, pushed 2026-09-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nibe_enery_conversion` | home-assistant/brands#9359 | https://github.com/VitisEK/nibe_energy_conversion | Active, pushed 2026-03-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nicegate` | home-assistant/brands#6546 | https://github.com/PatrikTrestik/homeassistant_nicegate | Active, pushed 2025-02-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nicehash_excavator` | home-assistant/brands#3094 | https://github.com/MesserschmittX/hacs-nicehash-excavator | Active, pushed 2022-05-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nikobus` | home-assistant/brands#5229 | https://github.com/fdebrus/Nikobus-HA | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nilan_connect` | home-assistant/brands#5996 | https://github.com/HairingX/nilan_connect](url | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nintendo_switch` | home-assistant/brands#5503 | https://github.com/MiguelAngelLV/ha-nintendo-switch | Active, pushed 2024-12-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nintendo_switch_presence` | home-assistant/brands#9378 | https://github.com/itsfatlum/Nintendo-Switch-Status | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nio_vehicle` | home-assistant/brands#6401 | https://github.com/littlehi/nio_vehicle | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nisource` | home-assistant/brands#9061 | https://github.com/patrickjcash/nisource-home-assistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nissan_carwings` | home-assistant/brands#5739 | https://github.com/remuslazar/homeassistant-carwings | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nissan_connect` | home-assistant/brands#4954 | https://github.com/gilliginsisland/hass-nissan-connect | Active, pushed 2026-06-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nissan_na` | home-assistant/brands#8924 | https://github.com/atheismann/home-assistant-nissan-na | Active, pushed 2026-07-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `niwa_tides` | home-assistant/brands#2322 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nl_weather` | home-assistant/brands#8856 | https://github.com/PaulVanSchayck/ha-nl-weather | Active, pushed 2026-10-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nmea2000` | home-assistant/brands#6754 | https://github.com/tomer-w/ha-nmea2000 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nmminer` | home-assistant/brands#8931 | https://github.com/TechnicallyBob202/NMMiner | Active, pushed 2026-01-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `noaa_space_weather` | home-assistant/brands#5352 | https://github.com/tcarwash/home-assistant_noaa-space-weather | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nodvarsel` | home-assistant/brands#9438 | https://github.com/owanvik/ha-nodvarsel | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `noise_generator` | home-assistant/brands#8453 | https://github.com/nirnachmani/noise-generator | Active, pushed 2026-08-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nokiaxs2426gb` | home-assistant/brands#4554 | https://github.com/mversluijs/homeassistant_nokiaxs2426gb_devicetracker | Active, pushed 2026-09-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `noonlight` | home-assistant/brands#5484 | https://github.com/konnected-io/noonlight-hass | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `noopsych_lamp` | home-assistant/brands#8614 | https://github.com/kiff20072008/Noopsych_HAOS_integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nordigen` | home-assistant/brands#2681 | https://github.com/dogmatic69/nordigen-homeassistant | Active, pushed 2026-06-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nordnet` | home-assistant/brands#3422 | https://github.com/jippi/hass-nordnet | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nordpool_planner` | home-assistant/brands#5898 | https://github.com/custom-components/nordpool | Active, pushed 2025-12-29 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `norman_blinds` | home-assistant/brands#8797 | https://github.com/nsleigh/norman-blinds](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `norsk_tidevann` | home-assistant/brands#7898 | https://github.com/Howard0000/home-assistant-norsk-tidevann | Active, pushed 2026-08-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `northern_powergrid_power_cuts` | home-assistant/brands#6675 | https://github.com/nosilleg/northern-powergrid-power-cuts | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `northtracker` | home-assistant/brands#9394 | https://github.com/robinostlund/homeassistant-northtracker | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `norway_alerts` | home-assistant/brands#9236 | https://github.com/jm-cook/norway_alerts | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `norwegiantidelite` | home-assistant/brands#6150 | https://github.com/jm-cook/ha-norwegiantide-lite | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `notdienstapotheke` | home-assistant/brands#6170 | https://github.com/ne3x7/notdienstapotheke-home-assistant | Active, pushed 2024-12-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `notify_actions` | home-assistant/brands#8794 | https://github.com/akentner/notify_actions | Active, pushed 2026-10-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `notify_manager` | home-assistant/brands#8600 | https://github.com/gz1337/ha-notify-manager | Active, pushed 2025-12-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `notifyhelper` | home-assistant/brands#6151 | https://github.com/kukuxx/HA-NotifyHelper | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `notion_garden_care` | home-assistant/brands#9358 | https://github.com/pfalzcraft/notion-garden-care | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `notion_todo` | home-assistant/brands#4890 | https://github.com/JanGiese/notion_todo | Active, pushed 2024-06-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nova_by_openlaunch` | home-assistant/brands#8596 | https://github.com/OpenLaunchLabs/homeassistant-nova | Active, pushed 2026-04-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nova_poshta` | home-assistant/brands#4819 | https://github.com/krasnoukhov/homeassistant-nova-poshta | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `npc` | home-assistant/brands#7264 | https://github.com/smarthomeblack/npc](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nsw_beachwatch` | home-assistant/brands#9409 | https://github.com/PlanetCitizen1829381/ha-nsw-beachwatch | Active, pushed 2026-03-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nsw_fire_danger` | home-assistant/brands#9064 | https://github.com/vwylaw/nsw_fire_danger | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nsw_tas_fuel_station` | home-assistant/brands#9612 | https://github.com/bicycleboy/nsw_tas_fuel_station | Active, pushed 2026-10-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nuheat_conductor` | home-assistant/brands#9317 | https://github.com/SmilesGalore/HA-Nuheat-Conductor | Active, pushed 2026-07-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nuki_events` | home-assistant/brands#9336 | https://github.com/titiviking/nuki_events | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nuki_ng` | home-assistant/brands#2888 | https://github.com/kvj/hass_nuki_ng | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nuki_web` | home-assistant/brands#9070 | https://github.com/ArnyminerZ/ha-nuki-web | Active, pushed 2026-10-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nuvo_tuner` | home-assistant/brands#5668 | https://github.com/brmccrary/nuvo_simple | Active, pushed 2026-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nws_spc_outlook` | home-assistant/brands#6737 | https://github.com/sedward5/nws_spc_outlook | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nyc311` | home-assistant/brands#3020 | https://github.com/elahd/ha_nyc311 | Active, pushed 2026-10-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `nymea` | home-assistant/brands#5858 | https://github.com/Mattes83/nymea | Active, pushed 2026-10-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `oasira_b2b` | home-assistant/brands#7826 | https://github.com/EffortlessHome/Oasira_B2C | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `oasissmart` | home-assistant/brands#8302 | https://github.com/david-collett/oasissmart | Active, pushed 2025-11-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `octopus_energy_adapter` | home-assistant/brands#9141 | https://github.com/HA-Material-Components/octopus-energy-adapter | Active, pushed 2026-06-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `octopus_energy_es` | home-assistant/brands#8849 | https://github.com/bthos/ha-octopus-energy-es | Active, pushed 2026-08-21 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `octopus_energy_it` | home-assistant/brands#8186 | https://github.com/samuelebistoletti/HomeAssistant-OctopusEnergyIT | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `octopus_ev_spain` | home-assistant/brands#7509 | https://github.com/lockevod/octopus_ev_spain | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `octopus_intelligent` | home-assistant/brands#3927 | https://github.com/megakid/ha_octopus_intelligent | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `odense_reno` | home-assistant/brands#4152 | https://github.com/fars-fede-fire/odense_reno | Active, pushed 2025-01-10 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `oekofen_pellematic_compact` | home-assistant/brands#4054 | https://github.com/dominikamann/oekofen-pellematic-compact | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `oelo_lights` | home-assistant/brands#7105 | https://github.com/Cinegration/Oelo_Lights_HA | Active, pushed 2025-05-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `oesterreichsenergie_sma` | home-assistant/brands#8974 | https://github.com/DavidProdinger/ha-oesterreichsenergie | Active, pushed 2026-04-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ogero` | home-assistant/brands#6190 | https://github.com/oraad/ha-ogero](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ohdear` | home-assistant/brands#3850 | https://github.com/owenvoke/hass-ohdear | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `oidc_provider` | home-assistant/brands#8130 | https://github.com/ganhammar/hass-oidc-auth | Active, pushed 2026-08-10 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `oilfox` | home-assistant/brands#3360 | https://github.com/chises/ha-oilfox | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `olarm_int` | home-assistant/brands#7966 | https://github.com/meierra/olarm_int | Active, pushed 2025-09-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `olivetin` | home-assistant/brands#6806 | https://github.com/OliveTin/OliveTin-HomeAssistant | Active, pushed 2026-10-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ollama_image_analysis` | home-assistant/brands#5677 | https://github.com/the-smart-home-maker/hass_ollama_image_analysis | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ollama_vision` | home-assistant/brands#6719 | https://github.com/remimikalsen/ollama_vision | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `omada` | home-assistant/brands#4163 | https://github.com/zachcheatham/ha-omada | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `omada_open_api` | home-assistant/brands#9753 | https://github.com/bullitt186/ha-omada-open-api](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `omlet_smart_coop` | home-assistant/brands#6171 | https://github.com/williamschey/hassio-omlet-smartcoop-door | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `omniconv` | home-assistant/brands#6861 | https://github.com/mLupine/OmniConv | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `omnik` | home-assistant/brands#3112 | https://github.com/heinoldenhuis/home_assistant_omnik_solar | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `omnis` | home-assistant/brands#8811 | https://github.com/theundefined/omnis-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `oncharger` | home-assistant/brands#4777 | https://github.com/krasnoukhov/homeassistant-oncharger | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `onemeter` | home-assistant/brands#7405 | https://github.com/SaDiablo/onemeter-hacs-integration | Active, pushed 2025-04-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `onesmartcontrol` | home-assistant/brands#3613 | https://github.com/PimDoos/onesmartcontrolha | Active, pushed 2026-02-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `onloc` | home-assistant/brands#8423 | https://github.com/onloc-app/onloc-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `onlycat` | home-assistant/brands#7426 | https://github.com/OnlyCatAI/onlycat-home-assistant | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `onoff_itflow` | home-assistant/brands#8890 | https://github.com/onoffautomations/Hassio-ITFlow-Integration | Active, pushed 2025-12-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `onoff_licenser` | home-assistant/brands#8887 | https://github.com/onoffautomations/onoff_licenser | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ontario_energy_board` | home-assistant/brands#3129 | https://github.com/jrfernandes/ontario_energy_board | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ookla_speedtest` | home-assistant/brands#8524 | https://github.com/soulripper13/hass-speedtest-ookla | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ooni_connect` | home-assistant/brands#9044 | https://github.com/RookieIVG/ha-ooni | Active, pushed 2026-06-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `open3e` | home-assistant/brands#9208 | https://github.com/MojoOli/open3e-ha | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `open_epaper_link` | home-assistant/brands#4257 | https://github.com/jonasniesner/open_epaper_link_homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `open_meteo_solar_forecast` | home-assistant/brands#5502 | https://github.com/rany2/ha-open-meteo-solar-forecast | Active, pushed 2026-09-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `open_pico` | home-assistant/brands#8201 | https://github.com/VoidElle/hassio-open-pico | Active, pushed 2026-08-21 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openai_music` | home-assistant/brands#4398 | https://github.com/hokiebrian/openai_music | Active, pushed 2024-01-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openai_response` | home-assistant/brands#5096 | https://github.com/ExPeacer/ha_openai_response](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openai_stt` | home-assistant/brands#5369 | https://github.com/einToast/openai_stt_ha | Active, pushed 2026-10-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openai_tts` | home-assistant/brands#4911 | https://github.com/sfortis/openai_tts](url | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openaq` | home-assistant/brands#8368 | https://github.com/zenguru84/ha-openaq | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openaudio` | home-assistant/brands#8733 | https://github.com/OpenAudioHome/HomeAssistant-Integration-for-HOLOWHAS | Active, pushed 2026-08-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openfan_micro` | home-assistant/brands#8021 | https://github.com/bitlisz1/hass-openfan-micro](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `opengrowbox` | home-assistant/brands#6242 | https://github.com/OpenGrow-Box/OpenGrowBox-HA | Active, pushed 2026-10-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openhab` | home-assistant/brands#2924 | https://github.com/kubawolanin/ha-openhab | Active, pushed 2023-01-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openid` | home-assistant/brands#7126 | https://github.com/cavefire/hass-openid | Active, pushed 2026-10-10 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openirblaster` | home-assistant/brands#9113 | https://github.com/jaycollett/OpenIRBlaster | Active, pushed 2026-09-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openmeteo_marine` | home-assistant/brands#9101 | https://github.com/sh00t2kill/ha-open-meteo-marine | Active, pushed 2026-07-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openmetrics` | home-assistant/brands#5757 | https://github.com/txxa/hass-openmetrics | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openmower` | home-assistant/brands#5452 | https://github.com/vermut/ha_openmower | Active, pushed 2026-07-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `opennotification` | home-assistant/brands#7804 | https://github.com/HenriSaumure/OpenNotification-HACS | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openshock` | home-assistant/brands#5960 | https://github.com/veronoicc/openshock-homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openwb2mqtt` | home-assistant/brands#5066 | https://github.com/a529987659852/openwb2mqtt | Active, pushed 2026-10-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openweathermap_all` | home-assistant/brands#2382 | https://github.com/viktak/ha-cc-openweathermap_all | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openwrt` | home-assistant/brands#4751 | https://github.com/dscao/openwrt | Active, pushed 2026-02-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openwrt_ubus` | home-assistant/brands#7556 | https://github.com/FUjr/homeassistant-openwrt-ubus | Active, pushed 2026-07-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openwrt_updater` | home-assistant/brands#7129 | https://github.com/izipuho/OpenWRT_control | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `openwrt_wakeonlan` | home-assistant/brands#7490 | https://github.com/Ashus/hass-openwrt-wakeonlan | Active, pushed 2025-08-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `oppo_cloud_tracker` | home-assistant/brands#7592 | https://github.com/jiesou/oppo_cloud_tracker | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `optimistic_feedback` | home-assistant/brands#7433 | https://github.com/nitaybz/optimistic_feedback | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `optispark` | home-assistant/brands#4985 | https://github.com/Big-Tree/HomeAssistant-OptiSpark | Active, pushed 2024-07-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `optoma_projector` | home-assistant/brands#9536 | https://github.com/speedy3wk/ha-optoma-projector | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `orca` | home-assistant/brands#5647 | https://github.com/Tomasinjo/orca-energy-ha | Active, pushed 2026-07-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `orcommconnect` | home-assistant/brands#7743 | https://github.com/spatecon/orcommconnect | Active, pushed 2025-10-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `oref_alert` | home-assistant/brands#4795 | https://github.com/amitfin/oref_alert | Active, pushed 2026-10-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `orf_weather_forecast` | home-assistant/brands#7620 | https://github.com/petres/ha-orf-weather-forecast | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ori` | home-assistant/brands#7521 | https://github.com/golles/ha-aquatlantis-ori | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `orkli_wifi_thermostat` | home-assistant/brands#6446 | https://github.com/wachino/orkli_wifi_thermostat | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `osoenergy_community` | home-assistant/brands#4844 | https://github.com/osohotwateriot/osoenergy_community | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `osrs_data` | home-assistant/brands#9662 | https://github.com/RedFirebreak/ha-osrs-data | Active, pushed 2026-10-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `osservaprezzi_carburanti` | home-assistant/brands#7796 | https://github.com/casungo/osservaprezzi-carburanti-ha | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `otodata_tank_monitor` | home-assistant/brands#9329 | https://github.com/briadelour/otodata-tank-monitor | Active, pushed 2026-05-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `otto_wilde_g32` | home-assistant/brands#7434 | https://github.com/zaubii/owg-g32-ha-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `outback_mate3` | home-assistant/brands#6448 | https://github.com/weirded/ha-outback-mate3 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `overheid_bekendmakingen` | home-assistant/brands#8225 | https://github.com/phoenix-blue/bekendmakingen | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `overwolfstatus` | home-assistant/brands#3806 | https://github.com/lociii/homeassistant-overwolf-status | Active, pushed 2026-06-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ovh_ipv6` | home-assistant/brands#6297 | https://github.com/Elijaht-dev/ovh_ipv6](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ovms` | home-assistant/brands#6674 | https://github.com/enoch85/ovms-home-assistant | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ovo_charge` | home-assistant/brands#7343 | https://github.com/cvl01/ha-ovo-charge | Active, pushed 2025-06-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pace_bms` | home-assistant/brands#8231 | https://github.com/OwlBawl/Pace-BMS | Active, pushed 2025-12-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pact_coffee` | home-assistant/brands#5627 | https://github.com/DrTree/pact-coffee | Active, pushed 2026-02-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `padersprinter` | home-assistant/brands#6247 | https://github.com/AlbrechtL/hass-padersprinter | Active, pushed 2026-06-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pagerduty` | home-assistant/brands#5024 | https://github.com/jmacri01/homeassistant-custom-components-pagerduty | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `paloaltonetworks` | home-assistant/brands#6386 | https://github.com/FoUStep/ha-pan-customintegration | Active, pushed 2025-01-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `panasonic_hc` | home-assistant/brands#5678 | https://github.com/david-collett/panasonic_hc | Active, pushed 2026-09-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `panasonic_smart_app` | home-assistant/brands#2549 | https://github.com/osk2/panasonic_smart_app | Active, pushed 2026-10-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `panda_pwr` | home-assistant/brands#6102 | https://github.com/juanillo62gm/HA-Panda-PWR | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pangolin_monitor` | home-assistant/brands#7042 | https://github.com/teuchezh/pangolin-monitor | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `paperlesspaper_push` | home-assistant/brands#9385 | https://github.com/fwmone/paperlesspaper_push | Active, pushed 2026-07-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `paprika` | home-assistant/brands#6794 | https://github.com/rbrunt/paprika-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `paradigma` | home-assistant/brands#9315 | https://github.com/nussfuellung/paradigma-homeassistant | Active, pushed 2026-08-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `parasail_conversation` | home-assistant/brands#8451 | https://github.com/stockhausenj/ha-conversation-parasail | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `parasail_stt` | home-assistant/brands#8529 | https://github.com/stockhausenj/ha-stt-parasail | Active, pushed 2025-11-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `parasail_tts` | home-assistant/brands#8604 | https://github.com/stockhausenj/ha-tts-parasail | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `parcelapp` | home-assistant/brands#6661 | https://github.com/jmdevita/parcel-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `parking_gent` | home-assistant/brands#6261 | https://github.com/stijnpiron/parking_gent | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `parkrun5k` | home-assistant/brands#7089 | https://github.com/B-Hartley/parkrun5k | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `patch` | home-assistant/brands#4766 | https://github.com/amitfin/patch | Active, pushed 2026-08-29 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pazgas_power` | home-assistant/brands#6068 | https://github.com/GuyKh/pazgas-power-custom-component | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pca301` | home-assistant/brands#8934 | https://github.com/Zwer2k/ha-pca301 | Active, pushed 2026-09-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pcloud_backup` | home-assistant/brands#8410 | https://github.com/ghotso/HAS-pCloud-Backup](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pcsensor` | home-assistant/brands#6467 | https://github.com/eode/pcsensor | Active, pushed 2025-05-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `peaqev` | home-assistant/brands#3381 | https://github.com/elden1337/hass-peaq | Active, pushed 2026-08-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pecron` | home-assistant/brands#9525 | https://github.com/jsight/ha-pecron | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `peek_it_ha` | home-assistant/brands#9592 | https://github.com/jolabs40/peek-it-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pella_insynctive` | home-assistant/brands#9326 | https://github.com/johnsonej23/pella_insynctive | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `peplink_local` | home-assistant/brands#6725 | https://github.com/weirded/ha-peplink-local | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `perplexity` | home-assistant/brands#9063 | https://github.com/bieniu/ha-perplexity | Active, pushed 2026-10-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `perplexity_assistant` | home-assistant/brands#8404 | https://github.com/Pekulll/Perplexity-Assistant](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `perry_cdom` | home-assistant/brands#6014 | https://github.com/ivancoppa/homeassistant-perry-cdom | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `personal_weather_station` | home-assistant/brands#8549 | https://github.com/MaxensF/personal_weather_station | Active, pushed 2026-09-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `personio` | home-assistant/brands#4112 | https://github.com/Sese-Schneider/ha-personio | Active, pushed 2023-07-31 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pesc` | home-assistant/brands#4572 | https://github.com/dentra/ha-pesc | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pet_marvel` | home-assistant/brands#7218 | https://github.com/jarylc/hass-pet-marvel | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `petkit` | home-assistant/brands#4111 | https://github.com/RobertD502/home-assistant-petkit | Active, pushed 2026-09-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `petnovations` | home-assistant/brands#5861 | https://github.com/PrimeAutomation/petnovations | Active, pushed 2024-10-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `petoneer_smartdot` | home-assistant/brands#5287 | https://github.com/verdel/hass-petoneer-smartdot | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `petrochina` | home-assistant/brands#7708 | https://github.com/xiaoshi930/petrochina | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `petsafe` | home-assistant/brands#3716 | https://github.com/dcmeglio/homeassistant-petsafe | Active, pushed 2025-01-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pettracer` | home-assistant/brands#9408 | https://github.com/AmbientArchitect/Home-Assistant-petTracer-integration | Active, pushed 2026-09-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `petwalk` | home-assistant/brands#5018 | https://github.com/p0l0/hapetwalk | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pge_dystrybucja_outages` | home-assistant/brands#8138 | https://github.com/gregopl/PGE-Dystrybucja-Outages | Active, pushed 2026-08-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pge_sensor` | home-assistant/brands#9350 | https://github.com/procaktomasz/PGE_sensor | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pgk_slupsk` | home-assistant/brands#6679 | https://github.com/muffintsi/hass-pkg-slupsk.git](url | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ph803w` | home-assistant/brands#6638 | https://github.com/dala318/python_ph803w | Active, pushed 2025-03-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `philips_airfryer` | home-assistant/brands#8845 | https://github.com/V4n1X/ha_philips_airfryer](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `philips_airpurifier_coap` | home-assistant/brands#3316 | https://github.com/kongo09/philips-airpurifier-coap | Active, pushed 2026-07-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `philips_heater_coap` | home-assistant/brands#9057 | https://github.com/mrverrall/philips-heater-coap | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `philips_home_access` | home-assistant/brands#9694 | https://github.com/rjbogz/philips_home_access | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `philips_pet_series` | home-assistant/brands#5962 | https://github.com/AboveColin/HA-Philips-Pet-Series | Active, pushed 2026-10-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `philips_shaver` | home-assistant/brands#8790 | https://github.com/mtheli/philips_shaver | Active, pushed 2026-10-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `phonetrack` | home-assistant/brands#7952 | https://github.com/Woulve/phonetrack | Active, pushed 2025-10-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `phoniebox` | home-assistant/brands#5594 | https://github.com/MiczFlor/RPi-Jukebox-RFID | Active, pushed 2026-10-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `photoview` | home-assistant/brands#7794 | https://github.com/agent-ost/ha-media-photoview | Active, pushed 2026-04-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `photovoltaic_manager` | home-assistant/brands#9091 | https://github.com/VaclavSchubert/photovoltaic_manager | Active, pushed 2026-07-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pi_ina219` | home-assistant/brands#8997 | https://github.com/JoshuaLampert/homeassistant-pi_ina219 | Active, pushed 2026-07-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pi_ina3221` | home-assistant/brands#8721 | https://github.com/JoshuaLampert/homeassistant-pi_ina3221 | Active, pushed 2026-07-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `picaso_3d` | home-assistant/brands#6777 | https://github.com/alryaz/hass-picaso-3d | Active, pushed 2025-03-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `picow_neopixel` | home-assistant/brands#8865 | https://github.com/maxi07/PicoW-Neopixel-Homeassistant-Integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `picqer_stats` | home-assistant/brands#6095 | https://github.com/Baanaaana/Picqer-Stats | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pid_controller` | home-assistant/brands#3078 | https://github.com/soloam/ha-pid-controller | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pid_departures` | home-assistant/brands#5236 | https://github.com/dvejsada/PID_integration | Active, pushed 2026-10-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pifire` | home-assistant/brands#7824 | https://github.com/VoidLock/ha-pifire | Active, pushed 2025-09-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pik_comfort` | home-assistant/brands#2825 | https://github.com/alryaz/hass-pik-comfort | Active, pushed 2022-08-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pik_intercom` | home-assistant/brands#2824 | https://github.com/alryaz/hass-pik-intercom | Active, pushed 2025-06-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pikvm_ha` | home-assistant/brands#5520 | https://github.com/adamoutler/pikvm-homeassistant-integration | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pilot_wire_climate` | home-assistant/brands#6045 | https://github.com/faizpuru/ha-pilot-wire-climate | Active, pushed 2026-10-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pima` | home-assistant/brands#8083 | https://github.com/birsch/pima4ha | Active, pushed 2025-10-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pima_force` | home-assistant/brands#9098 | https://github.com/amitfin/pima_force | Active, pushed 2026-10-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pioneer_async` | home-assistant/brands#1969 | https://github.com/crowbarz/ha-pioneer_async | Active, pushed 2026-09-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pipeless` | home-assistant/brands#5441 | https://github.com/pipeless-ai/home-assistant-custom-component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pirateweather` | home-assistant/brands#2637 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `piscinexa` | home-assistant/brands#7057 | https://github.com/XAV59213/piscinexa | Active, pushed 2025-10-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pitpat` | home-assistant/brands#9367 | https://github.com/deosrc/home-assistant-pitpat | Active, pushed 2026-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pixelair` | home-assistant/brands#8866 | https://github.com/acvigue/homeassistant-pixelair | Active, pushed 2026-01-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pixels_dice` | home-assistant/brands#7404 | https://github.com/jaxzin/gamewithpixels-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pixie_plus` | home-assistant/brands#3691 | https://github.com/nirnachmani/Pixie-Plus-for-Home-Assistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `places` | home-assistant/brands#3661 | https://github.com/Snuffy2/places](url | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `plant_care` | home-assistant/brands#8948 | https://github.com/AK-O/plant_care | Active, pushed 2026-09-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `plant_diary` | home-assistant/brands#7888 | https://github.com/xplanes/ha-plant-diary | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `plantsip` | home-assistant/brands#6294 | https://github.com/alexdetsch/plantsip-homeassistant | Active, pushed 2025-05-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `playnite_web_mqtt` | home-assistant/brands#5955 | https://github.com/cvele/playnite_web_mqtt | Active, pushed 2024-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `playtopro` | home-assistant/brands#9543 | https://github.com/playtopro/playtopro-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pleinchamp` | home-assistant/brands#7353 | https://github.com/Dams51/Pleinchamp | Active, pushed 2025-06-29 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `plex_recently_added` | home-assistant/brands#3429 | https://github.com/NemesisRE/sensor.plex_recently_added | Active, pushed 2023-03-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `plex_webhooks` | home-assistant/brands#4404 | https://github.com/schmittx/home-assistant-plex-webhooks | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `plexlog` | home-assistant/brands#6279 | https://github.com/larszi/home-assistant-plexlog | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pluggit` | home-assistant/brands#5783 | https://github.com/Tvalley71/pluggit | Active, pushed 2026-10-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pocket_money` | home-assistant/brands#6885 | https://github.com/sam-ward/ha-pocket-money | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `podcast_index` | home-assistant/brands#7445 | https://github.com/daswass/ha-podcast-index | Active, pushed 2025-07-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `poer` | home-assistant/brands#7236 | https://github.com/poersmart/poer-home-assistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `polar` | home-assistant/brands#3950 | https://github.com/Aohzan/hass-polar | Active, pushed 2026-10-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `polestar_api` | home-assistant/brands#5012 | https://github.com/leeyuentuen/polestar_api | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pollen_hu` | home-assistant/brands#2287 | https://github.com/amaximus/pollen-hu | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pollen_lu` | home-assistant/brands#5635 | https://github.com/Foxi352/hacs_pollen_lu | Active, pushed 2026-10-10 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `polleninformation` | home-assistant/brands#7243 | https://github.com/krissen/polleninformation | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `poly` | home-assistant/brands#8673 | https://github.com/zacs/ha-polycom_speakerphone | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `polyaire` | home-assistant/brands#2918 | https://github.com/mihailescu2m/hass-airtouch4-platform | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `poolchem` | home-assistant/brands#8630 | https://github.com/joyfulhouse/homeassistant-poolchem | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `poollab` | home-assistant/brands#4590 | https://github.com/dala318/python_poollab | Active, pushed 2025-12-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `poolmath` | home-assistant/brands#5805 | https://github.com/rsnodgrass/hass-poolmath | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `poolnexus` | home-assistant/brands#8276 | https://github.com/PoolNexus/PoolNexus-HA-addons | Active, pushed 2025-10-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `poolstation` | home-assistant/brands#2805 | https://github.com/home-assistant/home-assistant.io | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `poolsync_custom` | home-assistant/brands#7225 | https://github.com/socbrian/AP_PoolSync | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `popup_blueprints` | home-assistant/brands#9328 | https://github.com/salvatore-disavio/ha-popup-blueprints | Active, pushed 2026-02-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `porkbun_ddns` | home-assistant/brands#9549 | https://github.com/teh-hippo/ha-porkbun | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `portail_eau_fr` | home-assistant/brands#6230 | https://github.com/laurent-martin/hass_int_toutsurmoneau | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `posten` | home-assistant/brands#3956 | https://github.com/BobTheShoplifter/HomeAssistant-Posten | Active, pushed 2024-12-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `posti_delivery_dates` | home-assistant/brands#8874 | https://github.com/geekuality/posti-delivery-dates | Active, pushed 2026-09-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `power_group_monitor` | home-assistant/brands#7563 | https://github.com/mephdrac/PowerGroupMonitor | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `power_helper` | home-assistant/brands#9011 | https://github.com/Dennis90BW/ha-power-helper | Active, pushed 2026-05-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `power_max_tracker` | home-assistant/brands#8062 | https://github.com/perosb/power_max_tracker | Active, pushed 2026-08-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `power_price_level` | home-assistant/brands#9148 | https://github.com/martinsheldon/Power-Price-Level | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `power_saver` | home-assistant/brands#9442 | https://github.com/jyourstone/power_saver | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `power_sync` | home-assistant/brands#8996 | https://github.com/bolagnaise/PowerSync | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `powerbrain` | home-assistant/brands#3769 | https://github.com/mb-software/homeassistant-powerbrain | Active, pushed 2023-10-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `powercalc` | home-assistant/brands#2625 | https://github.com/bramstroker/homeassistant-powercalc | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `powerclimate` | home-assistant/brands#8664 | https://github.com/marnixt/PowerClimate | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `powerllm` | home-assistant/brands#5781 | https://github.com/Shulyaka/powerllm | Active, pushed 2026-09-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `powertag_gateway` | home-assistant/brands#3561 | https://github.com/Breina/PowerTagGateway | Active, pushed 2026-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `powervault` | home-assistant/brands#5975 | https://github.com/adammcdonagh/home-assistant-powervault | Active, pushed 2026-07-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `powerwall_control` | home-assistant/brands#8277 | https://github.com/kilroyd/powerwall_control | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `powerzcst` | home-assistant/brands#7953 | https://github.com/LTDSA/ha_powerzcst](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ppa_contatto` | home-assistant/brands#7466 | https://github.com/tarikbc/ha-ppa-contatto | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `prana_wifi` | home-assistant/brands#8995 | https://github.com/boot-nyxpoint/prana-wifi | Active, pushed 2026-02-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pre_hdo` | home-assistant/brands#9574 | https://github.com/martinhoyer/ha-pre-hdo | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `precious_metal_prices` | home-assistant/brands#8268 | https://github.com/ledimestari/homeassistant-precious-metals | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `precoscombustiveis` | home-assistant/brands#3482 | https://github.com/netsoft-ruidias/ha-custom-component-precoscombustiveis | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `predistribuce` | home-assistant/brands#1668 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `premierinn` | home-assistant/brands#5873 | https://github.com/jampez77/PremierInn | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `premium_bond_checker` | home-assistant/brands#6222 | https://github.com/inverse/python-premium-bond-checker | Active, pushed 2026-10-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `presence_simulation` | home-assistant/brands#2575 | https://github.com/slashback100/presence_simulation | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pressensor` | home-assistant/brands#9648 | https://github.com/cliffkujala/ha-pressensor | Active, pushed 2026-02-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `prijsplafond` | home-assistant/brands#4062 | https://github.com/rbrink/Home-Assistant-Prijsplafond | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `priority_switch` | home-assistant/brands#6277 | https://github.com/pattisonmichael/hacs_priority_switch | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `prix_carburant` | home-assistant/brands#3424 | https://github.com/Aohzan/hass-prixcarburant | Active, pushed 2026-10-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `proconip_pool_controller` | home-assistant/brands#4522 | https://github.com/ylabonte/proconip-hass | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `profi_air_touch` | home-assistant/brands#6738 | https://github.com/desue90/profi-air-touch | Active, pushed 2025-05-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `profimaktab` | home-assistant/brands#9237 | https://github.com/lavalex2003/profimaktab | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `prometheus_sensor` | home-assistant/brands#5482 | https://github.com/mweinelt/ha-prometheus-sensor | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pronatura` | home-assistant/brands#8436 | https://github.com/nilvanis/ha-pronatura | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `propresenter` | home-assistant/brands#8429 | https://github.com/BenJamesAndo/ha-propresenter | Active, pushed 2025-11-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `proscenic` | home-assistant/brands#1688 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `protector_net` | home-assistant/brands#7284 | https://github.com/hitchin999/protector_net | Active, pushed 2026-09-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `proteus_api` | home-assistant/brands#8192 | https://github.com/nijel/proteus-api-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `protocol_wizard` | home-assistant/brands#9072 | https://github.com/partach/protocol_wizard | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `proton_drive` | home-assistant/brands#7539 | https://github.com/LouisBrunner/ha-proton-drive | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `proxy_cheap` | home-assistant/brands#9125 | https://github.com/manjotsc/ha-proxy_cheap | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ps3` | home-assistant/brands#5495 | https://github.com/SDR3078/ps3-home-assistant | Active, pushed 2025-01-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pskr` | home-assistant/brands#8971 | https://github.com/pentafive/pskr-ha-bridge | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pstryk` | home-assistant/brands#7237 | https://github.com/Bankilo/pstryk-home-assistant | Active, pushed 2026-09-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pstryk_aio` | home-assistant/brands#7212 | https://github.com/kubass4/Pstryk-all-in-one | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pterodactyl_panel` | home-assistant/brands#6220 | https://github.com/tjleach98/homeassistant-pterodactyl-panel | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `publibike` | home-assistant/brands#7876 | https://github.com/mr-deamon/publibike_stations | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `public_transport_victoria` | home-assistant/brands#1921 | https://github.com/bremor/public_transport_victoria | Active, pushed 2026-03-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pufferpanel` | home-assistant/brands#9373 | https://github.com/pufferpanel/pufferpanel | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pugoing_home` | home-assistant/brands#7881 | https://github.com/run02/ha_pugoing_home | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pulsar` | home-assistant/brands#8767 | https://github.com/KnyazSh/ha-pulsar | Active, pushed 2023-04-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pulsarr_enhanced_requests` | home-assistant/brands#8548 | https://github.com/SpaceFrags/pulsarr_enhanced_requests | Active, pushed 2026-05-31 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pulsatrix_local_mqtt` | home-assistant/brands#4584 | https://github.com/werthdavid/homeassistant-pulsatrix-local-mqtt | Active, pushed 2026-03-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pulselabs` | home-assistant/brands#7483 | https://github.com/axlns/ha-pulselabs | Active, pushed 2025-08-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pumpsteer` | home-assistant/brands#7550 | https://github.com/JohanAlvedal/PumpSteer | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pun_sensor` | home-assistant/brands#5001 | https://github.com/virtualdj/pun_sensor | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `puregym` | home-assistant/brands#9177 | https://github.com/jasonyates/ha-puregym | Active, pushed 2026-01-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `purrsong` | home-assistant/brands#2443 | https://github.com/RobertD502/home-assistant-lavviebot | Active, pushed 2024-12-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pushover_listener` | home-assistant/brands#7293 | https://github.com/armedad/pushover_listener | Active, pushed 2026-10-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pv_curtailment` | home-assistant/brands#8741 | https://github.com/milanhin/pv_curtailment | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pv_management` | home-assistant/brands#9033 | https://github.com/hoizi89/pv_management | Active, pushed 2026-09-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pv_management_fix` | home-assistant/brands#9299 | https://github.com/hoizi89/pv_management_fix | Active, pushed 2026-10-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pvnode` | home-assistant/brands#7234 | https://github.com/kuschiee/ha_pvnode | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pvoutput_foxess` | home-assistant/brands#7314 | https://github.com/06benste/FoxEss-PVOutput | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pylontech` | home-assistant/brands#4231 | https://github.com/mletenay/home-assistant-pylontech | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pylontech_serial` | home-assistant/brands#9066 | https://github.com/ArnyminerZ/ha-pylon-integration | Active, pushed 2026-07-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pypi_updates` | home-assistant/brands#5464 | https://github.com/kgn3400/pypi_updates | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pyscript` | home-assistant/brands#1778 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pysmaplus` | home-assistant/brands#5730 | https://github.com/littleyoda/ha-pysmaplus](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `pzo_sensor` | home-assistant/brands#6211 | https://github.com/Gariam-1/brands | Active, pushed 2024-12-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `qbit_airdrop` | home-assistant/brands#8552 | https://github.com/InvenioX3/qbit_airdrop | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `qbittorrent_alt` | home-assistant/brands#4964 | https://github.com/chris-mc1/qBittorrent-hass | Active, pushed 2025-04-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `qcells_energy` | home-assistant/brands#7308 | https://github.com/TEJ4321/qcells_ha | Active, pushed 2026-03-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `qilowatt` | home-assistant/brands#7478 | https://github.com/qilowatt/qilowatt-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `qingping_alarm_clock` | home-assistant/brands#8349 | https://github.com/ov1d1u/qingping_alarm_clock | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `qingping_cgs1` | home-assistant/brands#5837 | https://github.com/mash2k3/qingping_cgs1 | Active, pushed 2026-03-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `qinhua_gas` | home-assistant/brands#7846 | https://github.com/xiaoshi930i/qinhua_gas | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `qinlin_door` | home-assistant/brands#5916 | https://github.com/linfenliu/qinlin_door | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `qolsys_panel` | home-assistant/brands#8016 | https://github.com/EHylands/ha-qolsys-panel | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `qr_generator` | home-assistant/brands#3646 | https://github.com/DeerMaximum/QR-Code-Generator | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `qstream` | home-assistant/brands#8273 | https://github.com/bramd/qstream-ha | Active, pushed 2025-11-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `qsys_qrc` | home-assistant/brands#4600 | https://github.com/nkvoll/home-assistant-qsys-qrc | Active, pushed 2026-10-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `quandify` | home-assistant/brands#7803 | https://github.com/johanfolin/quandify-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `quatt` | home-assistant/brands#4586 | https://github.com/marcoboers/home-assistant-quatt | Active, pushed 2026-10-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `qube_heatpump` | home-assistant/brands#7874 | https://github.com/MattieGit/wp-qube | Active, pushed 2026-10-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `qubino_wire_pilot` | home-assistant/brands#2332 | https://github.com/piitaya/home-assistant-qubino-wire-pilot | Active, pushed 2026-10-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `quick_timer` | home-assistant/brands#9653 | https://github.com/jozefnad/homeassistant-quick_timer | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `qustodio` | home-assistant/brands#8531 | https://github.com/matt-richardson/home-assistant-qustodio | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `qvantum` | home-assistant/brands#6696 | https://github.com/perosb/qvantum_custom_component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `qweather` | home-assistant/brands#4700 | https://github.com/dscao/qweather | Active, pushed 2026-02-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `qwikswitch_api` | home-assistant/brands#6409 | https://github.com/rhanekom/hass-qwikswitch-api | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `r_volution_player` | home-assistant/brands#7719 | https://github.com/volkerrichert/ha_R_volution_player | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `radio_details` | home-assistant/brands#3706 | https://github.com/pmfernandes/radio_details | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `radio_stream` | home-assistant/brands#8784 | https://github.com/TopDeveloper29/RadioStream | Active, pushed 2026-08-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `radoff` | home-assistant/brands#5825 | https://github.com/raelix/ha-radoff-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rainforest_emu_2` | home-assistant/brands#3239 | https://github.com/ryanwinter/hass-rainforest-emu-2 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `raise3d` | home-assistant/brands#5470 | https://github.com/daestx/raise3d | Active, pushed 2025-06-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rako` | home-assistant/brands#6001 | https://github.com/princekama/hacs-rako | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ramses_extras` | home-assistant/brands#8909 | https://github.com/wimpie70/brands | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `random_entity` | home-assistant/brands#4830 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rapdev` | home-assistant/brands#6829 | https://github.com/rapdev-io/ha-datadog-metrics | Active, pushed 2026-07-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rapportera_temp` | home-assistant/brands#9154 | https://github.com/frodr1k/RapporteraTempHA | Active, pushed 2026-01-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rapt_cloud_link` | home-assistant/brands#7500 | https://github.com/berra200/home-assistant-rapt-cloud-link | Active, pushed 2025-09-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `raritan` | home-assistant/brands#6282 | https://github.com/yuliwilliam/ha-raritan | Active, pushed 2026-05-21 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rasa` | home-assistant/brands#7407 | https://github.com/dpw13/homeassistant-rasa | Active, pushed 2026-06-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rbac` | home-assistant/brands#8082 | https://github.com/SamAthanas/user-rbac | Active, pushed 2026-05-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rbfa` | home-assistant/brands#5268 | https://github.com/rgerbranda/rbfa | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rce` | home-assistant/brands#5587 | https://github.com/jacek2511/ha_rce | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rct_power` | home-assistant/brands#2958 | https://github.com/weltenwort/home-assistant-rct-power-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `react_dashboard` | home-assistant/brands#5519 | https://github.com/home-assistant-react/hacs-dashboard | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `readynaslocal` | home-assistant/brands#6622 | https://github.com/jasonwragg/home-assistant-readynaslocal | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `real_last_changed` | home-assistant/brands#8505 | https://github.com/HamletDuFromage/ha_real-last-changed | Active, pushed 2026-07-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `recalbox` | home-assistant/brands#9269 | https://github.com/tototo23/RecalboxHomeAssistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `recbms` | home-assistant/brands#8008 | https://github.com/tiagonmas/recbms | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `receipt_printer` | home-assistant/brands#9009 | https://github.com/zacs/ha-receipt_printer | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `reclaimenergy` | home-assistant/brands#5649 | https://github.com/david-collett/reclaimenergy | Active, pushed 2026-09-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `recosante` | home-assistant/brands#4476 | https://github.com/geckoflume/hass-recosante | Active, pushed 2023-06-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `recteq` | home-assistant/brands#1908 | https://github.com/pdugas/homeassistant-recteq | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `red_energy` | home-assistant/brands#7752 | https://github.com/craibo/ha-red-energy-au | Active, pushed 2026-10-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `redback_tech` | home-assistant/brands#5535 | https://github.com/cabberley/HA_RedbackTech | Active, pushed 2026-10-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `reddit_images` | home-assistant/brands#8662 | https://github.com/saihgupr/reddit_images | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `redfin` | home-assistant/brands#2522 | https://github.com/dreed47/redfin | Active, pushed 2025-01-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `reef_pi` | home-assistant/brands#8384 | https://github.com/tdragon/reef-pi-hass-custom | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `refoss_lan` | home-assistant/brands#5590 | https://github.com/Refoss/refoss-homeassistant | Active, pushed 2026-05-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `refoss_rpc` | home-assistant/brands#6582 | https://github.com/ashionky/refoss_rpc | Active, pushed 2025-02-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `regensburg_transport` | home-assistant/brands#6136 | https://github.com/einFreak/brands | Active, pushed 2024-11-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `regulus` | home-assistant/brands#7136 | https://github.com/Haluska77/regulus-ha | Active, pushed 2026-09-29 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `remeha_home` | home-assistant/brands#4022 | https://github.com/msvisser/remeha_home | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `remko_mqtt` | home-assistant/brands#6266 | https://github.com/Altrec/remko_mqtt-ha | Active, pushed 2026-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `remootio` | home-assistant/brands#5742 | https://github.com/Mewks/remootio | Active, pushed 2024-08-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `remote_activity_monitor` | home-assistant/brands#5953 | https://github.com/kgn3400/remote_activity_monitor | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `remote_assist_display` | home-assistant/brands#6587 | https://github.com/michelle-avery/remote-assist-display | Active, pushed 2025-05-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `remote_assistant` | home-assistant/brands#6859 | https://github.com/Looking4Cache/home-assistant-remote-assistant | Active, pushed 2025-06-29 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `remote_homeassistant` | home-assistant/brands#2024 | https://github.com/lukas-hetzenecker/home-assistant-remote | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `renkei_poe` | home-assistant/brands#7933 | https://github.com/dendo-systems/renkei-poe-ha | Active, pushed 2026-05-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rennigou` | home-assistant/brands#5729 | https://github.com/Cerallin/hass-rennigou | Active, pushed 2024-08-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `renpho` | home-assistant/brands#5273 | https://github.com/antoinebou12/hass_renpho | Active, pushed 2026-06-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rental_control` | home-assistant/brands#3103 | https://github.com/FutureTense/keymaster | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `reolink_cctv` | home-assistant/brands#4121 | https://github.com/JimStar/reolink_cctv | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `reolink_thumbs` | home-assistant/brands#7266 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `repsolluzygas` | home-assistant/brands#2799 | https://github.com/bzzoiro/repsolluzygas | Active, pushed 2024-04-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `resideo_total_connect` | home-assistant/brands#5468 | https://github.com/schmittx/home-assistant-resideo-total-connect | Active, pushed 2025-09-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `resmed_myair` | home-assistant/brands#5098 | https://github.com/prestomation/resmed_myair_sensors | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `resol` | home-assistant/brands#4904 | https://github.com/evercape/hass-resol-KM2 | Active, pushed 2025-04-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `response_as_sensor` | home-assistant/brands#5894 | https://github.com/gjohansson-ST/response_as_sensor | Active, pushed 2026-10-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `restore_persistent_notifications` | home-assistant/brands#8504 | https://github.com/andreadegiovine/homeassistant-restore-persistent-notifications | Active, pushed 2026-10-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `retention_cleaner` | home-assistant/brands#8921 | https://github.com/thomasgriebner/retention_cleaner | Active, pushed 2026-02-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `retroachievements` | home-assistant/brands#7799 | https://github.com/kllngtme/ha-ra | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `retry` | home-assistant/brands#4210 | https://github.com/amitfin/retry | Active, pushed 2026-10-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `revogi` | home-assistant/brands#3835 | https://github.com/sh00t2kill/petoneer_custom_component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rewe` | home-assistant/brands#3632 | https://github.com/FaserF/ha-rewe | Active, pushed 2026-10-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rf4ch` | home-assistant/brands#4505 | https://github.com/tanishqmanuja/ha.integration.rf4ch | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rf_cover_time_based` | home-assistant/brands#7416 | https://github.com/edufabra/rf_cover_time_based | Active, pushed 2026-04-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rfplayer` | home-assistant/brands#3465 | https://github.com/gce-electronics/HA_RFPlayer | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rheem_eziset` | home-assistant/brands#5000 | https://github.com/illuzn/rheem-eziset | Active, pushed 2026-01-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rika_firenet` | home-assistant/brands#5057 | https://github.com/antibill51/rika-firenet-custom-component](url | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ring_keypad` | home-assistant/brands#5376 | https://github.com/allenporter/home-assistant-ring-keypad | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ringo` | home-assistant/brands#7120 | https://github.com/TPO-2024-2025/ringo-smart-lock-integration | Active, pushed 2025-05-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rinnai` | home-assistant/brands#2664 | https://github.com/explosivo22/rinnaicontrolr-ha | Active, pushed 2026-09-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rinnaitouch` | home-assistant/brands#3272 | https://github.com/funtastix/rinnaitouch | Active, pushed 2026-04-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ripple_energy` | home-assistant/brands#4536 | https://github.com/ryanbdclark/ripple_energy | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rituals_genie` | home-assistant/brands#2235 | https://github.com/fred-oranje/rituals-genie | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rki_covid` | home-assistant/brands#2079 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rn_collectes` | home-assistant/brands#8739 | https://github.com/maxim31cote/RN-Collectes | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rnv` | home-assistant/brands#7576 | https://github.com/mirko-sommer/homeassistant-rnv | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `robinhood_crypto` | home-assistant/brands#8846 | https://github.com/InfoSecured/robinhood_crypto | Active, pushed 2026-01-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `robonomics` | home-assistant/brands#3553 | https://github.com/airalab/homeassistant-robonomics-integration | Active, pushed 2026-08-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `robovac_mqtt` | home-assistant/brands#9052 | https://github.com/jeppesens/eufy-clean | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rohlikcz` | home-assistant/brands#6928 | https://github.com/dvejsada/HA_RohlikCZ | Active, pushed 2026-10-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rointe` | home-assistant/brands#3647 | https://github.com/tggm/rointe-hacs | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `romande_energie` | home-assistant/brands#6678 | https://github.com/sven-borden/hacs-romande-energie](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `room_occupancy` | home-assistant/brands#5390 | https://github.com/maxgeilert/room_occupancy | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `roomba_rest980` | home-assistant/brands#7467 | https://github.com/ia74/roomba_rest980 | Active, pushed 2026-10-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rooster_money` | home-assistant/brands#4546 | https://github.com/pantherale0/ha-roostermoney | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `route` | home-assistant/brands#7217 | https://github.com/artt652/daily_routes | Active, pushed 2025-12-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `royalmail` | home-assistant/brands#5853 | https://github.com/jampez77/RoyalMail | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rpi_geekworm_x1202` | home-assistant/brands#6044 | https://github.com/user-attachments/assets | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rpi_rf` | home-assistant/brands#3175 | https://github.com/markvader/ha-rpi_rf | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rpi_waveshare_nvme` | home-assistant/brands#6084 | https://github.com/kelddamsbo/rpi_waveshare_nvm | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rs485_device` | home-assistant/brands#5382 | https://github.com/RayChang/rs485_device | Active, pushed 2025-04-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rs_wfirex4` | home-assistant/brands#8571 | https://github.com/nao-pon/hass_rs_wfirex4 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rte_ecowatt` | home-assistant/brands#3735 | https://github.com/kamaradclimber/rte-ecowatt | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rte_jours_signales` | home-assistant/brands#6355 | https://github.com/hiteule/rte-jours-signales | Active, pushed 2026-08-10 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rtetempo` | home-assistant/brands#4097 | https://github.com/hekmon/rtetempo | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rtkey` | home-assistant/brands#7536 | https://github.com/artgl/hass_rtkey | Active, pushed 2024-02-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rts_link` | home-assistant/brands#5696 | https://github.com/kevin-briand/rts_link | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `run_chicken` | home-assistant/brands#8738 | https://github.com/bkanuka/ha-run-chicken | Active, pushed 2026-09-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `run_command` | home-assistant/brands#5879 | https://github.com/xiaodong-lx/run-command | Active, pushed 2024-09-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `runelite` | home-assistant/brands#7083 | https://github.com/db1996/homeassistant_runelite | Active, pushed 2026-10-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `russound_media_player` | home-assistant/brands#8903 | https://github.com/horbye/Russound_Media_Player | Active, pushed 2026-03-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `rwfc` | home-assistant/brands#7672 | https://github.com/Bitte-ein-Git/ha_rwfc | Active, pushed 2025-09-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ryanair` | home-assistant/brands#4698 | https://github.com/jampez77/Ryanair | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ryobi_gdo` | home-assistant/brands#5090 | https://github.com/catduckgnaf/ryobi_gdo | Active, pushed 2026-10-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ryse` | home-assistant/brands#6771 | https://github.com/mohamedkallel82/ryse | Active, pushed 2026-09-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `s2j_led_driver` | home-assistant/brands#8748 | https://github.com/steves2j/LightingController | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `s3_compatible` | home-assistant/brands#7156 | https://github.com/PhantomPhoton/S3-Compatible | Active, pushed 2026-09-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `s3_size` | home-assistant/brands#4280 | https://github.com/hokiebrian/s3_size | Active, pushed 2024-07-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `saas` | home-assistant/brands#6899 | https://github.com/sudoxnym/saas | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sabiana` | home-assistant/brands#7510 | https://github.com/CMGeorge/homeassistant_sabiana_smart_energy | Active, pushed 2026-10-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sabiana_energy_smart` | home-assistant/brands#7653 | https://github.com/CMGeorge/homeassistant_sabiana_smart_energy | Active, pushed 2026-10-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sabiana_hvac` | home-assistant/brands#7993 | https://github.com/edoeel/homeassistant-sabiana-hvac | Active, pushed 2026-10-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `safeline_plug` | home-assistant/brands#6846 | https://github.com/nkdns/safeline_plug | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `safera` | home-assistant/brands#9305 | https://github.com/magicus/ha-safera | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sagecoffee` | home-assistant/brands#9197 | https://github.com/simonjgreen/sageha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `saguenay_collection` | home-assistant/brands#6078 | https://github.com/DavidBilodeau1/saguenay_collection | Active, pushed 2026-09-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `saintdujour` | home-assistant/brands#7395 | https://github.com/XAV59213/saintdujour* | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `saj_esolar` | home-assistant/brands#2773 | https://github.com/djansen1987/brands | Active, pushed 2021-09-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `saj_esolar_air` | home-assistant/brands#3915 | https://github.com/faanskit/ha-esolar | Active, pushed 2024-11-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `saj_h1_mqtt` | home-assistant/brands#6555 | https://github.com/h3llrais3r/ha-saj-h1-mqtt | Active, pushed 2026-06-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `saj_h2_modbus` | home-assistant/brands#7005 | https://github.com/stanus74/home-assistant-saj-h2-modbus | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `samaraenergo` | home-assistant/brands#6255 | https://github.com/dudanov/hassio-samaraenergo | Active, pushed 2024-12-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `samsungmdc` | home-assistant/brands#3080 | https://github.com/matthijs2704/homeassistant-samsungmdc | Active, pushed 2026-06-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `samsungtv_mdc` | home-assistant/brands#9003 | https://github.com/gethnet/ha-samsungtv-mdc | Active, pushed 2026-07-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `samsungwam` | home-assistant/brands#5761 | https://github.com/Strixx76/samsungwam | Active, pushed 2026-10-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `samsvolleyball` | home-assistant/brands#4906 | https://github.com/kloemi/ha-sams-volleyball | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `samuelre_teamspeak` | home-assistant/brands#8317 | https://github.com/SamuelReithmeir/hacs_teamspeak](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sandman_doppler` | home-assistant/brands#3748 | https://github.com/pa-innovation/ha-doppler | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sapi` | home-assistant/brands#6389 | https://github.com/ajaysinghnp/ha-sapi | Active, pushed 2025-10-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sat` | home-assistant/brands#4356 | https://github.com/Alexwijn/SAT | Active, pushed 2026-03-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `saures_home` | home-assistant/brands#8387 | https://github.com/vitaliisergin/saures-homeassistant | Active, pushed 2026-01-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sauresha` | home-assistant/brands#3450 | https://github.com/volshebniks/sauresha | Active, pushed 2026-09-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `savant_energy` | home-assistant/brands#7053 | https://github.com/bballdavis/HASS-Savant-Energy | Active, pushed 2026-09-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `savantaudio` | home-assistant/brands#3671 | https://github.com/akropp/savantaudio-homeassistant | Active, pushed 2026-01-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `save_eco_bot` | home-assistant/brands#8281 | https://github.com/TetianaKolpakova/save_eco_bot_air_quality | Active, pushed 2026-07-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `saviia` | home-assistant/brands#6997 | https://github.com/raxlab/saviia](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sax_battery` | home-assistant/brands#6605 | https://github.com/matfroh/sax_battery_ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `saxo_portfolio` | home-assistant/brands#7928 | https://github.com/steynovich/ha-saxo-portfolio](url | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sberdevices` | home-assistant/brands#5453 | https://github.com/altfoxie/ha-sberdevices | Active, pushed 2026-07-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `scenario` | home-assistant/brands#5663 | https://github.com/carlosmazzei/scenario | Active, pushed 2026-10-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `scene_plus` | home-assistant/brands#9051 | https://github.com/smartqasa/scene-plus | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `scene_presets` | home-assistant/brands#5142 | https://github.com/Hypfer/hass-scene_presets | Active, pushed 2026-08-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `scenery` | home-assistant/brands#7188 | https://github.com/j9brown/scenery | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `schedule_modes` | home-assistant/brands#8889 | https://github.com/onoffautomations/schedule_mode | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `schedule_state` | home-assistant/brands#2946 | https://github.com/aneeshd/schedule_state | Active, pushed 2026-02-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `scheduler` | home-assistant/brands#1795 | https://github.com/nielsfaber/scheduler-component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `schellenberg_usb` | home-assistant/brands#8346 | https://github.com/GimpArm/schellenberg_usb | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `school_holidays_ui` | home-assistant/brands#7757 | https://github.com/rt400/School-Vacation-UI | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `schulferien` | home-assistant/brands#6265 | https://github.com/Chiralistic/home-assistant-schulferien | Active, pushed 2026-09-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `schwoerer_lueftung` | home-assistant/brands#9406 | https://github.com/josa42/homeassistant-schwoerer-lueftung | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `scinan_thermostat` | home-assistant/brands#3514 | https://github.com/Skarbo/hass-scinan-thermostat | Active, pushed 2024-11-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `scout_alarm` | home-assistant/brands#4607 | https://github.com/andyalm/homeassistant-scout-alarm | Active, pushed 2025-07-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `scrypted` | home-assistant/brands#4482 | https://github.com/koush/ha_scrypted | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `scstc_bus_status` | home-assistant/brands#9161 | https://github.com/coolacid/hacs_scstc_bus_status | Active, pushed 2026-01-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sdac_elia` | home-assistant/brands#8254 | https://github.com/milanhin/sdac_elia | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sdui_timetable` | home-assistant/brands#8056 | https://github.com/ToperGamesYT/sdui_timetable | Active, pushed 2026-07-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sdvoe` | home-assistant/brands#8412 | https://github.com/switch180/RiverLink-SDVoE | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `seafile` | home-assistant/brands#3577 | https://github.com/dmamontov/hass-seafile | Active, pushed 2023-03-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `seatconnect` | home-assistant/brands#4989 | https://github.com/Farfar/homeassistant-seatconnect | Active, pushed 2024-10-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `securemtr` | home-assistant/brands#8193 | https://github.com/ha-securemtr/ha-securemtr | Active, pushed 2025-11-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `securitas` | home-assistant/brands#1638 | https://github.com/notifications/unsubscribe-auth | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `seedtime` | home-assistant/brands#9479 | https://github.com/PersephoneKarnstein/ha-seedtime | Active, pushed 2026-02-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `seeed_ha_discovery` | home-assistant/brands#8639 | https://github.com/limengdu/Seeed-Homeassistant-Discovery | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `seismoi` | home-assistant/brands#6500 | https://github.com/bkbilly/Seismoi | Active, pushed 2026-08-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `seiverkot` | home-assistant/brands#3834 | https://github.com/evantaur/seiverkot-consumption | Active, pushed 2023-07-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `selective_scene` | home-assistant/brands#7868 | https://github.com/jpaju/selective-scene | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sencor` | home-assistant/brands#4288 | https://github.com/MichalTichy/ha-SencorRobotics | Active, pushed 2025-08-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sensecap` | home-assistant/brands#4774 | https://github.com/Seeed-Solution/home-assistant-SenseCAP | Active, pushed 2025-11-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sensecraft` | home-assistant/brands#4802 | https://github.com/Seeed-Solution/SenseCraft-HomeAssistant | Active, pushed 2025-05-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sensorthings` | home-assistant/brands#4325 | https://github.com/opengeospatial/developer-events | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `senziio` | home-assistant/brands#5756 | https://github.com/senziio-admin/hacs-senziio-integration | Active, pushed 2025-08-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `seoul_bike` | home-assistant/brands#9105 | https://github.com/1bobby-git/HA-Seoul-Bike | Active, pushed 2026-09-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `serac` | home-assistant/brands#9547 | https://github.com/atacamalabs/ha-serac | Active, pushed 2026-02-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `serbian_transport` | home-assistant/brands#6510 | https://github.com/dzarlax/HASS-Serbian-transport | Active, pushed 2025-09-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `series_complete` | home-assistant/brands#9634 | https://github.com/akustikrausch/series-complete-for-plex | Active, pushed 2026-07-10 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `seven` | home-assistant/brands#3499 | https://github.com/seven-io/home-assistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `severn_trent` | home-assistant/brands#8092 | https://github.com/xpenno255/ha_severn_trent | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `seymour` | home-assistant/brands#6109 | https://github.com/johncarey70/seymour | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sfpuc` | home-assistant/brands#8431 | https://github.com/caplaz/hass-sfpuc | Active, pushed 2026-01-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sg_150` | home-assistant/brands#8853 | https://github.com/FWeinb/ha-sg-150 | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sgcc_pro` | home-assistant/brands#5980 | https://github.com/linfenliu/sgcc_pro | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `shadeauto` | home-assistant/brands#8407 | https://github.com/kevinlester/ShadeAuto-HomeAssistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `shadow_control` | home-assistant/brands#7305 | https://github.com/starwarsfan/shadow-control | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sharesight` | home-assistant/brands#5640 | https://github.com/Poshy163/HomeAssistant-Sharesight | Active, pushed 2026-09-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `shelly_cloud2` | home-assistant/brands#8530 | https://github.com/crom1e/hassio_shelly_cloud2 | Active, pushed 2025-12-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sickgear` | home-assistant/brands#4204 | https://github.com/SickGear/SickGear | Active, pushed 2026-10-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `siedle` | home-assistant/brands#9415 | https://github.com/Kannix2005/ha_siedle_python | Active, pushed 2026-10-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sifely_cloud` | home-assistant/brands#7522 | https://github.com/kenster1965/sifely_cloud | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sigen` | home-assistant/brands#5568 | https://github.com/fbradyirl/ha-sigen | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sigma_connect_ha` | home-assistant/brands#6930 | https://github.com/phoinixgrr/sigma_connect_ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `signal_ecogaz` | home-assistant/brands#3830 | https://github.com/kamaradclimber/signal_ecogaz | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `signal_notifier` | home-assistant/brands#9144 | https://github.com/babeuloula/ha_signal_notifier | Active, pushed 2026-08-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `signalmessenger` | home-assistant/brands#2645 | https://github.com/agileek/hassio-addons | Active, pushed 2026-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `signalrgb` | home-assistant/brands#5692 | https://github.com/hyperb1iss/signalrgb-homeassistant | Active, pushed 2026-04-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sikom` | home-assistant/brands#7897 | https://github.com/Howard0000/home-assistant-sikom | Active, pushed 2026-09-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `silam_pollen` | home-assistant/brands#6716 | https://github.com/danishru/silam_pollen | Active, pushed 2026-07-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sildre` | home-assistant/brands#7740 | https://github.com/toringer/home-assistant-sildre | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `simon` | home-assistant/brands#8266 | https://github.com/jesuslg123/simon-io-ha](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `simple` | home-assistant/brands#7144 | https://github.com/lsellens/simple | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `simple_cooler_heater_pid` | home-assistant/brands#7615 | https://github.com/kriptos1970/simple_cooler_heater_pid | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `simple_inventory` | home-assistant/brands#7329 | https://github.com/blaineventurine/simple_inventory | Active, pushed 2026-08-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `simple_plant` | home-assistant/brands#6947 | https://github.com/ndesgranges/simple-plant | Active, pushed 2026-08-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `simple_uptime_monitor` | home-assistant/brands#6488 | https://github.com/LukeMitDemHut/simple_uptime_monitor | Active, pushed 2025-02-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sinope` | home-assistant/brands#6197 | https://github.com/claudegel/sinope-gt125 | Active, pushed 2026-10-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sinricpro` | home-assistant/brands#8900 | https://github.com/sinricpro/homeassistant-sinricpro | Active, pushed 2026-06-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sip_core` | home-assistant/brands#8583 | https://github.com/TECH7Fox/sip-hass-card | Active, pushed 2026-10-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sistena` | home-assistant/brands#8485 | https://github.com/vmarkovtsev/sistena_onix_ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sksvatek_sensor` | home-assistant/brands#5862 | https://github.com/LochyCZ/HomeAssistantSKSvatek | Active, pushed 2026-01-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `skybellgen` | home-assistant/brands#7704 | https://github.com/tcareyintx/skybellgen | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `skylight_local` | home-assistant/brands#9566 | https://github.com/b3cksy/skylight_lamp | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sl_unifi_stock` | home-assistant/brands#7215 | https://github.com/slsrepo/unifi-stock-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `slack_user` | home-assistant/brands#1630 | https://github.com/GeorgeSG/ha-slack-user | Active, pushed 2024-11-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sleep_mqtt` | home-assistant/brands#9597 | https://github.com/Roeli1996/ha-sleep-mqtt | Active, pushed 2026-02-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sleepme_thermostat` | home-assistant/brands#5775 | https://github.com/rsampayo/sleepme_thermostat | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sma_ennexos` | home-assistant/brands#6644 | https://github.com/shadow578/homeassistant_sma-ennexos | Active, pushed 2026-10-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sma_webbox` | home-assistant/brands#3425 | https://github.com/jpcornil-git/HA-sma | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smaev` | home-assistant/brands#4942 | https://github.com/alengwenus/ha-sma-ev-charger | Active, pushed 2026-09-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smart0183serial` | home-assistant/brands#5276 | https://github.com/SmartBoatInnovations/ha-smart0183serial | Active, pushed 2025-12-21 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smart0183tcp` | home-assistant/brands#5271 | https://github.com/SmartBoatInnovations/ha-smart0183tcp | Active, pushed 2025-11-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smart2000esp` | home-assistant/brands#5339 | https://github.com/SmartBoatInnovations/ha-smart2000esp | Active, pushed 2025-11-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smart2000usb` | home-assistant/brands#5340 | https://github.com/SmartBoatInnovations/ha-smart2000usb | Active, pushed 2026-04-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smart_anchor` | home-assistant/brands#5414 | https://github.com/SmartBoatInnovations/ha-smart-anchor | Active, pushed 2026-04-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smart_announcements` | home-assistant/brands#9157 | https://github.com/mike-nott/smart-announcements | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smart_charger` | home-assistant/brands#8247 | https://github.com/enkama/smart_charger | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smart_climate` | home-assistant/brands#9537 | https://github.com/JoshuaSeidel/smart-climate-ha | Active, pushed 2026-02-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smart_covers` | home-assistant/brands#7176 | https://github.com/eyalmichon/ha-smart-covers | Active, pushed 2025-06-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smart_maic` | home-assistant/brands#4791 | https://github.com/krasnoukhov/homeassistant-smart-maic | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smart_offset_thermostat` | home-assistant/brands#9015 | https://github.com/fabilau/hass_smart_offset_thermostat | Active, pushed 2026-10-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smart_venetian_blinds` | home-assistant/brands#9395 | https://github.com/herpaderpaldent/ha-smart-venetian-blinds | Active, pushed 2026-09-29 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smartcar` | home-assistant/brands#7009 | https://github.com/tube0013/Smartcar-HA | Active, pushed 2026-09-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smarteefi` | home-assistant/brands#6570 | https://github.com/coreembedded/smarteefi-homeassistant | Active, pushed 2026-09-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smarteefi_home_assistant` | home-assistant/brands#5444 | https://github.com/sudipta26889/smarteefi_home_assistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smartelektra` | home-assistant/brands#9529 | https://github.com/smartelektra/SmartElektra | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smarter` | home-assistant/brands#5583 | https://github.com/kbirger/ha-smarter-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smartfilterpro` | home-assistant/brands#9012 | https://github.com/smartfilterpro/Home-Assistant-Oauth | Active, pushed 2026-10-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smarthomecopilot` | home-assistant/brands#7517 | https://github.com/Valurii/SmartHomeCopilot](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smarthrt` | home-assistant/brands#9241 | https://github.com/CorentinBarban/SmartHRT | Active, pushed 2026-09-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smarti` | home-assistant/brands#5827 | https://github.com/Prosono/smarti | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smartipowerflow` | home-assistant/brands#6228 | https://github.com/Prosono/SMARTi_PowerFlow_BaseComponent | Active, pushed 2025-01-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smartme` | home-assistant/brands#5985 | https://github.com/timniklas/hacs_smart-me | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smartoilgauge` | home-assistant/brands#5040 | https://github.com/dcmeglio/homeassistant-smartoilgauge | Active, pushed 2023-12-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smartrent` | home-assistant/brands#3082 | https://github.com/ZacheryThomas/homeassistant-smartrent | Active, pushed 2026-03-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smartspaclient` | home-assistant/brands#9112 | https://github.com/jozefnad/homeassistant-smartspaclient | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smartthings_customize` | home-assistant/brands#4631 | https://github.com/oukene/smartthings_customize | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smartthingsce` | home-assistant/brands#8122 | https://github.com/DSorlov/smartthingsce | Active, pushed 2025-11-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smartvanio` | home-assistant/brands#6551 | https://github.com/Smartvan-io/smartvanio-integration | Active, pushed 2026-09-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smartwater` | home-assistant/brands#8342 | https://github.com/ankohanse/hass-smart-water](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smhi_odp` | home-assistant/brands#8905 | https://github.com/Tiimber/ha-smhi-odp | Active, pushed 2026-09-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smhi_season` | home-assistant/brands#8713 | https://github.com/droidgren/smhi_season | Active, pushed 2026-08-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smol` | home-assistant/brands#9504 | https://github.com/BottlecapDave/HomeAssistant-Smol | Active, pushed 2026-06-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smoothing_analytics_sensors` | home-assistant/brands#5913 | https://github.com/woopstar/smoothing_analytics_sensors | Active, pushed 2026-10-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `smsto` | home-assistant/brands#6376 | https://github.com/cnecrea/smsto | Active, pushed 2026-09-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `snapcast_player` | home-assistant/brands#4374 | https://github.com/s-knibbs/snapcast-ha-player | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `snmp_printer` | home-assistant/brands#8058 | https://github.com/DSorlov/snmp_printer | Active, pushed 2026-10-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `snow_montreal` | home-assistant/brands#9108 | https://github.com/manjotsc/ha-snow_montreal | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `snowtire` | home-assistant/brands#2305 | https://github.com/Limych/ha-snowtire | Active, pushed 2024-12-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sodexo` | home-assistant/brands#3493 | https://github.com/netsoft-ruidias/ha-custom-component-sodexo | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sofabaton_hub` | home-assistant/brands#8249 | https://github.com/yomonpet/ha-sofabaton-hub | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sok_battery` | home-assistant/brands#7287 | https://github.com/IAmTheMitchell/sok-ha | Active, pushed 2026-04-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sol` | home-assistant/brands#8518 | https://github.com/okkine/HA-Sol | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solakon_one` | home-assistant/brands#8546 | https://github.com/solakon-de/solakon-one-homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solamagic` | home-assistant/brands#8456 | https://github.com/Pocke01/homeassistant-solamagic | Active, pushed 2026-04-29 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solar_cube` | home-assistant/brands#8770 | https://github.com/solarcube-io/solar-cube-hacs-integration | Active, pushed 2026-10-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solar_daytopper` | home-assistant/brands#7680 | https://github.com/reinos/solar-daytopper-hacs | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solar_manager` | home-assistant/brands#6866 | https://github.com/maybetaken/Solar_Manager | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solar_manager_forecast` | home-assistant/brands#8477 | https://github.com/neuhausf/ha-solar-manager-forecast | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solar_plus_intelbras` | home-assistant/brands#6547 | https://github.com/hudsonbrendon/HA-solar-plus-intelbras | Active, pushed 2026-09-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solar_window_system` | home-assistant/brands#7761 | https://github.com/jmerifjKriwe/hass-solar-window-system | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solaredge_ev_charger_au` | home-assistant/brands#6427 | https://github.com/niktest/solaredge_ev_charger_au | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solaredge_ev_charger_us` | home-assistant/brands#9131 | https://github.com/briadelour/solaredge-evcharger-ha | Active, pushed 2026-08-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solaredge_modbus_multi` | home-assistant/brands#3415 | https://github.com/WillCodeForCats/solaredge-modbus-multi | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solarfocus` | home-assistant/brands#3463 | https://github.com/LavermanJJ/home-assistant-solarfocus | Active, pushed 2026-10-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solarguardian` | home-assistant/brands#8048 | https://github.com/CMGeorge/HomeAssistant_SolarGuardian | Active, pushed 2025-11-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solarman_api` | home-assistant/brands#7033 | https://github.com/daspilker/home-assistant-solarman-api | Active, pushed 2026-02-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solarpool_ai` | home-assistant/brands#8831 | https://github.com/pabloantonelli/solar-pool-ai | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solarweb` | home-assistant/brands#4113 | https://github.com/drc38/python-fronius-web | Active, pushed 2026-08-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solax_local_api` | home-assistant/brands#8780 | https://github.com/GeroComp/Solax-local-API | Active, pushed 2026-01-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solax_modbus` | home-assistant/brands#3180 | https://github.com/wills106/homsassistant-solax-modbus | Active, pushed 2026-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solem_bluetooth_watering_controller` | home-assistant/brands#6796 | https://github.com/hcraveiro/Home-Assistant-Solem-Bluetooth-Watering-Controller | Active, pushed 2026-01-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solem_toolkit` | home-assistant/brands#6798 | https://github.com/hcraveiro/Home-Assistant-Solem-Toolkit | Active, pushed 2026-01-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solis` | home-assistant/brands#2905 | https://github.com/hultenvp/solis-sensor | Active, pushed 2026-09-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solis_cloud` | home-assistant/brands#7117 | https://github.com/coyotxxx/solis-cloud-ha | Active, pushed 2026-10-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solis_cloud_control` | home-assistant/brands#6856 | https://github.com/mkuthan/solis-cloud-control | Active, pushed 2026-10-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solisconnect` | home-assistant/brands#6110 | https://github.com/fboundy/solisconnect | Active, pushed 2026-08-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solplanet` | home-assistant/brands#5899 | https://github.com/zbigniewmotyka/solplanet | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solstice_season` | home-assistant/brands#8618 | https://github.com/moerk-o/ha-solstice_season | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solutronic` | home-assistant/brands#8278 | https://github.com/Ralleberg/solutronic | Active, pushed 2026-10-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solvis_control` | home-assistant/brands#5334 | https://github.com/LarsK1/hass_solvis_control | Active, pushed 2026-10-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `solvis_modbus` | home-assistant/brands#5059 | https://github.com/Patrick762/hassio-solvis-modbus | Active, pushed 2025-11-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `som_energia` | home-assistant/brands#8557 | https://github.com/hectorespert/som-energia-hass | Active, pushed 2026-09-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `somafm` | home-assistant/brands#6967 | https://github.com/wolfgangs-code/hacs-somafm | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `somfy_cul` | home-assistant/brands#6165 | https://github.com/markuzzi/hacs_somfy_cul | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sonic` | home-assistant/brands#3588 | https://github.com/markvader/sonic](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sonicare_bletb` | home-assistant/brands#8375 | https://github.com/GrumpyMeow/sonicare-ble-hacs | Active, pushed 2023-07-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sonnen_batterie` | home-assistant/brands#5954 | https://github.com/weltmeyer/ha_sonnenbatterie | Active, pushed 2026-07-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sonnenbackup` | home-assistant/brands#6404 | https://github.com/MarkusBiggus/SonnenBackup | Active, pushed 2026-06-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sonoff_ihost` | home-assistant/brands#4929 | https://github.com/darkxst/ihost_indicator | Active, pushed 2023-12-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sonos_alarm` | home-assistant/brands#1649 | https://github.com/AaronDavidSchneider/SonosAlarm | Active, pushed 2021-05-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sonos_cloud` | home-assistant/brands#2870 | https://github.com/jjlawren/sonos_cloud | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sony_mesh` | home-assistant/brands#3683 | https://github.com/vwt12eh8/hassio-sony-mesh | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sonyavr` | home-assistant/brands#5565 | https://github.com/peteS-UK/sonyavr | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `soundtouchplus` | home-assistant/brands#4832 | https://github.com/thlucas1/homeassistantcomponent_soundtouchplus` | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sp110e` | home-assistant/brands#2956 | https://github.com/roslovets/SP110E-HASS | Active, pushed 2022-09-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `spaceapi_endpoint_client` | home-assistant/brands#8318 | https://github.com/q30-space/ha-spaceapi-endpoint-client | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `span_panel` | home-assistant/brands#4135 | https://github.com/galak/span-hacs | Active, pushed 2023-01-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `spanet` | home-assistant/brands#6062 | https://github.com/lloydw/hass-spanet | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sparebank1_pengerobot` | home-assistant/brands#7584 | https://github.com/remimikalsen/sparebank1_pengerobot | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `spcbridge` | home-assistant/brands#5771 | https://github.com/orgs/Lundix-IT | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `speedport` | home-assistant/brands#4758 | https://github.com/Andre0512/speedport | Active, pushed 2024-08-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `speedtest_rt_ru` | home-assistant/brands#8389 | https://github.com/soulripper13/speedtest_rt_ru | Active, pushed 2026-10-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `speidel` | home-assistant/brands#5461 | https://github.com/omphteliba/ha-speidel-braumeister | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `spintouch` | home-assistant/brands#8593 | https://github.com/joyfulhouse/lamotte-spintouch | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `spock_energy_control` | home-assistant/brands#8296 | https://github.com/Spock-p2p/ha-hacs-energy-control | Active, pushed 2025-11-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `spoolman` | home-assistant/brands#4728 | https://github.com/Disane87/spoolman-homeassistant | Active, pushed 2026-10-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sporet` | home-assistant/brands#8622 | https://github.com/toringer/home-assistant-sporet | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sporza_calendar` | home-assistant/brands#7400 | https://github.com/TimBossuyt/homeassistant-sporza | Active, pushed 2026-02-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `spot_electricity_cz` | home-assistant/brands#8141 | https://github.com/czechdude/spot_electricity_cz | Active, pushed 2025-10-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `spotcast` | home-assistant/brands#6137 | https://github.com/fondberg/spotcast | Active, pushed 2026-07-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `spotify_voice_assistant` | home-assistant/brands#8581 | https://github.com/cauld/spotify-voice-assistant | Active, pushed 2025-12-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `spypoint` | home-assistant/brands#6063 | https://github.com/happydev-ca/spypoint-home-assistant | Active, pushed 2026-09-10 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `spzb0001_thermostat` | home-assistant/brands#2316 | https://github.com/WolfRevo/climate.spzb0001_thermostat | Active, pushed 2023-02-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sql_request` | home-assistant/brands#7104 | https://github.com/hestiia-engineering/sql_request | Active, pushed 2025-08-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `srf_weather` | home-assistant/brands#3329 | https://github.com/siku2/hass-srf-weather | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ssh` | home-assistant/brands#4553 | https://github.com/zhbjsh/homeassistant-ssh | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ssh_command` | home-assistant/brands#9283 | https://github.com/gensyn/ssh_command | Active, pushed 2026-10-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `stadtreinigung_hamburg` | home-assistant/brands#1562 | https://github.com/custom-components/sensor.stadtreinigung_hamburg | Active, pushed 2026-06-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `star_rennes` | home-assistant/brands#6853 | https://github.com/Jems22/ha_star_rennes](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `start_time` | home-assistant/brands#2574 | https://github.com/AlexxIT/StartTime | Active, pushed 2025-08-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `state_grid` | home-assistant/brands#5428 | https://github.com/hass-box/state-grid | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `state_grid_info` | home-assistant/brands#7753 | https://github.com/xiaoshi930/state_grid_info | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `state_machine` | home-assistant/brands#6106 | https://github.com/edalquist/ha_state_machine | Active, pushed 2026-02-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `state_updated` | home-assistant/brands#5359 | https://github.com/kgn3400/state_updated | Active, pushed 2026-01-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `state_webhook` | home-assistant/brands#6260 | https://github.com/bramstroker/homeassistant-state-webhook | Active, pushed 2025-12-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `steam_wishlist` | home-assistant/brands#1637 | https://github.com/boralyl/steam-wishlist | Active, pushed 2026-02-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `stiebel_eltron_http` | home-assistant/brands#7909 | https://github.com/pmq/stiebel-eltron-http | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `stiebel_eltron_isg` | home-assistant/brands#4223 | https://github.com/pail23/stiebel_eltron_isg_component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `stokercloud_write` | home-assistant/brands#8376 | https://github.com/chaichuk/stokercloud_write | Active, pushed 2025-11-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `stone_connect` | home-assistant/brands#7367 | https://github.com/tomasbedrich/home-assistant-stone-connect | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `stopfinder` | home-assistant/brands#9439 | https://github.com/dakahler/ha_stopfinder | Active, pushed 2026-02-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `storj` | home-assistant/brands#6598 | https://github.com/bkjohnson/homeassistant-storj-integration | Active, pushed 2025-11-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `storj_node_statistics` | home-assistant/brands#8044 | https://github.com/ledimestari/homeassistant-storj-integration | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `stream_assist` | home-assistant/brands#5307 | https://github.com/AlexxIT/StreamAssist | Active, pushed 2024-07-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `streamdeck` | home-assistant/brands#4259 | https://github.com/Patrick762/ha-streamdeck-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `streda` | home-assistant/brands#9049 | https://github.com/Brambovich/streda-home-assistant | Active, pushed 2026-01-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `stremio` | home-assistant/brands#8792 | https://github.com/AboveColin/stremio-ha | Active, pushed 2026-10-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `stromer` | home-assistant/brands#4247 | https://github.com/CoMPaTech/stromer | Active, pushed 2026-10-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `stromgedacht` | home-assistant/brands#8925 | https://github.com/V4n1X/ha_stromgedacht | Active, pushed 2026-10-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `stromligning` | home-assistant/brands#5978 | https://github.com/mtrab/stromligning | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `studer_xcom` | home-assistant/brands#5794 | https://github.com/ankohanse/hass-studer-xcom | Active, pushed 2026-10-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `subscription_helper` | home-assistant/brands#9067 | https://github.com/mariobrosch/subscription-helper | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sumsg_smart` | home-assistant/brands#6208 | https://github.com/sumsg/sumsg_smart | Active, pushed 2025-11-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sun2` | home-assistant/brands#4199 | https://github.com/pnbruckner/ha-sun2 | Active, pushed 2026-01-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `suncloud_monitor` | home-assistant/brands#7113 | https://github.com/jsanchezdelvillar/Suncloud_monitor | Active, pushed 2025-09-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sunflow` | home-assistant/brands#9224 | https://github.com/robotnikz/sunflow-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sungrow` | home-assistant/brands#9194 | https://github.com/KRoperUK/sungrow-hass | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sunherone` | home-assistant/brands#8708 | https://github.com/maybetaken/SunHeroNE | Active, pushed 2026-04-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sunlight_intensity` | home-assistant/brands#7447 | https://github.com/urbanframe/sunlight-intensity | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sunlight_visualizer` | home-assistant/brands#9534 | https://github.com/NoUsername10/Sunlight_Visualizer | Active, pushed 2026-10-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sunlit` | home-assistant/brands#7910 | https://github.com/cedricziel/ha-sunlit | Active, pushed 2026-10-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sunlogin` | home-assistant/brands#5579 | https://github.com/cx3Y/sunlogin | Active, pushed 2025-09-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sunology` | home-assistant/brands#7831 | https://github.com/sunology-tech/sunology-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sunology_vault` | home-assistant/brands#8850 | https://github.com/serahug/sunology-vault-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sunpower` | home-assistant/brands#3134 | https://github.com/krbaker/hass-sunpower | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sunpower_maxeon` | home-assistant/brands#7017 | https://github.com/geims12/sunpower_maxeon | Active, pushed 2026-07-21 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sunricher_azoula` | home-assistant/brands#8408 | https://github.com/maginawin/ha-azoula-smart | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sunsa` | home-assistant/brands#5258 | https://github.com/r01k/ha_sunsa | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sunstrong_pvs` | home-assistant/brands#7479 | https://github.com/SunStrong-Management/pvs-hass | Active, pushed 2026-04-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `sunthalpy` | home-assistant/brands#8287 | https://github.com/rogorvi/sunthalpy | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `supabase_export` | home-assistant/brands#4169 | https://github.com/timmo001/homeassistant-integration-supabase-export | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `super_soco_custom` | home-assistant/brands#3379 | https://github.com/drakhart/ha-super-soco-custom | Active, pushed 2026-09-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `superior_plus_propane` | home-assistant/brands#7213 | https://github.com/connorgallopo/Superior-Plus-Propane | Active, pushed 2026-05-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `superior_propane` | home-assistant/brands#8165 | https://github.com/plmilord/Hass.io-custom-component-superior-propane | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `surepcha` | home-assistant/brands#8052 | https://github.com/FredrikM97/hass-surepetcare | Active, pushed 2026-10-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `surf_forecast` | home-assistant/brands#7701 | https://github.com/victorigualada/surf-forecast-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `svt_play` | home-assistant/brands#2848 | https://github.com/lindell/home-assistant-svt-play | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `swegon` | home-assistant/brands#5106 | https://github.com/eriknn/ha-swegon | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `swidget` | home-assistant/brands#9000 | https://github.com/michaelkkehoe/haswidget2 | Active, pushed 2025-01-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `swift_command` | home-assistant/brands#7812 | https://github.com/holdestmade/swift_command | Active, pushed 2026-07-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `swiss_pollen` | home-assistant/brands#7272 | https://github.com/frimtec/hass-swiss-pollen | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `swissweather` | home-assistant/brands#5650 | https://github.com/izacus/hass-swissweather | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `switch_fan` | home-assistant/brands#6124 | https://github.com/evilmarty/switch_fan | Active, pushed 2026-07-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `switch_port_card_pro` | home-assistant/brands#8587 | https://github.com/partach/switch_port_card_pro | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `switch_timer` | home-assistant/brands#6028 | https://github.com/gh0stblizz4rd/ha-switch-timer | Active, pushed 2025-08-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `synapse` | home-assistant/brands#5615 | https://github.com/Digital-Alchemy-TS/synapse-extension | Active, pushed 2026-03-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `syncthing_plus` | home-assistant/brands#7646 | https://github.com/JuliaSoriaSmith/Syncthing-Plus | Active, pushed 2025-08-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `synology_download_station` | home-assistant/brands#8305 | https://github.com/barto95100/synology-download-station | Active, pushed 2026-02-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `synology_router` | home-assistant/brands#7629 | https://github.com/Bryzgalin/synology-srm-ha | Active, pushed 2025-08-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `synology_tasks` | home-assistant/brands#7922 | https://github.com/bbckr/hacs-synology-tasks | Active, pushed 2026-02-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `syr_connect` | home-assistant/brands#9074 | https://github.com/alexhass/syr_connect | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `syr_oceanic_ilex_connect` | home-assistant/brands#9483 | https://github.com/timg83/hass-syr-oceanic-ilex-connect | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `syslog_receiver` | home-assistant/brands#7076 | https://github.com/zollak/homeassistant-syslog-receiver | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `systemair_modbus` | home-assistant/brands#9433 | https://github.com/Howard0000/home-assistant-systemair-modbus | Active, pushed 2026-09-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `t_skylt` | home-assistant/brands#8935 | https://github.com/jnbp/t-skylt | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `t_smart` | home-assistant/brands#4346 | https://github.com/pdw-mb/tsmart_ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tada` | home-assistant/brands#8816 | https://github.com/sginestrini/home-assistant-tada-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tadiy` | home-assistant/brands#9275 | https://github.com/Atsharim/TaDIY | Active, pushed 2026-05-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tado_assist` | home-assistant/brands#6773 | https://github.com/array81/tado-assist | Active, pushed 2026-06-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tado_hijack` | home-assistant/brands#9222 | https://github.com/banter240/tado_hijack | Active, pushed 2026-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tado_local` | home-assistant/brands#9013 | https://github.com/array81/tado-local | Active, pushed 2026-06-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tado_x` | home-assistant/brands#8987 | https://github.com/exabird/ha-tado-x | Active, pushed 2026-02-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tagesschau` | home-assistant/brands#6302 | https://github.com/timniklas/hass-tagesschau | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `taipit` | home-assistant/brands#4179 | https://github.com/lizardsystems/hacs-taipit | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `taipower_bimonthly_cost` | home-assistant/brands#3325 | https://github.com/cnstudio/Taipower-Bimonthly-Energy-Cost-homeassistant | Active, pushed 2024-09-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `taiwan_aqm` | home-assistant/brands#6383 | https://github.com/kukuxx/HA-TaiwanAQM | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `taiwan_weather` | home-assistant/brands#6307 | https://github.com/Vinson1014/Taiwan-Weather | Active, pushed 2026-06-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tally_list` | home-assistant/brands#7597 | https://github.com/Spider19996/ha-tally-list | Active, pushed 2026-09-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tankfill` | home-assistant/brands#9560 | https://github.com/paulspringett/ha-tankfill | Active, pushed 2026-02-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tankille` | home-assistant/brands#4905 | https://github.com/jesmak/tankille | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tapo` | home-assistant/brands#2851 | https://github.com/petretiandrea/home-assistant-tapo-p100 | Active, pushed 2026-08-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tapo_control` | home-assistant/brands#1888 | https://github.com/JurajNyiri/HomeAssistant-Tapo-Control | Active, pushed 2026-10-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `target_timeframes` | home-assistant/brands#6957 | https://github.com/bottlecapdave/homeassistant-targettimeframes | Active, pushed 2026-05-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tarif_edf` | home-assistant/brands#6600 | https://github.com/delphiki/hass-tarif-edf | Active, pushed 2025-03-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tartunlp_tts` | home-assistant/brands#6027 | https://github.com/tsebukas/tartunlp_tts | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tas_fuel_prices` | home-assistant/brands#7523 | https://github.com/ziogref/TAS-Fuel-HA-Intergration | Active, pushed 2026-04-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tascam_bdmp4k` | home-assistant/brands#9160 | https://github.com/Beormund/tascam-bdmp4k | Active, pushed 2026-02-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `task_tracker` | home-assistant/brands#8836 | https://github.com/gensyn/task_tracker | Active, pushed 2026-10-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tasmota_irhvac` | home-assistant/brands#5512 | https://github.com/hristo-atanasov/Tasmota-IRHVAC | Active, pushed 2026-06-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tasmota_update` | home-assistant/brands#6626 | https://github.com/ahaghshenas/tasmota_update | Active, pushed 2026-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tattelecom_intercom` | home-assistant/brands#3627 | https://github.com/dmamontov/hass-tattelecom-intercom | Active, pushed 2023-09-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `taubenschiesser` | home-assistant/brands#8169 | https://github.com/fabibo89/taubenschiesser-HA | Active, pushed 2026-10-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tauron_amiplus` | home-assistant/brands#2405 | https://github.com/PiotrMachowski/Home-Assistant-custom-components-Tauron-AMIplus | Active, pushed 2026-05-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tautulli_active_streams` | home-assistant/brands#6657 | https://github.com/Richardvaio/Tautulli_Active_Streams | Active, pushed 2026-09-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `taylor_grill` | home-assistant/brands#8914 | https://github.com/death2all110/ha-taylorgrill | Active, pushed 2026-01-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tbm_horaires` | home-assistant/brands#7887 | https://github.com/kpagnat/tbm_horaires | Active, pushed 2025-09-29 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tbz48_smart_thermostat` | home-assistant/brands#8074 | https://github.com/RockDad/GC-TBZ48-Thermostat-Scheduler | Active, pushed 2025-10-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tc20e` | home-assistant/brands#5083 | https://github.com/jerhaag/tc20e | Active, pushed 2026-09-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tcl_home_unofficial` | home-assistant/brands#7385 | https://github.com/nemesa/ha-tcl-home-unofficial-integration | Active, pushed 2026-05-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tcp_client` | home-assistant/brands#5030 | https://github.com/oukene/tcp_client | Active, pushed 2025-11-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tdarr` | home-assistant/brands#4004 | https://github.com/itchannel/tdarr_ha | Active, pushed 2026-07-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tdbu_blind_card` | home-assistant/brands#7573 | https://github.com/WackeySSL/tdbu-blind-card | Active, pushed 2025-12-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `teamtracker` | home-assistant/brands#3675 | https://github.com/vasqued2/ha-teamtracker | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tec_heatpump_modbus` | home-assistant/brands#8168 | https://github.com/stroeks3/tec_heatpump_modbus | Active, pushed 2026-10-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `technitiumdns` | home-assistant/brands#5604 | https://github.com/Amateur-God/home-assistant-technitiumdns | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `techtime_nws_alerts` | home-assistant/brands#6745 | https://github.com/TechTimeGuy/techtime_nws_alerts | Active, pushed 2025-03-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tecnosystemi` | home-assistant/brands#7574 | https://github.com/robol/tecnosystemi | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tecomat_foxtrot` | home-assistant/brands#9420 | https://github.com/iqhouse/tecomat-foxtrot-hass | Active, pushed 2026-10-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tedee_ble` | home-assistant/brands#9619 | https://github.com/meltingice1337/tedee_ble | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `teison_ct_clamp_hassio` | home-assistant/brands#8727 | https://github.com/[volski/teison_ct_clamp_hassio](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tekmar_482` | home-assistant/brands#3409 | https://github.com/WillCodeForCats/tekmar-482 | Active, pushed 2026-08-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tekniska_verken_garbage` | home-assistant/brands#4248 | https://github.com/custom-components/sensor.tekniska_verken_garbage | Active, pushed 2025-09-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `teknix` | home-assistant/brands#8199 | https://github.com/yaro-tkachenko/ha-teknix | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `teleco_daisy` | home-assistant/brands#7535 | https://github.com/andreasnuesslein/hass_teleco_daisy | Active, pushed 2026-10-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `telegram_auto_responder` | home-assistant/brands#7096 | https://github.com/alexanderznamensky/Telegram-Auto-Responder | Active, pushed 2026-05-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `telegram_client` | home-assistant/brands#5830 | https://github.com/lufton/ha_telegram_client | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `telegram_voip` | home-assistant/brands#9481 | https://github.com/Sanji78/telegram_voip | Active, pushed 2026-03-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `telenet` | home-assistant/brands#4237 | https://github.com/geertmeersman/telenet | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tempest` | home-assistant/brands#7031 | https://github.com/julianbow/TempestHomeAssistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `template_media_player` | home-assistant/brands#6059 | https://github.com/EuleMitKeule/template_media_player | Active, pushed 2026-09-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tempo` | home-assistant/brands#8653 | https://github.com/chrisbansart/ha_tempo | Active, pushed 2026-01-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tempo_rte_forecast` | home-assistant/brands#9532 | https://github.com/yohanim/ha_tempo](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tempofit` | home-assistant/brands#6286 | https://github.com/Lash-L/tempofit | Active, pushed 2025-01-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tencent_commute` | home-assistant/brands#8479 | https://github.com/xiaoshi930/tencent_commute | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tencentcloud_asr` | home-assistant/brands#7081 | https://github.com/chliny/hass-tencentcloud-asr | Active, pushed 2026-07-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tenda_tracker` | home-assistant/brands#3131 | https://github.com/sakowicz/home-assistant-tenda-tracker | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tennet_balance` | home-assistant/brands#9047 | https://github.com/aritmeester/tennet_balance | Active, pushed 2026-08-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `termoweb` | home-assistant/brands#7650 | https://github.com/ha-termoweb/ha-termoweb | Active, pushed 2026-10-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `terneo` | home-assistant/brands#4787 | https://github.com/ishikht/ha-terneo-integration | Active, pushed 2025-01-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `terramow` | home-assistant/brands#6620 | https://github.com/TerraMow/TerraMowHA | Active, pushed 2026-10-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tesira_ttp` | home-assistant/brands#8965 | https://github.com/bxthomas/tesira_ttp | Active, pushed 2026-01-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tesla_serve_key` | home-assistant/brands#9646 | https://github.com/JCalvi/tesla_serve_key | Active, pushed 2026-08-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tesmart` | home-assistant/brands#5454 | https://github.com/krohrbaugh/tesmart-homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tesou` | home-assistant/brands#6471 | https://github.com/nicolaspernoud/tesou | Active, pushed 2026-09-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tesy` | home-assistant/brands#4921 | https://github.com/krasnoukhov/homeassistant-tesy | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tetraconnect` | home-assistant/brands#7473 | https://github.com/moehrem/tetraconnect | Active, pushed 2026-02-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `textbee` | home-assistant/brands#8886 | https://github.com/onoffautomations/home-assistant-textbee | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tgtg` | home-assistant/brands#2899 | https://github.com/Chouffy/home_assistant_tgtg | Active, pushed 2026-10-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `thai_easy_pass` | home-assistant/brands#4849 | https://github.com/saxel/ha-thai-easy-pass | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `thames_water` | home-assistant/brands#6855 | https://github.com/ale770/ha-thames-water | Active, pushed 2026-05-29 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `thegymgroup` | home-assistant/brands#6315 | https://github.com/davidcollins001/thegymgroup | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `themo` | home-assistant/brands#5971 | https://github.com/JonneDatanen/homeassistant-pythemo | Active, pushed 2026-05-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `themodernmilkman` | home-assistant/brands#5952 | https://github.com/jampez77/TheModernMilkman | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `thermal_vision` | home-assistant/brands#2656 | https://github.com/TheRealWaldo/thermal | Active, pushed 2026-09-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `thermex_api` | home-assistant/brands#7403 | https://github.com/hsk-dk/home-assistant-thermex | Active, pushed 2026-06-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `thermomaven` | home-assistant/brands#8157 | https://github.com/djiesr/ThermoMaven-ha | Active, pushed 2026-03-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `thermostat_proxy` | home-assistant/brands#8414 | https://github.com/jianyu-li/thermostat-proxy | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `thermostat_scheduler` | home-assistant/brands#7187 | https://github.com/briodan/Thermostat_scheduler | Active, pushed 2026-06-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `thermostat_setback` | home-assistant/brands#7901 | https://github.com/toringer/home-assistant-thermostat-setback | Active, pushed 2026-02-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `thermostat_timeline` | home-assistant/brands#8120 | https://github.com/qlerup/thermostat-pro-timeline-sync | Active, pushed 2026-08-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `thermoworks_cloud` | home-assistant/brands#6323 | https://github.com/a2hill/ha-thermoworks-cloud | Active, pushed 2026-10-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `thermozona` | home-assistant/brands#8027 | https://github.com/japetheape/thermozona | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `thessla_green` | home-assistant/brands#6851 | https://github.com/aLAN-LDZ/ThesslaGreen_HA | Active, pushed 2026-07-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `thingwala_geyserwala` | home-assistant/brands#5945 | https://github.com/thingwala/geyserwala-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tholz` | home-assistant/brands#7923 | https://github.com/felippepuhle/tholz-hass-integration | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `thz` | home-assistant/brands#9065 | https://github.com/bigbadoooff/thz | Active, pushed 2026-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tianqi` | home-assistant/brands#4659 | https://github.com/hasscc/tianqi | Active, pushed 2026-07-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tibber_ev` | home-assistant/brands#4910 | https://github.com/leeyuentuen/tibber_ev | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tibber_extended` | home-assistant/brands#8369 | https://github.com/misterboe/tibber-extended | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tibber_graph` | home-assistant/brands#8206 | https://github.com/stefanes/tibber-graph | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tibber_websocket` | home-assistant/brands#8017 | https://github.com/foto-andreas/ha_tibber_websocket | Active, pushed 2025-09-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ticktick_todo` | home-assistant/brands#6096 | https://github.com/konikvranik/hacs_ticktick | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tidbytassistant` | home-assistant/brands#5871 | https://github.com/savdagod/tidbytassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tier` | home-assistant/brands#4517 | https://github.com/owenvoke/hass-tier | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tigo` | home-assistant/brands#5607 | https://github.com/mletenay/home-assistant-tigo | Active, pushed 2026-03-31 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tigo_cloud` | home-assistant/brands#8536 | https://github.com/MartinStoffel/tigo_cloud | Active, pushed 2025-11-29 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tiko` | home-assistant/brands#7170 | https://github.com/Maxou44/ha-tiko-component | Active, pushed 2025-10-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `time_off` | home-assistant/brands#9327 | https://github.com/sfox38/time_off | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `timer_24h` | home-assistant/brands#8663 | https://github.com/davidss20/home-assistant-24h-timer-integration | Active, pushed 2026-09-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tineco` | home-assistant/brands#9285 | https://github.com/wheeller123/Tineco-HACS-Integration | Active, pushed 2026-10-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tion` | home-assistant/brands#5646 | https://github.com/airens/tion_home_assistant | Active, pushed 2024-10-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tirelinc` | home-assistant/brands#5459 | https://github.com/k3vmcd/ha-tirelinc | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tl` | home-assistant/brands#4327 | https://github.com/Darkdragon14/Home-Assistant-TL | Active, pushed 2023-05-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tmobile_home_internet` | home-assistant/brands#7537 | https://github.com/EdLeckert/ha-tmobilehome | Active, pushed 2025-12-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tnb_calculator` | home-assistant/brands#8059 | https://github.com/salihinsaealal/home-assistant-tnb-calculator | Active, pushed 2026-07-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tobi` | home-assistant/brands#5252 | https://github.com/NinDTendo/tobi | Active, pushed 2024-05-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `togg` | home-assistant/brands#5986 | https://github.com/Riscue/ha-togg | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `toggl_track` | home-assistant/brands#5023 | https://github.com/kquinsland/ha-toggl-track | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tokit_cooker` | home-assistant/brands#5828 | https://github.com/oooohhoo/tokit_cooker | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tomtom_travel_time` | home-assistant/brands#7687 | https://github.com/golles/ha-tomtom-travel-time | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tor_check` | home-assistant/brands#4925 | https://github.com/Limych/ha-tor_check | Active, pushed 2024-12-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `torn` | home-assistant/brands#8923 | https://github.com/xlemmingx/ha-torn | Active, pushed 2026-05-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tornado` | home-assistant/brands#7486 | https://github.com/romfreiman/tornado-aircon-custom-component | Active, pushed 2026-09-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `torque_logger_2025` | home-assistant/brands#7859 | https://github.com/Marlboro62/homeassistant | Active, pushed 2025-10-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `torque_pro` | home-assistant/brands#7931 | https://github.com/Marlboro62/Torque-Lite-Pro | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `toshiba_ac` | home-assistant/brands#2774 | https://github.com/h4de5/home-assistant-toshiba_ac | Active, pushed 2026-10-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tovala` | home-assistant/brands#8348 | https://github.com/InfoSecured/ha-tovala | Active, pushed 2026-01-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `toya_decoder` | home-assistant/brands#9083 | https://github.com/wielorzeczownik/ha-toya-decoder | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `toyota` | home-assistant/brands#2350 | https://github.com/DurgNomis-drol/ha_toyota | Active, pushed 2025-12-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `toyota_na` | home-assistant/brands#3033 | https://github.com/widewing/ha-toyota-na | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tper_tracker` | home-assistant/brands#7374 | https://github.com/ddrimus/ha-tper-tracker | Active, pushed 2026-08-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tplink_cloud` | home-assistant/brands#7814 | https://github.com/iluvdata/tplink_cloud | Active, pushed 2026-10-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tplink_deco` | home-assistant/brands#3028 | https://github.com/amosyuen/ha-tplink-deco | Active, pushed 2026-10-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tplink_easy_smart` | home-assistant/brands#9586 | https://github.com/JCalvi/hass_tplink_easy_smart | Active, pushed 2026-07-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tplink_easysmartswitch` | home-assistant/brands#6954 | https://github.com/Aohzan/hass-tplink-easysmartswitch | Active, pushed 2025-04-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tplink_ess` | home-assistant/brands#4098 | https://github.com/lyricnz/tplink_ess | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tplink_ipc` | home-assistant/brands#8005 | https://github.com/bingooo/hass-tplink-ipc | Active, pushed 2026-08-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tplink_ipc_control` | home-assistant/brands#5585 | https://github.com/xiaodong-lx/tplink-ipc-control | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tplink_ipc_implement` | home-assistant/brands#5979 | https://github.com/iapYang/tplink_ipc_implement | Active, pushed 2026-05-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tplink_monitor` | home-assistant/brands#6744 | https://github.com/bairnhard/ha-tplink-monitor | Active, pushed 2026-02-21 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tplink_router` | home-assistant/brands#4919 | https://github.com/AlexandrErohin/home-assistant-tplink-router | Active, pushed 2026-10-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tplink_vigi` | home-assistant/brands#8563 | https://github.com/tanghq33/tplink_vigi | Active, pushed 2025-11-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tpms_ble` | home-assistant/brands#4191 | https://github.com/bkbilly/tpms_ble | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tr7_exalus` | home-assistant/brands#7965 | https://github.com/krystaDev/home-assistant-tr7-exalus | Active, pushed 2025-09-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `trading212` | home-assistant/brands#6864 | https://github.com/ryanbdclark/trading212 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `trading_sundays` | home-assistant/brands#9213 | https://github.com/andrzejf1994/trading-sundays | Active, pushed 2026-01-21 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `trados_cloud` | home-assistant/brands#9114 | https://github.com/RWSTimP/trados-cloud-for-home-assistant | Active, pushed 2026-01-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `traeger` | home-assistant/brands#2258 | https://github.com/sebirdman/hass_traeger | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `trafiklab` | home-assistant/brands#7642 | https://github.com/MrSjodin/HomeAssistant_Trafiklab_Integration | Active, pushed 2026-10-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `trafikmeldinger` | home-assistant/brands#6366 | https://github.com/kgn3400/trafikmeldinger | Active, pushed 2026-04-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `train_traveler` | home-assistant/brands#5515 | https://github.com/Matthyeux/train-traveler | Active, pushed 2024-06-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `trakt` | home-assistant/brands#3306 | https://github.com/custom-components/sensor.trakt | Active, pushed 2024-06-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `trannergy` | home-assistant/brands#7214 | https://github.com/vanhooijdonk/trannergy | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `trasmatech_electricity` | home-assistant/brands#6534 | https://github.com/tommyrsk/trasmatech_electricity | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `treeow` | home-assistant/brands#7401 | https://github.com/tuzkiyoung/treeow | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `trem` | home-assistant/brands#5549 | https://github.com/J1A-T13N/ha-trem | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `triad_ams` | home-assistant/brands#7930 | https://github.com/bharat/homeassistant-triad-ams | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `trinnov` | home-assistant/brands#5363 | https://github.com/binarylogic/trinnov-altitude-homeassistant | Active, pushed 2026-09-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tritius` | home-assistant/brands#6099 | https://github.com/tykovec/home-assistant-tritius | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `trmnl_dashboard` | home-assistant/brands#8601 | https://github.com/pwojtaszko/trmnl-home-assistant-plugin | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `trmnl_sensor_blaster` | home-assistant/brands#7386 | https://github.com/kleinejan/ha-trmnl-sensor-blaster | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `trmnl_weather_station` | home-assistant/brands#7185 | https://github.com/TilmanGriesel/ha_trmnl_weather_station | Active, pushed 2025-09-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tronbytassistant` | home-assistant/brands#8300 | https://github.com/tronbyt/TronbytAssistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tronity` | home-assistant/brands#4333 | https://github.com/tronity/homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `trox` | home-assistant/brands#6159 | https://github.com/eriknn/ha-trox | Active, pushed 2024-12-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `trsdm_dynamic_device_tracker` | home-assistant/brands#5715 | https://github.com/Dekadinious/trsdm_custom_device_tracker_for_home_assistant | Active, pushed 2024-07-31 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `trueachievements` | home-assistant/brands#9088 | https://github.com/dckiller51/trueachievements | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tsun` | home-assistant/brands#5608 | https://github.com/StephanU/ha-talent-monitor | Active, pushed 2026-03-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tsuryphone` | home-assistant/brands#7397 | https://github.com/Tsury/ha-tsuryphone | Active, pushed 2026-01-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tududi_hacs` | home-assistant/brands#7571 | https://github.com/C2gl/tududi_HACS | Active, pushed 2026-07-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tududi_integration` | home-assistant/brands#7682 | https://github.com/C2gl/tududi_integration | Active, pushed 2026-07-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tunnelflight` | home-assistant/brands#7088 | https://github.com/B-Hartley/tunnelflight | Active, pushed 2026-10-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `turkov` | home-assistant/brands#4394 | https://github.com/alryaz/hass-turkov | Active, pushed 2025-03-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tursib` | home-assistant/brands#8703 | https://github.com/clmun/tursib | Active, pushed 2026-01-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tuya_local_ble` | home-assistant/brands#7101 | https://github.com/alexanderznamensky/tuya_local_ble | Active, pushed 2026-07-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tuya_unsupported_sensors` | home-assistant/brands#8426 | https://github.com/kattcrazy/tuya_unsupported_sensors | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tuya_vacuum_maps` | home-assistant/brands#6056 | https://github.com/jaidenlabelle/tuya-vacuum-maps | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tv4_play` | home-assistant/brands#2853 | https://github.com/lindell/home-assistant-tv4-play | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tv_program` | home-assistant/brands#5628 | https://github.com/jerod33/Tv-Program | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tvoverlay_ui` | home-assistant/brands#9109 | https://github.com/manjotsc/ha-tvoverlay_ui | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `tw_floodsense` | home-assistant/brands#8327 | https://github.com/kukuxx/HA-TWFloodSense | Active, pushed 2026-09-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `twilio_sms_ui` | home-assistant/brands#9107 | https://github.com/manjotsc/ha-twilio_sms_ui | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `u_by_moen` | home-assistant/brands#8565 | https://github.com/InfoSecured/ha-u-by-moen | Active, pushed 2026-01-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ubee` | home-assistant/brands#2347 | https://github.com/kevinhaendel/ha-ubee | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `uber_eats` | home-assistant/brands#8081 | https://github.com/zodyking/uber-eats-order-tracker | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ubibot` | home-assistant/brands#7788 | https://github.com/Pandamonium88/Ubibot-Home-Assistant-Intergration | Active, pushed 2025-08-29 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ubiquiti_mobile` | home-assistant/brands#8154 | https://github.com/npnicholson/ubiquiti_mobile | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `udiconnect_plus` | home-assistant/brands#8969 | https://github.com/rezendeneto/udiconnect-plus-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ufh_controller` | home-assistant/brands#9396 | https://github.com/lnagel/hass-ufh-controller | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `uhomeuponor` | home-assistant/brands#3402 | https://github.com/dave-code-ruiz/uhomeuponor | Active, pushed 2026-04-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `uhppoted` | home-assistant/brands#5270 | https://github.com/uhppoted/uhppoted-app-home-assistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ui_lovelace_minimalist` | home-assistant/brands#3086 | https://github.com/UI-Lovelace-Minimalist/UI | Active, pushed 2026-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `uiot_home` | home-assistant/brands#6935 | https://github.com/uiotlink/ha_uiot_home | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `uk_bin_collection` | home-assistant/brands#4749 | https://github.com/robbrad/UKBinCollectionData | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ultra_card_pro_cloud` | home-assistant/brands#8163 | https://github.com/WJDDesigns/Ultra-Card-Pro-Cloud | Active, pushed 2026-10-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ultrahuman` | home-assistant/brands#9352 | https://github.com/anant-j/Ultrahuman_Ring_HACS | Active, pushed 2026-02-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ultrasync` | home-assistant/brands#2082 | https://github.com/caronc/ha-ultrasync | Active, pushed 2026-10-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `umbrel` | home-assistant/brands#9053 | https://github.com/Mffff4/umbrelOS-HomeAssistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `umnyeseti` | home-assistant/brands#8049 | https://github.com/DevWorkTech/ha-smartnetworks | Active, pushed 2026-09-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `unfoldedcircle` | home-assistant/brands#4823 | https://github.com/mattgruter/hass-unfoldedcircle | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `unicom_bill_info` | home-assistant/brands#7371 | https://github.com/hlhk2017/homeassistant-unicom_bill_info | Active, pushed 2025-08-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `unicom_vs010_tracker` | home-assistant/brands#5983 | https://github.com/tablebird/unicom_vs010_tracker | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `unicontrol` | home-assistant/brands#3873 | https://github.com/unisec/custom_components | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `unifi_connect` | home-assistant/brands#9624 | https://github.com/danielsza/ha-unifi-connect | Active, pushed 2026-08-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `unifi_network` | home-assistant/brands#8588 | https://github.com/wittypluck/ha-unifi-network | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `unifi_network_map` | home-assistant/brands#9119 | https://github.com/merlijntishauser/unifi-network-maps-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `unifi_network_rules` | home-assistant/brands#5878 | https://github.com/sirkirby/ha-udm-rule-manager | Active, pushed 2026-10-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `unifi_site_manager` | home-assistant/brands#6378 | https://github.com/domalab/ha-unifi-site-manager | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `universal_notifier` | home-assistant/brands#8832 | https://github.com/jumping2000/universal_notifier | Active, pushed 2026-09-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `universal_scheduler` | home-assistant/brands#9293 | https://github.com/schblondie/universal_scheduler | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `universal_thermostat` | home-assistant/brands#5295 | https://github.com/vaproloff/universalThermostat](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `universal_water_heater` | home-assistant/brands#9345 | https://github.com/PhilKloppers/universal-water-heater | Active, pushed 2026-06-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `unraid` | home-assistant/brands#5977 | https://github.com/domalab/ha-unraid](url | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `unraid_api` | home-assistant/brands#6789 | https://github.com/chris-mc1/unraid_api | Active, pushed 2026-09-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `up-bank` | home-assistant/brands#5531 | https://github.com/jay-oswald/ha-up-bank | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `up_4014_tracker` | home-assistant/brands#5850 | https://github.com/jheizer/up_4014_tracker | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `uplift_desk` | home-assistant/brands#6941 | https://github.com/Bennett-Wendorf/hass-uplift-desk | Active, pushed 2026-09-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `upnp_availability` | home-assistant/brands#3907 | https://github.com/rytilahti/homeassistant-upnp-availability | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `uponor` | home-assistant/brands#1716 | https://github.com/asev/homeassistant-uponor | Active, pushed 2024-07-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `uponorx265` | home-assistant/brands#6739 | https://github.com/dave-code-ruiz/uponorx265 | Active, pushed 2026-10-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `uptime_robot_stats` | home-assistant/brands#4366 | https://github.com/hokiebrian/uptime_robot_stats | Active, pushed 2025-10-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `urbanhello_remi` | home-assistant/brands#9146 | https://github.com/sguernion/home-assistant-brands | Active, pushed 2026-01-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `usb_relay` | home-assistant/brands#7211 | https://github.com/globoudou/home-assistant-usb-relay | Active, pushed 2025-09-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `usgs_quakes` | home-assistant/brands#7927 | https://github.com/Geek-MD/USGS_Quakes | Active, pushed 2026-09-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ute` | home-assistant/brands#4723 | https://github.com/rogsme/ute_component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `utilita` | home-assistant/brands#7248 | https://github.com/91JJ/HomeAssisstant_Utilita_Energy_Beta | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `utility_meter_next_gen` | home-assistant/brands#7303 | https://github.com/cabberley/utility_meter_evolved | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `v2c_cloud` | home-assistant/brands#8367 | https://github.com/samuelebistoletti/HomeAssistant-V2C-Cloud | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `v6_quietdrift` | home-assistant/brands#9165 | https://github.com/v6ak/v6-quietdrift | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vaca` | home-assistant/brands#7665 | https://github.com/msp1974/ViewAssist_Companion_App | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vacances_fr` | home-assistant/brands#8556 | https://github.com/lalexdotcom/ha-vacances-fr | Active, pushed 2026-04-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vacances_scolaires` | home-assistant/brands#6631 | https://github.com/Master13011/vacances-scolaire-HA | Active, pushed 2026-09-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vacasa` | home-assistant/brands#7165 | https://github.com/samspade21/vacasa-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vacuum_zones` | home-assistant/brands#7102 | https://github.com/AlexxIT/VacuumZones | Active, pushed 2026-02-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vaddio_conferenceshot` | home-assistant/brands#3079 | https://github.com/rohankapoorcom/vaddio_conferenceshot | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vaillant_plus` | home-assistant/brands#4188 | https://github.com/daxingplay/home-assistant-vaillant-plus | Active, pushed 2026-10-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vaillant_vsmart` | home-assistant/brands#3419 | https://github.com/MislavMandaric/home-assistant-vaillant-vsmart | Active, pushed 2025-10-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vaillantcloud` | home-assistant/brands#7092 | https://github.com/rmalbrecht/VaillantCloud | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vakio_atmosphere` | home-assistant/brands#4531 | https://github.com/maxmostovoy/vakio_atmosphere | Active, pushed 2025-09-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vakio_base_smart` | home-assistant/brands#4533 | https://github.com/maxmostovoy/vakio_base_smart | Active, pushed 2026-01-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vakio_kiv` | home-assistant/brands#4532 | https://github.com/maxmostovoy/vakio_kiv | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vakio_openair` | home-assistant/brands#4534 | https://github.com/maxmostovoy/vakio_openair | Active, pushed 2025-07-31 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `valetudo` | home-assistant/brands#8090 | https://github.com/Hypfer/hass-valetudo | Active, pushed 2026-08-10 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vantage` | home-assistant/brands#4460 | https://github.com/loopj/hass-vantage | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `varta_storage` | home-assistant/brands#6526 | https://github.com/Vip0r/varta_storage | Active, pushed 2025-08-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vbot_assistant` | home-assistant/brands#8597 | https://github.com/marion001/VBot_Offline_Custom_Component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vda_ir_control` | home-assistant/brands#8844 | https://github.com/vda-solutions/vda-ir-control | Active, pushed 2026-09-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `veeam_365` | home-assistant/brands#9661 | https://github.com/Cenvora/ha-veeam-365 | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `veeam_br` | home-assistant/brands#9323 | https://github.com/Cenvora/ha-veeam-br | Active, pushed 2026-10-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vehiclevue` | home-assistant/brands#6331 | https://github.com/kennethroe/vehiclevue | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vejdirektoratet_unofficial` | home-assistant/brands#9321 | https://github.com/mathiasi/homeassistant-vejdirektoratet-unofficial | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vemmio` | home-assistant/brands#8481 | https://github.com/vemmio/vemmio_home_assistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `venta` | home-assistant/brands#4674 | https://github.com/Michsior14/ha-venta | Active, pushed 2026-02-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `venta_air_humidifier` | home-assistant/brands#4609 | https://github.com/mapero/hass-venta-humidifier | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ventaxia_ha` | home-assistant/brands#7544 | https://github.com/JosyBan/ventaxia_ha | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `veolia` | home-assistant/brands#2085 | https://github.com/tetienne/veolia-custom-component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `veoovibes` | home-assistant/brands#8153 | https://github.com/mkohmaier/ha-veoovibes | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `verizon_fios` | home-assistant/brands#8579 | https://github.com/skircr115/ha-verizonFiOS | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vertiv` | home-assistant/brands#8749 | https://github.com/bennydiamond/vertiv_powerassist | Active, pushed 2026-06-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vesta_local` | home-assistant/brands#9355 | https://github.com/mphel44/vesta-local-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vevor_heater` | home-assistant/brands#8508 | https://github.com/Spettacolo83/homeassistant-vevor-heater | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vgn_departures` | home-assistant/brands#6113 | https://github.com/alex-jung/home-assistant-vgn-component | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vi_climate_devices` | home-assistant/brands#9360 | https://github.com/ignazhabibi/vi_climate_devices | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `viaris` | home-assistant/brands#4385 | https://github.com/orbis-developers/home_assistant_viaris | Active, pushed 2026-07-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vibbo` | home-assistant/brands#9457 | https://github.com/NicolasBonduel/hass-vibbo-feed | Active, pushed 2026-02-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `victoria_fire_danger` | home-assistant/brands#9368 | https://github.com/joelg12345/victoria-fire-danger | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `victron` | home-assistant/brands#3874 | https://github.com/sfstar/hass-victron | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `victron_mk3` | home-assistant/brands#5833 | https://github.com/j9brown/victron-mk3-hacs | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `victron_mqtt` | home-assistant/brands#7282 | https://github.com/tomer-w/ha-victron-mqtt | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `victron_vrm_api` | home-assistant/brands#8461 | https://github.com/jayjojayson/hass-victron-vrm-api | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `video_normalizer` | home-assistant/brands#8656 | https://github.com/Geek-MD/Video_Normalizer | Active, pushed 2026-03-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `view_assist` | home-assistant/brands#6681 | https://github.com/dinki/view_assist_integration | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `viewsonic_projector` | home-assistant/brands#6615 | https://github.com/nfeuerhelm/ha-proj-viewsonic](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vigicrues` | home-assistant/brands#5170 | https://github.com/julcollas/hass-vigicrues | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vikunja` | home-assistant/brands#6540 | https://github.com/joeShuff/vikunja-homeassistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vikunja_voice_assistant` | home-assistant/brands#8167 | https://github.com/NeoHuncho/vikunja-voice-assistant | Active, pushed 2026-05-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vilnius_air` | home-assistant/brands#9257 | https://github.com/untitledlt/ha-miesto-plauciai | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vimar` | home-assistant/brands#2569 | https://github.com/h4de5/home-assistant-vimar | Active, pushed 2026-04-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vimar_byme_plus` | home-assistant/brands#6046 | https://github.com/andreaprosseda/vimar-byme-plus-homeassistant | Active, pushed 2026-09-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `virtual` | home-assistant/brands#4881 | https://github.com/twrecked/hass-virtual | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `virtual_battery` | home-assistant/brands#6860 | https://github.com/andybochmann/ha-virtual-battery | Active, pushed 2026-10-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `virtual_gas_meter` | home-assistant/brands#9184 | https://github.com/Migz93/ha-virtual_gas_meter | Active, pushed 2026-09-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `virtual_keys` | home-assistant/brands#5573 | https://github.com/kcsoft/virtual-keys | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vitesy_shelfy` | home-assistant/brands#7780 | https://github.com/Sanji78/vitesy_shelfy | Active, pushed 2026-02-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vivohomebridge` | home-assistant/brands#8238 | https://github.com/vivo/ha_vivohomebridge | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vlaams_verkeerscentrum` | home-assistant/brands#5708 | https://github.com/studiojw/vlaams-verkeerscentrum-ha | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vmc_helty_flow` | home-assistant/brands#8575 | https://github.com/darius1907/ha_vmc_helty_flow | Active, pushed 2026-09-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `voebb` | home-assistant/brands#7036 | https://github.com/mrueg/home-assistant-voebb | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vogels_motion_mount_ble` | home-assistant/brands#8010 | https://github.com/Nailik/vogels_motion_mount_ble | Active, pushed 2026-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `voice_recorder` | home-assistant/brands#8328 | https://github.com/kukuxx/HA-Voice-Recorder-Card | Active, pushed 2026-04-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `voicevox_tts` | home-assistant/brands#6507 | https://github.com/taikun114/VOICEVOX-TTS-for-Home-Assistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `voipms_sms` | home-assistant/brands#8904 | https://github.com/cdonner/ha-voipms_sms | Active, pushed 2026-01-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `volkswagen_goconnect` | home-assistant/brands#9028 | https://github.com/amoisis/volkswagen_goconnect | Active, pushed 2026-07-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `voltalis` | home-assistant/brands#8185 | https://github.com/jdelahayes/ha-voltalis | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `volvo_cars` | home-assistant/brands#6111 | https://github.com/thomasddn/home-assistant-volvo-cars | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `volvooncall_cn` | home-assistant/brands#4639 | https://github.com/idreamshen/hass-volvooncall-cn | Active, pushed 2026-01-31 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vonage` | home-assistant/brands#9376 | https://github.com/attilaszasz/vonage-homeassistant](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `voxtaai` | home-assistant/brands#8364 | https://github.com/voxta-ai/voxta-home-assistant-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vreaulanova` | home-assistant/brands#6454 | https://github.com/cnecrea/vreaulanova | Active, pushed 2026-09-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vserver_ssh_stats` | home-assistant/brands#7802 | https://github.com/404GamerNotFound/vserver-ssh-stats | Active, pushed 2026-10-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vsmart` | home-assistant/brands#3893 | https://github.com/HateBaozi/ha-vaillant-vsmart-cn | Active, pushed 2025-01-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vss` | home-assistant/brands#2007 | https://github.com/SeraphimSerapis/HA_VSS | Active, pushed 2026-09-29 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vsslctrl` | home-assistant/brands#5555 | https://github.com/vsslctrl/integration.home-assistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vu1_dials` | home-assistant/brands#7197 | https://github.com/leoherzog/home-assistant-vu1-server | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `vzug` | home-assistant/brands#4613 | https://github.com/siku2/hass-vzug | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wafflecity` | home-assistant/brands#9468 | https://github.com/osk2/wafflecity-custom-component | Active, pushed 2026-03-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wage_calculator` | home-assistant/brands#6966 | https://github.com/kgn3400/wage_calculator | Active, pushed 2025-10-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wago_plc` | home-assistant/brands#8514 | https://github.com/edomplc/wago_plc | Active, pushed 2025-11-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wake_up_alarm` | home-assistant/brands#7476 | https://github.com/gurux13/hass-alarm | Active, pushed 2026-02-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `walkscape` | home-assistant/brands#8559 | https://github.com/cnelson-pdx/Walkscape-HA | Active, pushed 2025-11-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wallpanel_media_player` | home-assistant/brands#7938 | https://github.com/Riscue/ha-wallpanel-media-player | Active, pushed 2025-12-10 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `walutomat` | home-assistant/brands#8449 | https://github.com/Currency-One/walutomat-ha | Active, pushed 2025-11-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `warmlink` | home-assistant/brands#9173 | https://github.com/00gtw00/homeassistant_warmlink | Active, pushed 2026-01-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `warmup` | home-assistant/brands#4233 | https://github.com/ha-warmup/warmup | Active, pushed 2026-06-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `was110_8311` | home-assistant/brands#8839 | https://github.com/pentafive/8311-ha-bridge | Active, pushed 2026-03-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wasser_residuum` | home-assistant/brands#9034 | https://github.com/hoizi89/wasser_residuum | Active, pushed 2026-03-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `waste_management` | home-assistant/brands#3803 | https://github.com/dcmeglio/homeassistant-waste_management | Active, pushed 2023-02-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `waste_schedule` | home-assistant/brands#8123 | https://github.com/kjanas/homeassistant-waste-schedule | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wasteplan_trv` | home-assistant/brands#2707 | https://github.com/jonkristian/wasteplan_trv | Active, pushed 2023-06-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `watchman` | home-assistant/brands#3145 | https://github.com/dummylabs/thewatchman | Active, pushed 2026-03-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `water_monitor` | home-assistant/brands#7661 | https://github.com/markaggar/Water-Monitor | Active, pushed 2026-10-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `watercare` | home-assistant/brands#5394 | https://github.com/brunsy/ha-watercare | Active, pushed 2026-01-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `waterco` | home-assistant/brands#8155 | https://github.com/brezlord/hass-waterco-electrochlor | Active, pushed 2026-09-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `watercryst_biocat` | home-assistant/brands#6757 | https://github.com/route662/home-assistant-watercryst-biocat | Active, pushed 2025-04-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `waterguru` | home-assistant/brands#5399 | https://github.com/dwradcliffe/home-assistant-waterguru | Active, pushed 2026-09-21 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `waterinfo` | home-assistant/brands#4931 | https://github.com/physje/waterinfo](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `waterinsights` | home-assistant/brands#3757 | https://github.com/battlemoose/waternsw-waterinsights-ha | Active, pushed 2022-11-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `waterius_ha` | home-assistant/brands#8615 | https://github.com/Anat0l/waterius-ha | Active, pushed 2026-08-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `watersmart` | home-assistant/brands#5601 | https://github.com/wbyoung/watersmart | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wattpilot` | home-assistant/brands#3348 | https://github.com/mk-maddin/wattpilot-HA | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `watts_live` | home-assistant/brands#7080 | https://github.com/DonSidro/Watts-Live-HA | Active, pushed 2026-01-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wattwallet` | home-assistant/brands#7590 | https://github.com/biclighter81/wattwallet-ha | Active, pushed 2025-09-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `waviot_updater` | home-assistant/brands#8468 | https://github.com/soulripper13/hacs-waviot | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wda_sensor` | home-assistant/brands#6651 | https://github.com/sokolovs/wda-sensor | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `weatheralerts` | home-assistant/brands#9219 | https://github.com/custom-components/weatheralerts](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `weatherapi` | home-assistant/brands#2916 | https://github.com/iprak/weatherapi | Active, pushed 2026-08-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `weathernews` | home-assistant/brands#5343 | https://github.com/dugurs/ha-weathernews | Active, pushed 2026-09-10 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `weathersense` | home-assistant/brands#7122 | https://github.com/smkrv/ha-weathersense | Active, pushed 2026-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `weatherxm` | home-assistant/brands#5556 | https://github.com/elboletaire/ha-weatherxm | Active, pushed 2026-03-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `web888` | home-assistant/brands#9001 | https://github.com/pentafive/web888-ha-bridge | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `weback_vacuum` | home-assistant/brands#3831 | https://github.com/Jezza34000/homeassistant_weback_component | Active, pushed 2026-07-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `webasto_next_modbus` | home-assistant/brands#8087 | https://github.com/tomwellnitz/Webasto-Next-Modbus | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `webastoconnect` | home-assistant/brands#4757 | https://github.com/mtrab/webastoconnect | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `webcheck` | home-assistant/brands#7179 | https://github.com/ClermontDigital/webcheck | Active, pushed 2025-06-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `webfleet` | home-assistant/brands#3838 | https://github.com/tom-winkler/ha-webfleet-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `webhook_conversation` | home-assistant/brands#7732 | https://github.com/eulemitkeule/webhook-conversation | Active, pushed 2026-09-07 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `webrtc` | home-assistant/brands#2488 | https://github.com/AlexxIT/WebRTC | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `website_hash_catcher` | home-assistant/brands#6782 | https://github.com/Q14siX/website_hash_catcher | Active, pushed 2025-08-10 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `weechat` | home-assistant/brands#8799 | https://github.com/Stullemon/hassio-weechat-integration | Active, pushed 2026-01-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `weishaupt_modbus` | home-assistant/brands#5710 | https://github.com/MadOne/weishaupt_modbus | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wellyou` | home-assistant/brands#5993 | https://github.com/timniklas/hacs_wellyou | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `welock` | home-assistant/brands#6592 | https://github.com/hzjchina/hass-welock | Active, pushed 2025-04-30 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wemo_crockpot` | home-assistant/brands#9625 | https://github.com/danielsza/wemo_crockpot | Active, pushed 2025-11-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wemo_heater` | home-assistant/brands#9626 | https://github.com/danielsza/wemo_heater | Active, pushed 2026-09-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wetter_alarm` | home-assistant/brands#5598 | https://github.com/onekintaro/wetter-alarm | Active, pushed 2024-08-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wevolor` | home-assistant/brands#3036 | https://github.com/home-assistant/home-assistant.io | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wgi_openvfd_x96max` | home-assistant/brands#4941 | https://github.com/waxgourd-ha/wgi_openvfd_x96max | Active, pushed 2026-09-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `whatpulse` | home-assistant/brands#8158 | https://github.com/SLG/home-assistant-whatpulse | Active, pushed 2026-06-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `whatsapp` | home-assistant/brands#7103 | https://github.com/giuseppecastaldo/ha-addons | Active, pushed 2025-02-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `whatsapper` | home-assistant/brands#5136 | https://github.com/baldarn/whatsapper | Active, pushed 2026-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `whatsigram_messenger` | home-assistant/brands#6469 | https://github.com/microteq/whatsigram_messenger | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `whatspie` | home-assistant/brands#3813 | https://github.com/arifwn/homeassistant-whatspie-integration | Active, pushed 2025-01-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `whenhub` | home-assistant/brands#9318 | https://github.com/moerk-o/WhenHub | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `whes` | home-assistant/brands#8259 | https://github.com/WentzoDevelopment/whes_battery_integration | Active, pushed 2026-02-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `whistle` | home-assistant/brands#2699 | https://github.com/RobertD502/home-assistant-whistle | Active, pushed 2025-07-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `whodunnit` | home-assistant/brands#9467 | https://github.com/sfox38/whodunnit | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `whoop` | home-assistant/brands#7167 | https://github.com/prankstr/hassio-whoop | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wibeee` | home-assistant/brands#1874 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wican` | home-assistant/brands#5893 | https://github.com/meatpiHQ/meatpi_ollie_v2 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wienerlinien` | home-assistant/brands#3431 | https://github.com/tofuSCHNITZEL/home-assistant-wienerlinien | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wigle` | home-assistant/brands#7617 | https://github.com/elieduclr/Wigle-Stats-HACS | Active, pushed 2026-02-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wiheat` | home-assistant/brands#6723 | https://github.com/kimjohnsson/wiheat | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wikipedia_fact` | home-assistant/brands#6326 | https://github.com/c4software/home-assistant-wikipedia-random-fact | Active, pushed 2026-03-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wind3` | home-assistant/brands#7982 | https://github.com/vincenzosuraci/wind3 | Active, pushed 2025-09-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `windcentrale` | home-assistant/brands#2784 | https://github.com/jobvk/Home-Assistant-Windcentrale | Active, pushed 2026-10-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `windmillac` | home-assistant/brands#5517 | https://github.com/bzellman/HACS-WindmillAC | Active, pushed 2026-10-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `windy_webcams` | home-assistant/brands#5074 | https://github.com/earendil06/Windy-Webcams | Active, pushed 2026-02-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wine_cellar` | home-assistant/brands#7538 | https://github.com/EdLeckert/wine-cellar | Active, pushed 2025-11-21 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `winix` | home-assistant/brands#2074 | https://github.com/hacs/default | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `winkhaus_doorclient` | home-assistant/brands#8910 | https://github.com/ramirezhr/ha-winkhaus-doorclient | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wirenboard` | home-assistant/brands#8101 | https://github.com/wirenboard/wb-home-assistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wisecloud_home` | home-assistant/brands#6763 | https://github.com/wisedeer2022/ha_wisecloud_home](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wiser_by_feller` | home-assistant/brands#6971 | https://github.com/Syonix/ha-wiser-by-feller | Active, pushed 2026-08-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `withings_plus` | home-assistant/brands#4960 | https://github.com/oukene/withings_plus | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wizarr` | home-assistant/brands#7980 | https://github.com/DJS91/Wizarr | Active, pushed 2025-10-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wlanthermo` | home-assistant/brands#9403 | https://github.com/WLANThermo-nano/homeassistant | Active, pushed 2026-10-08 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wmata` | home-assistant/brands#6530 | https://github.com/benlikethecolor/HomeAssistant-WMATA | Active, pushed 2025-05-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wnsm` | home-assistant/brands#3603 | https://github.com/DarwinsBuddy/WienerNetzeSmartmeter | Active, pushed 2026-10-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `worlty` | home-assistant/brands#5582 | https://github.com/GuGu927/worlty_homeassistant | Active, pushed 2026-08-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wort_des_tages` | home-assistant/brands#2780 | https://github.com/Ludy87/brands | Active, pushed 2026-07-21 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wrist_assistant` | home-assistant/brands#9544 | https://github.com/NylonDiamond/wrist-assistant-hacs | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ws_mcp_server` | home-assistant/brands#7268 | https://github.com/c1pher-cn/ha-mcp-for-xiaozhi | Active, pushed 2026-10-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wud_getupdates` | home-assistant/brands#5902 | https://github.com/pveiga90/What-s-up-Docker-Updates-Monitor | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wuling` | home-assistant/brands#5267 | https://github.com/hasscc/wuling | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wundasmart` | home-assistant/brands#4836 | https://github.com/tonyroberts/hawundasmart | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wyrestorm_networkhd` | home-assistant/brands#7801 | https://github.com/Matt-Hadley/wyrestorm-networkhd-ha | Active, pushed 2026-08-01 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `wyzeapi` | home-assistant/brands#2547 | https://github.com/JoshuaMulliken/ha-wyzeapi | Active, pushed 2026-09-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xai_conversation` | home-assistant/brands#8221 | https://github.com/pajeronda/xai_conversation | Active, pushed 2026-08-09 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xbee_humidifier` | home-assistant/brands#4684 | https://github.com/Shulyaka/xbee_humidifier | Active, pushed 2026-09-14 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xbox_dev` | home-assistant/brands#7894 | https://github.com/Bitte-ein-Git/ha_xbox-dev | Active, pushed 2025-10-27 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xcc` | home-assistant/brands#7508 | https://github.com/pvyleta/xcc-integration | Active, pushed 2026-08-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xcomfort` | home-assistant/brands#3069 | https://github.com/plamish/xcomfort | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xev_yoyo` | home-assistant/brands#9629 | https://github.com/ungiglio/ha-xev-yoyo | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xian_water` | home-assistant/brands#7847 | https://github.com/xiaoshi930i/xian_water | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xiaodumqtt` | home-assistant/brands#6700 | https://github.com/se7en7777777/xiaodumqtt | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xiaomi_airfryer` | home-assistant/brands#6130 | https://github.com/tsunglung/XiaomiAirFryer | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xiaomi_cloud_map_extractor` | home-assistant/brands#2380 | https://github.com/PiotrMachowski/Home-Assistant-custom-components-Xiaomi-Cloud-Map-Extractor | Active, pushed 2026-02-20 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xiaomi_gateway_radio` | home-assistant/brands#9639 | https://github.com/romans3/xiaomi-miio-gateway | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xiaomi_home` | home-assistant/brands#6227 | https://github.com/XiaoMi/ha_xiaomi_home | Active, pushed 2026-09-28 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xiaomi_lightbar` | home-assistant/brands#5061 | https://github.com/lamperez/xiaomi-lightbar-nrf24 | Active, pushed 2025-12-21 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xiaomi_toothbrush` | home-assistant/brands#8893 | https://github.com/alexanderznamensky/xiaomi_toothbrush | Active, pushed 2026-01-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xiaomi_vacuum` | home-assistant/brands#9601 | https://github.com/romans3/dreame-1c-vacuum | Active, pushed 2026-02-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xiaoshi_theme` | home-assistant/brands#7668 | https://github.com/xiaoshi930/xiaoshi_theme | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xiaozhi_mcp` | home-assistant/brands#7432 | https://github.com/mac8005/xiaozhi-mcp-hacs](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xlights_scheduler` | home-assistant/brands#8631 | https://github.com/gstrike/ha-xlights_scheduler | Active, pushed 2026-04-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xplora_watch` | home-assistant/brands#3056 | https://github.com/Ludy87/brands | Active, pushed 2026-07-21 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xtherma_fp` | home-assistant/brands#7001 | https://github.com/Xtherma/xtherma_ha | Active, pushed 2026-10-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `xweatherly` | home-assistant/brands#7690 | https://github.com/tbclark3/ha-xweatherly | Active, pushed 2025-08-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `yale_doorman_via_smarthub` | home-assistant/brands#2199 | https://github.com/jockesyk/homeassistant-yale-doorman-via-smarthub | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `yamaha_dsp` | home-assistant/brands#6624 | https://github.com/NitorCreations/ha-yamaha-dsp | Active, pushed 2026-10-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `yamaha_rn301` | home-assistant/brands#7460 | https://github.com/rihokirss/homeasisstant-rn301 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `yandex_dialogs` | home-assistant/brands#4689 | https://github.com/AlexxIT/YandexDialogs | Active, pushed 2026-02-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `yandex_lavka` | home-assistant/brands#6357 | https://github.com/egormanga/hass_yandex_lavka | Active, pushed 2025-07-31 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `yandex_pogoda` | home-assistant/brands#5847 | https://github.com/yandex/pogoda-home-assistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `yandex_station` | home-assistant/brands#2489 | https://github.com/AlexxIT/YandexStation | Active, pushed 2026-10-17 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `yandex_station_intents` | home-assistant/brands#8895 | https://github.com/dext0r/ha-yandex-station-intents | Active, pushed 2026-10-18 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `yeelight_pro` | home-assistant/brands#4275 | https://github.com/hasscc/yeelight-pro | Active, pushed 2026-03-26 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `yerushamayim` | home-assistant/brands#5946 | https://github.com/chilikla/yerushamayim | Active, pushed 2025-12-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `yi_hack` | home-assistant/brands#2571 | https://github.com/roleoroleo/yi-hack_ha_integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ynab_custom` | home-assistant/brands#6730 | https://github.com/DeLuca21/hacs-ynab | Active, pushed 2026-03-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `yocto_colorledcluster` | home-assistant/brands#5961 | https://github.com/yoctopuce-examples/yocto_colorledcluster | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `yodel` | home-assistant/brands#5890 | https://github.com/jampez77/Yodel | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `yolink_multi` | home-assistant/brands#8301 | https://github.com/cd1zz/homeassistant-yolink-multi | Active, pushed 2026-08-13 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `yongnuo_yn360` | home-assistant/brands#7526 | https://github.com/singularity0821/yongnuo-yn360-home-assistant | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `yoradio` | home-assistant/brands#5911 | https://github.com/e2002/yoradio | Active, pushed 2025-09-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `your_pollen_pal` | home-assistant/brands#7194 | https://github.com/TheTrueShell/PollenPalHA | Active, pushed 2025-06-04 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `youtilitics` | home-assistant/brands#6769 | https://github.com/Youtilitics/home-assistant | Active, pushed 2025-06-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `yr_norwegian_water_temperatures` | home-assistant/brands#7354 | https://github.com/jornpe/Yr-norwegian-water-temperatures-integration | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `ytmdesktop_remote` | home-assistant/brands#4568 | https://github.com/mvdwetering/ytmdesktop_remote | Active, pushed 2024-12-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `yuelly` | home-assistant/brands#8803 | https://github.com/olricky/yuelly | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zabbix_evt_sensors` | home-assistant/brands#5305 | https://github.com/rexdek/zabbix_evt_sensors | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zalo_bot` | home-assistant/brands#7465 | https://github.com/smarthomeblack/zalo_bot | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zammad` | home-assistant/brands#4969 | https://github.com/tjleach98/homeassistant-zammad | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zaparoo` | home-assistant/brands#8821 | https://github.com/ZaparooProject/zaproo-ha-integration | Active, pushed 2026-06-25 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zaragoza_tram` | home-assistant/brands#6606 | https://github.com/jrgim/Zaragoza_tram | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zatobox` | home-assistant/brands#7545 | https://github.com/vanutech/home-assistant-zatobox](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zcontrol` | home-assistant/brands#5155 | https://github.com/soaresbrun0/homeassistant-zcontrol | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zcsazzurro` | home-assistant/brands#4282 | https://github.com/aturri/ha-zcsazzurro | Active, pushed 2026-05-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zelzate_brug` | home-assistant/brands#5332 | https://github.com/giannivh/zelzate_brug | Active, pushed 2026-10-15 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zen15_cleaner` | home-assistant/brands#8659 | https://github.com/NathanWatson/HA-ZEN15-Cleaner | Active, pushed 2026-02-16 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zencharger` | home-assistant/brands#5832 | https://github.com/HMFons/HomeAssistant-Zencharger | Active, pushed 2024-11-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zendure_ha` | home-assistant/brands#6752 | https://github.com/FireSon/Zendure-HA | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zenkit` | home-assistant/brands#5865 | https://github.com/despokd/homeassistant-zenkit | Active, pushed 2024-10-05 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zentik_notifier` | home-assistant/brands#8747 | https://github.com/Zentik-notifier/zentik-homeassistant-component | Active, pushed 2025-12-22 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zepp2hass` | home-assistant/brands#8512 | https://github.com/davidepalleschi/zepp2hass | Active, pushed 2026-08-31 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zeus` | home-assistant/brands#9710 | https://github.com/rickmoonex/hass-zeus | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zha_lock_manager` | home-assistant/brands#7695 | https://github.com/dmoralesdev/zha_lock_manager | Active, pushed 2025-08-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zhihuifangdong` | home-assistant/brands#8047 | https://github.com/findyy99/homeassistant-zhihuifangdong | Active, pushed 2026-01-06 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zhipuai` | home-assistant/brands#5970 | https://github.com/knoop7/zhipuai | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zim_slupsk` | home-assistant/brands#6464 | https://github.com/muffintsi/hass-zim-slupsk | Active, pushed 2026-06-02 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zing_music` | home-assistant/brands#8891 | https://github.com/onoffautomations/HA_zing_music_ping | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zkaccess_c3` | home-assistant/brands#4544 | https://github.com/vwout/hass-zkaccess_c3 | Active, pushed 2024-08-24 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zont_ha` | home-assistant/brands#5097 | https://github.com/MihVS/zont_ha | Active, pushed 2026-10-10 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zte_ng_router` | home-assistant/brands#8715 | https://github.com/rosenrot00/ha-zte-ng-router | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zte_router` | home-assistant/brands#5795 | https://github.com/Kajkac/ZTE-MC-Home-assistant-repo | Active, pushed 2026-08-23 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zte_router_info` | home-assistant/brands#8235 | https://github.com/MironJajtic/ha-zte-router-info](https: | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zteh388x` | home-assistant/brands#5965 | https://github.com/masoneff3/ha_zteh388x | Active, pushed 2026-08-12 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zuli` | home-assistant/brands#9150 | https://github.com/byerlyb20/zuli-home-assistant | Active, pushed 2026-01-03 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zwift` | home-assistant/brands#4049 | https://github.com/snicker/zwift_hass | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zxart_browser` | home-assistant/brands#6541 | https://github.com/dudanov/hassio-zxart | Active, pushed 2025-03-19 | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zyxel_lte5398_m904` | home-assistant/brands#5958 | https://github.com/vincenzosuraci/hass_zyxel_lte5398_m904 | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zyxel_poe` | home-assistant/brands#3809 | https://github.com/lukas-hetzenecker/home-assistant-zyxel-poe | Unavailable | Upstream repository was found, but the exact custom component path could not be verified. |  |
| `zzu_energy` | home-assistant/brands#8007 | https://github.com/Illustar0/ha-zzu-energy | Active, pushed 2026-08-11 | Upstream repository was found, but the exact custom component path could not be verified. |  |
