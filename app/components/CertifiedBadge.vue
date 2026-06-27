<template>
  <nuxt-link
    :to="certificationUrl"
    external
    target="_blank"
    rel="noopener noreferrer"
    class="certified-badge cooltipz--top"
    :aria-label="`${title} - ✓ Certified`"
  >
    <Icon name="custom:star" mode="svg" class="certified-badge__icon" />
    <span class="sr-only">{{ title }}Certified - View certificate</span>
  </nuxt-link>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  certificationUrl: string
}>();
</script>

<style lang="scss" scoped>
.certified-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;
  margin: -0.625rem 0 0 -0.375rem;

  &:hover,
  &:focus-visible {
    transform: scale(1.2);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
    border-radius: 2px;
  }

  &__icon {
    height: 1.125rem;
    width: 1.125rem;
    color: var(--color-accent);

    @media (min-width: $responsive-large-tablet) {
      height: 1.25rem;
      width: 1.25rem;
    }
  }
}
</style>
