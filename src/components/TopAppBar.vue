<template>
  <header class="top-app-bar">
    <router-link to="/" class="top-app-bar__logo-link">
      <img class="top-app-bar__logo" src="img/jack-full-name-white.png" alt="Jack" />
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
}
</script>

<style lang="scss" scoped>
@import "../scss/colours";

.top-app-bar {
  align-items: stretch;
  background-color: transparent;
  display: flex;
  flex-flow: row nowrap;
  padding: 3rem 5rem 0;
  width: 100vw;

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
    animation-delay: 0.5s;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-name: fadeIn;
    animation-timing-function: linear;
    display: inline-block;
    opacity: 0;

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
