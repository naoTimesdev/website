---
title: Pesan
slug: /perintah/mod/pesan
---

# {{ $frontmatter.title }}

Perintah-perintah untuk moderasi pesan seperti menghapus dan nuklir channel.

## Perintah

| Nama Command | Penjelasan |  Contoh  | Alias |
|:------------:|:----------:|:--------:|:-----:|
| !clean **[jumlah]** | Menghapus pesan sesuai total **[jumlah]** yang diberikan. | !clean 100 | !bersihkan |
| !nuke **[channel]** | Menuklir semua isi channel sampai habis.<br />**[channel]** itu opsional, jika tidak diberikan akan memakai kanal di mana perintah dipakai | !nuke<br />!nuke `#channel-a` | !nuklir |
| !nukeuser **[user]** **[lookback]** | Menuklir semua pesan dari user sampai kena batas **[lokkback]** yang ditentukan.<br />**[user]** dapat anda mention atau ketik user IDnya<br />**[lookback]** merupakan [Time String Format](/docs/referensi/timestring) dengan batas 24h. | !nukeuser @N4O<br />!nukeuser 466469077444067372 10h | !nukliruser |

Untuk **lookback** maksudnya adalah hapus pesan x jam terakhir. jika **lookback** adalah 24h, maka hapus semua pesan 24 jam terakhir.

## Dalam .gif
WIP