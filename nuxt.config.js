export default {
  mode: 'universal',
  head: {
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        hid: 'gtm-script1',
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-165367468-1',
        defer: true
      },
      {
        hid: 'gtm-script2',
        innerHTML: `
        if(window.location.hostname != "jackdomleo.dev") {
          window['ga-disable-UA-165367468-1'] = true;
        }
        else {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'UA-165367468-1');
        }
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    titleTemplate: '%s | Jack Domleo - Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'robots', content: 'index, follow' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      {
        name: 'msapplication-TileImage',
        content: '/favicons/mstile-144x144.png'
      },
      { name: 'msapplication-config', content: '/browserconfig.xml' },
      { name: 'theme-color', content: '#393939' }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicons/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '194x194',
        href: '/favicons/favicon-194x194.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicons/android-chrome-192x192.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicons/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/favicons/safari-pinned-tab.svg',
        color: '#ff5a0a'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Exo|Open+Sans&display=swap' }
    ]
  },
  pwa: {
    meta: {
      name: 'Jack Domleo',
      description:
        'A front-end developer based in Nottingham, UK primarily using Vue.js, TypeScript, CSS and HTML5 with a love for UI/UX and accessibility.',
      ogType: 'profile',
      ogHost: 'https://jackdomleo.dev',
      ogImage: {
        path: '/open-graphics/open-graph.png',
        width: '1200',
        height: '630',
        type: 'image/png'
      },
      twitterCard: 'summary_large_image',
      twitterSite: '@jackdomleo7',
      twitterCreator: '@jackdomleo7'
    }
  },
  loading: { color: 'var(--color-orange-deep)' },
  css: [
    'normalize.css',
    'node_modules/cooltipz-css/src/cooltipz',
    '@/assets/styles/main.scss',
    '@/assets/styles/hljs.scss'
  ],
  plugins: [],
  buildModules: ['@nuxt/typescript-build'],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap' // Ensure this is always last in array
  ],
  markdownit: {
    html: true
  },
  sitemap: {
    hostname: 'https://jackdomleo.dev',
    exclude: ['/_icons']
  },
  build: {
    postcss: {
      plugins: {
        autoprefixer: {},
        cssnano: {}
      }
    }
  },
  generate: {
    dir: 'docs'
  },
  publicPath: '/'
};
