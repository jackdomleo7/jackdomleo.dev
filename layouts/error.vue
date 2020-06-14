<template>
  <div class="error">
    <h1 v-if="error.statusCode === 404">
      Page not found 😭
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <nuxt-link to="/">
      Home page
    </nuxt-link>
    <div class="img" :aria-label="error.statusCode === 404 ? 'I think you\'re lost!' : 'Something went wrong...'" data-cooltipz-dir="top" data-cooltipz-visible>
      <img src="/img/shrug.png" alt="Shrugging shoulders">
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class Error extends Vue {
  @Prop() private readonly error!: string;
}
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .img {
    --cooltipz-bg-color: #fff;
    --cooltipz-text-color: var(--color-grey-dark);
    --cooltipz-cursor: help;
    height: 15rem;
    margin-top: 4rem;

    img {
      height: 100%;
    }
  }
}
</style>
