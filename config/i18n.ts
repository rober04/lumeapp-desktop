import type { ModuleOptions } from '@nuxtjs/i18n'
import { pages } from './i18n/pages'

export default {
  lazy: true,
  defaultLocale: 'es',
  locales: [
    { code: 'es', file: '../../locales/es.json', language: 'es' },
    { code: 'en', file: '../../locales/en.json', language: 'en' },
    { code: 'pt-BR', file: '../../locales/pt-BR.json', language: 'pt-BR' },
  ],
  strategy: 'prefix_except_default',
  customRoutes: 'config',
  pages,
} as Partial<ModuleOptions>
