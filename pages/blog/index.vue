<template>
  <div class="blog-hub">
    <header class="container">
      <h1 class="blog-hub__title">Blog</h1>
      <div v-if="blogHub.fields.hubDescription" class="blog-hub__description" v-html="parseRichText(blogHub.fields.hubDescription)" />
    </header>
    <ArticleList class="blog-hub__list" :limit="1000" :preload-article-images="3" />
  </div>
</template>

<script lang="ts" setup>
import ArticleList from '@/components/ArticleList.vue';
import { parseRichText } from '@/utilities/parseRichText'
import { formatCMSVariables } from '@/utilities/cmsVariables';
import type { ContentfulEntries } from '@/types/CMS/Entries';

const blogDetailsEntries = await useAsyncData((ctx) => { return ctx!.$contentful.getEntries<Pick<ContentfulEntries.BlogDetails, 'hubDescription'>>({ content_type: 'blogDetails', limit: 1, select: ['fields.hubDescription'] })})
const blogHub = formatCMSVariables(blogDetailsEntries.data.value!.items[0])

useHead({
  title: 'Blog',
  meta: [
    { name: 'twitter:title', content: 'Blog | Jack Domleo' },
  ]
})
</script>

<style lang="scss" scoped>
.blog-hub {
  padding: 1rem;

  @media (min-width: $responsive-standard-tablet) {
    margin-top: 2rem;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: var(--text-title);
  
    @media (min-width: $responsive-standard-tablet) {
      margin-bottom: 2rem;
    }
  }

  &__description {
    font-size: var(--text-body);
  }

  &__list {
    margin-top: 3rem;
  }
}
</style>