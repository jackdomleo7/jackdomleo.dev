<template>
  <div id="app" class="app">
    <top-app-bar></top-app-bar>
    <main-activity></main-activity>
    <footer></footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopAppBar from '@/components/TopAppBar.vue';
import MainActivity from '@/components/MainActivity.vue';

@Component({
  components: {
    TopAppBar,
    MainActivity,
  },
})
export default class App extends Vue {
  private mounted() {
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      this.$router.push(path);
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main";
</style>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
