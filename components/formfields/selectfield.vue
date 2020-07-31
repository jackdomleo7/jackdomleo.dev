<template>
  <label class="selectfield">
    <span>{{ label }}</span>
    <select :value="value" @change="onChange">
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
    </select>
  </label>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Model } from 'nuxt-property-decorator';

@Component
export default class Selectfield extends Vue {
  @Prop({ type: String, required: true })
  private readonly label!: string;

  @Prop({ type: Array, required: true })
  private readonly options!: any[];

  @Model('change', { type: String })
  readonly value!: string;

  @Emit('change')
  public onChange (event: Event) {
    return (event.target as HTMLSelectElement).value;
  }
}
</script>

<style lang="scss">
:root {
  --selectfield-placeholder: #eee;
  --selectfield-bg: #444;
}

.theme--light {
  --selectfield-placeholder: #555;
  --selectfield-bg: #eee;
}
</style>

<style lang="scss" scoped>
.selectfield {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  span {
    margin-bottom: 0.25rem;
  }

  select {
    border-radius: 0.25rem;
    border: 2px solid transparent;
    border-bottom-color: var(--color-grey);
    padding: 0.5rem;
    background-color: var(--selectfield-bg);
    color: var(--selectfield-placeholder);
    transition: border 160ms ease;

    &:focus {
      border-color: transparent;
      border-bottom-color: var(--color-orange);
    }
  }
}
</style>
