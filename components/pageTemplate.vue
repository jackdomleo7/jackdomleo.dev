<template>
  <div class="page">
    <h1>
      {{ pageTitle }}
    </h1>
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class PageTemplate extends Vue {
  @Prop({
    type: String,
    required: true
  })
  private readonly pageTitle!: string;
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.8rem;
  }

  @media screen and (min-width: 30em) {
    h1 {
      font-size: 2.2rem;
    }
  }
}
</style>
