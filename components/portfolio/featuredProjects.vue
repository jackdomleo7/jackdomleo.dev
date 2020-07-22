<template>
  <section id="featured-projects">
    <h2>My featured projects</h2>
    <p>
      Below is a list of some of my featured personal projects.
    </p>
    <textfield v-model="projectSearch" label="Filter featured projects" type="search" placeholder="Search by name, tech, URL or description" @input="filterProjects" />
    <ul v-if="filteredProjects.length > 0" class="projects">
      <li
        v-for="(project, index) in filteredProjects"
        :key="index"
        :aria-setsize="filteredProjects.length"
        :aria-posinset="index + 1"
      >
        <project-card
          :header="project.name"
          :description="project.description"
          :url="project.url"
          :image="`/img/projects/${project.image}.png`"
          :image-alt="project.imageAlt"
          :tech="project.tech"
        />
      </li>
    </ul>
    <p v-else class="center">
      No projects match this search
    </p>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import IProject from './IProject';
import { Btn, ProjectCard, Textfield } from '@/components';
import Search from '@/middleware/fuzzySearch';

@Component({
  components: { Btn, ProjectCard, Textfield }
})
export default class FeaturedProjects extends Vue {
  private filteredProjects: IProject[] = [];
  private projectSearch: string = '';

  private readonly projects: IProject[] = [
    {
      name: 'Twitter bot for #NoPreviewHtmlCss: The Challenge',
      url: 'https://twitter.com/NoPreviewHtmlCs',
      image: 'twitter-bot-nopreviewhtmlcss',
      imageAlt: '#NoPreviewHtmlCss Twitter bot logo',
      tech: [
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'Heroku', icon: 'heroku' },
        { name: 'Git', icon: 'git' }
      ],
      description: 'A Twitter bot to autonomously like and retweet tweets containing the #NoPreviewHtmlCss hashtag.',
      searchAliases: ['challenge']
    },
    {
      name: 'Cooltipz.css',
      url: 'https://cooltipz.jackdomleo.dev',
      image: 'cooltipz',
      imageAlt: 'Cooltipz.css logo',
      tech: [
        { name: 'SCSS', icon: 'sass' },
        { name: 'CSS', icon: 'css' },
        { name: 'Git', icon: 'git' }
      ],
      description: 'A pure CSS library to help add customisable, accessible tooltips to HTML, available on npm, yarn and CDN.',
      searchAliases: ['tooltips']
    },
    {
      name: 'www.tmdip.co.uk',
      url: 'https://www.tmdip.co.uk',
      image: 'tmdip',
      imageAlt: 'A screengrab of www.tmdip.co.uk home page',
      tech: [
        { name: 'Nuxt.js', icon: 'nuxt' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'HTML5', icon: 'html' },
        { name: 'SCSS', icon: 'sass' },
        { name: 'Responsive Web Design', icon: 'rwd' },
        { name: 'Git', icon: 'git' }
      ],
      description: 'A fully responsive website for TMD Interior Projects &amp; Building Services Ltd.',
      searchAliases: ['Tony Domleo', 'Vue.js']
    },
    {
      name: 'ellaparsons.design',
      url: 'https://ellaparsons.design',
      image: 'ellaparsons',
      imageAlt: 'A screengrab of ellaparsons.design home page',
      tech: [
        { name: 'Nuxt.js', icon: 'nuxt' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'HTML5', icon: 'html' },
        { name: 'SCSS', icon: 'sass' },
        { name: 'Responsive Web Design', icon: 'rwd' },
        { name: 'Git', icon: 'git' }
      ],
      description: 'A fully responsive portfolio website for Ella Parsons.',
      searchAliases: ['Vue.js']
    },
    {
      name: 'jackdomleo.dev',
      url: 'https://jackdomleo.dev',
      image: 'jackdomleodev',
      imageAlt: 'A screengrab of jackdomleo.dev home page',
      tech: [
        { name: 'Nuxt.js', icon: 'nuxt' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'HTML5', icon: 'html' },
        { name: 'SCSS', icon: 'sass' },
        { name: 'Responsive Web Design', icon: 'rwd' },
        { name: 'Git', icon: 'git' }
      ],
      description: 'A fully responsive portfolio website and blog for me.',
      searchAliases: ['Vue.js', 'blog']
    }
  ];

  private mounted () {
    this.filterProjects();
  }

  private filterProjects () {
    if (this.projectSearch === '') {
      this.filteredProjects = this.projects;
      return;
    }

    this.filteredProjects = this.projects.filter(project => this.filterProject(project));
  }

  private filterProject (project: IProject): boolean {
    return (
      Search.fuzzySearch(project.name, this.projectSearch) ||
      Search.fuzzySearch(project.description, this.projectSearch) ||
      Search.fuzzySearch(project.url, this.projectSearch) ||
      Search.fuzzySearch(project.tech!.map(x => x.name).join(' '), this.projectSearch) ||
      Search.fuzzySearch(project.tech!.map(x => x.icon).join(' '), this.projectSearch) ||
      Search.fuzzySearch(project.searchAliases ? project.searchAliases.join(' ') : '', this.projectSearch)
    );
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/shared/projects.scss";
</style>
