<template>
  <ul class="projects">
    <li v-for="(project, index) in props.list" :key="project.sys.id">
      <nuxt-link :to="project.fields.url" class="project" target="_blank">
        <nuxt-picture class="project__img" provider="contentful" :src="project.fields.image.fields.file.url" :alt="project.fields.image.fields.description" width="424" height="223" sizes="4kdesktop:424px" loading="lazy" :preload="index <= props.preloadProjectImages" />
        <div class="project__details">
          <ul class="project__tags">
            <li v-for="tech in project.fields.tech" :key="tech" class="tag">
              {{ tech }}
            </li>
          </ul>
          <h2 class="project__title">{{ project.fields.name }} <small v-if="project.fields.tags?.includes('Website') && !project.fields.url.includes('github.com')">({{ project.fields.url === '/' ? 'jackdomleo.dev' : project.fields.url.replace('https://', '') }})</small></h2>
          <div class="project__description" v-html="parseRichText(project.fields.description)" />
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue';
import { type Entry } from 'contentful'
import type { Project } from '@/types/CMS/Entries/Project'
import { parseRichText } from '@/utilities/parseRichText'

const props = defineProps({
  list: {
    type: Array as PropType<Entry<Project>[]>,
    required: true
  },
  preloadProjectImages: {
    type: Number,
    default: 0
  }
})
</script>

<style lang="scss" scoped>
.projects {
  list-style-type: none;
  padding: 1rem;
  margin-block: 0;
  display: flex;
  align-items: stretch;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 3rem;

  > li {
    width: 26.5rem;
    max-width: 100%;
  }
}

.project {
  display: block;
  overflow: hidden;
  background-color: var(--color-bg);
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: var(--color-fg1);
  }

  &__details {
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__title {
    font-size: var(--text-heading);
    margin: 0;

    small {
      font-size: var(--text-body);
    }
  }

  &__description {
    flex: 1;
    font-size: var(--text-body);
    margin: 0;
  }

  &__tags {
    font-size: var(--text-body);
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
}

.tag {
  color: var(--color-accent);
}
</style>
