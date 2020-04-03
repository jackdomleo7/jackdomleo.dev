<template>
  <router-link v-if="type === 'internal'" class="link" :to="link">
    <slot />
  </router-link>
  <a
    v-else
    class="link"
    :href="(type === 'email' ? 'mailto:' : type === 'tel' ? 'tel:' : '') + link"
    :target="type === 'external' ? '_blank' : null"
    :rel="
      type === 'external' || type === 'email'
        ? 'nofollow'
        : type === 'tel'
        ? 'noopener noreferrer'
        : null
    "
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SiteLink extends Vue {
  @Prop({
    validator: (value: string) =>
      ['email', 'external', 'internal', 'social', 'tel'].includes(value),
    required: true,
  })
  private readonly type!: string;

  @Prop({ type: [Object, String], required: true })
  private readonly link!: object | string;
}
</script>

<style lang="scss" scoped>
.link {
  color: inherit;
  font-weight: 700;
  text-decoration: underline;
}
</style>
