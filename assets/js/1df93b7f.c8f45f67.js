(self.webpackChunk=self.webpackChunk||[]).push([[3237],{1410:e=>{e.exports={title:"naoTimes",tagline:"Bot berbahasa Indonesia untuk membantu tracking garapan fansubber",url:"https://naoti.me",baseUrl:"/",organizationName:"naoTimesdev",projectName:"website",scripts:[{src:"https://tr.n4o.xyz/js/plausible.js",async:!0,defer:!0,"data-domain":"naoti.me"}],favicon:"img/favicon.ico",customFields:{users:[],version:"3.1.0rc1"},onBrokenLinks:"log",onBrokenMarkdownLinks:"log",presets:[["@docusaurus/preset-classic",{docs:{path:"docs",showLastUpdateAuthor:!0,showLastUpdateTime:!0,sidebarPath:6679},blog:{path:"blog"},theme:{customCss:[7253]}}]],themeConfig:{announcementBar:{id:"privacy-update-notice-20211123",content:'Kami memperbaharui kebijakan privasi, mohon periksa <a href="/privasi">di sini</a>',isCloseable:!0},colorMode:{defaultMode:"dark"},algolia:{apiKey:"baef4cca0522683cd2d596fae5f15524",indexName:"naotimes-docs",appId:"38N8AZP6IV",placeholder:"Cari"},navbar:{title:"naoTimes",logo:{src:"assets/img/nt120.png"},items:[{to:"docs/",label:"Dokumentasi",position:"left"},{to:"blog/",label:"Blog",position:"left"},{href:"/invite",label:"Invite",position:"right"},{href:"/donasi",position:"right",label:"Donasi"},{href:"/legal",position:"right",label:"Legal"},{href:"https://github.com/naoTimesdev/naoTimes",position:"right",className:"header-github-link"}]},image:"assets/img/nt256.png",footer:{links:[{title:"Komunitas",items:[{label:"GitHub",href:"https://github.com/naoTimesdev"},{label:"Discord",href:"https://discord.gg/7KyYecn"},{label:"Donasi",href:"/donasi"}]},{title:"Legal",items:[{label:"Syarat dan Ketentuan",href:"/terms"},{label:"Kebijakan Privasi",href:"/privasi"},{label:"Hubungi kami",href:"/kontak"}]},{title:"Lain-lain",items:[{label:"WebUI",href:"https://panel.naoti.me/"},{label:"Status",href:"https://status.naoti.me/"},{label:"ihateani.me",href:"https://ihateani.me/"}]}],copyright:"Copyright \xa9 2021 naoTimes Dev | Website Built with Docusaurus"}}}},6679:e=>{e.exports={docs:["home",{type:"category",label:"Perintah Bot",collapsed:!1,items:["ntperintah",{type:"category",label:"Animanga, VN, dan VTuber",items:["perintah/ayaya/animanga","perintah/ayaya/vn","perintah/ayaya/vtuber"]},{type:"category",label:"NSFW",items:["perintah/bahaya/nh","perintah/bahaya/imagebooru"]},{type:"category",label:'"Fun"',items:["perintah/fun/info","perintah/fun/tanya","perintah/fun/random","perintah/fun/reaksi","perintah/fun/pengingat"]},{type:"category",label:"Kutubuku",items:["perintah/kutubuku/kbbi","perintah/kutubuku/kateglo","perintah/kutubuku/padanan","perintah/kutubuku/webster","perintah/kutubuku/jisho","perintah/kutubuku/translasi","perintah/kutubuku/matematika"]},{type:"category",label:"Moderasi",items:["perintah/moderasi/automod","perintah/moderasi/kanal","perintah/moderasi/pesan","perintah/moderasi/user","perintah/moderasi/utas","perintah/moderasi/modlogs"]},{type:"category",label:"Peninjau Website",items:["perintah/peninjau/anibin","perintah/peninjau/cuaca","perintah/peninjau/kurs","perintah/peninjau/saus"]},{type:"category",label:"Showtimes",items:["perintah/showtimes/intro","perintah/showtimes/user","perintah/showtimes/staff","perintah/showtimes/admin","perintah/showtimes/alias","perintah/showtimes/kolaborasi"]},{type:"category",label:"Pemutar Musik",items:["perintah/musik/intro","perintah/musik/perintah"]},"perintah/ntpfsrss","perintah/vote"]},{type:"category",label:"Integrasi",items:["integrasi/ntui","integrasi/ntwebsite"]},{type:"category",label:"Referensi",items:["referensi/timestring"]},{type:"category",label:"Setup",items:["selfhost/intro","selfhost/persiapan","selfhost/setup"]},"credits/credits","credits/changelog"]}},3374:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var i=a(1287),n=a(7294),r=a(1410),s=a.n(r),o=a(3117);function l(e){return n.createElement("a",(0,o.Z)({},e,{className:"button button--outline button--primary",style:{textTransform:"uppercase"}}),e.children)}var m={imgSlot:{display:"block",justifyContent:"center",alignItems:"center",textAlign:"center",margin:"auto",marginTop:"3rem",borderRadius:"999px"},container:{display:"flex",justifyContent:"center",alignItems:"center",height:"",flexDirection:"column",fontSize:"20px"},ntTitleContainer:{marginTop:"1rem",marginBottom:"0rem"},ntTitle:{fontSize:"3rem",fontWeight:"lighter"},ntSubVersion:{fontWeight:"bold",marginLeft:"0.5rem"},ntDescription:{marginTop:"1rem",fontSize:"1.15rem",marginBottom:"1rem",marginLeft:"0.5rem",marginRight:"0.5rem",textAlign:"center"},shieldContainer:{display:"flex",flexDirection:"row",gap:"0.5rem",marginBottom:"1.25rem"},linkContainer:{display:"flex",flexDirection:"row",gap:"0.5rem"}};function p(){return n.createElement(i.Z,{description:"Bot berbahasa Indonesia untuk membantu tracking garapan fansubber"},n.createElement("img",{src:"/assets/img/nt192.png",style:m.imgSlot}),n.createElement("div",{style:m.container},n.createElement("p",{style:m.ntTitleContainer},n.createElement("span",{style:m.ntTitle},"naoTimes"),n.createElement("span",{style:m.ntSubVersion},"v",s().customFields.version)),n.createElement("p",{style:m.ntDescription},"Bot berbahasa Indonesia untuk membantu tracking garapan fansubber"),n.createElement("div",{style:m.shieldContainer},n.createElement("img",{src:"https://img.shields.io/endpoint?color=%231c7d9a&logo=discord&logoColor=white&style=for-the-badge&url=https%3A%2F%2Fapi.ihateani.me%2Fshield%2Fserver",alt:"Server Count"}),n.createElement("img",{src:"https://img.shields.io/endpoint?color=%231c7d9a&logo=discord&logoColor=white&style=for-the-badge&url=https%3A%2F%2Fapi.ihateani.me%2Fshield%2Fshowtimes",alt:"Showtimes Count"}),n.createElement("img",{src:"https://img.shields.io/uptimerobot/status/m786469671-606ba8f8deaf00978879eb7d?label=Bot&style=for-the-badge",alt:"Uptime Status"})),n.createElement("div",{style:m.linkContainer},n.createElement(l,{href:"/invite/"},"Invite"),n.createElement(l,{href:"/docs/"},"Dokumentasi"),n.createElement(l,{href:"/blog/"},"Blog"))),n.createElement("br",null))}}}]);