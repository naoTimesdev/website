(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{111:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return s}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=i.a.createContext({}),p=function(e){var n=i.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return i.a.createElement(m.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,b=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,s=c["".concat(b,".").concat(u)]||c[u]||d[u]||r;return t?i.a.createElement(s,l(l({ref:n},m),{},{components:t})):i.a.createElement(s,l({ref:n},m))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,b=new Array(r);b[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var m=2;m<r;m++)b[m]=t[m];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},84:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(111)),b={id:"ntpvote",title:"Sistem Voting",slug:"/perintah/vote"},l={unversionedId:"perintah/ntpvote",id:"perintah/ntpvote",isDocsHomePage:!1,title:"Sistem Voting",description:"Lakukan voting di server anda!",source:"@site/docs/perintah/vote.md",slug:"/perintah/vote",permalink:"/docs/perintah/vote",version:"current",lastUpdatedBy:"noaione",lastUpdatedAt:1617530341,formattedLastUpdatedAt:"4/4/2021",sidebar:"docs",previous:{title:"Peninjau Website",permalink:"/docs/perintah/peninjau"},next:{title:"Pencari Saus",permalink:"/docs/perintah/saus"}},o=[{value:"Perintah",id:"perintah",children:[{value:"Penjelasan Sistem Argparse",id:"penjelasan-sistem-argparse",children:[]},{value:"Time String Format",id:"time-string-format",children:[]}]},{value:"Dalam .gif",id:"dalam-gif",children:[{value:"!vote",id:"vote-1",children:[]}]}],m={toc:o};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Lakukan voting di server anda!"),Object(r.b)("p",null,"Sistem voting ini menggunakan parser bernama argparse, jadi penulisan perintah sedikit berbeda."),Object(r.b)("p",null,"Walau nama modulnya adalah ",Object(r.b)("inlineCode",{parentName:"p"},"Sistem Voting"),", modul ini juga menyediakan perintah untuk giveaway."),Object(r.b)("h2",{id:"perintah"},"Perintah"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"Nama Command"),Object(r.b)("th",{parentName:"tr",align:"center"},"Penjelasan"),Object(r.b)("th",{parentName:"tr",align:"center"},"Contoh"),Object(r.b)("th",{parentName:"tr",align:"center"},"Alias"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"!vote -h"),Object(r.b)("td",{parentName:"tr",align:"center"},"Melihat bantuan perintah untuk command vote"),Object(r.b)("td",{parentName:"tr",align:"center"},"-"),Object(r.b)("td",{parentName:"tr",align:"center"},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"!votekick -h"),Object(r.b)("td",{parentName:"tr",align:"center"},"Melihat bantuan perintah untuk command vote kick"),Object(r.b)("td",{parentName:"tr",align:"center"},"-"),Object(r.b)("td",{parentName:"tr",align:"center"},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"!voteban -h"),Object(r.b)("td",{parentName:"tr",align:"center"},"Melihat bantuan perintah untuk command vote ban"),Object(r.b)("td",{parentName:"tr",align:"center"},"-"),Object(r.b)("td",{parentName:"tr",align:"center"},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"!giveaway -h"),Object(r.b)("td",{parentName:"tr",align:"center"},"Melihat bantuan perintah untuk command giveaway"),Object(r.b)("td",{parentName:"tr",align:"center"},"-"),Object(r.b)("td",{parentName:"tr",align:"center"},"-")))),Object(r.b)("h3",{id:"penjelasan-sistem-argparse"},"Penjelasan Sistem Argparse"),Object(r.b)("h4",{id:"vote"},"Vote"),Object(r.b)("p",null,"Untuk ",Object(r.b)("inlineCode",{parentName:"p"},"!vote")," terdapat 3 optional params dan 1 required params"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"Gunakan: !vote [-h] [--satu-pilihan] [--timer WAKTU] [--opsi OPSI] topik\n\nArgumen yang diwajibkan:\n  topik                 Hal yang ingin divote.\n\nArgumen opsional:\n  -h, --help            Perlihatkan bantuan perintah\n  --satu-pilihan, -S    Gunakan tipe satu pilihan (ya/tidak) untuk reactions.\n  --timer WAKTU, -t WAKTU\n                        Waktu sebelum voting ditutup (Format time string seperti: '30m 30s' untuk 30 menit 30 detik, minimal 3 menit, default 5 menit) Referensi time string:\n                        https://naoti.me/docs/perintah/vote#time-string-format\n  --opsi OPSI, -O OPSI  Opsi voting (minimal 2, batas 10)\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"topik")),": adalah hal yang ingin di voting, mohon gunakan kutip dua.",Object(r.b)("br",null),"\n",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"--satu-pilihan"))," atau ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"-S")),": cukup gunakan reaction centang dan silang, alias ya dan tidak",Object(r.b)("br",null),"\n",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"--timer"))," atau ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"-t")),": waktu voting dalam menit, default adalah 3 menit",Object(r.b)("br",null),"\n",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"--opsi"))," atau ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"-O")),": Opsi yang ingin diberikan didalam voting, gunakan kutip dua."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Contoh"),": ",Object(r.b)("inlineCode",{parentName:"p"},'!vote -O "Python" -O "JavaScript" -O "Brainfuck" -t 5m "Bahasa program terbaik"'),Object(r.b)("br",null),"\nCommand tersebut akan membuat voting dengan judul ",Object(r.b)("inlineCode",{parentName:"p"},"Bahasa program terbaik")," dan 3 pilihan yaitu: ",Object(r.b)("inlineCode",{parentName:"p"},"Python"),", ",Object(r.b)("inlineCode",{parentName:"p"},"JavaScript"),", dan ",Object(r.b)("inlineCode",{parentName:"p"},"Brainfuck"),Object(r.b)("br",null),"\n",Object(r.b)("inlineCode",{parentName:"p"},"-t 5")," akan membuat voting ini berjalan selama 5 menit sebelum ditutup."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},'!vote -S "Apakah saya pintar?"'),"\nCommand tersebut akan membuat voting dengan judul ",Object(r.b)("inlineCode",{parentName:"p"},"Apakah saya pintar?")," dan 2 pilihan yaitu ",Object(r.b)("inlineCode",{parentName:"p"},"Ya")," dan ",Object(r.b)("inlineCode",{parentName:"p"},"Tidak"),".",Object(r.b)("br",null),"\nWaktu votingnya adalah default 3 menit."),Object(r.b)("h4",{id:"votekick-dan-voteban"},"Votekick dan Voteban"),Object(r.b)("p",null,"Sementara untuk ",Object(r.b)("inlineCode",{parentName:"p"},"!votekick")," dan ",Object(r.b)("inlineCode",{parentName:"p"},"!voteban")," terdapat 2 optional params dan 1 required params"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"Gunakan: !votekick [-h] [--timer WAKTU] [--limit BATAS] user\n\nArgumen yang diwajibkan:\n  user                  User yang ingin di ban/kick.\n\nArgumen opsional:\n  -h, --help            Perlihatkan bantuan perintah\n  --timer WAKTU, -t WAKTU\n                        Waktu sebelum voting ditutup (Format time string seperti: '30m 30s' untuk 30 menit 30 detik, minimal 30 detik, default 1 menit) Referensi time string:\n                        https://naoti.me/docs/perintah/vote#time-string-format\n  --limit BATAS, -l BATAS\n                        Limit user untuk melaksanakan kick/ban (minimal 5 orang)\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"user")),": adalah user yang ingin di kick/ban, bisa di mention orangnya, ketik IDnya, atau tulis Usernamenya",Object(r.b)("br",null),"\n",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"--timer"))," atau ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"-t")),": waktu voting dalam detik, default adalah 60 detik",Object(r.b)("br",null),"\n",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"--limit"))," atau ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"-l")),": batas orang yang dibutuhkan didalam vote sebelum di kick/ban (tidak termasuk user yang buat vote, dan yang akan di kick/ban), default 5 user",Object(r.b)("br",null)),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Contoh"),": ",Object(r.b)("inlineCode",{parentName:"p"},"!votekick -l 10 -t 3m 466469077444067372"),Object(r.b)("br",null),"\nAkan mengaktifkan votekick untuk user ID ",Object(r.b)("inlineCode",{parentName:"p"},"466469077444067372"),", voting dibuka untuk 180 detik atau 3 menit, dan dibutuhkan minimal 10 orang sebelum di tentukan."),Object(r.b)("h4",{id:"giveaway"},"Giveaway"),Object(r.b)("p",null,"Yang terakhir adalah ",Object(r.b)("inlineCode",{parentName:"p"},"!giveaway"),", hanya ada 1 required param dan 1 optional param"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"Gunakan: !giveaway [-h] [--timer WAKTU] barang\n\nArgumen yang diwajibkan:\n  barang                Hal yang ingin diberikan\n\nArgumen opsional:\n  -h, --help            Perlihatkan bantuan perintah\n  --timer WAKTU, -t WAKTU\n                        Waktu sebelum voting ditutup (Format time string seperti: '30m 30s' untuk 30 menit 30 detik, minimal 5 menit, default 1 jam) Referensi time string:\n                        https://naoti.me/docs/perintah/vote#time-string-format\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Contoh"),": ",Object(r.b)("inlineCode",{parentName:"p"},'!giveaway -t 30m "1x Discord Nitro"'),Object(r.b)("br",null),"\nAkan membuat giveaway dengan judul ",Object(r.b)("inlineCode",{parentName:"p"},"1x Discord Nitro")," dengan batas waktu 30 menit"),Object(r.b)("h3",{id:"time-string-format"},"Time String Format"),Object(r.b)("p",null,"Ini adalah format kustom untuk menulis waktu di bot naoTimes."),Object(r.b)("p",null,"Format ini memiliki beberapa suffix (akhiran) khusus yang dimengerti oleh Bot:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Milidetik: ",Object(r.b)("inlineCode",{parentName:"li"},"ms"),", ",Object(r.b)("inlineCode",{parentName:"li"},"mil"),", ",Object(r.b)("inlineCode",{parentName:"li"},"mill"),", ",Object(r.b)("inlineCode",{parentName:"li"},"millis"),", ",Object(r.b)("inlineCode",{parentName:"li"},"milli"),", ",Object(r.b)("inlineCode",{parentName:"li"},"msec"),", ",Object(r.b)("inlineCode",{parentName:"li"},"msecs"),", ",Object(r.b)("inlineCode",{parentName:"li"},"milisec"),", ",Object(r.b)("inlineCode",{parentName:"li"},"miliseconds"),", ",Object(r.b)("inlineCode",{parentName:"li"},"milisecond")),Object(r.b)("li",{parentName:"ul"},"Detik: ",Object(r.b)("inlineCode",{parentName:"li"},"s"),", ",Object(r.b)("inlineCode",{parentName:"li"},"sec"),", ",Object(r.b)("inlineCode",{parentName:"li"},"secs"),", ",Object(r.b)("inlineCode",{parentName:"li"},"second"),", ",Object(r.b)("inlineCode",{parentName:"li"},"seconds"),", ",Object(r.b)("inlineCode",{parentName:"li"},"detik")),Object(r.b)("li",{parentName:"ul"},"Menit: ",Object(r.b)("inlineCode",{parentName:"li"},"m"),", ",Object(r.b)("inlineCode",{parentName:"li"},"min"),", ",Object(r.b)("inlineCode",{parentName:"li"},"mins"),", ",Object(r.b)("inlineCode",{parentName:"li"},"minute"),", ",Object(r.b)("inlineCode",{parentName:"li"},"minutes"),", ",Object(r.b)("inlineCode",{parentName:"li"},"menit")),Object(r.b)("li",{parentName:"ul"},"Jam: ",Object(r.b)("inlineCode",{parentName:"li"},"h"),", ",Object(r.b)("inlineCode",{parentName:"li"},"hr"),", ",Object(r.b)("inlineCode",{parentName:"li"},"hrs"),", ",Object(r.b)("inlineCode",{parentName:"li"},"hour"),", ",Object(r.b)("inlineCode",{parentName:"li"},"hours"),", ",Object(r.b)("inlineCode",{parentName:"li"},"jam"),", ",Object(r.b)("inlineCode",{parentName:"li"},"j")),Object(r.b)("li",{parentName:"ul"},"Hari: ",Object(r.b)("inlineCode",{parentName:"li"},"d"),", ",Object(r.b)("inlineCode",{parentName:"li"},"day"),", ",Object(r.b)("inlineCode",{parentName:"li"},"days"),", ",Object(r.b)("inlineCode",{parentName:"li"},"hari")),Object(r.b)("li",{parentName:"ul"},"Minggu: ",Object(r.b)("inlineCode",{parentName:"li"},"w"),", ",Object(r.b)("inlineCode",{parentName:"li"},"wk"),", ",Object(r.b)("inlineCode",{parentName:"li"},"week"),", ",Object(r.b)("inlineCode",{parentName:"li"},"weeks"),", ",Object(r.b)("inlineCode",{parentName:"li"},"minggu")),Object(r.b)("li",{parentName:"ul"},"Bulan: ",Object(r.b)("inlineCode",{parentName:"li"},"M"),", ",Object(r.b)("inlineCode",{parentName:"li"},"mo"),", ",Object(r.b)("inlineCode",{parentName:"li"},"month"),", ",Object(r.b)("inlineCode",{parentName:"li"},"months"),", ",Object(r.b)("inlineCode",{parentName:"li"},"b"),", ",Object(r.b)("inlineCode",{parentName:"li"},"bulan")),Object(r.b)("li",{parentName:"ul"},"Tahun: ",Object(r.b)("inlineCode",{parentName:"li"},"y"),", ",Object(r.b)("inlineCode",{parentName:"li"},"year"),", ",Object(r.b)("inlineCode",{parentName:"li"},"years"),", ",Object(r.b)("inlineCode",{parentName:"li"},"tahun"),", ",Object(r.b)("inlineCode",{parentName:"li"},"t"))),Object(r.b)("p",null,"Suffix/Akhiran tersebut ditulis setalah angka, untuk Milidetik, detik, menit, dan jam ada limit yaitu 1000, 60, 60, 24 secara urut.\nTeks bisa dipisah dengan spasi atau tidak."),Object(r.b)("p",null,"Contoh:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"30m")," untuk 30 menit"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"1hr30menit")," untuk 1 jam 30 menit"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"1 day 2hr 30 menit")," untuk 1 hari 2 jam dan 30 menit")),Object(r.b)("h2",{id:"dalam-gif"},"Dalam .gif"),Object(r.b)("h3",{id:"vote-1"},"!vote"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://p.ihateani.me/vgmbostu.gif",alt:"vote"})),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Untuk !voteban dan !votekick tidak jauh beda dengan !vote"))))}p.isMDXComponent=!0}}]);