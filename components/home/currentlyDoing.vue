<template>
  <section id="what-im-currently-doing">
    <h2>What am I currently doing</h2>
    <ul class="currently">
      <li>
        <div>
          📝 Writing "Level-Up Your Career Today" - an eBook available to preorder <a href="https://gum.co/NQpxh" rel="nofollow noopener" target="_blank">here</a>
        </div>
      </li>
      <li><div>📚 Reading <a href="https://randallkanna.com/the-standout-developer" rel="nofollow noopener" target="_blank">The Standout Developer</a> by <a href="https://twitter.com/RandallKanna" rel="nofollow noopener" target="_blank">Randall Kanna</a></div></li>
      <li><div>Planning my next big project - I'm thinking my own design system 🚀</div></li>
      <li>
        <div>
          Looking after my health ❤
        </div>
      </li>
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
