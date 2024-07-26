---
title: Time String Format
---

# {{ $frontmatter.title }}

Time String format adalah formatter atau parser khusus untuk argument sebuah perintah. Format ini digunakan untuk menulis waktu di bot naoTimes.

Format ini memiliki beberapa suffix (akhiran) khusus yang dimengerti oleh Bot:
- Milidetik: `ms`, `mil`, `mill`, `millis`, `milli`, `msec`, `msecs`, `milisec`, `miliseconds`, `milisecond`
- Detik: `s`, `sec`, `secs`, `second`, `seconds`, `detik`
- Menit: `m`, `min`, `mins`, `minute`, `minutes`, `menit`
- Jam: `h`, `hr`, `hrs`, `hour`, `hours`, `jam`, `j`
- Hari: `d`, `day`, `days`, `hari`
- Minggu: `w`, `wk`, `week`, `weeks`, `minggu`
- Bulan: `M`, `mo`, `month`, `months`, `b`, `bulan`
- Tahun: `y`, `year`, `years`, `tahun`, `t`

Suffix/Akhiran tersebut ditulis setelah angka, untuk milidetik, detik, menit, dan jam ada limit yaitu 1000, 60, 60, 24 secara urut.
Teks bisa dipisah dengan spasi atau tidak.

Contoh:
- `30m` untuk 30 menit
- `1hr30menit` untuk 1 jam 30 menit
- `1 day 2hr 30 menit` untuk 1 hari 2 jam dan 30 menit

