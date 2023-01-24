<template>
  <div class="blog-hub">
    <ArticleList :limit="1000" />
  </div>
</template>

<script lang="ts" setup>
import ArticleList from '@/components/ArticleList.vue';

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

  &__header {
    text-align: center;
  }

  &__title {
    font-size: var(--text-subtitle);
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 2rem;
  }
}
</style>