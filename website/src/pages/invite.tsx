// @ts-ignore
import Layout from "@theme/Layout";
import React from "react";

const DEFAULTURL = "https://discord.com/oauth2/authorize?client_id=558256913926848537&permissions=1497206484470&scope=bot%20applications.commands";

class Perms {
  id: string;
  name: string;
  value: number;
  oauth: boolean;
  strict: boolean;

  constructor(id: string, name: string, value: number, oauth = false, strict = false) {
    this.id = id
    this.name = name;
    this.value = value;
    this.oauth = oauth;
    this.strict = strict;
  }
}

var perms = {
  generalViewChannels: 1024,
  generalCreateInvite: 1,
  generalKickMembers: 2,
  generalBanMembers: 4,
  generalAdministrator: 8,
  generalManageChannels: 16,
  generalManageGuild: 32,
  generalChangeNickname: 67108864,
  generalManageNicknames: 134217728,
  generalManageRoles: 268435456,
  generalManageWebhooks: 536870912,
  generalManageEmojis: 1073741824,
  generalViewAuditLog: 128,
  generalViewGuildInsights: 524288,
  generalManageEvents: 8589934592,
  generalModerateMembers: 1099511627776,
  textAddReactions: 64,
  textSendMessages: 2048,
  textSendMessagesThreads: 274877906944,
  textCreatePublicThreads: 34359738368,
  textCreatePrivateThreads: 68719476736,
  textSendTTSMessages: 4096,
  textManageMessages: 8192,
  textManageThreads: 17179869184,
  textEmbedLinks: 16384,
  textAttachFiles: 32768,
  textReadMessageHistory: 65536,
  textMentionEveryone: 131072,
  textUseExternalEmojis: 262144,
  textUseExternalStickers: 137438953472,
  textUseSlashCommands: 2147483648,
  voiceConnect: 1048576,
  voiceSpeak: 2097152,
  voiceStream: 512,
  voiceMuteMembers: 4194304,
  voiceDeafenMembers: 8388608,
  voiceMoveMembers: 16777216,
  voiceUseVAD: 33554432,
  voiceStartActivities: 549755813888,
  voicePrioritySpeaker: 256,
  voiceStageRequestSpeak: 4294967296
}

const Permissions = {
  // General
  create_invites: new Perms("create_invites", "Create Invites", 1),
  kick_members: new Perms("kick_members", "Kick Members", 2, true),
  ban_members: new Perms("ban_members", "Ban Members", 4, true),
  administrator: new Perms("administrator", "Administrator", 8, true),
  manage_channels: new Perms("manage_channels", "Manage Channels", 16, true),
  manage_guild: new Perms("manage_guild", "Manage Server", 32, true),
  change_nickname: new Perms("change_nickname", "Change Nickname", 67108864),
  manage_nickname: new Perms("manage_nickname", "Manage Nickname", 134217728),
  manage_role: new Perms("manage_role", "Manage Roles", 268435456, true),
  manage_webhook: new Perms("manage_webhook", "Manage Webhooks", 536870912, true),
  manage_emoji_stickers: new Perms("manage_emoji_stickers", "Manage Emoji and Stickers", 1073741824),
  view_audit_log: new Perms("view_audit_log", "View Audit Log", 128),
  // view_guild_insights: new Perms("view_guild_insights", "View Server Insights", 524288),
  view_channel: new Perms("view_channel", "Read Messages/View Channels", 1024, false, true),
  manage_events: new Perms("manage_events", "Manage Events", 8589934592),
  moderate_members: new Perms("moderate_members", "Moderate Members", 1099511627776),
  // Text
  send_messages: new Perms("send_messages", "Send Messages", 2048, false, true),
  use_public_threads: new Perms("use_public_threads", "Create Public Threads", 34359738368, false, true),
  use_private_threads: new Perms("use_private_threads", "Create Private Threads", 68719476736),
  send_messages_in_threads: new Perms("send_messages_in_threads", "Send Messages in Threads", 274877906944, false, true),
  send_tts_messages: new Perms("send_tts_messages", "Send TTS Messages", 4096),
  manage_messages: new Perms("manage_messages", "Manage Messages", 8192, true),
  manage_threads: new Perms("manage_threads", "Manage Threads", 17179869184, true),
  embed_links: new Perms("embed_links", "Embed Links", 16384, false, true),
  attach_files: new Perms("attach_files", "Attach Files", 32768, false, true),
  read_messages_history: new Perms("read_messages_history", "Read Messages History", 65536),
  mention_everyone: new Perms("mention_everyone", "Mention Everyone", 131072),
  external_emojis: new Perms("external_emojis", "Use External Emojis", 262144, false, true),
  external_stickers: new Perms("external_stickers", "Use External Stickers", 137438953472),
  use_slash_commands: new Perms("use_slash_commands", "Use Application Commands", 2147483648, false, true),
  add_reactions: new Perms("add_reactions", "Add Reactions", 64),
  // Voice
  connect_voice: new Perms("connect_voice", "Connect", 1048576),
  speak_voice: new Perms("speak_voice", "Speak", 2097152),
  // stream_voice: new Perms("stream_voice", "Video", 512),
  mute_members: new Perms("mute_members", "Mute Members", 4194304),
  deafen_members: new Perms("deafen_members", "Deafen Members", 8388608),
  move_members: new Perms("move_members", "Move Members", 16777216),
  use_voice_activity: new Perms("use_voice_activity", "Use Voice Activity", 33554432),
  // start_activities: new Perms("start_activities", "Start Activities", 549755813888),
  priority_speaker: new Perms("priority_speaker", "Priority Speaker", 256),
  // stage_request_speak: new Perms("stage_request_speak", "Stage Request to Speak", 4294967296),
}

interface Feature {
  id: string;
  title: string;
  permissions: Perms[];
  strict?: boolean;
}

const FEATURES_SETS: Feature[] = [
  {
    id: "base",
    title: "Base (Semua hal yang diperlukan agar naoTimes dapat jalan)",
    permissions: [
      Permissions.send_messages,
      Permissions.send_messages_in_threads,
      Permissions.use_public_threads,
      Permissions.embed_links,
      Permissions.attach_files,
      Permissions.view_channel,
      Permissions.use_slash_commands,
    ],
    strict: true,
  },
  {
    id: "weebs",
    title: "Anime, Manga, VN, dan VTuber",
    permissions: [
      Permissions.add_reactions,
      Permissions.embed_links,
      Permissions.read_messages_history,
      Permissions.manage_messages,
      Permissions.external_emojis,
    ],
  },
  {
    id: "imagebooru",
    title: "ImageBooru (Danbooru, Gelbooru, dsb)",
    permissions: [
      Permissions.add_reactions,
      Permissions.embed_links,
      Permissions.read_messages_history,
      Permissions.manage_messages,
    ]
  },
  {
    id: "nhentai",
    title: "nHentai [NSFW]",
    permissions: [
      Permissions.add_reactions,
      Permissions.embed_links,
      Permissions.read_messages_history,
      Permissions.manage_messages,
    ]
  },
  {
    id: "msg_react",
    title: "Reaksi Pesan",
    permissions: [
      Permissions.add_reactions,
      Permissions.embed_links,
    ]
  },
  {
    id: "rng",
    title: "RNGJesus (Pilih sesuatu, roll dadu, roll angka, panjang kontol)",
    permissions: [],
    strict: true,
  },
  {
    id: "server_info",
    title: "Server Info",
    permissions: [Permissions.embed_links, Permissions.external_emojis],
  },
  {
    id: "user_info",
    title: "User Info",
    permissions: [Permissions.embed_links],
  },
  {
    id: "fun_question",
    title: "Tanya Bot (Kerang, 8ball, dsb)",
    permissions: [Permissions.embed_links],
  },
  {
    id: "kutubuku",
    title: "Kutubuku (Jisho, KBBI, Sinonim/Antonim, Padanan kata, dan lain-lain)",
    permissions: [Permissions.embed_links, Permissions.add_reactions, Permissions.read_messages_history, Permissions.manage_messages],
  },
  {
    id: "musik",
    title: "Pemutar Musik",
    permissions: [
      Permissions.embed_links,
      Permissions.connect_voice,
      Permissions.speak_voice,
      Permissions.priority_speaker,
    ]
  },
  {
    id: "modlogs",
    title: "Tinjauan Moderasi (Logging)",
    permissions: [
      Permissions.embed_links,
      Permissions.read_messages_history,
      Permissions.view_audit_log,
      Permissions.external_emojis,
      Permissions.manage_threads,
    ]
  },
  {
    id: "mod_automod",
    title: "Moderasi: Automoderator",
    permissions: [
      Permissions.manage_messages,
      Permissions.read_messages_history,
    ]
  },
  {
    id: "mod_channel",
    title: "Moderasi: Channel (Lock/Unlock/Slowmode)",
    permissions: [
      Permissions.manage_channels,
    ]
  },
  {
    id: "mod_member",
    title: "Moderasi: Member (Mute/Shadowban)",
    permissions: [
      Permissions.manage_channels,
      Permissions.manage_messages,
      Permissions.manage_role,
      Permissions.ban_members,
      Permissions.mute_members,
      Permissions.moderate_members,
    ]
  },
  {
    id: "mod_message",
    title: "Moderasi: Pesan (Nuklir pesan)",
    permissions: [
      Permissions.manage_messages,
      Permissions.read_messages_history,
    ]
  },
  {
    id: "mod_thread",
    title: "Moderasi: Thread",
    permissions: [
      Permissions.manage_threads,
      Permissions.send_messages_in_threads,
      Permissions.use_public_threads,
      Permissions.use_private_threads,
    ]
  },
  {
    id: "scrap_anibin",
    title: "Scraper: Anibin",
    permissions: [Permissions.embed_links],
  },
  {
    id: "scrap_cuaca",
    title: "Scraper: Cuaca",
    permissions: [Permissions.embed_links],
  },
  {
    id: "scrap_kurs",
    title: "Scraper: Kurs Mata Uang",
    permissions: [Permissions.embed_links],
  },
  {
    id: "scrap_saus",
    title: "Scraper: Saus Gambar",
    permissions: [Permissions.embed_links, Permissions.read_messages_history],
  },
  {
    id: "scrap_steam",
    title: "Scraper: Steam",
    permissions: [Permissions.embed_links, Permissions.add_reactions, Permissions.manage_messages, Permissions.read_messages_history],
  },
  {
    id: "showtimes",
    title: "Showtimes",
    permissions: [
      Permissions.embed_links,
      Permissions.read_messages_history,
      Permissions.manage_messages,
      Permissions.manage_role,
      Permissions.manage_channels,
      Permissions.manage_guild,
      Permissions.manage_nickname,
    ]
  },
  {
    id: "vote_base",
    title: "Voting System",
    permissions: [
      Permissions.embed_links,
      Permissions.add_reactions,
      Permissions.read_messages_history,
      Permissions.manage_messages,
    ]
  },
  {
    id: "vote_kick",
    title: "Vote Kick System",
    permissions: [
      Permissions.embed_links,
      Permissions.add_reactions,
      Permissions.read_messages_history,
      Permissions.manage_messages,
      Permissions.kick_members,
    ]
  },
  {
    id: "vote_ban",
    title: "Vote Ban System",
    permissions: [
      Permissions.embed_links,
      Permissions.add_reactions,
      Permissions.read_messages_history,
      Permissions.manage_messages,
      Permissions.ban_members,
    ]
  }
]

type PermissionMember = {
  [Prop in keyof typeof Permissions]: boolean
}

interface InviteState extends PermissionMember {
  app_commands: boolean;
}

interface KeyToggleProps {
  data: Perms | Feature;
  isFeature?: boolean;
  isOauth?: boolean;
}

export default class InvitePage extends React.Component<{}, InviteState> {
  constructor(props) {
    super(props);

    const DEFAULT_PERMISSIONS = {}
    for (const feature of FEATURES_SETS) {
      for (const permission of feature.permissions) {
        DEFAULT_PERMISSIONS[permission.id] = true
      }
    }
    let allStates = {};
    for (const perms of Object.values(Permissions)) {
      if (perms.strict) {
        allStates[perms.id] = true;
      } else {
        allStates[perms.id] = false;
      }
    }
    const extras = {
      "app_commands": true,
    }
    const additionalFeatures = {}
    for (const feature of FEATURES_SETS) {
      additionalFeatures[`ntfeatures-${feature.id}`] = true;
    }
    const MERGEDSTATE = Object.assign({}, allStates, DEFAULT_PERMISSIONS, additionalFeatures, extras);
    this.state = MERGEDSTATE;
    this.togglePerms = this.togglePerms.bind(this);
    this.generateLink = this.generateLink.bind(this);
    this.toggleFeatures = this.toggleFeatures.bind(this);
    this.KeyToggle = this.KeyToggle.bind(this);
  }

  generateLink() {
    let perms = 0;
    let enableAppCommands = false;
    // calculate permissions
    for (const [key, value] of Object.entries(this.state)) {
      if (key.startsWith("ntfeatures-")) {
        continue;
      }
      if (key === "app_commands") {
        enableAppCommands = value;
        continue;
      }
      if (value) {
        perms += Permissions[key].value;
      }
    }
    const clientId = "558256913926848537";
    let scopes = "bot";
    if (enableAppCommands) {
      scopes += "%20applications.commands";
    }
    if (this.state.administrator) {
      perms = Permissions.administrator.value;
    }
    return `https://discord.com/api/oauth2/authorize?client_id=${clientId}&permissions=${perms}&scope=${scopes}`;
  }

  togglePerms(name: string) {
    const prevState = this.state[name];
    const toggleAllThis = {};
    // @ts-ignore
    this.setState({[name]: !prevState}, () => {
      for (const feature of FEATURES_SETS) {
        let toggleOff = false;
        for (const permission of feature.permissions) {
          if (!this.state[permission.id]) {
            toggleOff = true;
          }
        }
        if (toggleOff) {
          toggleAllThis[`ntfeatures-${feature.id}`] = false;
        } else {
          toggleAllThis[`ntfeatures-${feature.id}`] = true;
        }
      }
      if (name == "administrator") {
        const toggleState = !prevState;
        if (toggleState) {
          for (const [key, value] of Object.entries(this.state)) {
            if (key.startsWith("ntfeatures-")) {
              toggleAllThis[key] = true;
            }
          }
        }
      }
      const allFeatureStates = {};
      for (const [key, value] of Object.entries(this.state)) {
        if (key.startsWith("ntfeatures-")) {
          allFeatureStates[key] = value;
        }
      }
      for (const [key, value] of Object.entries(toggleAllThis)) {
        if (key.startsWith("ntfeatures-")) {
          allFeatureStates[key] = value;
        }
      }

      const retogglePermissions = {};
      for (const feature of FEATURES_SETS) {
        if (!allFeatureStates[`ntfeatures-${feature.id}`]) {
          for (const permission of feature.permissions) {
            retogglePermissions[permission.id] = false;
          }
        }
      }
      for (const feature of FEATURES_SETS) {
        if (allFeatureStates[`ntfeatures-${feature.id}`]) {
          for (const permission of feature.permissions) {
            retogglePermissions[permission.id] = true;
          }
        }
      }
      this.setState({...toggleAllThis, ...retogglePermissions});
    });
  }

  toggleFeatures(name: string) {
    const prevState = this.state[`ntfeatures-${name}`];
    const allFeatureStates = {};
    for (const [key, value] of Object.entries(this.state)) {
      if (key.startsWith("ntfeatures-")) {
        allFeatureStates[key] = value;
      }
    }
    allFeatureStates[`ntfeatures-${name}`] = !prevState;
    const retogglePermissions = {};

    // toggle permissions based on what enabled on the features.
    for (const feature of FEATURES_SETS) {
      if (!allFeatureStates[`ntfeatures-${feature.id}`]) {
        for (const permission of feature.permissions) {
          retogglePermissions[permission.id] = false;
        }
      }
    }
    for (const feature of FEATURES_SETS) {
      if (allFeatureStates[`ntfeatures-${feature.id}`]) {
        for (const permission of feature.permissions) {
          retogglePermissions[permission.id] = true;
        }
      }
    }
    retogglePermissions[`ntfeatures-${name}`] = !prevState;

    this.setState(retogglePermissions);
  }

  KeyToggle(props: KeyToggleProps) {
    const isAdminToggled = this.state.administrator;
    const { data, isFeature, isOauth } = props;
    let keyName = data.id;
    if (isFeature) {
      keyName = `ntfeatures-${data.id}`;
    }
    let keyTitle = "";
    if (data instanceof Perms) {
      keyTitle = data.name;
    } else {
      keyTitle = data.title;
    }

    const toggler = () => {
      if (data.strict || (data.id !== "administrator" && isAdminToggled)) {
        return;
      }
      if (isFeature) {
        this.toggleFeatures(data.id);
      } else {
        this.togglePerms(data.id);
      }
    }

    return (
      <div key={data.id}>
        <input type="checkbox" checked={this.state[keyName]} onChange={toggler} disabled={data.strict || (data.id !== "administrator" && isAdminToggled)} />
        <label onClick={toggler} style={{ marginLeft: "0.2rem", cursor: "pointer" }} className={isOauth ? "color-oauth" : ""}>{keyTitle}</label>
      </div>
    )
  }

  render() {

    const GeneralPerms = [
      Permissions.administrator,
      Permissions.view_audit_log,
      // Permissions.view_guild_insights,
      Permissions.manage_guild,
      Permissions.manage_role,
      Permissions.manage_channels,
      Permissions.kick_members,
      Permissions.ban_members,
      Permissions.create_invites,
      Permissions.change_nickname,
      Permissions.manage_nickname,
      Permissions.manage_emoji_stickers,
      Permissions.manage_webhook,
      Permissions.view_channel,
      Permissions.manage_events,
      Permissions.moderate_members,
    ]
    const TextPerms = [
      Permissions.send_messages,
      Permissions.use_public_threads,
      Permissions.use_private_threads,
      Permissions.send_messages_in_threads,
      Permissions.send_tts_messages,
      Permissions.manage_messages,
      Permissions.manage_threads,
      Permissions.embed_links,
      Permissions.attach_files,
      Permissions.read_messages_history,
      Permissions.mention_everyone,
      Permissions.external_emojis,
      Permissions.external_stickers,
      Permissions.add_reactions,
      Permissions.use_slash_commands,
    ]
    const VoicePerms = [
      Permissions.connect_voice,
      Permissions.speak_voice,
      // Permissions.stream_voice,
      Permissions.mute_members,
      Permissions.deafen_members,
      Permissions.move_members,
      Permissions.use_voice_activity,
      Permissions.priority_speaker
    ]

    const KeyToggle = this.KeyToggle;
    const RENDER_FEATURES: JSX.Element[] = [];
    for (const feature of FEATURES_SETS) {
      RENDER_FEATURES.push(
        <KeyToggle key={`ntfeat-${feature.id}`} data={feature} isFeature />
      )
    }

    return (
      <>
        <Layout title="Invite">
          <div className="flex-invite">
            <div className="flex-invite-content">
            <h2>Fitur yang diinginkan</h2>
            {FEATURES_SETS.map((feature) => (
              <KeyToggle key={`ntfeat-${feature.id}`} data={feature} isFeature />
            ))}
            </div>
            <div className="flex-invite-content" style={{alignItems: "center"}}>
              <div className="flex-invite" style={{margin: "0rem"}}>
                <div className="flex-invite-content">
                  <h2>General Permissions</h2>
                  {GeneralPerms.map(perm => (
                    <KeyToggle data={perm} key={perm.id} isOauth={perm.oauth} />
                  ))}
                </div>
                <div className="flex-invite-content">
                  <h2>Text Permissions</h2>
                  {TextPerms.map(perm => (
                    <KeyToggle data={perm} key={perm.id} isOauth={perm.oauth} />
                  ))}
                </div>
                <div className="flex-invite-content">
                  <h2>Voice Permissions</h2>
                  {VoicePerms.map(perm => (
                    <KeyToggle data={perm} key={perm.id} isOauth={perm.oauth} />
                  ))}
                </div>
              </div>
              <div className="flex-invite" style={{flexDirection: "column", textAlign: "center", margin: "0rem", paddingTop: "0.5rem"}}>
                <p style={{margin: "0rem"}}>Jika ada <span className="color-oauth" style={{ cursor: "pointer", userSelect: "none" }}>warna ini</span>...</p>
                <p style={{margin: "0rem"}}>Anda harus mengaktifkan 2FA (Two-Factor Authentication) di akun anda.</p>
              </div>
              <div className="flex-invite" style={{flexDirection: "column", textAlign: "center", margin: "0rem", paddingTop: "0.5rem"}}>
                <p style={{margin: "0rem"}}>Jika anda tidak bisa menggunakan sistem invite, Silakan gunakan <a href={DEFAULTURL}>link berikut</a></p>
              </div>
            </div>
          </div>
          <div className="flex-invite" style={{flexDirection: "column"}}>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <input type="checkbox" checked={this.state.app_commands} onChange={() => this.togglePerms("app_commands")} />
              <label style={{ marginLeft: "0.2rem" }}>Application Commands (Slash Command, etc)</label>
            </div>
          </div>
          <div className="flex-invite">
            <a href={this.generateLink()} className="button button--outline button--primary">
              Invite
            </a>
          </div>
        </Layout>
      </>
    )
  }
}
