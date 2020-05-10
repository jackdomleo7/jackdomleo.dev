<template>
  <page-template page-title="Blog">
    <p>
      Coming soon...
    </p>
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { PageTemplate } from '@/components';

@Component({
  components: { PageTemplate }
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped></style>
