---
title: Pengguna
slug: /perintah/mod/user
---

Merupakan kumpulan perintah untuk moderasi sebuah pengguna/user di sebuah peladen.

## Perintah

Berikut 2 modul untuk moderasi pengguna:

### Mute/Unmute

Sesuai namanya, fitur ini berguna untuk mute sebuah user di peladen.

Anda dapat ngemute orang dengan menggunakan salah satu format perintah dibawah ini:
- !mute `[orang]`
- !mute `[orang]` `[durasi]`
- !mute `[orang]` `[alasan]`
- !mute `[orang]` `[durasi]` `[alasan]`
- !unmute `[orang]` (Jika anda ingin unmute secara manual)

Untuk `[orang]` anda dapat mention, menulis ID user, ataupun menulis namanya.

Untuk `[durasi]` ini merupakan sistem formatting [Time String](/docs/referensi/timestring). Mohon jangan tulis dengan spasi atau akan digabung dengan alasan.

Untuk `[alasan]` adalah alasan ngemute, ini akan muncul di bagian Reason Audit Log dan [Pencatat Peladen](/docs/perintah/mod/log).

Jika anda tidak memberikan durasi, maka akan dianggap mute untuk selamanya (atau sampe admin ngeunmute).

:::info Perms
Anda butuh permission:
- Manage Channels
- Manage Messages

Bot juga butuh permission:
- Manage Roles
:::

Contoh:
- `!mute @N4O` (Mute `N4O` untuk selamanya)
- `!mute N4O 30m` (Mute `N4O` untuk 30 menit)
- `!mute 466469077444067372 Breaking rules` (Mute user dengan ID `466469077444067372` untuk selamanya dengan alasan `Breaking rules`)
- `!mute 466469077444067372 1h spamming #general` (Mute user dengan ID `466469077444067372` untuk 30 menit dengan alasan `spamming #general`)
- `!unmute @N4O` (Unmute `N4O`)

:::info Evasion
Jikalau orang yang kena mute keluar dari peladen terus join untuk menghapus role Muted-nya, orang tersebut akan kena mute kembali sesuai durasi yang tersisa.

Aksi ini akan di-log di Audit log dan juga [pencatat peladen](/docs/perintah/mod/log).
:::

### Shadowban/Unshadowban

Melakukan shadowban atau dalam konteks bot naoTimes, ngeban orang yang belum join server dengan ID usernya. Ini akan otomatis ngebuat orang yang join kena ban langsung ketika join.

Perintah:
- !shadowban `[user id]`
- !unshadowban `[user id]`

Untuk `[user id]` itu adalah ID user yang ingin anda shadowban atau unshadowban (jika kena shadowban).

:::info Perms
Kedua bot dan moderator harus mempunyai permission: `Ban Members`
:::

Contoh:
- `!shadowban 466469077444067372`
- `!unshadowban 466469077444067372`

### Timed Ban

Melakukan ban dengan waktu timeout untuk unban otomatis (biasa dipanggil softban).

Perintah:
- !timedban `[orang]` `[durasi]`
- !timedban `[orang]` `[durasi]` `[alasan]`

Untuk `[orang]` anda dapat mention, menulis ID user, ataupun menulis namanya.

Untuk `[durasi]` ini merupakan sistem formatting [Time String](/docs/referensi/timestring). Mohon jangan tulis dengan spasi atau akan digabung dengan alasan.

Untuk `[alasan]` adalah alasan ngemute, ini akan muncul di bagian Reason Audit Log dan [Pencatat Peladen](/docs/perintah/mod/log).

:::info Perms
Kedua bot dan moderator harus mempunyai permission: `Ban Members`
:::

Contoh:
- `!timedban @N4O 1h` (Ban `N4O` untuk 30 menit)
- `!timedban 466469077444067372 1h spamming #general` (Ban user dengan ID `466469077444067372` untuk 30 menit dengan alasan `spamming #general`)

## Dalam .gif

### Mute/Unmute
![mute dan unmute](https://p.ihateani.me/cdqnlubu.gif)

**Evasi Mute**

![evasi mute 1](https://p.ihateani.me/ttqpkwzg.png)
![evasi mute 2](https://p.ihateani.me/jxhfvbtr.png)

Gambar 1 merupakan ketika user di mute dan leave, dan gambar 2 ketika user join kembali.

### Shadowban/Unshadowban

![shadowban](https://p.ihateani.me/pksibupc.gif)

### Timed Ban

![timed ban](https://p.ihateani.me/yzpygabt.gif)