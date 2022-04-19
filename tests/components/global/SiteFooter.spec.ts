import MockDate from 'mockdate'
import { mount, shallowMount } from '@vue/test-utils'
import { configureAxe, toHaveNoViolations } from 'jest-axe'
import SiteFooter from '@/components/global/SiteFooter.vue'

expect.extend(toHaveNoViolations)

const axe = configureAxe({
  rules: {
    region: { enabled: false } // Don't need to check because components are loaded in isolation
  }
})

describe('SiteFooter', () => {
  /**
   * Vue instance
   */

  it('is a Vue instance', () => {
    const wrapper = mount(SiteFooter, {
      stubs: ['nuxt-link', 'svg-icon', 'nuxt-img']
    })

    expect(wrapper.vm).toBeTruthy()
  })

  /**
   * Snapshots
   */

  it('matches snapshot when mounted', () => {
    const wrapper = mount(SiteFooter, {
      stubs: ['nuxt-link', 'svg-icon', 'nuxt-img']
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('matches snapshot when shallow mounted', () => {
    const wrapper = shallowMount(SiteFooter, {
      stubs: ['nuxt-link', 'svg-icon', 'nuxt-img']
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  /**
   * A11y
   */

  it('to have no obvious accessibility violations', async () => {
    const wrapper = mount(SiteFooter, {
      stubs: ['nuxt-link', 'svg-icon', 'nuxt-img']
    })

    await expect(axe(wrapper.element)).resolves.toHaveNoViolations()
  })

  /**
   * Interactivity
   */

  // Skipped while newsletter signup is hidden
  it.skip('enables the "Subscibe" button when a valid email is entered into the Newsletter input', async () => {
    const wrapper = mount(SiteFooter, {
      stubs: ['nuxt-link', 'svg-icon', 'nuxt-img']
    })

    expect(wrapper.find('button.footer__subscribe-btn').attributes('disabled')).toBe('disabled')

    await wrapper.find('input#mce-EMAIL').setValue('test@example.com')

    expect(wrapper.find('button.footer__subscribe-btn').attributes('disabled')).toBeUndefined()

    await wrapper.find('input#mce-EMAIL').setValue('test@example')

    expect(wrapper.find('button.footer__subscribe-btn').attributes('disabled')).toBe('disabled')

    await wrapper.find('input#mce-EMAIL').setValue('')

    expect(wrapper.find('button.footer__subscribe-btn').attributes('disabled')).toBe('disabled')
  })

  /**
   * Misc
   */

  it('shows the correct year in the legal text', () => {
    MockDate.set('2022-01-01')

    const year = 2022

    const wrapper = mount(SiteFooter, {
      stubs: ['nuxt-link', 'svg-icon', 'nuxt-img']
    })

    expect(wrapper.find('p.footer__legal').text()).toContain(String(year))
  })
})
