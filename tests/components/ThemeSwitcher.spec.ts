import { mount, shallowMount } from '@vue/test-utils'
import { configureAxe, toHaveNoViolations } from 'jest-axe'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

expect.extend(toHaveNoViolations)

const axe = configureAxe({
  rules: {
    region: { enabled: false } // Don't need to check because components are loaded in isolation
  }
})

describe('ThemeSwitcher', () => {
  /**
   * Vue instance
   */

  it('is a Vue instance', () => {
    const wrapper = mount(ThemeSwitcher, {
      mocks: {
        $colorMode: {
          preference: 'system'
        }
      },
      propsData: {
        id: 'mobile-theme-switcher'
      },
      stubs: ['svg-icon']
    })

    expect(wrapper.vm).toBeTruthy()
  })

  /**
   * Snapshots
   */

  it('matches snapshot when mounted', () => {
    const wrapper = mount(ThemeSwitcher, {
      mocks: {
        $colorMode: {
          preference: 'system'
        }
      },
      propsData: {
        id: 'mobile-theme-switcher'
      },
      stubs: ['svg-icon']
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('matches snapshot when shallow mounted', () => {
    const wrapper = shallowMount(ThemeSwitcher, {
      mocks: {
        $colorMode: {
          preference: 'system'
        }
      },
      propsData: {
        id: 'mobile-theme-switcher'
      },
      stubs: ['svg-icon']
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  /**
   * A11y
   */

  it('to have no obvious accessibility violations', async () => {
    const wrapper = mount(ThemeSwitcher, {
      mocks: {
        $colorMode: {
          preference: 'system'
        }
      },
      propsData: {
        id: 'mobile-theme-switcher'
      },
      stubs: ['svg-icon']
    })

    await expect(axe(wrapper.element)).resolves.toHaveNoViolations()
  })

  /**
   * Props
   */

  it('renders the id', () => {
    const wrapper = mount(ThemeSwitcher, {
      mocks: {
        $colorMode: {
          preference: 'system'
        }
      },
      propsData: {
        id: 'mobile-theme-switcher'
      },
      stubs: ['svg-icon']
    })

    expect(wrapper.find('input#mobile-theme-switcher-theme-system[name="mobile-theme-switcher-theme"]').exists()).toBe(true)
    expect(wrapper.find('label[for="mobile-theme-switcher-theme-system"]').exists()).toBe(true)
    expect(wrapper.find('input#mobile-theme-switcher-theme-light[name="mobile-theme-switcher-theme"]').exists()).toBe(true)
    expect(wrapper.find('label[for="mobile-theme-switcher-theme-light"]').exists()).toBe(true)
    expect(wrapper.find('input#mobile-theme-switcher-theme-dark[name="mobile-theme-switcher-theme"]').exists()).toBe(true)
    expect(wrapper.find('label[for="mobile-theme-switcher-theme-dark"]').exists()).toBe(true)
  })
})
