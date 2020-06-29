<template>
  <section id="top-projects">
    <h2>Top projects</h2>
    <p>
      Some of my top projects and CodePens! You can also see <strong>all</strong> of my projects <nuxt-link to="/projects">
        here
      </nuxt-link>.
    </p>
    <div class="top-projects">
      <figure class="project">
        <img src="/img/projects/top/nopreviewhtmlcss.png" alt="A screengrab of jackdomleo.dev homepage">
        <div class="project__content">
          <h3>#NoPreviewHtmlCss</h3>
          <p>A new developer challenge I created where participants have to create something in HTML and CSS but they can't see the preview until they are finished.</p>
          <btn href="https://twitter.com/jackdomleo7/status/1270039382528065538">
            View website
          </btn>
        </div>
      </figure>
      <figure class="project">
        <img src="/img/projects/top/cooltipz.png" alt="Cooltipz.css logo">
        <div class="project__content">
          <h3>Cooltipz.css</h3>
          <p>A pure CSS library to help add customisable, accessible tooltips to HTML</p>
          <btn href="https://cooltipz.jackdomleo.dev">
            View website
          </btn>
        </div>
      </figure>
      <figure class="project">
        <img src="/img/projects/top/tmdip.png" alt="Screengrab of www.tmdip.co.uk home page">
        <div class="project__content">
          <h3>www.tmdip.co.uk</h3>
          <p>A fully responsive website for TMD Interior Projects &amp; Building Services Ltd</p>
          <btn href="https://www.tmdip.co.uk">
            View website
          </btn>
        </div>
      </figure>
      <figure class="project">
        <img src="/img/projects/top/ellaparsons.png" alt="A screengrab of ellaparsons.design homepage">
        <div class="project__content">
          <h3>ellaparsons.design</h3>
          <p>A fully responsive portfolio website for Ella Parsons</p>
          <btn href="https://ellaparsons.design">
            View website
          </btn>
        </div>
      </figure>
    </div>
    <div class="top-codepens">
      <p
        class="codepen"
        data-theme-id="39164"
        data-default-tab="result"
        data-user="JackDomleo"
        data-slug-hash="mdeowoz"
        data-preview="true"
        data-pen-title="Neumorphic Design Elements"
      >
        <span>See the Pen <a href="https://codepen.io/JackDomleo/pen/mdeowoz">
          Neumorphic Design Elements</a> by Jack Domleo (<a href="https://codepen.io/JackDomleo">@JackDomleo</a>)
          on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
      <p
        class="codepen"
        data-theme-id="39164"
        data-default-tab="result"
        data-user="JackDomleo"
        data-slug-hash="wvKLjVb"
        data-preview="true"
        data-pen-title="Spinning Smiley Face - GSAP"
      >
        <span>See the Pen <a href="https://codepen.io/JackDomleo/pen/wvKLjVb">
          Spinning Smiley Face - GSAP</a> by Jack Domleo (<a href="https://codepen.io/JackDomleo">@JackDomleo</a>)
          on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
      <script async src="https://static.codepen.io/assets/embed/ei.js" />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Btn } from '@/components';

@Component({
  components: { Btn }
})
export default class TopProjects extends Vue {}
</script>

<style lang="scss" scoped>
.top-projects {
  margin-bottom: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-rows: auto;
  grid-template-columns: 1fr;

  @media (min-width: 40em) {
    grid-template-columns: 1fr 1fr;
  }
}

.project {
  background: var(--body-background);
  border: 1px solid var(--color-grey);
  align-self: flex-start;
  margin: 0;
  height: 100%;

  &__content {
    margin: 1rem;

    .btn {
      margin-top: 1.5rem;
    }
  }
}

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
