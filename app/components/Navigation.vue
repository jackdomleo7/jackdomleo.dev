<template>
  <nav class="nav" :class="{ 'nav--sticky': !navIsAtTop || isMobileNavOpen }">
    <div class="nav__wrapper">
      <nuxt-link to="/" class="nav__name">
        Jack Domleo
        <span class="sr-only"> - Home</span>
      </nuxt-link>
      <nuxt-link to="/" class="nav__logo">
        <Icon v-once name="custom:j-icon" mode="svg" />
        <span class="sr-only">Home</span>
      </nuxt-link>
      <div v-if="!isMobile" class="nav__primary">
        <ul class="nav__primary-list">
          <li v-for="navItem in navItems" :key="navItem.text" class="nav__item">
            <nuxt-link v-if="navItem.url" :to="navItem.url">
              <span>{{ navItem.text }}</span>
            </nuxt-link>
            <div v-else tabindex="0">
              <span>{{ navItem.text }}</span>
              <Icon class="nav__item-chevron" name="custom:chevron-down" mode="svg" />
            </div>
            <ul v-if="navItem.submenu">
              <li v-for="subItem in navItem.submenu" :key="subItem.text">
                <nuxt-link v-if="subItem.url" :to="subItem.url">
                  {{ subItem.text }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <button
        v-if="isMobile"
        class="nav__hamburger"
        :class="{ 'nav__hamburger--open': isMobileNavOpen }"
        @click="toggleMobileNav(!isMobileNavOpen)"
      >
        <div class="nav__hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span class="sr-only">{{ isMobileNavOpen ? 'Close' : 'Menu' }}</span>
      </button>
    </div>
    <template v-if="isMobile">
      <div v-if="isMobileNavOpen" class="nav__scrim" @click="toggleMobileNav(false)" />
      <ul class="nav__more" :class="{'nav__more--open': isMobile && isMobileNavOpen}">
        <li v-for="navItem in getMobileNavItems()" :key="navItem.text">
          <nuxt-link :to="navItem.url!" @click="toggleMobileNav(false)">
            {{ navItem.text }}
          </nuxt-link>
        </li>
      </ul>
    </template>
  </nav>
</template>

<script lang="ts" setup>
import type { FixedLengthArray } from 'type-fest';

const route = useRoute()

interface INav {
  text: string;
  url: string|null;
  submenu?: {
    text: string;
    url: string;
  }[]
}

const isMobile = ref(false)
const isTouchscreen = ref(false)
const isMobileNavOpen = ref(false)
const navIsAtTop = ref(false)

const navItems: FixedLengthArray<INav, 3> = [ // No more than 3 top-level items
  {
    text: 'Projects',
    url: '/projects'
  },
  {
    text: 'Work',
    url: '/work'
  },
  {
    text: 'More',
    url: null,
    submenu: [
      {
        text: 'Blog',
        url: '/blog'
      },
      {
        text: 'Links',
        url: '/links'
      }
    ]
  }
]

function getMobileNavItems(): Omit<INav, 'submenu'>[] {
  const items: Omit<INav, 'submenu'>[] = []

  navItems.forEach(item => {
    if (!item.submenu) {
      items.push(item)
    }
    else {
      item.submenu.forEach(subItem => {
        items.push(subItem)
      })
    }
  })

  return items.filter(x => x.url)
}

watch(route, () => {
  toggleMobileNav(false)
})

onMounted(() => {
  setResponsiveness()
  handleScroll()
  window.addEventListener('resize', setResponsiveness)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('resize', setResponsiveness)
  window.removeEventListener('scroll', handleScroll)
})

function setResponsiveness (): void {
  const navBreak = window.getComputedStyle(document.querySelector('nav.nav')!).getPropertyValue('--nav-break')
  isMobile.value = !window.matchMedia(`(min-width: ${navBreak})`).matches
  isTouchscreen.value = !window.matchMedia('(hover: hover)').matches

  if (window.matchMedia(`(min-width: ${navBreak})`).matches) {
    toggleMobileNav(false)
  }
}

function handleScroll (): void {
  navIsAtTop.value = !(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10)
}

function toggleMobileNav (open: boolean): void {
  isMobileNavOpen.value = open
  document.body.style.overflow = isMobileNavOpen.value ? 'hidden' : ''
}
</script>

<style lang="scss" scoped>
$navBreak: $responsive-large-tablet;
$navHeight: 4rem;

.nav {
  --nav-break: #{$navBreak};
  position: fixed;
  z-index: 999;
  width: 100vw;
  background-color: var(--color-bg);
  color: var(--color-primary);
  z-index: 99;
  position: fixed;
  height: $navHeight;
  box-shadow: 0 0 0.5rem transparent;
  
  @media (prefers-reduced-motion: no-preference) {
    transition: 360ms ease;
    transition-property: box-shadow, background-color;
    will-change: box-shadow, background-color;
  }

  &--sticky {
    box-shadow: var(--shadow);
    background-color: var(--color-fg1);

    .nav__logo {
      top: 50%;
      transform: translate(-50%, -50%);
      width: 3.5rem;
    }
  }

  &__wrapper {
    display: flex;
    align-items: stretch;
    gap: 1rem;
    justify-content: space-between;
    padding: 0.25rem 2rem;
    height: 100%;
    position: relative;
    z-index: 1;
    background-color: inherit;

    @media (min-width: $navBreak) {
      max-width: 104rem;
      margin-inline: auto;
      padding-inline: 10rem;
    }
  }

  &__name {
    color: var(--color-primary) !important;
    font-size: var(--text-body);
    text-decoration: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;

    @media (min-width: $responsive-large-mobile) {
      font-size: var(--text-large);
    }
  }

  &__logo {
    width: 5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 80%;
    
    @media (prefers-reduced-motion: no-preference) {
      transition-property: top, transform, width;
      transition: 360ms ease;
      will-change: top, transform, width;
    }
  }

  &__primary {
    display: flex;

    &-list {
      list-style-type: none;
      padding-left: 0;
      margin: 0;
      padding-block: 0.25rem;
    }
  }

  &__item {
    display: inline-flex;
    font-size: var(--text-large);
    height: 100%;
    padding-inline: 0.25rem;

    @media (forced-colors: active) {
      border: 1px solid transparent;
    }

    &:hover,
    &:focus-within {
      ul {
        opacity: 1;
        visibility: visible;
      }
    }

    &-chevron {
      height: 1rem;
      width: 1rem;
      display: grid;
      place-items: center;
    }

    > div {
      cursor: default;
    }

    > a,
    > div {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      height: 100%;
      width: 100%;
      padding-block: 0.25rem;
      min-width: 4rem;
      text-align: center;
      text-decoration: none;
      color: var(--color-primary);
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      
      @media (prefers-reduced-motion: no-preference) {
        will-change: color, border-color;
        transition-property: color, border-color;
        transition: 160ms ease;
      }

      &:hover,
      &:focus {
        border-bottom-color: var(--color-accent);

        + ul {
          opacity: 1;
          visibility: visible;
        }
      }
    }

    ul {
      opacity: 0;
      visibility: hidden;
      position: absolute;
      top: 100%;
      margin: 0;
      list-style-type: none;
      background-color: var(--color-bg);
      box-shadow: var(--shadow);
      padding: 0.5rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      font-size: var(--text-body);
      
      @media (prefers-reduced-motion: no-preference) {
        will-change: opacity, visibility;
        transition-property: opacity, visibility;
        transition: 160ms ease;
      }
      
      li {
        width: 100%;
      }

      a {
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-block: 0.25rem;
        color: var(--color-primary);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
          text-decoration-color: var(--color-accent);
          text-decoration-thickness: 2px;
        }
      }
    }
  }

  &__hamburger {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.375rem;
    height: 1.9375rem;
    border: none;
    margin: 1rem 0;
    background-color: transparent;

    @media (forced-colors: active) {
      border: 1px solid ButtonText;
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
        height: 0.125rem;
        width: 100%;
        background-color: var(--color-primary);
        border-radius: var(--border-radius-standard);
        opacity: 1;
        left: 0;
        
        @media (prefers-reduced-motion: no-preference) {
          transform: rotate(0deg);
          transition: 0.25s ease-in-out;
          will-change: transform;
        }

        @media (forced-colors: active) {
          background-color: ButtonText;
        }

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
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -100%);
    background-color: var(--color-bg);
    border-top: 0 solid var(--color-accent);
    box-shadow: var(--shadow);
    padding: 0 3rem;
    margin: 0;
    width: 100vw;
    max-height: calc(100vh - #{$navHeight});
    list-style-type: none;
    visibility: hidden;
    font-size: var(--text-large);
    
    @media (prefers-reduced-motion: no-preference) {
      transition-property: height, padding, border;
      transition: 260ms ease;
      will-change: height, padding, border;
    }

    @media (forced-colors: active) {
      border: 1px solid transparent;
    }

    &--open {
      transform: translate(-50%, 0);
      padding-block: 1rem;
      border-top-width: 4px;
      visibility: visible;
      overflow-y: auto;
      overscroll-behavior: contain;
    }

    li {
      &:not(:last-of-type) {
        border-bottom: 1px solid var(--color-fg1);
      }

      @media (forced-colors: active) {
        border: 1px solid transparent;
      }
    }

    a {
      text-decoration: none;
      display: flex;
      padding: 0.5rem;
      color: var(--color-primary);
    }
  }

  &__scrim {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);

    @media (prefers-reduced-motion: no-preference) {
      transition: background-color 260ms ease;
    }
  }

  a.nuxt-link-active {
    color: var(--color-accent);
  }
}
</style>