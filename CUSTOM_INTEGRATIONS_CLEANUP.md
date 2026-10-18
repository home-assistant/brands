# Custom integrations cleanup

Custom integrations can ship local brand images in `custom_components/<domain>/brand/` since Home Assistant 2026.3. This file tracks the migration of existing `custom_integrations/` entries out of this repository.

Announcement: https://contributors.home-assistant.io/blog/2026/02/24/brands-proxy-api/

## Batch 1

| Domain | Original brands PR | Upstream repository | Upstream state | Local brand folder | Action | Tracking PR |
| --- | --- | --- | --- | --- | --- | --- |
| `0711smarthome_fernwartungs_modus` | home-assistant/brands#8250 | https://github.com/0711smarthome/0711smarthome_fernwartungs_modus | Active, pushed 2025-11-10 | No | Needs upstream PR | |
| `12123` | home-assistant/brands#8482 | https://github.com/758639304/12123 | Repository unavailable | Unknown | Needs manual follow-up | |
| `21energy_heater_control` | home-assistant/brands#6879 | Unknown | Unknown | Unknown | Needs source repo lookup | |
| `2minersinfo` | home-assistant/brands#3398 | https://github.com/ThomasPrior/2minersInfo | Archived, pushed 2022-05-24 | No | Remove from brands repo | |
| `2n_intercom` | home-assistant/brands#8883 | https://github.com/genka13/ha-2n-intercom | Active, pushed 2026-01-04 | No | Needs upstream PR | |
| `3bmeteo` | home-assistant/brands#9542 | https://github.com/matte-oss/hass-3bmeteo | Active, pushed 2026-02-12 | No | Needs upstream PR | |
| `4heat` | home-assistant/brands#3154 | Unknown | Unknown | Unknown | Needs source repo lookup | |
| `4noks_elios4you` | home-assistant/brands#5199 | https://github.com/alexdelprete/ha-4noks-elios4you | Active, pushed 2026-10-02 | Yes | Remove from brands repo | |
| `aapalarm` | home-assistant/brands#6128 | https://github.com/osotechie/ha_aapalarm | Active, pushed 2026-10-10 | Yes | Remove from brands repo | |
| `aarlo` | home-assistant/brands#2523 | https://github.com/twrecked/hass-aarlo | Active, pushed 2026-10-16 | No | Needs upstream PR | |
