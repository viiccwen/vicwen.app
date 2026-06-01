import type { Locale } from '@/lib/i18n'

export const messages = {
  en: {
    home: 'Home',
    blog: 'Blog',
    backHome: '← Back home',
    backBlog: '← Back to blog',
    postNotFound: 'Post not found',
    read: 'Read',
    openBlog: 'Open blog',
    writing: 'Writing',
    readNotes: 'Read the engineering notes',
    engineeringNotes: 'Engineering Notes',
    blogTitleTop: 'Blog &',
    blogTitleBottom: 'Notes.',
  },
  'zh-tw': {
    home: '首頁',
    blog: '文章',
    backHome: '← 回首頁',
    backBlog: '← 回文章列表',
    postNotFound: '找不到文章',
    read: '閱讀',
    openBlog: '開啟文章',
    writing: '寫作',
    readNotes: '閱讀工程筆記',
    engineeringNotes: '工程筆記',
    blogTitleTop: '部落格與',
    blogTitleBottom: '筆記。',
  },
} satisfies Record<Locale, Record<string, string>>
