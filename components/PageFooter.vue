<template>
  <footer class="footer">
    <p>
      &copy;<time :datetime="year">
        {{ year }}
      </time> Jack Domleo. All rights reserved.
    </p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageFooter',
  props: {
    footer: {
      type: Object,
      required: true
    }
  },
  computed: {
    year (): number {
      return new Date().getFullYear()
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
