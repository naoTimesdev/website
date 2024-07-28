---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: naoTimes

hero:
  name: "naoTimes"
  text: "Sebuah Bot Discord"
  tagline: Bot berbahasa Indonesia untuk membantu tracking garapan fansubber
  actions:
    - theme: brand
      text: Invite
      link: /invite
    - theme: brand
      text: Dokumentasi
      link: /docs
    - theme: alt
      text: Blog
      link: /blog 
  image:
    src: /assets/img/nt256.png
    alt: naoTimes Logo

features:
  - title: Discord
    details: Cukup gunakan Discord untuk mengatur informasi group anda
    icon: ⌨️
    link: /invite
  - title: Laman Web
    details: Lihat dan beritahu informasi garapan anda dengan kode simpel yang bisa di tambah ke website anda sendiri!
    icon: 📢
    link: /docs/integrasi/website
  - title: Atur Garapan
    details: Gunakan Web UI naoTimes untuk melihat informasi garapan dengan lebih mudah!
    icon: 🌐
    link: /docs/integrasi/naotimesui
---

<style>
@media (min-width: 960px) {
  .VPHero.has-image .image-src {
    /* rotate image by some degreess */
    transform: translate(-50%, -50%) rotateZ(-4deg);
  }
}
</style>
