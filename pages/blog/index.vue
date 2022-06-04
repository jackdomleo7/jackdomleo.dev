<template>
  <div class="blog">
    <header class="container container--header header">
      <h1 class="header__title">Blog</h1>
      <prismic-rich-text class="header__intro" :field="blogPage.data.blog_intro" />
      <a class="header__rss" href="/feed.xml" rel="alternate" type="application/rss+xml">
        <svg-icon name="rss" />
        RSS
      </a>
    </header>
    <ul class="container blog__list">
      <li v-for="article in articles" :key="article.title">
        <article-card :article="article" heading-level="h2" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ArticleCard from '@/components/ArticleCard.vue'
import { IArticle } from '@/types'
import { IPage, IPageBlog } from '@/types/cms'

export default Vue.extend({
  name: 'Blog',
  components: { ArticleCard },
  async asyncData ({ $content, $prismic }) {
    const blogPage: IPage<IPageBlog, 'blog'> = await $prismic.api.getSingle('blog')
    const articles = await $content({ deep: true }).sortBy('date', 'desc').only(['title', 'description', 'tags', 'date', 'body', 'readingTime', 'path']).fetch() as IArticle[]

    return { blogPage, articles }
  },
  head () {
    return {
      title: 'Blog'
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;

  &__title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: var(--text-title);

    @media (min-width: $responsive-standard-tablet) {
      margin-bottom: 2rem;
    }
  }

  &__intro {
    font-size: var(--text-body);
  }

  &__rss {
    color: var(--colour-primary);
    display: flex;
    align-items: center;
    gap: 0.125rem;
    margin-left: auto;
    margin-right: 1rem;

    svg {
      height: 1.625rem;
      width: 1.625rem;
    }
  }
}

.blog {
  &__list {
    list-style-type: none;
    margin-block: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    justify-items: center;

    @media (min-width: $responsive-standard-tablet) {
      gap: 3rem 2rem;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $responsive-small-desktop) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
