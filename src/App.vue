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
    MainActivity
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./scss/main";
</style>

<style lang="scss" scoped>

</style>
