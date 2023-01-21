<template>
  <header class="hero">
    <div class="container container--thinner">
      <div class="hero__row">
        <nuxt-picture class="hero__img" :src="data!.fields.heroImage.fields.file.url" :alt="data!.fields.heroImage.fields.description" height="300" width="300" sizes="4kdesktop:300px" provider="contentful" preload />
        <h1 class="hero__title" v-html="data!.fields.title" />
      </div>
      <div v-html="parseRichText(data!.fields.heroBody)" class="hero__body" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { Contentful } from '@/enums/Contentful'
import { parseRichText } from '@/utilities/parseRichText'
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
</style>