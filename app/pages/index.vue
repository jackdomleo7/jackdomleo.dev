<template>
  <div>
    <header class="hero">
      <div class="container container--thinner">
        <div class="hero__row">
          <picture class="hero__img">
            <source srcset="/me.webp" type="image/webp">
            <img src="/me.webp" alt="Jack Domleo portrait" height="300" width="300" loading="eager" />
          </picture>
          <h1 class="hero__title">Jack Domleo</h1>
        </div>
        <p class="hero__body">Frontend & UX Developer</p>
      </div>
    </header>
    <section id="about" class="container about">
      <div class="about__inner">
        <div class="about__img">
          <picture>
            <source srcset="/me.webp" type="image/webp">
            <img src="/me.webp" alt="Jack Domleo portrait" height="440" width="440" loading="lazy" />
          </picture>
        </div>
        <h2 class="about__header">About me</h2>
        <div class="about__text">
          <p>
            Hi, I'm Jack Domleo, a Nottinghamshire-based developer in the UK, currently working as a Senior Frontend Developer at <nuxt-link to="https://www.oceanfinance.co.uk">Ocean Finance</nuxt-link>.
          </p>
          <p>
            I have {{ variables.NO_OF_YEARS_EXPERIENCE }} years of professional experience working as a developer. I often work with Vue.js, TypeScript, Vite, Vitest, SCSS, Storybook, and PlayWright.
          </p>
          <p>
            I have a passion for frontend technologies, and writing clean websites and applications while maintaining high accessibility standards.
          </p>
        </div>
      </div>
    </section>
    <section id="skills" class="skills">
      <div class="skills__inner">
        <h2 class="skills__heading container">Skills</h2>
        <div class="skills__grid">
          <ul class="skills__list">
            <li v-for="skill in skills" :key="skill.key">
              <Icon class="skills__icon" :name="`custom:${skill.key}`" mode="svg" />
              <span class="skills__text" mode="svg">{{ skill.value }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section id="projects" class="container projects">
      <h2 class="projects__heading">Projects</h2>
      <ProjectList class="projects__list" :limit="6" />
      <nuxt-link to="/projects" class="projects__more link">
        Check out more of my work
        <Icon class="projects__more-icon" name="custom:arrow-right" mode="svg" />
      </nuxt-link>
    </section>
  </div>
</template>

<script lang="ts" setup>
import ProjectList from '@/components/ProjectList.vue'
import variables from '@/utilities/variables';

const skills: { key: string; value: string }[] = [
  { key: 'vue', value: 'Vue.js' },
  { key: 'nuxt', value: 'Nuxt.js' },
  { key: 'typescript', value: 'TypeScript' },
  { key: 'jest', value: 'Jest' },
  { key: 'storybook', value: 'Storybook' },
  { key: 'sass', value: 'Sass/SCSS' },
  { key: 'a11y', value: 'Accessibility' },
  { key: 'node-js', value: 'Node.js' },
  { key: 'npm', value: 'npm' },
  { key: 'vs-code', value: 'VS Code' },
  { key: 'javascript', value: 'JavaScript' },
  { key: 'html', value: 'HTML' }
];
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
    font-size: var(--text-large);
    margin-top: 2rem;
    text-align: center;
  }
}

.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 1rem;

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

    :deep(img) {
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
  display: flex;
  flex-direction: column;

  &__heading {
    font-size: var(--text-title);
    margin-block: 0;
    padding-inline: 1rem;
  }

  &__list {
    margin-block: 1.25rem;
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
  }

  &__grid {
    padding-block: 2rem;
    display: flex;
    justify-content: center;

    @media (min-width: $responsive-small-desktop) {
      padding-block: 5rem;
    }
  }

  &__list {
    margin: 0;
    padding-inline: 0.5rem;
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
      padding-inline: 0;
    }

    @media (min-width: $responsive-small-desktop) {
      gap: 4rem 7.5rem;
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }
  }

  &__icon {
    height: 3.75rem;
    width: 3.75rem;
    display: block;

    @media (min-width: $responsive-large-tablet) {
      height: 5rem;
      width: 5rem;
    }

    @media (min-width: $responsive-small-desktop) {
      height: 6.25rem;
      width: 6.25rem;
    }
  }

  &__text {
    text-align: center;
    font-size: var(--text-body);
  }
}
</style>