// @ts-ignore
import Layout from "@theme/Layout";
import React from "react";


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

type PermissionTypes = {[key: string]: Perms};

const Permissions: PermissionTypes = {
  // General
  create_invites: new Perms("create_invites", "Create Invites", 0x1),
  kick_members: new Perms("kick_members", "Kick Members", 0x2, true),
  ban_members: new Perms("ban_members", "Ban Members", 0x4, true),
  administrator: new Perms("administrator", "Administrator", 0x8, true),
  manage_channels: new Perms("manage_channels", "Manage Channels", 0x10, true),
  manage_guild: new Perms("manage_guild", "Manage Server", 0x20, true),
  change_nickname: new Perms("change_nickname", "Change Nickname", 0x4000000),
  manage_nickname: new Perms("manage_nickname", "Manage Nickname", 0x8000000),
  manage_role: new Perms("manage_role", "Manage Roles", 0x10000000, true),
  manage_webhook: new Perms("manage_webhook", "Manage Webhooks", 0x20000000, true),
  manage_emoji_stickers: new Perms("manage_emoji_stickers", "Manage Emoji and Stickers", 0x40000000),
  manage_threads: new Perms("manage_threads", "Manage Threads", 0x400000000, true),
  view_audit_log: new Perms("view_audit_log", "View Audit Log", 0x80),
  view_guild_insights: new Perms("view_guild_insights", "View Server Insights", 0x80000),
  // Text
  view_channel: new Perms("view_channel", "View Channel", 0x400, false, true),
  add_reactions: new Perms("add_reactions", "Add Reactions", 0x40),
  read_messages: new Perms("read_messages", "Read Messages", 0x400, false, true),
  send_messages: new Perms("send_messages", "Send Messages", 0x800, false, true),
  use_public_threads: new Perms("use_public_threads", "Use Public Threads", 0x800000000, false, true),
  use_private_threads: new Perms("use_private_threads", "Use Private Threads", 0x1000000000),
  send_messages_in_threads: new Perms("send_messages_in_threads", "Send Messages in Threads", 0x4000000000, false, true),
  send_tts_messages: new Perms("send_tts_messages", "Send TTS Messages", 0x1000),
  manage_messages: new Perms("manage_messages", "Manage Messages", 0x2000, true),
  embed_links: new Perms("embed_links", "Embed Links", 0x4000, false, true),
  attach_files: new Perms("attach_files", "Attach Files", 0x8000),
  read_messages_history: new Perms("read_messages_history", "Read Messages History", 0x10000),
  mention_everyone: new Perms("mention_everyone", "Mention Everyone", 0x20000),
  external_emojis: new Perms("external_emojis", "Use External Emojis", 0x40000, false, true),
  external_stickers: new Perms("external_stickers", "Use External Stickers", 0x2000000000),
  use_slash_commands: new Perms("use_slash_commands", "Use Slash Commands", 0x80000000, false, true),
  // Voice
  connect_voice: new Perms("connect_voice", "Connect", 0x100000),
  speak_voice: new Perms("speak_voice", "Speak", 0x200000),
  stream_voice: new Perms("stream_voice", "Video", 0x200),
  mute_members: new Perms("mute_members", "Mute Members", 0x400000),
  deafen_members: new Perms("deafen_members", "Deafen Members", 0x800000),
  move_members: new Perms("move_members", "Move Members", 0x1000000),
  use_voice_activity: new Perms("use_voice_activity", "Use Voice Activity", 0x2000000),
  priority_speaker: new Perms("priority_speaker", "Priority Speaker", 0x100),
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
      Permissions.read_messages,
      Permissions.send_messages_in_threads,
      Permissions.use_public_threads,
      Permissions.embed_links,
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
    permissions: [Permissions.embed_links, Permissions.attach_files],
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
      Permissions.attach_files,
      Permissions.external_emojis,
      Permissions.view_guild_insights,
      Permissions.manage_threads,
    ]
  },
  {
    id: "mod_automod",
    title: "Moderasi: Automoderator",
    permissions: [
      Permissions.manage_messages,
      Permissions.read_messages,
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
    const { data, isFeature } = props;
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
    return (
      <div key={data.id}>
        <input type="checkbox" checked={this.state[keyName]} onChange={() => {
          if (data.strict || (data.id !== "administrator" && isAdminToggled)) {
            return;
          }
          if (isFeature) {
            this.toggleFeatures(data.id);
          } else {
            this.togglePerms(data.id);
          }
        }} disabled={data.strict || (data.id !== "administrator" && isAdminToggled)} />
        <label style={{ marginLeft: "0.2rem" }}>{keyTitle}</label>
      </div>
    )
  }

  render() {

    const GeneralPerms = [
      Permissions.administrator,
      Permissions.view_audit_log,
      Permissions.view_guild_insights,
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
      Permissions.stream_voice,
      Permissions.mute_members,
      Permissions.deafen_members,
      Permissions.move_members,
      Permissions.use_voice_activity,
      Permissions.priority_speaker
    ]

    const KeyToggle = this.KeyToggle;
    const RENDER_FEATURES = [];
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
            <div className="flex-invite-content">
              <h2>General Permissions</h2>
              {GeneralPerms.map(perm => (
                <KeyToggle data={perm} key={perm.id} />
              ))}
            </div>
            <div className="flex-invite-content">
              <h2>Text Permissions</h2>
              {TextPerms.map(perm => (
                <KeyToggle data={perm} key={perm.id} />
              ))}
            </div>
            <div className="flex-invite-content">
              <h2>Voice Permissions</h2>
              {VoicePerms.map(perm => (
                <KeyToggle data={perm} key={perm.id} />
              ))}
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
