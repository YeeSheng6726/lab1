// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // App configuration
  app: {
    head: {
      title: 'ETF Investment Mastery - Full Day Workshop',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Master ETF investing in one intensive day. Build a diversified portfolio, minimize risk, and maximize returns with expert-led ETF investment strategies.' },
        { name: 'keywords', content: 'ETF, investment, portfolio, finance, workshop, training, diversification' },
        { property: 'og:title', content: 'ETF Investment Mastery Workshop' },
        { property: 'og:description', content: 'Transform your investment strategy in one intensive day with expert-led ETF training.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // CSS configuration
  css: [],

  // Modules
  modules: [],

  // Build configuration
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons'
    ]
  },

  // Runtime config
  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  }
})
