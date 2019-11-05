<template>
  <div id="app" class="app">
    <top-app-bar class="app__top-app-bar"></top-app-bar>
    <main class="app__main">
      <router-view/>
    </main>
    <footer class="app__footer"></footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopAppBar from '@/components/TopAppBar.vue';

@Component({
  components: {
    TopAppBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./scss/main";
</style>

<style lang="scss" scoped>
.app {
  display: grid;
  grid-template: auto / 100vw;
  grid-template-areas: "top-app-bar"
    "main"
    "footer";

  &__top-app-bar {
    grid-area: top-app-bar;
  }

  &__main {
    grid-area: main;
  }

  &__footer {
    grid-area: footer;
  }
}
</style>
