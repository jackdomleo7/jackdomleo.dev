<template>
  <div class="blog-hub">
    <header class="container">
      <h1 class="blog-hub__title">Blog</h1>
      <p class="blog-hub__description">
        Welcome to my blog. I try to write articles about frontend development, careers in tech, my experiences and more <span class="blog-hub__del-ins"><del aria-hidden="true">when</del> <ins>if</ins></span> I get the time. All articles are my own writing.
      </p>
    </header>
    <ArticleList class="blog-hub__list" :preload-article-images="3" :show-filter="true" />
  </div>
</template>

<script lang="ts" setup>
import ArticleList from '@/components/ArticleList.vue';

const config = useRuntimeConfig()

useSeoMeta({
  title: 'Blog'
})

useHead({
  link: [
    { rel: 'canonical', href: `${config.public.BASE_URL}/blog` }
  ]
});
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
    line-height: 2;
  }

  &__del-ins {
    position: relative;

    del {
      text-decoration: none;
      position: relative;

      &::after {
        content: '';
        mask: url(~/assets/illustrations/squiggle.svg);
        mask-repeat: no-repeat;
        background-color: currentColor;
        pointer-events: none;
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    ins {
      font-family: var(--font-family-nothing-you-could-do);
      text-decoration: none;
      position: absolute;
      top: -24px;
      right: 8px;
      transform: rotate(-25deg);
      font-size: 120%;
    }
  }

  &__list {
    margin-top: 3rem;
  }
}
</style>