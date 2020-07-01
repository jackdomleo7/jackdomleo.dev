<template>
  <ul v-if="articles.length > 0 && !loading.loading" class="articles">
    <li v-for="(blog, index) in articles" :key="index" :aria-setsize="articles.length" :aria-posinset="index + 1">
      <article class="article">
        <header>
          <h2 class="article__title">
            <nuxt-link :to="'/blog/' + blog.slug">
              {{ blog.title }}
            </nuxt-link>
          </h2>
          <ul class="article__meta">
            <li><time :datetime="articleDate(blog.date).datetime">{{ articleDate(blog.date).date }}</time></li>
            <li><span>{{ blog.readingTime }} {{ blog.readingTime === 1 ? 'minute' : 'minutes' }} read</span></li>
          </ul>
        </header>
        <section class="article__body">
          <p>{{ blog.description }}</p>
        </section>
      </article>
    </li>
  </ul>
  <ul v-else-if="loading.loading" class="articles--skeleton" role="presentation">
    <li v-for="i in loading.skeletonCount" :key="i" class="article--skeleton" role="presentation">
      <div class="skeleton__header" />
      <div class="skeleton__meta" />
      <div class="skeleton__description first" />
      <div class="skeleton__description last" />
    </li>
  </ul>
  <p v-else class="center">
    No articles match that search.
  </p>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { format } from 'date-fns';

interface IArticleDate {
  datetime: string;
  date: string;
}

interface ILoading {
  loading: boolean;
  skeletonCount: number;
}

@Component
export default class ArticlesList extends Vue {
  @Prop({ type: Array })
  private readonly articles!: any[];

  @Prop()
  private readonly loading!: ILoading;

  private articleDate (date: Date): IArticleDate {
    const newDate = Date.parse(String(date));
    return {
      date: format(newDate, 'do MMMM yyyy'),
      datetime: format(newDate, 'yyyy-MM-dd')
    };
  }
}
</script>

<style lang="scss">
:root {
  --skeleton-light: #444;
  --skeleton-dark: #3a3a3a;
}

.theme--light {
  --skeleton-light: #eee;
  --skeleton-dark: #ddd;
}
</style>

<style lang="scss" scoped>
@import '@/assets/styles/shared/box';

.articles {
  padding-left: 0;
  list-style-type: none;

  > li {
    margin: 4rem 0;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &--skeleton {
    list-style-type: none;
    padding-left: 0;
    overflow-x: hidden;

    li {
      margin: 4rem 0;

      &:first-of-type {
        margin-top: 1.25rem;
      }

      &:last-of-type {
        margin-bottom: 0;
      }

      > div {
        animation: skeleton 5s ease infinite;
        background: linear-gradient(90deg, var(--skeleton-light) 0%, var(--skeleton-light) 46%, var(--skeleton-dark) 50%, var(--skeleton-light) 54%, var(--skeleton-light) 100%);
        background-size: 250%;

        &.skeleton {
          &__header {
            height: 2rem;
            width: 45%;
            margin-bottom: 1.25rem;
          }

          &__meta {
            height: 1.2rem;
            width: 30%;
            margin-bottom: 1.5rem;
          }

          &__description {
            height: 1.1rem;

            &.first {
              width: 80vw;
            }

            &.last {
              width: 35%;
              margin-top: 0.5rem;
            }
          }
        }
      }
    }
  }

  @keyframes skeleton {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

  .article {
    &__title {
      a {
        text-decoration: none;
      }
    }

    &__meta {
      padding-left: 0;
      display: flex;
      align-items: center;

      li {
        &:nth-child(1) {
          list-style-type: none;
          margin-right: 1.5rem;
          font-weight: 700;
        }
      }
    }

    &__body {
      margin-top: 1.5rem;
    }
  }
}
</style>
