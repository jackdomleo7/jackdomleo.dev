<template>
  <page-template page-title="Projects">
    <h2>Featured</h2>
    <p>
      Below is a list of some of the featured projects I have been involved in, whether it be through my employment or in my spare time with a brief list of some of the featired technologies used (I have not included any technology I did not get involved with).<br/><br/>You can find <strong>more</strong> of my creations on my <a href="https://codepen.io/JackDomleo" class="link" rel="nofollow">CodePen profile</a> and on my <a href="https://github.com/JDomleo" class="link" rel="nofollow">GitHub profile</a>.
    </p>
    <ul class="projects">
      <li v-for="(project, index) in projects" :key="index" :aria-setsize="projects.length" :aria-posinset="index + 1">
        <component :is="project.url ? 'a' : 'div'" :href="project.url ? project.url : null" :rel="project.url ? 'nofollow' : null">
          <div class="projects__bg-image" :style="{ backgroundImage: project.backgroundImage ? 'url(/img/projects/' + project.backgroundImage + ')' : 'linear-gradient(var(--color-grey-light), var(--color-orange-faint))' }"></div>
          <h3><span class="sr-only">Project name:</span> {{ project.name }}</h3>
          <p v-if="project.associationWith" class="projects__associationWith"><small><span class="sr-only">Company:</span> with {{ project.associationWith }}</small></p>
          <p><span class="sr-only">Some technologies included</span> {{ project.tech.join(', ') }}</p>
          <p><span class="sr-only">Project description:</span> {{ project.description }}</p>
        </component>
      </li>
    </ul>
    <hr/>
    <h2>Open-source</h2>
    <p>I always try to take part in open-source projects, whether it be providing feedback, starring a GitHub repository or creating a pull request. I'm a big supporter of open-source and think it's a great way for developers to collaborate together and will help deliver better software in the future.</p>
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { PageTemplate } from '@/components';

interface IProject {
  name: string;
  url?: string;
  associationWith?: string;
  backgroundImage?: string;
  tech: string[];
  description: string;
}

@Component({
  components: { PageTemplate }
})
export default class Projects extends Vue {
  private readonly projects: IProject[] = [
    {
      name: 'Cooltipz.css',
      url: 'https://cooltipz.jackdomleo.dev?ref=jackdomleo.dev',
      backgroundImage: 'cooltipzcss.png',
      tech: [
        'SCSS', 'CSS3', 'PostCSS', 'npm'
      ],
      description: 'Pure CSS tooltip library released on npm'
    },
    {
      name: 'www.tmdip.co.uk',
      url: 'https://www.tmdip.co.uk',
      backgroundImage: 'wwwtmdipcouk.png',
      tech: [
        'Vue.js', 'TypeScript', 'HTML5', 'SCSS'
      ],
      description: 'Website for TMD Interior Projects & Building Services Ltd'
    },
    {
      name: 'ellaparsons.design',
      url: 'https://ellaparsons.deisgn',
      backgroundImage: 'ellaparsonsdesign.png',
      tech: [
        'Vue.js', 'TypeScript', 'HTML5', 'SCSS'
      ],
      description: 'Portfolio website for Ella Parsons'
    },
    {
      name: 'Flexipay Web',
      url: 'https://www.mitrefinch.co.uk/product/payroll-software?ref=jackdomleo.dev',
      associationWith: 'Mitrefinch',
      backgroundImage: 'mitrefinch.png',
      tech: [
        'Vue.js', 'TypeScript', 'Mocha & Chai', 'HTML5', 'SCSS', 'C#'
      ],
      description: 'Payroll web solution for Flexipay'
    },
    {
      name: 'Access control',
      url: 'https://www.mitrefinch.co.uk/product/access-control?ref=jackdomleo.dev',
      associationWith: 'Mitrefinch',
      backgroundImage: 'mitrefinch.png',
      tech: [
        'Vue.js', 'TypeScript', 'Jest', 'HTML5', 'SCSS'
      ],
      description: 'To be confirmed'
    },
    {
      name: 'bmi Connect',
      associationWith: 'flybmi',
      backgroundImage: 'bmiConnect.png',
      tech: [
        'React.js', 'SCSS', 'HTML5', 'Google Cloud Platform'
      ],
      description: 'Intranet for flybmi employees'
    },
    {
      name: 'www.flybmi.com',
      associationWith: 'flybmi',
      backgroundImage: 'flybmi.png',
      tech: [
        'Grav', 'CSS3', 'HTML5', 'Google Cloud Platform'
      ],
      description: 'Website for flybmi'
    },
    {
      name: 'jackdomleo.dev',
      url: 'https://jackdomleo.dev',
      backgroundImage: 'jackdomleodev.png',
      tech: [
        'Nuxt.js', 'SCSS', 'TypeScript', 'HTML5'
      ],
      description: 'My portfolio website'
    }
  ]
}
</script>

<style lang="scss" scoped>
.projects {
  padding-left: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  text-align: center;
  margin: 2rem 0;

  li {
    width: 15rem;
    height: 15rem;
    overflow: hidden;
    position: relative;

    h3 {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 0;
    }

    p:not(.projects__associationWith) {
      margin: 0.8rem 0;
    }

    a {
      color: currentColor;
      text-decoration: none;
    }
  }

  &__bg-image {
    background-position: center;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-size: 100%;
    transition: all 160ms ease-in;

    &:hover {
      background-size: 120%;
    }
  }

  &__associationWith {
    margin-top: 0;
  }
}
</style>
