export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'jackdomleo.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
  ],
  plugins: [
  ],
  buildModules: [
    '@nuxt/typescript-build',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap' // Always declare last
  ],
  axios: {},
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  content: {},
  robots: {
    UserAgent: '*',
    Allow: '/'
  },
  sitemap: {
    hostname: 'https://jackdomleo.dev',
    exclude: ['/_icons']
  },
  build: {
  }
}
