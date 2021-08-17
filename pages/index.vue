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
        <div aria-hidden="true" class="home-jumbo__square">
          <div class="home-jumbo__square-icons">
            <svg-icon v-rellax="{ speed: -1 }" name="triangle" />
            <svg-icon v-rellax="{ speed: -1 }" name="square" />
            <svg-icon v-rellax="{ speed: -1 }" name="circle" />
            <svg-icon v-rellax="{ speed: -1 }" name="circle" />
          </div>
        </div>
        <img src="https://jackdomleo.dev/_nuxt/img/bio-image-jack-domleo.400e227.jpg" alt="">
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
  height: calc(100vh - 64px);
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  padding: 1rem 2rem;

  @media (min-width: 32em) {
    height: 100vh;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 1rem 0 1rem 3rem;
  }

  @media (min-width: 1200px) {
    padding-left: 5rem;
  }

  &__greeting {
    font-family: var(--font-family-lato);
    width: 80%;
    margin-right: auto;

    @media (min-width: 375px) {
      width: 74%;
    }

    @media (min-width: 400px) {
      width: 70%;
    }

    @media (min-width: 610px) {
      width: 65%;
    }

    @media (min-width: 768px) {
      width: 140%;
    }

    p {
      opacity: 0.5;
    }
  }

  &__square {
    background-color: var(--color-orange);
    box-shadow: inset rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
    transform: rotate(-60deg);
    overflow: hidden;
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

    &-icons {
      height: 100%;
      width: 100%;
      transform: rotate(60deg);

      svg {
        position: absolute;
        color: var(--color-white);
        height: 3rem;
        width: 3rem;

        &:nth-child(1) {
          top: 44%;
          left: -1rem;

          @media (min-width: 340px) {
            left: 1rem;
          }

          @media (min-width: 540px) {
            top: 40%;
            left: 3rem;
          }

          @media (min-width: 1000px) {
            left: 6rem;
          }
        }

        &:nth-child(2) {
          display: none;

          @media (min-width: 540px) {
            display: block;
            top: 60%;
            left: 10rem;
          }
        }

        &:nth-child(3) {
          top: 70%;
          left: -2rem;

          @media (min-width: 340px) {
            left: 0;
          }

          @media (min-width: 540px) {
            left: 2rem;
          }

          @media (min-width: 1000px) {
            top: 75%;
            left: 5rem;
          }

          @media (min-width: 1300px) {
            top: 80%;
            left: 16rem;
          }
        }

        &:nth-child(4) {
          display: none;

          @media (min-width: 540px) {
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
