<template>
  <section id="latest" class="latest">
    <h2>Latest article</h2>
    <articles-list :articles="articles" :loading="{ loading: articlesLoading, skeletonCount: articlesNumberOf }" />
    <btn to="/blog" class="latest__btn">
      Read more
    </btn>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { ArticlesList } from '@/components/blog';
import { Btn } from '@/components';

@Component({
  components: { ArticlesList, Btn }
})
export default class Latest extends Vue {
  private articles: any = [];
  private readonly articlesNumberOf: number = 1;
  private articlesLoading: boolean = false;

  async fetch () {
    this.articlesLoading = true;
    this.articles = await this.$content('blog', { deep: true }).only(['title', 'date', 'slug', 'description', 'readingTime', 'hashtags']).sortBy('date', 'desc').limit(this.articlesNumberOf).fetch();
    this.articlesLoading = false;
  }
}
</script>

<style lang="scss" scoped>
.latest {
  display: flex;
  flex-direction: column;

  &__btn {
    align-self: flex-end;
  }
}
</style>
