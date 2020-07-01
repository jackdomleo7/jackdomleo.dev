<template>
  <section id="enterprise-projects">
    <h2>Enterprise projects</h2>
    <p>
      Below is a list of projects I have been involved in at an organisation. (NOTE: Some projects or tech may not be shown below due to <abbr title="Non-Disclosure Agreements">NDA's</abbr>).
    </p>
    <p>
      See <nuxt-link to="/#work">
        here
      </nuxt-link> for my work history.
    </p>
    <textfield v-model="projectSearch" label="Filter enterprise projects" type="search" placeholder="Search by name, tech, organisation, URL or description" @input="filterProjects" />
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
          :organisation="project.organisation"
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

interface IEnterpriseProject extends IProject {
  organisation: string;
}

@Component({
  components: { Btn, ProjectCard, Textfield }
})
export default class EnterpriseProjects extends Vue {
  private filteredProjects: IEnterpriseProject[] = [];
  private projectSearch: string = '';

  private readonly enterpriseProjects: IEnterpriseProject[] = [
    {
      name: 'Flexipay Web',
      url:
        'https://www.mitrefinch.co.uk/product/payroll-software',
      organisation: 'Mitrefinch',
      image: 'mitrefinch',
      imageAlt: 'Mitrefinch logo',
      tech: [
        { name: 'Vue.js', icon: 'vuejs' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'HTML5', icon: 'html' },
        { name: 'SCSS', icon: 'sass' },
        { name: 'Git', icon: 'git' }
      ],
      description: 'Payroll web solution for Flexipay'
    },
    {
      name: 'Access control',
      url:
        'https://www.mitrefinch.co.uk/product/access-control',
      organisation: 'Mitrefinch',
      image: 'mitrefinch',
      imageAlt: 'Mitrefinch logo',
      tech: [
        { name: 'Vue.js', icon: 'vuejs' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'HTML5', icon: 'html' },
        { name: 'SCSS', icon: 'sass' },
        { name: 'Git', icon: 'git' }
      ],
      description: 'To be confirmed'
    },
    {
      name: 'bmi Connect',
      organisation: 'flybmi',
      image: 'flybmi',
      imageAlt: 'flybmi logo',
      tech: [
        { name: 'React.js', icon: 'reactjs' },
        { name: 'JavaScript', icon: 'js' },
        { name: 'HTML5', icon: 'html' },
        { name: 'CSS', icon: 'css' },
        { name: 'Responsive Web Design', icon: 'rwd' },
        { name: 'Git', icon: 'git' }
      ],
      description: 'Intranet for flybmi employees'
    },
    {
      name: 'www.flybmi.com',
      organisation: 'flybmi',
      image: 'flybmi',
      imageAlt: 'flybmi logo',
      tech: [
        { name: 'Grav', icon: 'grav' },
        { name: 'jQuery', icon: 'jquery' },
        { name: 'HTML5', icon: 'html' },
        { name: 'CSS', icon: 'css' },
        { name: 'Responsive Web Design', icon: 'rwd' },
        { name: 'Git', icon: 'git' }
      ],
      description: 'Multilingual website for flybmi'
    }
  ];

  private mounted () {
    this.filterProjects();
  }

  private filterProjects () {
    if (this.projectSearch === '') {
      this.filteredProjects = this.enterpriseProjects;
      return;
    }

    this.filteredProjects = this.enterpriseProjects.filter(project => this.filterProject(project));
  }

  private filterProject (project: IEnterpriseProject): boolean {
    return (
      Search.fuzzySearch(project.name, this.projectSearch) ||
      Search.fuzzySearch(project.description, this.projectSearch) ||
      Search.fuzzySearch(project.organisation, this.projectSearch) ||
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
