'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { SUPPORTED_LOCALES } from '@/i18n'
import type { Locale } from '@/i18n'

export async function setLang(formData: FormData) {
  const lang = formData.get('lang') as string
  const returnTo = formData.get('returnTo') as string

  if (SUPPORTED_LOCALES.includes(lang as Locale)) {
    const cookieStore = await cookies()
    cookieStore.set('lang', lang, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      sameSite: 'lax',
    })
  }

  const safePath = returnTo && returnTo.startsWith('/') ? returnTo : '/'
  redirect(safePath)
}
