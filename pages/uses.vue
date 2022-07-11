<template>
  <div class="uses">
    <header class="container container--header header">
      <h1 class="header__title">Uses</h1>
      <prismic-rich-text class="header__intro" :field="uses.data.intro" />
      <prismic-rich-text class="header__legal" :field="affiliateLegal.data.legal_text" />
    </header>
    <div class="container uses__content">
      <div v-html="$md.render(uses.data.uses)" />
      <nuxt-img provider="prismic" :src="uses.data.office_setup.url" :alt="uses.data.office_setup.alt" width="756" height="397" loading="lazy" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IPage, IPageUses, IAffiliateLegal } from '@/types/cms'
import { populateAffiliateProviders } from '@/helpers/affiliateProviders'

export default Vue.extend({
  name: 'About',
  async asyncData ({ $prismic, error }) {
    const uses: IPage<IPageUses, 'uses'> = await $prismic.api.getSingle('uses')
    const affiliateLegal: IPage<IAffiliateLegal, 'affiliate_legal'> = await $prismic.api.getSingle('affiliate_legal')

    if (uses) {
      uses.data.uses = $prismic.asText(uses.data.uses)
      affiliateLegal.data.legal_text = populateAffiliateProviders(affiliateLegal.data.legal_text, ['Amazon'])

      return { uses, affiliateLegal }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head () {
    return {
      title: 'Uses'
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;

  &__title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: var(--text-title);

    @media (min-width: $responsive-standard-tablet) {
      margin-bottom: 2rem;
    }
  }

  &__intro {
    font-size: var(--text-body);
    max-width: 70rem;
    margin-inline: auto;

    ::v-deep p {
      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  &__legal {
    max-width: 70rem;
    margin-inline: auto;
    font-style: italic;
    font-size: var(--text-small);
  }
}

.uses {
  max-width: 50rem;
  margin-inline: auto;
  
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    font-size: var(--text-large);

    ::v-deep li {
      margin-block: 0.5rem;

      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
</style>
