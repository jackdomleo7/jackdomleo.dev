<template>
  <div class="page" :class="{ 'w-nav': isMobile }">
    <Navigation/>
    <main>
      <Nuxt/>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navigation from '@/components/Navigation.vue'

export default Vue.extend({
  name: 'Default',
  components: { Navigation },
  data () {
    return {
      isMobile: false
    }
  },
  mounted (): void {
    this.setResponsiveness()
    window.addEventListener('resize', this.setResponsiveness)
  },
  destroyed (): void {
    window.removeEventListener('resize', this.setResponsiveness)
  },
  methods: {
    setResponsiveness (): void {
      const navBreak = window.getComputedStyle(document.querySelector('nav.nav')!).getPropertyValue('--nav-break')
      this.isMobile = window.matchMedia(`(max-width: ${navBreak})`).matches

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
