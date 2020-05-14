<template>
  <page-template page-title="Blog">
    <ul class="blog__list">
      <li
        v-for="(blog, index) in BlogSummaries"
        :id="'blog-' + blog.url"
        :key="index"
        class="blog__summary"
        :aria-setsize="BlogSummaries.length"
        :aria-posinset="index"
      >
        <nuxt-link :to="'/blog/' + blog.url">
          <h2>{{ blog.title }}</h2>
          <p>{{ blog.description }}</p>
        </nuxt-link>
      </li>
    </ul>
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { PageTemplate } from '@/components';

interface IBlogSummary {
  title: string;
  description: string;
  url: string;
}

@Component({
  components: { PageTemplate },
  head () {
    return {
      title: 'Blog',
      meta: [
        { hid: 'description', name: 'description', content: 'A list of blog posts written by Jack Domleo.' },
        { hid: 'og:description', name: 'og:description', content: 'A list of blog posts written by Jack Domleo.' }
      ]
    };
  }
})
export default class Index extends Vue {
  private readonly BlogSummaries: IBlogSummary[] = [
    {
      title: 'All Day Hey! 2020',
      description: 'All Day Hey 2020 was the first virtual conference I attended and I thought it was fantastic! Can\'t wait for 2021.',
      url: 'all-day-hey-2020'
    },
    {
      title: 'To Blog or Not to Blog',
      description: 'Writing a blog can be scary. This is how I was convinced to start my own blog to share my thoughts and ideas.',
      url: 'to-blog-or-not-to-blog'
    }
  ]
}
</script>

<style lang="scss" scoped>
.blog {
  &__list {
    padding-left: 0;
    list-style-type: none;
  }

  &__summary {
    a {
      color: inherit;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      border-radius: 0.375rem;
      transition: background-color 160ms ease;

      &:hover,
      &:focus {
        background-color: rgba(0, 0, 0, 0.1);
      }

      p {
        margin-top: 0;
      }
    }
  }
}
</style>
