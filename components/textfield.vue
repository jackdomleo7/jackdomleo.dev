<template>
  <label class="textfield">
    <span>{{ label }}</span>
    <input v-model="inputValue" :type="type" :placeholder="placeholder" @input="onInput">
  </label>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class Textfield extends Vue {
  @Prop({ type: String, required: true })
  private readonly label!: string;

  @Prop({ type: String, default: '' })
  private readonly placeholder!: string;

  @Prop({ type: [Date, Number, String] }) private readonly value!: Date | number | string;

  @Prop({
    type: String,
    default: 'text',
    validator: (value: string) =>
      [
        'date',
        'datetime-local',
        'email',
        'month',
        'number',
        'password',
        'search',
        'text',
        'tel',
        'time',
        'url',
        'week'
      ].includes(value)
  })
  private readonly type!: string;

  private _inputValue: string = '';

  get inputValue (): string {
    if (this.value && this.value.toString() !== this._inputValue) {
      this._inputValue = this.value.toString();
    }
    return this._inputValue;
  }

  set inputValue (value: string) {
    this._inputValue = value;
  }

  private created () {
    if (this.value) {
      this._inputValue = this.value.toString();
    }
  }

  @Emit('input')
  public onInput (event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}
</script></style>

<style lang="scss">
:root {
  --textfield-placeholder: #eee;
  --textfield-bg: rgba(255, 255, 255, 0.05);
}

.theme--light {
  --textfield-placeholder: #555;
  --textfield-bg: rgba(255, 255, 255, 0.1);
}
</style>

<style lang="scss" scoped>
.textfield {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  span {
    margin-bottom: 0.25rem;
  }

  input {
    border-radius: 0.25rem;
    border: 1px solid var(--color-grey);
    padding: 0.5rem;
    background-color: var(--textfield-bg);
    color: var(--textfield-placeholder);
  }
}
</style>
