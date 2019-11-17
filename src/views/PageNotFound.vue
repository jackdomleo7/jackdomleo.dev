<template>
  <div class="page-not-found__wrapper">
    <section class="page-not-found">
      <div class="page-not-found__text">
        <div>
          <h1 class="page-not-found__title page-not-found__title--one-line">404 | Page Not Found</h1>
          <h1 class="page-not-found__title page-not-found__title--split">404<br>Page Not Found</h1>
          <p>I have no idea where you thought you were going, but it doesn't exist</p>
          <p>Go to the <router-link class="link--paragraph" to="/">Homepage</router-link> and try again</p>
        </div>
      </div>
      <img class="page-not-found__img" src="/img/shrug-404.png" alt="Stickman shrugging his shoulders" />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MainActivity extends Vue {}
</script>

<style lang="scss" scoped>
.page-not-found {
  display: grid;
  grid-gap: 1.5rem;
  grid-template: auto / 1fr 2fr 1fr;
  grid-template-areas: ". text img";
  justify-items: center;
  width: 100%;

  @media (max-width: 1320px) {
    grid-template: auto / 1fr 3fr 1fr;
  }

  @media (max-width: 1110px) {
    grid-template: auto / 1fr 4fr 1fr;
  }

  @media (max-width: 1002px) {
    grid-template: auto auto auto / 1fr;
    grid-template-areas: "." "text" "img";
  }

  &__wrapper {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
  }

  &__text {
    align-items: center;
    display: flex;
    grid-area: text;
    text-align: center;

    p {
      font-size: 1.2rem;
    }
  }

  &__title {
    font-size: 4rem;

    &--one-line {
      @media (max-width: 1002px) {
        display: none;
      }
    }

    &--split {
      display: none;

      @media (max-width: 1002px) {
        display: initial;
      }
    }
  }

  &__img {
    grid-area: img;
    height: 15rem;
    justify-self: left;

    @media (max-width: 1002px) {
      justify-self: inherit;
    }
  }
}
</style>
