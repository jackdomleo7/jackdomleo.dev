<template>
  <page-template page-title="Projects">
    <h2>Featured</h2>
    <p>
      Below is a list of some of the featured projects I have been involved in,
      whether it be through my employment or in my spare time with a brief list
      of some of the featired technologies used (I have not included any
      technology I did not get involved with).<br><br>You can find
      <strong>more</strong> of my creations on my
      <a
        href="https://codepen.io/JackDomleo"
        class="link"
        rel="nofollow"
      >CodePen profile</a>
      and on my
      <a
        href="https://github.com/JDomleo"
        class="link"
        rel="nofollow"
      >GitHub profile</a>.
    </p>
    <ul class="projects">
      <li
        v-for="(project, index) in projects"
        :key="index"
        :aria-setsize="projects.length"
        :aria-posinset="index + 1"
        class="project"
      >
        <component
          :is="project.url ? 'a' : 'div'"
          :href="project.url ? project.url : null"
          :rel="project.url ? 'nofollow' : null"
          class="project__link"
        >
          <header class="project__header">
            <img :src="'/img/projects/' + project.image" :alt="project.name + ' logo'">
            <h3><span class="sr-only">Project name:</span> {{ project.name }}</h3>
            <p v-if="project.associationWith">
              <small><span class="sr-only">Company:</span> with {{ project.associationWith }}</small>
            </p>
          </header>
          <p class="project__tech">
            <svg-icon name="code" /> <small><span class="sr-only">Some technologies included</span> {{ project.tech.join(', ') }}</small>
          </p>
          <p><span class="sr-only">Project description:</span> {{ project.description }}</p>
        </component>
      </li>
    </ul>
    <hr>
    <h2>Open-source</h2>
    <p>
      I always try to take part in open-source projects, whether it be providing
      feedback, starring a GitHub repository or creating a pull request. I'm a
      big supporter of open-source and think it's a great way for developers to
      collaborate together and will help deliver better software in the future.
    </p>
    <hr>
    <h2>Future projects</h2>
    <p>
      I'm always learning, a developer never stops learning, software is a fast
      moving industry.<br><br>Below is a list of some technologies I am interested in
      learning and including in future projects. These could be projects through my employment, CodePen or my own repositories in GitHub.
    </p>
    <ul class="future">
      <li
        v-for="(futureTech, index) in futureTechs"
        :key="index"
        :aria-setsize="futureTechs.length"
        :aria-posinset="index + 1"
      >
        {{ futureTech }}
      </li>
    </ul>
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { PageTemplate } from '@/components';

interface IProject {
  name: string;
  tech: string[];
  description: string;
  image: string;
  startDate?: Date;
  endDate?: Date;
  url?: string;
  associationWith?: string;
}

@Component({
  components: { PageTemplate },
  head () {
    return {
      title: 'Projects',
      meta: [
        { hid: 'description', name: 'description', content: 'A list of some of Jack Domleo\'s featured projects, future projects and open-source contributions.' },
        { hid: 'og:description', name: 'og:description', content: 'A list of some of Jack Domleo\'s featured projects, future projects and open-source contributions.' }
      ]
    };
  }
})
export default class Index extends Vue {
  private readonly projects: IProject[] = [
    {
      name: 'Cooltipz.css',
      url: 'https://cooltipz.jackdomleo.dev?ref=jackdomleo.dev',
      image: 'cooltipzcss.png',
      tech: ['SCSS', 'CSS3', 'PostCSS', 'npm', 'GitHub Pages', 'Google Analytics'],
      description: 'Pure CSS tooltip library released on npm'
    },
    {
      name: 'www.tmdip.co.uk',
      url: 'https://www.tmdip.co.uk',
      image: 'wwwtmdipcouk.png',
      tech: ['Vue.js', 'TypeScript', 'HTML5', 'SCSS', 'GitHub Pages', 'Mailchimp', 'Leaflet.js'],
      description: 'Website for TMD Interior Projects & Building Services Ltd'
    },
    {
      name: 'ellaparsons.design',
      url: 'https://ellaparsons.deisgn',
      image: 'ellaparsonsdesign.png',
      tech: ['Vue.js', 'TypeScript', 'HTML5', 'SCSS', 'GitHub Pages', 'Google Analytics'],
      description: 'Portfolio website for Ella Parsons'
    },
    {
      name: 'Flexipay Web',
      url:
        'https://www.mitrefinch.co.uk/product/payroll-software?ref=jackdomleo.dev',
      associationWith: 'Mitrefinch',
      image: 'mitrefinch.png',
      tech: ['Vue.js', 'TypeScript', 'Mocha & Chai', 'HTML5', 'SCSS', 'C#', 'DevOps'],
      description: 'Payroll web solution for Flexipay'
    },
    {
      name: 'Access control',
      url:
        'https://www.mitrefinch.co.uk/product/access-control?ref=jackdomleo.dev',
      associationWith: 'Mitrefinch',
      image: 'mitrefinch.png',
      tech: ['Vue.js', 'TypeScript', 'Jest', 'HTML5', 'SCSS', 'DevOps', 'Leaflet.js'],
      description: 'To be confirmed'
    },
    {
      name: 'bmi Connect',
      associationWith: 'flybmi',
      image: 'bmiConnect.png',
      tech: ['React.js', 'SCSS', 'JSX', 'Google Cloud Platform', 'Google Maps'],
      description: 'Intranet for flybmi employees'
    },
    {
      name: 'www.flybmi.com',
      associationWith: 'flybmi',
      image: 'flybmi.png',
      tech: ['Grav', 'Twig HTML', 'jQuery', 'CSS3', 'Google Cloud Platform', 'Google Maps', 'Google Analytics', 'Mailchimp'],
      description: 'Multilingual website for flybmi'
    },
    {
      name: 'jackdomleo.dev',
      url: 'https://jackdomleo.dev',
      image: 'jackdomleodev.png',
      tech: ['Nuxt.js', 'SCSS', 'TypeScript', 'HTML5', 'GitHub Pages', 'Google Analytics'],
      description: 'My portfolio website'
    }
  ];

  private readonly futureTechs: string[] = [
    'Flutter', 'LESS/Stylus', 'Three.js', 'Internationalisation', 'GSAP', 'Pug/HAML', 'Electron.js', 'Phaser.js', 'HTML <canvas>'
  ];
}
</script>

<style lang="scss">
:root {
  --project-link-box-shadow-opacity: 0.8;

  @media screen and (prefers-color-scheme: light) {
    --project-link-box-shadow-opacity: 0.6;
  }
}
</style>

<style lang="scss" scoped>
.projects {
  padding-left: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
}

.project {
  width: 100%;

  &__link {
    color: currentColor;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    box-shadow: 0 0 0.625rem -0.1875rem rgba(0, 0, 0, var(--project-link-box-shadow-opacity));
    transition: box-shadow 160ms ease;
    border-radius: 0.375rem;

    &:hover {
      box-shadow: 0 0 0.625rem -0.0625rem rgba(0, 0, 0, var(--project-link-box-shadow-opacity));
    }

    > p {
      margin: 1rem;
    }
  }

  &__header {
    display: flex;
    align-items: center;

    img {
      height: 3rem;
      width: 3rem;
      overflow: hidden;
      margin: 0.2rem 0.8rem 0 0.2rem;
      border-radius: 0.75rem;

      @media screen and (min-width: 30em) {
        margin-right: 2rem;
        height: 4rem;
        width: 4rem;
      }
    }

    h3 {
      flex: 1;
    }

    p {
      align-self: flex-start;
      margin: 0 0.2rem 0 0;
    }
  }

  &__tech {
    display: flex;
    align-items: flex-start;

    svg {
      height: 1rem;
      width: 1rem;
      margin-right: 1rem;
    }
  }
}

.future {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;

  li {
    margin: 0 1.3rem;
  }
}
</style>
