<template>
  <article class="markdown">
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <p>{{ page.date }}</p>
    <nuxt-content :document="page" />
    <script v-if="page.containsCodePen" async src="https://static.codepen.io/assets/embed/ei.js" />
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Slug extends Vue {
  async asyncData ({ $content, params }: {$content: any, params: any}) {
    const slug = params.slug || 'index';
    const page = await $content(slug)
      .fetch()
      .catch((err: string) => {
        console.error({ statusCode: 404, message: err });
      });

    return {
      page
    };
  }
}
</script>
