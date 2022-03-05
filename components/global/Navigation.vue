<template>
  <nav class="nav">
    <div class="nav__wrapper">
      <nuxt-link to="/" class="nav__name">
        Jack Domleo
        <span class="sr-only"> - Home</span>
      </nuxt-link>
      <nuxt-img src="~assets/images/j-icon.svg" alt="" class="nav__logo" />
      <div class="nav__primary">
        <ul class="nav__primary-list">
          <li v-for="(navItem, index) in navItems" :key="navItem.text" class="nav__item" :hidden="(isMobile && index === navItems.length - 1) || (!isMobile && index === 0)">
            <nuxt-link v-if="navItem.url" :to="navItem.url" :class="{'is-home': navItem.text.toLowerCase() === 'home'}">
              <svg-icon v-if="navItem.icon" :name="navItem.icon" />
              <span>{{ navItem.text }}</span>
            </nuxt-link>
            <a v-else href="javascript:void(0);">
              <span>{{ navItem.text }}</span>
              <svg-icon class="nav__item-chevron" name="chevron-down" />
            </a>
            <ul v-if="navItem.submenu">
              <li v-for="subItem in navItem.submenu" :key="subItem.text">
                <nuxt-link v-if="subItem.url" :to="subItem.url">
                  {{ subItem.text }}
                </nuxt-link>
              </li>
              <li v-if="navItem.text === 'More'" role="presentation">
                <theme-switcher id="desktop" />
              </li>
            </ul>
          </li>
        </ul>
        <button v-show="isMobile" class="nav__hamburger" :class="{'nav__hamburger--open': showMobileNav}" @click="showMobileNav = !showMobileNav">
          <span></span>
          <div class="nav__hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span class="sr-only">Show {{ showMobileNav ? 'more' : 'less' }}</span>
        </button>
      </div>
      <ul class="nav__more" :class="{'nav__more--mobile-open': isMobile && showMobileNav}">
        <li>
          <nuxt-link to="/">
            <nuxt-img src="~assets/images/j-icon.svg" alt="" />
          </nuxt-link>
        </li>
        <li v-for="navItem in navItems.find(x => x.text === 'More').submenu" :key="navItem.text">
          <nuxt-link v-if="navItem.url" :to="navItem.url">
            {{ navItem.text }}
          </nuxt-link>
        </li>
        <li role="presentation">
          <theme-switcher id="mobile" />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import ThemeSwitcher from '../ThemeSwitcher.vue'

interface ISubNav {
  text: String;
  url: String | null;
  icon?: String;
}

interface INav extends ISubNav {
  submenu: ISubNav[]
}

export default Vue.extend({
  name: 'Navigation',
  components: { ThemeSwitcher },
  data () {
    return {
      isMobile: false,
      isTouchscreen: false,
      showMobileNav: false,
      navItems: [
        {
          text: 'Home',
          url: '/',
          icon: 'home'
        },
        {
          text: 'About',
          url: '/about',
          icon: 'person'
        },
        {
          text: 'Projects',
          url: '/projects',
          icon: 'code'
        },
        {
          text: 'Blog',
          url: '/blog',
          icon: 'blog'
        },
        {
          text: 'More',
          url: null,
          submenu: [] as ISubNav[]
        }
      ] as INav[]
    }
  },
  watch: {
    // Close navigation menu on page change
    '$route' () {
      this.showMobileNav = false
    }
  },
  mounted (): void {
    this.setResponsiveness()
    window.addEventListener('resize', this.setResponsiveness)
  },
  destroyed (): void {
    window.removeEventListener('resize', this.setResponsiveness)
  },
  methods: {
    setResponsiveness (): void {
      const navBreak = window.getComputedStyle(document.querySelector('nav.nav')!).getPropertyValue('--nav-break')
      this.isMobile = !window.matchMedia(`(min-width: ${navBreak})`).matches
      this.isTouchscreen = !window.matchMedia('(hover: hover)').matches

    }
  }
})
</script>

<style lang="scss" scoped>
@use 'sass:math';

$nav-height: 4rem;

.nav {
  --nav-break: #{$responsive-small-desktop};
  position: fixed;
  z-index: 999;
  width: 100vw;
  background-color: var(--colour-foreground-1);

  @media (max-width: $responsive-small-desktop - math.div(1em, 16)) {
    bottom: 0;

    &__name,
    &__logo {
      display: none;
    }

    &__primary {
      position: relative;
      z-index: 2;
      box-shadow: var(--shadow-standard-reverse);
      background-color: var(--colour-foreground-1);

      &-list {
        display: flex;
        justify-content: center;
        padding-left: 0;
        margin: 0;
        list-style-type: none;
      }
    }

    &__item {
      width: 20%;

      &:nth-child(2) {
        margin-right: auto;
      }

      a {
        height: $nav-height;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: var(--text-small);
        text-decoration: none;
        text-align: center;
        color: var(--colour-text-secondary);
        will-change: color, background-color;
        transition-property: color, background-color;
        transition: var(--standard-animation-timing) ease;
      }

      svg {
        height: 2rem;
        width: 2rem;
      }
    }

    &__hamburger {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 25%;
      left: 50%;
      transform: translateX(-50%);
      width: 3.375rem;
      height: 1.9375rem;
      background-color: var(--colour-primary);
      border: none;
      margin: 1rem 0;
      box-shadow: 0 0 8px rgba(0,0,0,0.4);

      &::before,
      &::after {
        content: "";
        position: absolute;
        z-index: 1;
        width: 2.375rem;
        height: 2.375rem;
        transform: scaleY(0.5774) rotate(-45deg);
        background-color: inherit;
        left: 0.5rem;
        box-shadow: 0 0 8px rgba(0,0,0,0.4);
      }

      &::before {
        top: -1.1875rem;
      }

      &::after {
        bottom: -1.1875rem;
      }

      > span {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 3.375rem;
        height: 1.9375rem;
        z-index: 2;
        background: inherit;
      }

      &-icon {
        width: 1.3rem;
        height: 1.1rem;
        position: relative;
        z-index: 2;
        transform: rotate(0deg);
        cursor: pointer;

        span {
          display: block;
          position: absolute;
          height: 0.25rem;
          width: 100%;
          background-color: var(--colour-text-button);
          border-radius: 0.5rem;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: 0.25s ease-in-out;

          &:nth-child(1) {
            top: 0;
          }

          &:nth-child(2),
          &:nth-child(3) {
            top: 45%;
          }

          &:nth-child(4) {
            top: 90%;
          }

          .nav__hamburger--open & {
            &:nth-child(1),
            &:nth-child(4) {
              top: 45%;
              width: 0;
              left: 50%;
            }

            &:nth-child(2) {
              transform: rotate(45deg);
            }

            &:nth-child(3) {
              transform: rotate(-45deg);
            }
          }
        }
      }
    }

    &__more {
      position: fixed;
      z-index: 1;
      top: 100%;
      transition: top 0.4s ease;
      will-change: top;
      background-color: var(--colour-foreground-1);
      box-shadow: 0 0 8px 2px rgba(0,0,0,0.2);
      height: calc(100vh - #{$nav-height});
      overflow-y: auto;
      padding-left: 0;
      margin: 0;
      padding: 2rem 0;
      list-style-type: none;
      width: 100vw;

      &--mobile-open {
        top: 0;
      }

      img {
        width: 4rem;
        margin-inline: auto;
      }

      li {
        max-width: 100%;
        width: 100%;
        overflow: hidden;
        max-height: 3rem;
        transition: max-height 160ms ease;
        will-change: max-height;

        &:nth-last-child(2) {
          margin-bottom: 2rem;
        }

        &[role="presentation"] {
          max-height: unset;
          margin-top: 5rem;
        }
      }

      > li:first-of-type { // Logo
        max-height: unset;
        max-width: 18rem;
        margin-inline: auto;
        border-bottom-color: transparent;
      }

      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.8rem 1rem;
        position: relative;
        z-index: 12;
        color: var(--colour-text-primary);
      }
    }
  }

  @media (min-width: $responsive-small-desktop) {
    color: var(--colour-text-primary);
    z-index: 99;
    box-shadow: var(--shadow-standard);
    position: fixed;
    height: 4rem;

    &__wrapper {
      max-width: 104rem;
      margin-inline: auto;
      display: flex;
      align-items: stretch;
      gap: 1rem;
      justify-content: space-between;
      padding: 0.25rem 10rem;
    }

    &__name {
      color: var(--colour-text-primary) !important;
      font-weight: 700;
      font-size: var(--text-large);
      text-decoration: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
    }

    &__logo {
      width: 3.5rem;
      position: relative;
      left: 10%;
    }

    &__primary {
      display: flex;

      &-list {
        list-style-type: none;
        padding-left: 0;
        margin: 0;
      }

      svg:not(.nav__item-chevron) {
        display: none;
      }
    }

    &__item {
      display: inline-flex;
      font-weight: 700;
      font-size: var(--text-large);
      height: 100%;

      &:hover,
      &:focus-within {
        ul {
          opacity: 1;
          visibility: visible;
        }
      }

      svg {
        height: 2rem;
        width: 2rem;
      }

      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.25rem;
        height: 100%;
        width: 100%;
        min-width: 6.5rem; // 104px
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        border-radius: 0.625rem;
        color: var(--colour-text-primary);
        will-change: color, background-color;
        transition-property: color, background-color;
        transition: var(--standard-animation-timing) ease;

        &:hover,
        &:focus {
          background-color: var(--colour-primary-faint);

          + ul {
            opacity: 1;
            visibility: visible;
          }
        }
      }

      ul {
        opacity: 0;
        visibility: hidden;
        will-change: opacity, visibility;
        transition-property: opacity, visibility;
        transition: var(--standard-animation-timing) ease;
        position: absolute;
        top: 100%;
        padding-left: 0;
        margin: 0;
        list-style-type: none;
        background-color: var(--colour-foreground-1);
        box-shadow: var(--shadow-standard);
        padding: 0.5rem 0.75rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
        font-size: var(--text-body);
        
        li {
          width: 100%;

          &:nth-last-child(2) {
            margin-bottom: 2rem;
          }
        }

        a {
          padding: 0.5rem;
        }
      }
    }

    &__hamburger {
      display: none;
    }

    &__more {
      display: none;
    }
  }

  a.nuxt-link-active {
    color: var(--colour-primary);
  }

  a.is-home:not(.nuxt-link-exact-active) {
    color: var(--colour-text-secondary);
  }
}
</style>