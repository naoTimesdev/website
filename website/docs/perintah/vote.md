---
id: ntpvote
title: Sistem Voting
slug: /perintah/vote
---

Lakukan voting di server anda!

Sistem voting ini menggunakan parser bernama argparse, jadi penulisan perintah sedikit berbeda.

Walau nama modulnya adalah `Sistem Voting`, modul ini juga menyediakan perintah untuk giveaway.

## Perintah

| Nama Command | Penjelasan |  Contoh  | Alias |
|:------------:|:----------:|:--------:|:-----:|
| !vote -h | Melihat bantuan perintah untuk command vote | - | - |
| !votekick -h | Melihat bantuan perintah untuk command vote kick | - | - |
| !voteban -h | Melihat bantuan perintah untuk command vote ban | - | - |
| !giveaway -h | Melihat bantuan perintah untuk command giveaway | - | - |

### Penjelasan Sistem Argparse

#### Vote
Untuk `!vote` terdapat 3 optional params dan 1 required params
```py
Gunakan: !vote [-h] [--satu-pilihan] [--timer WAKTU] [--opsi OPSI] topik

Argumen yang diwajibkan:
  topik                 Hal yang ingin divote.

Argumen opsional:
  -h, --help            Perlihatkan bantuan perintah
  --satu-pilihan, -S    Gunakan tipe satu pilihan (ya/tidak) untuk reactions.
  --timer WAKTU, -t WAKTU
                        Waktu sebelum voting ditutup (Format time string seperti: '30m 30s' untuk 30 menit 30 detik, minimal 3 menit, default 5 menit) Referensi time string:
                        https://naoti.me/docs/perintah/vote#time-string-format
  --opsi OPSI, -O OPSI  Opsi voting (minimal 2, batas 10)
```

**`topik`**: adalah hal yang ingin di voting, mohon gunakan kutip dua.<br />
**`--satu-pilihan`** atau **`-S`**: cukup gunakan reaction centang dan silang, alias ya dan tidak<br />
**`--timer`** atau **`-t`**: waktu voting dalam menit, default adalah 3 menit<br />
**`--opsi`** atau **`-O`**: Opsi yang ingin diberikan didalam voting, gunakan kutip dua.

**Contoh**: `!vote -O "Python" -O "JavaScript" -O "Brainfuck" -t 5m "Bahasa program terbaik"`<br />
Command tersebut akan membuat voting dengan judul `Bahasa program terbaik` dan 3 pilihan yaitu: `Python`, `JavaScript`, dan `Brainfuck`<br />
`-t 5` akan membuat voting ini berjalan selama 5 menit sebelum ditutup.

`!vote -S "Apakah saya pintar?"`
Command tersebut akan membuat voting dengan judul `Apakah saya pintar?` dan 2 pilihan yaitu `Ya` dan `Tidak`.<br />
Waktu votingnya adalah default 3 menit.

#### Votekick dan Voteban
Sementara untuk `!votekick` dan `!voteban` terdapat 2 optional params dan 1 required params
```py
Gunakan: !votekick [-h] [--timer WAKTU] [--limit BATAS] user

Argumen yang diwajibkan:
  user                  User yang ingin di ban/kick.

Argumen opsional:
  -h, --help            Perlihatkan bantuan perintah
  --timer WAKTU, -t WAKTU
                        Waktu sebelum voting ditutup (Format time string seperti: '30m 30s' untuk 30 menit 30 detik, minimal 30 detik, default 1 menit) Referensi time string:
                        https://naoti.me/docs/perintah/vote#time-string-format
  --limit BATAS, -l BATAS
                        Limit user untuk melaksanakan kick/ban (minimal 5 orang)
```

**`user`**: adalah user yang ingin di kick/ban, bisa di mention orangnya, ketik IDnya, atau tulis Usernamenya<br />
**`--timer`** atau **`-t`**: waktu voting dalam detik, default adalah 60 detik<br />
**`--limit`** atau **`-l`**: batas orang yang dibutuhkan didalam vote sebelum di kick/ban (tidak termasuk user yang buat vote, dan yang akan di kick/ban), default 5 user<br />

**Contoh**: `!votekick -l 10 -t 3m 466469077444067372`<br />
Akan mengaktifkan votekick untuk user ID `466469077444067372`, voting dibuka untuk 180 detik atau 3 menit, dan dibutuhkan minimal 10 orang sebelum di tentukan.

#### Giveaway
Yang terakhir adalah `!giveaway`, hanya ada 1 required param dan 1 optional param
```py
Gunakan: !giveaway [-h] [--timer WAKTU] barang

Argumen yang diwajibkan:
  barang                Hal yang ingin diberikan

Argumen opsional:
  -h, --help            Perlihatkan bantuan perintah
  --timer WAKTU, -t WAKTU
                        Waktu sebelum voting ditutup (Format time string seperti: '30m 30s' untuk 30 menit 30 detik, minimal 5 menit, default 1 jam) Referensi time string:
                        https://naoti.me/docs/perintah/vote#time-string-format
```

**Contoh**: `!giveaway -t 30m "1x Discord Nitro"`<br />
Akan membuat giveaway dengan judul `1x Discord Nitro` dengan batas waktu 30 menit

### Time String Format
Ini adalah format kustom untuk menulis waktu di bot naoTimes.

Format ini memiliki beberapa suffix (akhiran) khusus yang dimengerti oleh Bot:
- Milidetik: `ms`, `mil`, `mill`, `millis`, `milli`, `msec`, `msecs`, `milisec`, `miliseconds`, `milisecond`
- Detik: `s`, `sec`, `secs`, `second`, `seconds`, `detik`
- Menit: `m`, `min`, `mins`, `minute`, `minutes`, `menit`
- Jam: `h`, `hr`, `hrs`, `hour`, `hours`, `jam`, `j`
- Hari: `d`, `day`, `days`, `hari`
- Minggu: `w`, `wk`, `week`, `weeks`, `minggu`
- Bulan: `M`, `mo`, `month`, `months`, `b`, `bulan`
- Tahun: `y`, `year`, `years`, `tahun`, `t`

Suffix/Akhiran tersebut ditulis setalah angka, untuk Milidetik, detik, menit, dan jam ada limit yaitu 1000, 60, 60, 24 secara urut.
Teks bisa dipisah dengan spasi atau tidak.

Contoh:
- `30m` untuk 30 menit
- `1hr30menit` untuk 1 jam 30 menit
- `1 day 2hr 30 menit` untuk 1 hari 2 jam dan 30 menit


## Dalam .gif

### !vote
![vote](https://p.ihateani.me/vgmbostu.gif)

:::info
Untuk !voteban dan !votekick tidak jauh beda dengan !vote
:::