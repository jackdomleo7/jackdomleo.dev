<template>
  <PageTemplate page-heading="Blog" :footer="footer" />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Blog',
  async asyncData ({ $prismic, error }: any) {
    const footer = await $prismic.api.getSingle('footer')

    if (footer) {
      return { footer }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head () {
    return {
      title: 'Blog'
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
