import { mount, shallowMount } from '@vue/test-utils'
import { configureAxe, toHaveNoViolations } from 'jest-axe'
import Codepen from '@/components/Codepen.vue'

expect.extend(toHaveNoViolations)

const axe = configureAxe({
  rules: {
    region: { enabled: false } // Don't need to check because components are loaded in isolation
  }
})

describe('Codepen', () => {
  /**
   * Vue instance
   */

  it('is a Vue instance', () => {
    const wrapper = mount(Codepen, {
      propsData: {
        slugHash: 'wvoYjNP',
        penTitle: 'Custom car colour preview'
      }
    })

    expect(wrapper.vm).toBeTruthy()
  })

  /**
   * Snapshots
   */

  it('matches snapshot when mounted', () => {
    const wrapper = mount(Codepen, {
      propsData: {
        slugHash: 'wvoYjNP',
        penTitle: 'Custom car colour preview'
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('matches snapshot when shallow mounted', () => {
    const wrapper = shallowMount(Codepen, {
      propsData: {
        slugHash: 'wvoYjNP',
        penTitle: 'Custom car colour preview'
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  /**
   * A11y
   */

  it('to have no obvious accessibility violations', async () => {
    const wrapper = mount(Codepen, {
      propsData: {
        slugHash: 'wvoYjNP',
        penTitle: 'Custom car colour preview'
      }
    })

    await expect(axe(wrapper.element)).resolves.toHaveNoViolations()
  })

  /**
   * Props
   */

  it('sets to preview mode', () => {
    const wrapper = shallowMount(Codepen, {
      propsData: {
        slugHash: 'wvoYjNP',
        penTitle: 'Custom car colour preview',
        clickToLoad: true
      }
    })

    expect(wrapper.find('p.codepen').attributes('data-preview')).toBe('true')
  })
})
