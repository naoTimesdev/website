import { DefaultTheme, defineConfig } from 'vitepress'

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Selamat Datang',
      link: '/docs/',
      collapsed: false,
    },
    {
      text: 'Perintah Bot',
      link: '/docs/perintah/',
      collapsed: false,
      items: [
        {
          text: 'Animanga, VN, dan VTuber',
          collapsed: true,
          items: [
            { text: 'Anime & Manga', link: '/docs/perintah/anivn/animanga' },
            { text: 'Visual Novel', link: '/docs/perintah/anivn/vn' },
            { text: 'VTuber', link: '/docs/perintah/anivn/vtuber' }
          ]
        },
        {
          text: 'NSFW',
          collapsed: true,
          items: [
            { text: 'nH', link: '/docs/perintah/bahaya/nh' },
            { text: 'ImageBooru', link: '/docs/perintah/bahaya/imagebooru' },
          ]
        },
        {
          text: '"Fun"',
          collapsed: true,
          items: [
            { text: 'Info Peladen dan User', link: '/docs/perintah/fun/info' },
            { text: 'Tanya Bot', link: '/docs/perintah/fun/tanya' },
            { text: 'Random', link: '/docs/perintah/fun/random' },
            { text: 'Reaksi Kustom', link: '/docs/perintah/fun/reaksi' },
            { text: 'Pengingat', link: '/docs/perintah/fun/pengingat' },
          ]
        },
        {
          text: 'Kutubuku',
          collapsed: true,
          items: [
            { text: 'KBBI dan Tesaurus', link: '/docs/perintah/kutubuku/kbbi' },
            { text: 'Antonim dan Sinonim', link: '/docs/perintah/kutubuku/kateglo' },
            { text: 'Padanan Kata', link: '/docs/perintah/kutubuku/padanan' },
            { text: 'Merriam Webster', link: '/docs/perintah/kutubuku/webster' },
            { text: 'Jisho', link: '/docs/perintah/kutubuku/jisho' },
            { text: 'Translasi', link: '/docs/perintah/kutubuku/translasi' },
            { text: 'Matematika', link: '/docs/perintah/kutubuku/matematika' },
          ]
        },
        {
          text: 'Moderasi',
          collapsed: true,
          items: [
            { text: 'Automoderasi', link: '/docs/perintah/mod/automod' },
            { text: 'Kanal', link: '/docs/perintah/mod/kanal' },
            { text: 'Pesan', link: '/docs/perintah/mod/pesan' },
            { text: 'Pengguna', link: '/perintah/mod/pengguna' },
            { text: 'Utas atau Thread', link: '/docs/perintah/mod/thread' },
            { text: 'Pencatatan Peladen', link: '/docs/perintah/mod/log' },
          ]
        },
        {
          text: 'Peninjau Website',
          link: '/docs/perintah/peninjau/',
          collapsed: true,
          items: [
            { text: 'Anibin', link: '/docs/perintah/peninjau/anibin' },
            { text: 'Cuaca', link: '/docs/perintah/peninjau/cuaca' },
            { text: 'Kurs Mata Uang', link: '/docs/perintah/peninjau/kurs' },
            { text: 'Pencari Saus', link: '/docs/perintah/peninjau/saus' },
          ]
        },
        {
          text: 'Moderasi',
          collapsed: false,
          items: [
            { text: 'Introduksi', link: '/docs/perintah/mod/intro' },
            { text: 'Pengunjung', link: '/docs/perintah/mod/user' },
            { text: 'Staf', link: '/docs/perintah/mod/staff' },
            { text: 'Administrasi', link: '/perintah/mod/admin' },
            { text: 'Alias', link: '/docs/perintah/mod/alias' },
            { text: 'Kolaborasi', link: '/docs/perintah/mod/kolaborasi' },
          ]
        },
        {
          text: 'Musik',
          link: '/docs/perintah/musik/',
          collapsed: true,
          items: [
            { text: 'Perintah', link: '/docs/perintah/musik/cmd' },
          ]
        },
        {
          text: 'FansubRSS',
          link: '/docs/perintah/fansubrss',
          collapsed: false,
        },
        {
          text: 'Voting dan Giveaway',
          link: '/docs/perintah/vote',
          collapsed: false,
        }
      ]
    },
    {
      text: 'Integrasi',
      collapsed: false,
      items: [
        {
          text: 'naoTimes WebUI',
          link: '/docs/integrasi/naotimesui',
        },
        {
          text: 'Status Proyek di Website',
          link: '/docs/integrasi/website',
        }
      ]
    },
    {
      text: 'Referensi',
      collapsed: false,
      items: [
        {
          text: 'Time String Format',
          link: '/docs/referensi/timestring',
        }
      ]
    },
    {
      text: 'Self-Hosting',
      collapsed: false,
      items: [
        {
          text: 'Introduksi',
          link: '/docs/selfhost/',
        },
        {
          text: 'Preparasi',
          link: '/docs/selfhost/prepare',
        },
        {
          text: 'Setup Bot',
          link: '/docs/selfhost/setup',
        }
      ]
    },
    {
      text: 'Kredit',
      link: '/docs/credits',
      collapsed: false,
    },
    {
      text: 'Perubahan',
      link: '/docs/changelog',
      collapsed: false,
    }
  ]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "naoTimes",
  description: "Bot berbahasa Indonesia untuk membantu tracking garapan fansubber",
  lastUpdated: true,
  metaChunk: true,
  cleanUrls: true,

  sitemap: {
    hostname: 'https://naoti.me',
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/img/nt32.png' }],
    ['meta', { name: 'theme-color', content: '#fd8455' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'naoTimes' }],
    ['meta', { property: 'og:site_name', content: 'naoTimes' }],
    ['meta', { property: 'og:image', content: 'https://naoti.me/assets/img/nt256.png' }],
    ['meta', { property: 'og:url', content: 'https://naoti.me/' }],
    ['script', { src: 'https://tr.n4o.xyz/js/37a79777T080eR4f52A99e2Ica9619a85a5d.js', async: '', defer: '', 'data-domain': 'naoti.me', 'data-api': 'https://tr.n4o.xyz/magic/18c5dcddMc036A4d1dGb785Iaa2e310238c9' }]
  ],

  themeConfig: {
    logo: {
      src: '/assets/img/nt256.png',
      width: 24,
      height: 24,
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Invite', link: '/invite', activeMatch: '/invite/' },
      { text: 'Dokumentasi', link: '/docs', activeMatch: '^/docs/' },
      { text: 'Blog', link: '/blog', activeMatch: '^/blog' },
      {
        text: 'Tentang',
        items: [
          {
            text: 'Tentang Kami',
            link: '/tentang',
          },
          {
            text: 'Kebijakan Privasi',
            link: '/privasi',
          },
          {
            text: 'Syarat dan Ketentuan',
            link: '/terms',
          },
          {
            text: 'Kontak',
            link: '/kontak',
          },
          {
            text: 'Donasi',
            link: '/donasi',
            noIcon: true,
          },
          {
            text: 'Status',
            link: 'https://status.n4o.xyz/status/naotimes',
            rel: 'noopener noreferrer',
            target: '_blank',
          }
        ]
      },
    ],

    sidebar: {
      '/docs/': sidebarDocs(),
      '/blog/': { base: '/blog/', items: [] },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/naoTimesdev', ariaLabel: 'GitHub' },
      { icon: 'discord', link: 'https://discord.gg/7KyYecn', ariaLabel: 'Discord' },
      // { icon: 'donate', link: '/donasi', ariaLabel: 'Donasi' }
    ],

    footer: {
      message: 'Dibuat dengan ❤️ oleh tim naoTimes',
      copyright: 'Copyright © 2021-present naoTimes Dev',
    }
  },

  srcExclude: [
    '**/node_modules/**',
    '**/.git/**',
    '**/.vitepress/**',
    '**/.github/**',
    '**/website/**',

    // Custom made one
    '**/privacy/**',
    '**/terms/**',
    'README.md',
  ],
})
