<template>
  <div class="banner">
    <nav class="nav">
      <ul>
        <li v-for="(navItem, index) in navList" :key="navItem.url" :aria-setsize="navList.length" :aria-posinset="index + 1">
          <nuxt-link :to="navItem.url" :aria-current="isCurrent(navItem.url)">
            <svg-icon :name="navItem.icon" />
            {{ navItem.text }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface INav {
  text: string;
  url: string;
  icon: string;
}

export default Vue.extend({
  name: 'Navigation',
  data () {
    return {
      navList: [
        {
          text: 'Home',
          url: '/',
          icon: 'home'
        },
        {
          text: 'Career',
          url: '/career',
          icon: 'briefcase'
        },
        {
          text: 'Projects',
          url: '/projects',
          icon: 'code'
        },
        {
          text: 'Blog',
          url: '/blog',
          icon: 'file'
        }
      ] as INav[]
    }
  },
  methods: {
    isCurrent (path: string): 'page' | undefined {
      return this.$route.path === path ? 'page' : undefined
    }
  }
})
</script>

<style lang="scss" scoped>
$mobile-break: 32em;

.banner {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;
  background-color: var(--base-white);

  @media (min-width: $mobile-break) {
    position: absolute;
    top: 1rem;
    left: 1rem;
    bottom: unset;
    width: auto;
    background-color: transparent;
  }
}

.nav {
  padding: 0.4rem 1rem;
  font-family: var(--font-cursive);
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  @media (min-width: $mobile-break) {
    padding: 1rem;
    box-shadow: none;
  }

  > ul {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding-left: 0;
    margin: 0;
    list-style-type: none;
    justify-content: space-between;

    @media (min-width: $mobile-break) {
      justify-content: unset;
    }
  }

  a {
    color: var(--base-black);
    text-decoration: none;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.15rem;
    font-size: 0.75rem;

    @media (min-width: $mobile-break) {
      font-size: 1rem;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -1rem;
      left: 0;
      height: 7px;
      width: 100%;
      border: solid 2px var(--base-black);
      border-color: var(--base-black) transparent transparent transparent;
      border-radius: 50%;
      display: none;
    }

    &.nuxt-link-exact-active,
    &:hover, &:focus {
      &::after {
        @media (min-width: $mobile-break) {
          display: block;
        }
      }
    }

    &.nuxt-link-exact-active {
      svg {
        color: var(--alt-orange);
      }
    }
  }

  svg {
    height: 2rem;
    width: 2rem;

    @media (min-width: $mobile-break) {
      display: none;
    }
  }
}
</style>
