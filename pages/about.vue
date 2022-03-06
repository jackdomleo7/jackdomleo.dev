<template>
  <div>
    <header class="container container--header header">
      <h1 class="header__title">About</h1>
      <prismic-rich-text class="header__intro" :field="about.data.about_intro" />
    </header>
    <div class="container about">
      <div v-for="(section, index) in about.data.about_sections" :key="`about_section_${index}`" class="about__section" :class="{ 'about__section--reverse': section.image_position === 'right' }">
        <div class="about__images" :class="{ 'about__images--2': section.image_1.url && section.image_2.url }">
          <nuxt-img v-if="section.image_1.url" provider="prismic" :src="section.image_1.url" :alt="section.image_1.alt" :height="imageDimensions(section)" :width="imageDimensions(section)" loading="lazy" />
          <nuxt-img v-if="section.image_2.url" provider="prismic" :src="section.image_2.url" :alt="section.image_2.alt" :height="imageDimensions(section)" :width="imageDimensions(section)" loading="lazy" />
        </div>
        <prismic-rich-text class="about__text" :field="section.text" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IPage, IPageAbout } from '@/types/cms'
import { IAboutSection } from '@/types/cms/IPageAbout'
import { NO_OF_YEARS_EXPERIENCE_PRISMIC_VAR, calculateYearsExperience } from '@/helpers/yearsExperience'

export default Vue.extend({
  name: 'About',
  async asyncData ({ $prismic, error }) {
    const about: IPage<IPageAbout> = await $prismic.api.getSingle('about')

    if (about) {
      about.data.about_sections[0].text = about.data.about_sections[0].text.map(x => {
        x.text = x.text.replace(NO_OF_YEARS_EXPERIENCE_PRISMIC_VAR, calculateYearsExperience())
        return x
      })

      return { about }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head () {
    return {
      title: 'About'
    }
  },
  methods: {
    imageDimensions (section: IAboutSection): number {
      if (section.image_1.url && section.image_2.url) {
        return 360 // 2 images are present
      }
      else {
        return 440 // Only 1 image is present
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  &__title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: var(--text-title);

    @media (min-width: $responsive-large-tablet) {
      margin-bottom: 2rem;
    }
  }

  &__intro {
    font-size: var(--text-body);
  }
}

.about {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: $responsive-large-tablet) {
      margin-top: 4rem;
    }

  &__section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (min-width: $responsive-large-tablet) {
      flex-direction: row;
      gap: 4rem;

      * {
        flex-basis: 50%;
      }
    }

    &--reverse {
      @media (min-width: $responsive-large-tablet) {
        flex-direction: row-reverse;
      }
    }
  }

  &__images {
    display: grid;
    place-items: center;

    img {
      max-width: 90%;
      border-radius: 2.5rem;
      filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.25));

      @media (min-width: $responsive-large-tablet) {
        max-width: 100%;
      }
    }

    &--2 {
      @media (min-width: $responsive-large-tablet) and (max-width: $responsive-small-desktop) {
        margin-inline: 6rem;
      }

      img {
        position: relative;
        max-width: 70%;

        @media (min-width: $responsive-large-tablet) {
          max-width: 100%;
        }

        &:nth-child(1) {
          top: 2rem;
          left: -3rem;
          z-index: 2;

          @media (min-width: $responsive-large-tablet) {
            top: 4rem;
            left: -6rem;
          }
        }

        &:nth-child(2) {
          bottom: 2rem;
          right: -3rem;
          z-index: 1;

          @media (min-width: $responsive-large-tablet) {
            bottom: 4rem;
            right: -6rem;
          }
        }
      }
    }
  }

  &__text {
    max-width: 44rem;
  }
}
</style>
