<template>
  <nav 
    class="nav" 
    :class="{ 'nav--sticky': !navIsAtTop || isMobileNavOpen }"
    :aria-label="isMobileNavOpen ? 'Main navigation (expanded)' : 'Main navigation'"
  >
    <div class="nav__wrapper">
      <nuxt-link v-once to="/" class="nav__name">
        Jack Domleo
        <span class="sr-only"> - Home</span>
      </nuxt-link>
      <nuxt-link v-once to="/" class="nav__logo">
        <Icon v-once name="custom:j-icon" mode="svg" />
        <span class="sr-only">Home</span>
      </nuxt-link>
      <div v-if="!isMobile" class="nav__primary">
        <ul class="nav__primary-list">
          <li v-for="navItem in navItems" :key="navItem.text" class="nav__item">
            <nuxt-link v-if="navItem.url" :to="navItem.url">
              <span>{{ navItem.text }}</span>
            </nuxt-link>
            <button 
              v-else 
              :aria-expanded="expandedSubmenus.has(navItem.text)"
              :aria-controls="getSubmenuId(navItem.text)"
              aria-haspopup="true"
              @click="toggleSubmenu(navItem.text)"
              @keydown.esc="closeAllSubmenus"
            >
              <span>{{ navItem.text }}</span>
              <Icon v-once class="nav__item-chevron" name="custom:chevron-down" mode="svg" />
            </button>
            <ul 
              v-if="navItem.submenu"
              :id="getSubmenuId(navItem.text)"
              :aria-hidden="!expandedSubmenus.has(navItem.text)"
              role="menu"
            >
              <li v-for="subItem in navItem.submenu" :key="subItem.text" role="none">
                <nuxt-link 
                  v-if="subItem.url" 
                  :to="subItem.url"
                  role="menuitem"
                  @click="closeAllSubmenus"
                >
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
        :aria-expanded="isMobileNavOpen"
        aria-controls="mobile-nav"
        :aria-label="isMobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="toggleMobileNav(!isMobileNavOpen)"
      >
        <div v-once class="nav__hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
    <template v-if="isMobile">
      <div v-if="isMobileNavOpen" class="nav__scrim" @click="toggleMobileNav(false)" />
      <ul 
        id="mobile-nav"
        class="nav__more" 
        :class="{'nav__more--open': isMobile && isMobileNavOpen}"
        :aria-hidden="!isMobileNavOpen"
        role="menu"
      >
        <li v-for="navItem in mobileNavItems" :key="navItem.text" role="none">
          <nuxt-link 
            :to="navItem.url!" 
            role="menuitem"
            @click="toggleMobileNav(false)"
          >
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
const expandedSubmenus = ref(new Set<string>())

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
    text: 'Links',
    url: '/links'
  }
]

// Performance optimizations - computed for mobile nav items
const mobileNavItems = computed(() => {
  const items: Omit<INav, 'submenu'>[] = []

  for (const item of navItems) {
    if (!item.submenu) {
      items.push(item)
    } else {
      items.push(...item.submenu)
    }
  }

  return items.filter(x => x.url)
})

// Memoized computed properties for static IDs
const submenuIds = computed(() => {
  const ids = new Map<string, string>()
  for (const item of navItems) {
    if (!item.url) {
      ids.set(item.text, `submenu-${item.text.toLowerCase()}`)
    }
  }
  return ids
})

function getSubmenuId(navItemText: string): string {
  return submenuIds.value.get(navItemText) || `submenu-${navItemText.toLowerCase()}`
}

// Focus trap functionality - memoized selectors
let focusableElements: HTMLElement[] = []
let firstFocusableElement: HTMLElement | null = null
let lastFocusableElement: HTMLElement | null = null

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

// Optimized focus trap with early returns and cached queries
function setupFocusTrap() {
  if (!isMobileNavOpen.value) return
  
  const nav = document.querySelector('nav.nav') as HTMLElement
  if (!nav) return
  
  const elements = nav.querySelectorAll(FOCUSABLE_SELECTOR)
  focusableElements = Array.from(elements).filter(el => {
    const element = el as HTMLElement
    const rect = element.getBoundingClientRect()
    return rect.width > 0 && rect.height > 0 && window.getComputedStyle(element).visibility !== 'hidden'
  }) as HTMLElement[]
  
  if (focusableElements.length === 0) return
  
  firstFocusableElement = focusableElements[0] || null
  lastFocusableElement = focusableElements[focusableElements.length - 1] || null
  
  // Focus the first non-hamburger element when opening
  const hamburger = document.querySelector('.nav__hamburger') as HTMLElement
  const targetElement = firstFocusableElement !== hamburger ? firstFocusableElement : focusableElements[1]
  
  if (targetElement) {
    // Use requestAnimationFrame for smoother focus
    requestAnimationFrame(() => targetElement.focus())
  }
}

function handleFocusTrap(event: KeyboardEvent) {
  if (!isMobileNavOpen.value || event.key !== 'Tab') return
  
  if (event.shiftKey) {
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement?.focus()
      event.preventDefault()
    }
  } else {
    if (document.activeElement === lastFocusableElement) {
      firstFocusableElement?.focus()
      event.preventDefault()
    }
  }
}

// Optimized submenu toggle with early returns
function toggleSubmenu(submenuName: string) {
  const hasSubmenu = expandedSubmenus.value.has(submenuName)
  if (hasSubmenu) {
    expandedSubmenus.value.delete(submenuName)
  } else {
    // Close other submenus for better UX (optional)
    expandedSubmenus.value.clear()
    expandedSubmenus.value.add(submenuName)
  }
}

function closeAllSubmenus() {
  if (expandedSubmenus.value.size === 0) return // Early return if already empty
  expandedSubmenus.value.clear()
}

// Optimized event handlers with early returns
function handleGlobalKeydown(event: KeyboardEvent) {
  if (event.key !== 'Escape') {
    handleFocusTrap(event)
    return
  }
  
  let handled = false
  if (isMobileNavOpen.value) {
    toggleMobileNav(false)
    handled = true
  }
  
  if (expandedSubmenus.value.size > 0) {
    closeAllSubmenus()
    handled = true
  }
  
  if (handled) {
    event.preventDefault()
  }
}

watch(route, () => {
  toggleMobileNav(false)
  closeAllSubmenus()
})

watch(isMobileNavOpen, (newValue) => {
  if (newValue) {
    nextTick(() => setupFocusTrap())
  }
})

// Optimized click outside handler
const handleClickOutside = (event: Event) => {
  if (!(event.target as Element)?.closest('.nav__item')) {
    closeAllSubmenus()
  }
}

onMounted(() => {
  setResponsiveness()
  handleScroll()
  window.addEventListener('resize', setResponsiveness, { passive: true })
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('keydown', handleGlobalKeydown)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  // Clear timeouts to prevent memory leaks
  if (resizeTimeout) clearTimeout(resizeTimeout)
  if (scrollTimeout) clearTimeout(scrollTimeout)
  
  window.removeEventListener('resize', setResponsiveness)
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleGlobalKeydown)
  document.removeEventListener('click', handleClickOutside)
})

// Throttled event handlers for performance
let resizeTimeout: NodeJS.Timeout | null = null
let scrollTimeout: NodeJS.Timeout | null = null

function setResponsiveness (): void {
  if (resizeTimeout) return
  
  resizeTimeout = setTimeout(() => {
    const navBreak = window.getComputedStyle(document.querySelector('nav.nav')!).getPropertyValue('--nav-break')
    const wasMobile = isMobile.value
    isMobile.value = !window.matchMedia(`(min-width: ${navBreak})`).matches
    isTouchscreen.value = !window.matchMedia('(hover: hover)').matches

    if (window.matchMedia(`(min-width: ${navBreak})`).matches) {
      toggleMobileNav(false)
    }
    
    // Close mobile nav if switching from mobile to desktop
    if (wasMobile && !isMobile.value && isMobileNavOpen.value) {
      toggleMobileNav(false)
    }
    
    resizeTimeout = null
  }, 100)
}

function handleScroll (): void {
  if (scrollTimeout) return
  
  scrollTimeout = setTimeout(() => {
    navIsAtTop.value = !(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10)
    scrollTimeout = null
  }, 16) // ~60fps
}

function toggleMobileNav (open: boolean): void {
  isMobileNavOpen.value = open
  document.body.style.overflow = isMobileNavOpen.value ? 'hidden' : ''
  
  if (open) {
    nextTick(() => setupFocusTrap())
  }
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
    > button,
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
      background: transparent;
      border: none;
      cursor: pointer;
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

  a.router-link-active {
    color: var(--color-accent);
  }
}
</style>