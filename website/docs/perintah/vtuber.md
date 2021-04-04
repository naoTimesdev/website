---
id: ntpvtuber
title: VTuber
slug: /perintah/vtuber
---

Dapatkan informasi Live, Jadwal, dan Channel VTuber yang terdaftar di [ihateani.me API](https://api.ihateani.me/v2)<br />
Command ini menggunakan sistem `argparse` untuk command dan sebagainya.

## Perintah

| Nama Command | Penjelasan |  Contoh  | Alias |
|:------------:|:----------:|:--------:|:-----:|
| !vtuber live -h | Melihat bantuan perintah untuk command `vtuber live` | - | !vtuber lives |
| !vtuber jadwal -h | Melihat bantuan perintah untuk command jadwal stream VTuber | - | !vtuber schedule, !vtuber schedules |
| !vtuber channel -h | Melihat bantuan perintah untuk command informasi channel VTuber | - | !vtuber channels, !vtuber kanal |
| !vtuber grup | Melihat list group yang bisa dipakai di argumen `-g` | - | !vtuber group, !vtuber organization, !vtuber organisasi |

## Penjelasan Sistem Argparse

Untuk semua command, akan memberikan informasi help yang sama

```py
Gunakan: !vtuber live [-h] [-c CHANNELS] [-g GROUPS]
                     [-P {youtube,twitch,twitcasting,mildom}]

Argumen opsional:
  -h, --help            Perlihatkan bantuan perintah
  -c CHANNELS, --channel-id CHANNELS
                        Filter hanya untuk kanal tertentu, dapat diulang
                        seperti --platform
  -g GROUPS, --group GROUPS
                        Filter untuk organisasi atau grup tertentu, untuk
                        mendapatkan listnya, dapat menggunakan perintah
                        '!vtuber grup'.Dapat diulang seperti --platform
  -P {youtube,twitch,twitcasting,mildom}, --platform {youtube,twitch,twitcasting,mildom}
                        Filter hasil ke platform tertentu, dapat diulang. Ex:
                        -P youtube -P twitch
```

`-c` atau `--channel-id` berguna untuk memfilter VTuber yang akan diberikan ke user.<br />
`-g` atau `--group` berguna untuk memfilter ke organisasi atau grup VTuber tertentu.<br />
`-P` atau `--platform` berguna untuk memfilter ke platform tertentu.<br />
Platform yang bisa ditulis adalah `youtube`, `twitch`, `twitcasting`, dan `mildom`.

Semua argumen diatas dapat diulang untuk menambahkannya ke filter, contoh:
```py
!vtuber live -g hololive -g hololiveid
```

Akan mengambil informasi live stream untuk grup `hololive` dan `hololiveid`

## Dalam .gif

### !vtuber live, !vtuber jadwal, !vtuber channel

![vtuber_main_cmd](https://p.ihateani.me/bhhpgdjq.gif)

### !vtuber grup

![vtuber_grup](https://p.ihateani.me/uqralvia.gif)