<template>
  <PageTemplate :page-heading="$prismic.asText(home.data.page_title)" :footer="footer">
    <div slot="jumbo" class="home-jumbo">
      <div class="home-jumbo__greeting">
        <p>{{ home.data.page_greeting }}</p>
        <h1 class="home-jumbo__heading">{{ $prismic.asText(home.data.page_title) }}</h1>
        <p class="home-jumbo__heading-secondary">{{ home.data.page_subtitle }}</p>
        <p>{{ $prismic.asText(home.data.page_intro) }}</p>
      </div>
      <div class="home-jumbo__img">
        <div aria-hidden="true" class="home-jumbo__square">
          <div class="home-jumbo__square-icons">
            <svg-icon v-rellax="{ speed: -1 }" name="triangle" />
            <svg-icon v-rellax="{ speed: -1 }" name="square" />
            <svg-icon v-rellax="{ speed: -1 }" name="circle" />
            <svg-icon v-rellax="{ speed: -1 }" name="circle" />
          </div>
        </div>
        <img :src="home.data.avatar.url" :alt="home.data.avatar.alt" height="384" width="384">
      </div>
    </div>
  </PageTemplate>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  async asyncData ({ $prismic, error }: any) {
    const home = await $prismic.api.getSingle('home')
    const footer = await $prismic.api.getSingle('footer')

    if (home && footer) {
      return { home, footer }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head () {
    return {
      title: 'Home'
    }
  }
})
</script>

<style lang="scss" scoped>
.home-jumbo {
  width: 100vw;
  min-height: calc(100vh - 64px);
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  padding: 1rem 2rem;

  @media (min-width: 32em) {
    height: 100vh;
    min-height: 34rem;
  }

  @media (min-width: 48em) {
    grid-template-columns: repeat(3, 1fr);
    padding: 1rem 0 1rem 3rem;
  }

  @media (min-width: 75em) {
    padding-left: 5rem;
  }

  &__greeting {
    font-family: var(--font-family-lato);
    margin-right: auto;
    color: var(--body-color-secondary);
    font-size: 1.4rem;

    @media (min-width: 32em) {
      margin-top: 2rem;
    }

    @media (min-width: 48em) {
      width: 140%;
    }

    p {
      font-size: var(--font-size-body);

      &:first-of-type {
        margin: 0;
      }

      &:last-of-type {
        width: 70%;

        @media (min-width: 29.375em) {
          width: 60%;
        }
      }
    }
  }

  &__heading {
    font-size: 2.5rem;
    margin: 0;

    @media (min-width: 48em) {
      font-size: 5rem;
    }

    &-secondary {
      font-size: var(--font-size-subtitle) !important;
      margin-top: 0;
      margin-bottom: 1rem;
    }
  }

  &__square {
    background-color: var(--colour-orange);
    box-shadow: var(--shadow-inset);
    transform: rotate(-60deg);
    overflow: hidden;
    position: absolute;
    z-index: -1;
    width: 60rem;
    height: 60rem;
    top: -30rem;
    left: 100%;

    @media (min-width: 62.5em) {
      top: -27rem;
      left: 85%;
    }

    @media (min-width: 75em) {
      top: -25rem;
    }

    &-icons {
      height: 100%;
      width: 100%;
      transform: rotate(60deg);

      svg {
        position: absolute;
        color: var(--colour-static-white);
        height: 3rem;
        width: 3rem;

        &:nth-child(1) {
          top: 44%;
          left: -1rem;

          @media (min-width: 21.25em) {
            left: 1rem;
          }

          @media (min-width: 33.75em) {
            top: 40%;
            left: 3rem;
          }

          @media (min-width: 62.5em) {
            left: 6rem;
          }
        }

        &:nth-child(2) {
          display: none;

          @media (min-width: 33.75em) {
            display: block;
            top: 60%;
            left: 10rem;
          }
        }

        &:nth-child(3) {
          top: 70%;
          left: -2rem;

          @media (min-width: 21.25em) {
            left: 0;
          }

          @media (min-width: 33.75em) {
            left: 2rem;
          }

          @media (min-width: 62.5em) {
            top: 75%;
            left: 5rem;
          }

          @media (min-width: 81.25em) {
            top: 80%;
            left: 16rem;
          }
        }

        &:nth-child(4) {
          display: none;

          @media (min-width: 33.75em) {
            display: block;
            top: 50%;
            left: 25rem;
          }
        }
      }
    }
  }

  &__img {
    grid-column: span 2;
    border-radius: 50%;
    width: 14rem;
    height: 14rem;
    box-shadow: var(--shadow);
    background-color: var(--colour-static-white);
    position: relative;
    display: grid;
    place-items: center;

    @media (min-width: 50em) {
      width: 16rem;
      height: 16rem;
    }

    @media (min-width: 62.5em) {
      width: 20rem;
      height: 20rem;
    }

    @media (min-width: 75em) {
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
