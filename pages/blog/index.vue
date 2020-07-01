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
    <textfield v-model="articleSearch" label="Filter articles" type="search" placeholder="Search..." @input="filterArticles" />
    <articles-list :articles="filteredArticles" :loading="{ loading: articlesLoading, skeletonCount: 3 }" />
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { format } from 'date-fns';
import { PageTemplate, Textfield } from '@/components';
import { ArticlesList } from '@/components/blog';
import Search from '@/middleware/fuzzySearch';

@Component({
  components: { ArticlesList, PageTemplate, Textfield },
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
      Search.fuzzySearch(format(Date.parse(String(article.date)), 'do MMMM yyyy'), this.articleSearch) ||
      Search.fuzzySearch(format(Date.parse(String(article.date)), 'yyyy-MM-dd'), this.articleSearch) ||
      Search.fuzzySearch(article.readingTime, this.articleSearch) ||
      Search.fuzzySearch(`${article.readingTime} minutes`, this.articleSearch) ||
      Search.fuzzySearch(article.hashtags.join(' '), this.articleSearch)
    );
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
</style>
