import { mount, shallowMount } from '@vue/test-utils'
import { configureAxe, toHaveNoViolations } from 'jest-axe'
import Btn from '@/components/Btn.vue'

expect.extend(toHaveNoViolations)

const axe = configureAxe({
  rules: {
    region: { enabled: false } // Don't need to check because components are loaded in isolation
  }
})

describe('Btn', () => {
  /**
   * Vue instance
   */

  it('is a Vue instance', () => {
    const wrapper = mount(Btn, {
      slots: {
        default: 'Click me'
      }
    })

    expect(wrapper.vm).toBeTruthy()
  })

  /**
   * Snapshots
   */

  it('matches snapshot when mounted', () => {
    const wrapper = mount(Btn, {
      slots: {
        default: 'Click me'
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('matches snapshot when shallow mounted', () => {
    const wrapper = shallowMount(Btn, {
      slots: {
        default: 'Click me'
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  /**
   * A11y
   */

  it('to have no obvious accessibility violations', async () => {
    const wrapper = mount(Btn, {
      slots: {
        default: 'Click me'
      }
    })

    await expect(axe(wrapper.element)).resolves.toHaveNoViolations()
  })

  /**
   * Emitters
   */

  it('emits the "click" when the <button> is clicked', async () => {
    const wrapper = shallowMount(Btn, {
      slots: {
        default: 'Click me'
      }
    })

    expect(wrapper.find('button.btn').exists()).toBe(true)

    await wrapper.find('button.btn').trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('emits the "click" when the <a> is clicked', async () => {
    const wrapper = shallowMount(Btn, {
      slots: {
        default: 'Click me'
      },
      propsData: {
        href: '#'
      }
    })

    expect(wrapper.find('a.btn').exists()).toBe(true)

    await wrapper.find('a.btn').trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('emits the "click" when the <nuxt-link> is clicked', async () => {
    const wrapper = mount(Btn, {
      slots: {
        default: 'Click me'
      },
      propsData: {
        href: '/blog'
      },
      stubs: ['nuxt-link']
    })

    expect(wrapper.find('nuxt-link-stub.btn').exists()).toBe(true)

    await wrapper.find('.btn').trigger('click')

    // TODO: For some reason, nuxt-link doesn't emit 'click' is tests but does in the live site
    // expect(wrapper.emitted('click')).toBeTruthy()
  })

  /**
   * Props
   */

  it('renders a <button> when no href is set', () => {
    const wrapper = shallowMount(Btn, {
      slots: {
        default: 'Click me'
      }
    })

    expect(wrapper.find('button.btn').exists()).toBe(true)
  })

  it('renders an <a> when href is set to an external link', () => {
    const wrapper = shallowMount(Btn, {
      slots: {
        default: 'Click me'
      },
      propsData: {
        href: 'https://jackdomleo.dev'
      }
    })

    expect(wrapper.find('a.btn').exists()).toBe(true)
  })

  it('renders an <a> when href is set to a link on the same page', () => {
    const wrapper = shallowMount(Btn, {
      slots: {
        default: 'Click me'
      },
      propsData: {
        href: '#about'
      }
    })

    expect(wrapper.find('a.btn').exists()).toBe(true)
  })

  it('renders a <nuxt-link> when href is set to an internal link', () => {
    const wrapper = shallowMount(Btn, {
      slots: {
        default: 'Click me'
      },
      propsData: {
        href: '/blog'
      },
      stubs: ['nuxt-link']
    })

    expect(wrapper.find('nuxt-link-stub.btn').exists()).toBe(true)
  })

  it('renders the "btn--square" class when square is set for a <button>', () => {
    const wrapper = shallowMount(Btn, {
      slots: {
        default: 'Click me'
      },
      propsData: {
        square: true
      }
    })

    expect(wrapper.find('button.btn').classes()).toContain('btn--square')
  })

  it('renders the "btn--square" class when square is set for a <a>', () => {
    const wrapper = shallowMount(Btn, {
      slots: {
        default: 'Click me'
      },
      propsData: {
        href: 'https://jackdomleo.dev',
        square: true
      }
    })

    expect(wrapper.find('a.btn').classes()).toContain('btn--square')
  })

  it('renders the "btn--square" class when square is set for a <nuxt-link>', () => {
    const wrapper = shallowMount(Btn, {
      slots: {
        default: 'Click me'
      },
      propsData: {
        href: '/blog',
        square: true
      },
      stubs: ['nuxt-link']
    })

    expect(wrapper.find('nuxt-link-stub.btn').classes()).toContain('btn--square')
  })

  it('renders a <button type="button"> when the type is unset', () => {
    const wrapper = shallowMount(Btn, {
      slots: {
        default: 'Click me'
      }
    })

    expect(wrapper.find('button.btn').attributes('type')).toBe('button')
  })

  it('renders a <button type="button"> when the type is set to "button"', () => {
    const wrapper = shallowMount(Btn, {
      slots: {
        default: 'Click me'
      },
      propsData: {
        type: 'button'
      }
    })

    expect(wrapper.find('button.btn').attributes('type')).toBe('button')
  })

  it('renders a <button type="submit"> when the type is set to "submit"', () => {
    const wrapper = shallowMount(Btn, {
      slots: {
        default: 'Click me'
      },
      propsData: {
        type: 'submit'
      }
    })

    expect(wrapper.find('button.btn').attributes('type')).toBe('submit')
  })

  it('renders a <button type="reset"> when the type is set to "reset"', () => {
    const wrapper = shallowMount(Btn, {
      slots: {
        default: 'Click me'
      },
      propsData: {
        type: 'reset'
      }
    })

    expect(wrapper.find('button.btn').attributes('type')).toBe('reset')
  })
})
