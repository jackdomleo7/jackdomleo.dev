<template>
  <section id="toolbox" class="toolbox">
    <h2>My toolbox of skills</h2>
    <p>A set of tools and technologies I am comfortable with and competent in:</p>
    <ul class="toolbox__list">
      <li v-for="(tool, index) in toolbox" :key="tool.name" :aria-setsize="toolbox.length" :aria-posinset="index + 1">
        <svg-icon :name="tool.icon" />
        <p>{{ tool.name }}</p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

interface ITool {
  name: string;
  icon: string;
}

@Component
export default class Toolbox extends Vue {
  private readonly toolbox: ITool[] = [
    {
      name: 'HTML5',
      icon: 'html'
    },
    {
      name: 'CSS',
      icon: 'css'
    },
    {
      name: 'JavaScript',
      icon: 'js'
    },
    {
      name: 'jQuery',
      icon: 'jquery'
    },
    {
      name: 'Vue.js',
      icon: 'vuejs'
    },
    {
      name: 'Nuxt.js',
      icon: 'nuxt'
    },
    {
      name: 'Sass/SCSS',
      icon: 'sass'
    },
    {
      name: 'Responsive Design',
      icon: 'rwd'
    },
    {
      name: 'TypeScript',
      icon: 'typescript'
    },
    {
      name: 'Git',
      icon: 'git'
    }
  ];
}
</script>

<style lang="scss" scoped>
.toolbox {
  &__list {
    padding-left: 0;
    list-style-type: none;
    margin: 1.5rem 0;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;

    @media (min-width: 26.25em) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 33.75em) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (min-width: 43.75em) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    li {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 1rem 0;
      text-align: center;

      svg {
        height: 4rem;
        width: 4rem;
      }
    }
  }
}
</style>
