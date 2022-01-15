<template>
  <button v-if="!href" class="btn" :class="{ 'btn--square': square }" :type="type" @click="$emit('click')">
    <slot />
  </button>
  <a v-else-if="href.startsWith('https://') || href.startsWith('#')" class="btn" :class="{ 'btn--square': square }" :href="href" target="_blank" @click="$emit('click')">
    <slot />
  </a>
  <nuxt-link v-else class="btn" :class="{ 'btn--square': square }" :to="href" @click="$emit('click')">
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
    type: {
      type: String,
      default: 'button',
      validator: (value: string): boolean => {
        return ['button', 'submit', 'reset'].includes(value)
      }
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
  height: 3rem;
  max-width: 100%;
  cursor: pointer;
  transition: var(--standard-animation-timing);

  @media (min-width: $responsive-standard-tablet) {
    min-width: 15.625rem;
  }

  &--square {
    border-radius: 0.1875rem;
    padding-inline: 1.5rem;
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
}
</style>
