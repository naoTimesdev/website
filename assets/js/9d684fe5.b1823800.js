(self.webpackChunk=self.webpackChunk||[]).push([[2703],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>m,kt:()=>s});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=o(a),s=r,k=c["".concat(p,".").concat(s)]||c[s]||d[s]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7801:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>l,metadata:()=>u,toc:()=>p,default:()=>m});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l={title:"VTuber",slug:"/perintah/anivn/vtuber"},u={unversionedId:"perintah/ayaya/vtuber",id:"perintah/ayaya/vtuber",isDocsHomePage:!1,title:"VTuber",description:"Dihalaman ini, kami akan menjelaskan sedikit tentang kumpulan perintah VTuber yang diprakasai dengan api.ihateani.me.",source:"@site/docs/perintah/ayaya/vtuber.md",sourceDirName:"perintah/ayaya",slug:"/perintah/anivn/vtuber",permalink:"/docs/perintah/anivn/vtuber",version:"current",lastUpdatedBy:"Aiman",lastUpdatedAt:1635499879,formattedLastUpdatedAt:"10/29/2021",frontMatter:{title:"VTuber",slug:"/perintah/anivn/vtuber"},sidebar:"docs",previous:{title:"Visual Novel",permalink:"/docs/perintah/anivn/vn"},next:{title:"nH",permalink:"/docs/perintah/bahaya/nh"}},p=[{value:"Perintah",id:"perintah",children:[]},{value:"Penjelasan Sistem Argparse",id:"penjelasan-sistem-argparse",children:[]},{value:"Dalam .gif",id:"dalam-gif",children:[{value:"!vtuber live, !vtuber jadwal, !vtuber channel",id:"vtuber-live-vtuber-jadwal-vtuber-channel",children:[]},{value:"!vtuber grup",id:"vtuber-grup",children:[]}]}],o={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dihalaman ini, kami akan menjelaskan sedikit tentang kumpulan perintah VTuber yang diprakasai dengan ",(0,i.kt)("a",{parentName:"p",href:"https://api.ihateani.me/"},"api.ihateani.me"),"."),(0,i.kt)("p",null,"Setiap perintah yang kami tulis di sini support pagination dengan Reaksi dan juga menggunakan parser khusus. (",(0,i.kt)("inlineCode",{parentName:"p"},"argparse"),")"),(0,i.kt)("h2",{id:"perintah"},"Perintah"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Nama Command"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Penjelasan"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Contoh"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Alias"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"!vtuber live -h"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Melihat bantuan perintah untuk command ",(0,i.kt)("inlineCode",{parentName:"td"},"vtuber live")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"!vtuber lives")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"!vtuber jadwal -h"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Melihat bantuan perintah untuk command jadwal stream VTuber"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"!vtuber schedule, !vtuber schedules")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"!vtuber channel -h"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Melihat bantuan perintah untuk command informasi channel VTuber"),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"!vtuber channels, !vtuber kanal")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"!vtuber grup"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Melihat list group yang bisa dipakai di argumen ",(0,i.kt)("inlineCode",{parentName:"td"},"-g")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-"),(0,i.kt)("td",{parentName:"tr",align:"center"},"!vtuber group, !vtuber organization, !vtuber organisasi")))),(0,i.kt)("h2",{id:"penjelasan-sistem-argparse"},"Penjelasan Sistem Argparse"),(0,i.kt)("p",null,"Untuk semua command, akan memberikan informasi help yang sama"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"Gunakan: !vtuber live [-h] [-c CHANNELS] [-g GROUPS]\n                     [-P {youtube,twitch,twitcasting,mildom}]\n\nArgumen opsional:\n  -h, --help            Perlihatkan bantuan perintah\n  -c CHANNELS, --channel-id CHANNELS\n                        Filter hanya untuk kanal tertentu, dapat diulang\n                        seperti --platform\n  -g GROUPS, --group GROUPS\n                        Filter untuk organisasi atau grup tertentu, untuk\n                        mendapatkan listnya, dapat menggunakan perintah\n                        '!vtuber grup'.Dapat diulang seperti --platform\n  -P {youtube,twitch,twitcasting,mildom}, --platform {youtube,twitch,twitcasting,mildom}\n                        Filter hasil ke platform tertentu, dapat diulang. Ex:\n                        -P youtube -P twitch\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-c")," atau ",(0,i.kt)("inlineCode",{parentName:"p"},"--channel-id")," berguna untuk memfilter VTuber yang akan diberikan ke user.",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"-g")," atau ",(0,i.kt)("inlineCode",{parentName:"p"},"--group")," berguna untuk memfilter ke organisasi atau grup VTuber tertentu.",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"-P")," atau ",(0,i.kt)("inlineCode",{parentName:"p"},"--platform")," berguna untuk memfilter ke platform tertentu.",(0,i.kt)("br",null),"\nPlatform yang bisa ditulis adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"youtube"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"twitch"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"twitcasting"),", dan ",(0,i.kt)("inlineCode",{parentName:"p"},"mildom"),"."),(0,i.kt)("p",null,"Semua argumen diatas dapat diulang untuk menambahkannya ke filter, contoh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"!vtuber live -g hololive -g hololiveid\n")),(0,i.kt)("p",null,"Akan mengambil informasi live stream untuk grup ",(0,i.kt)("inlineCode",{parentName:"p"},"hololive")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"hololiveid")),(0,i.kt)("h2",{id:"dalam-gif"},"Dalam .gif"),(0,i.kt)("h3",{id:"vtuber-live-vtuber-jadwal-vtuber-channel"},"!vtuber live, !vtuber jadwal, !vtuber channel"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://p.ihateani.me/bhhpgdjq.gif",alt:"vtuber_main_cmd"})),(0,i.kt)("h3",{id:"vtuber-grup"},"!vtuber grup"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://p.ihateani.me/uqralvia.gif",alt:"vtuber_grup"})))}m.isMDXComponent=!0}}]);