import { cookies } from 'next/headers'
import { SUPPORTED_LOCALES, type Locale } from './index'

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const lang = cookieStore.get('lang')?.value
  if (lang && SUPPORTED_LOCALES.includes(lang as Locale)) {
    return lang as Locale
  }
  return 'en'
}
