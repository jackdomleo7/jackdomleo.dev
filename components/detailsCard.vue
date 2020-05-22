<template>
  <div class="details__wrapper">
    <section class="details">
      <header>
        <div class="details__picture">
          <div>
            <img
              src="@/assets/img/bio-image-jack-domleo.jpg"
              alt="Portait image of Jack Domleo"
            >
          </div>
        </div>
        <h2>Jack Domleo</h2>
        <p>
          <svg-icon name="code" /> Developer at
          <a
            href="https://www.mitrefinch.co.uk?ref=jackdomleo.dev"
            rel="nofollow"
            target="_blank"
          >Mitrefinch</a>
        </p>
        <p><svg-icon name="pin" /> Nottingham, UK</p>
      </header>
      <main>
        <ul>
          <li>Passion for front-end and UI/UX</li>
          <li>Disney fanatic</li>
          <li>Ice hockey and field hockey fan</li>
          <li>Enjoy travelling to hot places</li>
        </ul>
      </main>
      <footer>
        <ul>
          <li
            v-for="(social, index) in socialMedia"
            :key="index"
            :aria-setsize="socialMedia.length"
            :aria-posinset="index + 1"
          >
            <a
              :href="social.url"
              rel="nofollow"
              :aria-label="social.platform"
              data-cooltipz-dir="top"
            >
              <svg-icon :name="social.platform.toLowerCase().replace(/\s/g, '')" />
            </a>
          </li>
        </ul>
      </footer>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SocialMedia, { ISocial } from '@/middleware/socialMedia';

@Component
export default class DetailsCard extends Vue {
  private get socialMedia (): ISocial[] {
    return SocialMedia.socialMedia;
  }
}
</script>

<style lang="scss" scoped>
.details {
  background-color: var(--body-background);
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 1rem;

  @media screen and (min-width: 41em) {
    padding: 1rem 2rem;
  }

  &__wrapper {
    background: linear-gradient(
      50deg,
      var(--color-orange-deep),
      var(--color-blue)
    );
    margin: 3rem 1rem;
    padding: 4px;
    background-size: 100%;
    border-radius: 6px;
  }

  header {
    display: flex;
    flex-direction: column;

    .details__picture {
      background: linear-gradient(
        50deg,
        var(--color-orange-deep),
        var(--color-blue)
      );
      padding: 4px;
      height: 6.2rem;
      width: 6.2rem;
      border-radius: 50%;
      overflow: hidden;
      align-self: center;
      margin-top: -2.8125rem;
      position: relative;

      @media screen and (min-width: 36.25em) {
        position: absolute;
      }

      &::before {
        background: linear-gradient(
          to right,
          fade_out(#fff, 1) 0%,
          fade_out(#fff, 0.7) 100%
        );
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

      &:hover,
      &:focus {
        &::before {
          animation: Shine 0.85s;
        }
      }

      @keyframes Shine {
        100% {
          left: 125%;
        }
      }

      > div {
        background-color: var(--body-background);
        border-radius: 50%;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      img {
        border-radius: 50%;
        font-size: 0.75rem;
      }
    }

    p {
      margin: 0;

      svg {
        height: 0.8rem;
        width: 0.8rem;
        margin-right: 0.25rem;
      }
    }

    h2 {
      margin-bottom: 0.5rem;
    }
  }

  main {
    margin: 0.5rem 0;

    ul {
      padding-left: 1.5rem;

      @media screen and (min-width: 30em) {
        padding-left: 2.5rem;
      }
    }
  }

  footer {
    align-self: flex-end;

    ul {
      display: flex;
      align-items: center;
      padding-left: 0;
      list-style-type: none;
      gap: 1rem;
      margin-bottom: 0;

      a,
      svg {
        color: currentColor;
      }

      a {
        display: block;

        &:hover {
          svg {
            transform: translateY(4px) rotate(-5deg);
          }
        }
      }

      svg {
        height: 1rem;
        width: 1rem;
        transition: all 160ms ease;

        @media screen and (min-width: 30em) {
          height: 1.2rem;
          width: 1.2rem;
        }
      }
    }
  }
}
</style>
