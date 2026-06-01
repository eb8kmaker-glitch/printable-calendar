import en from './locales/en.json'
import ko from './locales/ko.json'
import ja from './locales/ja.json'

export type Locale = 'en' | 'ko' | 'ja'

const translations = { en, ko, ja }

const COUNTRY_LOCALE_MAP: Record<string, Locale> = {
  us: 'en', gb: 'en', au: 'en', ca: 'en',
  kr: 'ko',
  jp: 'ja',
}

export function getLocaleFromCountry(countryCode: string): Locale {
  return COUNTRY_LOCALE_MAP[countryCode?.toLowerCase()] ?? 'en'
}

export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations.en
}

// Template variable substitution: t('Hello {name}', { name: 'World' }) → 'Hello World'
export function t(str: string, vars: Record<string, string | number> = {}): string {
  return str.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? ''))
}
