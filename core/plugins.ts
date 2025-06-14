export function documentLanguage() {
  const $i18n = useNuxtApp().$i18n
  const getLanguage = ref($i18n.locale)

  useHead({
    htmlAttrs: { lang: getLanguage.value },
  })
}

export const isProduction = () => process.env.NODE_ENV === 'production'
