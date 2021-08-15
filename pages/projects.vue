<template>
  <PageTemplate page-heading="Projects" :footer="footer" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Projects',
  head () {
    return {
      title: 'Projects'
    }
  },
  async asyncData ({ $prismic, error }: any) {
    const projects = await $prismic.api.getSingle('projects')
    const footer = await $prismic.api.getSingle('footer')

    if (projects && footer) {
      return { projects, footer }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
