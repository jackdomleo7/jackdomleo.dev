<template>
  <section id="top-projects">
    <h2>Top projects</h2>
    <p>
      Some of my top projects and CodePens! You can also see <strong>all</strong> of my projects <nuxt-link to="/projects">
        here
      </nuxt-link>.
    </p>
    <div class="projects">
      <project-card header="#NoPreviewHtmlCss" description="A new developer challenge I created where participants have to create something in HTML and CSS but they can't see the preview until they are finished." url="https://twitter.com/jackdomleo7/status/1270039382528065538" image="/img/projects/nopreviewhtmlcss.png" image-alt="#NoPreviewHtmlCss logo" />
      <project-card header="Cooltipz.css" description="A pure CSS library to help add customisable, accessible tooltips to HTML, available on npm, yarn and CDN." url="https://cooltipz.jackdomleo.dev" image="/img/projects/cooltipz.png" image-alt="Cooltipz.css logo" />
      <project-card header="www.tmdip.co.uk" description="A fully responsive website for TMD Interior Projects &amp; Building Services Ltd." url="https://www.tmdip.co.uk" image="/img/projects/tmdip.png" image-alt="A screengrab on www.tmdip.co.uk home page" />
      <project-card header="ellaparsons.design" description="A fully responsive portfolio website for Ella Parsons." url="https://ellaparsons.design" image="/img/projects/ellaparsons.png" image-alt="A screengrab on ellaparsons.design home page" />
    </div>
    <div class="top-codepens">
      <codepen slug-hash="mdeowoz" pen-title="Neumorphic Design Elements" click-to-load />
      <codepen slug-hash="wvKLjVb" pen-title="Spinning Smiley Face - GSAP" click-to-load />
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
