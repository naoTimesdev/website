---
title: Persiapan
---

# Selfhost - {{ $frontmatter.title }}

:::warning Outdated
Dokumentasi ini tidak sepenuhnya up-to-date, mohon tunggu update selanjutnya.
:::

Agar naoTimes dapat jalan dengan baik dan benar, anda harus mengikuti langkah-langkah ini dengan benar juga.

## Discord Bot

Mari kita mulai dengan membuat bot terlebih dahulu di [Developer Portal](https://discord.com/developers/applications/).

Anda dapat melakukan langkah ini: [Membuat akun Bot Baru](https://ndiscordpy.readthedocs.io/id/latest/discord.html)

## Database

naoTimes menggunakan 2 database, in-memory database dan remote-database.

In-memory yang kami gunakan adalah Redis, mohon setup itu terlebih dahulu: [Redis Quickstart](https://redis.io/topics/quickstart).<br />
Lalu remote database yang kami gunakan adalah MongoDB, anda dapat self-host atau menggunakan [MongoDB Atlas](https://www.mongodb.com/atlas/database).

Jika anda ingin host sendiri, maka ikuti langkah ini: [MongoDB Installation](https://docs.mongodb.com/manual/installation/).

Simpan semua URL untuk nanti.

## Pemutar musik

Jika anda ingin menambah fitur pemutar musik, mohon setup Lavalink terlebih dahulu: [Lavalink](https://github.com/freyacodes/Lavalink#server-configuration).

Jika anda ingin menambah fitur Spotify, anda harus membuat application dengan akun Spotify anda: [Spotify Dashboard](https://developer.spotify.com/dashboard/).<br />
Simpan Client dan Secret Spotify anda untuk autentikasi nanti dengan Wavelink.

DAN, jika anda ingin punya fitur playback langsung dari Spotify, anda harus setup Spotilava: [Spotilava](https://github.com/noaione/spotilava).<br />
Spotilava adalah jembatan antara Lavalink dan Spotify nanti.

:::danger Spotify
Anda membutuhkan akun Premium jika ingin menggunakan fitur playback native Spotify (Spotilava)
:::

## Akun-akun lain

naoTimes juga menggunakan berbagai fitur dari website berikut:
- [VNDB](https://vndb.org/)
- [KBBI](https://kbbi.kemdikbud.go.id/)
- [FansubDB](https://db.silveryasha.web.id/)
- [WolframAlpha](https://products.wolframalpha.com/api/)
- [Merriam Webster](https://dictionaryapi.com/)
- [Steam API](https://steamcommunity.com/dev)
- [Genius](https://docs.genius.com/)
- [OpenWeatherApi](https://openweathermap.org/api)
- [OpenCage Geocoding API](https://opencagedata.com/api#quickstart)

Untuk FansubDB, anda butuh akun dengan status Kontributor.<br />
Untuk MerriamWebster, anda butuh dictionary dan thesaurus Collegiate.

## naoTimes

Saatnya kita setup naoTimes, mari kita kehalaman [Instalasi](/docs/selfhost/setup).

