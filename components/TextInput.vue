<template>
  <div class="text-input">
    <label :for="id" class="text-input__label">
      {{ label }}
      <template v-if="required">
        <span v-if="!hideRequiredAsterisk" class="text-input__asterisk" aria-hidden="true">
          *
        </span> <span class="sr-only">
          (required)
        </span>
      </template>
    </label>
    <p class="text-input__help">
      {{ helpText }}
    </p>
    <span class="text-input__entry" :class="{ 'text-input__entry--error': errorMsg }">
      <input
        :id="id"
        :value="value"
        :name="name"
        :type="type"
        :inputmode="inputmode"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :required="required"
        :aria-invalid="errorMsg ? 'true' : 'false'"
        :aria-describedby="errorMsg && `${id}--error`"
        @change="$emit('change', $event.target.value)"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur', $event.target.value)"
      >
    </span>
    <p :id="`${id}--error`" class="text-input__error" :role="errorMsg && 'alert'" :aria-hidden="errorMsg ? 'false' : 'true'">
      {{ errorMsg }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { stringHasNoWhitespace } from '@/helpers/propValidators'

export default Vue.extend({
  name: 'TextInput',
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true,
      validator (value: string): boolean {
        return stringHasNoWhitespace(value)
      }
    },
    value: {
      type: String,
      default: undefined
    },
    type: {
      type: String,
      default: 'text',
      validator: (value: string): boolean => {
        return ['text', 'email'].includes(value) && stringHasNoWhitespace(value)
      }
    },
    inputmode: {
      type: String,
      default: undefined,
      validator: (value: string): boolean => {
        return ['text', 'email'].includes(value) && stringHasNoWhitespace(value)
      }
    },
    required: {
      type: Boolean,
      default: false
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: undefined,
      validator (value: string): boolean {
        return stringHasNoWhitespace(value)
      }
    },
    placeholder: {
      type: String,
      default: undefined
    },
    autocomplete: {
      type: String,
      default: undefined
    },
    helpText: {
      type: String,
      default: undefined
    },
    errorMsg: {
      type: String,
      default: undefined
    }
  }
})
</script>

<style lang="scss" scoped>
.text-input {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  &__label {
    color: var(--colour-text-primary);
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
    user-select: none;
  }

  &__asterisk {
    color: var(--colour-primary);
    font-size: 700;
  }

  &__help {
    margin: 0;
    color: var(--colour-text-secondary);
    font-size: 0.75rem;
  }

  &__entry {
    border: 1px solid var(--colour-text-secondary);
    background-color: var(--colour-foreground-1);
    border-radius: 0.1875rem;
    height: 3rem;

    &--error {
      border-color: var(--colour-error);
    }

    input {
      color: var(--colour-text-primary);
      font-size: 1rem;
      height: 100%;
      width: 100%;
      padding-inline: 0.5rem;
      background-color: transparent;
      border: none;

      &::placeholder {
        color: #b6b5b4;
      }
    }
  }

  &__error {
    font-size: 0.75rem;
    margin-bottom: 0;
    margin-top: 0.1875rem;
    color: var(--colour-error);
  }
}
</style>
