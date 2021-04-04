---
id: ntwebsite
title: Status Proyek di Website
slug: /integrasi/website
---

Menghubungkan progres garapan dari database bot ke website.

## Versi Embed
Dengan menggunakan link berikut [https://panel.naoti.me/embed](https://panel.naoti.me/embed) anda bisa menambahkan Embed via iframe ke Website anda tanpa ribet-ribet design.

Cukup tambahkan `?id=SERVER_ID` dengan `SERVER_ID` diubah ke server ID Discord tersebut.<br />
Contoh: https://panel.naoti.me/embed?id=472705451117641729

Anda juga dapat mengkostumisasi aksen warna dengan menambahkan `&accent=WARNA` dan juga bahasa dengan `&lang=KODE`<br />
Ada support untuk dark mode juga, cukup tambahkan `&dark=true`

Untuk Bahasa ada support untuk:
- Inggris (Kode: `en`)
- Indonesia (Kode: `id`) [default]

Untuk aksen warna tersedia:
- `red`
- `yellow`
- `green` [default]
- `blue`
- `indigo`
- `purple`
- `pink`
- `none` (tidak ada aksen)

Contoh:
- https://panel.naoti.me/embed?id=472705451117641729&accent=red (Aksen merah)
- https://panel.naoti.me/embed?id=472705451117641729&accent=red&dark=true (Aksen merah + Dark mode)
- https://panel.naoti.me/embed?id=472705451117641729&accent=red&lang=en (Aksen merah + Dark mode + Bahasa Inggris)

## Versi Script

Skrip tersedia di sini: https://naoti.me/assets/js/naoTimes.js <br />
Atau versi minified: https://naoti.me/assets/js/naoTimes.min.js

1. Selipkan snippet html berikut:
    ```html
    <div id="naotimes" class="progress-wrapper">
        <script type="text/javascript" src="https://naoti.me/assets/js/naoTimes.js"></script>
        <script type="text/javascript">
            naoTimesProcess("MASUKAN ID SERVER DISCORD DI SINI"); // Ubah line ini
        </script>
        <h1 class="naotimes-header">Status Garapan</h1>
        <img id="naotimes-loading" width="40" height="40" src='https://puu.sh/DiJzU/6af20efe7e.gif'>
    </div>
    ```
2. Ubah bagian
    ```js
    naoTimesProcess("MASUKAN ID SERVER DISCORD DI SINI"); // Ubah line ini
    ```
    dengan ID server discord anda. Contoh:
    ```js
    naoTimesProcess("472705451117641729"); // Ubah line ini
    ```
3. Kustomisasi dengan css, listnya ada:
    - **naotimes-header**: teks header dengan tulisan `Status Garapan`
    - **naotimes-seasonal**: teks header musim
    - **naotimes-animetitle**: bagian judul garapan/anime
    - **naotimes-animeprogress**: bagian progress tiap garapan/anime