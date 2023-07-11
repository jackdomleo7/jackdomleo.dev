<template>
  <div class="links">
    <header class="container">
      <h1 class="links__title">{{ links.fields.title }}</h1>
      <div v-if="links.fields.description" class="links__description" v-html="parseRichText(links.fields.description)" />
    </header>
    <div class="container container--thinner">
      <ul class="links__list">
        <li v-for="link in links.fields.links.items" :key="`${link.name}`">
          <nuxt-link class="link" :to="`${link.url}`" :rel="`${link.url}`.startsWith('http') || `${link.url}`.startsWith('//') ? 'nofollow noopener' : undefined">
            {{ link.name }}
            <nuxt-icon v-if="link.icon" :name="`${link.icon}`" filled />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { parseRichText } from '@/utilities/parseRichText'
import { formatCMSVariables } from '@/utilities/cmsVariables';
import type { ContentfulEntries } from '@/types/CMS/Entries';

const linksEntries = await useAsyncData((ctx) => { return ctx!.$contentful.getEntries<{ fields: ContentfulEntries.Links, contentTypeId: 'links' }>({ content_type: 'links', limit: 1 })})
const links = formatCMSVariables(linksEntries.data.value!.items[0])

useHead({
  title: 'Links',
  meta: [
    { name: 'twitter:title', content: 'Links | Jack Domleo' },
  ]
})
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

  &__description {
    font-size: var(--text-body);
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

  &:hover {
    transform: scale(1.03);
  }

  .nuxt-icon {
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