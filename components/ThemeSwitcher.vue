<template>
  <fieldset>
    <legend>Switch theme</legend>

    <div class="theme-options">
      <div class="theme-option">
        <div>
          <input v-model="$colorMode.preference" :id="`${id}-theme-system`" type="radio" :name="`${id}-theme`" value="system" />
          <svg-icon name="monitor" />
        </div>
        <label :for="`${id}-theme-system`">System</label>
      </div>

      <div class="theme-option">
        <div>
          <input v-model="$colorMode.preference" :id="`${id}-theme-light`" type="radio" :name="`${id}-theme`" value="light" />
          <svg-icon name="sun" />
        </div>
        <label :for="`${id}-theme-light`">Light</label>
      </div>

      <div class="theme-option">
        <div>
          <input v-model="$colorMode.preference" :id="`${id}-theme-dark`" type="radio" :name="`${id}-theme`" value="dark" />
          <svg-icon name="moon" />
        </div>
        <label :for="`${id}-theme-dark`">Dark</label>
      </div>
    </div>
  </fieldset>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ThemeSwitcher',
  props: {
    id: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
fieldset {
  border: none;
}

legend {
  font-size: var(--text-body);
  margin-bottom: 0.5rem;
}

.theme-options {
  display: flex;
  gap: 1rem;
}

.theme-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-size: var(--text-small);

  > div {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    color: var(--colour-text-secondary);
  }

  input {
    appearance: none;
    display: grid;
    place-items: center;
    height: 3rem;
    width: 3rem;
    border: 2px solid var(--colour-text-secondary);
    border-radius: 0.625rem;
    cursor: pointer;

    &:checked {
      border-color: var(--colour-primary);
      background-color: var(--colour-primary-faint);

      + svg {
        color: var(--colour-primary);
      }
    }
  }
}
</style>
