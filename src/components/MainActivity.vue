<template>
  <main class="main-activity">
    <router-view/>
  </main>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {

    },
  })
  export default class MainActivity extends Vue {}
</script>

<style lang="scss" scoped>
.main-activity {
  padding: 2rem 5rem;

  @media (max-width: 660px) {
    margin-top: 2.5rem;
    padding: 2rem 3rem;
  }

  > * {
    animation: fadeIn 3s;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
