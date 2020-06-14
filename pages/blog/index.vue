<template>
  <page-template page-title="Blog">
    <ul class="articles">
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
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { format } from 'date-fns';
import { PageTemplate } from '@/components';

interface IArticleDate {
  datetime: string;
  date: string;
}

@Component({
  components: { PageTemplate },
  head () {
    return {
      title: 'Blog'
    };
  }
})
export default class Index extends Vue {
  private articles: object[] = [];

  async fetch () {
    this.articles = await this.$content('blog', { deep: true }).only(['title', 'date', 'slug', 'description', 'readingTime']).sortBy('date', 'desc').fetch();
  }

  private articleDate (date: Date): IArticleDate {
    const newDate = Date.parse(String(date));
    return {
      date: format(newDate, 'do MMMM yyyy'),
      datetime: format(newDate, 'yyyy-MM-dd')
    };
  }
}
</script>

<style lang="scss" scoped>
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
