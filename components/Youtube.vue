<template>
  <iframe class="youtube" width="560" height="315" :title="`${videoTitle} on YouTube`" :src="`https://www.youtube.com/embed/${urlHash}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Youtube',
  props: {
    urlHash: {
      type: String,
      required: true
    },
    videoTitle: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.youtube {
  min-height: 25rem;
}
</style>