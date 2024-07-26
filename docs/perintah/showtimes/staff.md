---
title: Staf
---

# {{ $frontmatter.title }}

Semua perintah di sini hanya dapat digunakan oleh staff yang mengerjakan proyek tertentu.

## Perintah

| Nama Command | Penjelasan |  Contoh  | Alias |
|:------------:|:----------:|:--------:|:-----:|
| !beres **[posisi]** **[judul]** | Menandakan posisi garapan episode yang telah dikerjakan.<br />**[posisi]**: tl, tlc, enc, ed, tm, ts, atau qc <br />(Translator, Translation Checker, Encoder, Editor, Timer, Typesetter, Quality Checker)<br />**[judul]**: Judul garapan yang terdaftar, bisa disingkat sesingkat mungkin | !beres enc hitoribocchi | !done |
| !gakjadi **[posisi]** **[judul]** | Menandakan posisi garapan episode yang telah dikerjakan tetapi ada kesalahan dan ingin diulang.<br />**[posisi]**: tl, tlc, enc, ed, tm, ts, atau qc <br />(Translator, Translation Checker, Encoder, Editor, Timer, Typesetter, Quality Checker)<br />**[judul]**: Judul garapan yang terdaftar, bisa disingkat sesingkat mungkin | !gakjadi enc hitoribocchi | !undone<br />!cancel |
| !tandakan **[posisi]** **[episode]** **[judul]** | Mengubah status posisi untuk episode tertentu dari belum ke sudah atau sebaliknya.<br />**[posisi]**: tl, tlc, enc, ed, tm, ts, atau qc <br />(Translator, Translation Checker, Encoder, Editor, Timer, Typesetter, Quality Checker)<br />**[episode]**: Episode yang ingin diubah tandanya<br />**[judul]**: Judul garapan yang terdaftar, bisa disingkat sesingkat mungkin<br />Note: Akan otomatis terubah dari ``beres`` ke ``belum beres`` atau sebaliknya jika perintah ini dipakai<br />perintah ini tidak akan mengannounce perubahan ke channel publik | !tandakan enc 3 hitoribocchi | !mark |
| !rilis <...> | Merilis garapan!<br />***Hanya bisa dipakai oleh Admin atau tukang QC***<br />Penjelasan ada di bawah ini. | !rilis kyuuketsuki<br />!rilis batch 3 kyuuketsuki<br />!rilis semua kyuuketsuki | !release |
| !batalrilis <...> | Membatalkan rilisan garapan!<br />***Hanya bisa dipakai oleh Admin atau tukang QC***<br />Penjelasan ada di bawah ini. | !batalrilis kyuuketsuki<br />!batalrilis batch 3 kyuuketsuki<br />!batalrilis semua kyuuketsuki | - |

Mau `!rilis` ataupun `!batalrilis` sama saja untuk penjelasannya.

!rilis **[judul]**<br />
Merilis episode dari judul yang dikerjakan<br />

!rilis batch **[jumlah]** **[judul]**<br />
Merilis jumlah episode tertentu dari judul yang dikerjakan<br />

!rilis semua **[judul]**<br />
Merilis semua episode dari judul yang dikerjakan

:::tip Note
Untuk perintah !rilis batch, terdapat <strong>[jumlah]</strong> episode yang mau dirilis.
Penghitungannya adalah <strong>Episode terakhir yang sedang dikerjakan ditambah jumlah</strong>.<br />
Misalkan lagi <strong>ngerjain Episode 4</strong>, terus mau <strong>rilis sampai episode 7</strong><br />
Total dari <strong>Episode 4 sampai 7 ada 4</strong> (4, 5, 6, dan 7)<br />
Maka tulis <strong>jumlahnya 4</strong>
:::

## Dalam .gif

### !beres
![beres](https://p.ihateani.me/rodtjtfv.gif)

### !gakjadi
![gakjadi](https://p.ihateani.me/vzeaykii.gif)

### !tandakan
![tandakan](https://p.ihateani.me/epvlcgyr.gif)

### !rilis | !rilis batch | !rilis semua
![rilis](https://p.ihateani.me/tdiyikja.gif)