<template>
  <article v-if="page" class="basic-page container container--thinner">
    <header>
      <h1 class="basic-page__title">{{ page.title }}</h1>
    </header>
    <p v-if="page.modified_time">
      Last updated: <time :datetime="dayjs(new Date(page.modified_time)).format('YYYY-MM-DD')">{{ dayjs(new Date(page.modified_time)).format('MMMM D, YYYY') }}</time>
    </p>
    <ContentRenderer class="rich-text basic-page__content" :value="page.body" :data="variables" />
  </article>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import { ContentRenderer } from '#components';
import variables from '@/utilities/variables';

const $route = useRoute()

const { data: page } = await useAsyncData($route.path, () => {
  return queryCollection('basic').path($route.path).first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found'
  })
}

useSeoMeta({
  title: `${page.value.title}`,
  description: page.value.description
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/rich-text' as *;

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