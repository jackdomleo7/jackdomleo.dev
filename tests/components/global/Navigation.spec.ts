import { mount, shallowMount } from '@vue/test-utils'
import { configureAxe, toHaveNoViolations } from 'jest-axe'
import Navigation from '@/components/global/Navigation.vue'

expect.extend(toHaveNoViolations)

const axe = configureAxe({
  rules: {
    region: { enabled: false } // Don't need to check because components are loaded in isolation
  }
})

describe('Navigation', () => {
  /**
   * Vue instance
   */

  it('is a Vue instance', () => {
    const wrapper = mount(Navigation, {
      attachTo: document.body,
      mocks: {
        $colorMode: {
          preference: 'system'
        }
      },
      stubs: ['nuxt-link', 'svg-icon', 'nuxt-img']
    })

    expect(wrapper.vm).toBeTruthy()

    wrapper.destroy()
  })

  /**
   * Snapshots
   */

  it('matches snapshot when mounted', () => {
    const wrapper = mount(Navigation, {
      attachTo: document.body,
      mocks: {
        $colorMode: {
          preference: 'system'
        }
      },
      stubs: ['nuxt-link', 'svg-icon', 'nuxt-img']
    })

    expect(wrapper.element).toMatchSnapshot()

    wrapper.destroy()
  })

  it('matches snapshot when shallow mounted', () => {
    const wrapper = shallowMount(Navigation, {
      attachTo: document.body,
      stubs: ['nuxt-link', 'svg-icon', 'nuxt-img']
    })

    expect(wrapper.element).toMatchSnapshot()

    wrapper.destroy()
  })

  /**
   * A11y
   */

  // ! FIX: For some reason, ul li[hidden="hidden"] is inaccessible 🤔
  it.skip('to have no obvious accessibility violations', async () => {
    const wrapper = mount(Navigation, {
      attachTo: document.body,
      mocks: {
        $colorMode: {
          preference: 'system'
        }
      },
      stubs: ['nuxt-link', 'svg-icon', 'nuxt-img']
    })

    await expect(axe(wrapper.element)).resolves.toHaveNoViolations()

    wrapper.destroy()
  })

  /**
   * Interactivity
   */

  it('shows the "More" nav list when the hamburger is pressed on mobile', async () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    })

    window.dispatchEvent(new Event('resize'))

    const wrapper = shallowMount(Navigation, {
      attachTo: document.body,
      stubs: ['nuxt-link', 'svg-icon', 'nuxt-img']
    })

    expect(wrapper.find('ul.nav__more').classes()).not.toContain('nav__more--mobile-open')

    await wrapper.find('button.nav__hamburger').trigger('click')

    expect(wrapper.find('ul.nav__more').classes()).toContain('nav__more--mobile-open')

    await wrapper.find('button.nav__hamburger').trigger('click')

    expect(wrapper.find('ul.nav__more').classes()).not.toContain('nav__more--mobile-open')

    wrapper.destroy()
  })
})
