import type { ModuleOptions } from '@nuxtjs/i18n'

export const pages: ModuleOptions['pages'] = {
  contacto: {
    es: '/contacto',
    en: '/contact',
    'pt-BR': '/contato',
  },
  soporte: { es: '/soporte', en: '/support', 'pt-BR': '/suporte' },
  contenidos: {
    es: '/contenidos',
    en: '/contents',
    'pt-BR': '/conteudos',
  },
  expertos: {
    es: '/expertos',
    en: '/experts',
    'pt-BR': '/especialistas',
  },
  'plan-site': {
    es: '/plan-site',
    en: '/plan-site',
    'pt-BR': '/plan-site',
  },
  'dental-procedures-simulator': {
    es: '/dental-procedures-simulator',
    en: '/dental-procedures-simulator',
    'pt-BR': '/dental-procedures-simulator',
  },
  'videos-3d-formacion-dental': {
    es: '/videos-3d-formacion-dental',
    en: '/videos-3d-dental-training',
    'pt-BR': '/videos-de-treinamento-odontologico-em-3d',
  },
  partners: {
    es: '/partners',
    en: '/partners',
    'pt-BR': '/parceiros',
  },
  series: {
    es: '/series',
    en: '/series',
    'pt-BR': '/series',
  },
  lives: {
    es: '/directos',
    en: '/lives',
    'pt-BR': '/ao-vivo',
  },
  account: {
    es: '/mi-cuenta',
    en: '/my-account',
    'pt-BR': '/minha-conta',
  },
  'who-we-are': {
    es: '/quienes-somos',
    en: '/who-we-are',
    'pt-BR': '/quem-somos',
  },
  about: {
    es: '/sobre-nosotros',
    en: '/about',
    'pt-BR': '/sobre-nós',
  },
  cookies: {
    es: '/cookies',
    en: '/cookies',
    'pt-BR': '/cookies',
  },
  conditions: {
    es: '/condiciones',
    en: '/conditions',
    'pt-BR': '/condições',
  },
  privacy: {
    es: '/privacidad',
    en: '/privacity',
    'pt-BR': '/privacidade',
  },
  'booking-terms-and-conditions': {
    es: '/terminos-y-condiciones-de-la-reserva',
    en: '/booking-terms-and-conditions',
    'pt-BR': '/termos-e-condicoes-de-reserva',
  },
  'iniciar-sesion': {
    es: '/iniciar-sesion',
    en: '/login',
    'pt-BR': '/login',
  },
  'olvido-contrasena': {
    es: '/olvido-contrasena',
    en: '/forgot-password',
    'pt-BR': '/esqueci-minha-senha',
  },
  'cambiar-contrasena': {
    es: '/cambiar-contrasena',
    en: '/change-password',
    'pt-BR': '/alterar-senha',
  },
  gracias: {
    es: '/gracias',
    en: '/thank-you',
    'pt-BR': '/Obrigado',
  },
  'inspiria-talks': {
    es: '/inspiria-talks',
    en: '/inspiria-talks',
    'pt-BR': '/inspiria-talks',
  },
}

export const i18nConfig: Partial<ModuleOptions> = {
  customRoutes: 'config',
  defaultLocale: 'es',
  pages,
  strategy: 'prefix_and_default',
}
