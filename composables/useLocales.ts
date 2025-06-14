export async function useLocales<T>(translations: string) {
  let locale
  try {
    locale = useI18n().locale
  } catch (e) {}
  if (!locale) {
    const getLanguage = ref(localStorage.getItem('language'))
    locale = { value: '' }
    locale.value = getLanguage.value ?? 'es'
  }

  const localePromise: { default: T } = await import(
    `@/locales/${locale.value}/${translations}.json`
  )
  const data = localePromise.default

  return { data }
}
