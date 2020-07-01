<template>
  <page-template page-title="Blog">
    <p>You can read my articles here or you can:</p>
    <ul class="alternative">
      <li aria-setsize="2" aria-posinset="1" class="box">
        <a href="/feed">
          <svg-icon name="rss" />
          Subscribe to my RSS feed
        </a>
      </li>
      <li aria-setsize="2" aria-posinset="2" class="box">
        <a href="https://dev.to/jackdomleo7" rel="nofollow noopener">
          <svg-icon name="dev" />
          Read on DEV.to
        </a>
      </li>
    </ul>
    <textfield v-model="articleSearch" label="Filter articles" type="search" placeholder="Search..." @input="filterArticles" />
    <ul v-if="articlesLoading" class="articles--skeleton" role="presentation">
      <li v-for="i in 3" :key="i" class="article--skeleton" role="presentation">
        <div class="skeleton__header" />
        <div class="skeleton__meta" />
        <div class="skeleton__description first" />
        <div class="skeleton__description last" />
      </li>
    </ul>
    <ul v-if="!articlesLoading" class="articles">
      <li v-for="(blog, index) in filteredArticles" :key="index" :aria-setsize="filteredArticles.length" :aria-posinset="index + 1">
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
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { format } from 'date-fns';
import { PageTemplate, Textfield } from '@/components';
import Search from '@/middleware/fuzzySearch';

interface IArticleDate {
  datetime: string;
  date: string;
}

@Component({
  components: { PageTemplate, Textfield },
  head () {
    return {
      title: 'Blog'
    };
  }
})
export default class Index extends Vue {
  private articles: object[] = [];
  private filteredArticles: object[] = [];
  private articleSearch: string = '';
  private articlesLoading: boolean = false;

  async fetch () {
    this.articlesLoading = true;
    this.articles = await this.$content('blog', { deep: true }).only(['title', 'date', 'slug', 'description', 'readingTime', 'hashtags']).sortBy('date', 'desc').fetch();
    this.filterArticles();
    this.articlesLoading = false;
  }

  private articleDate (date: Date): IArticleDate {
    const newDate = Date.parse(String(date));
    return {
      date: format(newDate, 'do MMMM yyyy'),
      datetime: format(newDate, 'yyyy-MM-dd')
    };
  }

  private filterArticles () {
    if (this.articleSearch === '') {
      this.filteredArticles = this.articles;
      return;
    }

    this.filteredArticles = this.articles.filter(article => this.filterArticle(article));
  }

  private filterArticle (article: any): boolean {
    return (
      Search.fuzzySearch(article.title, this.articleSearch) ||
      Search.fuzzySearch(article.description, this.articleSearch) ||
      Search.fuzzySearch(this.articleDate(article.date).date, this.articleSearch) ||
      Search.fuzzySearch(this.articleDate(article.date).datetime, this.articleSearch) ||
      Search.fuzzySearch(article.readingTime, this.articleSearch) ||
      Search.fuzzySearch(`${article.readingTime} minutes`, this.articleSearch) ||
      Search.fuzzySearch(article.hashtags.join(' '), this.articleSearch)
    );
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

.alternative {
  padding-left: 0;
  list-style-type: none;
  display: grid;
  margin-bottom: 1.5rem;
  gap: 1rem;
  grid-template-rows: auto;
  grid-template-columns: 1fr;

  @media (min-width: 30em) {
    grid-template-columns: 1fr 1fr;
  }
}

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
