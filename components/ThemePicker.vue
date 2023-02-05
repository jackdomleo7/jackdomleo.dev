<template>
  <fieldset>
    <legend class="sr-only">Switch theme</legend>

    <div class="theme-options">
      <div class="theme-option">
        <input id="theme-system" v-model="$colorMode.preference" type="radio" name="theme" value="system" />
        <nuxt-icon name="monitor" />
        <label for="theme-system">System</label>
      </div>

      <div class="theme-option">
        <input id="theme-light" v-model="$colorMode.preference" type="radio" name="theme" value="light" />
        <nuxt-icon name="sun" />
        <label for="theme-light">Light</label>
      </div>

      <div class="theme-option">
        <input id="theme-dark" v-model="$colorMode.preference" type="radio" name="theme" value="dark" />
        <nuxt-icon name="moon" />
        <label for="theme-dark">Dark</label>
      </div>
    </div>
  </fieldset>
</template>

<script lang="ts" setup>
const $colorMode = useColorMode()
</script>

<style lang="scss" scoped>
fieldset {
  border: none;
  padding: 0;
  margin-top: 0.5rem;
}

.theme-options {
  display: flex;
  align-items: stretch;
}

.theme-option {
  font-size: var(--text-small);
  position: relative;

  &:first-of-type {
    input {
      border-radius: var(--border-radius-standard) 0 0 var(--border-radius-standard);
    }
  }

  &:last-of-type {
    input {
      border-radius: 0 var(--border-radius-standard) var(--border-radius-standard) 0;
    }
  }

  .nuxt-icon {
    position: absolute;
    top: 0.25rem;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    color: var(--color-primary);
    pointer-events: none;
  }

  input {
    appearance: none;
    display: grid;
    place-items: center;
    height: 2.5rem;
    width: 4rem;
    cursor: pointer;
    border: 1px solid var(--color-primary);

    &:hover:not(:checked) {
      background-color: var(--color-accent-faint);
    }

    &:checked {
      border-color: var(--color-accent);
      box-shadow: 0 0 0 5px var(--color-accent-faint);

      ~ .nuxt-icon,
      ~ label {
        color: var(--color-accent);
      }
    }
  }

  label {
    font-size: var(--text-small);
    position: absolute;
    bottom: 0.125rem;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
  }
}
</style>