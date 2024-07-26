import { createContentLoader } from 'vitepress'

interface PrivacyPost {
  content: string
  // this is date from filename
  revision: {
    string: string
    time: number
  }
  num: string;
}

declare const data: PrivacyPost[]
export { data }

export default createContentLoader('terms/*.md', {
  render: true,
  // excerpt: true,
  transform(raw): PrivacyPost[] {
    return raw
      .map(({ html, frontmatter }) => {
        if (!html) {
          throw new Error('No HTML content found')
        }

        const { version, num } = frontmatter
        if (!version) {
          throw new Error('No version found')
        }

        if (!num) {
          throw new Error('No num found')
        }

        return {
          content: html,
          revision: formatDate(version),
          num,
        }
      })
      .sort((a, b) => b.revision.time - a.revision.time)
  },
})

function formatDate(raw: string): PrivacyPost['revision'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
}