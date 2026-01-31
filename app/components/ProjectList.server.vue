<template>
  <div class="container">
    <ul v-once class="project-feed">
      <li 
        v-for="(project, index) in list" 
        :key="project.name" 
        :class="['project-item', { 'is-offline': project.isUrlDeactivated }]"
      >
        <div class="project-row">
          <div class="project-row__content">
            <ul class="project-row__meta">
              <li v-for="tech in project.tech" :key="tech" class="tech-tag">
                {{ tech }}
              </li>
            </ul>

            <div class="project-row__header">
              <component 
                :is="project.isUrlDeactivated ? 'span' : defineNuxtLink({})" 
                :to="project.isUrlDeactivated ? undefined : project.url"
                :target="!project.isUrlDeactivated && project.url.startsWith('http') ? '_blank' : undefined"
                class="project-row__link"
              >
                <h3 class="project-row__title">{{ project.name }}</h3>
              </component>
              <span v-if="project.isUrlDeactivated" class="offline-tag">Offline</span>
            </div>
            
            <p class="project-row__description">{{ project.description }}</p>
          </div>

          <div v-if="project.image" class="lightbox">
            <input :id="`zoom-${index}`" type="checkbox" class="lightbox__toggle" />
            <label :for="`zoom-${index}`" class="lightbox__trigger">
              <img 
                :src="project.image" 
                alt="" 
                class="thumb"
                :loading="index <= props.preloadProjectImages ? 'eager' : 'lazy'"
              />
            </label>
            <label :for="`zoom-${index}`" class="lightbox__overlay">
              <img :src="project.image" alt="" class="full-view" />
            </label>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
interface Project {
  name: string;
  url: string;
  description: string;
  image?: string;
  tech: string[];
  isUrlDeactivated?: boolean;
}

const props = withDefaults(defineProps<{
  limit?: number;
  preloadProjectImages?: number;
}>(), {
  limit: undefined,
  preloadProjectImages: 0
})

const projects: Project[] = [{
  name: 'Butter CMS Utilities',
  url: 'https://jackdomleo7.github.io/Butter_CMS_Utilities/',
  description: 'An open-source utility suite addressing native limitations in Butter CMS. Features high-performance cross-page content searching and a roadmap for automated HTML sanitization to preserve design integrity. Designed for and validated by production content teams to streamline editorial workflows.',
  image: '/projects/butter-cms-utilities.webp',
  tech: ['Vue 3', 'TypeScript', 'Tooling']
},{
  name: 'Storybook Addon: CSS Properties',
  url: 'https://github.com/jackdomleo7/storybook-addon-css-properties',
  description: "An experimental exploration into Storybook's internal messaging APIs. Designed to provide real-time control over CSS custom properties within the Storybook manager. This project served as a deep dive into state synchronization between the manager and preview frames.",
  image: '/projects/storybook-addon-css-properties.webp',
  tech: ['React', 'TypeScript', 'Storybook']
},{
  name: 'Which Media Queries',
  url: 'https://which-media-queries.jackdomleo.dev',
  description: 'A diagnostic utility designed to verify browser detection of system-level accessibility preferences. It provides an at-a-glance validation of media queries such as reduced motion, high contrast, and color schemes to streamline cross-device QA testing.',
  image: '/projects/which-media-queries.webp',
  tech: ['Vue 3', 'TypeScript', 'Accessibility']
},{
  name: 'Grassverse NFT',
  url: 'https://www.grassverse.org',
  description: 'This website came with pre-existing designs and includes a CMS and an account section for Grassverse asset owners to log in to view their assets and fellow owners of assets.',
  image: '/projects/grassverse-nft.webp',
  tech: ['Nuxt 2', 'Web3', 'TypeScript'],
  isUrlDeactivated: true
},{
  name: 'npx jackdomleo7',
  url: 'https://github.com/jackdomleo7/npx_business_card',
  description: 'A simple npm script to show some details about me directly in the terminal, like a digital business card.',
  image: '/projects/npx-jackdomleo7.gif',
  tech: ['JavaScript', 'npx']
},{
  name: 'Mad Parrot Crew NFT',
  url: 'https://www.madparrotcrew.com',
  description: 'Created a fully responsive minting website based on existing designs for the Mad Parrot Crew NFT.',
  image: '/projects/mad-parrot-crew-nft.webp',
  tech: ['Nuxt 2', 'Web3', 'TypeScript'],
  isUrlDeactivated: true
},{
  name: 'Spring Clean Twitter Bot',
  url: 'https://github.com/jackdomleo7/Spring_Clean_Twitter_Bot',
  description: 'A Twitter bot to automatically clean up my Twitter account.',
  image: '/projects/spring-clean-twitter-bot.webp',
  tech: ['TypeScript', 'Twitter API', 'CRON']
},{
  name: 'Colour Theme Watcher & Switcher',
  url: 'https://codepen.io/jackdomleo7/full/OJWaeem',
  description: "A pure JavaScript snippet to watch/detect a user's colour theme and allow them to change it.",
  image: '/projects/colour-theme-picker.gif',
  tech: ['JavaScript', 'CSS']
},{
  name: 'Checka11y.css',
  url: 'https://checka11y.jackdomleo.dev',
  description: 'A CSS stylesheet (also available as a Chrome/Firefox browser extension) to quickly highlight a11y concerns and a really good education project for those wanting to learn about accessibility.',
  image: '/projects/checka11y.css.webp',
  tech: ['SCSS', 'Cypress']
},{
  name: 'Cooltipz.css',
  url: 'https://cooltipz.jackdomleo.dev',
  description: 'A pure CSS solution for adding highly customisable, accessible tooltips to HTML.',
  image: '/projects/cooltipz.css.webp',
  tech: ['SCSS']
},{
  name: 'Custom Car Colour Preview',
  url: 'https://codepen.io/jackdomleo7/full/wvoYjNP',
  description: "An application to preview different colours of a car.",
  image: '/projects/custom-car-colour-preview.gif',
  tech: ['SVG', 'SCSS']
},{
  name: 'CSS Union Jack Flag',
  url: 'https://codepen.io/jackdomleo7/full/abvrgEo',
  description: "A pure CSS pixel-perfect Union Jack flag.",
  image: '/projects/css-union-jack-flag.webp',
  tech: ['SCSS']
},{
  name: 'TMD Interior Projects & Building Services Ltd',
  url: 'https://github.com/jackdomleo7/tmdip.co.uk',
  description: "Designed and built a fully responsive static website for a small shop-fitting & interior design company. This website needed a modern but minimal feel to it so they could clearly get their message across to visitors. Unfortunately, the company closed in October 2021.",
  image: '/projects/tmdip-interiors.webp',
  tech: ['Nuxt 2', 'TypeScript', 'Prismic']
},{
  name: 'Pixel Art R2-D2',
  url: 'https://codepen.io/jackdomleo7/full/ZEEqdxy',
  description: "A pure CSS, single div pixel art of the beloved Star Wars droid, R2-D2.",
  image: '/projects/pixel-art-r2d2.webp',
  tech: ['CSS']
},{
  name: 'My website',
  url: '/',
  description: 'Designed and built a fully responsive static portfolio website. This has been through many design variations as my UI skills have developed.',
  image: '/projects/jackdomleo.dev.webp',
  tech: ['Nuxt 4', 'TypeScript', 'SCSS']
}];

let list = projects;
if (props.limit) {
  list = list.slice(0, props.limit)
}
</script>

<style lang="scss" scoped>
$row-padding-v: 1.5rem;
$row-padding-h: 1rem;

.project-feed {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}

.project-row {
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  padding: $row-padding-v $row-padding-h;
  margin: 0 calc($row-padding-h * -1);
  border-top: 1px solid var(--color-fg2, #333);
  transition: background-color 0.2s ease, opacity 0.3s ease;
  border-radius: 4px;

  &:hover:not(.is-offline) {
    background-color: rgba(255, 255, 255, 0.03);
  }

  @media (min-width: $responsive-standard-tablet) {
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem 1.5rem;
    margin: 0 -1.5rem;
  }

  &:last-child {
    border-bottom: 1px solid var(--color-fg2, #333);
  }

  &__content { flex: 1; }

  &__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0 0 0.5rem 0;
    list-style-type: none;
    padding: 0;
  }

  &__header {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  &__link {
    text-decoration: none;
    color: inherit;

    &[href]:hover .project-row__title { color: var(--color-accent); }
  }

  &__title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.2;
    @media (min-width: $responsive-standard-tablet) { font-size: 1.5rem; }
  }

  &__description {
    margin-top: 0.75rem;
    font-size: 0.9rem;
    line-height: 1.5;
    opacity: 0.8;
    @media (min-width: $responsive-standard-tablet) { font-size: 1rem; }
  }
}

.tech-tag {
  font-family: var(--font-mono, monospace);
  font-size: .75rem;
  text-transform: uppercase;
  color: var(--color-accent);
  padding: 1px 6px;
  border-radius: 2px;

  &:first-of-type {
    padding-left: 0;
  }
}

.offline-tag {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  padding: 1px 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  text-transform: uppercase;
}

.lightbox {
  flex-shrink: 0;
  
  &__toggle { display: none; }

  &__trigger {
    display: block;
    width: 80px;
    height: 80px;
    cursor: zoom-in;
    @media (min-width: $responsive-standard-tablet) { width: 100px; height: 100px; }
    
    .thumb {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
      border: 1px solid var(--color-fg2, #333);
      transition: transform 0.2s ease, opacity 0.3s ease, filter 0.3s ease;
      &:hover { transform: scale(1.02); }
    }
  }

  &__overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.92);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    cursor: zoom-out;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
    padding: 1.5rem;

    .full-view { 
      max-width: 100%; 
      max-height: 100%; 
      border-radius: 4px; 
      transform: scale(0.98); 
      transition: transform 0.2s ease; 
      filter: none !important;
    }
  }

  &__toggle:checked ~ &__overlay {
    opacity: 1;
    pointer-events: auto;
    .full-view { transform: scale(1); }
  }
}

.is-offline {
  .project-row__content,
  .lightbox__trigger .thumb {
    opacity: 0.6;
    filter: saturate(0.5);
  }

  .project-row__title {
    font-weight: 500;
    cursor: default;
  }
}
</style>