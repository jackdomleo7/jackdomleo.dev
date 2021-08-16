<template>
  <div class="text-input">
    <label :for="forId">
      {{ label }}
      <template v-if="required">
        <span aria-hidden="true">
          *
        </span> <span class="sr-only">
          (required)
        </span>
      </template>
    </label>
    <span class="text-input__entry">
      <svg-icon v-if="icon" :name="icon" />
      <textarea
        v-if="multiline"
        :id="forId"
        :value="value"
        :name="name"
        :type="type"
        :inputmode="inputmode"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :required="required"
        :aria-invalid="errorMsg ? 'true' : 'false'"
        :aria-describedby="errorMsg && `${forId}--error`"
        @change="onChange"
        @input="onInput"
        @blur="onBlur"
      />
      <input
        v-else
        :id="forId"
        :value="value"
        :name="name"
        :type="type"
        :inputmode="inputmode"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        :required="required"
        :aria-invalid="errorMsg ? 'true' : 'false'"
        :aria-describedby="errorMsg && `${forId}--error`"
        @change="$emit('change', $event.target.value)"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur', $event.target.value)"
      >
    </span>
    <span v-if="errorMsg" :id="`${forId}--error`" class="text-input__error" role="alert">
      {{ errorMsg }}
    </span>
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
    forId: {
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
    multiline: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: undefined,
      validator (value: string): boolean {
        return stringHasNoWhitespace(value)
      }
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
    errorMsg: {
      type: String,
      default: undefined
    }
  }
})
</script>

<style lang="scss">
:root {
  --text-input-border: var(--body-color);

  --text-input-placeholder: var(--base-grey-middle);
}

.theme--dark {
  --text-input-placeholder: var(--base-grey-lighter);
}
</style>

<style lang="scss" scoped>
.text-input {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  label {
    font-size: 1.2rem;

    span[aria-hidden="true"] {
      color: var(--alt-orange);
      user-select: none;
    }
  }

  &__entry {
    display: flex;
    gap: 0.5rem;
    border: 2px solid var(--text-input-border);
    padding: 0.5rem;
    border-radius: 0.5rem;

    &:focus-within {
      border-color: var(--alt-orange);

      svg {
        color: var(--alt-orange);
      }
    }

    svg {
      height: 2.5rem;
      width: 2.5rem;
      padding-right: 0.5rem;
      border-right: 2px solid currentColor;
    }

    input,
    textarea {
      flex: 1;
      background-color: transparent;
      color: currentColor;
      border: none;

      &::placeholder {
        color: var(--text-input-placeholder);
      }

      &:focus {
        outline: none;
      }
    }

    textarea {
      resize: vertical;
      min-height: 25vmin;

      @media (min-width: 550px) {
        min-height: 15vmin;
      }
    }
  }

  &__error {
    color: var(--base-red);
    font-weight: 700;
  }
}
</style>
