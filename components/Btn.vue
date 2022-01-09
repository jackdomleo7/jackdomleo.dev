<template>
  <button v-if="!href" class="btn" :class="{ 'btn--square': square, 'btn--w100': fullWidth }" @click="$emit('click')">
    <slot />
  </button>
  <a v-else-if="href.startsWith('https://')" class="btn" :class="{ 'btn--square': square, 'btn--w100': fullWidth }" :href="href" target="_blank">
    <slot />
  </a>
  <nuxt-link v-else class="btn" :class="{ 'btn--square': square, 'btn--w100': fullWidth }" :to="href">
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Btn',
  props: {
    href: {
      type: String,
      default: undefined
    },
    square: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: var(--colour-primary);
  color: var(--colour-text-button);
  border-radius: 1.5rem;
  border: 1px solid var(--colour-primary);
  box-shadow: var(--shadow-standard);
  text-decoration: none;
  font-size: var(--text-large);
  font-weight: 700;
  padding: 0.75rem 2.5rem;
  max-width: 100%;
  cursor: pointer;
  transition: var(--standard-animation-timing);

  @media (min-width: $responsive-standard-tablet) {
    min-width: 15.625rem;
  }

  &--square {
    border-radius: 0.1875rem;
  }

  &--w100 {
    width: 100%;
  }

  &:active {
    box-shadow: none;
  }
}
</style>
