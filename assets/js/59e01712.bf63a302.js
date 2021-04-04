(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{104:function(e,a,n){"use strict";n.d(a,"a",(function(){return s})),n.d(a,"b",(function(){return j}));var t=n(0),i=n.n(t);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function b(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),c=function(e){var a=i.a.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):b(b({},a),e)),n},s=function(e){var a=c(e.components);return i.a.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},u=i.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),u=t,j=s["".concat(l,".").concat(u)]||s[u]||m[u]||r;return n?i.a.createElement(j,b(b({ref:a},p),{},{components:n})):i.a.createElement(j,b({ref:a},p))}));function j(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,l=new Array(r);l[0]=u;var b={};for(var o in a)hasOwnProperty.call(a,o)&&(b[o]=a[o]);b.originalType=e,b.mdxType="string"==typeof e?e:t,l[1]=b;for(var p=2;p<r;p++)l[p]=n[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return l})),n.d(a,"metadata",(function(){return b})),n.d(a,"toc",(function(){return o})),n.d(a,"default",(function(){return c}));var t=n(3),i=n(7),r=(n(0),n(104)),l={id:"setup",title:"Setup Bot",slug:"/selfhost/setup"},b={unversionedId:"selfhost/setup",id:"selfhost/setup",isDocsHomePage:!1,title:"Setup Bot",description:"Dalam dokumentasi ini, saya akan menjelaskan step-by-step untuk mengaktifkan bot naoTimes anda sendiri :)",source:"@site/docs/selfhost/setup.md",slug:"/selfhost/setup",permalink:"/docs/selfhost/setup",version:"current",lastUpdatedBy:"noaione",lastUpdatedAt:1617530341,formattedLastUpdatedAt:"4/4/2021",sidebar:"docs",previous:{title:"Status Proyek di Website",permalink:"/docs/integrasi/website"},next:{title:"Kredit",permalink:"/docs/credits"}},o=[{value:"Requirements",id:"requirements",children:[]},{value:"Persiapan",id:"persiapan",children:[]},{value:"Proses",id:"proses",children:[]}],p={toc:o};function c(e){var a=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},p,n,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Dalam dokumentasi ini, saya akan menjelaskan step-by-step untuk mengaktifkan bot naoTimes anda sendiri :)"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Informasi")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Dokumentasi ini sangat outdated, Bot sudah terlalu berbeda dengan apa yang disediakan di sini."))),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Python 3.6+"),Object(r.b)("li",{parentName:"ul"},"aiohttp>=3.5.4"),Object(r.b)("li",{parentName:"ul"},"beautifulsoup4==4.8.0"),Object(r.b)("li",{parentName:"ul"},"discord.py==1.2.5"),Object(r.b)("li",{parentName:"ul"},"feedparser==5.2.1"),Object(r.b)("li",{parentName:"ul"},"kbbi"),Object(r.b)("li",{parentName:"ul"},"markdownify==0.4.1"),Object(r.b)("li",{parentName:"ul"},"pysubs2==0.2.4"),Object(r.b)("li",{parentName:"ul"},"pytz==2019.1"),Object(r.b)("li",{parentName:"ul"},"textblob==0.15.3"),Object(r.b)("li",{parentName:"ul"},"ujson==1.35")),Object(r.b)("p",null,"Anda bisa menginstallnya satu-per-satu dengan ",Object(r.b)("inlineCode",{parentName:"p"},"pip")," atau dengan file ",Object(r.b)("inlineCode",{parentName:"p"},"requirements.txt")," ",Object(r.b)("inlineCode",{parentName:"p"},"(pip install -r requirements.txt)")),Object(r.b)("h2",{id:"persiapan"},"Persiapan"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Pastikan anda telah menginstall segala dependenciesnya"),Object(r.b)("li",{parentName:"ol"},"Buat Personal Access Token GitHub (",Object(r.b)("a",{parentName:"li",href:"https://github.com/settings/tokens"},"https://github.com/settings/tokens"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Klik link tersebut"),Object(r.b)("li",{parentName:"ul"},"Klik 'Generate New Token'"),Object(r.b)("li",{parentName:"ul"},"Masukan Password dan Continue"),Object(r.b)("li",{parentName:"ul"},"Dibagian ",Object(r.b)("inlineCode",{parentName:"li"},"Note")," masukan apa saja."),Object(r.b)("li",{parentName:"ul"},"Dan pilih semua ",Object(r.b)("inlineCode",{parentName:"li"},"scopes")," kecuali:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"write:packages"),Object(r.b)("li",{parentName:"ul"},"read:packages"),Object(r.b)("li",{parentName:"ul"},"delete:packages"),Object(r.b)("li",{parentName:"ul"},"write:discussion"),Object(r.b)("li",{parentName:"ul"},"admin:enterprise"),Object(r.b)("li",{parentName:"ul"},"workflow"))),Object(r.b)("li",{parentName:"ul"},'Klik "Generate token" lalu simpan token ke tempat yang aman.'))),Object(r.b)("li",{parentName:"ol"},"Buatlah gist private/public dengan info berikut:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Filename: ",Object(r.b)("inlineCode",{parentName:"li"},"nao_showtimes.json")),Object(r.b)("li",{parentName:"ul"},"Content: Isi asal, disarankan -> ",Object(r.b)("inlineCode",{parentName:"li"},"{}")),Object(r.b)("li",{parentName:"ul"},"Jika dijalankan di Heroku, lihat ",Object(r.b)("inlineCode",{parentName:"li"},"Note")," di bawah."),Object(r.b)("li",{parentName:"ul"},"Simpan ID gistnya."))),Object(r.b)("li",{parentName:"ol"},"Buatlah bot baru di ",Object(r.b)("inlineCode",{parentName:"li"},"Discord Developer Portal"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Klik ",Object(r.b)("inlineCode",{parentName:"li"},"New application")),Object(r.b)("li",{parentName:"ul"},"Masukan nama dan klik ",Object(r.b)("inlineCode",{parentName:"li"},"Create")),Object(r.b)("li",{parentName:"ul"},"Tambahkan gambar profile jika mau"),Object(r.b)("li",{parentName:"ul"},"Klik ",Object(r.b)("inlineCode",{parentName:"li"},"Bot")),Object(r.b)("li",{parentName:"ul"},"Dibagian Token, klik ",Object(r.b)("inlineCode",{parentName:"li"},"Copy")," dan simpan Token di tempat yang aman.")))),Object(r.b)("h2",{id:"proses"},"Proses"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Clone/Download repo ini"),Object(r.b)("li",{parentName:"ol"},"Rename file ",Object(r.b)("inlineCode",{parentName:"li"},"config.json.example")," menjadi ",Object(r.b)("inlineCode",{parentName:"li"},"config.json")," dan isi:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"github"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"username"),": ",Object(r.b)("strong",{parentName:"li"},"Username github")," ",Object(r.b)("em",{parentName:"li"},"bukan")," Email github"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"personal_access_token"),": Personal Access Token github yang ada atau yang dibuat barusan"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"bot_token"),": Token bot discord"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"vndb"),": Untuk mengaktifkan perintah ",Object(r.b)("inlineCode",{parentName:"li"},"!vndb"),", jika tidak punya, abaikan saja.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"username"),": Username VNDB.org"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"password"),": Password VNDB.org"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nyaasi"),": Untuk mengaktifkan perintah ",Object(r.b)("inlineCode",{parentName:"li"},"!nyaa"),", jika tidak punya, abaikan saja.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"username"),": Username nyaa.si"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"password"),": Password nyaa.si"))))),Object(r.b)("li",{parentName:"ol"},"Invite bot anda dengan permission minimal dibawah ini",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Manage Roles"),Object(r.b)("li",{parentName:"ul"},"Manage Channels"),Object(r.b)("li",{parentName:"ul"},"Kick Members"),Object(r.b)("li",{parentName:"ul"},"Ban Members"),Object(r.b)("li",{parentName:"ul"},"Change Nickname"),Object(r.b)("li",{parentName:"ul"},"Manage Nicknames"),Object(r.b)("li",{parentName:"ul"},"Manage Webhooks"),Object(r.b)("li",{parentName:"ul"},"View Channels"),Object(r.b)("li",{parentName:"ul"},"Send Messages"),Object(r.b)("li",{parentName:"ul"},"Manage Messages"),Object(r.b)("li",{parentName:"ul"},"Embed Links"),Object(r.b)("li",{parentName:"ul"},"Attach Files"),Object(r.b)("li",{parentName:"ul"},"Read Message History"),Object(r.b)("li",{parentName:"ul"},"Mention Everyone"),Object(r.b)("li",{parentName:"ul"},"Use External Emojis"),Object(r.b)("li",{parentName:"ul"},"Add Reactions"))),Object(r.b)("li",{parentName:"ol"},"Jalankan bot dengan ",Object(r.b)("inlineCode",{parentName:"li"},"python bot.py")),Object(r.b)("li",{parentName:"ol"},"Aktifkan naoTimes Showtimes dengan ",Object(r.b)("inlineCode",{parentName:"li"},"!ntadmin initiate")),Object(r.b)("li",{parentName:"ol"},"Ikuti perintahnnya dan klik react ",Object(r.b)("inlineCode",{parentName:"li"},"centang")," jika sudah benar semua"),Object(r.b)("li",{parentName:"ol"},"Bot siap digunakan")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note")),Object(r.b)("p",null,"Kalau dijalankan di Heroku, atur ",Object(r.b)("inlineCode",{parentName:"p"},"gist_id")," secara manual dan buat gist sesuai langkah 2",Object(r.b)("br",null),"\nTetapi isi contentnya seperti ini:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "serverowner": [\n        "ID_ADMIN_SERVER_AWAL"\n    ],\n    "SERVER_ID_AWAL": {\n        "serverowner": [\n            "ID_ADMIN_SERVER_AWAL"\n        ],\n        "announce_channel": "ID_CHANNEL_PROGRESS",\n        "anime": {},\n        "alias": {}\n    }\n}\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Contoh"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "serverowner": [\n        "466469077444067372"\n    ],\n    "472705451117641729": {\n        "serverowner": [\n            "466469077444067372"\n        ],\n        "announce_channel": "558321533060251664",\n        "anime": {},\n        "alias": {}\n    }\n}\n')),Object(r.b)("p",null,"Lalu copy ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"Gist IDnya"))," dan masukan ke ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"config.json"))))}c.isMDXComponent=!0}}]);