<template>
  <div>
    <div class="gradient"></div>
    <navbar />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navbar from '@/components/navbar.vue';

@Component({
  components: { Navbar }
})
export default class Default extends Vue {
  
}
</script>

<style lang="scss" scoped>
@keyframes Gradient {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}

.gradient {
  animation: Gradient 20s ease infinite;
  background: linear-gradient(50deg, var(--color-orange-deep) 0%, var(--color-blue) 100%);
  background-size: 250%;
  width: 100vw;
  height: 6px;
  opacity: 0.8;
}
</style>
