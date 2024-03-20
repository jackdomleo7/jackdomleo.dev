<template>
  <div class="projects">
    <header class="container">
      <h1 class="projects__title">Projects</h1>
      <div v-if="projects.fields.description" class="projects__description" v-html="parseRichText(projects.fields.description)" />
    </header>
    <div class="container">
      <ProjectList class="projects__list" type="Project" :preload-project-images="3" />
    </div>
    <section id="mini" class="container">
      <h2 class="projects__subtitle">Mini Projects</h2>
      <ProjectList class="projects__list" type="Mini" />
    </section>
    <section id="mini" class="container">
      <h2 class="projects__subtitle">Client Projects</h2>
      <ProjectList class="projects__list" type="Client" />
    </section>
  </div>
</template>

<script lang="ts" setup>
import ProjectList from '@/components/ProjectList.vue';
import { parseRichText } from '@/utilities/parseRichText'
import { formatCMSVariables } from '@/utilities/cmsVariables';
import type { ContentfulEntries } from '@/types/CMS/Entries';

const projectsEntries = await useAsyncData((ctx) => { return ctx!.$contentful.getEntries<ContentfulEntries.Projects>({ content_type: 'projects', limit: 1 })})
const projects = formatCMSVariables(projectsEntries.data.value!.items[0])

useHead({
  title: 'Projects'
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
    margin-bottom: 0;
  }

  &__description {
    font-size: var(--text-body);
  }

  &__list {
    margin-top: 1rem;
  }

  section {
    margin-top: 5rem;
  }
}
</style>