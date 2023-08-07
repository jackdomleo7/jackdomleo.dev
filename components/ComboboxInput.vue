<template>
  <div ref="combobox" class="combobox">
    <label :for="id" class="sr-only">{{ label }}</label>
    <div class="combobox__wrapper">
      <div
        class="combobox__header"
        :class="{'combobox__header--open': isMenuOpen}"
        role="combobox"
        aria-haspopup="listbox"
        :aria-expanded="`${isMenuOpen}`"
        :aria-owns="`${id}-listbox`"
      >
        <input
          :id="id"
          :value="typedValue"
          aria-autocomplete="list"
          autocomplete="off"
          type="text"
          :placeholder="label"
          :aria-activedescendant="`${id}-option-${activeIndex}`"
          @click="isMenuOpen = true; !!typedValue && !!typedValue.split(',').map(x => x.trim()).at(-1) && (typedValue += ', ')"
          @focus="isMenuOpen = true"
          @blur="onBlur"
          @input="onInput($event)"
          @keydown="onKeydown($event)"
        />
        <nuxt-icon v-if="!typedValue" class="combobox__header-icon combobox__chevron" name="chevron_down" />
        <button v-else class="combobox__header-icon combobox__cross" @click="clearInput()">
          <nuxt-icon name="cross" />
          <span class="sr-only">Clear</span>
        </button>
      </div>
      <div
        v-show="isMenuOpen"
        :id="`${id}-listbox`"
        class="combobox__menu"
        role="listbox"
        :aria-multiselectable="`${multiselectable}`"
      >
        <div
          v-for="(option, index) in options"
          v-show="fuzzySearch(option.text, currentlyBeingTyped || '')"
          :id="`${id}-option-${index}`"
          :key="option.value"
          class="combobox__option"
          :class="{'combobox__option--selected': isOptionSelected(option), 'combobox__option--current': isOptionFocused(option)}"
          role="option"
          :aria-selected="`${isOptionSelected(option)}`"
          :data-value="option.value"
          @click="optionSelect(option)"
          @mousedown="ignoreBlur = true"
        >
          <div v-if="multiselectable" class="combobox__tickbox">
            <nuxt-icon name="tick" />
          </div>
          {{ option.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, type PropType } from 'vue';
import { onClickOutside, useFocus } from '@vueuse/core'
import { fuzzySearch } from '@/utilities/fuzzySearch';
import type { ComboboxOption } from '@/types/components/ComboboxInput'

const emit = defineEmits<{
  selectedOptions: [options: string[]]
}>()

const props = defineProps({
  id: {
    type: String,
    required: true,
    validator: (value: string): boolean => !/\s/g.test(value) // no whitespace
  },
  label: {
    type: String,
    required: true
  },
  options: {
    type: Array as PropType<ComboboxOption[]>,
    required: true
  },
  multiselectable: {
    type: Boolean,
    default: false
  },
  value: {
    type: [Array, null] as PropType<ComboboxOption[]|null>,
    default: null
  }
})

const ignoreBlur = ref(false)
const isMenuOpen = ref(false)
const activeIndex = ref(0)
const typedValue = ref('')
const currentlyBeingTyped = ref(typedValue.value.split(',').at(-1)?.trim())

const combobox = ref(null)
onClickOutside(combobox, () => closeMenu())

watch(() => props.value, () => {
  checkValue()
})

watch(() => typedValue.value, () => {
  currentlyBeingTyped.value = typedValue.value.split(',').at(-1)?.trim()
})

onMounted(() => {
  checkValue()
})

function checkValue(): void {
  if (props.value && props.value.length > 0) { // If there is a preset value(s)
    typedValue.value = props.options.filter(x => props.value!.includes(x)).map(x => x.text).join(', ')

    if (!props.multiselectable) {
      typedValue.value = typedValue.value.split(',')[0].trim()
      activeIndex.value = props.options.indexOf(props.options.find(x => x.text === typedValue.value)!)
    }
  }
  else {
    typedValue.value = ''
  }

  emit('selectedOptions', typedValue.value.split(',').map(x => x.trim()).filter(Boolean))
}

function clearInput(): void {
  typedValue.value = ''
  emit('selectedOptions', [])
}

function onBlur(): void {
  if (ignoreBlur.value) {
    ignoreBlur.value = false

    useFocus(document.getElementById(props.id), { initialValue: true })

    return
  }

  closeMenu()
}

function closeMenu(): void {
  isMenuOpen.value = false
  activeIndex.value = 0
  document.getElementById(`${props.id}-listbox`)!.scrollTop = 0

  const typedValues = typedValue.value.split(',').map(x => x.trim())
  const allowedValues = [...props.options.map(x => x.text.toLowerCase()), ...props.options.map(x => x.value.toLowerCase())]
  for (const value of typedValues) {
    if (allowedValues.includes(value.toLowerCase())) {
      typedValue.value = typedValue.value.replace(value, props.options.find(x => x.text.toLowerCase() === value.toLowerCase() || x.value.toLowerCase() === value.toLowerCase())!.text)
    }
    else {
      typedValue.value = typedValue.value.replace(value, '')
    }
  }

  typedValue.value = typedValue.value.split(',').map(x => x.trim()).filter(Boolean).join(', ')

  emit('selectedOptions', typedValue.value.split(',').map(x => x.trim()).filter(Boolean))
}

function onInput(event: Event): void {
  typedValue.value = (event.target as HTMLInputElement).value

  const typedValues = typedValue.value.split(',').map(x => x.trim().toLowerCase())
  const allowedValues = [...props.options.map(x => x.text.toLowerCase()), ...props.options.map(x => x.value.toLowerCase())]
  for (const value of typedValues) {
    if (allowedValues.includes(value)) {
      typedValue.value = typedValue.value.replace(value, props.options.find(x => x.text.toLowerCase() === value || x.value.toLowerCase() === value)!.text)
      emit('selectedOptions', typedValue.value.split(',').map(x => x.trim()).filter(Boolean))
    }
    else {
      emit('selectedOptions', typedValue.value.toLowerCase().replace(value, '').split(',').map(x => x.trim()).filter(Boolean))
    }
  }
}

function onKeydown(event: KeyboardEvent): void {
  const max = props.options.length - 1
  const scrollOptionIntoView = () => {
    const container = document.getElementById(`${props.id}-listbox`)!
    const option = document.getElementById(`${props.id}-option-${activeIndex.value}`)!
    container.scrollTop = option.offsetTop - (container.clientHeight / 2) + (option.clientHeight / 2)
  }

  if (!isMenuOpen.value) {
    isMenuOpen.value = true
  }

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      if (activeIndex.value !== max) {
        activeIndex.value++
        scrollOptionIntoView()
      }
      break
    case 'ArrowUp':
      event.preventDefault()
      if (activeIndex.value !== 0) {
        activeIndex.value--
        scrollOptionIntoView()
      }
      break
    case 'Enter':
      event.preventDefault()
      optionSelect(props.options[activeIndex.value])
  }
}

function optionSelect(option: ComboboxOption): void {
  activeIndex.value = props.options.indexOf(option)

  if (props.multiselectable) {
    if (isOptionSelected(option)) {
      typedValue.value = typedValue.value.replace(option.text, '').split(',').map(x => x.trim()).filter(Boolean).join(', ')
      if (typedValue.value.split(',').map(x => x.trim()).filter(Boolean).length > 0) typedValue.value += ', '
    }
    else {
      typedValue.value = [...typedValue.value.split(','), option.text].map(x => x.trim()).filter(Boolean).join(', ') + ', '
    }
  }
  else {
    isMenuOpen.value = false
    typedValue.value = [...typedValue.value.split(','), option.text].map(x => x.trim()).join(', ')
  }

  emit('selectedOptions', typedValue.value.split(',').map(x => x.trim()).filter(Boolean))
}

function isOptionSelected(option: ComboboxOption): boolean {
  return typedValue.value.split(',').map(x => x.trim()).includes(option.text)
}

function isOptionFocused(option: ComboboxOption): boolean {
  return props.options[activeIndex.value] === option
}
</script>

<style lang="scss" scoped>
$inputHeight: 2.5rem;

.combobox {
  input {
    background-color: var(--color-bg);
    border: 1px solid var(--colour-mid-grey);
    border-radius: var(--border-radius-standard);
    height: $inputHeight;
    width: 100%;
    padding: 0 2.5rem 0 1rem;
    font-weight: 600;
    font-size: var(--text-body);
    color: var(--color-primary);

    &::placeholder {
      color: var(--colour-mid-grey);
    }
  }

  &__wrapper {
    position: relative;
  }

  &__header {
    position: relative;
    z-index: 2;

    &--open {
      input {
        border-radius: var(--border-radius-standard) var(--border-radius-standard) 0 0;
      }
    }
  }

  &__header-icon {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    display: block;
    height: 1.5rem;
    width: 1.5rem;
    transform: translateY(-50%);
  }

  &__chevron {
    pointer-events: none;
    transition: transform 0.3s ease;
    will-change: transform;

    .combobox__header--open & {
      transform: translateY(-50%) rotate(-90deg);
    }
  }

  &__cross {
    background-color: transparent;
    border: 0;
  }

  &__menu {
    background-color: var(--color-bg);
    box-shadow: var(--shadow);
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    border: 1px solid var(--colour-mid-grey);
    border-radius: 0 0 var(--border-radius-standard) var(--border-radius-standard);
    max-height: #{$inputHeight * 6.5};
    overflow-y: auto;
    overscroll-behavior-y: contain;
    user-select: none;
  }

  &__option {
    cursor: default;
    height: $inputHeight;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    position: relative;
    color: var(--color-primary);
    border: 1px solid transparent;

    &:last-of-type {
      border-radius: 0 0 var(--border-radius-standard) var(--border-radius-standard);
    }

    &:hover {
      background-color: var(--color-accent-faint);
    }

    &--current {
      border-color: var(--color-primary);
    }
  }

  &__tickbox {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 1.5rem;
    width: 1.5rem;
    border: 1px solid var(--color-primary);
    margin-right: 0.5rem;
    padding: 0.25rem;

    :deep() {
      .nuxt-icon {
        display: none;

        .combobox__option:not(.combobox__option--selected):hover &,
        .combobox__option--current:not(.combobox__option--selected) & {
          display: block;
          color: var(--colour-mid-grey);
        }

        .combobox__option--selected & {
          display: block;
          color: var(--color-primary);
        }
      }
    }
  }
}
</style>