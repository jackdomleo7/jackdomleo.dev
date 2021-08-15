<template>
  <PageTemplate :page-heading="$prismic.asText(home.data.page_title)" :footer="footer">
    <div slot="jumbo" class="home-jumbo">
      <div class="home-jumbo__greeting">
        <p>Hi</p>
        <h1 class="home-jumbo__heading">
          I'm Jack Domleo
        </h1>
        <p>
          I'm a professional frontend & UX developer primarily working with Vue.js.
        </p>
      </div>
      <div class="home-jumbo__img">
        <div class="home-jumbo__square"></div>
        <img src="https://jackdomleo.dev/_nuxt/img/bio-image-jack-domleo.400e227.jpg" alt="" />
      </div>
    </div>
  </PageTemplate>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  head () {
    return {
      title: 'Home'
    }
  },
  async asyncData ({ $prismic, error }: any) {
    const home = await $prismic.api.getSingle('home')
    const footer = await $prismic.api.getSingle('footer')

    if (home && footer) {
      return { home, footer }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
})
</script>

<style lang="scss" scoped>
.home-jumbo {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: grid;
  place-items: center;
  padding: 1rem 0 1rem 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    padding-left: 5rem;
  }

  &__greeting {
    font-family: var(--font-family-lato);

    p {
      opacity: 0.5;
    }
  }

  &__square {
    background-color: var(--color-orange);
    box-shadow: inset rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transform: rotate(-60deg);
    position: absolute;
    z-index: -1;
    width: 60rem;
    height: 60rem;
    top: -30rem;
    left: 100%;

    @media (min-width: 1000px) {
      top: -27rem;
      left: 85%;
    }

    @media (min-width: 1200px) {
      top: -25rem;
    }
  }

  &__img {
    grid-column: span 2;
    border-radius: 50%;
    width: 14rem;
    height: 14rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    background-color: var(--color-white);
    position: relative;
    display: grid;
    place-items: center;

    @media (min-width: 800px) {
      width: 16rem;
      height: 16rem;
    }

    @media (min-width: 1000px) {
      width: 20rem;
      height: 20rem;
    }

    @media (min-width: 1200px) {
      width: 24rem;
      height: 24rem;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
</style>
