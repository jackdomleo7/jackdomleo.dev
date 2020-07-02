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
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class Codepen extends Vue {
  @Prop({ type: Boolean, default: false })
  private readonly clickToLoad!: boolean;

  @Prop({ type: String, default: 'JackDomleo' })
  private readonly user!: string;

  @Prop({ type: String, required: true })
  private readonly slugHash!: string;

  @Prop({ type: String, required: true })
  private readonly penTitle!: string;
}
</script>

<style lang="scss">
.cp_embed_iframe  {
  height: 40rem;
  max-height: 80vh;
  min-height: 20rem;
  width: 100%;
}
</style>
