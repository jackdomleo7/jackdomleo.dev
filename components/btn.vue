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

<style lang="scss">
:root {
  --btn-shadow-color: var(--color-orange-deep);
}

.theme--light {
  --btn-shadow-color: var(--color-orange-faint);
}
</style>

<style lang="scss" scoped>
.btn {
  border: none;
  background: linear-gradient(45deg, var(--color-orange-deep), var(--color-orange-light));
  color: var(--color-white);
  padding: 0.8rem 1.3rem;
  border-radius: 0.6rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: all 160ms ease;
  box-shadow: 0 6px 15px -2px var(--btn-shadow-color);

  &:hover {
    background: linear-gradient(-45deg, var(--color-orange-deep), var(--color-orange-light));
  }
}
</style>
