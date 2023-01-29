<template>
  <article class="basic-page container container--thinner">
    <header>
      <h1 class="basic-page__title">{{ page.fields.title }}</h1>
    </header>
    <p v-if="page.fields.slug === 'privacy-policy'">
      Last updated: <time :datetime="dayjs(new Date(page.sys.updatedAt)).format('YYYY-MM-DD')">{{ dayjs(new Date(page.sys.updatedAt)).format('MMMM D, YYYY') }}</time>
    </p>
    <div class="rich-text basic-page__content" v-html="parseRichText(page.fields.body, { $img })" />
  </article>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import { parseRichText } from '@/utilities/parseRichText'
import { formatCMSVariables } from '@/utilities/cmsVariables';
import type { ContentfulEntries } from '@/types/CMS/Entries'

const $img = useImage()
const $route = useRoute()

const { data } = await useAsyncData((ctx) => { return ctx!.$contentful.getEntries<ContentfulEntries.BasicPage>({ content_type: 'basicPage', limit: 1, 'fields.slug': $route.params.slug })})
const page = formatCMSVariables(data.value!.items[0])

useHead({
  title: `${page.fields.title}`,
  meta: [
    { name: 'twitter:title', content: `${page.fields.title} | Jack Domleo` },
    ...(page.fields.metaDescription ? [
      { name: 'description', content: page.fields.metaDescription },
      { property: 'og:description', content: page.fields.metaDescription },
      { name: 'twitter:description', content: page.fields.metaDescription }
    ] : [])
  ]
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/rich-text';

.basic-page {
  font-size: var(--text-body);
  padding: 1rem;

  @media (min-width: $responsive-standard-tablet) {
    margin-top: 2rem;
  }

  &__title {
    font-size: var(--text-subtitle);
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 2rem;
  }
}
</style>