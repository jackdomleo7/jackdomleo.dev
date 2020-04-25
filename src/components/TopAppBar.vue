<template>
  <header class="top-app-bar">
    <section class="top-app-bar__navigation">
      <router-link :to="{ name: Routes.Home }" class="navigation__logo-link">
        <img class="navigation__logo" src="img/nav-logo.png" alt="Jack" />
      </router-link>
      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li v-for="(navLink, index) in navLinks" :key="index" class="navigation__item">
            <router-link :to="navLink.link" class="navigation__link" :aria-current="isCurrent(navLink.link) ? 'page' : null">
              {{ navLink.text }}
            </router-link>
          </li>
        </ul>
      </nav>
    </section>
    <section class="top-app-bar__social">
      <ul class="social__list">
        <li v-for="(socialLink, index) in socialLinks" :key="index" class="social__item">
          <a class="social__link" :href="socialLink.link" :aria-label="socialLink.label" data-cooltipz-dir="bottom" target="_blank" rel="noreferrer">
            <icon class="social__icon" :icon="socialLink.icon" />
          </a>
        </li>
      </ul>
    </section>
    <button @click="isMobileNavExpanded = !isMobileNavExpanded" class="navigation__hamburger-button">
      <icon class="navigation__hamburger" icon="hamburger" />
    </button>
    <section class="top-app-bar__mobile" :class="isMobileNavExpanded ? 'top-app-bar__mobile--expanded' : ''" :aria-expanded="isMobileNavExpanded.toString()">
      <nav class="mobile__nav">
        <ul class="mobile__list">
          <li v-for="(navLink, index) in navLinks" :key="index" class="mobile__item" @click="isMobileNavExpanded = false">
            <router-link :to="navLink.link" class="mobile__link" :aria-current="isCurrent(navLink.link) ? 'page' : null">
              <icon class="mobile__icon" :icon="navLink.icon" />
              {{ navLink.text }}
            </router-link>
          </li>
        </ul>
      </nav>
      <div>
        <ul class="mobile-social__list">
          <li class="mobile-social__item" v-for="(socialLink, index) in socialLinks" :key="index">
            <a class="mobile-social__link" :href="socialLink.link" :aria-label="socialLink.label" data-cooltipz-dir="top" target="_blank" rel="noreferrer">
              <icon class="mobile-social__icon" :icon="socialLink.icon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
    <div v-if="isMobileNavExpanded" class="top-app-bar__mobile-mask" @click="isMobileNavExpanded = false"></div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Routes } from '@/router';
import { Icon } from '@/components';

interface INavLink {
  text: string;
  link: object;
  icon: string;
}

interface ISocialLink {
  label: string;
  link: string;
  icon: string;
}

@Component({
  components: {
    Icon,
  },
})
export default class TopAppBar extends Vue {
  private Routes: Routes = Routes;
  private isMobileNavExpanded: boolean = false;

  private readonly navLinks: INavLink[] = [
    {
      text: 'Home',
      link: { name: Routes.Home },
      icon: 'home',
    },
    {
      text: 'About',
      link: { name: Routes.About },
      icon: 'user',
    },
    {
      text: 'Projects',
      link: { name: Routes.Projects },
      icon: 'code',
    },
  ];

  private readonly socialLinks: ISocialLink[] = [
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jack-domleo?ref=jackdomleo.dev',
      icon: 'linkedin',
    },
    {
      label: 'GitHub',
      link: 'https://github.com/JDomleo?ref=jackdomleo.dev',
      icon: 'github',
    },
    {
      label: 'CodePen',
      link: 'https://codepen.io/JackDomleo?ref=jackdomleo.dev',
      icon: 'codepen',
    },
    {
      label: 'Twitter',
      link: 'https://twitter.com/jackdomleo7?ref=jackdomleo.dev',
      icon: 'twitter',
    },
  ];

  private isCurrent(to: string): boolean {
    return this.$route.path === to;
  }
}
</script>

<style lang="scss" scoped>
$dropdown-navigation-max-screen-width: 660px;
$icon-dimensions: 1.5rem;

%fade-in-animation {
  animation-delay: 0.5s;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-name: fadeIn;
  animation-timing-function: linear;
  opacity: 0;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
}

.top-app-bar {
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  padding: 3rem 5rem 0;
  width: 100%;

  @media (min-width: 2000px) {
    padding: 3.5rem 6rem 1rem;
  }

  @media (min-width: 3500px) {
    padding: 4rem 7rem 2rem;
  }

  @media (max-width: $dropdown-navigation-max-screen-width) {
    background-color: var(--color-grey-800);
    padding: 0.5rem 1rem 0;
    position: fixed;
    top: 0;
    z-index: 1000;
  }

  &__navigation {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    user-select: none;
  }

  &__social {
    @extend %fade-in-animation;
    align-items: center;
    display: flex;
    flex-flow: row nowrap;

    @media (max-width: $dropdown-navigation-max-screen-width) {
      display: none;
    }
  }

  &__mobile {
    background-color: var(--color-grey-800);
    display: none;
    flex-direction: column;
    height: 0;
    left: 0;
    overflow-y: hidden;
    position: absolute;
    top: 100%;
    transition: 0.2s height ease-in-out;
    width: 100vw;
    z-index: 999;

    @media (max-width: $dropdown-navigation-max-screen-width) {
      display: flex;
    }

    &-mask {
      height: 100vh;
      left: 0;
      position: absolute;
      top: 0;
      width: 100vw;
      z-index: 998;
    }

    &--expanded {
      height: 20rem;
    }
  }
}

.navigation {
  &__logo {
    animation-delay: 1s;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-name: bounceIn;
    animation-timing-function: linear;
    margin: 0 0.5rem;
    opacity: 0;
    width: 5rem;

    @media (min-width: 2000px) {
      width: 7.5rem;
    }

    @media (min-width: 3500px) {
      width: 10rem;
    }

    @keyframes bounceIn {
      0% {
        opacity: 0;
        transform: scale(0.3) translate3d(0, 0, 0);
      }

      50% {
        opacity: 0.9;
        transform: scale(1.1);
      }

      80% {
        opacity: 1;
        transform: scale(0.89);
      }

      100% {
        opacity: 1;
        transform: scale(1) translate3d(0, 0, 0);
      }
    }

    &-link {
      display: inline-block;
    }
  }

  &__nav {
    @extend %fade-in-animation;
    display: inline-block;

    @media (max-width: $dropdown-navigation-max-screen-width) {
      display: none;
    }
  }

  &__list {
    color: var(--color-grey-75);
    font-size: 0.875rem;
    list-style-type: none;
    text-transform: uppercase;

    @media (min-width: 2000px) {
      font-size: 1.6rem;
    }

    @media (min-width: 3500px) {
      font-size: 2.2rem;
    }
  }

  &__item {
    display: inline-block;
    padding: 0 0.625rem;

    @media (min-width: 2000px) {
      padding: 0 1.2rem;
    }
  }

  &__link {
    color: inherit;
    text-decoration: none;
    transition: 0.2s color ease-in-out;

    &:hover {
      color: var(--color-grey-600);
    }

    &.router-link-exact-active {
      color: var(--color-blue);
    }
  }

  &__hamburger {
    color: var(--color-grey-50);
    height: 1.5rem;
    width: 1.5rem;

    &-button {
      @extend %fade-in-animation;
      background-color: transparent;
      border: none;
      display: none;

      @media (max-width: $dropdown-navigation-max-screen-width) {
        display: inline-block;
      }
    }
  }
}

.social {
  &__list {
    list-style-type: none;
    padding-left: 0;

    &:hover {
      .social__item {
        .social__icon {
          opacity: 0.4;
        }

        &:hover {
          .social__icon {
            opacity: 1;
          }
        }
      }
    }
  }

  &__item {
    display: inline-block;
    padding: 0 0.5rem;

    @media (min-width: 2000px) {
      padding: 0 1rem;
    }
  }

  &__link {
    display: block;
  }

  &__icon {
    color: var(--color-orange);
    height: $icon-dimensions;
    transition: 0.2s opacity ease-in-out;
    width: $icon-dimensions;

    @media (min-width: 2000px) {
      height: $icon-dimensions * 1.4;
      width: $icon-dimensions * 1.4;
    }

    @media (min-width: 3500px) {
      height: $icon-dimensions * 2;
      width: $icon-dimensions * 2;
    }
  }
}

.mobile {
  &__nav {
    color: var(--color-grey-50);
    font-size: 1.25rem;
    padding: 2rem 5rem;

    @media (max-width: 550px) {
      padding: 2rem 4rem;
    }

    @media (max-width: 440px) {
      padding: 2rem 3rem;
    }
  }

  &__list {
    list-style-type: none;
    margin-top: 0;
    padding-left: 0;
  }

  &__item {
    height: 3rem;
    margin: 1rem 0;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__link {
    align-items: center;
    color: inherit;
    display: flex;
    height: 100%;
    text-decoration: none;

    &.router-link-exact-active {
      .mobile__icon {
        color: var(--color-blue);
      }
    }
  }

  &__icon {
    height: $icon-dimensions;
    margin-right: 1rem;
    width: $icon-dimensions;
  }

  &-social {
    &__list {
      color: var(--color-grey-50);
      display: flex;
      justify-content: center;
      list-style-type: none;
      margin-top: 0;
      padding-left: 0;
    }

    &__item {
      padding: 0 0.5rem;
    }

    &__link {
      align-items: center;
      color: inherit;
      display: flex;
      height: 3rem;
      justify-content: center;
      width: 3rem;
    }

    &__icon {
      height: $icon-dimensions;
      width: $icon-dimensions;
    }
  }
}
</style>
