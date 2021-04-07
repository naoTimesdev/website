---
id: changelog
title: Perubahan
slug: /changelog
---

Di laman ini, saya akan menulis semua perubahan pada Bot naoTimes

## Versi 1.0.0
- naoTimes lahir dengan segala bug ampasnya.
- Saat ini, naoTimes masih sangat ampas dan butuh banyak perkembangan untuk mencapai yang diinginkan.
- Command baru nambah utang yang super panjang commandnya dan !tagih, !beres, !rilis, !drop.
- Ada beberapa server yang menjadi klien pertama:
    - Caramel Fansub
    - Delsubs

## Versi 1.1.0
- Penambahan !jadwal
- Optimisasi dan pemburuan bug

## Versi 1.2.0
- Perbaikan bug
- Penambahan custom help
- !ping dan !staff
- !hapusepisode dan !ubahstaff

## Versi 1.3.0
- Penambahan cogs anilist (!anime dan !manga)
- Perbaikan dan lain sebagainya...

### Versi 1.3.1
- !rilis sekarang bisa batch dan semuanya langsung rilis (!rilis batch, !rilis semua)
- Perbaikan dan lain sebagainya...

### Versi 1.3.2
- !ubahrole, !tambahepisode
- !ntadmin
- Improvisasi pada Anilist.
- Perbaikan, fFormatting dan optimisasi showtimes

### Versi 1.3.3
- !tandakan dan !anibin
- !tambahutang diubah dari teks super panjang menjadi lebih interaktif.
- Mulai menyimpan database dari github ke local untuk mempercepat proses.

### Versi 1.3.4
- !alias
- Mempercantik kode.
- Open Sourced naoTimes (Yey!)

### Versi 1.3.5
- Perombakan total cogs Anilist
- Penambahan berbagai macam command web scrapping (parser.py)
- Merge anibin dengan parser

## Versi 1.4.0
- !kolaborasi
- Pembersihan kode

### Versi 1.4.1
- Pemindahan modul ke folder `cogs/`
- Pembersihan kode

## Versi 1.5.0
- A shit ton of new commands
    - "Fun" stuff (Seperti, !profile)
    - Nyaa.si dan PerpusIndo parser
    - VNDB.org parser
    - Sistem Voting
    - Parser mendapatkan command baru (!kurs, perbaikan !speedsub, !jisho, !sinonim/!antonim)
- Perbaikan perintah dan optimisasi
- Awal dari proses rewrite naoTimes (v2.0)

## Versi 1.6.0
- !nh (nHentai)
- Perbaikan perintah dan optimisasi

## Versi 2.0.0
- Rewrite!
- Mulai menggunakan discord.py terbaru
- !fansubrss
- Berbagai waktu dikucurkan untuk membereskan berbagai masalah dari versi sebelumnya :uwu:

### Versi 2.0.1
- Hotfix untuk berbagai masalah di versi sebelumnya
- Migrasi ke Redis sebagai engine lokal untuk performance lebih cepat

### Versi 2.0.2
- Jisho kembali bisa dipakai
- Menambahkan fitur VTuber API

### Versi 2.0.3
- Command `!giveaway`
- Menggunakan sistem baru untuk parsing waktu `3d30m` etc.
- Command [Image Board](/docs/perintah/imagebooru)
- KBBI akan memberikan saran entri kalo tidak bisa menemukan kata yang dicari
- Otomatis menambah role yang dibuat atau yang dibuat oleh bot ke list member pas tambah utang.