<template>
  <section class="intro">
    <figure class="polaroid intro__img" tabindex="0">
      <div class="polaroid__img shine">
        <img src="@/assets/img/bio-image-jack-domleo.jpg" alt="Portrait image of Jack Domleo">
      </div>
      <figcaption>
        This is me
      </figcaption>
    </figure>
    <div class="intro__welcome">
      <p>
        I'm a mid-level <strong>front-end developer</strong> from <strong>Nottingham, UK</strong>.
      </p>
      <p>
        I work with Vue.js and TypeScript primarily, but you can find more in my toolbox <a href="#toolbox">here</a>. I am the author of <a href="https://levelupyourcareer.today" rel="nofollow noopener" target="_blank">Level-Up Your Career Today: Developer Edition</a>. I <nuxt-link to="/blog">
          blog
        </nuxt-link> about tech and engage with the <a href="https://twitter.com/jackdomleo7" target="_blank" rel="nofollow noopener">Tech Twitter</a> community.
      </p>
    </div>
    <div class="content">
      <div class="content__container">
        <p class="content__container__text">
          I like
        </p>

        <ul class="content__container__list">
          <li class="content__container__list__item">
            front-end &amp; UI/UX
          </li>
          <li class="content__container__list__item">
            self-development
          </li>
          <li class="content__container__list__item">
            tea ☕
          </li>
          <li class="content__container__list__item">
            ice hockey 🏒
          </li>
          <li class="content__container__list__item">
            to think 🤔
          </li>
          <li class="content__container__list__item">
            sunny holidays 🌞
          </li>
          <li class="content__container__list__item">
            Disney
          </li>
        </ul>
      </div>
    </div>
    <p class="intro__occupation">
      <svg-icon name="briefcase" /> <span class="sr-only">Current occupation</span> Developer at
      <a
        href="https://www.oceanfinance.co.uk/"
        rel="nofollow"
        target="_blank"
      >Ocean Finance</a>
    </p>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Intro extends Vue {}
</script>

<style lang="scss" scoped>
.polaroid {
  width: 180px;
  height: 220px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(120deg, #fff, #ddd 60%);
  box-shadow: 0px 0px 22px -4px rgba(0,0,0,.6),inset 4px 5px 10px 0 rgba(0,0,0,.1) !important;
  margin: 0;
  padding: 1rem 0.5rem 0 0.5rem;;
  transform: rotate(3deg);
  transform-origin: top;
  transition: all 0.5s ease;
  color: var(--color-grey-dark);

  &:hover,
  &:focus {
    transform: rotate(-3deg);

    @media screen and (prefers-reduced-motion: reduce) {
      transform: rotate(3deg);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0.5rem;
    transform: translateY(-50%);
    height: 0.5rem;
    width: 0.5rem;
    background: var(--color-black);
    border-radius: 50%;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
  }

  &__img {
    width: 100%;
    height: 80%;
    background-color: #000;
    overflow: hidden;
    user-select: none;

    img {
      animation: polaroid 3.5s ease;
      width: 100%;

      @media screen and (prefers-reduced-motion: reduce) {
        animation: none;
      }
    }

    &.shine {
      position: sticky;
    }
  }

  figcaption {
    font-family: "Rock Salt", sans-serif;
    letter-spacing: 0.1em;
    font-size: 1rem;
    display: flex;
    align-items: center;
    flex: 1;
  }

  @keyframes polaroid {
    0% {
      filter: opacity(0);
    }
    100% {
      filter: opacity(100%);
    }
  }
}

.intro {
  display: grid;
  grid-template-areas: "img" "welcome" "likes" "occupation";
  place-items: center;
  text-align: center;
  gap: 2rem;

  &__img {
    grid-area: img;

    @media screen and (min-width: 40em) {
      grid-row: 1/3;
    }
  }

  &__welcome {
    grid-area: welcome;
    font-size: 1rem;
    line-height: 1.2rem;

    @media screen and (min-width: 30em) {
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }

  &__occupation {
    grid-area: occupation;
    font-size: 1.2rem;
    line-height: 1.3rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      height: 1.6rem;
      width: 1.6rem;
    }

    @media screen and (min-width: 30em) {
      font-size: 1.4rem;
      line-height: 1.6rem;

      svg {
        height: 1.8rem;
        width: 1.8rem;
      }
    }
  }

  @media screen and (min-width: 40em) {
    grid-template-areas: "welcome img" "likes ." "occupation .";
    place-items: initial;
    text-align: left;
  }
}

.content {
  overflow: hidden;
  grid-area: likes;

  @media (min-width: 42em) {
    font-size: 1.6rem;
  }

  &__container {
    font-weight: 600;
    overflow: hidden;
    height: 1.5rem;
    display: flex;
    align-items: baseline;

    @media (min-width: 42em) {
      height: 2.2rem;
    }

    &:before {
      content: "[";
      padding-right: 1rem;
    }

    &:after {
      content: "]";
      padding-left: 1rem;
    }

    &:after,
    &:before {
      color: var(--color-orange);
    }

    &__text {
      margin: 0;
    }

    &__list {
      margin-top: 0;
      padding-left: 1rem;
      text-align: left;
      list-style: none;

      animation-name: change;
      animation-duration: 20s;
      animation-iteration-count: infinite;

      &__item {
        margin: 0;
      }
    }
  }
}

@keyframes change {
  0%,
  3.99%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  7.98%,
  11.97% {
    transform: translate3d(0, -14.29%, 0);
  }
  15.96%,
  19.95% {
    transform: translate3d(0, -28.57%, 0);
  }
  23.94%,
  27.93% {
    transform: translate3d(0, -42.86%, 0);
  }
  31.92%,
  35.91% {
    transform: translate3d(0, -57.14%, 0);
  }
  39.9%,
  43.89% {
    transform: translate3d(0, -71.43%, 0);
  }
  47.88%,
  51.87% {
    transform: translate3d(0, -85.71%, 0);
  }
  55.86%,
  59.85% {
    transform: translate3d(0, -71.43%, 0);
  }
  63.84%,
  67.83% {
    transform: translate3d(0, -57.14%, 0);
  }
  71.82%,
  75.81% {
    transform: translate3d(0, -42.86%, 0);
  }
  79.8%,
  83.79% {
    transform: translate3d(0, -28.57%, 0);
  }
  87.78%,
  91.77% {
    transform: translate3d(0, -14.29%, 0);
  }
}
</style>
