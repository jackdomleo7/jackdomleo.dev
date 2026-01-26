<template>
  <div>
    <header class="hero">
      <div class="container container--thinner">
        <div class="hero__row">
          <picture class="hero__img">
            <source srcset="/me.webp" type="image/webp">
            <img src="/me.webp" alt="Jack Domleo portrait" height="300" width="300" loading="eager" fetchpriority="high" />
          </picture>
          <h1 class="hero__title">Jack Domleo</h1>
        </div>
        <p class="hero__body">{{ variables.OCCUPATION }}</p>
      </div>
    </header>
    <section id="about" class="container about">
      <div class="about__inner">
        <div class="about__img">
          <picture>
            <source srcset="/me.webp" type="image/webp">
            <img src="/me.webp" alt="Jack Domleo portrait" height="440" width="440" loading="lazy" fetchpriority="low" />
          </picture>
        </div>
        <h2 class="about__header">About me</h2>
        <div class="about__text">
          <p>
            Hi, I'm Jack. I'm a {{ variables.OCCUPATION }} at <nuxt-link to="https://www.oceanfinance.co.uk?ref=jackdomleo.dev">Ocean Finance</nuxt-link> with {{ variables.NO_OF_YEARS_EXPERIENCE }} years of professional experience.
          </p>
          <p>
            Rather than just building applications, I focus on engineering accessible customer journeys and technical solutions across our financial product range. I have established a standard for high-quality, readable code and a bit of a reputation for my love of refactoring - I'm a firm believer that high-quality, readable code is a gift to the next developer who has to touch it (whether that developer is me or someone else).
          </p>
          <p>
            My work is centered on the Vue.js ecosystem, with a heavy emphasis on performance optimization, technical SEO, web accessibility (WCAG), and maintaining robust component libraries. Outside of work you'll likely find me building LEGO, tinkering with electronics/hardware/software, or following the latest in Formula 1, musical theatre, and theme parks.
          </p>
        </div>
      </div>
    </section>
    <section id="skills" class="skills">
      <div class="skills__inner">
        <h2 class="skills__heading container">Skills</h2>
        <div v-once v-for="(category, categoryName) in skills" :key="categoryName" class="skills__section container">
          <h3 class="skills__heading skills__heading--sub container">{{ categoryName }}</h3>
          <ul class="skills__list container">
            <li v-for="skill in category" :key="skill.key">
              <Icon class="skills__icon" :name="`custom:${skill.key}`" mode="svg" />
              <span class="skills__text" mode="svg">{{ skill.value }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section id="projects" class="container projects">
      <h2 class="projects__heading">Projects</h2>
      <p class="projects__description container">A collection of personal experiments, projects, AI-assisted prototypes, and more.</p>
      <ProjectList class="projects__list" :limit="6" />
      <nuxt-link to="/projects" class="projects__more link">
        Explore more projects
        <Icon v-once class="projects__more-icon" name="custom:arrow-right" mode="svg" />
      </nuxt-link>
    </section>
  </div>
</template>

<script lang="ts" setup>
import ProjectList from '@/components/ProjectList.server.vue'
import variables from '@/utilities/variables';

const config = useRuntimeConfig()

useHead({
  link: [
    { rel: 'canonical', href: `${config.public.BASE_URL}` }
  ]
})

useSchemaOrg([
  defineWebSite({
    name: 'Jack Domleo',
    url: config.public.BASE_URL,
    description: `Personal website of Jack Domleo, ${variables.OCCUPATION}`,
    inLanguage: 'en-GB'
  })
])

const skills: { [key: string]: { key: string; value: string }[] } = {
  'Core Engineering': [
    { key: 'html', value: 'HTML' },
    { key: 'css', value: 'CSS' },
    { key: 'javascript', value: 'JavaScript' },
    { key: 'typescript', value: 'TypeScript' },
    { key: 'vue', value: 'Vue.js' },
    { key: 'nuxt', value: 'Nuxt.js' },
    { key: 'vite', value: 'Vite' },
    { key: 'sass', value: 'SCSS' },
    { key: 'pinia', value: 'Pinia' },
  ],
  'Quality & Workflow': [
    { key: 'vitest', value: 'Vitest' },
    { key: 'playwright', value: 'PlayWright' },
    { key: 'storybook', value: 'Storybook' },
    { key: 'node-js', value: 'Node.js' },
    { key: 'git', value: 'Git' },
    { key: 'a11y', value: 'Accessibility' },
    { key: 'performance', value: 'Web Performance' },
    { key: 'seo', value: 'Technical SEO' },
    { key: 'ai', value: 'AI-Assisted Workflows' }
  ],
  'Leadership': [
    { key: 'users', value: 'Mentoring' },
    { key: 'screwdriver-wrench', value: 'Strategic Refactoring' },
    { key: 'balanced-scale', value: 'Technical Decision Making' }
  ],
  'Tinkering': [
    { key: 'raspberry-pi', value: 'Raspberry Pi' },
    { key: 'python', value: 'Python' }
  ]
};
</script>

<style lang="scss" scoped>
@keyframes jumpy-arrow {
  30% {
    transform: translateX(0.3rem);
  }
  0%, 100% {
    transform: translateX(0);
  }
}

.hero {
  min-height: calc(100vh - 9rem);
  display: grid;
  place-items: center;
  padding: 1rem;

  @media (min-width: $responsive-standard-tablet) {
    min-height: calc(100vh - 4rem);
  }

  @media (min-height: 646px) {
    padding-bottom: 8rem;
  }

  &__row {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media (min-width: $responsive-standard-tablet) {
      flex-direction: row;
    }
  }

  &__img {
    @media (min-width: $responsive-standard-tablet) {
      min-width: 300px;
    }

    :deep(img) {
      border-radius: 3rem;
      height: 200px;
      width: 200px;

      @media (min-width: $responsive-standard-tablet) {
        height: 300px;
        width: 300px;
      }
    }
  }

  &__title {
    margin: 0;
    text-transform: uppercase;
    font-size: var(--text-title);
    text-align: center;

    @media (min-width: $responsive-standard-tablet) {
      font-size: 5rem;
      text-align: left;
    }

    :deep(br) {
      display: none;

      @media (min-width: $responsive-standard-tablet) {
        display: block;
      }
    }
  }

  &__body {
    font-size: var(--text-heading);
    margin-top: 2rem;
    text-align: center;
  }
}

.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem 1rem;

  @media (min-width: $responsive-large-tablet) {
    padding-block: 1rem;
  }

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
    position: relative;
    justify-self: center;
    margin-bottom: 3rem;
    border-radius: 50%;
    width: 9rem;
    aspect-ratio: auto 1 / 1;

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
      background-color: var(--color-bg);
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
      background-color: var(--color-accent-faint);
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

    p:last-of-type {
      margin-bottom: 0;
    }
  }
}

.projects {
  display: flex;
  flex-direction: column;
  padding-top: 4rem;

  &__heading {
    font-size: var(--text-title);
    margin-block: 0;
    padding-inline: 1rem;
  }

  &__description {
    font-size: var(--text-body);
    margin-top: 1rem;
    padding-inline: 1rem;
    width: 100%;
  }

  &__list {
    margin-block: 1.25rem;
    padding-inline: 1rem;
    margin-inline: 0;
  }

  &__more {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: auto;
    margin-right: 1rem;
    font-size: var(--text-large);

    @media (prefers-reduced-motion: no-preference) {
      &:hover,
      &:focus {
        .projects__more-icon {
          animation: jumpy-arrow 0.8s forwards infinite;
        }
      }
    }

    &-icon {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
}

.skills {
  padding-block: 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;

  &__inner {
    width: 100%;
  }

  &__heading {
    font-size: var(--text-title);
    margin-block: 0;
    padding-inline: 1rem;

    &--sub {
      font-size: var(--text-large);
      line-height: var(--text-large);
      margin-top: 2.25rem;
      margin-bottom: 1rem;
      margin-left: 0;
      position: relative;

      &::after {
        content: ':';
      }
    }
  }

  &__section {
    display: flex;
    flex-direction: column;
    align-items: baseline;

    @media (min-width: $responsive-large-tablet) {
      flex-direction: row;
    }
  }

  &__list {
    padding-inline: 1rem;
    margin-block: 0;
    width: 100%;
    list-style-type: none;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0.75rem 1.75rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      white-space: nowrap;
      line-height: var(--text-large);
    }
  }

  &__icon {
    height: 1rem;
    width: 1rem;
    display: block;

    @media (min-width: $responsive-large-tablet) {
      height: 1.125rem;
      width: 1.125rem;
    }
  }

  &__text {
    text-align: center;
    font-size: var(--text-body);
    font-weight: 300;
  }
}
</style>