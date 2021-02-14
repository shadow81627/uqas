import pkg from './package'

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || '3000'
const BASE_URL = (
  process.env.BASE_URL ||
  process.env.DEPLOY_URL ||
  process.env.URL ||
  process.env.VERCEL_URL ||
  `http${PORT === 433 ? 's' : ''}://${HOST}${
    [433, 80].includes(PORT) ? '' : `:${PORT}`
  }`
).replace(/(^http[s]?)?(?::\/\/)?(.*)/, function (_, protocol, domain) {
  return `${protocol || 'http'}://${domain}`
})

const env = {
  HOST,
  PORT,
  BASE_URL,
  VERSION: pkg.version,
  COMMIT:
    process.env.npm_package_gitHead || process.env.VERCEL_GITHUB_COMMIT_SHA,
  DATE_GENERATED: new Date().toISOString(),
  APP_NAME: process.env.APP_NAME || `UQ Archaeological Society`,
  MAPBOX_TOKEN:
    'pk.eyJ1IjoiZGFtaWVucm9iaW5zb24iLCJhIjoiY2tsNHFjb2Y3MTQ4dDJ3cWo0d2pjdmNjbiJ9.k--b3fNDkdUPOmp3cICIFA',
}

export default {
  target: 'static',

  publicRuntimeConfig: {
    ...env,
  },

  generate: {
    // use '404.html' instead default '200.html'
    fallback: true,
  },

  head: {
    titleTemplate: '%s - UQ Archaeological Society',
    title: 'UQ Archaeological Society',
    meta: [
      { once: true, charset: 'utf-8' },
      {
        once: true,
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        once: true,
        hid: 'description',
        name: 'description',
        content:
          'A supportive community for all students enrolled or interested in archaeology at UQ. Hands-on experimental workshops, mentoring and support, involvement with industry leaders, field schools, news and opportunities, and casual networking events.',
      },
      {
        once: true,
        name: 'version',
        hid: 'version',
        content: env.VERSION,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],

  axios: {},

  pwa: {
    manifest: {
      lang: 'en',
      name: env.APP_NAME,
      short_name: env.APP_NAME,
    },
    meta: {
      name: env.APP_NAME,
      ogHost: env.BASE_URL,
      theme_color: '#ffffff',
      ogImage: {
        path: '/cover.jpg',
        width: 1200,
        height: 600,
        type: 'image/jpg',
      },
    },
    icon: {
      sizes: [24, 48, 64, 120, 144, 152, 192, 384, 512],
    },
  },

  content: {},

  sitemap: {
    hostname: env.BASE_URL,
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false,
    icons: {
      iconfont: 'mdiSvg',
    },
  },

  build: {},
}
