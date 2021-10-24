---
title: Kanal
slug: /perintah/mod/kanal
---

Kumpulan perintah untuk moderasi sebuah channel, seperti mengatur slowmode, nge-lock channel dan lain-lain.

## Perintah

| Nama Command | Penjelasan |  Contoh  | Alias |
|:------------:|:----------:|:--------:|:-----:|
| !lock **[channel]** | Mengunci sebuah kanal agar tidak ada yang bisa chat<br />**[channel]** itu opsional, jika tidak diberikan akan memakai kanal di mana perintah dipakai | !lock<br />!lock `#channel-a` | !lockdown |
| !unlock **[channel]** | Membuka kembali kanal yang kena kunci<br />**[channel]** itu opsional, jika tidak diberikan akan memakai kanal di mana perintah dipakai | !unlock<br />!unlock `#channel-a` | - |
| !slowmode **[durasi]** **[channel]** | Mengatur slowmode, jika **[durasi]** tidak diberikan, maka slowmode akan dinonaktifkan.<br />**[channel]** itu opsional, jika tidak diberikan akan memakai kanal di mana perintah dipakai<br />**[durasi]** merupakan [Time String Format](/docs/referensi/timestring) | !slowmode 15s<br />!slowmode 15s `#channel-a` | - |

## Dalam .gif
WIP