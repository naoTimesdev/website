"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5985],{6307:(e,a,s)=>{function t(e,a){(null==a||a>e.length)&&(a=e.length);for(var s=0,t=new Array(a);s<a;s++)t[s]=e[s];return t}function n(e,a){var s="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(s)return(s=s.call(e)).next.bind(s);if(Array.isArray(e)||(s=function(e,a){if(e){if("string"==typeof e)return t(e,a);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(e):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?t(e,a):void 0}}(e))||a&&e&&"number"==typeof e.length){s&&(e=s);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}s.r(a),s.d(a,{default:()=>c});var i=s(4415),r=s(144),m=s(1287),o=s(7294),d=function(e,a,s,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1),this.id=e,this.name=a,this.value=s,this.oauth=t,this.strict=n},l={create_invites:new d("create_invites","Create Invites",1),kick_members:new d("kick_members","Kick Members",2,!0),ban_members:new d("ban_members","Ban Members",4,!0),administrator:new d("administrator","Administrator",8,!0),manage_channels:new d("manage_channels","Manage Channels",16,!0),manage_guild:new d("manage_guild","Manage Server",32,!0),change_nickname:new d("change_nickname","Change Nickname",67108864),manage_nickname:new d("manage_nickname","Manage Nickname",134217728),manage_role:new d("manage_role","Manage Roles",268435456,!0),manage_webhook:new d("manage_webhook","Manage Webhooks",536870912,!0),manage_emoji_stickers:new d("manage_emoji_stickers","Manage Emoji and Stickers",1073741824),view_audit_log:new d("view_audit_log","View Audit Log",128),view_channel:new d("view_channel","Read Messages/View Channels",1024,!1,!0),manage_events:new d("manage_events","Manage Events",8589934592),moderate_members:new d("moderate_members","Moderate Members",1099511627776),send_messages:new d("send_messages","Send Messages",2048,!1,!0),use_public_threads:new d("use_public_threads","Create Public Threads",34359738368,!1,!0),use_private_threads:new d("use_private_threads","Create Private Threads",68719476736),send_messages_in_threads:new d("send_messages_in_threads","Send Messages in Threads",274877906944,!1,!0),send_tts_messages:new d("send_tts_messages","Send TTS Messages",4096),manage_messages:new d("manage_messages","Manage Messages",8192,!0),manage_threads:new d("manage_threads","Manage Threads",17179869184,!0),embed_links:new d("embed_links","Embed Links",16384,!1,!0),attach_files:new d("attach_files","Attach Files",32768,!1,!0),read_messages_history:new d("read_messages_history","Read Messages History",65536),mention_everyone:new d("mention_everyone","Mention Everyone",131072),external_emojis:new d("external_emojis","Use External Emojis",262144,!1,!0),external_stickers:new d("external_stickers","Use External Stickers",137438953472),use_slash_commands:new d("use_slash_commands","Use Application Commands",2147483648,!1,!0),add_reactions:new d("add_reactions","Add Reactions",64),connect_voice:new d("connect_voice","Connect",1048576),speak_voice:new d("speak_voice","Speak",2097152),mute_members:new d("mute_members","Mute Members",4194304),deafen_members:new d("deafen_members","Deafen Members",8388608),move_members:new d("move_members","Move Members",16777216),use_voice_activity:new d("use_voice_activity","Use Voice Activity",33554432),priority_speaker:new d("priority_speaker","Priority Speaker",256)},_=[{id:"base",title:"Base (Semua hal yang diperlukan agar naoTimes dapat jalan)",permissions:[l.send_messages,l.send_messages_in_threads,l.use_public_threads,l.embed_links,l.attach_files,l.view_channel,l.use_slash_commands],strict:!0},{id:"weebs",title:"Anime, Manga, VN, dan VTuber",permissions:[l.add_reactions,l.embed_links,l.read_messages_history,l.manage_messages,l.external_emojis]},{id:"imagebooru",title:"ImageBooru (Danbooru, Gelbooru, dsb)",permissions:[l.add_reactions,l.embed_links,l.read_messages_history,l.manage_messages]},{id:"nhentai",title:"nHentai [NSFW]",permissions:[l.add_reactions,l.embed_links,l.read_messages_history,l.manage_messages]},{id:"msg_react",title:"Reaksi Pesan",permissions:[l.add_reactions,l.embed_links]},{id:"rng",title:"RNGJesus (Pilih sesuatu, roll dadu, roll angka, panjang kontol)",permissions:[],strict:!0},{id:"server_info",title:"Server Info",permissions:[l.embed_links,l.external_emojis]},{id:"user_info",title:"User Info",permissions:[l.embed_links]},{id:"fun_question",title:"Tanya Bot (Kerang, 8ball, dsb)",permissions:[l.embed_links]},{id:"kutubuku",title:"Kutubuku (Jisho, KBBI, Sinonim/Antonim, Padanan kata, dan lain-lain)",permissions:[l.embed_links,l.add_reactions,l.read_messages_history,l.manage_messages]},{id:"musik",title:"Pemutar Musik",permissions:[l.embed_links,l.connect_voice,l.speak_voice,l.priority_speaker]},{id:"modlogs",title:"Tinjauan Moderasi (Logging)",permissions:[l.embed_links,l.read_messages_history,l.view_audit_log,l.external_emojis,l.manage_threads]},{id:"mod_automod",title:"Moderasi: Automoderator",permissions:[l.manage_messages,l.read_messages_history]},{id:"mod_channel",title:"Moderasi: Channel (Lock/Unlock/Slowmode)",permissions:[l.manage_channels]},{id:"mod_member",title:"Moderasi: Member (Mute/Shadowban)",permissions:[l.manage_channels,l.manage_messages,l.manage_role,l.ban_members,l.mute_members,l.moderate_members]},{id:"mod_message",title:"Moderasi: Pesan (Nuklir pesan)",permissions:[l.manage_messages,l.read_messages_history]},{id:"mod_thread",title:"Moderasi: Thread",permissions:[l.manage_threads,l.send_messages_in_threads,l.use_public_threads,l.use_private_threads]},{id:"scrap_anibin",title:"Scraper: Anibin",permissions:[l.embed_links]},{id:"scrap_cuaca",title:"Scraper: Cuaca",permissions:[l.embed_links]},{id:"scrap_kurs",title:"Scraper: Kurs Mata Uang",permissions:[l.embed_links]},{id:"scrap_saus",title:"Scraper: Saus Gambar",permissions:[l.embed_links,l.read_messages_history]},{id:"scrap_steam",title:"Scraper: Steam",permissions:[l.embed_links,l.add_reactions,l.manage_messages,l.read_messages_history]},{id:"showtimes",title:"Showtimes",permissions:[l.embed_links,l.read_messages_history,l.manage_messages,l.manage_role,l.manage_channels,l.manage_guild,l.manage_nickname]},{id:"vote_base",title:"Voting System",permissions:[l.embed_links,l.add_reactions,l.read_messages_history,l.manage_messages]},{id:"vote_kick",title:"Vote Kick System",permissions:[l.embed_links,l.add_reactions,l.read_messages_history,l.manage_messages,l.kick_members]},{id:"vote_ban",title:"Vote Ban System",permissions:[l.embed_links,l.add_reactions,l.read_messages_history,l.manage_messages,l.ban_members]}],c=function(e){function a(a){var s;s=e.call(this,a)||this;for(var t,r={},m=n(_);!(t=m()).done;)for(var o,d=n(t.value.permissions);!(o=d()).done;){r[o.value.id]=!0}for(var c={},g=0,u=Object.values(l);g<u.length;g++){var h=u[g];h.strict?c[h.id]=!0:c[h.id]=!1}for(var v,p={},b=n(_);!(v=b()).done;){p["ntfeatures-"+v.value.id]=!0}var f=Object.assign({},c,r,p,{app_commands:!0});return s.state=f,s.togglePerms=s.togglePerms.bind((0,i.Z)(s)),s.generateLink=s.generateLink.bind((0,i.Z)(s)),s.toggleFeatures=s.toggleFeatures.bind((0,i.Z)(s)),s.KeyToggle=s.KeyToggle.bind((0,i.Z)(s)),s}(0,r.Z)(a,e);var s=a.prototype;return s.generateLink=function(){for(var e=0,a=!1,s=0,t=Object.entries(this.state);s<t.length;s++){var n=t[s],i=n[0],r=n[1];i.startsWith("ntfeatures-")||("app_commands"!==i?r&&(e+=l[i].value):a=r)}var m="bot";return a&&(m+="%20applications.commands"),this.state.administrator&&(e=l.administrator.value),"https://discord.com/api/oauth2/authorize?client_id=558256913926848537&permissions="+e+"&scope="+m},s.togglePerms=function(e){var a,s=this,t=this.state[e],i={};this.setState(((a={})[e]=!t,a),(function(){for(var a,r=n(_);!(a=r()).done;){for(var m,o=a.value,d=!1,l=n(o.permissions);!(m=l()).done;){var c=m.value;s.state[c.id]||(d=!0)}i["ntfeatures-"+o.id]=!d}if("administrator"==e&&!t)for(var g=0,u=Object.entries(s.state);g<u.length;g++){var h=u[g],v=h[0];h[1];v.startsWith("ntfeatures-")&&(i[v]=!0)}for(var p={},b=0,f=Object.entries(s.state);b<f.length;b++){var k=f[b],y=k[0],w=k[1];y.startsWith("ntfeatures-")&&(p[y]=w)}for(var E=0,M=Object.entries(i);E<M.length;E++){var S=M[E],x=S[0],j=S[1];x.startsWith("ntfeatures-")&&(p[x]=j)}for(var A,C={},N=n(_);!(A=N()).done;){var T=A.value;if(!p["ntfeatures-"+T.id])for(var P,O=n(T.permissions);!(P=O()).done;){C[P.value.id]=!1}}for(var F,I=n(_);!(F=I()).done;){var K=F.value;if(p["ntfeatures-"+K.id])for(var L,V=n(K.permissions);!(L=V()).done;){C[L.value.id]=!0}}s.setState(Object.assign({},i,C))}))},s.toggleFeatures=function(e){for(var a=this.state["ntfeatures-"+e],s={},t=0,i=Object.entries(this.state);t<i.length;t++){var r=i[t],m=r[0],o=r[1];m.startsWith("ntfeatures-")&&(s[m]=o)}s["ntfeatures-"+e]=!a;for(var d,l={},c=n(_);!(d=c()).done;){var g=d.value;if(!s["ntfeatures-"+g.id])for(var u,h=n(g.permissions);!(u=h()).done;){l[u.value.id]=!1}}for(var v,p=n(_);!(v=p()).done;){var b=v.value;if(s["ntfeatures-"+b.id])for(var f,k=n(b.permissions);!(f=k()).done;){l[f.value.id]=!0}}l["ntfeatures-"+e]=!a,this.setState(l)},s.KeyToggle=function(e){var a=this,s=this.state.administrator,t=e.data,n=e.isFeature,i=e.isOauth,r=t.id;n&&(r="ntfeatures-"+t.id);var m="";m=t instanceof d?t.name:t.title;var l=function(){t.strict||"administrator"!==t.id&&s||(n?a.toggleFeatures(t.id):a.togglePerms(t.id))};return o.createElement("div",{key:t.id},o.createElement("input",{type:"checkbox",checked:this.state[r],onChange:l,disabled:t.strict||"administrator"!==t.id&&s}),o.createElement("label",{onClick:l,style:{marginLeft:"0.2rem",cursor:"pointer"},className:i?"color-oauth":null},m))},s.render=function(){for(var e,a=this,s=[l.administrator,l.view_audit_log,l.manage_guild,l.manage_role,l.manage_channels,l.kick_members,l.ban_members,l.create_invites,l.change_nickname,l.manage_nickname,l.manage_emoji_stickers,l.manage_webhook,l.view_channel,l.manage_events,l.moderate_members],t=[l.send_messages,l.use_public_threads,l.use_private_threads,l.send_messages_in_threads,l.send_tts_messages,l.manage_messages,l.manage_threads,l.embed_links,l.attach_files,l.read_messages_history,l.mention_everyone,l.external_emojis,l.external_stickers,l.add_reactions,l.use_slash_commands],i=[l.connect_voice,l.speak_voice,l.mute_members,l.deafen_members,l.move_members,l.use_voice_activity,l.priority_speaker],r=this.KeyToggle,d=[],c=n(_);!(e=c()).done;){var g=e.value;d.push(o.createElement(r,{key:"ntfeat-"+g.id,data:g,isFeature:!0}))}return o.createElement(o.Fragment,null,o.createElement(m.Z,{title:"Invite"},o.createElement("div",{className:"flex-invite"},o.createElement("div",{className:"flex-invite-content"},o.createElement("h2",null,"Fitur yang diinginkan"),_.map((function(e){return o.createElement(r,{key:"ntfeat-"+e.id,data:e,isFeature:!0})}))),o.createElement("div",{className:"flex-invite-content",style:{alignItems:"center"}},o.createElement("div",{className:"flex-invite",style:{margin:"0rem"}},o.createElement("div",{className:"flex-invite-content"},o.createElement("h2",null,"General Permissions"),s.map((function(e){return o.createElement(r,{data:e,key:e.id,isOauth:e.oauth})}))),o.createElement("div",{className:"flex-invite-content"},o.createElement("h2",null,"Text Permissions"),t.map((function(e){return o.createElement(r,{data:e,key:e.id,isOauth:e.oauth})}))),o.createElement("div",{className:"flex-invite-content"},o.createElement("h2",null,"Voice Permissions"),i.map((function(e){return o.createElement(r,{data:e,key:e.id,isOauth:e.oauth})})))),o.createElement("div",{className:"flex-invite",style:{flexDirection:"column",textAlign:"center",margin:"0rem",paddingTop:"0.5rem"}},o.createElement("p",{style:{margin:"0rem"}},"Jika ada ",o.createElement("span",{className:"color-oauth",style:{cursor:"pointer",userSelect:"none"}},"warna ini"),"..."),o.createElement("p",{style:{margin:"0rem"}},"Anda harus mengaktifkan 2FA (Two-Factor Authentication) di akun anda.")),o.createElement("div",{className:"flex-invite",style:{flexDirection:"column",textAlign:"center",margin:"0rem",paddingTop:"0.5rem"}},o.createElement("p",{style:{margin:"0rem"}},"Jika anda tidak bisa menggunakan sistem invite, Silakan gunakan ",o.createElement("a",{href:"https://discord.com/oauth2/authorize?client_id=558256913926848537&permissions=1497206484470&scope=bot%20applications.commands"},"link berikut"))))),o.createElement("div",{className:"flex-invite",style:{flexDirection:"column"}},o.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},o.createElement("input",{type:"checkbox",checked:this.state.app_commands,onChange:function(){return a.togglePerms("app_commands")}}),o.createElement("label",{style:{marginLeft:"0.2rem"}},"Application Commands (Slash Command, etc)"))),o.createElement("div",{className:"flex-invite"},o.createElement("a",{href:this.generateLink(),className:"button button--outline button--primary"},"Invite"))))},a}(o.Component)},4415:(e,a,s)=>{function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}s.d(a,{Z:()=>t})}}]);