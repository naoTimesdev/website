<script setup lang="ts">
import { computed, reactive, nextTick } from 'vue';
import InviteToggle from './components/InviteToggle.vue';

const DEFAULT_URL = "https://discord.com/oauth2/authorize?client_id=558256913926848537&permissions=1497206484470&scope=bot%20applications.commands";

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


const perms = {
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

// type for FEATURES_SETS -> Feature -> id
type FeatureSets =
  'base' |
  'weebs' |
  'imagebooru' |
  'nhentai' |
  'msg_react' |
  'rng' |
  'server_info' |
  'user_info' |
  'fun_question' |
  'kutubuku' |
  'musik' |
  'modlogs' |
  'mod_automod' |
  'mod_channel' |
  'mod_member' |
  'mod_message' |
  'mod_thread' |
  'scrap_anibin' |
  'scrap_cuaca' |
  'scrap_kurs' |
  'scrap_saus' |
  'scrap_steam' |
  'showtimes' |
  'vote_base' |
  'vote_kick' |
  'vote_ban';


interface KeyToggleProps {
  data: Perms | Feature;
  isFeature?: boolean;
  isOauth?: boolean;
}

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
];

// @ts-ignore
const defaultPermissions: PermissionMember = {};
for (const feature of FEATURES_SETS) {
  for (const perm of feature.permissions) {
    defaultPermissions[perm.id] = true;
  }
}
// @ts-ignore
const permissionStates: PermissionMember = {};
for (const perm of Object.values(Permissions)) {
  permissionStates[perm.id] = perm.strict;
}
const extras = {
  "app_commands": true,
}
type FeatureSetsToggle = {
  [Prop in FeatureSets as `ntfeatures-${Prop}`]: boolean
}
// @ts-ignore
const additionalFeatures: FeatureSetsToggle = {};
for (const feature of FEATURES_SETS) {
  additionalFeatures[`ntfeatures-${feature.id}`] = true;
}
// const additionalFeatures: FeatureSetsToggle = 
const mergedStates = {
  ...permissionStates,
  ...extras,
  ...defaultPermissions,
  ...additionalFeatures,
}

type MergedState = PermissionMember & { app_commands: boolean } & FeatureSetsToggle

const inviteState = reactive<MergedState>(mergedStates)

const toggleFeatures = (key: string, value: boolean) => {
  if (!key.startsWith('ntfeatures-')) return;

  const data = FEATURES_SETS[key];
  if (!data) {
    return;
  }

  if (data.strict || inviteState.administrator) {
    return;
  }

  const allFeatureStates = {} as FeatureSetsToggle;
  for (const [key, value] of Object.entries(inviteState)) {
    if (key.startsWith('ntfeatures-')) {
      inviteState[key] = false;
    }
  }

  inviteState[key] = value;

  const retogglePermissions = {} as PermissionMember;
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

  inviteState[key] = value;
}

const togglePerms = (key: string, value: boolean) => {
  const data = Permissions[key];
  if (!data) {
    return;
  }

  if (data.strict || (data.id !== 'administrator' && inviteState.administrator)) {
    return;
  }

  inviteState[key] = value;

  // on next tick
  nextTick(() => {
    // toggle everything elses
    const toggleAllThis = {};
    for (const feature of FEATURES_SETS) {
      let toggleOff = false;
      for (const permission of feature.permissions) {
        if (!inviteState[permission.id]) {
          toggleOff = true;
        }
      }
      if (toggleOff) {
        toggleAllThis[`ntfeatures-${feature.id}`] = false;
      } else {
        toggleAllThis[`ntfeatures-${feature.id}`] = true;
      }

      if (key === 'administrator') {
        if (value) {
          for (const key of Object.keys(inviteState)) {
            if (key.startsWith("ntfeatures-")) {
              toggleAllThis[key] = true;
            }
          }
        }
      }

      const allFeatureStates = {} as FeatureSetsToggle;
      for (const [key, valueShadow] of Object.entries(inviteState)) {
        if (key.startsWith('ntfeatures-')) {
          allFeatureStates[key] = valueShadow;
        }
      }
      for (const [key, valueShadow] of Object.entries(toggleAllThis)) {
        if (key.startsWith("ntfeatures-")) {
          allFeatureStates[key] = valueShadow;
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

      for (const [key, value] of Object.entries(toggleAllThis)) {
        inviteState[key] = value;
      }
      for (const [key, value] of Object.entries(retogglePermissions)) {
        inviteState[key] = value;
      }
    }
  })
}

const inviteLink = computed(() => {
  let perms = 0;
  for (const [key, value] of Object.entries(inviteState)) {
    if (key.startsWith("ntfeatures-") || key === 'app_commands') {
      continue;
    }
    if (value) {
      perms += Permissions[key].value;
    }
  }

  const clientId = "558256913926848537";
  const scopes = `bot${inviteState.app_commands ? "%20applications.commands" : ""}`;
  if (inviteState.administrator) {
    perms = Permissions.administrator.value;
  }

  return `https://discord.com/api/oauth2/authorize?client_id=${clientId}&permissions=${perms}&scope=${scopes}`;
})
</script>

<template>
    <div class="invite-wrapper">
      <div class="flex-invite">
        <div class="flex-invite-content">
          <h2>Fitur yang diinginkan</h2>
          <InviteToggle v-for="feature in FEATURES_SETS" :pid="feature.id" :invite="inviteState[`ntfeatures-${feature.id}`]" @feature="toggleFeatures" :globalToggle="inviteState.administrator" :strict="feature.strict">
            {{ feature.title }}
          </InviteToggle>
        </div>
        <div class="flex-invite-content" :style='{ alignItems: "center" }'>
          <div className="flex-invite" :style='{ margin: "0rem" }'>
            <div class="flex-invite-content">
              <h2>General Permissions</h2>
              <InviteToggle v-for="perm in GeneralPerms" :pid="perm.id" :invite="inviteState[perm.id]" @perms="togglePerms" :strict="perm.strict" :oauth="perm.oauth" :globalToggle="inviteState.administrator">
                {{ perm.name }}
              </InviteToggle>
            </div>
            <div class="flex-invite-content">
              <h2>Text Permissions</h2>
              <InviteToggle v-for="perm in TextPerms" :pid="perm.id" :invite="inviteState[perm.id]" @perms="togglePerms" :strict="perm.strict" :oauth="perm.oauth" :globalToggle="inviteState.administrator">
                {{ perm.name }}
              </InviteToggle>
            </div>
            <div class="flex-invite-content">
              <h2>Voice Permissions</h2>
              <InviteToggle v-for="perm in VoicePerms" :pid="perm.id" :invite="inviteState[perm.id]" @perms="togglePerms" :strict="perm.strict" :oauth="perm.oauth" :globalToggle="inviteState.administrator">
                {{ perm.name }}
              </InviteToggle>
            </div>
          </div>
          <div class="flex-invite into-columnist">
            <p>Jika ada <span className="color-oauth color-auth-click">warna ini</span>...</p>
            <p>Anda harus mengaktifkan 2FA (Two-Factor Authentication) di akun anda.</p>
          </div>
          <div class="flex-invite into-columnist">
            <p>Jika anda tidak bisa menggunakan sistem invite, Silakan gunakan <a :href="DEFAULT_URL">link berikut</a></p>
          </div>
        </div>
      </div>
      <div class="flex-invite" :style="{flexDirection: 'column'}">
        <div class="app-toggle-flex">
          <InviteToggle pid="app_commands" :invite="inviteState.app_commands" @perms="togglePerms">
            Application Commands (Slash Command, etc)
          </InviteToggle>
        </div>
      </div>
      <div class="flex-invite">
        <a :href="inviteLink" class="invite-button">
          Invite
        </a>
      </div>
    </div>
</template>

<style scoped>
.color-auth-click {
  cursor: pointer;
  user-select: none;
}

.into-columnist {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0rem;
  padding-top: 0.5rem;
}

.app-toggle-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.invite-button {
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
  border-radius: 5px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;

  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
}

.invite-button:hover {
  border-color: var(--vp-button-brand-hover-border);
  color: var(--vp-button-brand-hover-text);
  background-color: var(--vp-button-brand-hover-bg);
}
</style>