<template>
  <page-template page-title="Projects">
    <p>This page only lists <em>some</em> of my projects. You can:</p>
    <ul class="more-projects">
      <li aria-setsize="2" aria-posinset="1">
        <a href="https://github.com/JDomleo" rel="nofollow noopener" target="_blank">
          <svg-icon name="github" />
          <span>View more projects on GitHub</span>
        </a>
      </li>
      <li aria-setsize="2" aria-posinset="2">
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
        { hid: 'description', name: 'description', content: 'A list of some of Jack Domleo\'s featured projects, future projects and open-source contributions.' },
        { hid: 'og:description', name: 'og:description', content: 'A list of some of Jack Domleo\'s featured projects, future projects and open-source contributions.' }
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

  li {
    border: 1px solid var(--color-grey);
    border-radius: 0.75rem;
    overflow: hidden;

    &:last-of-type {
      a {
        flex-direction: row-reverse;

        svg {
          margin-right: 0;
          margin-left: 1rem;
        }
      }
    }

    &:hover, &:focus {
      box-shadow: 0 0 10px -2px var(--more-projects-shadow-color);

      svg {
        filter: drop-shadow(2px 2px 1px var(--more-projects-icon-shadow-color));
      }
    }

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 1.5rem 1rem;
      color: inherit;
      text-decoration: none;
      transition: all 160ms ease;
      width: 100%;

      svg {
        height: 3rem;
        width: 3rem;
        margin-right: 1rem;
        transition: all 160ms ease;
      }
    }
  }
}
</style>
