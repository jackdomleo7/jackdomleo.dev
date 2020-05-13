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
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

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
}
</style>
