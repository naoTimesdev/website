---
title: Perintah
---

# {{ $frontmatter.title }}

Semua perintah musik diawali dengan `!musik` atau `!m` atau `!music`, biar tidak bentrok dengan perintah naoTimes lain.

## Pemutaran

### Memulai lagu

Untuk memutar lagu anda dapat menggunakan perintah berikut:

> !musik play **[url atau kueri]**

URL atau kueri dapat anda isi dengan URL platform seperti Youtube, Youtube music, Spotify, Soundcloud, dan lain-lain.

Contoh:
- `!musik play https://music.youtube.com/watch?v=WRWfcxlfMgQ`
- `!musik play https://open.spotify.com/track/3h8efEQ3MsDESpfeKX1JI4?si=b53cea487343469e`
- `!musik play Hoshimachi Suisei - Stellar Stellar`

### Melihat pemutaran

Anda dapat melihat informasi lagu yang sedang diputar dengan:

> !musik nowplaying

> !musik np

Memakai perintah tersebut akan memperlihatkan kurang lebih embed ini:

![now playing](https://p.ihateani.me/gtvzmkfd.png)

### Menghentikan Lagu

Untuk menghentikan lagu atau melewati lagu anda dapat menggunakan perintah berikut:

> !musik skip

> !musik stop

> !musik leave

**Perintah `!musik stop` akan menghapus semua queue anda juga**

Untuk `!musik skip` anda hanya dapat melewati langsung jika anda adalah DJ/host, moderator/admin, atau pemutar lagu tersebut. Jika tidak akan dimasukan ke sistem vote.

Untuk `!musik leave` akan mengeluarkan bot dari VC dan menghapus semua queue.

### Mengatur volume

Anda dapat mengubah volume dengan perintah ini:

> !musik volume [angka]

Angka sendiri merupakan angka dari 1 sampai 100. Jika anda tidak memberikan angka, akan direturn volume sekarang.

![volume sample](https://p.ihateani.me/szfsgaxl.png)

### Mengulang lagu

naoTimes memiliki fitur untuk mengulang lagu, perintahnya adalah:

> !musik repeat [mode]

Mode merupakan salah satu dari ini:
- `off`, `no`, `matikan`, `mati`
- `single`, `satu`, `ini`
- `all`, `semua`

Bagian pertama akan menonaktifkan fitur repeat.<br />
Bagian kedua akan mengulang lagu yang sedang diputar atau lagu selanjutnya di queue.<br />
Bagian ketiga akan mengulang semua lagu yang ada di queue termasuk lagu yang sedang diputar (jika ada).

![repeat sample](https://p.ihateani.me/mcqybuyu.png)

### Delegasi host

Jika anda merupakan host dan ingin memberikan host/DJ kepada orang lain, silakan gunakan perintah ini:

> !musik delegasi [member]

Anda dapat mention member ataupun menulis ID member, atau ketik namanya.

Jika sukses, host akan berubah ke member tersebut.

### Melihat Info

Untuk melihat informasi pemutar musik yang sedang aktif, anda bisa menggunakan:

> !musik info

Ini akan memberikan info singkat fitur apa saja yang didukung oleh `Node` anda.

![infotaiment](https://p.ihateani.me/abhmcmnx.png)


### Sistem Queue

naoTimes memiliki sistem queue untuk memutar lagu dan menaruhnya dalam queue.

**Perintahnya sebagai berikut**:

> !musik queue

Perintah ini akan memberikan anda lagu yang ada di daftar putar.

> !musik queue remove [posisi]

Perintah ini akan menghapus lagu dalam `posisi` dari daftar putar, yang bisa menghapusnya adalah host, admin/moderator, dan orang yang menambah lagu tersebut.

> !musik queue clear

Perintah ini akan menghapus semua daftar putar, perintah ini hanya bisa dijalankan oleh host dan admin/moderator.

:::info Aliases
Anda dapat menulis `!musik queue` menjadi `!m q` atau `!musik q` biar lebih singkat.
:::

![queue system](https://p.ihateani.me/lvuvodul.gif)