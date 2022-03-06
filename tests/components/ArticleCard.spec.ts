import { mount, shallowMount } from '@vue/test-utils'
import { configureAxe, toHaveNoViolations } from 'jest-axe'
import ArticleCard from '@/components/ArticleCard.vue'
import { IArticle } from '@/types'

const article: IArticle = {
  title: 'Some article about something cool',
  tags: ['frontend', 'a11y'],
  description: 'This is some really interesting article about something seriously friggin cool!',
  readingTime: 6,
  date: '2020-01-01',
  createdAt: String(new Date('2020-01-01')),
  updatedAt: String(new Date('2020-01-01')),
  body: {}, // Can be empty since we don't need the body in this component,
  dir: '/blog/',
  extension: '.md',
  slug: 'some-cool-article',
  path: '/blog/2020/some-cool-article',
  toc: [] // Can be empty since we don't use it in this component
}

expect.extend(toHaveNoViolations)

const axe = configureAxe({
  rules: {
    region: { enabled: false } // Don't need to check because components are loaded in isolation
  }
})

describe('ArticleCard', () => {
  /**
   * Vue instance
   */

  it('is a Vue instance', () => {
    const wrapper = mount(ArticleCard, {
      propsData: {
        article,
        headingLevel: 'h3'
      },
      stubs: ['nuxt-link', 'nuxt-img']
    })

    expect(wrapper.vm).toBeTruthy()
  })

  /**
   * Snapshots
   */

  it('matches snapshot when mounted', () => {
    const wrapper = mount(ArticleCard, {
      propsData: {
        article,
        headingLevel: 'h3'
      },
      stubs: ['nuxt-link', 'nuxt-img']
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('matches snapshot when shallow mounted', () => {
    const wrapper = shallowMount(ArticleCard, {
      propsData: {
        article,
        headingLevel: 'h3'
      },
      stubs: ['nuxt-link', 'nuxt-img']
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  /**
   * A11y
   */

  it('to have no obvious accessibility violations', async () => {
    const wrapper = mount(ArticleCard, {
      propsData: {
        article,
        headingLevel: 'h3'
      },
      stubs: ['nuxt-link', 'nuxt-img']
    })

    await expect(axe(wrapper.element)).resolves.toHaveNoViolations()
  })

  /**
   * Props
   */

  it('renders a <h2> when "h2" is set as the heading level', () => {
    const wrapper = shallowMount(ArticleCard, {
      propsData: {
        article,
        headingLevel: 'h2'
      },
      stubs: ['nuxt-link', 'nuxt-img']
    })

    expect(wrapper.find('h2.article-card__heading').exists()).toBe(true)
  })
})
