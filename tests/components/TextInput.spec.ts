import { mount, shallowMount } from '@vue/test-utils'
import { configureAxe, toHaveNoViolations } from 'jest-axe'
import TextInput from '@/components/TextInput.vue'

expect.extend(toHaveNoViolations)

const axe = configureAxe({
  rules: {
    region: { enabled: false } // Don't need to check because components are loaded in isolation
  }
})

describe('TextInput', () => {
  /**
   * Vue instance
   */

  it('is a Vue instance', () => {
    const wrapper = mount(TextInput, {
      propsData: {
        label: 'Newsletter',
        id: 'newsletter'
      }
    })

    expect(wrapper.vm).toBeTruthy()
  })

  /**
   * Snapshots
   */

  it('matches snapshot when mounted', () => {
    const wrapper = mount(TextInput, {
      propsData: {
        label: 'Newsletter',
        id: 'newsletter'
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  it('matches snapshot when shallow mounted', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Newsletter',
        id: 'newsletter'
      }
    })

    expect(wrapper.element).toMatchSnapshot()
  })

  /**
   * A11y
   */

  it('to have no obvious accessibility violations', async () => {
    const wrapper = mount(TextInput, {
      propsData: {
        label: 'Newsletter',
        id: 'newsletter'
      }
    })

    await expect(axe(wrapper.element)).resolves.toHaveNoViolations()
  })

  /**
   * Emitters
   */

  it('emits the change event on the input', async () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Newsletter',
        id: 'newsletter'
      }
    })

    await wrapper.find('input').trigger('change')

    expect(wrapper.emitted('change')).toBeTruthy()
  })

  it('emits the input event on the input', async () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Newsletter',
        id: 'newsletter'
      }
    })

    await wrapper.find('input').trigger('input')

    expect(wrapper.emitted('input')).toBeTruthy()
  })

  it('emits the blur event on the input', async () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Newsletter',
        id: 'newsletter'
      }
    })

    await wrapper.find('input').trigger('blur')

    expect(wrapper.emitted('blur')).toBeTruthy()
  })

  /**
   * v-model
   */

  it('should set its input element\'s value to string "Jack" when v-model equals string "Jack"', () => {
    const wrapper = mount({
      data: () => ({ userName: 'Jack' }),
      components: { TextInput },
      template: '<TextInput v-model="userName" label="Name" id="user-name" />'
    })

    expect((wrapper.find('input').element as HTMLInputElement).value).toBe('Jack')
  })

  it('should alter its input element\'s value to "Domleo" when the v-model value is changed from "Jack" to "Domleo"', async () => {
    const wrapper = mount({
      components: { TextInput },
      data: () => ({ name: 'Jack' }),
      template: '<TextInput v-model="name" label="Name" id="user-name" />'
    })

    const input = wrapper.find('input')

    expect((input.element as HTMLInputElement).value).toBe('Jack')

    await wrapper.setData({ name: 'Domleo' })

    expect((input.element as HTMLInputElement).value).toBe('Domleo')
  })

  /**
   * Props
   */

  it('sets the label to "Name" when set', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Name',
        id: 'name'
      }
    })

    expect(wrapper.find('label').text()).toBe('Name')
  })

  it('sets the id when set', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Name',
        id: 'name'
      }
    })

    expect(wrapper.find('label').attributes('for')).toBe('name')
    expect(wrapper.find('input').attributes('id')).toBe('name')
  })

  it('sets the type to "text" when type is not set', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Name',
        id: 'name'
      }
    })

    expect(wrapper.find('input').attributes('type')).toBe('text')
  })

  it('sets the type to "text" when type is set to "text"', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Name',
        id: 'name',
        type: 'text'
      }
    })

    expect(wrapper.find('input').attributes('type')).toBe('text')
  })

  it('sets the type to "email" when type is set to "email"', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Name',
        id: 'name',
        type: 'email'
      }
    })

    expect(wrapper.find('input').attributes('type')).toBe('email')
  })

  it('sets the inputmode to "text" when inputmode is set to "text"', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Name',
        id: 'name',
        inputmode: 'text'
      }
    })

    expect(wrapper.find('input').attributes('inputmode')).toBe('text')
  })

  it('sets the inputmode to "email" when inputmode is set to "email"', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Name',
        id: 'name',
        inputmode: 'email'
      }
    })

    expect(wrapper.find('input').attributes('inputmode')).toBe('email')
  })

  it('renders a required input', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Name',
        id: 'name',
        required: true
      }
    })

    expect(wrapper.find('label').text()).toContain('*')
    expect(wrapper.find('label').text()).toContain('(required)')
    expect(wrapper.find('input').attributes('required')).toBe('required')
  })
  

  it('renders a required input with a hidden asterisk', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Name',
        id: 'name',
        required: true,
        hideRequiredAsterisk: true
      }
    })

    expect(wrapper.find('label').text()).not.toContain('*')
    expect(wrapper.find('label').text()).toContain('(required)')
    expect(wrapper.find('input').attributes('required')).toBe('required')
  })

  it('sets the name attribute on the input', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Name',
        id: 'name',
        name: 'first-name'
      }
    })

    expect(wrapper.find('input').attributes('name')).toBe('first-name')
  })

  it('sets the placeholder attribute on the input', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Email',
        id: 'email',
        placeholder: 'test@example.com'
      }
    })

    expect(wrapper.find('input').attributes('placeholder')).toBe('test@example.com')
  })

  it('sets the autocomplete attribute on the input', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Email',
        id: 'email',
        autocomplete: 'email'
      }
    })

    expect(wrapper.find('input').attributes('autocomplete')).toBe('email')
  })

  it('renders help text when set', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Newsletter',
        id: 'newsletter',
        type: 'email',
        helpText: 'No spam. Unsubscribe anytime.'
      }
    })

    expect(wrapper.find('p.text-input__help').text()).toBe('No spam. Unsubscribe anytime.')
  })

  it('renders an error state and an error message', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Newsletter',
        id: 'newsletter',
        type: 'email',
        errorMsg: 'Please provide a valid email'
      }
    })

    expect(wrapper.find('p#newsletter--error').text()).toBe('Please provide a valid email')
    expect(wrapper.find('p#newsletter--error').attributes('role')).toBe('alert')
    expect(wrapper.find('p#newsletter--error').attributes('aria-hidden')).toBe('false')
    expect(wrapper.find('span.text-input__entry').classes()).toContain('text-input__entry--error')
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('true')
    expect(wrapper.find('input').attributes('aria-describedby')).toBe('newsletter--error')
  })

  it('renders a normal state when no error message is set', () => {
    const wrapper = shallowMount(TextInput, {
      propsData: {
        label: 'Newsletter',
        id: 'newsletter',
        type: 'email'
      }
    })

    expect(wrapper.find('p#newsletter--error').text()).toBe('')
    expect(wrapper.find('p#newsletter--error').attributes('role')).toBeUndefined()
    expect(wrapper.find('p#newsletter--error').attributes('aria-hidden')).toBe('true')
    expect(wrapper.find('span.text-input__entry').classes()).not.toContain('text-input__entry--error')
    expect(wrapper.find('input').attributes('aria-invalid')).toBe('false')
    expect(wrapper.find('input').attributes('aria-describedby')).toBeUndefined()
  })
})
