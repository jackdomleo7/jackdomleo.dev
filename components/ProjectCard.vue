<template>
  <component :is="project.url.url ? 'a' : 'div'" :href="project.url.url" :target="project.url.url && '_blank'" class="project-card">
    <nuxt-img provider="prismic" :src="project.thumbnail.url" :alt="project.thumbnail.alt" :width="project.thumbnail.dimensions.width" :height="project.thumbnail.dimensions.height" loading="lazy" class="project-card__img" />
    <div class="project-card__info">
      <h3 class="project-card__heading">
        {{ project.name }}
        <small v-if="project.project_type === 'website' && project.url.url">({{ project.url.url.replace('https://', '') }})</small>
      </h3>
      <ul v-if="project.tech_1 || project.tech_2 || project.tech_3 || project.tech_4" class="project-card__tags">
        <li v-if="project.tech_1" class="tag">{{ project.tech_1 }}</li>
        <li v-if="project.tech_2" class="tag">{{ project.tech_2 }}</li>
        <li v-if="project.tech_3" class="tag">{{ project.tech_3 }}</li>
        <li v-if="project.tech_4" class="tag">{{ project.tech_4 }}</li>
      </ul>
      <prismic-rich-text :field="project.short_description" class="project-card__description" />
    </div>
  </component>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IProject } from '@/types/cms/IPageProjects'

export default Vue.extend({
  name: 'ProjectCard',
  props: {
    project: {
      type: Object as PropType<IProject>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.project-card {
  display: inline-flex;
  flex-direction: column;
  background-color: var(--colour-foreground-1);
  box-shadow: var(--shadow-standard);
  border-radius: 1.25rem;
  padding: 0.5rem;
  text-decoration: none;
  height: 100%;
  max-width: 31.25rem;

  &__img {
    border-radius: 0.75rem;
    width: 100%;
  }

  &__info {
    padding: 0.5rem;
  }

  &__heading {
    text-transform: uppercase;
    color: var(--colour-text-primary);
    letter-spacing: 0.02rem;
    font-size: var(--text-large);
    font-weight: 400;
    margin-top: 0.25rem;
    margin-bottom: 0.75rem;

    small {
      text-transform: lowercase;
      font-size: var(--text-small);
    }
  }

  &__tags {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }

  &__description {
    margin-top: 1rem;
    font-size: var(--text-small);
    color: var(--colour-text-secondary);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    ::v-deep p {
      margin: 0;
    }
  }
}
</style>
