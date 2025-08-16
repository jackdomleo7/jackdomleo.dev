<template>
  <ul class="projects-list container">
    <li v-for="(project, index) in list" :key="project.image">
      <component :is="project.isUrlDeactivated ? 'div' : defineNuxtLink({})" :to="project.isUrlDeactivated ? undefined : project.url" class="project" :target="project.isUrlDeactivated ? undefined : '_blank'">
        <nuxt-picture class="project__img" :src="project.image" alt="" width="424" height="223" sizes="4kdesktop:424px" loading="lazy" :preload="index <= props.preloadProjectImages" :format="project.image.split('.').pop()" />
        <div class="project__details">
          <ul class="project__tags">
            <li v-for="tech in project.tech" :key="tech" class="tag">
              {{ tech }}
            </li>
          </ul>
          <h2 class="project__title" v-html="project.name" />
          <p class="project__description">{{ project.description }}</p>
        </div>
      </component>
    </li>
  </ul>
</template>

<script lang="ts" setup>
interface Project {
  name: string;
  type: 'project' | 'mini' | 'client';
  url: string;
  description: string;
  image: string;
  tech: string[];
  isUrlDeactivated?: boolean;
}

const props = withDefaults(defineProps<{
  limit?: number;
  preloadProjectImages?: number;
  type?: Project['type'];
}>(), {
  limit: undefined,
  preloadProjectImages: 0,
  type: undefined
})

const projects: Project[] = [{
  name: 'Which Media Queries <small>which-media-queries.jackdomleo.dev</small>',
  type: 'mini',
  url: 'https://which-media-queries.jackdomleo.dev',
  description: 'A simple web app to detect the values of media queries on your device to be viewed at a glance.',
  image: '/projects/which-media-queries.png',
  tech: ['JavaScript']
},{
  name: 'Grassverse NFT <small>grassverse.org</small>',
  type: 'client',
  url: 'https://www.grassverse.org',
  description: 'This website came with pre-existing designs and includes a CMS and an account section for Grassverse asset owners to log in to view their assets and fellow owners of assets.',
  image: '/projects/grassverse-nft.png',
  tech: ['Nuxt 2', 'Web3', 'TypeScript'],
  isUrlDeactivated: true
},{
  name: 'npx jackdomleo7',
  type: 'mini',
  url: 'https://github.com/jackdomleo7/npx_business_card',
  description: 'A simple npm script to show some details about me directly in the terminal, like a digital business card.',
  image: '/projects/npx-jackdomleo7.gif',
  tech: ['JavaScript', 'npx']
},{
  name: 'Mad Parrot Crew NFT <small>madparrotcrew.com</small>',
  type: 'client',
  url: 'https://www.madparrotcrew.com',
  description: 'Created a fully responsive minting website based on existing designs for the Mad Parrot Crew NFT.',
  image: '/projects/mad-parrot-crew-nft.png',
  tech: ['Nuxt 2', 'Web3', 'TypeScript'],
  isUrlDeactivated: true
},{
  name: 'Spring Clean Twitter Bot',
  type: 'project',
  url: 'https://github.com/jackdomleo7/Spring_Clean_Twitter_Bot',
  description: 'A Twitter bot to automatically clean up my Twitter account.',
  image: '/projects/spring-clean-twitter-bot.png',
  tech: ['TypeScript', 'Twitter API', 'CRON']
},{
  name: 'Colour Theme Watcher & Switcher',
  type: 'mini',
  url: 'https://codepen.io/jackdomleo7/full/OJWaeem',
  description: "A pure JavaScript snippet to watch/detect a user's colour theme and allow them to change it.",
  image: '/projects/colour-theme-picker.gif',
  tech: ['JavaScript', 'CSS']
},{
  name: 'Checka11y.css',
  type: 'project',
  url: 'https://checka11y.jackdomleo.dev',
  description: 'A CSS stylesheet to quickly highlight a11y concerns and a really good education project for those wanting to learn about accessibility.',
  image: '/projects/checka11y.css.png',
  tech: ['SCSS', 'Cypress']
},{
  name: 'Cooltipz.css',
  type: 'project',
  url: 'https://cooltipz.jackdomleo.dev',
  description: 'A pure CSS solution for adding highly customisable, accessible tooltips to HTML.',
  image: '/projects/cooltipz.css.png',
  tech: ['SCSS']
},{
  name: 'Custom Car Colour Preview',
  type: 'mini',
  url: 'https://codepen.io/jackdomleo7/full/wvoYjNP',
  description: "An application to preview different colours of a car.",
  image: '/projects/custom-car-colour-preview.gif',
  tech: ['SVG', 'SCSS']
},{
  name: 'Spinning Smiley Face',
  type: 'mini',
  url: 'https://codepen.io/jackdomleo7/full/wvKLjVb',
  description: "A fun little animation of a spinning smiley face while learning GSAP.",
  image: '/projects/spinning-smiley-face.gif',
  tech: ['GSAP', 'SCSS']
},{
  name: 'CSS Union Jack Flag',
  type: 'mini',
  url: 'https://codepen.io/jackdomleo7/full/abvrgEo',
  description: "A pure CSS pixel-perfect Union Jack flag.",
  image: '/projects/css-union-jack-flag.png',
  tech: ['SCSS']
},{
  name: 'TMD Interior Projects & Building Services Ltd <small>tmdip.co.uk</small>',
  type: 'client',
  url: 'https://github.com/jackdomleo7/tmdip.co.uk',
  description: "Designed and built a fully responsive static website for a small shop-fitting & interior design company. This website needed a modern but minimal feel to it so they could clearly get their message across to visitors. Unfortunately, the company closed in October 2021.",
  image: '/projects/tmdip-interiors.png',
  tech: ['Nuxt 2', 'TypeScript', 'Prismic'],
  isUrlDeactivated: false
},{
  name: 'Neumorphic Design Elements',
  type: 'mini',
  url: 'https://codepen.io/jackdomleo7/full/mdeowoz',
  description: 'Some common UI elements in the style of neumorphic design.',
  image: '/projects/neumorphic-design-elements.png',
  tech: ['SCSS']
},{
  name: 'Jumping into Lightspeed',
  type: 'mini',
  url: 'https://codepen.io/jackdomleo7/full/rNOYdwz',
  description: "A mini animation demonstrating Star Wars lightspeed using HTML, CSS & JS.",
  image: '/projects/lightspeed.png',
  tech: ['JavaScript', 'CSS']
},{
  name: 'Pixel Art R2-D2',
  type: 'mini',
  url: 'https://codepen.io/jackdomleo7/full/ZEEqdxy',
  description: "A pure CSS, single div pixel art of the beloved Star Wars droid, R2-D2.",
  image: '/projects/pixel-art-r2d2.png',
  tech: ['CSS']
},{
  name: 'My website <small>jackdomleo.dev</small>',
  type: 'project',
  url: '/',
  description: 'Designed and built a fully responsive static website and blog for myself. This has been through many design variations as my UI skills have developed.',
  image: '/projects/jackdomleo.dev.png',
  tech: ['Nuxt 3', 'TypeScript', 'SCSS']
}];

let list = projects;
if (props.type) {
  list = list.filter(project => project.type === props.type)
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

  @media (forced-colors: active) {
    border: 1px solid transparent;
  }

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

    :deep(small) {
      display: block;
      font-size: var(--text-small);
      line-height: 1.8;
      font-style: italic;
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
