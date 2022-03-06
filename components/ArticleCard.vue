<template>
  <nuxt-link :to="`/blog${article.path}`" class="article-card">
    <nuxt-img :src="`/blog${article.path}/cover_image.png`" alt="" width="500" height="210" loading="lazy" class="article-card__img" />
    <div class="article-card__info">
      <ul v-if="article.tags" class="article-card__tags">
        <li v-for="tag in article.tags" :key="tag" class="tag--inverted">
          {{ tag }}
        </li>
      </ul>
      <component :is="headingLevel" class="article-card__heading">
        {{ article.title }}
      </component>
      <p class="article-card__description">
        {{ article.description }}
      </p>
      <div class="article-card__meta">
        <time :datetime="format(new Date(article.date), 'y-MM-dd')">{{ format(new Date(article.date), 'MMMM d, y') }}</time>
        <p>{{ article.readingTime }} min read</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { format } from 'date-fns'
import { IArticle } from '@/types'

export default Vue.extend({
  name: 'ArticleCard',
  props: {
    article: {
      type: Object as PropType<IArticle>,
      required: true
    },
    headingLevel: {
      type: String as PropType<'h2'|'h3'|'h4'|'h5'|'h6'>,
      required: true,
      validator: (value: string): boolean => {
        return ['h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
      }
    }
  },
  data () {
    return {
      format
    }
  }
})
</script>

<style lang="scss" scoped>
.article-card {
  display: flex;
  flex-direction: column;
  background-color: var(--colour-foreground-1);
  color: var(--colour-text-secondary);
  box-shadow: var(--shadow-standard);
  border-radius: 1.25rem;
  text-decoration: none;
  height: 100%;
  max-width: 31.25rem;
  overflow: hidden;

  &__img {
    width: 100%;
    background-color: #ccc;
    color: #000;
  }

  &__info {
    padding: 0.5rem 0.5rem 0.75rem 0.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;

    @media (min-width: $responsive-small-tablet) {
      padding: 1rem 0.5rem 1rem 1rem;
    }
  }

  &__tags {
    padding-left: 0;
    margin-block: 0;
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }

  &__heading {
    color: var(--colour-text-primary);
    font-size: var(--text-heading);
    font-weight: 400;
    margin-top: 0.5rem;
    margin-bottom: 0;

    @media (min-width: $responsive-small-tablet) {
      margin-top: 0.75rem;
    }
  }

  &__description {
    font-size: var(--text-body);
    margin-top: 1rem;
    margin-bottom: 0;
    flex: 1;

    @media (min-width: $responsive-small-tablet) {
      margin-top: 1.25rem;
    }
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 0;

    time {
      position: relative;

      &::after {
        content: '·';
        position: absolute;
        right: -0.5rem;
        transform: translateX(50%);
      }
    }
  }
}
</style>
