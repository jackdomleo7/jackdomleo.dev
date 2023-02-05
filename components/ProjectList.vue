<template>
  <ul class="projects-list container">
    <li v-for="(project, index) in list" :key="project.sys.id">
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
import { parseRichText } from '@/utilities/parseRichText'
import { formatCMSVariables } from '@/utilities/cmsVariables';
import type { ContentfulEntries } from '@/types/CMS/Entries';
import type { Project } from '@/types/CMS/Entries/Project';

const props = defineProps({
  limit: {
    type: Number,
    default: undefined,
    validator(value: number): boolean {
      return value >= 0 && value <= 1000
    }
  },
  preloadProjectImages: {
    type: Number,
    default: 0,
    validator(value: number): boolean {
      return value >= 0
    }
  },
  type: {
    type: String as PropType<Project['type']>,
    default: undefined
  }
})

const { data: projects } = await useAsyncData((ctx) => { return ctx!.$contentful.getEntries<ContentfulEntries.Project>({ content_type: 'project', limit: 1000, order: '-sys.createdAt' })})
projects.value!.items = formatCMSVariables(projects.value!.items)

let list = projects.value!.items
if (props.type) {
  list = list.filter(project => project.fields.type === props.type)
}
else if (props.limit) {
  list = list.slice(0, props.limit)
}
</script>

<style lang="scss" scoped>
.projects-list {
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
  border-radius: var(--border-radius-standard);
  box-shadow: var(--shadow);
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
