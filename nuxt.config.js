export default {
  mode: 'universal',
  target: 'static',
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
      { name: 'theme-color', content: '#393939' },
      { name: 'monetization', content: '$ilp.uphold.com/HQqg9QM4JyEj' }
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rock+Salt&family=Exo:wght@800&family=Open+Sans:wght@300;400;800&family=Cookie&display=swap' },
      { rel: 'alternate', type: 'application/rss+xml', href: 'https://jackdomleo.dev/feed.xml' }
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
        path: '/img/open-graph.png',
        width: '1280',
        height: '640',
        type: 'image/png'
      },
      twitterCard: 'summary_large_image',
      twitterSite: '@jackdomleo7',
      twitterCreator: '@jackdomleo7'
    }
  },
  loading: { color: 'var(--color-orange)' },
  css: [
    'normalize.css',
    'node_modules/cooltipz-css/src/cooltipz',
    '@/assets/styles/main.scss',
    '@/assets/styles/hljs.scss',
    '@/assets/styles/markdown.scss'
  ],
  plugins: [],
  buildModules: ['@nuxt/typescript-build'],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/svg-sprite',
    '@nuxt/content',
    '@nuxtjs/feed',
    '@nuxtjs/sitemap' // Ensure this is always last in array
  ],
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { minutes } = require('reading-time')(document.text);

        document.readingTime = Math.ceil(minutes);
      }
    }
  },
  feed: [
    {
      path: '/feed.xml',
      async create (feed) {
        feed.options = {
          title: 'Jack Domleo - blog',
          link: 'https://jackdomleo.dev/feed.xml',
          description: 'Feed for Jack Domleo\'s blog.'
        };

        const { $content } = require('@nuxt/content');
        const posts = await $content('blog', { deep: true }).sortBy('date', 'desc').fetch();
        posts.forEach((post) => {
          feed.addItem({
            title: post.title,
            id: `https://jackdomleo.dev/blog/${post.slug}`,
            link: `https://jackdomleo.dev/blog/${post.slug}`,
            description: post.description,
            published: Date.parse(post.date)
          });
        });

        feed.addContributor({
          name: 'Jack Domleo',
          link: 'https://jackdomleo.dev'
        });
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
      data: ['']
    }
  ],
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
    dir: 'docs',
    fallback: '404.html',
    async routes () {
      const { $content } = require('@nuxt/content');
      const files = await $content('', { deep: true }).only(['slug', 'dir']).fetch();

      return files.map(file => '/' + (file.dir.includes('blog') ? 'blog' : file.dir.includes('projects') ? 'projects' : '') + '/' + (file.slug === '/index' ? '/' : file.slug));
    }
  },
  publicPath: '/'
};
