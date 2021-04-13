---
id: ntwebsite
title: Status Proyek di Website
slug: /integrasi/website
---

Menghubungkan progres garapan dari database bot ke website.

## Versi Embed
Dengan menggunakan link berikut [https://panel.naoti.me/embed](https://panel.naoti.me/embed) anda bisa menambahkan Embed via iframe ke Website anda tanpa ribet-ribet design.

:::info
Jika situ ada masalah dengan scroll/iframe butuh scrolling, mohon klik ini: [Atur Ukuran iFrame secara otomatis](#mengatur-ukuran-iframe)
:::

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

### Mengatur Ukuran iFrame
Misalkan situ menyelipkan iframe dengan cara ini:
```html
<div id="naotimes">
    <iframe id="naotimes-project" src="https://panel.naoti.me/embed?id=472705451117641729">
</div>
```

Dan situ mendapatkan kurang lebih seperti ini:

![Scrollwheel](https://p.ihateani.me/ofljljgm.png)

Situ gak mau ada scrollwhell, jadi mari kita tambah script khusus untuk otomatis resize.

Embed akan mengirimkan sebuah pesan untuk `resize` jika Client support, jadi untuk menerima pesan tersebut dan memprosesnya cukup menulis script kurang lebih gini
```html
<script>
    /**
    * Resize iframe naoTimes ketika sudah load.
    */
    window.addEventListener("message", function (event) {
        // Periksa apakah pesan dari embed naotimes apa tidak
        if (!event.origin.startsWith("https://panel.naoti.me")) {
            return;
        }

        // Parse data yang dikirim oleh Embed
        const data = JSON.parse(event.data);
        // Ambil element iframe via `id`
        const iframe = document.getElementById("naotimes-project");
        if (data.action === "resize") {
            iframe.height = data.height;
            iframe.scrolling = "no";
            iframe.style.opacity = "1";
            // Hilangkan scrollbar
            iframe.style.overflowY = "hidden";
        }
    }, false);
</script>
```

Dengan skrip itu, Embed akan otomatis ke-resize.

di Line:
```js
const iframe = document.getElementById("naotimes-project");
```

teks `naotimes-project` diubah sesuai dengan `id` yang situ kasih ke iframenya, saran `naotimes-project`

Maka full codenya untuk embed:
```html
<div id="naotimes">
    <script>
        /**
        * Resize iframe naoTimes ketika sudah load.
        */
        window.addEventListener("message", function (event) {
            // Periksa apakah pesan dari embed naotimes apa tidak
            if (!event.origin.startsWith("https://panel.naoti.me")) {
                return;
            }

            // Parse data yang dikirim oleh Embed
            const data = JSON.parse(event.data);
            // Ambil element iframe via `id`
            const iframe = document.getElementById("naotimes-project");
            if (data.action === "resize") {
                iframe.height = data.height;
                iframe.scrolling = "no";
                iframe.style.opacity = "1";
                // Hilangkan scrollbar
                iframe.style.overflowY = "hidden";
            }
        }, false);
    </script>
    <iframe id="naotimes-project" src="https://panel.naoti.me/embed?id=472705451117641729">
</div>
```

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