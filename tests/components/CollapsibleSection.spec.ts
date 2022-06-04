import { mount, shallowMount } from '@vue/test-utils'
import { configureAxe, toHaveNoViolations } from 'jest-axe'
import CollapsibleSection from '@/components/CollapsibleSection.vue'

expect.extend(toHaveNoViolations)

const axe = configureAxe({
  rules: {
    region: { enabled: false } // Don't need to check because components are loaded in isolation
  }
})

describe('CollapsibleSection', () => {
  /**
   * Vue instance
   */

  it('is a Vue instance', () => {
    const wrapper = mount(CollapsibleSection, {
      propsData: {
        heading: 'What is the meaning of life?',
        headingTag: 'h2',
        id: 'faq-1'
      },
      slots: {
        default: '<p>The meaning of life is 42.</p>'
      },
      stubs: ['svg-icon']
    })

    expect(wrapper.vm).toBeTruthy()
  })

  /**
   * Snapshots
   */

  it('matches snapshot when mounted', () => {
    const wrapper = mount(CollapsibleSection, {
      propsData: {
        heading: 'What is the meaning of life?',
        headingTag: 'h2',
        id: 'faq-1'
      },
      slots: {
        default: '<p>The meaning of life is 42.</p>'
      },
      stubs: ['svg-icon']
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('matches snapshot when shallow mounted', () => {
    const wrapper = shallowMount(CollapsibleSection, {
      propsData: {
        heading: 'What is the meaning of life?',
        headingTag: 'h2',
        id: 'faq-1'
      },
      slots: {
        default: '<p>The meaning of life is 42.</p>'
      },
      stubs: ['svg-icon']
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  /**
   * A11y
   */

  it('to have no obvious accessibility violations', async () => {
    const wrapper = mount(CollapsibleSection, {
      propsData: {
        heading: 'What is the meaning of life?',
        headingTag: 'h2',
        id: 'faq-1'
      },
      slots: {
        default: '<p>The meaning of life is 42.</p>'
      },
      stubs: ['svg-icon']
    })

    await expect(axe(wrapper.element)).resolves.toHaveNoViolations()
  })

  /**
   * Props
   */

  const headingTags = ['h2', 'h3', 'h4', 'h5', 'h6']
  for (const headingTag of headingTags) {
    it(`sets the <${headingTag}></${headingTag}> heading tag when set`, () => {
      const wrapper = shallowMount(CollapsibleSection, {
        propsData: {
          heading: 'What is the meaning of life?',
          headingTag,
          id: 'faq-1'
        },
        slots: {
          default: '<p>The meaning of life is 42.</p>'
        },
        stubs: ['svg-icon']
      })

      expect(wrapper.find(`${headingTag}.collapsible-section__header`).exists()).toBe(true)
    })
  }
  
  it('sets the heading of the collapsible section when set', () => {
    const wrapper = shallowMount(CollapsibleSection, {
      propsData: {
        heading: 'What is the meaning of life?',
        headingTag: 'h2',
        id: 'faq-1'
      },
      slots: {
        default: '<p>The meaning of life is 42.</p>'
      },
      stubs: ['svg-icon']
    })

    expect(wrapper.find('h2.collapsible-section__header').text()).toBe('What is the meaning of life?')
  })

  it('sets the id of the collapsible section', () => {
    const wrapper = shallowMount(CollapsibleSection, {
      propsData: {
        heading: 'What is the meaning of life?',
        headingTag: 'h2',
        id: 'faq-1'
      },
      slots: {
        default: '<p>The meaning of life is 42.</p>'
      },
      stubs: ['svg-icon']
    })

    expect(wrapper.find('div#collapsible-section-faq-1').exists()).toBe(true)
    expect(wrapper.find('button#collapsible-section-faq-1__header').exists()).toBe(true)
    expect(wrapper.find('button[aria-controls="collapsible-section-faq-1__panel"]').exists()).toBe(true)
    expect(wrapper.find('section#collapsible-section-faq-1__panel').exists()).toBe(true)
    expect(wrapper.find('section[aria-labelledby="collapsible-section-faq-1__header"]').exists()).toBe(true)
  })

  /**
   * Slots
   */

  it('sets the default slot', () => {
    const wrapper = shallowMount(CollapsibleSection, {
      propsData: {
        heading: 'What is the meaning of life?',
        headingTag: 'h2',
        id: 'faq-1'
      },
      slots: {
        default: '<p>The meaning of life is 42.</p>'
      },
      stubs: ['svg-icon']
    })

    expect(wrapper.find('div.collapsible-section__body-inner').text()).toBe('The meaning of life is 42.')
  })

  /**
   * Interactivity
   */

  it('can be opened and closed', async () => {
    const wrapper = shallowMount(CollapsibleSection, {
      propsData: {
        heading: 'What is the meaning of life?',
        headingTag: 'h2',
        id: 'faq-1'
      },
      slots: {
        default: '<p>The meaning of life is 42.</p>'
      },
      stubs: ['svg-icon']
    })

    expect(wrapper.find('button#collapsible-section-faq-1__header').attributes('aria-expanded')).toBe('false')
    expect(wrapper.find('section#collapsible-section-faq-1__panel').attributes('class')).toContain('collapsible-section__body--hidden')

    await wrapper.find('button#collapsible-section-faq-1__header').trigger('click')

    expect(wrapper.find('button#collapsible-section-faq-1__header').attributes('aria-expanded')).toBe('true')
    expect(wrapper.find('section#collapsible-section-faq-1__panel').attributes('class')).not.toContain('collapsible-section__body--hidden')

    await wrapper.find('button#collapsible-section-faq-1__header').trigger('click')

    expect(wrapper.find('button#collapsible-section-faq-1__header').attributes('aria-expanded')).toBe('false')
    expect(wrapper.find('section#collapsible-section-faq-1__panel').attributes('class')).toContain('collapsible-section__body--hidden')
  })
})
