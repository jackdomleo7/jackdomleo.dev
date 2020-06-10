<template>
  <div>
    <h1>My blog posts</h1>
    <ul>
      <li v-for="(blog, index) in articles" :key="index">
        <a :href="'/blog' + blog.path">{{ blog.title }} - {{ articleDate(blog.date) }} - {{ blog.readingTime }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { format } from 'date-fns';

@Component
export default class Index extends Vue {
  private articles: object[] = [];

  async fetch () {
    this.articles = await this.$content().sortBy('date', 'desc').fetch();
  }

  private articleDate (date: Date): string {
    return format(date, 'do MMMM yyyy');
  }
}
</script>
