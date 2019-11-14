<template>
  <div class="home">
    <section class="home__intro intro">
      <h1 class="intro__welcome">Hello there!<br>Let me introduce myself...<br>I'm Jack Domleo.</h1>
    </section>
    <section class="home__spotlight spotlight">
      <figure class="spotlight__tile">
        <div class="spotlight__portrait">
          <img src="/img/jack-domleo-portrait.jpg" alt="Jack Domleo portrait" />
        </div>
      </figure>
      <figure class="spotlight__tile">
        <div class="spotlight__css-is-awesome">
          <h3>CSS<br>IS<br>AWESOME</h3>
        </div>
      </figure>
      <figure class="spotlight__tile">
        <a class="spotlight__tile-link" href="https://www.mitrefinch.co.uk/" target="_blank" rel="noreferrer">
          <svg class="spotlight__logo" aria-label="Mitrefinch Ltd">
            <use xlink:href="assets/svg-sprite.svg#logo-mitrefinch"></use>
          </svg>
        </a>
      </figure>
      <figure class="spotlight__tile">Something else</figure>
    </section>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {

    },
  })
  export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@import "../scss/colours";

.home {
  display: grid;
  grid-template: auto / 1.1fr 0.9fr;
  grid-template-areas: "intro spotlight";

  @media (max-width: 1290px) {
    grid-template: auto auto / 1fr;
    grid-template-areas: "intro" "spotlight";
  }

  &__intro {
    grid-area: intro;
    margin-right: 2rem;

    @media (max-width: 1290px) {
      margin-right: 0;
    }
  }

  &__spotlight {
    grid-area: spotlight;
    margin-left: 2rem;

    @media (max-width: 1290px) {
      margin-left: 0;
    }
  }
}

.intro {
  align-items: center;
  display: flex;

  &__welcome {
    color: $grey-75;
    font-size: 3rem;
    line-height: 1.5;

    @media (max-width: 730px) {
      font-size: 2.6rem;
    }

    @media (max-width: 525px) {
      font-size: 2rem;
    }

    @media (max-width: 420px) {
      font-size: 1.6rem;
    }
  }
}

.spotlight {
  display: grid;
  grid-gap: 3rem;
  grid-template: 1fr 1fr / 1fr 1fr;
  justify-content: center;

  @media (max-width: 480px) {
    grid-template: 1fr / 1fr;
  }

  &__tile {
    align-items: center;
    background-color: fade_out($grey-900, 0.5);
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 1rem;

    @media (min-width: 2400px) {
      padding: 2rem;
    }

    &-link {
      display: flex;
      height: 100%;
      width: 100%;
    }
  }

  &__portrait {
    border-radius: 0.375rem;
    overflow: hidden;
    position: relative;

    &::before {
      background: linear-gradient(to right, fade_out($grey-50, 1) 0%, fade_out($grey-50, 0.7) 100%);
      content: "";
      display: block;
      height: 100%;
      left: -75%;
      position: absolute;
      top: 0;
      transform: skewX(-25deg);
      width: 50%;
      z-index: 2;
    }

    &:hover::before {
      animation: shine 0.85s;
    }

    @keyframes shine {
      100% {
        left: 125%;
      }
    }

    img {
      display: block;
    }
  }

  &__css-is-awesome {
    border: solid 0.4rem $grey-50;
    padding: 1rem;
    width: 65%;

    h3 {
      font-size: 2rem;
      margin: 0;

      @for $i from 0 through 40 {
        $pixels: $i * 10;
        $rems: $i / 26;
        @media (min-width: calc(350px + #{$pixels}px)) {
          font-size: calc(2rem + #{$rems}rem);
        }
      }
    }
  }

  &__logo {
    color: $grey-50;
    transition: color ease-in-out 0.2s;
    width: 100%;

    &:hover {
      color: #ed293d;
    }
  }
}
</style>
