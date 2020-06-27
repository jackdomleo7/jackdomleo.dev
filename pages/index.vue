<template>
  <page-template page-title="Hey, I'm Jack Domleo">
    <intro />
    <hr>
    <currently-doing />
    <hr>
    <toolbox />
    <hr>
    <work />
    <hr>
    <section id="portfolio">
      <h2>Portfolio</h2>
      <p>
        You can find my official portfolio <nuxt-link to="/portfolio">
          here
        </nuxt-link>
      </p>
    </section>
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { PageTemplate } from '@/components';
import { CurrentlyDoing, Intro, Toolbox, Work } from '@/components/home';

@Component({
  components: { CurrentlyDoing, Intro, PageTemplate, Toolbox, Work },
  head () {
    return {
      title: 'Home'
    };
  }
})
export default class Index extends Vue {}
</script>
