---
title: Tentang naoTimes
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/34302902?v=4',
    name: 'N4O',
    title: 'Kreator, Lead Developer',
    links: [
      { icon: 'github', link: 'https://github.com/noaione', ariaLabel: 'GitHub' },
      { icon: 'discord', link: 'https://discord.com/users/466469077444067372', ariaLabel: 'Discord: @noaione' },
      { icon: 'email', link: 'mailto:noaione@n4o.xys', ariaLabel: 'Email' },
    ],
    sponsor: '/donasi',
    actionText: 'Donasi',
  },
]
</script>

# {{ $frontmatter.title }}

naoTimes adalah sebuah bot Discord yang dibuat oleh N4O atau noaione, terinspirasi dari bot Aquarius yang ada di server discord GJM dan DDY.

Anda dapat melihat source code bot kami di akun tim GitHub: [naoTimesdev](https://github.com/naoTimesdev/naoTimes)

## Tim Kami

<VPTeamMembers size="small" :members="members" />
