<template>
  <section id="what-im-currently-doing">
    <h2>What am I currently doing</h2>
    <ul class="currently">
      <li><div>Redesigning & completely redoing my website (waiting for static build support in Nuxt 3) 🎨</div></li>
      <li><div>Drafting a new ebook 📚</div></li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class CurrentlyDoing extends Vue {}
</script>

<style lang="scss" scoped>
.currently {
  padding-left: 0;
  list-style-type: none;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 28.125em) {
    grid-template-columns: 1fr 1fr;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
    border-radius: 0.75rem;
    background-color: rgba(0, 0, 0, 0.12);
    border: 1px solid var(--color-grey-light);
  }
}
</style>
