import { documentLanguage } from '@/core/plugins'

export default defineNuxtPlugin(({ hook }) => {
  hook('page:start', () => {
    documentLanguage()
  })
})
