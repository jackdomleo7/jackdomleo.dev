<template>
  <footer class="footer">
    <form
      v-if="showNewsletterSubscribe"
      id="mc-embedded-subscribe-form"
      class="footer__subscribe"
      action="https://dev.us10.list-manage.com/subscribe/post?u=5db0c80170083cdaab0b17f84&amp;id=2f05546818"
      method="post"
      name="mc-embedded-subscribe-form"
      target="_blank"
      novalidate
    >
      <TextInput
        id="mce-EMAIL"
        v-model="newsletter.email"
        class="footer__subscribe-input"
        type="email"
        name="EMAIL"
        label="Newsletter"
        placeholder="Enter your email"
        help-text="No spam. Unsubscribe anytime."
        required
        hide-required-asterisk
        :error-msg="$v.newsletter.email.$dirty && $v.newsletter.email.$invalid ? 'Please provide a valid email' : undefined"
        @input="touch('email')"
        @blur="touch('email')"
      />
      <Btn class="footer__subscribe-btn" square type="submit" :disabled="$v.newsletter.$invalid" :aria-label="$v.newsletter.$invalid ? 'Please provide a valid email before subscribing' : undefined">
        Subscribe
      </Btn>
    </form>
    <nuxt-img src="~assets/images/j-icon.svg" alt="" class="footer__logo" />
    <ul class="footer__quick-links">
      <li v-for="quickLink in quickLinks" :key="quickLink.url">
        <a v-if="quickLink.url.startsWith('https://')" :href="quickLink.url" rel="noopener">
          {{ quickLink.text }}
        </a>
        <nuxt-link v-else :to="quickLink.url">
          {{ quickLink.text }}
        </nuxt-link>
      </li>
    </ul>
    <ul class="footer__social">
      <li v-for="socialLink in socialLinks" :key="socialLink.url">
        <a :href="socialLink.url" target="_blank" rel="noopener noreferrer">
          <svg-icon :name="socialLink.icon" />
          <span class="sr-only">{{ socialLink.text }}</span>
        </a>
      </li>
    </ul>
    <p class="footer__legal">
      &copy;{{ new Date().getFullYear() }}<br class="footer__legal-br" /> All rights reserved.<br class="footer__legal-br" /> Jack Domleo
    </p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { email, required } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import TextInput from '../TextInput.vue'
import Btn from '../Btn.vue'

interface IQuickLink {
  text: string;
  url: string;
}

interface ISocialLink {
  text: string;
  url: string;
  icon: 'twitter' | 'linkedin' | 'github' | 'codepen'
}

export default Vue.extend({
  name: 'SiteFooter',
  components: { TextInput, Btn },
  mixins: [validationMixin],
  validations: {
    newsletter: {
      email: {
        email,
        required
      }
    }
  },
  data () {
    return {
      showNewsletterSubscribe: false,
      newsletter: {
        email: ''
      }
    }
  },
  computed: {
    quickLinks (): IQuickLink[] {
      return [
        {
          text: 'Home',
          url: '/'
        },
        {
          text: 'Projects',
          url: '/projects'
        },
        {
          text: 'Blog',
          url: '/blog'
        },
        {
          text: 'Book',
          url: '/products/level-up-your-career-today-developer-edition'
        }
      ]
    },
    socialLinks (): ISocialLink[] {
      return [
        {
          text: 'Twitter',
          url: 'https://twitter.com/jackdomleo7',
          icon: 'twitter'
        },
        {
          text: 'LinkedIn',
          url: 'https://linkedin.com/in/jackdomleo7/',
          icon: 'linkedin'
        },
        {
          text: 'GitHub',
          url: 'https://github.com/jackdomleo7',
          icon: 'github'
        },
        {
          text: 'CodePen',
          url: 'https://codepen.io/jackdomleo7',
          icon: 'codepen'
        }
      ]
    }
  },
  methods: {
    touch (formField: string): void {
      return this.$v.newsletter[formField]!.$touch()
    }
  }
})
</script>

<style lang="scss" scoped>
.footer {
  max-width: 32rem;
  min-width: 100%;
  margin-top: 8rem;
  margin-inline: auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;

  @media (min-width: $responsive-small-tablet) {
    padding-inline: 2rem;
    min-width: 32rem;
  }

  &__subscribe {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 4rem;

    @media (min-width: $responsive-small-tablet) {
      flex-direction: row;
      margin-bottom: 7.5rem;
    }

    &-input {
      flex: 1;
    }

    &-btn {
      min-width: unset;

      @media (min-width: $responsive-small-tablet) {
        position: relative;
        top: 2.125rem;
      }
    }
  }

  &__logo {
    width: 3.625rem;
    margin-inline: auto;
  }

  &__quick-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    list-style-type: none;
    padding-left: 0;
    margin-block: 1.5rem;

    @media (min-width: $responsive-small-tablet) {
      gap: 1rem;
    }

    a {
      color: var(--colour-text-primary);
    }
  }

  &__social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    list-style-type: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 1.5rem;

    a {
      display: grid;
      place-items: center;
      border-radius: 50%;
      overflow: hidden;
      background-color: var(--colour-background);
      border: 1px solid var(--colour-text-primary);
      transition: all var(--standard-animation-timing) ease;
      padding: 0.375rem;
      color: var(--colour-text-primary);
      width: 2.5rem;
      aspect-ratio: auto 1 / 1;

      &:hover,
      &:focus {
        box-shadow: var(--shadow-standard);
      }
    }
  }

  &__legal {
    text-align: center;
    margin-block: 0;
    line-height: 1.3;

    @media (min-width: $responsive-small-tablet) {
      line-height: unset;
    }

    &-br {
      @media (min-width: $responsive-small-tablet) {
        display: none;
      }
    }
  }
}
</style>
