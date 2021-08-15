<template>
  <div class="debug">
    <label for="theme">
      Theme
    </label>
    <select id="theme" v-model="$colorMode.preference">
      <option value="system">
        System
      </option>
      <option value="light">
        Light
      </option>
      <option value="dark">
        Dark
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Debug'
})
</script>

<style lang="scss" scoped>
.debug {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
  color: var(--base-grey-darker);
}
</style>
