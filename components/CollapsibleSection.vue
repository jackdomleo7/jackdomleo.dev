<template>
  <div :id="`collapsible-section-${id}`" class="collapsible-section">
    <tag :is="headingTag" class="collapsible-section__header">
      <button
        :id="`collapsible-section-${id}__header`"
        :aria-expanded="isOpen.toString()"
        :aria-controls="`collapsible-section-${id}__panel`"
        @click="isOpen = !isOpen"
      >
        <span>{{ heading }}</span>
        <svg-icon name="chevron-down" />
      </button>
    </tag>
    <section
      :id="`collapsible-section-${id}__panel`"
      class="collapsible-section__body"
      :class="{'collapsible-section__body--hidden': !isOpen}"
      :aria-labelledby="`collapsible-section-${id}__header`"
    >
      <div class="collapsible-section__body-inner">
        <slot />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { stringHasNoWhitespace } from '@/helpers/propValidators'

export default Vue.extend({
  name: 'CollapsibleSection',
  props: {
    headingTag: {
      type: String as PropType<'h2'|'h3'|'h4'|'h5'|'h6'>,
      required: true,
      validator: (value: string): boolean => {
        return ['h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
      }
    },
    id: {
      type: String,
      required: true,
      validator: (value: string): boolean => {
        return stringHasNoWhitespace(value)
      }
    },
    heading: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isOpen: false
    }
  }
})
</script>

<style lang="scss" scoped>
.collapsible-section {
  padding: 0;
  width: 100%;
  background-color: var(--colour-foreground-1);
  border-radius: 0.75rem;
  box-shadow: var(--shadow-standard);

  &__header {
    margin: 0;

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--colour-text-primary);
      padding: 0.875rem 1rem;
      border: 0;
      background-color: transparent;
      width: 100%;
      cursor: pointer;
      font-size: var(--text-heading);
      text-align: left;

      @media (min-width: $responsive-standard-tablet) {
        padding: 1.5rem;
      }

      &:focus {
        outline: none;

        svg {
          outline: 1px solid;
          outline-color: Highlight;
          outline-color: -webkit-focus-ring-color;
          outline-offset: 1px;
        }
      }

      &[aria-expanded="true"] {
        svg {
          transform: rotate(180deg);
        }
      }
    }

    span {
      flex: 1;
      padding-right: 1rem;
    }

    svg {
      height: 3rem;
      width: 3rem;
      transition: transform 260ms ease;
      will-change: transform;
    }
  }

  &__body {
    font-size: var(--text-body);
    transition: max-height 500ms ease;
    will-change: max-height;
    overflow: hidden;
    max-height: 50rem;

    &-inner {
      padding: 0.125rem 1rem 1.25rem 1rem;

      @media (min-width: $responsive-standard-tablet) {
        padding: 0.125rem 1.5rem 1.5rem 1.5rem;
      }
    }

    &--hidden {
      max-height: 0;
    }

    ::v-deep p {
      margin-block: 0.5rem;

      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>
