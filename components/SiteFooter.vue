<template>
  <footer class="footer">
    <nuxt-link to="/" class="footer__logo">
      <nuxt-icon name="j_icon" filled />
    </nuxt-link>
    <ul class="footer__quick-links">
      <li v-for="quickLink in footer.fields.quickLinks" :key="quickLink.id">
        <nuxt-link :to="quickLink.value" :rel="quickLink.value.startsWith('https://') ? 'noopener' : undefined">
          {{ quickLink.key }}
        </nuxt-link>
      </li>
    </ul>
    <ul class="footer__social">
      <li v-for="socialLink in footer.fields.socialLinks" :key="socialLink.id">
        <nuxt-link :href="socialLink.value" target="_blank" rel="noopener noreferrer" data-cooltipz-dir="top" :aria-label="socialLink.key">
          <nuxt-icon class="footer__social-icon" :name="socialLink.key.toLowerCase()" />
          <span class="sr-only">{{ socialLink.key }}</span>
        </nuxt-link>
      </li>
    </ul>
    <p class="footer__legal">
      <nuxt-link href="/privacy-policy" class="link">Privacy Policy</nuxt-link>
    </p>
    <div class="footer__legal" v-html="documentToHtmlString(footer.fields.legalText)" />
  </footer>
</template>

<script lang="ts" setup>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import type { ContentfulEntries } from '@/types/CMS/Entries'
import { formatCMSVariables } from '@/utilities/cmsVariables'

const footerEntries = await useAsyncData((ctx) => { return ctx!.$contentful.getEntries<ContentfulEntries.Footer>({ content_type: 'footer', limit: 1 })})
const footer = formatCMSVariables(footerEntries.data.value!.items[0])
</script>

<style lang="scss" scoped>
.footer {
  max-width: 32rem;
  min-width: 100%;
  margin-top: 8rem;
  margin-inline: auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;

  @media (min-width: $responsive-small-tablet) {
    padding-inline: 2rem;
    min-width: 32rem;
  }

  &__logo {
    width: 3.625rem;
    margin-inline: auto;
  }

  &__quick-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    list-style-type: none;
    padding-left: 0;
    margin-block: 1.5rem;

    @media (min-width: $responsive-small-tablet) {
      gap: 1rem;
    }

    a {
      color: var(--color-primary);
      text-decoration: none;

      &:hover,
      &:active {
        text-decoration: underline;
        text-decoration-color: var(--color-accent);
        text-decoration-thickness: 2px;
      }
    }
  }

  &__social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    list-style-type: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 1.5rem;

    a {
      display: grid;
      place-items: center;
      border-radius: 50%;
      background-color: var(--color-bg);
      border: 1px solid var(--color-primary);
      transition: all var(--standard-animation-timing) ease;
      padding: 0.375rem;
      color: var(--color-primary);
      width: 2.5rem;
      aspect-ratio: auto 1 / 1;
      outline-offset: 2px;
    }

    &-icon {
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  &__legal {
    text-align: center;
    margin-block: 0;
    line-height: 1.3;

    @media (min-width: $responsive-small-tablet) {
      line-height: unset;
      display: flex;
      justify-content: center;
      flex-flow: wrap;
      gap: 0.25rem;
    }
  }
}
</style>