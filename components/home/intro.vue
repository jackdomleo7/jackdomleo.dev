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
    <p class="intro__welcome">
      I'm a <strong>front-end developer</strong> from <strong>Nottingham, UK</strong>.
    </p>
    <p class="intro__i-like">
      I like
      <span class="intro__likes">
        <span class="intro__like">front-end</span><span class="intro__like">UI/UX</span><span class="intro__like">tea ☕</span><span class="intro__like">Disney</span><span class="intro__like">to think 🤔</span><span class="intro__like">sunny holidays 🌞</span><span class="intro__like">ice hockey 🏒</span>
      </span>
    </p>
    <p class="intro__occupation">
      <svg-icon name="briefcase" /> <span class="sr-only">Current occupation</span> Developer at
      <a
        href="https://www.mitrefinch.co.uk?ref=jackdomleo.dev"
        rel="nofollow"
        target="_blank"
      >Mitrefinch</a>
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
  box-shadow: 2px -2px 20px 0px rgba(0, 0, 0, 0.6),
    inset 4px 5px 10px 0 rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 1rem 0.5rem 0 0.5rem;;
  transform: rotate(3deg);
  transform-origin: top;
  transition: all 0.5s ease;
  color: var(--color-grey-dark);

  &:hover,
  &:focus {
    transform: rotate(-3deg);
    box-shadow: 2px -2px 20px 0px rgba(0, 0, 0, 0.6),
      inset 4px 5px 10px 0 rgba(0, 0, 0, 0.1) !important;

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
    background: radial-gradient(var(--color-blue), var(--color-blue-dark));
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
  gap: 0.5rem;

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

  &__i-like {
    font-size: 140%;
    margin-right: 4rem;
  }

  &__likes {
    grid-area: likes;
    margin-left: 0.5rem;
  }

  &__like {
    animation: like 28s infinite ease forwards;
    opacity: 0;
    position: absolute;

    @for $i from 2 through 8 {
      &:nth-child(#{$i}) {
        animation-delay: calc((#{$i} - 1) * 4s);
      }
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

@keyframes like {
  0%, 15% {
    opacity: 0;
  }
  2.5%, 12.5% {
    opacity: 1;
  }
}
</style>
