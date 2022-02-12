<template>
  <div class="page" :class="{ 'w-nav': isMobile }">
    <Navigation/>
    <main>
      <Nuxt/>
    </main>
    <SiteFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navigation from '@/components/global/Navigation.vue'
import SiteFooter from '@/components/global/SiteFooter.vue'

export default Vue.extend({
  name: 'Default',
  components: { Navigation, SiteFooter },
  data () {
    return {
      isMobile: false,
      blogRedirects: [ // Old blog articles before I put the year in the URL
        '/i-wrote-an-ebook-here-is-what-i-learned',
        '/why-the-term-t-shaped-is-better-than-the-term-full-stack',
        '/how-i-optimised-my-online-presence-to-get-opportunities',
        '/an-apprenticeship-interview',
        '/focused-creativity-dont-lose-focus',
        '/hover-css-media-query',
        '/a-st-st-stuttering-developer',
        '/how-i-went-from-a-retail-assistant-at-17-to-landing-a-developer-role-at-19',
        '/why-to-not-support-internet-explorer',
        '/learning-neumorphic-design',
        '/all-day-hey-2020',
        '/to-blog-or-not-to-blog'
      ]
    }
  },
  created () {
    this.blogRedirects.forEach(redirect => {
      if (`/blog${redirect}` === this.$route.path) this.$router.push(`/blog/2020${redirect}`)
    })
  },
  mounted () {
    this.setResponsiveness()
    window.addEventListener('resize', this.setResponsiveness)
  },
  destroyed (): void {
    window.removeEventListener('resize', this.setResponsiveness)
  },
  methods: {
    setResponsiveness (): void {
      const navBreak = window.getComputedStyle(document.querySelector('nav.nav')!).getPropertyValue('--nav-break')
      this.isMobile = !window.matchMedia(`(min-width: ${navBreak})`).matches

    }
  }
})
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
  }
}

.w-nav {
  padding-bottom: 4rem;
}
</style>
