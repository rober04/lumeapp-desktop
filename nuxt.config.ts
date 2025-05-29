import i18nConfig from './config/i18n'
import { alias } from './config/alias'
import { cssImports } from './config/css'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/i18n',
  ],
  ssr: false,
  spaLoadingTemplate: false,
  css: cssImports,
  imports: {
    dirs: ['core/globals'],
  },
  alias,
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes('swiper'),
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "sass:map"; @import "assets/styles/mixin.scss";',
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: '_nuxt/[name].[ext]',
          entryFileNames: '_nuxt/[name].js',
          chunkFileNames: '_nuxt/[name].js',
        },
      },
    },
  },
  i18n: {
    ...i18nConfig,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'es',
    },
  },
})
