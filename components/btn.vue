<template>
  <button class="btn" @click="click">
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component
export default class Btn extends Vue {
  @Emit()
  public click () {}
}
</script>

<style lang="scss" scoped>
.btn {
  border: 2px solid var(--color-orange);
  background: var(--body-background);
  padding: 0.9rem 1.4rem;
  border-radius: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: all 280ms ease;

  &:hover {
    background: var(--color-orange);
    color: var(--color-white);
  }
}
</style>
