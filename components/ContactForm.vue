<template>
  <form method="POST" :name="formName" data-netlify="true" :netlify-honeypot="honeypotField">
    <div class="contact">
      <input type="hidden" name="form-name" :value="formName">
      <div style="display: none">
        <label :for="honeypotField">
          Do not fill out this field if you are human!
        </label>
        <input :id="honeypotField" :name="honeypotField">
      </div>
      <FormTextInput
        v-model="contactForm.name"
        label="Name"
        for-id="contact-name"
        placeholder="Mickey Mouse"
        autocomplete="name"
        name="name"
        type="text"
        inputmode="text"
        icon="user"
        required
        :error-msg="$v.contactForm.name.$dirty && $v.contactForm.name.$invalid ? 'This field is required' : undefined"
        @change="autosave"
        @input="touch('name')"
        @blur="touch('name')"
      />
      <FormTextInput
        v-model="contactForm.email"
        label="Email"
        for-id="contact-email"
        placeholder="mickey.mouse@example.com"
        autocomplete="email"
        name="email"
        type="email"
        inputmode="email"
        icon="email"
        required
        :error-msg="$v.contactForm.email.$dirty && $v.contactForm.email.$invalid ? 'This field is required' : undefined"
        @change="autosave"
        @input="touch('email')"
        @blur="touch('email')"
      />
      <FormTextInput
        v-model="contactForm.message"
        label="Message"
        for-id="contact-message"
        placeholder="Greetings Jack! I hope you are doing swell..."
        name="message"
        type="text"
        inputmode="text"
        icon="pencil"
        required
        multiline
        :error-msg="$v.contactForm.message.$dirty && $v.contactForm.message.$invalid ? 'This field is required' : undefined"
        @change="autosave"
        @input="touch('message')"
        @blur="touch('message')"
      />
      <button class="btn" type="submit" :disabled="$v.contactForm.$invalid" :aria-label="$v.contactForm.$invalid ? 'Some required fields are missing' : undefined" :data-cooltipz-dir="$v.contactForm.$invalid ? 'left' : undefined">
        Send
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'

import { email, required } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

interface IContactForm {
  name: string;
  email: string;
  message: string;
}

export default Vue.extend({
  name: 'ContactForm',
  mixins: [validationMixin],
  validations: {
    contactForm: {
      name: {
        required
      },
      email: {
        email,
        required
      },
      message: {
        required
      }
    }
  },
  data() {
    return {
      formName: 'contact',
      honeypotField: 'bot-field',
      contactForm: {
        name: '',
        email: '',
        message: ''
      } as IContactForm
    }
  },
  mounted(): void {
    this.getAutosave()
  },
  methods: {
    getAutosave (): void {
      const data = sessionStorage.getItem('autosave')

      if (data) {
        this.contactForm = JSON.parse(data)
      }
    },
    autosave (): void {
      sessionStorage.setItem('autosave', JSON.stringify(this.contactForm))
    },
    touch (formField: string): void {
      return this.$v.contactForm[formField]!.$touch()
    }
  }
})
</script>

<style lang="scss">
:root {
  --contact-border: var(--body-color);
  --contact-placeholder: var(--base-grey-middle);
}

.theme--dark {
  --contact-placeholder: var(--base-grey-lighter);
}
</style>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button[type="submit"] {
    align-self: flex-end;
  }
}

.btn {
  border: 2px solid currentColor;
  background-color: transparent;
  border-radius: 0.5rem;
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  transition: background-color 160ms ease;

  &:not( [disabled] ) {
    &:hover,
    &:focus {
      background-color: var(--base-orange);
    }
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
}
</style>
