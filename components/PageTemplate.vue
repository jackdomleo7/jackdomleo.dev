<template>
  <div>
    <Debug v-if="env === 'development'" />
    <header>
      <Navigation />
      <div class="jumbo">
        <div>
          <p>Hi</p>
          <h1 class="jumbo__heading">
            I'm Jack Domleo
          </h1>
          <p>
            I'm a professional frontend & UX developer primarily working with Vue.js.
          </p>
        </div>
      </div>
    </header>
    <main class="container--fluid">
      <slot />
    </main>
    <PageFooter :footer="footer" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageTemplate',
  props: {
    footer: {
      type: Object,
      required: true
    },
    pageHeading: {
      type: String,
      required: true
    }
  },
  computed: {
    env (): string {
      return process.env.NODE_ENV!
    }
  },
  methods: {
    isHome (): boolean {
      return this.$route.path === '/'
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
