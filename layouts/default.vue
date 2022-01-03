<template>
  <div>
    <Navigation/>
    <Nuxt/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navigation from '@/components/Navigation.vue'

export default Vue.extend({
  name: 'Default',
  components: { Navigation }
})
</script>
