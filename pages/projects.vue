<template>
  <div>
    <header class="container container--header header">
      <h1 class="header__title">Projects</h1>
      <prismic-rich-text class="header__intro" :field="projects.data.projects_intro" />
    </header>
    <section id="standard" class="container standard">
      <ul class="standard__list">
        <li v-for="project in standardProjects" :key="project.name">
          <project-card :project="project" heading-level="h2" />
        </li>
      </ul>
    </section>
    <section id="mini" class="container mini">
      <h2 class="mini__heading">Mini projects</h2>
      <prismic-rich-text class="mini__intro" :field="projects.data.mini_intro" />
      <ul class="mini__list">
        <li v-for="project in miniProjects" :key="project.name">
          <project-card :project="project" heading-level="h3" />
        </li>
      </ul>
    </section>
    <section id="websites" class="container websites">
      <h2 class="websites__heading">Websites</h2>
      <prismic-rich-text class="websites__intro" :field="projects.data.websites_intro" />
      <ul class="websites__list">
        <li v-for="project in websiteProjects" :key="project.name" class="website">
          <div class="website__info">
            <h3 class="website__name">{{ project.name }}</h3>
            <a :href="project.url.url" target="_blank" class="website__url">{{ project.url.url.replace('https://', '') }}</a>
            <ul v-if="project.tech_1 || project.tech_2 || project.tech_3 || project.tech_4" class="website__tags">
              <li v-if="project.tech_1" class="tag">{{ project.tech_1 }}</li>
              <li v-if="project.tech_2" class="tag">{{ project.tech_2 }}</li>
              <li v-if="project.tech_3" class="tag">{{ project.tech_3 }}</li>
              <li v-if="project.tech_4" class="tag">{{ project.tech_4 }}</li>
            </ul>
            <prismic-rich-text class="website__description" :field="project.long_description" />
          </div>
          <nuxt-img class="website__mockup" provider="prismic" :src="project.mockup.url" :alt="project.mockup.alt" :height="project.mockup.dimensions.height" :width="project.mockup.dimensions.width" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Btn from '@/components/Btn.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { IPage, IPageProjects } from '@/types/cms'

export default Vue.extend({
  name: 'Projects',
  components: { Btn, ProjectCard },
  head () {
    return {
      title: 'Projects'
    }
  },
  async asyncData ({ $prismic, error }) {
    const projects: IPage<IPageProjects> = await $prismic.api.getSingle('projects')

    if (projects) {
      projects.data.projects = projects.data.projects.reverse() // In the CMS, newer projects are added to the end of the list, so we want to show the newer projects first
      const standardProjects = projects.data.projects.filter(project => {
        return project.project_type === 'standard'
      })
      const miniProjects = projects.data.projects.filter(project => {
        return project.project_type === 'mini'
      })
      const websiteProjects = projects.data.projects.filter(project => {
        return project.project_type === 'website'
      })

      return { projects, standardProjects, miniProjects, websiteProjects }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  &__title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: var(--text-title);

    @media (min-width: $responsive-standard-tablet) {
      margin-bottom: 2rem;
    }
  }

  &__intro {
    font-size: var(--text-body);
  }
}

.standard {
  margin-top: 0rem;

  @media (min-width: $responsive-standard-tablet) {
    margin-top: 3.25rem;
  }

  &__list {
    list-style-type: none;
    padding-left: 0;
    margin-block: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    justify-items: center;

    @media (min-width: $responsive-small-tablet) {
      gap: 3rem 2rem;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $responsive-large-tablet) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

.mini {
  margin-block: 4rem;

  @media (min-width: $responsive-standard-tablet) {
    margin-block: 8rem;
  }

  &__heading {
    font-size: var(--text-subtitle);
    margin: 0;
  }

  &__intro {
    font-size: var(--text-body);
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  &__list {
    list-style-type: none;
    padding-left: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    justify-items: center;

    @media (min-width: $responsive-small-tablet) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $responsive-large-tablet) {
      gap: 3rem 2rem;
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: $responsive-small-desktop) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

.websites {
  &__heading {
    font-size: var(--text-subtitle);
    margin: 0;
  }

  &__intro {
    font-size: var(--text-body);
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  &__list {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .website {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 'info' 'mockup';
    gap: 1rem;
    align-items: center;

    @media (min-width: $responsive-standard-tablet) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: 'info mockup';
      gap: 2rem;
    }

    &:nth-child(even) {
      @media (min-width: $responsive-standard-tablet) {
        grid-template-areas: 'mockup info';
      }
    }

    &__info {
      grid-area: info;
    }

    &__name {
      font-size: var(--text-heading);
      font-weight: 600;
      margin: 0;
    }

    &__url {
      display: inline-block;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }

    &__tags {
      list-style-type: none;
      padding-left: 0;
      margin: 0;
    }

    &__mockup {
      grid-area: mockup;
    }
  }
}
</style>
