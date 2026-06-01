export const locales = ['en', 'zh-tw'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && locales.includes(value as Locale))
}

export function localeLabel(locale: Locale) {
  return locale === 'zh-tw' ? '繁中' : 'EN'
}
