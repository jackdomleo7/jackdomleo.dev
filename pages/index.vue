<template>
  <div>
    <header class="container header">
      <div>
        <nuxt-img src="~assets/images/j-icon.svg" alt="" class="header__logo" />
        <h1 class="header__title">{{ $prismic.asText(home.data.page_title) }}</h1>
        <prismic-rich-text class="header__intro" :field="home.data.page_intro" />
        <btn v-if="home.data.show_header_cta" :href="home.data.header_cta_link">{{ home.data.header_cta_text }}</btn>
        <a href="#about" class="header__chevron">
          <svg-icon name="chevron-down" />
        </a>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Btn from '~/components/Btn.vue'

export default Vue.extend({
  name: 'Home',
  components: { Btn },
  async asyncData ({ $prismic, error }: any) {
    const home = await $prismic.api.getSingle('home')
    if (home) {
      return { home }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  mounted () {
    console.log(this.home)
  }
})
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  padding: 2rem;
  height: calc(100vh - 4rem);
  display: grid;

  @media (min-width: $responsive-small-desktop) {
    align-items: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 2.5rem;

    @media (min-width: $responsive-small-desktop) {
      display: block;
      padding-bottom: 0;
    }
  }

  &__logo {
    width: 5.9375rem;
    margin-inline: auto;

    @media (min-width: $responsive-small-desktop) {
      display: none;
    }
  }

  &__title {
    font-size: var(--text-title);
    margin: 0;
  }

  &__intro {
    font-size: var(--text-body);
    max-width: 50rem;

    @media (min-width: $responsive-small-desktop) {
      font-size: var(--text-heading);
      margin-top: 1rem;
      margin-bottom: 1.5rem;
    }

    ::v-deep p {
      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  &__chevron {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    height: 2rem;
    width: 2rem;

    @media (min-width: $responsive-small-desktop) {
      height: 4rem;
      width: 4rem;
    }
  }
}
</style>
