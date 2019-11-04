<template>
  <header class="top-app-bar">
    <div class="top-app-bar__navigation">
      <router-link to="/" class="top-app-bar__logo-link">
        <img class="top-app-bar__logo" src="img/nav-logo.png" alt="Jack" />
      </router-link>
      <nav class="top-app-bar__nav">
        <ul class="top-app-bar__nav-items">
          <li v-for="(navLink, index) in navLinks" :key="index" class="top-app-bar__nav-item">
            <router-link :to="navLink.link" class="top-app-bar__nav-link">
              {{ navLink.text }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="top-app-bar__social">
      <ul class="top-app-bar__social-items">
        <li v-for="socialLink in socialLinks" :key="socialLink" class="top-app-bar__social-item">
          <a :href="socialLink.link" :aria-label="socialLink.label" data-balloon-pos="down">
            <svg class="top-app-bar__social-icon">
              <use :xlink:href="'assets/svg-sprite.svg#icon-' + socialLink.icon"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {

  },
})
export default class TopAppBar extends Vue {
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
      icon: 'linkedin'
    },
    {
      label: 'GitHub',
      link: 'https://github.com/JDomleo',
      icon: 'github'
    },
    {
      label: 'CodePen',
      link: 'https://codepen.io/JackDomleo/',
      icon: 'codepen'
    }
  ];
}
</script>

<style lang="scss" scoped>
@import "../scss/colours";

.top-app-bar {
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  padding: 3rem 5rem 0;
  width: 100vw;

  &__navigation {
    align-items: stretch;
    display: flex;
    flex-flow: row nowrap;
  }

  &__social {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;

    &-icon {
      color: $orange-500;
      height: 1.5rem;
      transition: 0.2s color ease-in-out;
      width: 1.5rem;
    }

    &-item {
      display: inline-block;
      padding: 0 0.5rem;

      &s {
        list-style-type: none;
        padding-left: 0;

        &:hover {
          .top-app-bar__social-item {
            .top-app-bar__social-icon {
              color: fade_out($orange-500, 0.4);
            }

            &:hover {
              .top-app-bar__social-icon {
                color: $orange-500;
              }
            }
          }
        }
      }

      a {
        display: block;
      }
    }
  }

  &__nav,
  &__social {
    animation-delay: 0.5s;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-name: fadeIn;
    animation-timing-function: linear;
    opacity: 0;
  }

  &__logo {
    animation-delay: 1s;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-name: bounceIn;
    animation-timing-function: linear;
    margin: 0 0.5rem;
    opacity: 0;
    width: 5rem;

    &-link {
      display: inline-block;
    }
  }

  &__nav {
    display: inline-block;

    &-item {
      display: inline-block;
      padding: 0 0.625rem;
      text-transform: uppercase;

      &s {
        color: $grey-75;
        font-size: 0.875rem;
        list-style-type: none;
      }
    }

    &-link {
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
  }
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
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
