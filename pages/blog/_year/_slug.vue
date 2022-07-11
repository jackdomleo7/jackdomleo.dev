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
    <prismic-rich-text v-if="article.affiliateLegal && article.affiliateLegal.length" class="article__legal" :field="affiliateLegal.data.legal_text" />
    <hr class="article__hr" />
    <nuxt-content class="article__content" :document="article" />
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
    <script v-if="article.embeds && article.embeds.includes('codepen')" async src="https://static.codepen.io/assets/embed/ei.js"></script>
    <script v-if="article.embeds && article.embeds.includes('twitter')" async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { format } from 'date-fns'
import { IArticle } from '@/types'
import { IPage, IPageBlog, IAffiliateLegal } from '@/types/cms'
import Btn from '@/components/Btn.vue'
import Codepen from '@/components/Codepen.vue'
import Youtube from '@/components/Youtube.vue'
import { populateAffiliateProviders } from '@/helpers/affiliateProviders'

export default Vue.extend({
  name: 'BlogSlug',
  // eslint-disable-next-line vue/no-unused-components
  components: { Btn, Codepen, Youtube },
  async asyncData ({ $content, $prismic, route, error, payload }) {
    const blogPage: IPage<IPageBlog, 'blog'> = await $prismic.api.getSingle('blog')
    const affiliateLegal: IPage<IAffiliateLegal, 'affiliate_legal'> = await $prismic.api.getSingle('affiliate_legal')
    const path = route.path.replace('/blog', '')
    let article: IArticle | undefined;

    if (payload) {
      article = payload as IArticle
    }
    else {
      const articleSearch = await $content({ deep: true }).where({ path }).only(['title', 'body', 'date', 'readingTime', 'embeds', 'description', 'tags', 'affiliateLegal']).fetch() as IArticle[]
      article = articleSearch[0]
    }
    if (article) {
      if (article.affiliateLegal?.length) {
        affiliateLegal.data.legal_text = populateAffiliateProviders(affiliateLegal.data.legal_text, article.affiliateLegal)
      }

      return { blogPage, article, affiliateLegal }
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
      title: `${(this.article as IArticle).title} | Blog`,
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE_URL}/blog${(this.article as IArticle).path}/cover_image.png`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: `${(this.article as IArticle).title} | Blog | Jack Domleo`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: `${(this.article as IArticle).description}`
        },
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: `${(this.article as IArticle).description}`
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'article:published_time',
          name: 'article:published_time',
          property: 'article:published_time',
          content: `${(this.article as IArticle).date}`
        },
        {
          hid: 'article:author',
          name: 'article:author',
          property: 'article:author',
          content: 'Jack Domleo'
        },
        ...((this.article as IArticle).tags ? [{
          hid: 'article:tag',
          name: 'article:tag',
          property: 'article:tag',
          content: `${(this.article as IArticle).tags}`
        }] : [])
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
    align-self: flex-start;

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

  &__legal {
    font-style: italic;
    font-size: var(--text-small);
  }

  &__hr {
    width: 80%;
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

  &__content {
    line-height: 1.5;

    h2, h3, h4, h5, h6 {
      margin-top: 2rem;
      margin-bottom: 1.25rem;
    }

    p {
      margin-block: 1rem;
    }

    figure {
      margin-block: 2rem;
      margin-inline: 0;

      @media (min-width: $responsive-standard-tablet) {
        padding-inline: 2rem;
      }
    }

    figcaption {
      margin-top: 0.5rem;
      text-align: center;
      font-size: var(--text-small);
    }

    ::v-deep .cp_embed_wrapper {
      margin-block: 2rem;
    }
  }
}
</style>
