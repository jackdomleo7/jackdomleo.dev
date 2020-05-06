<template>
  <div>
    <div class="gradient"></div>
    <nuxt />
  </div>
</template>

<style lang="scss" scoped>
@keyframes Gradient {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}

.gradient {
  animation: Gradient 10s ease infinite;
  background: linear-gradient(50deg, var(--color-orange-deep) 0%, var(--color-orange-faint) 100%);
  background-size: 400%;
  width: 100vw;
  height: 10px;
  opacity: 0.8;
}
</style>
