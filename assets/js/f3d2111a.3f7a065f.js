(self.webpackChunk=self.webpackChunk||[]).push([[565],{4835:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>l});var n=a(8173);function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var i=a(3552),r=a(3066),m=a(7294),o=(a(9105),function(e,s,a,n,t){void 0===n&&(n=!1),void 0===t&&(t=!1),this.id=e,this.name=s,this.value=a,this.oauth=n,this.strict=t}),d={create_invites:new o("create_invites","Create Invites",1),kick_members:new o("kick_members","Kick Members",2,!0),ban_members:new o("ban_members","Ban Members",4,!0),administrator:new o("administrator","Administrator",8,!0),manage_channels:new o("manage_channels","Manage Channels",16,!0),manage_guild:new o("manage_guild","Manage Server",32,!0),change_nickname:new o("change_nickname","Change Nickname",67108864),manage_nickname:new o("manage_nickname","Manage Nickname",134217728),manage_role:new o("manage_role","Manage Roles",268435456,!0),manage_webhook:new o("manage_webhook","Manage Webhooks",536870912,!0),manage_emoji_stickers:new o("manage_emoji_stickers","Manage Emoji and Stickers",1073741824),manage_threads:new o("manage_threads","Manage Threads",17179869184,!0),view_audit_log:new o("view_audit_log","View Audit Log",128),view_guild_insights:new o("view_guild_insights","View Server Insights",524288),view_channel:new o("view_channel","View Channel",1024,!1,!0),add_reactions:new o("add_reactions","Add Reactions",64),read_messages:new o("read_messages","Read Messages",1024,!1,!0),send_messages:new o("send_messages","Send Messages",2048,!1,!0),use_public_threads:new o("use_public_threads","Use Public Threads",34359738368,!1,!0),use_private_threads:new o("use_private_threads","Use Private Threads",68719476736),send_messages_in_threads:new o("send_messages_in_threads","Send Messages in Threads",274877906944,!1,!0),send_tts_messages:new o("send_tts_messages","Send TTS Messages",4096),manage_messages:new o("manage_messages","Manage Messages",8192,!0),embed_links:new o("embed_links","Embed Links",16384,!1,!0),attach_files:new o("attach_files","Attach Files",32768),read_messages_history:new o("read_messages_history","Read Messages History",65536),mention_everyone:new o("mention_everyone","Mention Everyone",131072),external_emojis:new o("external_emojis","Use External Emojis",262144),external_stickers:new o("external_stickers","Use External Stickers",137438953472),use_slash_commands:new o("use_slash_commands","Use Slash Commands",2147483648,!1,!0),connect_voice:new o("connect_voice","Connect",1048576),speak_voice:new o("speak_voice","Speak",2097152),stream_voice:new o("stream_voice","Video",512),mute_members:new o("mute_members","Mute Members",4194304),deafen_members:new o("deafen_members","Deafen Members",8388608),move_members:new o("move_members","Move Members",16777216),use_voice_activity:new o("use_voice_activity","Use Voice Activity",33554432),priority_speaker:new o("priority_speaker","Priority Speaker",256)},_=[{id:"base",title:"Base (Semua hal yang diperlukan agar naoTimes dapat jalan)",permissions:[d.send_messages,d.read_messages,d.send_messages_in_threads,d.use_public_threads,d.embed_links,d.view_channel,d.use_slash_commands],strict:!0},{id:"weebs",title:"Anime, Manga, VN, dan VTuber",permissions:[d.add_reactions,d.embed_links,d.read_messages_history,d.manage_messages]},{id:"imagebooru",title:"ImageBooru (Danbooru, Gelbooru, dsb)",permissions:[d.add_reactions,d.embed_links,d.read_messages_history,d.manage_messages]},{id:"nhentai",title:"nHentai [NSFW]",permissions:[d.add_reactions,d.embed_links,d.read_messages_history,d.manage_messages]},{id:"msg_react",title:"Reaksi Pesan",permissions:[d.add_reactions,d.embed_links]},{id:"rng",title:"RNGJesus (Pilih sesuatu, roll dadu, roll angka, panjang kontol)",permissions:[],strict:!0},{id:"server_info",title:"Server Info",permissions:[d.embed_links,d.external_emojis]},{id:"user_info",title:"User Info",permissions:[d.embed_links,d.attach_files]},{id:"fun_question",title:"Tanya Bot (Kerang, 8ball, dsb)",permissions:[d.embed_links]},{id:"kutubuku",title:"Kutubuku (Jisho, KBBI, Sinonim/Antonim, Padanan kata, dan lain-lain)",permissions:[d.embed_links,d.add_reactions,d.read_messages_history,d.manage_messages]},{id:"modlogs",title:"Tinjauan Moderasi (Logging)",permissions:[d.embed_links,d.read_messages_history,d.view_audit_log,d.attach_files,d.external_emojis,d.view_guild_insights,d.manage_threads]},{id:"mod_automod",title:"Moderasi: Automoderator",permissions:[d.manage_messages,d.read_messages,d.read_messages_history]},{id:"mod_channel",title:"Moderasi: Channel (Lock/Unlock/Slowmode)",permissions:[d.manage_channels]},{id:"mod_member",title:"Moderasi: Member (Mute/Shadowban)",permissions:[d.manage_channels,d.manage_messages,d.manage_role,d.ban_members]},{id:"mod_message",title:"Moderasi: Pesan (Nuklir pesan)",permissions:[d.manage_messages,d.read_messages_history]},{id:"mod_thread",title:"Moderasi: Thread",permissions:[d.manage_threads,d.send_messages_in_threads,d.use_public_threads,d.use_private_threads]},{id:"scrap_anibin",title:"Scraper: Anibin",permissions:[d.embed_links]},{id:"scrap_cuaca",title:"Scraper: Cuaca",permissions:[d.embed_links]},{id:"scrap_kurs",title:"Scraper: Kurs Mata Uang",permissions:[d.embed_links]},{id:"scrap_saus",title:"Scraper: Saus Gambar",permissions:[d.embed_links,d.read_messages_history]},{id:"scrap_steam",title:"Scraper: Steam",permissions:[d.embed_links,d.add_reactions,d.manage_messages,d.read_messages_history]},{id:"showtimes",title:"Showtimes",permissions:[d.embed_links,d.read_messages_history,d.manage_messages,d.manage_role,d.manage_channels,d.manage_guild,d.manage_nickname]},{id:"vote_base",title:"Voting System",permissions:[d.embed_links,d.add_reactions,d.read_messages_history,d.manage_messages]},{id:"vote_kick",title:"Vote Kick System",permissions:[d.embed_links,d.add_reactions,d.read_messages_history,d.manage_messages,d.kick_members]},{id:"vote_ban",title:"Vote Ban System",permissions:[d.embed_links,d.add_reactions,d.read_messages_history,d.manage_messages,d.ban_members]}];var l=function(e){function s(s){var a;a=e.call(this,s)||this;for(var i,r={},m=(0,n.Z)(_);!(i=m()).done;)for(var o,l=i.value,c=(0,n.Z)(l.permissions);!(o=c()).done;){r[o.value.id]=!0}for(var g={},u=0,h=Object.values(d);u<h.length;u++){var v=h[u];v.strict?g[v.id]=!0:g[v.id]=!1}for(var b,p={},k=(0,n.Z)(_);!(b=k()).done;){p["ntfeatures-"+b.value.id]=!0}var f=Object.assign({},g,r,p,{app_commands:!0});return a.state=f,a.togglePerms=a.togglePerms.bind(t(a)),a.generateLink=a.generateLink.bind(t(a)),a.toggleFeatures=a.toggleFeatures.bind(t(a)),a}(0,i.Z)(s,e);var a=s.prototype;return a.generateLink=function(){for(var e=0,s=!1,a=0,n=Object.entries(this.state);a<n.length;a++){var t=n[a],i=t[0],r=t[1];i.startsWith("ntfeatures-")||("app_commands"!==i?r&&(e+=d[i].value):s=r)}var m="bot";return s&&(m+="%20applications.commands"),"https://discord.com/api/oauth2/authorize?client_id=558256913926848537&permissions="+e+"&scope="+m},a.togglePerms=function(e){var s,a=this,t=this.state[e],i={};this.setState(((s={})[e]=!t,s),(function(){if("administrator"==e)for(var s=0,r=Object.entries(a.state);s<r.length;s++){var m=r[s],o=m[0];m[1];o.startsWith("ntfeatures-")&&(i[o]=!t)}else for(var d,l=(0,n.Z)(_);!(d=l()).done;){for(var c,g=d.value,u=!1,h=(0,n.Z)(g.permissions);!(c=h()).done;){var v=c.value;a.state[v.id]||(u=!0)}console.info(g.id,u),i["ntfeatures-"+g.id]=!u}console.info(i),a.setState(i)}))},a.toggleFeatures=function(e){for(var s=this.state["ntfeatures-"+e],a={},t=0,i=Object.entries(this.state);t<i.length;t++){var r=i[t],m=r[0],o=r[1];m.startsWith("ntfeatures-")&&(a[m]=o)}a["ntfeatures-"+e]=!s,console.info(a);for(var d,l={},c=(0,n.Z)(_);!(d=c()).done;){var g=d.value;if(!a["ntfeatures-"+g.id])for(var u,h=(0,n.Z)(g.permissions);!(u=h()).done;){l[u.value.id]=!1}}for(var v,b=(0,n.Z)(_);!(v=b()).done;){var p=v.value;if(a["ntfeatures-"+p.id])for(var k,f=(0,n.Z)(p.permissions);!(k=f()).done;){l[k.value.id]=!0}}l["ntfeatures-"+e]=!s,this.setState(l)},a.render=function(){for(var e,s=this,a=[d.administrator,d.view_audit_log,d.view_guild_insights,d.manage_guild,d.manage_role,d.manage_channels,d.kick_members,d.ban_members,d.create_invites,d.change_nickname,d.manage_nickname,d.manage_emoji_stickers,d.manage_webhook,d.view_channel],t=[d.send_messages,d.use_public_threads,d.use_private_threads,d.send_messages_in_threads,d.send_tts_messages,d.manage_messages,d.manage_threads,d.embed_links,d.attach_files,d.read_messages_history,d.mention_everyone,d.external_emojis,d.external_stickers,d.add_reactions,d.use_slash_commands],i=[d.connect_voice,d.speak_voice,d.stream_voice,d.mute_members,d.deafen_members,d.move_members,d.use_voice_activity,d.priority_speaker],o=[],l=function(){var a=e.value,n="ntfeatures-"+a.id;o.push(m.createElement("div",{key:"ntfeat-"+a.id},m.createElement("input",{type:"checkbox",checked:s.state[n],onChange:function(){a.strict||s.toggleFeatures(a.id)},disabled:a.strict}),m.createElement("label",{style:{marginLeft:"0.2rem"}},a.title)))},c=(0,n.Z)(_);!(e=c()).done;)l();return m.createElement(m.Fragment,null,m.createElement(r.Z,{title:"Invite"},m.createElement("div",{className:"flex-invite"},m.createElement("div",{className:"flex-invite-content"},m.createElement("h2",null,"Fitur yang diinginkan"),o.map((function(e){return e}))),m.createElement("div",{className:"flex-invite-content"},m.createElement("h2",null,"General Permissions"),a.map((function(e){return m.createElement("div",{key:e.id},m.createElement("input",{type:"checkbox",checked:s.state[e.id],onChange:function(){e.strict||s.togglePerms(e.id)},disabled:e.strict}),m.createElement("label",{style:{marginLeft:"0.2rem"}},e.name))}))),m.createElement("div",{className:"flex-invite-content"},m.createElement("h2",null,"Text Permissions"),t.map((function(e){return m.createElement("div",{key:e.id},m.createElement("input",{type:"checkbox",checked:s.state[e.id],onChange:function(){e.strict||s.togglePerms(e.id)},disabled:e.strict}),m.createElement("label",{style:{marginLeft:"0.2rem"}},e.name))}))),m.createElement("div",{className:"flex-invite-content"},m.createElement("h2",null,"Voice Permissions"),i.map((function(e){return m.createElement("div",{key:e.id},m.createElement("input",{type:"checkbox",checked:s.state[e.id],onChange:function(){e.strict||s.togglePerms(e.id)},disabled:e.strict}),m.createElement("label",{style:{marginLeft:"0.2rem"}},e.name))})))),m.createElement("div",{className:"flex-invite",style:{flexDirection:"column"}},m.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},m.createElement("input",{type:"checkbox",checked:this.state.app_commands,onChange:function(){return s.togglePerms("app_commands")}}),m.createElement("label",{style:{marginLeft:"0.2rem"}},"Application Commands (Slash Command, etc)"))),m.createElement("div",{className:"flex-invite"},m.createElement("a",{href:this.generateLink(),className:"button button--outline button--primary"},"Invite"))))},s}(m.Component)}}]);