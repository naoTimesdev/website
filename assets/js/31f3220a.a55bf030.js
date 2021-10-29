(self.webpackChunk=self.webpackChunk||[]).push([[1478],{3905:(a,e,t)=>{"use strict";t.d(e,{Zo:()=>u,kt:()=>k});var n=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function i(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function o(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},i=Object.keys(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var p=n.createContext({}),s=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):o(o({},e),a)),t},u=function(a){var e=s(a.components);return n.createElement(p.Provider,{value:e},a.children)},m={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,i=a.originalType,p=a.parentName,u=l(a,["components","mdxType","originalType","parentName"]),d=s(t),k=r,c=d["".concat(p,".").concat(k)]||d[k]||m[k]||i;return t?n.createElement(c,o(o({ref:e},u),{},{components:t})):n.createElement(c,o({ref:e},u))}));function k(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=a,l.mdxType="string"==typeof a?a:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1716:(a,e,t)=>{"use strict";t.r(e),t.d(e,{frontMatter:()=>o,metadata:()=>l,toc:()=>p,default:()=>u});var n=t(2122),r=t(9756),i=(t(7294),t(3905)),o={title:"Persiapan",slug:"/selfhost/prepare"},l={unversionedId:"selfhost/persiapan",id:"selfhost/persiapan",isDocsHomePage:!1,title:"Persiapan",description:"Agar naoTimes dapat jalan dengan baik dan benar, anda harus mengikuti langkah-langkah ini dengan benar juga.",source:"@site/docs/selfhost/persiapan.md",sourceDirName:"selfhost",slug:"/selfhost/prepare",permalink:"/docs/selfhost/prepare",version:"current",lastUpdatedBy:"Aiman",lastUpdatedAt:1635499879,formattedLastUpdatedAt:"10/29/2021",frontMatter:{title:"Persiapan",slug:"/selfhost/prepare"},sidebar:"docs",previous:{title:"Intro",permalink:"/docs/selfhost"},next:{title:"Setup Bot",permalink:"/docs/selfhost/setup"}},p=[{value:"Discord Bot",id:"discord-bot",children:[]},{value:"Database",id:"database",children:[]},{value:"Pemutar musik",id:"pemutar-musik",children:[]},{value:"Akun-akun lain",id:"akun-akun-lain",children:[]},{value:"naoTimes",id:"naotimes",children:[]}],s={toc:p};function u(a){var e=a.components,t=(0,r.Z)(a,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Agar naoTimes dapat jalan dengan baik dan benar, anda harus mengikuti langkah-langkah ini dengan benar juga."),(0,i.kt)("h2",{id:"discord-bot"},"Discord Bot"),(0,i.kt)("p",null,"Mari kita mulai dengan membuat bot terlebih dahulu di ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications/"},"Developer Portal"),"."),(0,i.kt)("p",null,"Anda dapat melakukan langkah ini: ",(0,i.kt)("a",{parentName:"p",href:"https://ndiscordpy.readthedocs.io/id/latest/discord.html"},"Membuat akun Bot Baru")),(0,i.kt)("h2",{id:"database"},"Database"),(0,i.kt)("p",null,"naoTimes menggunakan 2 database, in-memory database dan remote-database."),(0,i.kt)("p",null,"In-memory yang kami gunakan adalah Redis, mohon setup itu terlebih dahulu: ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/topics/quickstart"},"Redis Quickstart"),".",(0,i.kt)("br",null),"\nLalu remote database yang kami gunakan adalah MongoDB, anda dapat self-host atau menggunakan ",(0,i.kt)("a",{parentName:"p",href:"https://www.mongodb.com/atlas/database"},"MongoDB Atlas"),"."),(0,i.kt)("p",null,"Jika anda ingin host sendiri, maka ikuti langkah ini: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/installation/"},"MongoDB Installation"),"."),(0,i.kt)("p",null,"Simpan semua URL untuk nanti."),(0,i.kt)("h2",{id:"pemutar-musik"},"Pemutar musik"),(0,i.kt)("p",null,"Jika anda ingin menambah fitur pemutar musik, mohon setup Lavalink terlebih dahulu: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/freyacodes/Lavalink#server-configuration"},"Lavalink"),"."),(0,i.kt)("p",null,"Jika anda ingin menambah fitur Spotify, anda harus membuat application dengan akun Spotify anda: ",(0,i.kt)("a",{parentName:"p",href:"https://developer.spotify.com/dashboard/"},"Spotify Dashboard"),".",(0,i.kt)("br",null),"\nSimpan Client dan Secret Spotify anda untuk autentikasi nanti dengan Wavelink."),(0,i.kt)("p",null,"DAN, jika anda ingin punya fitur playback langsung dari Spotify, anda harus setup Spotilava: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/noaione/spotilava"},"Spotilava"),".",(0,i.kt)("br",null),"\nSpotilava adalah jembatan antara Lavalink dan Spotify nanti."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Spotify")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Anda membutuhkan akun Premium jika ingin menggunakan fitur playback native Spotify (Spotilava)"))),(0,i.kt)("h2",{id:"akun-akun-lain"},"Akun-akun lain"),(0,i.kt)("p",null,"naoTimes juga menggunakan berbagai fitur dari website berikut:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://vndb.org/"},"VNDB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kbbi.kemdikbud.go.id/"},"KBBI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://db.silveryasha.web.id/"},"FansubDB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://products.wolframalpha.com/api/"},"WolframAlpha")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dictionaryapi.com/"},"Merriam Webster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://steamcommunity.com/dev"},"Steam API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.genius.com/"},"Genius")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://openweathermap.org/api"},"OpenWeatherApi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opencagedata.com/api#quickstart"},"OpenCage Geocoding API"))),(0,i.kt)("p",null,"Untuk FansubDB, anda butuh akun dengan status Kontributor.",(0,i.kt)("br",null),"\nUntuk MerriamWebster, anda butuh dictionary dan thesaurus Collegiate."),(0,i.kt)("h2",{id:"naotimes"},"naoTimes"),(0,i.kt)("p",null,"Saatnya kita setup naoTimes, mari kita kehalaman ",(0,i.kt)("a",{parentName:"p",href:"/docs/selfhost/setup"},"Instalasi"),"."))}u.isMDXComponent=!0}}]);