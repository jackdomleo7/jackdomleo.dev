<template>
  <nuxt-link v-if="to" class="btn" :to="to">
    <slot />
  </nuxt-link>
  <a v-else-if="href" class="btn" :href="href" rel="nofollow noopener" target="_blank">
    <slot />
  </a>
  <input v-else-if="input" class="btn">
  <button v-else class="btn" @click="click">
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';

@Component
export default class Btn extends Vue {
  @Prop({ type: String })
  private readonly to!: string;

  @Prop({ type: String })
  private readonly href!: string;

  @Prop({ type: Boolean, default: false })
  private readonly input!: boolean;

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
  text-decoration: none;
  color: var(--body-color);
  min-width: 7rem;

  &:hover {
    background: var(--color-orange);
    color: var(--color-white);
  }
}
</style>
