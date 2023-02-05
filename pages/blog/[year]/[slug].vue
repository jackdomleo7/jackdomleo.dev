<template>
  <article class="article container container--thinner">
    <header>
      <h1 class="article__title">{{ article.fields.title }}</h1>
    </header>
    <nuxt-picture class="article__img" provider="contentful" :src="article.fields.image.fields.file.url" :alt="article.fields.image.fields.description" width="768" height="403" sizes="4kdesktop:768px" preload />
    <ul class="article__tags">
      <li v-for="tag in article.fields.tags" :key="tag" class="tag">
        {{ tag }}
      </li>
    </ul>
    <p class="article__date">
      <strong>Posted: </strong>
      <time :datetime="dayjs(new Date(article.fields.publishDate)).format('YYYY-MM-DD')">
        {{ dayjs(new Date(article.fields.publishDate)).format('MMMM D, YYYY') }}
      </time>
    </p>
    <div class="rich-text article__content" v-html="parseRichText(article.fields.body, { $img })" />
    <div v-if="blogDetails.fields.articleDisclaimer" class="article__disclaimer" v-html="parseRichText(blogDetails.fields.articleDisclaimer)" />
    <ul class="article__share">
      <li>
        <a :href="`https://twitter.com/intent/tweet?text=${article.fields.title} by @jackdomleo7&url=${config.public.BASE_URL}${$route.path}`" rel="nofollow noopener" target="_blank" data-cooltipz-dir="top" aria-label="Share on Twitter">
          <nuxt-icon name="twitter" />
          <span class="sr-only">Share on Twitter</span>
        </a>
      </li>
      <li>
        <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=${config.public.BASE_URL}${$route.path}&title=${article.fields.title}&summary=${article.fields.title} by Jack Domleo&source=${config.public.BASE_URL}${$route.path}`" rel="nofollow noopener" target="_blank" data-cooltipz-dir="top" aria-label="Share on LinkedIn">
          <nuxt-icon name="linkedin" />
          <span class="sr-only">Share on LinkedIn</span>
        </a>
      </li>
      <li>
        <button data-cooltipz-dir="top" aria-label="Copy link" @click="copyLink()">
          <nuxt-icon name="link" />
          <span class="sr-only">Copy link</span>
        </button>
      </li>
    </ul>
  </article>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { parseRichText } from '@/utilities/parseRichText'
import { formatCMSVariables } from '@/utilities/cmsVariables';
import type { ContentfulEntries } from '@/types/CMS/Entries'

const $img = useImage()
const $route = useRoute()
const config = useRuntimeConfig()

const articleEntries = await useAsyncData(`article-${$route.params.slug}`, (ctx) => { return ctx!.$contentful.getEntries<ContentfulEntries.Article>({ content_type: 'article', limit: 1, 'fields.slug': $route.params.slug })})
const article = formatCMSVariables(articleEntries.data.value!.items[0])

const blogDetailsEntries = await useAsyncData((ctx) => { return ctx!.$contentful.getEntries<Pick<ContentfulEntries.BlogDetails, 'articleDisclaimer'>>({ content_type: 'blogDetails', limit: 1, select: ['fields.articleDisclaimer'] })})
const blogDetails = blogDetailsEntries.data.value!.items[0]

const bodyAsPlainText = documentToPlainTextString(article.fields.body)

function copyLink() {
  navigator.clipboard.writeText(`${config.public.BASE_URL}${$route.path}`)
  window.alert("Link copied")
}

useHead({
  title: `${article.fields.title} | Blog`,
  meta: [
    { name: 'author', content: 'Jack Domleo' },
    { name: 'description', content: article.fields.description },
    { property: 'og:description', content: article.fields.description },
    { property: 'og:image', content: article.fields.image.fields.file.url },
    { property: 'og:image:type', content: article.fields.image.fields.file.contentType },
    { property: 'og:type', content: 'article' },
    { property: 'article:author', content: 'Jack Domleo' },
    { property: 'article:published_time', content: new Date(article.fields.publishDate).toString() },
    { property: 'article:tags', content: article.fields.tags.join(', ') },
    { property: 'twitter:title', content: `${article.fields.title} | Blog | Jack Domleo` },
    { property: 'twitter:description', content: article.fields.description },
    { property: 'twitter:image', content: article.fields.image.fields.file.url }
  ],
  link: [
    { rel: 'canonical', href: `${config.public.BASE_URL}/blog/${$route.params.year}/${$route.params.slug}` }
  ],
  script: [
    ...(bodyAsPlainText.includes('CodePen: ') ? [{
      async: true,
      src: 'https://static.codepen.io/assets/embed/ei.js'
    }] : []),
    ...(bodyAsPlainText.includes('Twitter: ') || bodyAsPlainText.includes('Tweet: ') ? [{
      async: true,
      src: 'https://platform.twitter.com/widgets.js'
    }] : [])
  ]
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/rich-text' as *;

.article {
  font-size: var(--text-body);
  padding: 1rem;

  @media (min-width: $responsive-standard-tablet) {
    margin-top: 2rem;
  }

  &__title {
    font-size: var(--text-subtitle);
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  &__img {
    margin-block: 2rem;
    display: block;

    :deep(img) {
      border-radius: var(--border-radius-standard);
    }
  }

  &__tags {
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    flex-wrap: wrap;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  &__date {
    margin: 0;
  }

  &__content {
    margin-top: 3rem;
  }

  &__disclaimer {
    font-size: var(--text-small);
    margin-top: 3rem;
  }

  &__share {
    display: inline-flex;
    gap: 0.5rem;
    margin: 2rem 0 0 auto;
    list-style-type: none;
    padding-left: 0;

    a, button {
      border: none;
      background-color: #000;
      color: #fff;
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

.tag {
  color: var(--color-accent);
}
</style>