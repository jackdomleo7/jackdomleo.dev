<template>
  <article class="markdown">
    <h1>{{ page.title }}</h1>
    <p>{{ page.date }}</p>
    <p>{{ page.description }}</p>
    <nuxt-content :document="page" />
    <script v-if="page.containsCodePen" async src="https://static.codepen.io/assets/embed/ei.js" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const slug = params.slug || 'index';
    let page = await $content('blog', { deep: true })
      .where({ slug })
      .only(['title', 'date', 'slug', 'description', 'readingTime', 'body'])
      .fetch();
    page = page[0];

    return {
      page
    };
  },
  head () {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE_URL}${this.$route.path}${this.$route.path.endsWith('/') ? '' : '/'}og.png`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: `${this.page.title} | Blog | Jack Domleo`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: `${this.page.description}`
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'article:published_time',
          name: 'article:published_time',
          property: 'article:published_time',
          content: `${this.page.date}`
        },
        {
          hid: 'article:author',
          name: 'article:author',
          property: 'article:author',
          content: 'Jack Domleo'
        }
        // {
        //   hid: 'article:tag',
        //   name: 'article:tag',
        //   property: 'article:tag',
        //   content: `${this.page.tags}`
        // }
      ]
    };
  }
};
</script>
