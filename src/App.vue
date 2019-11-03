<template>
  <div id="app" class="app">
    <header class="app__header"></header>
    <main class="app__main"></main>
    <footer class="app__footer"></footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {

  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./scss/main";

.app {
  display: grid;
  grid-template: auto / 100vw;
  grid-template-areas: "header"
    "main"
    "footer";

  &__header {
    grid-area: header;
  }

  &__main {
    grid-area: main;
  }

  &__footer {
    grid-area: footer;
  }
}
</style>
