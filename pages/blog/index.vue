<template>
  <page-template page-title="Blog">
    <p>You can read my articles here or you can:</p>
    <ul class="alternative">
      <li aria-setsize="2" aria-posinset="1" class="box">
        <a href="/feed.xml" rel="alternate" type="application/rss+xml">
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
    <div class="filter">
      <textfield
        v-model="articleSearch"
        class="filter__search"
        label="Search articles"
        type="search"
        placeholder="Search..."
        @input="filterArticles"
      />
      <selectfield
        v-model="selected"
        class="filter__filter"
        label="Quick filter"
        :options="filterOptions"
        @change="getArticles()"
      />
    </div>
    <articles-list :articles="filteredArticles" :loading="{ loading: articlesLoading, skeletonCount: 3 }" />
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { format } from 'date-fns';
import { PageTemplate, Textfield, Selectfield } from '@/components';
import { ArticlesList } from '@/components/blog';
import Search from '@/middleware/fuzzySearch';

@Component({
  components: { ArticlesList, PageTemplate, Textfield, Selectfield },
  head () {
    return {
      title: 'Blog',
      meta: [
        { hid: 'description', name: 'description', content: 'A list of all the articles written by me!' },
        { hid: 'og:description', name: 'og:description', content: 'A list of all the articles written by me!' }
      ]
    };
  }
})
export default class Index extends Vue {
  private articles: any = [];
  private filteredArticles: any = [];
  private articleSearch: string = '';
  private articlesLoading: boolean = true;
  private selected: string = '';

  private readonly filterOptions: any[] = [
    {
      value: '',
      text: 'All'
    },
    {
      value: 'aboutme',
      text: 'About me'
    },
    {
      value: 'monthlyreflection',
      text: 'Monthly Reflection'
    },
    {
      value: 'career',
      text: 'Career'
    },
    {
      value: 'books',
      text: 'Books'
    },
    {
      value: 'event',
      text: 'Event'
    }
  ];

  private filterArticles () {
    if (this.articleSearch === '') {
      this.filteredArticles = this.articles;
      return;
    }

    this.filteredArticles = this.articles.filter((article: any) => this.filterArticle(article));
  }

  private filterArticle (article: any): boolean {
    return (
      Search.fuzzySearch(article.title, this.articleSearch) ||
      Search.fuzzySearch(article.description, this.articleSearch) ||
      Search.fuzzySearch(format(Date.parse(String(article.date)), 'do MMMM yyyy'), this.articleSearch) ||
      Search.fuzzySearch(format(Date.parse(String(article.date)), 'yyyy-MM-dd'), this.articleSearch) ||
      Search.fuzzySearch(article.readingTime, this.articleSearch) ||
      Search.fuzzySearch(`${article.readingTime} minutes`, this.articleSearch) ||
      Search.fuzzySearch(article.hashtags ? article.hashtags.join(' ') : '', this.articleSearch)
    );
  }

  private async getArticles () {
    this.articlesLoading = true;
    const articleProperties: string[] = ['title', 'date', 'slug', 'description', 'readingTime', 'hashtags'];
    if (this.selected) {
      this.articles = await this.$content('blog', { deep: true }).only(articleProperties).sortBy('date', 'desc').where({ hashtags: { $contains: [this.selected.toLowerCase()] } }).fetch();
    } else {
      this.articles = await this.$content('blog', { deep: true }).only(articleProperties).sortBy('date', 'desc').fetch();
    }
    this.filterArticles();
    this.articlesLoading = false;
  }

  private mounted () {
    if (typeof (this.$route.query.filter) === 'string') {
      this.selected = this.$route.query.filter;
    }

    if (typeof (this.$route.query.search) === 'string') {
      this.articleSearch = this.$route.query.search;
    }

    this.getArticles();
    this.filterArticles();
  }
}
</script>

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

.filter {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 40em) {
    flex-direction: row;
  }

  &__filter {
    width: 50% !important;

    @media (min-width: 40em) {
      width: 25% !important;
    }
  }
}
</style>
