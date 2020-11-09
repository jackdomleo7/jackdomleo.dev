<template>
  <section id="top-projects">
    <h2>Top projects</h2>
    <p>
      Some of my top projects and CodePens! You can also see <strong>all</strong> of my projects <nuxt-link to="/projects">
        here
      </nuxt-link>.
    </p>
    <div class="projects">
      <project-card header="Checka11y.css" description="A CSS stylesheet to quickly highlight a11y concerns." url="https://github.com/jackdomleo7/Checka11y.css" image="/img/projects/checka11y.png" image-alt="Checka11y.css logo" />
      <project-card header="Cooltipz.css" description="A pure CSS library to help add customisable, accessible tooltips to HTML, available on npm, yarn and CDN." url="https://cooltipz.jackdomleo.dev" image="/img/projects/cooltipz.png" image-alt="Cooltipz.css logo" />
      <project-card header="www.tmdip.co.uk" description="A fully responsive website for TMD Interior Projects &amp; Building Services Ltd." url="https://www.tmdip.co.uk" image="/img/projects/tmdip.png" image-alt="A screengrab on www.tmdip.co.uk home page" />
      <project-card header="ellaparsons.design" description="A fully responsive portfolio website for Ella Parsons." url="https://ellaparsons.design" image="/img/projects/ellaparsons.png" image-alt="A screengrab on ellaparsons.design home page" />
    </div>
    <div class="top-codepens">
      <codepen slug-hash="mdeowoz" pen-title="Neumorphic Design Elements" />
      <codepen slug-hash="wvKLjVb" pen-title="Spinning Smiley Face - GSAP" />
      <script async src="https://static.codepen.io/assets/embed/ei.js" />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Btn, Codepen, ProjectCard } from '@/components';

@Component({
  components: { Btn, Codepen, ProjectCard }
})
export default class TopProjects extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/shared/projects.scss";

.top-codepens {
  display: grid;
  gap: 2rem;
  grid-template-rows: auto;
  grid-template-columns: 1fr;

  @media (min-width: 40em) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
