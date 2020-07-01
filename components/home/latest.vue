<template>
  <section id="latest">
    <h2>Latest</h2>
    <articles-list :articles="articles" :loading="{ loading: articlesLoading, skeletonCount: articlesNumberOf }" />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { ArticlesList } from '@/components/blog';

@Component({
  components: { ArticlesList }
})
export default class Latest extends Vue {
  private articles: object[] = [];
  private readonly articlesNumberOf: number = 1;
  private articlesLoading: boolean = false;

  async fetch () {
    this.articlesLoading = true;
    this.articles = await this.$content('blog', { deep: true }).only(['title', 'date', 'slug', 'description', 'readingTime', 'hashtags']).sortBy('date', 'desc').limit(this.articlesNumberOf).fetch();
    this.articlesLoading = false;
  }
}
</script>
