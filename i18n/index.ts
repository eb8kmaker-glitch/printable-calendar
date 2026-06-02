import en from './locales/en.json'
import ko from './locales/ko.json'
import ja from './locales/ja.json'

export type Locale = 'en' | 'ko' | 'ja'
export const SUPPORTED_LOCALES: Locale[] = ['en', 'ko', 'ja']

const translations = { en, ko, ja }

export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations.en
}

export function t(str: string, vars: Record<string, string | number> = {}): string {
  return str.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? ''))
}
