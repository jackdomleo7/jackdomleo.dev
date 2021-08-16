<template>
  <PageTemplate page-heading="Career" :footer="footer" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Career',
  async asyncData ({ $prismic, error }: any) {
    const career = await $prismic.api.getSingle('career')
    const footer = await $prismic.api.getSingle('footer')

    if (career && footer) {
      return { career, footer }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head () {
    return {
      title: 'Career'
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
