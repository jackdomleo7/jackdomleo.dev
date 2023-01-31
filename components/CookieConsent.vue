<template>
  <div class="cookies" role="region">
    <h2 class="cookies__title">Cookies & Privacy</h2>
    <p class="cookies__content">
      I use analytics to track website usage. Read my <nuxt-link to="/privacy-policy" class="link">Privacy Policy</nuxt-link> to find out more.
    </p>
    <div class="cookies__btns">
      <button class="link" @click="reject()">Reject</button>
      <Btn icon="cookie" @click="enable()">Allow</Btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { bootstrap } from 'vue-gtag'
import cookie from 'cookiejs';
import Btn from './Btn.vue';

const $emit = defineEmits(['close'])

function enable() {
  bootstrap().then(() => {
    // GDPR states we can only keep the user's consent for up to 1 year
    cookie.set('analyticsConsented', 'true', { expires: 365, sameSite: 'Strict' })
    $emit('close')
  })
}

function reject() {
  // GDPR guidelines advise asking for consent again after 6 months
  cookie.set('analyticsConsented', 'false', { expires: 183, sameSite: 'Strict' })
  $emit('close')
}
</script>

<style lang="scss" scoped>
.cookies {
  position: fixed;
  z-index: 999;
  bottom: 0;
  width: 100%;
  background-color: var(--color-bg);
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  padding: 1rem;

  @media (min-width: $responsive-large-mobile) {
    right: 1rem;
    bottom: 1rem;
    width: unset;
    max-width: 30rem;
  }

  &__title {
    margin-top: 0;
    font-size: var(--text-heading);
  }

  &__content {
    font-size: var(--text-body);
    margin-block: 1rem;
  }

  &__btns {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    button {
      --link-color: var(--color-primary);
      text-decoration: none;
    }
  }
}
</style>