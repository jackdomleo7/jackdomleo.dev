<template>
  <nav class="nav" :class="{ 'nav--sticky': !navIsAtTop || isMobileNavOpen }">
    <div class="nav__wrapper">
      <nuxt-link to="/" class="nav__name">
        Jack Domleo
        <span class="sr-only"> - Home</span>
      </nuxt-link>
      <nuxt-link to="/" class="nav__logo">
        <nuxt-icon name="j-icon" filled />
        <span class="sr-only">Home</span>
      </nuxt-link>
      <div v-if="!isMobile" class="nav__primary">
        <ul class="nav__primary-list">
          <li v-for="navItem in navItems" :key="navItem.text" class="nav__item">
            <nuxt-link v-if="navItem.url" :to="navItem.url">
              <span>{{ navItem.text }}</span>
            </nuxt-link>
            <a v-else href="javascript:void(0);">
              <span>{{ navItem.text }}</span>
              <nuxt-icon class="nav__item-chevron" name="chevron-down" />
            </a>
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
        @click="isMobileNavOpen = !isMobileNavOpen"
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
    <ul v-if="isMobile" class="nav__more" :class="{'nav__more--open': isMobile && isMobileNavOpen}">
      <li v-for="navItem in getMobileNavItems()" :key="navItem.text">
        <nuxt-link :to="navItem.url!">
          {{ navItem.text }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
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

const navItems: INav[] = [
  {
    text: 'Projects',
    url: '/projects'
  },
  {
    text: 'Blog',
    url: '/blog'
  },
  {
    text: 'More',
    url: null,
    submenu: [
      {
        text: 'Uses',
        url: '/uses'
      },
      {
        text: 'Links',
        url: '/links'
      }
    ]
  }
]

function getMobileNavItems(): Omit<INav, 'submenu'>[] {
  let items: Omit<INav, 'submenu'>[] = []

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
  isMobileNavOpen.value = false
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
    isMobileNavOpen.value = false
  }
}

function handleScroll (): void {
  navIsAtTop.value = !(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10)
}
</script>

<style lang="scss" scoped>
$navBreak: $responsive-large-tablet;

.nav {
  --nav-break: #{$navBreak};
  position: fixed;
  z-index: 999;
  width: 100vw;
  background-color: var(--color-bg);
  color: var(--color-primary);
  z-index: 99;
  position: fixed;
  height: 4rem;
  transition: box-shadow 360ms ease;
  will-change: box-shadow;
  box-shadow: 0 0 0.5rem transparent;

  &--sticky {
    box-shadow: var(--shadow);

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
    transition-property: top, transform, width;
    transition: 360ms ease;
    will-change: top, transform, width;
  }

  &__primary {
    display: flex;

    &-list {
      list-style-type: none;
      padding-left: 0;
      margin: 0;
      padding-block: 0.25rem;
    }

    svg:not(.nav__item-chevron) {
      display: none;
    }
  }

  &__item {
    display: inline-flex;
    font-size: var(--text-large);
    height: 100%;
    padding-inline: 0.25rem;

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

    a {
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
      cursor: pointer;
      color: var(--color-primary);
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      will-change: color, border-color;
      transition-property: color, border-color;
      transition: 160ms ease;

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
      will-change: opacity, visibility;
      transition-property: opacity, visibility;
      transition: 160ms ease;
      position: absolute;
      top: 100%;
      margin: 0;
      list-style-type: none;
      background-color: var(--color-bg);
      box-shadow: var(--shadow);
      padding: 0.5rem 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      font-size: var(--text-body);
      
      li {
        width: 100%;
      }

      a {
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-block: 0.25rem;
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
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    height: 0;
    background-color: var(--color-bg);
    border-top: 0 solid var(--color-accent);
    box-shadow: var(--shadow);
    padding: 0 3rem;
    margin: 0;
    min-width: 18rem;
    max-height: 24rem;
    list-style-type: none;
    transition-property: height, padding, border;
    transition: 260ms ease;
    will-change: height, padding, border;
    overflow: hidden;
    visibility: hidden;

    &--open {
      height: max-content;
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
    }

    a {
      text-decoration: none;
      display: flex;
      padding: 0.5rem;
    }
  }

  a.nuxt-link-active {
    color: var(--color-accent);
  }
}
</style>