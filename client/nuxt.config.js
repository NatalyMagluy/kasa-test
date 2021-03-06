
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~plugins/filters.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/pwa'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/http'
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  http: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  pwa: {
    /** Workbox configuration for offline support */
    workbox: {
      runtimeCaching: [{
        urlPattern: `${process.env.BASE_URL || 'http://localhost:3000'}/.*`,
        method: 'GET',
        strategyOptions: {
          networkTimeoutSeconds: 20,
          cacheName: 'api-cache',
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }, {
        urlPattern: 'https://cdn.pixabay.com/.*',
        method: 'GET',
        strategyOptions: {
          cacheName: 'images',
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }]
    }
  }
}
