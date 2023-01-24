<template>
  <div>
    <header class="hero">
      <div class="container container--thinner">
        <div class="hero__row">
          <nuxt-picture class="hero__img" :src="data!.fields.heroImage.fields.file.url" :alt="data!.fields.heroImage.fields.description" height="300" width="300" sizes="standardtablet:200px 4kdesktop:300px" provider="contentful" preload />
          <h1 class="hero__title" v-html="data!.fields.title" />
        </div>
        <div class="hero__body" v-html="parseRichText(data!.fields.heroBody)" />
      </div>
    </header>
    <section id="about" class="container about">
      <div class="about__inner">
        <div class="about__img">
          <nuxt-picture :src="data!.fields.aboutImage.fields.file.url" :alt="data!.fields.aboutImage.fields.description" height="440" width="440" sizes="largemobile:144px standardtablet:192px smalldesktop:256px 4kdesktop:440px" loading="lazy" provider="contentful" />
        </div>
        <h2 class="about__header">{{ data!.fields.aboutTitle }}</h2>
        <div class="about__text" v-html="parseRichText(data!.fields.aboutBody)" />
      </div>
    </section>
    <section id="blog" class="container blog">
      <h2 class="blog__heading">From the blog</h2>
      <ArticleList class="blog__list" :limit="6" />
      <nuxt-link to="/blog" class="blog__more link">
        Read more
        <!-- <svg-icon name="arrow-right" /> -->
      </nuxt-link>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { Contentful } from '@/enums/Contentful'
import { parseRichText } from '@/utilities/parseRichText'
import ArticleList from '@/components/ArticleList.vue'
import type { ContentfulEntries } from '@/types/CMS/Entries'
import { formatCMSVariables } from '@/utilities/cmsVariables'

const { data } = await useAsyncData((ctx) => { return ctx!.$contentful.getEntry<ContentfulEntries.Home>(Contentful.EntryIDs.HOME)})
data.value!.fields = formatCMSVariables(data.value!.fields)
</script>

<style lang="scss" scoped>
.hero {
  min-height: calc(100vh - 9rem);
  display: grid;
  place-items: center;
  padding: 1rem;

  @media (min-width: $responsive-standard-tablet) {
    min-height: calc(100vh - 4rem);
  }

  @media (min-height: 646px) {
    padding-bottom: 8rem;
  }

  &__row {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media (min-width: $responsive-standard-tablet) {
      flex-direction: row;
    }
  }

  &__img {
    @media (min-width: $responsive-standard-tablet) {
      min-width: 300px;
    }

    :deep(img) {
      border-radius: 3rem;
      height: 200px;
      width: 200px;

      @media (min-width: $responsive-standard-tablet) {
        height: 300px;
        width: 300px;
      }
    }
  }

  &__title {
    margin: 0;
    text-transform: uppercase;
    font-size: var(--text-title);
    text-align: center;

    @media (min-width: $responsive-standard-tablet) {
      font-size: 5rem;
      text-align: left;
    }

    :deep(br) {
      display: none;

      @media (min-width: $responsive-standard-tablet) {
        display: block;
      }
    }
  }

  &__body {
    font-size: var(--text-large);
    margin-top: 2rem;
    text-align: center;
  }
}

.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 1rem;

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
    position: relative;
    justify-self: center;
    margin-bottom: 3rem;
    border-radius: 50%;
    width: 9rem;
    aspect-ratio: auto 1 / 1;

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
      background-color: var(--color-bg);
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
      background-color: var(--color-accent-faint);
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

    :deep(img) {
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

.blog {
  display: flex;
  flex-direction: column;

  &__heading {
    font-size: var(--text-title);
    margin-block: 0;
  }

  &__list {
    margin-block: 1.25rem;
  }

  &__more {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: auto;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
}
</style>