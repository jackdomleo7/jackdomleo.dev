<template>
  <header class="top-app-bar">
    <section class="top-app-bar__navigation">
      <router-link to="/" class="navigation__logo-link">
        <img class="navigation__logo" src="img/nav-logo.png" alt="Jack" />
      </router-link>
      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li v-for="(navLink, index) in navLinks" :key="index" class="navigation__item">
            <router-link :to="navLink.link" class="navigation__link">
              {{ navLink.text }}
            </router-link>
          </li>
        </ul>
      </nav>
    </section>
    <section class="top-app-bar__social">
      <ul class="social__list">
        <li v-for="socialLink in socialLinks" :key="socialLink" class="social__item">
          <a class="social__link" :href="socialLink.link" :aria-label="socialLink.label" data-balloon-pos="down">
            <svg class="social__icon">
              <use :xlink:href="'assets/svg-sprite.svg#icon-' + socialLink.icon"></use>
            </svg>
          </a>
        </li>
      </ul>
    </section>
    <button @click="isMobileNavExpanded = !isMobileNavExpanded" class="navigation__hamburger-button" :aria-label="(isMobileNavExpanded ? 'Collapse' : 'Expand') + ' menu'" data-balloon-pos="left">
      <svg class="navigation__hamburger">
        <use xlink:href="assets/svg-sprite.svg#icon-hamburger"></use>
      </svg>
    </button>
    <section v-if="screenWidth < 660" class="top-app-bar__mobile" :class="isMobileNavExpanded ? 'top-app-bar__mobile--expanded' : ''">
      nav stuff
    </section>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {

  },
})
export default class TopAppBar extends Vue {
  private isMobileNavExpanded: boolean = false;
  private screenWidth: number = screen.width;

  private readonly navLinks: object[] = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About',
      link: '/about',
    },
    {
      text: 'Projects',
      link: '/projects',
    },
  ];

  private readonly socialLinks: object[] = [
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jack-domleo/',
      icon: 'linkedin',
    },
    {
      label: 'GitHub',
      link: 'https://github.com/JDomleo',
      icon: 'github',
    },
    {
      label: 'CodePen',
      link: 'https://codepen.io/JackDomleo/',
      icon: 'codepen',
    },
  ];
}
</script>

<style lang="scss" scoped>
@import "../scss/colours";

$dropdown-navigation-max-screen-width: 660px;

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

%flexbox-navigation {
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
}

.top-app-bar {
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  padding: 3rem 5rem 0;
  width: 100vw;

  @media (max-width: $dropdown-navigation-max-screen-width) {
    background-color: $grey-800;
    padding: 0.5rem 1rem 0;
    position: fixed;
    z-index: 1000;
  }

  &__navigation {
    @extend %flexbox-navigation;
  }

  &__social {
    @extend %fade-in-animation;
    @extend %flexbox-navigation;

    @media (max-width: $dropdown-navigation-max-screen-width) {
      display: none;
    }
  }

  &__mobile {
    background-color: fade_out($grey-800, 0.3);
    display: flex;
    flex-direction: column;
    height: 0;
    left: 0;
    overflow-y: hidden;
    position: absolute;
    top: 100%;
    transition: 0.2s height ease-in-out;
    width: 100vw;
    z-index: 999;

    &--expanded {
      height: 80vh;
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
    color: $grey-75;
    font-size: 0.875rem;
    list-style-type: none;
    text-transform: uppercase;
  }

  &__item {
    display: inline-block;
    padding: 0 0.625rem;
  }

  &__link {
    color: inherit;
    text-decoration: none;
    transition: 0.2s color ease-in-out;

    &:hover {
      color: $grey-600;
    }

    &.router-link-exact-active {
      color: $blue;
    }
  }

  &__hamburger {
    color: $grey-50;
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
          color: fade_out($orange-500, 0.4);
        }

        &:hover {
          .social__icon {
            color: $orange-500;
          }
        }
      }
    }
  }

  &__item {
    display: inline-block;
    padding: 0 0.5rem;
  }

  &__link {
    display: block;
  }

  &__icon {
    $square-dimensions: 1.5rem;
    color: $orange-500;
    height: $square-dimensions;
    transition: 0.2s color ease-in-out;
    width: $square-dimensions;
  }
}
</style>
