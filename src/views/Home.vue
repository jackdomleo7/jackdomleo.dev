<template>
  <div class="home h-card">
    <section class="home__intro intro">
      <h1 class="intro__welcome">Hello there!<br>Let me introduce myself...<br>I'm <span class="p-name">Jack Domleo</span>.</h1>
    </section>
    <section class="home__spotlight spotlight">
      <figure class="spotlight__tile" id="spotlight__portrait" :style="'height:' + spotlightTileWidth + 'px'">
        <router-link :to="{ name: Routes.About }">
          <div class="spotlight__portrait">
            <img class="u-photo" src="/img/jack-domleo-portrait.jpg" alt="Jack Domleo portrait" />
          </div>
        </router-link>
      </figure>
      <figure class="spotlight__tile" ref="spotlight__tile" :style="'height:' + spotlightTileWidth + 'px'">
        <div class="spotlight__css-is-awesome" :style="'width:' + cssIsAwesomeHeight + 'px'" id="css-is-swesome">
          <h2 class="css-is-awesome">CSS<br>IS<br>AWESOME</h2>
        </div>
      </figure>
      <figure class="spotlight__tile" :style="'height:' + spotlightTileWidth + 'px'">
        <site-link class="spotlight__tile-link" type="external" link="https://www.mitrefinch.co.uk" target="_blank" rel="noreferrer" aria-label="Link to Mitrefinch's website">
          <svg class="spotlight__logo" aria-label="Mitrefinch Ltd logo">
            <use xlink:href="assets/svg-sprite.svg#logo-mitrefinch"></use>
          </svg>
        </site-link>
      </figure>
      <figure class="spotlight__tile" :style="'height:' + spotlightTileWidth + 'px'">
        <p class="spotlight__todo">&lt;!-- TODO: Put something here --&gt;</p>
      </figure>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Routes } from '@/router';
import { SiteLink } from '@/components';

@Component({
  components: { SiteLink }
})
export default class Home extends Vue {
  private Routes: Routes = Routes;
  private spotlightTileWidth: number = 0;
  private cssIsAwesomeHeight: number = 0;

  private mounted() {
    this.setSpotlightTileHeight();
    this.setCssIsAwesomeWidth();

    window.addEventListener('load', () => {
      this.setSpotlightTileHeight();
      this.setCssIsAwesomeWidth();
    });

    window.addEventListener('resize', () => {
      this.setSpotlightTileHeight();
      this.setCssIsAwesomeWidth();
    });
  }

  private setSpotlightTileHeight(): void {
    this.spotlightTileWidth = document.getElementById('spotlight__portrait')!.clientWidth;
  }

  private setCssIsAwesomeWidth(): void {
    this.cssIsAwesomeHeight = document.getElementById('css-is-swesome')!.clientHeight;
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template: auto / 1.1fr 0.9fr;
  grid-template-areas: "intro spotlight";

  @media (max-width: 1490px) {
    grid-template: auto / 1fr 1fr;
    grid-template-areas: "intro spotlight";
  }

  @media (max-width: 1300px) {
    grid-template: auto auto / 1fr;
    grid-template-areas: "intro" "spotlight";

    .home__intro,
    .home__spotlight {
      margin: 0;
    }
  }

  &__intro {
    grid-area: intro;
    margin-right: 2rem;

    @media (max-width: 1290px) {
      margin-right: 0;
    }

    @media (max-width: 1490px) {
      margin-right: 1rem;
    }
  }

  &__spotlight {
    grid-area: spotlight;
    margin-left: 2rem;

    @media (max-width: 1290px) {
      margin-left: 0;
    }

    @media (max-width: 1490px) {
      margin-left: 1rem;
    }
  }
}

.intro {
  align-items: center;
  display: flex;

  &__welcome {
    color: var(--color-grey-75);
    font-size: 1.6rem;
    line-height: 1.5;

    @media (min-width: 420px) {
      font-size: 2rem;
    }

    @media (min-width: 525px) {
      font-size: 2.6rem;
    }

    @media (min-width: 730px) {
      font-size: 3rem;
    }

    @media (min-width: 1000px) {
      font-size: 3.6rem;
    }

    @media (min-width: 2000px) {
      font-size: 4rem;
    }

    @media (min-width: 2500px) {
      font-size: 5rem;
    }

    @media (min-width: 3000px) {
      font-size: 6rem;
    }

    @media (min-width: 3500px) {
      font-size: 7rem;
    }
  }
}

.spotlight {
  display: grid;
  grid-gap: 3rem;
  grid-template: 1fr 1fr / 1fr 1fr;
  justify-content: center;

  @media (max-width: 690px) {
    grid-template: 1fr / 1fr;
  }

  &__tile {
    align-items: center;
    background-color: rgba(44, 44, 44, 0.5);
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 1rem;
    width: 100%;

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
      background: linear-gradient(to right, fade_out(#fff, 1) 0%, fade_out(#fff, 0.7) 100%);
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
    border: solid 0.4rem var(--color-grey-50);
    padding: 1rem;

    h2 {
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
    color: var(--color-grey-50);
    transition: color ease-in-out 0.2s;
    width: 100%;

    &:hover {
      color: #ed293d;
    }
  }

  &__todo {
    font-family: "Courier New", sans-serif;
  }
}

.css-is-awesome {
  animation-delay: 0.5s;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-name: slideIn;
  animation-timing-function: linear;
  opacity: 0;

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(-60%);
    }

    80% {
      opacity: 1;
      transform: translateX(20%);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>
