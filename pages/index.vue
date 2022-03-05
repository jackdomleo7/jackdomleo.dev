<template>
  <div>
    <header class="container header">
      <div>
        <nuxt-img src="~assets/images/j-icon.svg" alt="" class="header__logo" />
        <h1 class="header__title">{{ home.data.page_title }}</h1>
        <prismic-rich-text class="header__intro" :field="home.data.page_intro" />
        <btn v-if="home.data.show_header_cta" :href="home.data.header_cta_link">{{ home.data.header_cta_text }}</btn>
        <a href="#about" class="header__chevron">
          <svg-icon name="chevron-down" />
          <span class="sr-only">About me</span>
        </a>
      </div>
    </header>
    <section id="about" class="container about">
      <div class="about__inner">
        <div class="about__img">
          <nuxt-img provider="prismic" :src="home.data.about_avatar.url" :alt="home.data.about_avatar.alt" height="440" width="440" loading="lazy" />
        </div>
        <h2 class="about__header">{{ home.data.about_heading }}</h2>
        <prismic-rich-text class="about__text" :field="home.data.about_text" />
      </div>
    </section>
    <section v-if="projects && projects.data.projects" id="projects" class="container projects">
      <h2 class="projects__heading">Recent work</h2>
      <ul class="projects__list">
        <li v-for="project in projects.data.projects" :key="project.name">
          <project-card :project="project" heading-level="h3" />
        </li>
      </ul>
      <nuxt-link to="/projects" class="projects__more">
        {{ home.data.more_work_link_text }}
        <svg-icon name="arrow-right" />
      </nuxt-link>
    </section>
    <section id="skills" class="skills">
      <div class="skills__inner">
        <h2 class="skills__header container">{{ home.data.skills_heading }}</h2>
        <div class="skills__grid">
          <ul class="skills__list">
            <li v-for="skill in home.data.skills" :key="skill.name">
              <nuxt-img provider="prismic" :src="skill.logo.url" :alt="skill.logo.alt" height="100" width="100" loading="lazy" />
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section id="blog" class="container blog">
      <h2 class="blog__heading">{{ home.data.blog_heading }}</h2>
      <ul class="blog__list">
        <li v-for="article in articles" :key="article.title">
          <article-card :article="article" heading-level="h3" />
        </li>
      </ul>
      <nuxt-link to="/blog" class="blog__more">
        {{ home.data.blog_read_more_link_text }}
        <svg-icon name="arrow-right" />
      </nuxt-link>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Btn from '@/components/Btn.vue'
import ArticleCard from '@/components/ArticleCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { NO_OF_YEARS_EXPERIENCE_PRISMIC_VAR, calculateYearsExperience } from '@/helpers/yearsExperience'
import { IPage, IPageHome, IPageProjects } from '@/types/cms'
import { IArticle } from '@/types'

export default Vue.extend({
  name: 'Home',
  components: { ArticleCard, Btn, ProjectCard },
  async asyncData ({ $content, $prismic, error }) {
    const home: IPage<IPageHome> = await $prismic.api.getSingle('home')
    const projects: IPage<IPageProjects> = await $prismic.api.getSingle('projects')

    if (home) {
      home.data.about_text = home.data.about_text.map(x => {
        x.text = x.text.replace(NO_OF_YEARS_EXPERIENCE_PRISMIC_VAR, calculateYearsExperience())
        return x
      })

      if (projects && projects.data) {
        projects.data.projects = projects.data.projects.reverse() // In the CMS, newer projects are added to the end of the list, so we want to show the newer projects first
        projects.data.projects = projects.data.projects.filter(project => {
          return project.project_type !== 'mini' // Don't show mini projects in the homepage
        })
        projects.data.projects = projects.data.projects.splice(0, 6) // Only show the first 6 newest projects
      }

      const articles = await $content({ deep: true }).sortBy('date', 'desc').limit(6).only(['title', 'description', 'tags', 'date', 'body', 'readingTime', 'path']).fetch() as IArticle[]

      return { home, projects, articles }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head () {
    return {
      title: 'Home'
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  padding: 2rem;
  height: calc(100vh - 4rem);
  display: grid;
  max-width: 87.5rem;

  @media (min-width: $responsive-small-desktop) {
    align-items: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 2.5rem;

    @media (min-width: $responsive-small-desktop) {
      display: block;
      padding-bottom: 0;
    }
  }

  &__logo {
    width: 5.9375rem;
    margin-inline: auto;

    @media (min-width: $responsive-small-desktop) {
      display: none;
    }
  }

  &__title {
    font-size: var(--text-title);
    margin: 0;
  }

  &__intro {
    font-size: var(--text-body);
    max-width: 50rem;

    @media (min-width: $responsive-small-desktop) {
      font-size: var(--text-heading);
      margin-top: 1rem;
      margin-bottom: 1.5rem;
    }

    ::v-deep p {
      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  &__chevron {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    height: 2rem;
    width: 2rem;
    color: var(--colour-text-primary);

    @media (min-width: $responsive-small-desktop) {
      height: 4rem;
      width: 4rem;
    }
  }
}

.about {
  min-height: 100vh;
  display: flex;
  align-items: center;

  &__inner {
    display: grid;
    grid-template-areas: 'about-img' 'about-header' 'about-text';
    grid-template-columns: 1fr;

    @media (min-width: $responsive-small-desktop) {
      grid-template-areas: 'about-header about-img' 'about-text about-img';
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__img {
    grid-area: about-img;
    border-radius: 50%;
    width: 9rem;
    aspect-ratio: auto 1 / 1;
    position: relative;
    justify-self: center;
    margin-bottom: 3rem;

    @media (min-width: $responsive-large-mobile) {
      width: 12rem;
    }

    @media (min-width: $responsive-standard-tablet) {
      width: 16rem;
    }

    @media (min-width: $responsive-small-desktop) {
      width: 27.5rem;
    }

    &::before {
      content: '';
      display: block;
      background-color: var(--colour-background);
      border-radius: 50%;
      width: 10.25rem;
      aspect-ratio: auto 1 / 1;
      position: absolute;
      z-index: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;

      @media (min-width: $responsive-large-mobile) {
        width: 13.5rem;
      }

      @media (min-width: $responsive-standard-tablet) {
        width: 18rem;
      }

      @media (min-width: $responsive-small-desktop) {
        width: 31.25rem;
      }
    }

    &::after {
      content: '';
      display: block;
      background-color: var(--colour-primary-faint);
      border-radius: 50%;
      width: 9rem;
      aspect-ratio: auto 1 / 1;
      position: absolute;
      z-index: -1;
      top: 2rem;
      left: 1.5rem;
      pointer-events: none;

      @media (min-width: $responsive-large-mobile) {
        width: 12rem;
        top: 2.5rem;
        left: 2rem;
      }

      @media (min-width: $responsive-standard-tablet) {
        width: 16rem;
        top: 3.5rem;
        left: 3rem;
      }

      @media (min-width: $responsive-small-desktop) {
        width: 27.5rem;
        top: 6.5rem;
        left: 6rem;
      }
    }

    img {
      border-radius: 50%;
      position: relative;
    }
  }

  &__header {
    grid-area: about-header;
    font-size: var(--text-title);
    margin: 0;
  }

  &__text {
    grid-area: about-text;
    font-size: var(--text-body);
  }
}

.projects {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__heading {
    font-size: var(--text-title);
    margin-block: 0;
  }

  &__list {
    margin-block: 1.25rem;
    list-style-type: none;
    padding-left: 0;
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

  &__more {
    color: var(--colour-primary);
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: auto;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
}

.skills {
  padding-block: 2rem;
  min-height: 90vh;
  display: flex;
  align-items: center;

  &__inner {
    width: 100%;
  }

  &__header {
    font-size: var(--text-title);
    margin-block: 0;
  }

  &__grid {
    background-color: #27242b;
    padding-block: 2rem;
    display: flex;
    justify-content: center;

    @media (min-width: $responsive-small-desktop) {
      padding-block: 5rem;
    }
  }

  &__list {
    margin: 0;
    padding-left: 0;
    list-style-type: none;
    max-width: 95rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    gap: 2.5rem 4.25rem;

    @media (min-width: $responsive-standard-mobile) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: $responsive-small-tablet) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: $responsive-large-tablet) {
      grid-template-columns: repeat(6, 1fr);
    }

    @media (min-width: $responsive-small-desktop) {
      gap: 4rem 7.5rem;
    }
  }

  img {
    height: 3.75rem;
    width: 3.75rem;

    @media (min-width: $responsive-large-tablet) {
      height: 5rem;
      width: 5rem;
    }

    @media (min-width: $responsive-small-desktop) {
      height: 6.25rem;
      width: 6.25rem;
    }
  }
}

.blog {
  display: flex;
  flex-direction: column;

  &__heading {
    font-size: var(--text-title);
    margin-block: 0;
  }

  &__list {
    padding-left: 0;
    list-style-type: none;
    margin-block: 1.25rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    justify-items: center;

    @media (min-width: $responsive-standard-tablet) {
      gap: 3rem 2rem;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $responsive-small-desktop) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__more {
    color: var(--colour-primary);
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: auto;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
}
</style>
