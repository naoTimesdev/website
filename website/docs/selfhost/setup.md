---
id: setup
title: Setup Bot
slug: /selfhost/setup
---

Dalam dokumentasi ini, saya akan menjelaskan step-by-step untuk mengaktifkan bot naoTimes anda sendiri :)

:::caution Informasi
Dokumentasi ini sangat outdated, Bot sudah terlalu berbeda dengan apa yang disediakan di sini.
:::

## Requirements

- Python 3.6+
- aiohttp>=3.5.4
- beautifulsoup4==4.8.0
- discord.py==1.2.5
- feedparser==5.2.1
- kbbi
- markdownify==0.4.1
- pysubs2==0.2.4
- pytz==2019.1
- textblob==0.15.3
- ujson==1.35

Anda bisa menginstallnya satu-per-satu dengan `pip` atau dengan file `requirements.txt` `(pip install -r requirements.txt)`

## Persiapan
1. Pastikan anda telah menginstall segala dependenciesnya
2. Buat Personal Access Token GitHub (https://github.com/settings/tokens)
    - Klik link tersebut
    - Klik 'Generate New Token'
    - Masukan Password dan Continue
    - Dibagian `Note` masukan apa saja.
    - Dan pilih semua `scopes` kecuali:
        - write:packages
        - read:packages
        - delete:packages
        - write:discussion
        - admin:enterprise
        - workflow
    - Klik "Generate token" lalu simpan token ke tempat yang aman.
3. Buatlah gist private/public dengan info berikut:
    - Filename: `nao_showtimes.json`
    - Content: Isi asal, disarankan -> `{}`
    - Jika dijalankan di Heroku, lihat `Note` di bawah.
    - Simpan ID gistnya.
4. Buatlah bot baru di `Discord Developer Portal`
    - Klik `New application`
    - Masukan nama dan klik `Create`
    - Tambahkan gambar profile jika mau
    - Klik `Bot`
    - Dibagian Token, klik `Copy` dan simpan Token di tempat yang aman.

## Proses
1. Clone/Download repo ini
2. Rename file `config.json.example` menjadi `config.json` dan isi:
    - **github**
        - **username**: **Username github** *bukan* Email github
        - **personal_access_token**: Personal Access Token github yang ada atau yang dibuat barusan
    - **bot_token**: Token bot discord
    - **vndb**: Untuk mengaktifkan perintah `!vndb`, jika tidak punya, abaikan saja.
        - **username**: Username VNDB.org
        - **password**: Password VNDB.org
    - **nyaasi**: Untuk mengaktifkan perintah `!nyaa`, jika tidak punya, abaikan saja.
        - **username**: Username nyaa.si
        - **password**: Password nyaa.si
3. Invite bot anda dengan permission minimal dibawah ini
    - Manage Roles
    - Manage Channels
    - Kick Members
    - Ban Members
    - Change Nickname
    - Manage Nicknames
    - Manage Webhooks
    - View Channels
    - Send Messages
    - Manage Messages
    - Embed Links
    - Attach Files
    - Read Message History
    - Mention Everyone
    - Use External Emojis
    - Add Reactions
4. Jalankan bot dengan `python bot.py`
5. Aktifkan naoTimes Showtimes dengan `!ntadmin initiate`
6. Ikuti perintahnnya dan klik react `centang` jika sudah benar semua
7. Bot siap digunakan

**Note**

Kalau dijalankan di Heroku, atur `gist_id` secara manual dan buat gist sesuai langkah 2<br />
Tetapi isi contentnya seperti ini:
```json
{
    "serverowner": [
        "ID_ADMIN_SERVER_AWAL"
    ],
    "SERVER_ID_AWAL": {
        "serverowner": [
            "ID_ADMIN_SERVER_AWAL"
        ],
        "announce_channel": "ID_CHANNEL_PROGRESS",
        "anime": {},
        "alias": {}
    }
}
```

**Contoh**:
```json
{
    "serverowner": [
        "466469077444067372"
    ],
    "472705451117641729": {
        "serverowner": [
            "466469077444067372"
        ],
        "announce_channel": "558321533060251664",
        "anime": {},
        "alias": {}
    }
}
```

Lalu copy **`Gist IDnya`** dan masukan ke **`config.json`**
