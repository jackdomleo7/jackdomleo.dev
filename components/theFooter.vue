<template>
  <footer class="footer">
    <a class="footer__bmc" target="_blank" rel="nofollow" href="https://www.buymeacoffee.com/jackdomleo">
      <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee">
      <span>Buy me a coffee</span>
    </a>
    <ul class="footer__social">
      <li v-for="(social, index) in socialMedia" :key="index" :aria-setsize="socialMedia.length + 1" :aria-posinset="index + 1">
        <a :href="social.url" rel="nofollow noopener" target="_blank" :aria-label="social.platform" data-cooltipz-dir="top">
          <svg-icon :name="social.platform.toLowerCase().replace(/\s/g, '')" />
        </a>
      </li>
      <li :aria-setsize="socialMedia.length + 1" :aria-posinset="socialMedia.length + 1">
        <a href="/feed" rel="nofollow noopener" aria-label="RSS" data-cooltipz-dir="top">
          <svg-icon name="rss" />
        </a>
      </li>
    </ul>
    <div class="footer__copy">
      &copy;{{ new Date().getFullYear() }} Jack Domleo. All rights reserved.
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import SocialMedia, { ISocial } from '@/middleware/socialMedia';

@Component
export default class TheFooter extends Vue {
  private get socialMedia (): ISocial[] {
    return SocialMedia.socialMedia;
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__social {
    display: flex;
    align-items: center;
    padding-left: 0;
    list-style-type: none;
    gap: 1rem;

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
      height: 1.8rem;
      width: 1.8rem;
      transition: all 160ms ease;

      @media screen and (min-width: 30em) {
        height: 2rem;
        width: 2rem;
      }
    }
  }

  &__bmc {
    $bmc-orange: #ff813f;
    padding: 0.4375rem 0.9375rem 0.4375rem 0.625rem;
    line-height: 1.5;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    color: var(--color-white);
    background-color: $bmc-orange;
    border-radius: 0.3125rem;
    border: 1px solid transparent;
    padding: 0.4375rem 0.9375rem 0.4375rem 0.625rem;
    font-size: 1.75rem;
    letter-spacing: 0.6px;
    box-shadow: 0 0.0625rem 0.125rem mix($bmc-orange, #000, 90%);
    margin: 0 auto;
    font-family: 'Cookie', cursive;
    margin: 2rem 0;

    img {
      height: 2.125rem;
      width: 2.1875rem;
      transform-origin: bottom;
      transition: transform 160ms ease;
    }

    span {
      margin-left: 0.3126rem;
    }

    &:hover, &:active, &:focus {
      background-color: mix($bmc-orange, #fff, 90%);
      color:var(--color-white);

      img {
        transform: rotate(-6deg);
      }
    }
  }
}
</style>
