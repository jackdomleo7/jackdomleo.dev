<template>
  <section id="what-im-currently-doing">
    <h2>What am I currently doing</h2>
    <ul class="currently">
      <li><div>Part-time furloughed 😷</div></li>
      <li>
        <div>
          🎓 Creating a course with <a href="https://twitter.com/NehemiahKiv" rel="nofollow noopener" target="_blank">Nehemiah</a> and <a href="https://twitter.com/anniebombanie_" rel="nofollow noopener" target="_blank">Annie</a>!
        </div>
      </li>
      <li><div>📚 Reading <a href="https://amzn.to/2X1xz9t" rel="nofollow noopener" target="_blank">Responsive Web Design with HTML5 and CSS</a> by <a href="https://benfrain.com" rel="nofollow noopener" target="_blank">Ben Frain</a></div></li>
      <li>
        <div>
          Participating in the <a href="https://github.com/jackdomleo7/100-days-of-code" rel="nofollow noopener" target="_blank">100 Days of Code</a> challenge 💪
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
    padding: 1rem;
    border-radius: 0.75rem;
    background-color: rgba(0, 0, 0, 0.12);
    border: 1px solid var(--color-grey-light);
  }
}
</style>
