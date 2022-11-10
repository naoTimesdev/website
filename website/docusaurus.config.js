module.exports={
  "title": "naoTimes",
  "tagline": "Bot berbahasa Indonesia untuk membantu tracking garapan fansubber",
  "url": "https://naoti.me",
  "baseUrl": "/",
  "organizationName": "naoTimesdev",
  "projectName": "website",
  "scripts": [
    {
      src: "https://tr.n4o.xyz/js/plausible.js",
      async: true,
      defer: true,
      "data-domain": "naoti.me"
    }
  ],
  "favicon": "img/favicon.ico",
  "customFields": {
    "users": [],
    "version": "3.1.0rc1"
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "docs",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "sidebarPath": require.resolve("./sidebars.js"),
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": [require.resolve("./src/css/customTheme.css")],
        }
      }
    ]
  ],
  "themeConfig": {
    announcementBar: {
      id: "privacy-update-notice-20211123",
      content: `Kami memperbaharui kebijakan privasi, mohon periksa <a href="/privasi">di sini</a>`,
      isCloseable: true,
    },
    colorMode: {
      defaultMode: "dark"
    },
    "algolia": {
      "apiKey": "baef4cca0522683cd2d596fae5f15524",
      "indexName": "naotimes-docs",
      "appId": "38N8AZP6IV",
      "placeholder": "Cari"
    },
    "navbar": {
      "title": "naoTimes",
      "logo": {
        "src": "assets/img/nt120.png"
      },
      "items": [
        {
          "to": "docs/",
          "label": "Dokumentasi",
          "position": "left"
        },
        {
          "to": "blog/",
          "label": "Blog",
          "position": "left",
        },
        {
          href: "/invite",
          label: "Invite",
          position: "right"
        },
        {
          href: "/donasi",
          position: "right",
          label: "Donasi"
        },
        {
          href: "/legal",
          position: "right",
          label: "Legal"
        },
        {
          href: "https://github.com/naoTimesdev/naoTimes",
          position: "right",
          className: "header-github-link",
        },
      ]
    },
    "image": "assets/img/nt256.png",
    "footer": {
      "links": [
        {
          title: "Komunitas",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/naoTimesdev"
            },
            {
              label: "Discord",
              href: "https://discord.gg/7KyYecn"
            },
            {
              label: "Donasi",
              href: "/donasi"
            }
          ]
        },
        {
          title: "Legal",
          items: [
            {
              label: "Syarat dan Ketentuan",
              href: "/terms"
            },    
            {
              label: "Kebijakan Privasi",
              href: "/privasi"
            },    
            {
              label: "Hubungi kami",
              href: "/kontak"
            }
          ]
        },
        {
          title: "Lain-lain",
          items: [
            {
              label: "WebUI",
              href: "https://panel.naoti.me/"
            },
            {
              label: "Status",
              href: "https://status.naoti.me/"
            },
            {
              label: "ihateani.me",
              href: "https://ihateani.me/"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 naoTimes Dev | Website Built with Docusaurus"
    }
  }
}