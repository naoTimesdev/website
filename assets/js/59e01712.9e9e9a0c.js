(self.webpackChunk=self.webpackChunk||[]).push([[8398],{3905:(e,a,t)=>{"use strict";t.d(a,{Zo:()=>m,kt:()=>d});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,N=u["".concat(s,".").concat(d)]||u[d]||k[d]||r;return t?n.createElement(N,l(l({ref:a},m),{},{components:t})):n.createElement(N,l({ref:a},m))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9480:(e,a,t)=>{"use strict";t.r(a),t.d(a,{frontMatter:()=>l,metadata:()=>o,toc:()=>s,default:()=>m});var n=t(2122),i=t(9756),r=(t(7294),t(3905)),l={id:"setup",title:"Setup Bot",slug:"/selfhost/setup"},o={unversionedId:"selfhost/setup",id:"selfhost/setup",isDocsHomePage:!1,title:"Setup Bot",description:"Dalam dokumentasi ini, saya akan menjelaskan step-by-step untuk mengaktifkan bot naoTimes anda sendiri :)",source:"@site/docs/selfhost/setup.md",sourceDirName:"selfhost",slug:"/selfhost/setup",permalink:"/docs/selfhost/setup",version:"current",lastUpdatedBy:"noaione",lastUpdatedAt:1617530341,formattedLastUpdatedAt:"4/4/2021",frontMatter:{id:"setup",title:"Setup Bot",slug:"/selfhost/setup"},sidebar:"docs",previous:{title:"Status Proyek di Website",permalink:"/docs/integrasi/website"},next:{title:"Kredit",permalink:"/docs/credits"}},s=[{value:"Requirements",id:"requirements",children:[]},{value:"Persiapan",id:"persiapan",children:[]},{value:"Proses",id:"proses",children:[]}],p={toc:s};function m(e){var a=e.components,t=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Dalam dokumentasi ini, saya akan menjelaskan step-by-step untuk mengaktifkan bot naoTimes anda sendiri :)"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Informasi")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Dokumentasi ini sangat outdated, Bot sudah terlalu berbeda dengan apa yang disediakan di sini."))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Python 3.6+"),(0,r.kt)("li",{parentName:"ul"},"aiohttp>=3.5.4"),(0,r.kt)("li",{parentName:"ul"},"beautifulsoup4==4.8.0"),(0,r.kt)("li",{parentName:"ul"},"discord.py==1.2.5"),(0,r.kt)("li",{parentName:"ul"},"feedparser==5.2.1"),(0,r.kt)("li",{parentName:"ul"},"kbbi"),(0,r.kt)("li",{parentName:"ul"},"markdownify==0.4.1"),(0,r.kt)("li",{parentName:"ul"},"pysubs2==0.2.4"),(0,r.kt)("li",{parentName:"ul"},"pytz==2019.1"),(0,r.kt)("li",{parentName:"ul"},"textblob==0.15.3"),(0,r.kt)("li",{parentName:"ul"},"ujson==1.35")),(0,r.kt)("p",null,"Anda bisa menginstallnya satu-per-satu dengan ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," atau dengan file ",(0,r.kt)("inlineCode",{parentName:"p"},"requirements.txt")," ",(0,r.kt)("inlineCode",{parentName:"p"},"(pip install -r requirements.txt)")),(0,r.kt)("h2",{id:"persiapan"},"Persiapan"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Pastikan anda telah menginstall segala dependenciesnya"),(0,r.kt)("li",{parentName:"ol"},"Buat Personal Access Token GitHub (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/settings/tokens"},"https://github.com/settings/tokens"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Klik link tersebut"),(0,r.kt)("li",{parentName:"ul"},"Klik 'Generate New Token'"),(0,r.kt)("li",{parentName:"ul"},"Masukan Password dan Continue"),(0,r.kt)("li",{parentName:"ul"},"Dibagian ",(0,r.kt)("inlineCode",{parentName:"li"},"Note")," masukan apa saja."),(0,r.kt)("li",{parentName:"ul"},"Dan pilih semua ",(0,r.kt)("inlineCode",{parentName:"li"},"scopes")," kecuali:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"write:packages"),(0,r.kt)("li",{parentName:"ul"},"read:packages"),(0,r.kt)("li",{parentName:"ul"},"delete:packages"),(0,r.kt)("li",{parentName:"ul"},"write:discussion"),(0,r.kt)("li",{parentName:"ul"},"admin:enterprise"),(0,r.kt)("li",{parentName:"ul"},"workflow"))),(0,r.kt)("li",{parentName:"ul"},'Klik "Generate token" lalu simpan token ke tempat yang aman.'))),(0,r.kt)("li",{parentName:"ol"},"Buatlah gist private/public dengan info berikut:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Filename: ",(0,r.kt)("inlineCode",{parentName:"li"},"nao_showtimes.json")),(0,r.kt)("li",{parentName:"ul"},"Content: Isi asal, disarankan -> ",(0,r.kt)("inlineCode",{parentName:"li"},"{}")),(0,r.kt)("li",{parentName:"ul"},"Jika dijalankan di Heroku, lihat ",(0,r.kt)("inlineCode",{parentName:"li"},"Note")," di bawah."),(0,r.kt)("li",{parentName:"ul"},"Simpan ID gistnya."))),(0,r.kt)("li",{parentName:"ol"},"Buatlah bot baru di ",(0,r.kt)("inlineCode",{parentName:"li"},"Discord Developer Portal"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Klik ",(0,r.kt)("inlineCode",{parentName:"li"},"New application")),(0,r.kt)("li",{parentName:"ul"},"Masukan nama dan klik ",(0,r.kt)("inlineCode",{parentName:"li"},"Create")),(0,r.kt)("li",{parentName:"ul"},"Tambahkan gambar profile jika mau"),(0,r.kt)("li",{parentName:"ul"},"Klik ",(0,r.kt)("inlineCode",{parentName:"li"},"Bot")),(0,r.kt)("li",{parentName:"ul"},"Dibagian Token, klik ",(0,r.kt)("inlineCode",{parentName:"li"},"Copy")," dan simpan Token di tempat yang aman.")))),(0,r.kt)("h2",{id:"proses"},"Proses"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clone/Download repo ini"),(0,r.kt)("li",{parentName:"ol"},"Rename file ",(0,r.kt)("inlineCode",{parentName:"li"},"config.json.example")," menjadi ",(0,r.kt)("inlineCode",{parentName:"li"},"config.json")," dan isi:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"github"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"username"),": ",(0,r.kt)("strong",{parentName:"li"},"Username github")," ",(0,r.kt)("em",{parentName:"li"},"bukan")," Email github"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"personal_access_token"),": Personal Access Token github yang ada atau yang dibuat barusan"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bot_token"),": Token bot discord"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"vndb"),": Untuk mengaktifkan perintah ",(0,r.kt)("inlineCode",{parentName:"li"},"!vndb"),", jika tidak punya, abaikan saja.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"username"),": Username VNDB.org"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"password"),": Password VNDB.org"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nyaasi"),": Untuk mengaktifkan perintah ",(0,r.kt)("inlineCode",{parentName:"li"},"!nyaa"),", jika tidak punya, abaikan saja.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"username"),": Username nyaa.si"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"password"),": Password nyaa.si"))))),(0,r.kt)("li",{parentName:"ol"},"Invite bot anda dengan permission minimal dibawah ini",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Manage Roles"),(0,r.kt)("li",{parentName:"ul"},"Manage Channels"),(0,r.kt)("li",{parentName:"ul"},"Kick Members"),(0,r.kt)("li",{parentName:"ul"},"Ban Members"),(0,r.kt)("li",{parentName:"ul"},"Change Nickname"),(0,r.kt)("li",{parentName:"ul"},"Manage Nicknames"),(0,r.kt)("li",{parentName:"ul"},"Manage Webhooks"),(0,r.kt)("li",{parentName:"ul"},"View Channels"),(0,r.kt)("li",{parentName:"ul"},"Send Messages"),(0,r.kt)("li",{parentName:"ul"},"Manage Messages"),(0,r.kt)("li",{parentName:"ul"},"Embed Links"),(0,r.kt)("li",{parentName:"ul"},"Attach Files"),(0,r.kt)("li",{parentName:"ul"},"Read Message History"),(0,r.kt)("li",{parentName:"ul"},"Mention Everyone"),(0,r.kt)("li",{parentName:"ul"},"Use External Emojis"),(0,r.kt)("li",{parentName:"ul"},"Add Reactions"))),(0,r.kt)("li",{parentName:"ol"},"Jalankan bot dengan ",(0,r.kt)("inlineCode",{parentName:"li"},"python bot.py")),(0,r.kt)("li",{parentName:"ol"},"Aktifkan naoTimes Showtimes dengan ",(0,r.kt)("inlineCode",{parentName:"li"},"!ntadmin initiate")),(0,r.kt)("li",{parentName:"ol"},"Ikuti perintahnnya dan klik react ",(0,r.kt)("inlineCode",{parentName:"li"},"centang")," jika sudah benar semua"),(0,r.kt)("li",{parentName:"ol"},"Bot siap digunakan")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("p",null,"Kalau dijalankan di Heroku, atur ",(0,r.kt)("inlineCode",{parentName:"p"},"gist_id")," secara manual dan buat gist sesuai langkah 2",(0,r.kt)("br",null),"\nTetapi isi contentnya seperti ini:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "serverowner": [\n        "ID_ADMIN_SERVER_AWAL"\n    ],\n    "SERVER_ID_AWAL": {\n        "serverowner": [\n            "ID_ADMIN_SERVER_AWAL"\n        ],\n        "announce_channel": "ID_CHANNEL_PROGRESS",\n        "anime": {},\n        "alias": {}\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Contoh"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "serverowner": [\n        "466469077444067372"\n    ],\n    "472705451117641729": {\n        "serverowner": [\n            "466469077444067372"\n        ],\n        "announce_channel": "558321533060251664",\n        "anime": {},\n        "alias": {}\n    }\n}\n')),(0,r.kt)("p",null,"Lalu copy ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Gist IDnya"))," dan masukan ke ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"config.json"))))}m.isMDXComponent=!0}}]);