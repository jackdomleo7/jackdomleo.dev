<template>
  <page-template page-title="Blog">
    <p>
      Coming soon...
    </p>
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { PageTemplate } from '@/components';

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
export default class Index extends Vue {}
</script>

<style lang="scss" scoped></style>
