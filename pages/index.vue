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
    <section id="about" class="container about">
      <div class="about__inner">
        <div class="about__img">
          <nuxt-img provider="prismic" :src="home.data.about_avatar.url" :alt="home.data.about_avatar.alt" />
        </div>
        <h2 class="about__header">{{ $prismic.asText(home.data.about_heading) }}</h2>
        <prismic-rich-text class="about__text" :field="home.data.about_text" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Btn from '~/components/Btn.vue'
import { differenceInQuarters } from 'date-fns'

export default Vue.extend({
  name: 'Home',
  components: { Btn },
  async asyncData ({ $prismic, error }: any) {
    const home = await $prismic.api.getSingle('home')
    if (home) {
      const firstDayAsDeveloper = new Date('2018-09-03')
      const quarterDifference = Math.abs(differenceInQuarters(firstDayAsDeveloper, new Date()))
      const yearsDifference = Math.round(quarterDifference / 4)
      const yearsDifferenceRemainder = quarterDifference % 4
      let yearsExperience = ''
      if (yearsDifferenceRemainder === 1) {
        yearsExperience = `just over ${yearsDifference}`
      }
      else if (yearsDifference === 2) {
        yearsExperience = `${yearsDifference} and a half`
      }
      else if (yearsDifferenceRemainder === 3) {
        yearsExperience = `nearly ${yearsDifference + 1}`
      }
      else {
        yearsExperience = `${yearsDifference}`
      }
      home.data.about_text = home.data.about_text.map(x => {
        x.text = x.text.replace('#{NO_OF_YEARS_EXPERIENCE}', yearsExperience)
        return x
      })

      return { home }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  padding: 2rem;
  height: calc(100vh - 4rem);
  display: grid;
  max-width: 87.5rem;

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
    color: var(--colour-text-primary);

    @media (min-width: $responsive-small-desktop) {
      height: 4rem;
      width: 4rem;
    }
  }
}

.about {
  min-height: 100vh;
  display: flex;
  align-items: center;

  &__inner {
    display: grid;
    grid-template-areas: 'about-img' 'about-header' 'about-text';
    grid-template-columns: 1fr;

    @media (min-width: $responsive-small-desktop) {
      grid-template-areas: 'about-header about-img' 'about-text about-img';
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__img {
    grid-area: about-img;
    border-radius: 50%;
    width: 9rem;
    aspect-ratio: auto 1 / 1;
    position: relative;
    justify-self: center;
    margin-bottom: 3rem;

    @media (min-width: $responsive-large-mobile) {
      width: 12rem;
    }

    @media (min-width: $responsive-standard-tablet) {
      width: 16rem;
    }

    @media (min-width: $responsive-small-desktop) {
      width: 27.5rem;
    }

    &::before {
      content: '';
      display: block;
      background-color: var(--colour-background);
      border-radius: 50%;
      width: 10.25rem;
      aspect-ratio: auto 1 / 1;
      position: absolute;
      z-index: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;

      @media (min-width: $responsive-large-mobile) {
        width: 13.5rem;
      }

      @media (min-width: $responsive-standard-tablet) {
        width: 18rem;
      }

      @media (min-width: $responsive-small-desktop) {
        width: 31.25rem;
      }
    }

    &::after {
      content: '';
      display: block;
      background-color: var(--colour-primary-faint);
      border-radius: 50%;
      width: 9rem;
      aspect-ratio: auto 1 / 1;
      position: absolute;
      z-index: -1;
      top: 2rem;
      left: 1.5rem;
      pointer-events: none;

      @media (min-width: $responsive-large-mobile) {
        width: 12rem;
        top: 2.5rem;
        left: 2rem;
      }

      @media (min-width: $responsive-standard-tablet) {
        width: 16rem;
        top: 3.5rem;
        left: 3rem;
      }

      @media (min-width: $responsive-small-desktop) {
        width: 27.5rem;
        top: 6.5rem;
        left: 6rem;
      }
    }

    img {
      border-radius: 50%;
      position: relative;
    }
  }

  &__header {
    grid-area: about-header;
    font-size: var(--text-title);
    margin: 0;
  }

  &__text {
    grid-area: about-text;
    font-size: var(--text-body);
  }
}
</style>
