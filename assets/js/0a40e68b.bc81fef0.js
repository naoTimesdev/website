(self.webpackChunk=self.webpackChunk||[]).push([[3276],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>u,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,c=d["".concat(l,".").concat(h)]||d[h]||m[h]||r;return a?i.createElement(c,o(o({ref:t},u),{},{components:a})):i.createElement(c,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1410:e=>{e.exports={title:"naoTimes",tagline:"Bot berbahasa Indonesia untuk membantu tracking garapan fansubber",url:"https://naoti.me",baseUrl:"/",organizationName:"naoTimesdev",projectName:"website",scripts:[{src:"https://tr.n4o.xyz/js/plausible.js",async:!0,defer:!0,"data-domain":"naoti.me"}],favicon:"img/favicon.ico",customFields:{users:[],version:"3.0.0"},onBrokenLinks:"log",onBrokenMarkdownLinks:"log",presets:[["@docusaurus/preset-classic",{docs:{path:"docs",showLastUpdateAuthor:!0,showLastUpdateTime:!0,sidebarPath:6679},blog:{path:"blog"},theme:{customCss:[7253]}}]],themeConfig:{colorMode:{defaultMode:"dark"},algolia:{apiKey:"baef4cca0522683cd2d596fae5f15524",indexName:"naotimes-docs",appId:"38N8AZP6IV",placeholder:"Cari"},navbar:{title:"naoTimes",logo:{src:"assets/img/nt120.png"},items:[{to:"docs/",label:"Dokumentasi",position:"left"},{to:"blog/",label:"Blog",position:"left"},{href:"/invite",label:"Invite",position:"right"},{href:"/donasi",position:"right",label:"Donasi"},{href:"https://github.com/naoTimesdev/naoTimes",position:"right",className:"header-github-link"}]},image:"assets/img/nt256.png",footer:{links:[{title:"Komunitas",items:[{label:"GitHub",href:"https://github.com/naoTimesdev"},{label:"Discord",href:"https://discord.gg/7KyYecn"},{label:"Donasi",href:"/donasi"}]},{title:"Legal",items:[{label:"Syarat dan Ketentuan",href:"/terms"},{label:"Kebijakan Privasi",href:"/privasi"},{label:"Hubungi kami",href:"/kontak"}]},{title:"Lain-lain",items:[{label:"WebUI",href:"https://panel.naoti.me/"},{label:"Status",href:"https://status.naoti.me/"},{label:"ihateani.me",href:"https://ihateani.me/"}]}],copyright:"Copyright \xa9 2021 naoTimes Dev | Website Built with Docusaurus"}}}},6679:e=>{e.exports={docs:["home",{type:"category",label:"Perintah Bot",collapsed:!1,items:["ntperintah",{type:"category",label:"Animanga, VN, dan VTuber",items:["perintah/ayaya/animanga","perintah/ayaya/vn","perintah/ayaya/vtuber"]},{type:"category",label:"NSFW",items:["perintah/bahaya/nh","perintah/bahaya/imagebooru"]},{type:"category",label:'"Fun"',items:["perintah/fun/info","perintah/fun/tanya","perintah/fun/random","perintah/fun/reaksi"]},{type:"category",label:"Kutubuku",items:["perintah/kutubuku/kbbi","perintah/kutubuku/kateglo","perintah/kutubuku/padanan","perintah/kutubuku/webster","perintah/kutubuku/jisho","perintah/kutubuku/translasi","perintah/kutubuku/matematika"]},{type:"category",label:"Moderasi",items:["perintah/moderasi/automod","perintah/moderasi/kanal","perintah/moderasi/pesan","perintah/moderasi/user","perintah/moderasi/utas","perintah/moderasi/modlogs"]},{type:"category",label:"Peninjau Website",items:["perintah/peninjau/anibin","perintah/peninjau/cuaca","perintah/peninjau/kurs","perintah/peninjau/saus"]},{type:"category",label:"Showtimes",items:["perintah/showtimes/intro","perintah/showtimes/user","perintah/showtimes/staff","perintah/showtimes/admin","perintah/showtimes/alias","perintah/showtimes/kolaborasi"]},{type:"category",label:"Pemutar Musik",items:["perintah/musik/intro","perintah/musik/perintah"]},"perintah/ntpfsrss","perintah/vote"]},{type:"category",label:"Integrasi",items:["integrasi/ntui","integrasi/ntwebsite"]},{type:"category",label:"Referensi",items:["referensi/timestring"]},{type:"category",label:"Setup",items:["selfhost/intro","selfhost/persiapan","selfhost/setup"]},"credits/credits","credits/changelog"]}},6940:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>l,metadata:()=>p,toc:()=>u,Versioning:()=>m,default:()=>h});var i=a(2122),n=a(9756),r=(a(7294),a(3905)),o=a(1410),s=a.n(o),l={id:"home",title:"Selamat datang",slug:"/"},p={unversionedId:"home",id:"home",isDocsHomePage:!1,title:"Selamat datang",description:"naoTimes",source:"@site/docs/home.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",version:"current",lastUpdatedBy:"Aiman",lastUpdatedAt:1635499879,formattedLastUpdatedAt:"10/29/2021",frontMatter:{id:"home",title:"Selamat datang",slug:"/"},sidebar:"docs",next:{title:"Perintah",permalink:"/docs/perintah"}},u=[{value:"naoTimes",id:"naotimes",children:[]},{value:"Informasi",id:"informasi",children:[]},{value:"Invite Bot",id:"invite-bot",children:[]},{value:"Langkah Selanjutnya",id:"langkah-selanjutnya",children:[]},{value:"Source Code",id:"source-code",children:[]}],m=function(){return(0,r.kt)("span",null,s().customFields.version)},d={toc:u,Versioning:m};function h(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"naotimes"},"naoTimes"),(0,r.kt)("h4",{id:"versi"},"Versi ",(0,r.kt)(m,{mdxType:"Versioning"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/endpoint?color=%231c7d9a&logo=discord&logoColor=white&style=for-the-badge&url=https%3A%2F%2Fapi.ihateani.me%2Fshield%2Fserver",alt:"Server Count"})," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/endpoint?color=%231c7d9a&logo=discord&logoColor=white&style=for-the-badge&url=https%3A%2F%2Fapi.ihateani.me%2Fshield%2Fpengguna",alt:"Users Count"})," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/endpoint?color=%231c7d9a&logo=discord&logoColor=white&style=for-the-badge&url=https%3A%2F%2Fapi.ihateani.me%2Fshield%2Fperintah",alt:"Commands Count"})," ",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/uptimerobot/status/m786469671-606ba8f8deaf00978879eb7d?style=for-the-badge",alt:"Bot Status"})),(0,r.kt)("h2",{id:"informasi"},"Informasi"),(0,r.kt)("p",null,"Bot ini dibuat dengan Inspirasi dari Bot Aquarius yang ada di server discord GJM dan DDY.\nBot ini dibuat oleh saya sendiri (N4O#8868) pada 21 Maret 2019 karena gabut."),(0,r.kt)("h2",{id:"invite-bot"},"Invite Bot"),(0,r.kt)("p",null,"Males setup sendiri? Mau simpel dan cepat?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Invite Bot dengan klik link ini: ",(0,r.kt)("a",{parentName:"li",href:"https://naoti.me/invite"},"Invite Bot")),(0,r.kt)("li",{parentName:"ol"},"Masuk ke ",(0,r.kt)("a",{parentName:"li",href:"https://panel.naoti.me/"},"naoTimes WebUI")," untuk registrasi!"),(0,r.kt)("li",{parentName:"ol"},"Tambah Proyek baru ke bot via WebUI maupun Bot!")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Langkah di atas merupakan langkah yang ingin menambah Showtimes ke server Discordnya, jika tidak menginginkannya, tidak usah dan cukup invite bot saja."))),(0,r.kt)("h2",{id:"langkah-selanjutnya"},"Langkah Selanjutnya"),(0,r.kt)("p",null,"Sudah di set-up oleh N4O? Mari kita melihat berbagai macam perintah yang bisa digunakan!"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"perintah"},"Perintah Bot")),(0,r.kt)("h2",{id:"source-code"},"Source Code"),(0,r.kt)("p",null,"Bot ini open-sourced di GitHub! Cek repositorynya di sini: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/naoTimesdev/naoTimes"},"naoTimesdev/naoTimes"),(0,r.kt)("br",null),"\nDokumentasi juga terdapat di GitHub, bantu improvisasi di sini: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/naoTimesdev/website"},"naoTimesdev/website")))}h.isMDXComponent=!0}}]);