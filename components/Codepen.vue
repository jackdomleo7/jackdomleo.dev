<template>
  <p
    class="codepen"
    data-theme-id="39164"
    data-default-tab="result"
    :data-user="user"
    :data-slug-hash="slugHash"
    :data-preview="clickToLoad.toString()"
    :data-pen-title="penTitle"
  >
    <span>See the Pen <a :href="`https://codepen.io/${user}/pen/${slugHash}`">
      {{ penTitle }}</a> by <a :href="`https://codepen.io/${user}`">@{{ user }}</a>
      on <a href="https://codepen.io">CodePen</a>.</span>
  </p>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Codepen',
  props: {
    clickToLoad: {
      type: Boolean,
      default: false
    },
    user: {
      type: String,
      default: 'jackdomleo7'
    },
    slugHash: {
      type: String,
      required: true
    },
    penTitle: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss">
.cp_embed_iframe,
.codepen {
  height: 40rem;
  max-height: 80vh;
  min-height: 20rem;
  width: 100%;
  display: grid;
  place-items: center;
  border: 1px solid var(--colour-text-secondary);
}
</style>