<template>
  <div v-if="article" class="article container container--thinner">
    <article>
      <header>
        <h1 class="article__title">{{ article.title }}</h1>
      </header>
      <nuxt-picture class="article__img" :src="cover_image" alt="" width="768" height="403" sizes="4kdesktop:768px" preload />
      <ul class="article__tags">
        <li v-for="tag in article.tags" :key="tag" class="tag">
          <nuxt-link :to="{ path: '/blog', query: { filters: tag.toLowerCase() } }">{{ tag }}</nuxt-link>
        </li>
      </ul>
      <p class="article__date">
        <strong>Published: </strong>
        <time :datetime="dayjs(new Date(article.published_time)).format('YYYY-MM-DD')" :title="dayjs(new Date(article.published_time)).format('dddd D MMMM YYYY')">
          {{ dayjs(new Date(article.published_time)).format('MMMM D, YYYY') }}
        </time>
      </p>
      <ContentRenderer class="rich-text article__content" :value="article.body" :data="variables" />
      <p class="article__disclaimer">
        Disclaimer: All data and information are correct to the best of my knowledge at the time of writing. I use AI to assist with proofreading and fact-checking.
      </p>
      <ul class="article__share">
        <li>
          <a :href="`https://twitter.com/intent/tweet?text=${article.title} by Jack Domleo&url=${config.public.BASE_URL}${$route.path}`" rel="nofollow noopener" target="_blank" data-cooltipz-dir="top" aria-label="Share on X">
            <Icon name="custom:twitter" mode="svg" />
            <span class="sr-only">Share on X/Twitter</span>
          </a>
        </li>
        <li>
          <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=${config.public.BASE_URL}${$route.path}&title=${article.title}&summary=${article.description} by Jack Domleo&source=${config.public.BASE_URL}${$route.path}`" rel="nofollow noopener" target="_blank" data-cooltipz-dir="top" aria-label="Share on LinkedIn">
            <Icon name="custom:linkedin" mode="svg" />
            <span class="sr-only">Share on LinkedIn</span>
          </a>
        </li>
        <li>
          <button data-cooltipz-dir="top" aria-label="Copy link" @click="copyLink()">
            <Icon name="custom:link" mode="svg" />
            <span class="sr-only">Copy link</span>
          </button>
        </li>
      </ul>
    </article>

    <!-- <div class="article__suggested">
      <h2>What to read next</h2>
      <ArticleList
        class="container--thinner"
        :limit="2"
        :suggested="{
          current: article.fields.title,
          titles: article.fields.suggestedArticles?.map(x => x?.fields.title || '').filter(Boolean) || [],
          tags: article.fields.tags || []
        }"
      />
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import variables from '@/utilities/variables';

const $route = useRoute()
const config = useRuntimeConfig()

const { data: article } = await useAsyncData($route.path, () => {
  return queryCollection('article').path($route.path).first()
})
if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found'
  })
}
const cover_image = `${article.value.path}/cover_image.jpg`

function copyLink() {
  navigator.clipboard.writeText(`${config.public.BASE_URL}${article.value!.path}`)
  window.alert("Link copied")
}

useHead({
  title: `${article.value.title} | Blog`,
  meta: [
    { name: 'author', content: 'Jack Domleo' },
    { name: 'description', content: article.value.description },
    { property: 'og:image', content: cover_image },
    { property: 'og:image:type', content: 'jpg' },
    { property: 'og:type', content: 'article' },
    { property: 'article:author', content: 'Jack Domleo' },
    { property: 'article:published_time', content: new Date(article.value.published_time).toString() },
    ...(article.value.modified_time ? [
      { property: 'article:modified_time', content: new Date(article.value.modified_time).toString() }
    ] : []),
    { property: 'article:tags', content: article.value.tags.join(', ') },
    { name: 'twitter:image', content: cover_image }
  ],
  link: [
    { rel: 'canonical', href: `${config.public.BASE_URL}/blog/${$route.params.year}/${$route.params.slug}` }
  ],
  // script: [
  //   ...(bodyAsPlainText.includes('CodePen: ') ? [{
  //     async: true,
  //     src: 'https://static.codepen.io/assets/embed/ei.js'
  //   }] : [])
  // ]
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
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 0;
    margin-bottom: 1rem;

    > li:not(:first-of-type) {
      position: relative;

      &::before {
        content: '•';
        position: absolute;
        left: -0.75rem;
        top: 50%;
        transform: translateY(-50%);
        display: block;
      }
    }
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
      height: 2rem;
      padding: 0.375rem;
      cursor: pointer;
      display: grid;
      place-items: center;

      @media (forced-colors: active) {
        border: 1px solid transparent;
      }
    }
  }

  &__suggested {
    margin-top: 4rem;

    h2 {
      font-size: var(--text-subtitle);
    }
  }
}

.tag {
  color: var(--color-accent);
}
</style>