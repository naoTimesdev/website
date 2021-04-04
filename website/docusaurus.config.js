module.exports={
  "title": "naoTimes",
  "tagline": "Bot berbahasa Indonesia untuk membantu tracking garapan fansubber",
  "url": "https://naoti.me",
  "baseUrl": "/",
  "organizationName": "naoTimesdev",
  "projectName": "website",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/favicon.ico",
  "customFields": {
    "users": [],
    "version": "2.0.4"
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
          "sidebarPath": "sidebars.json"
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
  "plugins": [
  ],
  "themeConfig": {
    colorMode: {
      defaultMode: "dark"
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
          href: "https://trakteer.id/noaione",
          label: "Donasi",
          position: "right"
        }
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