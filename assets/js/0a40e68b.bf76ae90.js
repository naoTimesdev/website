(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||o;return n?i.a.createElement(m,s(s({ref:t},c),{},{components:n})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},117:function(e,t,n){e.exports={title:"naoTimes",tagline:"Bot berbahasa Indonesia untuk membantu tracking garapan fansubber",url:"https://naoti.me",baseUrl:"/",organizationName:"naoTimesdev",projectName:"website",scripts:["https://buttons.github.io/buttons.js"],favicon:"img/favicon.ico",customFields:{users:[],version:"2.0.4"},onBrokenLinks:"log",onBrokenMarkdownLinks:"log",presets:[["@docusaurus/preset-classic",{docs:{path:"docs",showLastUpdateAuthor:!0,showLastUpdateTime:!0,sidebarPath:"sidebars.json"},blog:{path:"blog"},theme:{customCss:[38]}}]],plugins:[],themeConfig:{colorMode:{defaultMode:"dark"},navbar:{title:"naoTimes",logo:{src:"assets/img/nt120.png"},items:[{to:"docs/",label:"Dokumentasi",position:"left"},{to:"blog/",label:"Blog",position:"left"},{href:"/invite",label:"Invite",position:"right"},{href:"https://trakteer.id/noaione",label:"Donasi",position:"right"}]},image:"assets/img/nt256.png",footer:{links:[{title:"Komunitas",items:[{label:"GitHub",href:"https://github.com/naoTimesdev"},{label:"Discord",href:"https://discord.gg/7KyYecn"}]},{title:"Lain-lain",items:[{label:"WebUI",href:"https://panel.naoti.me/"},{label:"Status",href:"https://status.naoti.me/"},{label:"ihateani.me",href:"https://ihateani.me/"}]}],copyright:"Copyright \xa9 2021 naoTimes Dev | Website Built with Docusaurus"}}}},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"Versioning",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),o=(n(0),n(105)),r=n(117),s=n.n(r),l={id:"home",title:"naoTimes",slug:"/"},c={unversionedId:"home",id:"home",isDocsHomePage:!1,title:"naoTimes",description:"export const Versioning = () => (",source:"@site/docs/home.mdx",slug:"/",permalink:"/docs/",version:"current",lastUpdatedBy:"noaione",lastUpdatedAt:1617530341,formattedLastUpdatedAt:"4/4/2021",sidebar:"docs",next:{title:"Perintah",permalink:"/docs/perintah"}},p=[{value:"Informasi",id:"informasi",children:[]},{value:"Invite Bot",id:"invite-bot",children:[]},{value:"Langkah Selanjutnya",id:"langkah-selanjutnya",children:[]},{value:"Source Code",id:"source-code",children:[]}],b=function(){return Object(o.b)("span",null,s.a.customFields.version)},d={toc:p,Versioning:b};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"versi"},"Versi ",Object(o.b)(b,{mdxType:"Versioning"})),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/endpoint?color=%231c7d9a&logo=discord&logoColor=white&style=for-the-badge&url=https%3A%2F%2Fapi.ihateani.me%2Fshield%2Fserver",alt:"Server Count"})," ",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/endpoint?color=%231c7d9a&logo=discord&logoColor=white&style=for-the-badge&url=https%3A%2F%2Fapi.ihateani.me%2Fshield%2Fpengguna",alt:"Users Count"})," ",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/endpoint?color=%231c7d9a&logo=discord&logoColor=white&style=for-the-badge&url=https%3A%2F%2Fapi.ihateani.me%2Fshield%2Fperintah",alt:"Commands Count"})," ",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/uptimerobot/status/m786469671-606ba8f8deaf00978879eb7d?style=for-the-badge",alt:"Bot Status"})),Object(o.b)("h2",{id:"informasi"},"Informasi"),Object(o.b)("p",null,"Bot ini dibuat dengan Inspirasi dari Bot Aquarius yang ada di server discord GJM dan DDY.\nBot ini dibuat oleh saya sendiri (N4O#8868) pada 21 Maret 2019 karena gabut."),Object(o.b)("h2",{id:"invite-bot"},"Invite Bot"),Object(o.b)("p",null,"Males setup sendiri? Mau simpel dan cepat?"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Invite Bot dengan klik link ini: ",Object(o.b)("a",{parentName:"li",href:"https://naoti.me/invite"},"Invite Bot")),Object(o.b)("li",{parentName:"ol"},"Masuk ke ",Object(o.b)("a",{parentName:"li",href:"https://panel.naoti.me/"},"naoTimes WebUI")," untuk registrasi!"),Object(o.b)("li",{parentName:"ol"},"Tambah Proyek baru ke bot via WebUI maupun Bot!")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Langkah di atas merupakan langkah yang ingin menambah Showtimes ke server Discordnya, jika tidak menginginkannya, tidak usah dan cukup invite bot saja."))),Object(o.b)("h2",{id:"langkah-selanjutnya"},"Langkah Selanjutnya"),Object(o.b)("p",null,"Sudah di set-up oleh N4O? Mari kita melihat berbagai macam perintah yang bisa digunakan!"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"perintah"},"Perintah Bot")),Object(o.b)("h2",{id:"source-code"},"Source Code"),Object(o.b)("p",null,"Bot ini open-sourced di GitHub! Cek repositorynya di sini: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/naoTimesdev/naoTimes"},"naoTimesdev/naoTimes"),Object(o.b)("br",null),"\nDokumentasi juga terdapat di GitHub, bantu improvisasi di sini: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/naoTimesdev/website"},"naoTimesdev/website")))}u.isMDXComponent=!0}}]);