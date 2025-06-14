export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    baseURL: './',
  },
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
  css: [
    'assets/styles/fonts.css',
    'assets/styles/variables.css',
    'assets/styles/reset.scss',
    'assets/styles/vueTransitions.css',
  ],
  imports: {
    dirs: ['core/globals'],
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes('swiper'),
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "sass:map";
            @use "assets/styles/mixin" as *;
          `,
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
    lazy: true,
    defaultLocale: 'es',
    locales: [
      { code: 'es', file: '../../locales/es.json', language: 'es' },
      { code: 'en', file: '../../locales/en.json', language: 'en' },
      { code: 'pt-BR', file: '../../locales/pt-BR.json', language: 'pt-BR' },
    ],
    strategy: 'prefix_except_default',
    customRoutes: 'config',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'es',
    },
  },
})
