<template>
  <div class="app">
    <navbar />
    <main class="app__main">
      <nuxt />
    </main>
    <footerbar />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Navbar, Footerbar } from '@/components';

@Component({
  components: { Navbar, Footerbar }
})
export default class Default extends Vue {}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
      max-width: 800px;
      padding: 1.5rem;
    }
  }
}
</style>
