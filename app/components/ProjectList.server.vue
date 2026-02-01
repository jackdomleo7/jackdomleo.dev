<template>
  <div class="container">
    <ul v-once class="project-feed">
      <li 
        v-for="(project, index) in list" 
        :key="project.name" 
        class="project-row"
      >
        <div class="project-row__content">
          <ul class="project-row__meta">
            <li v-for="tag in project.tags" :key="tag" class="tech-tag">
              {{ tag }}
            </li>
          </ul>

          <div class="project-row__header">
            <component 
              :is="project.url ? defineNuxtLink({}) : 'span'" 
              :to="project.url ? project.url : undefined"
              :target="project.url?.startsWith('http') ? '_blank' : undefined"
              class="project-row__link"
            >
              <h3 class="project-row__title">{{ project.name }}</h3>
            </component>
          </div>
          
          <p class="project-row__description">{{ project.description }}</p>
        </div>

        <div v-if="project.image" class="lightbox">
          <input :id="`zoom-${index}`" type="checkbox" class="lightbox__toggle" aria-label="Open preview" />
          <label :for="`zoom-${index}`" class="lightbox__trigger">
            <img 
              :src="project.image" 
              :alt="`${project.name} preview`" 
              class="thumb"
              :loading="index <= props.preloadProjectImages ? 'eager' : 'lazy'"
            />
          </label>
          <label :for="`zoom-${index}`" class="lightbox__overlay">
            <img :src="project.image" alt="" class="full-view" />
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
interface Project {
  name: string;
  description: string;
  tags: string[];
  url?: string;
  image?: string;
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
  url: 'https://buttercmsutilities.jackdomleo.dev',
  description: 'An open-source utility suite addressing native limitations in Butter CMS. Features custom high-performance cross-page content searching and a roadmap for automated HTML sanitization to preserve design integrity. Designed for and validated by production content teams to streamline editorial workflows.',
  image: '/projects/butter-cms-utilities.webp',
  tags: ['Vue 3', 'TypeScript', 'Tooling']
},{
  name: 'Storybook Addon: CSS Properties',
  url: 'https://github.com/jackdomleo7/storybook-addon-css-properties',
  description: "An experimental exploration into Storybook's internal messaging APIs. Designed to provide real-time control over CSS custom properties within the Storybook manager. This project served as a deep dive into state synchronization between the manager and preview frames.",
  image: '/projects/storybook-addon-css-properties.webp',
  tags: ['React', 'TypeScript', 'Storybook']
},{
  name: 'Which Media Queries',
  url: 'https://which-media-queries.jackdomleo.dev',
  description: 'A diagnostic utility designed to verify browser detection of system-level accessibility preferences. It provides an at-a-glance validation of media queries such as reduced motion, high contrast, and colour schemes to streamline cross-device QA testing.',
  image: '/projects/which-media-queries.webp',
  tags: ['Vue 3', 'TypeScript', 'Accessibility']
},{
  name: 'Grassverse NFT',
  url: 'https://www.grassverse.org',
  description: 'A freelance commercial project with pre-existing designs delivering community utility for the Grassverse NFT ecosystem. I integrated multiple OpenSea API endpoints to aggregate ownership data, enabling NFT holders to identify and connect with members sharing matching asset traits.',
  image: '/projects/grassverse-nft.webp',
  tags: ['Nuxt 2', 'TypeScript', 'Web3']
},{
  name: 'npx jackdomleo7',
  url: 'https://github.com/jackdomleo7/npx_business_card',
  description: 'An interactive Command Line Interface (CLI) business card distributed via NPM. This project demonstrates a creative approach to personal branding and an understanding of terminal-based user experiences and package distribution.',
  image: '/projects/npx-jackdomleo7.webp',
  tags: ['Node.js', 'CLI', 'NPX']
},{
  name: 'Mad Parrot Crew NFT',
  description: 'A freelance commercial delivery with pre-existing designs for the Mad Parrot Crew NFT ecosystem. Architected a fully responsive minting platform using Nuxt 2 and Web3 technologies. Managed complex frontend state and successfully navigated eight major design pivots to deliver a high-performance launch experience for the client.',
  image: '/projects/mad-parrot-crew-nft.webp',
  tags: ['Nuxt 2', 'TypeScript', 'Web3']
},{
  name: 'Spring Clean Twitter Bot',
  url: 'https://github.com/jackdomleo7/Spring_Clean_Twitter_Bot',
  description: 'An automated utility designed to manage and reduce Twitter account bloat. Built with TypeScript and deployed on Heroku, it utilized scheduled CRON tasks and the Twitter API to maintain account hygiene through automated content pruning.',
  tags: ['TypeScript', 'Twitter API', 'CRON', 'Heroku']
},{
  name: 'Colour Theme Watcher & Switcher',
  url: 'https://codepen.io/jackdomleo7/full/OJWaeem',
  description: "A lightweight JavaScript experiment that synchronizes web application themes with OS-level user preferences. It utilizes the matchMedia API to detect and react to system changes in real-time, ensuring a consistent and accessible user experience.",
  image: '/projects/colour-theme-picker.gif',
  tags: ['JavaScript', 'CSS', 'UX', 'Accessibility']
},{
  name: 'Checka11y.css',
  url: 'https://checka11y.jackdomleo.dev',
  description: 'An open-source diagnostic tool and browser extension designed to surface accessibility concerns through visual feedback. Recognized by the global developer community and featured at international tech conferences, it serves as both a production-ready utility and an educational resource for mastering accessible markup.',
  image: '/projects/checka11y.css.webp',
  tags: ['SCSS', 'Accessibility']
},{
  name: 'Cooltipz.css',
  url: 'https://cooltipz.jackdomleo.dev',
  description: 'A lightweight, library-agnostic tooltip library built with pure SCSS. Engineered for high performance and zero-dependency environments, it provides an accessible, fully customizable solution for surfacing contextual information without the overhead of JavaScript-heavy alternatives.',
  image: '/projects/cooltipz.css.webp',
  tags: ['SCSS']
},{
  name: 'Custom Car Colour Preview',
  url: 'https://codepen.io/jackdomleo7/full/wvoYjNP',
  description: "An interactive product configurator demonstrating dynamic asset colourisation. I utilized SVG masking and CSS blend modes to solve the 'flat colour' limitation, preserving realistic specular highlights and shadows to maintain the vehicle's metallic finish across the entire colour spectrum.",
  image: '/projects/custom-car-colour-preview.gif',
  tags: ['SVG', 'SCSS']
},{
  name: 'CSS Union Jack Flag',
  url: 'https://codepen.io/jackdomleo7/full/abvrgEo',
  description: "A technical exercise in mathematical CSS. This project involved recreatng the complex geometry of the Union Jack with pixel-perfect accuracy, utilizing advanced SCSS calculations to maintain correct proportions across all scales.",
  image: '/projects/css-union-jack-flag.webp',
  tags: ['SCSS']
},{
  name: 'TMD Interior Projects & Building Services Ltd',
  url: 'https://github.com/jackdomleo7/tmdip.co.uk',
  description: "A commercial project for a boutique shop-fitting firm. I delivered a high-performance static site with a CAD-inspired aesthetic, integrating Prismic CMS to allow for seamless content management and optimized SEO.",
  image: '/projects/tmdip-interiors.webp',
  tags: ['Nuxt 2', 'TypeScript', 'Prismic']
},{
  name: 'Single-Div Pixel Art R2-D2',
  url: 'https://codepen.io/jackdomleo7/full/ZEEqdxy',
  description: "An exploration into CSS render performance and the box-shadow property. This 'Single-Div' challenge demonstrates the ability to create complex visual assets using purely declarative code without external assets or extra DOM nodes.",
  image: '/projects/pixel-art-r2d2.webp',
  tags: ['SCSS']
},{
  name: 'My website',
  url: '/',
  description: 'The current iteration of my personal corner of the web. This site acts as a living history of my development journey, evolving through multiple refactors to stay aligned with modern performance standards and my own growth as a developer.',
  image: '/projects/jackdomleo.dev.webp',
  tags: ['Nuxt 4', 'TypeScript', 'SCSS']
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
  border-top: 1px solid var(--color-fg1);
  transition: background-color 0.2s ease, opacity 0.3s ease;

  &:first-of-type { border-top: none; }

  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }

  @media (min-width: $responsive-standard-tablet) {
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem 1.5rem;
    margin: 0 -1.5rem;
  }

  &__content { flex: 1; }

  &__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0 0 0.5rem;
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
  padding: 0.0625rem 0.375rem;
  border-radius: 0.125rem;

  &:first-of-type {
    padding-left: 0;
  }
}

.lightbox {
  flex-shrink: 0;
  
  &__toggle { display: none; }

  &__trigger {
    display: block;
    width: 8.875rem;
    height: 5rem;
    cursor: zoom-in;
    @media (min-width: $responsive-standard-tablet) { width: 11.125rem; height: 6.25rem; }
    
    .thumb {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.25rem;
      border: 1px solid var(--color-fg1);
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
      border-radius: 0.25rem; 
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
</style>