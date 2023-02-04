<template>
  <component :is="props.url ? defineNuxtLink({}) : 'button'" class="btn" :to="props.url" :rel="props.url?.startsWith('http') || props.url?.startsWith('//') ? 'nofollow noopener' : undefined" v-bind="$attrs">
    <slot />
    <nuxt-icon v-if="props.icon" :name="props.icon" class="btn__icon" />
  </component>
</template>

<script lang="ts" setup>
const props = defineProps({
  url: {
    type: String,
    default: undefined
  },
  icon: {
    type: String,
    default: undefined
  }
});
</script>

<style lang="scss" scoped>
.btn {
  background-color: var(--color-accent);
  color: #000;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  border: none;
  font-size: var(--text-large);
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  outline-offset: 3px;
  user-select: none;

  &__icon {
    width: 1rem;
  }
}
</style>