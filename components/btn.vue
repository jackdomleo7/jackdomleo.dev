<template>
  <nuxt-link v-if="to" class="btn" :to="to">
    <slot />
  </nuxt-link>
  <a v-else-if="href" class="btn" :href="href" rel="nofollow noopener" target="_blank">
    <slot />
  </a>
  <input v-else-if="input" class="btn">
  <button v-else class="btn" :class="showIconOnHover ? 'btn--show-icon-on-hover' : ''" @click="click">
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

  @Prop({ type: Boolean, default: false })
  private readonly showIconOnHover!: boolean;

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

  &--show-icon-on-hover {
    position: relative;
    padding-right: 2.5rem;

    svg {
      height: 1.1rem;
      width: 1.1rem;
      position: absolute;
      top: 50%;
      right: 0.6rem;
      transform: translate(-50%, -50%);
    }

    @media (hover: hover) {
      padding-right: 1.4rem;

      svg {
        opacity: 0;
      }

      &:hover {
        padding-right: 2.5rem;

        svg {
          opacity: 1;
          color: var(--color-white);
        }
      }
    }
  }
}
</style>
