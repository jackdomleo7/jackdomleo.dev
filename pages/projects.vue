<template>
  <page-template page-title="Projects">
    <p>This page only lists <em>some</em> of my projects. You can:</p>
    <ul class="more-projects">
      <li aria-setsize="2" aria-posinset="1" class="box">
        <a href="https://github.com/jackdomleo7" rel="nofollow noopener" target="_blank">
          <svg-icon name="github" />
          <span>View more projects on GitHub</span>
        </a>
      </li>
      <li aria-setsize="2" aria-posinset="2" class="box">
        <a href="https://codepen.io/JackDomleo" rel="nofollow noopener" target="_blank">
          <svg-icon name="codepen" />
          <span>View more projects on CodePen</span>
        </a>
      </li>
    </ul>
    <hr>
    <featured-projects />
    <hr>
    <enterprise-projects />
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Btn, PageTemplate, Textfield } from '@/components';
import { EnterpriseProjects, FeaturedProjects } from '@/components/portfolio';

@Component({
  components: { Btn, EnterpriseProjects, FeaturedProjects, PageTemplate, Textfield },
  head () {
    return {
      title: 'Projects',
      meta: [
        { hid: 'description', name: 'description', content: 'A list of some of my featured projects and projects I have been involved in at an organisation.' },
        { hid: 'og:description', name: 'og:description', content: 'A list of some of my featured projects and projects I have been involved in at an organisation.' }
      ]
    };
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss">
:root {
  --more-projects-shadow-color: var(--color-grey-light);
  --more-projects-icon-shadow-color: var(--color-black);
}

.theme--light {
  --more-projects-shadow-color: var(--color-grey);
  --more-projects-icon-shadow-color: var(--color-grey-light);
}
</style>

<style lang="scss" scoped>
@import '@/assets/styles/shared/box';

.more-projects {
  display: grid;
  gap: 1rem;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  list-style-type: none;
  padding-left: 0;

  @media (min-width: 30em) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
