import { mount, shallowMount } from '@vue/test-utils'
import { configureAxe, toHaveNoViolations } from 'jest-axe'
import ProjectCard from '@/components/ProjectCard.vue'
import { IProject } from '@/types/cms/IPageProjects'

const projects: Record<'checka11y'|'mywebsite'|'nourl', IProject> = {
  checka11y: {
    name: 'Checka11y.css',
    short_description: [
      {
        spans: [],
        text: 'A CSS stylesheet to quickly highlight a11y concerns',
        type: 'paragraph'
      }
    ],
    project_type: 'standard',
    url: {
      link_type: 'Web',
      url: 'https://checka11y.jackdomleo.dev'
    },
    thumbnail: {
      url: 'https://example.com/thumbnail.png',
      alt: 'Checka11y.css logo',
      copyright: null,
      dimensions: {
        height: 242,
        width: 484
      }
    },
    tech_1: 'SCSS',
    tech_2: 'Cypress',
    tech_3: null,
    tech_4: null,
    long_description: null,
    mockup: {
      url: null,
      alt: null,
      copyright: null,
      dimensions: {
        height: null,
        width: null
      }
    }
  },
  mywebsite: {
    name: 'My Website',
    short_description: [
      {
        spans: [],
        text: 'A fully responsive static website for my portfolio & blog.',
        type: 'paragraph'
      }
    ],
    project_type: 'website',
    url: {
      link_type: 'Web',
      url: 'https://jackdomleo.dev'
    },
    thumbnail: {
      url: 'https://example.com/thumbnail.png',
      alt: 'jackdomleo.dev thumbnail',
      copyright: null,
      dimensions: {
        height: 242,
        width: 484
      }
    },
    tech_1: 'Nuxt',
    tech_2: 'TypeScript',
    tech_3: 'SCSS',
    tech_4: null,
    long_description: [
      {
        spans: [],
        text: 'Lorem ipsum',
        type: 'paragraph'
      }
    ],
    mockup: {
      url: 'https://example.com/mockup.png',
      alt: 'jackdomleo.dev mockup',
      copyright: null,
      dimensions: {
        height: 374,
        width: 768
      }
    }
  },
  nourl: {
    name: 'Some project with no url',
    short_description: [
      {
        spans: [],
        text: 'A website with no url provided.',
        type: 'paragraph'
      }
    ],
    project_type: 'website',
    url: {
      link_type: 'Web',
      url: null
    },
    thumbnail: {
      url: 'https://example.com/thumbnail.png',
      alt: 'Some thumbnail',
      copyright: null,
      dimensions: {
        height: 242,
        width: 484
      }
    },
    tech_1: 'Nuxt',
    tech_2: 'TypeScript',
    tech_3: 'SCSS',
    tech_4: null,
    long_description: [
      {
        spans: [],
        text: 'Lorem ipsum',
        type: 'paragraph'
      }
    ],
    mockup: {
      url: 'https://example.com/mockup.png',
      alt: 'jackdomleo.dev mockup',
      copyright: null,
      dimensions: {
        height: 374,
        width: 768
      }
    }
  }
}

expect.extend(toHaveNoViolations)

const axe = configureAxe({
  rules: {
    region: { enabled: false } // Don't need to check because components are loaded in isolation
  }
})

describe('ProjectCard', () => {
  /**
   * Vue instance
   */

  it('is a Vue instance', () => {
    const wrapper = mount(ProjectCard, {
      propsData: {
        project: projects.mywebsite,
        headingLevel: 'h3'
      },
      stubs: ['prismic-rich-text', 'nuxt-img']
    })

    expect(wrapper.vm).toBeTruthy()
  })

  /**
   * Snapshots
   */

  it('matches snapshot when mounted', () => {
    const wrapper = mount(ProjectCard, {
      propsData: {
        project: projects.mywebsite,
        headingLevel: 'h3'
      },
      stubs: ['prismic-rich-text', 'nuxt-img']
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('matches snapshot when shallow mounted', () => {
    const wrapper = shallowMount(ProjectCard, {
      propsData: {
        project: projects.mywebsite,
        headingLevel: 'h3'
      },
      stubs: ['prismic-rich-text', 'nuxt-img']
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  /**
   * A11y
   */

  it('to have no obvious accessibility violations', async () => {
    const wrapper = mount(ProjectCard, {
      propsData: {
        project: projects.mywebsite,
        headingLevel: 'h3'
      },
      stubs: ['prismic-rich-text', 'nuxt-img']
    })

    await expect(axe(wrapper.element)).resolves.toHaveNoViolations()
  })

  /**
   * Props
   */

  it('renders an <a> with a href if a url exists', () => {
    const wrapper = shallowMount(ProjectCard, {
      propsData: {
        project: projects.mywebsite,
        headingLevel: 'h3'
      },
      stubs: ['prismic-rich-text', 'nuxt-img']
    })

    expect(wrapper.find('a.project-card').exists()).toBe(true)
    expect(wrapper.find('a.project-card').attributes('href')).toBe(projects.mywebsite.url.url)
  })

  it('renders a <div> if a url is not present', () => {
    const wrapper = shallowMount(ProjectCard, {
      propsData: {
        project: projects.nourl,
        headingLevel: 'h3'
      },
      stubs: ['prismic-rich-text', 'nuxt-img']
    })

    expect(wrapper.find('div.project-card').exists()).toBe(true)
  })

  it('shows url if the project is a website', () => {
    const wrapper = shallowMount(ProjectCard, {
      propsData: {
        project: projects.mywebsite,
        headingLevel: 'h3'
      },
      stubs: ['prismic-rich-text', 'nuxt-img']
    })

    expect(wrapper.find('h3.project-card__heading small').exists()).toBe(true)
    expect(wrapper.find('h3.project-card__heading small').text()).toContain(projects.mywebsite.url.url.replace('https://', ''))
  })

  it('does not show url if the project is not a website', () => {
    const wrapper = shallowMount(ProjectCard, {
      propsData: {
        project: projects.checka11y,
        headingLevel: 'h3'
      },
      stubs: ['prismic-rich-text', 'nuxt-img']
    })

    expect(wrapper.find('h3.project-card__heading small').exists()).toBe(false)
  })
})
