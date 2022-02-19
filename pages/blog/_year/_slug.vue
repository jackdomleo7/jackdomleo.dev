<template>
  <article class="container--header article">
    <nuxt-link to="/blog" class="article__return">
      <svg-icon name="arrow-left" />
      <span class="sr-only">Back to blog</span>
    </nuxt-link>
    <h1 class="article__title">{{ article.title }}</h1>
    <div class="article__meta">
      <time :datetime="format(new Date(article.date), 'y-MM-dd')">{{ format(new Date(article.date), 'MMMM d, y') }}</time>
      <p>{{ article.readingTime }} min read</p>
    </div>
    <prismic-rich-text class="article__intro" :field="blogPage.data.article_intro" />
    <nuxt-content :document="article" />
    <ul class="article__share">
      <li>
        <a :href="`https://twitter.com/intent/tweet?text=${article.title} by @jackdomleo7&url=${baseUrl}${$route.path}`" rel="nofollow noopener" target="_blank" data-cooltipz-dir="top" aria-label="Share on Twitter">
          <svg-icon name="twitter" />
          <span class="sr-only">Share on Twitter</span>
        </a>
      </li>
      <li>
        <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=${baseUrl}${$route.path}&title=${article.title}&summary=${article.title} by Jack Domleo&source=${baseUrl}${$route.path}`" rel="nofollow noopener" target="_blank" data-cooltipz-dir="top" aria-label="Share on LinkedIn">
          <svg-icon name="linkedin" />
          <span class="sr-only">Share on LinkedIn</span>
        </a>
      </li>
      <li>
        <button data-cooltipz-dir="top" aria-label="Copy link" @click="copyLink()">
          <svg-icon name="link" />
          <span class="sr-only">Copy link</span>
        </button>
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { format } from 'date-fns'
import { IArticle } from '@/types'
import { IPage, IPageBlog } from '@/types/cms'

export default Vue.extend({
  name: 'BlogSlug',
  async asyncData ({ $content, $prismic, route, error, payload }) {
    const blogPage: IPage<IPageBlog> = await $prismic.api.getSingle('blog')
    const path = route.path.replace('/blog', '')
    const articleSearch: IArticle[] = payload || await $content({ deep: true }).where({ path }).only(['title', 'body', 'date', 'readingTime']).fetch()
    const article = articleSearch[0]
    if (article) {
      return { blogPage, article }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data () {
    return {
      format,
      baseUrl: process.env.BASE_URL as string
    }
  },
  head () {
    return {
      title: `${this.article.title} | Blog`,
      link: [
        {
          rel: 'preload',
          as: 'script',
          href: 'https://platform.twitter.com/widgets.js',
          crossorigin: true
        }
      ],
      script: [
        {
          src: 'https://platform.twitter.com/widgets.js',
          async: true
        }
      ]
    }
  },
  methods: {
    copyLink (): void {
      navigator.clipboard.writeText(`${this.baseUrl}${this.$route.path}`)
      window.alert("Link copied")
    }
  }
})
</script>

<style lang="scss" scoped>
.article {
  max-width: 50rem;
  padding-inline: 1rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: $responsive-small-tablet) {
    padding-inline: 2rem;
  }

  &__return {
    display: inline-flex;

    svg {
      width: 2rem;
      aspect-ratio: auto 1 / 1;
      color: var(--colour-text-secondary);
    }
  }
  
  &__title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: var(--text-title);
  }

  &__meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;

    p {
      margin: 0;
    }
  }

  &__intro {
    font-style: italic;
  }

  &__share {
    display: inline-flex;
    gap: 0.5rem;
    margin: 2rem 0 0 auto;
    list-style-type: none;
    padding-left: 0;

    a, button {
      border: none;
      background-color: var(--colour-text-primary);
      color: var(--colour-text-button);
      border-radius: 50%;
      width: 2rem;
      aspect-ratio: auto 1 / 1;
      padding: 0.375rem;
      cursor: pointer;
      display: grid;
      place-items: center;
    }
  }
}
</style>
