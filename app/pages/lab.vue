<template>
  <div class="lab">
    <header class="container">
      <h1 class="lab__title">Lab</h1>
      <p v-once class="lab__description">
        I enjoy creating different types of projects in my spare time using a range of technologies. You can find all of my featured projects here, and many more projects on <nuxt-link :to="variables.GITHUB_URL">GitHub</nuxt-link> and <nuxt-link :to="variables.CODEPEN_URL">CodePen</nuxt-link>.
      </p>
    </header>
    <div class="container">
      <ProjectList class="lab__list" type="project" :preload-project-images="3" />
    </div>
    <section id="mini" class="container">
      <h2 class="lab__subtitle">Mini Projects</h2>
      <ProjectList class="lab__list" type="mini" />
    </section>
    <section id="client" class="container">
      <h2 class="lab__subtitle">Client Projects</h2>
      <ProjectList class="lab__list" type="client" />
    </section>
  </div>
</template>

<script lang="ts" setup>
import ProjectList from '@/components/ProjectList.server.vue';
import variables from '@/utilities/variables';

const config = useRuntimeConfig()

useSeoMeta({
  title: 'Lab'
})

useHead({
  link: [
    { rel: 'canonical', href: `${config.public.BASE_URL}/lab` }
  ]
})
</script>

<style lang="scss" scoped>
.lab {
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