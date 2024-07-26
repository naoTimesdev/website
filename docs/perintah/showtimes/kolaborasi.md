---
title: Kolaborasi
---

# {{ $frontmatter.title }}

Perintah ini hanya dapat dilakukan oleh admin yang terdaftar.

## Perintah

Perintah ini digunakan untuk melakukan Kolaborasi dengan Server lain yang terdaftar di Showtimes.

| Nama Command | Penjelasan |  Contoh  | Alias |
|:------------:|:----------:|:--------:|:-----:|
| !kolaborasi | Memunculkan bantuan perintah kolaborasi | !kolaborasi | !joint<br />!join<br />!koleb |
| !kolaborasi dengan **[server_id_kolaborasi]** **[judul]** | Memulai proses kolaborasi dengan server/fansub lain, berikan kode unik yang diberikan bot ke admin server/fansub sebelah.<br />**[server_id_kolaborasi]**: Merupakan ID server yang ingin diajak kolaborasi (Harus terdaftar di database naoTimes)<br />**[judul]**: Judul garapan yang terdaftar, bisa disingkat sesingkat mungkin | !kolaborasi dengan 472705451117641729 kyuuketsuki | - |
| !kolaborasi konfirmasi **[kode]** | Konfirmasi kolaborasi garapan dengan **[kode]** unik | !kolaborasi konfirmasi eyasd123hnbbq | - |
| !kolaborasi putus **[judul]** | Memutuskan hubungan sinkronisasi data dengan semua fansub yang diajak kolaborasi<br />**[judul]**: Judul garapan yang terdaftar, bisa disingkat sesingkat mungkin | !kolaborasi putus kyuuketsuki | - |
| !kolaborasi batalkan **[server_id_kolaborasi]** **[kode]** | Membatalkan kode konfirmasi kolaborasi dengan fansub lain<br />**[server_id_kolaborasi]**: Merupakan ID server yang ingin diajak kolaborasi (Harus terdaftar di database naoTimes)<br />**[kode]** merupakan kode unik yang dibuat saat melakukan `!konfirmasi dengan` | !kolaborasi batalkan 472705451117641729 eyasd123hnbbq | - |

### Penjelasan
**Kegunaan:**<br />
Mengsinkronasikan proses garapan dengan server lain yang terdaftar pada database naoTimes.<br />
Kolaborasi bisa lebih dari 2 server.

:::caution Sedikit Info
Jika salah satu server meng-update data untuk anime yang melakukan kolaborasi, maka akan meng-update data server lainnya juga dan akan di announce juga ke semua server yang berkolaborasi
:::

**Penjelasan perintah**<br />
- !kolaborasi dengan **[server_id_kolaborasi]** **[judul]**<br />
Memulai proses kolaborasi dengan server/fansub lain, berikan kode unik yang diberikan bot ke admin server/fansub sebelah<br />
Proses ini akan membuat kode unik yang hanya bisa dipakai oleh server yang ditarget.
- !kolaborasi konfirmasi **[kode]**<br />
Melakukan konfirmasi kolaborasi.<br />
Jika anime sudah didaftar, maka akan di overwrite dari data yang mengajak kolaborasi.<br />
Role akan dibuat otomatis dan tinggal diberikan ke staff.
- !kolaborasi putus **[judul]**<br />
Memutuskan hubungan sinkronisasi dengan semua fansub yang diajak kolaborasi<br />
Server lain akan tetap tersinkronisasi (jika ada) dan tidak akan terpengaruh.
- !kolaborasi batalkan **[server_id_kolaborasi]** **[kode]**<br />
Menghanguskan kode yang telah dibuat<br />
Jika terjadi kesalahan dan lain sebagainya.

## Dalam .gif

### !kolaborasi dengan | !kolaborasi konfirmasi
![kolaborasi dengan dan konfirmasi](https://p.ihateani.me/bkmjftha.gif)

### !kolaborasi putus
![kolaborasi putus](https://p.ihateani.me/xihrjfbw.gif)

### !kolaborasi batalkan
![kolaborasi batalkan](https://p.ihateani.me/vxxwzefe.gif)