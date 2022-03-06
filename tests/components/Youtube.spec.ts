import { mount, shallowMount } from '@vue/test-utils'
import { configureAxe, toHaveNoViolations } from 'jest-axe'
import Youtube from '@/components/Youtube.vue'

expect.extend(toHaveNoViolations)

const axe = configureAxe({
  rules: {
    region: { enabled: false } // Don't need to check because components are loaded in isolation
  }
})

describe('Youtube', () => {
  /**
   * Vue instance
   */

  it('is a Vue instance', () => {
    const wrapper = mount(Youtube, {
      propsData: {
        urlHash: 'wKbU8B-QVZk',
        videoTitle: "I Can't Believe You've Done This"
      }
    })

    expect(wrapper.vm).toBeTruthy()
  })

  /**
   * Snapshots
   */

  it('matches snapshot when mounted', () => {
    const wrapper = mount(Youtube, {
      propsData: {
        urlHash: 'wKbU8B-QVZk',
        videoTitle: "I Can't Believe You've Done This"
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('matches snapshot when shallow mounted', () => {
    const wrapper = shallowMount(Youtube, {
      propsData: {
        urlHash: 'wKbU8B-QVZk',
        videoTitle: "I Can't Believe You've Done This"
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  /**
   * A11y
   */

  it('to have no obvious accessibility violations', async () => {
    const wrapper = mount(Youtube, {
      propsData: {
        urlHash: 'wKbU8B-QVZk',
        videoTitle: "I Can't Believe You've Done This"
      }
    })

    await expect(axe(wrapper.element)).resolves.toHaveNoViolations()
  })
})
