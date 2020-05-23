<template>
  <footer class="footer">
    <ul class="footer__social">
      <li v-for="(social, index) in socialMedia" :key="index" :aria-setsize="socialMedia.length" :aria-posinset="index + 1">
        <a :href="social.url" rel="nofollow" :aria-label="social.platform" data-cooltipz-dir="top">
          <svg-icon :name="social.platform.toLowerCase().replace(/\s/g, '')" />
        </a>
      </li>
    </ul>
    <div class="footer__copy">
      &copy;{{ new Date().getFullYear() }} Jack Domleo
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SocialMedia, { ISocial } from '@/middleware/socialMedia';

@Component
export default class Footerbar extends Vue {
  private get socialMedia (): ISocial[] {
    return SocialMedia.socialMedia;
  }
}
</script></style>

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
}
</style>
