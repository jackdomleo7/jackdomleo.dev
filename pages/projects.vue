<template>
  <div class="projects">
    <header class="container">
      <h1 class="projects__title">Projects</h1>
      <div v-if="projects.fields.description" class="projects__description" v-html="parseRichText(projects.fields.description)" />
    </header>
    <div class="container">
      <ProjectList class="projects__list" :list="standardProjects" :preload-project-images="3" />
    </div>
    <section id="mini" class="container">
      <h2 class="projects__subtitle">Mini Projects</h2>
      <ProjectList class="projects__list" :list="miniProjects" />
    </section>
    <section id="mini" class="container">
      <h2 class="projects__subtitle">Client Projects</h2>
      <ProjectList class="projects__list" :list="clientProjects" />
    </section>
  </div>
</template>

<script lang="ts" setup>
import ProjectList from '@/components/ProjectList.vue';
import { parseRichText } from '@/utilities/parseRichText'
import type { ContentfulEntries } from '@/types/CMS/Entries';

const projectsEntries = await useAsyncData((ctx) => { return ctx!.$contentful.getEntries<ContentfulEntries.Projects>({ content_type: 'projects', limit: 1 })})
const projects = projectsEntries.data.value!.items[0]

const standardProjects = projects.fields.projectsList.filter(project => project.fields.type === 'Project').reverse()
const miniProjects = projects.fields.projectsList.filter(project => project.fields.type === 'Mini').reverse()
const clientProjects = projects.fields.projectsList.filter(project => project.fields.type === 'Client').reverse()

useHead({
  title: 'Projects',
  meta: [
    { name: 'twitter:title', content: 'Projects | Jack Domleo' },
  ]
})
</script>

<style lang="scss" scoped>
.projects {
  padding: 1rem;

  @media (min-width: $responsive-standard-tablet) {
    margin-top: 2rem;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: var(--text-title);
  
    @media (min-width: $responsive-standard-tablet) {
      margin-bottom: 2rem;
    }
  }

  &__subtitle {
    font-size: var(--text-subtitle);
  }

  &__description {
    font-size: var(--text-body);
  }

  &__list {
    margin-top: 3rem;
  }

  section {
    margin-top: 4rem;
  }
}
</style>