<template>
  <div class="links">
    <header class="container">
      <h1 class="links__title">Links</h1>
    </header>
    <div class="container container--thinner">
      <ul class="links__list">
        <li v-for="link in links" :key="link.name">
          <nuxt-link class="link" :to="`${link.url}`" :rel="`${link.url}`.startsWith('http') ? 'nofollow noopener' : undefined">
            {{ link.name }}
            <Icon v-if="link.icon" :name="`custom:${link.icon}`" mode="svg" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import variables from '@/utilities/variables';

useHead({
  title: 'Links'
})

const links: { name: string, url: string, icon: string }[] = [
  {
      name: "Website",
      url: "/",
      icon: "j-icon"
  },
  {
      name: "Blog",
      url: "/blog",
      icon: "blog"
  },
  {
      name: "GitHub",
      url: variables.GITHUB_URL,
      icon: "github"
  },
  {
      name: "GitHub Gists",
      url: "https://gist.github.com/jackdomleo7",
      icon: "github"
  },
  {
      name: "CodePen",
      url: variables.CODEPEN_URL,
      icon: "codepen"
  },
  {
      name: "LinkedIn",
      url: variables.LINKEDIN_URL,
      icon: "linkedin"
  },
  {
      name: "Goodreads",
      url: "https://www.goodreads.com/user/show/126653182-jack-domleo",
      icon: "goodreads"
  }
]
</script>

<style lang="scss" scoped>
.links {
  padding: 1rem;

  @media (min-width: $responsive-standard-tablet) {
    margin-top: 2rem;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: var(--text-title);
    text-align: center;
  
    @media (min-width: $responsive-standard-tablet) {
      margin-bottom: 2rem;
    }
  }

  &__list {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 0;
    margin-bottom: 0;
    list-style-type: none;
  }
}

.link {
  background-color: var(--color-fg1);
  box-shadow: var(--shadow);
  border-radius: var(--border-radius-standard);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  position: relative;
  text-decoration: none;
  padding-inline: 4rem;
  transition: transform 280ms ease;

  @media (forced-colors: active) {
    border: 1px solid transparent;
  }

  &:hover {
    transform: scale(1.03);
  }

  .iconify {
    height: 2rem;
    width: 2rem;
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);

    @media (min-width: $responsive-large-mobile) {
      left: 2rem;
    }
  }
}
</style>