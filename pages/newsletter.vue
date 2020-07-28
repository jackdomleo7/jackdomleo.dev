<template>
  <page-template page-title="Newsletter">
    <p>Sign up to my monthly newsletter below!</p>
    <p>Each month I'll be sending a newsletter with some of my latest projects, some of my tips, what I've learned, what resources I've found and what books or courses I have encountered first-hand.</p>
    <p>I'll be sure to keep the content fresh, useful and mine. You can expect great things each month and if you don't like it, you can always unsubscribe and I would really appreciate any feedback.</p>
    <p>You can expect an email in the first week of each month that reflects on the previous month. 👍</p>
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { PageTemplate } from '@/components';

@Component({
  components: { PageTemplate },
  head () {
    return {
      title: 'Newsletter',
      meta: [
        { hid: 'description', name: 'description', content: 'Sign up to my monthly newsletter where I\'ll be sharing tips, projects, books and resources!' },
        { hid: 'og:description', name: 'og:description', content: 'Sign up to my monthly newsletter where I\'ll be sharing tips, projects, books and resources!' }
      ]
    };
  }
})
export default class Newsletter extends Vue {}
</script>
