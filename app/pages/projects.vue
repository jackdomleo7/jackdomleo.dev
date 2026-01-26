<template>
  <div class="projects">
    <header class="container">
      <h1 class="projects__title">Projects</h1>
      <p v-once class="projects__description">
        A curated archive of production applications, technical experiments, and automated tools. Source available on <nuxt-link :to="variables.GITHUB_URL">GitHub</nuxt-link> and <nuxt-link :to="variables.CODEPEN_URL">CodePen</nuxt-link>.
      </p>
    </header>
    <div class="container">
      <ProjectList class="projects__list" :preload-project-images="3" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProjectList from '@/components/ProjectList.server.vue';
import variables from '@/utilities/variables';

const config = useRuntimeConfig()

useSeoMeta({
  title: 'Projects'
})

useHead({
  link: [
    { rel: 'canonical', href: `${config.public.BASE_URL}/projects` }
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