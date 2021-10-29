(self.webpackChunk=self.webpackChunk||[]).push([[7850],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>u,kt:()=>s});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,u=m(t,["components","mdxType","originalType","parentName"]),c=p(a),s=r,k=c["".concat(d,".").concat(s)]||c[s]||l[s]||o;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=c;var m={};for(var d in e)hasOwnProperty.call(e,d)&&(m[d]=e[d]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7395:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>i,metadata:()=>m,toc:()=>d,default:()=>u});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i={title:"Automoderasi",slug:"/perintah/mod/automod"},m={unversionedId:"perintah/moderasi/automod",id:"perintah/moderasi/automod",isDocsHomePage:!1,title:"Automoderasi",description:"naoTimes memiliki sistem automoderasi yang lumayan simpel, fitur ini berguna jika anda ingin melarang beberapa keyword untuk diucapkan di peladen anda.",source:"@site/docs/perintah/moderasi/automod.md",sourceDirName:"perintah/moderasi",slug:"/perintah/mod/automod",permalink:"/docs/perintah/mod/automod",version:"current",lastUpdatedBy:"Aiman",lastUpdatedAt:1635499879,formattedLastUpdatedAt:"10/29/2021",frontMatter:{title:"Automoderasi",slug:"/perintah/mod/automod"},sidebar:"docs",previous:{title:"Matematika",permalink:"/docs/perintah/kutubuku/math"},next:{title:"Kanal",permalink:"/docs/perintah/mod/kanal"}},d=[{value:"Perintah",id:"perintah",children:[]},{value:"Dalam .gif",id:"dalam-gif",children:[{value:"Aktifkan automod dan informasi",id:"aktifkan-automod-dan-informasi",children:[]},{value:"Automod tambah",id:"automod-tambah",children:[]},{value:"Automod hapus",id:"automod-hapus",children:[]}]}],p={toc:d};function u(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"naoTimes memiliki sistem automoderasi yang lumayan simpel, fitur ini berguna jika anda ingin melarang beberapa keyword untuk diucapkan di peladen anda."),(0,o.kt)("h2",{id:"perintah"},"Perintah"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Nama Command"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Penjelasan"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Contoh"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Alias"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"!automod"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Mengaktifkan sistem automod untuk peladen anda"),(0,o.kt)("td",{parentName:"tr",align:"center"},"!automod"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"!automod tambah"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Menambahkan kata/regex baru untuk peladen anda"),(0,o.kt)("td",{parentName:"tr",align:"center"},"!automod tambah"),(0,o.kt)("td",{parentName:"tr",align:"center"},"!automod add")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"!automod hapus"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Menghapus sebuah kata dari automoderator"),(0,o.kt)("td",{parentName:"tr",align:"center"},"!automod hapus"),(0,o.kt)("td",{parentName:"tr",align:"center"},"!automod remove")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"!automod matikan"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Mematikan sistem automoderasi"),(0,o.kt)("td",{parentName:"tr",align:"center"},"!automod matikan"),(0,o.kt)("td",{parentName:"tr",align:"center"},"!automod disable")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"!automod info"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Melihat informasi automoderasi peladen anda"),(0,o.kt)("td",{parentName:"tr",align:"center"},"!automod info"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,o.kt)("h2",{id:"dalam-gif"},"Dalam .gif"),(0,o.kt)("h3",{id:"aktifkan-automod-dan-informasi"},"Aktifkan automod dan informasi"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://p.ihateani.me/dgwffvhf.gif",alt:"automod 1"})),(0,o.kt)("h3",{id:"automod-tambah"},"Automod tambah"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://p.ihateani.me/afgzssbc.gif",alt:"automod 2"})),(0,o.kt)("h3",{id:"automod-hapus"},"Automod hapus"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://p.ihateani.me/pjqkpkbu.gif",alt:"automod 3"})))}u.isMDXComponent=!0}}]);