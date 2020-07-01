<template>
  <page-template page-title="Hey, I'm Jack Domleo">
    <intro />
    <hr>
    <latest />
    <hr>
    <currently-doing />
    <hr>
    <top-projects />
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
    <hr>
    <contact />
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { PageTemplate } from '@/components';
import { Contact, CurrentlyDoing, Intro, Latest, Toolbox, TopProjects, Work } from '@/components/home';

@Component({
  components: { Contact, CurrentlyDoing, Intro, Latest, PageTemplate, Toolbox, TopProjects, Work },
  head () {
    return {
      title: 'Home'
    };
  }
})
export default class Index extends Vue {}
</script>
