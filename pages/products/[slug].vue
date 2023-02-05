<template>
  <div class="product">
    <div class="product__inner">
      <header class="header">
        <div class="header__product">
          <nuxt-picture :src="product.fields.image.fields.file.url" :alt="product.fields.image.fields.description" width="472" height="669" provider="contentful" sizes="4kdesktop:472px" preload />
          <a v-if="product.fields.goodreadsUrl" :href="product.fields.goodreadsUrl" target="_blank" title="Add to Goodreads" class="header__goodreads">
            <nuxt-img src="/images/goodreads-button.png" alt="Add to Goodreads" width="130" height="41" sizes="4kdesktop:130px" preload />
            <span class="sr-only">Add to Goodreads</span>
          </a>
        </div>
        <div class="header__details">
          <h1 class="header__title">{{ product.fields.title }}</h1>
          <div v-if="product.fields.metaDescription" class="header__description">{{ product.fields.metaDescription }}</div>
          <p v-if="pageData.price" class="header__price">{{ pageData.price }}</p>
          <div class="header__ctas">
            <btn class="header__cta" :url="pageData.url">{{ product.fields.ctaText }}</btn>
            <a v-if="product.fields.amazonUrl" :href="product.fields.amazonUrl" target="_blank" title="Buy on Amazon" class="header__amazon">
              <nuxt-img src="/images/amazon-button.png" alt="Buy on Amazon" width="160" height="47" sizes="4kdesktop:160px" />
              <span class="sr-only">Buy on Amazon</span>
            </a>
          </div>
        </div>
      </header>
      <div v-if="product.fields.productHuntUrl && product.fields.productHuntId" class="product-hunt">
        <a :href="product.fields.productHuntUrl" target="_blank" title="Find us on Product Hunt">
          <img :src="`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=${product.fields.productHuntId}&theme=light`" alt="" width="250" height="54" loading="lazy" />
          <span class="sr-only">Come join us on Product Hunt</span>
        </a>
      </div>
      <div v-if="pageData.description" class="description rich-text" v-html="pageData.description" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import Btn from '@/components/Btn.vue'
import { parseRichText } from '@/utilities/parseRichText'
import { formatCMSVariables } from '@/utilities/cmsVariables';
import type { ContentfulEntries } from '@/types/CMS/Entries'
import type { GumroadProduct } from '@/types/GumroadProduct';

const $route = useRoute()
const config = useRuntimeConfig()

const { data } = await useAsyncData(`product-${$route.params.slug}`, (ctx) => { return ctx!.$contentful.getEntries<ContentfulEntries.Product>({ content_type: 'product', limit: 1, 'fields.slug': $route.params.slug })})
const product = formatCMSVariables(data.value!.items[0])

let gumroad: GumroadProduct['product'] | undefined;
if (product.fields.gumroadId) {
  const { data: gumroadData } = await useFetch<GumroadProduct>(`https://api.gumroad.com/v2/products/${product.fields.gumroadId}`, { params: { access_token: config.public.GUMROAD_ACCESS_TOKEN } })
  gumroad = gumroadData.value!.success ? gumroadData.value!.product : undefined
}

const pageData = {
  price: gumroad ? gumroad.formatted_price : product.fields.price,
  description: gumroad ? gumroad.description.replaceAll('<p><br></p>', '') : product.fields.description ? parseRichText(product.fields.description) : undefined,
  releaseDate: gumroad ? dayjs(gumroad.release_at) : product.fields.releaseDate ? dayjs(product.fields.releaseDate) : undefined,
  url: gumroad ? gumroad.short_url : product.fields.ctaUrl
}

useHead({
  title: `${product.fields.title} | Products`,
  meta: [
    { property: 'twitter:title', content: `${product.fields.title} | Products | Jack Domleo` },
    ...(product.fields.metaDescription ? [
      { name: 'description', content: product.fields.metaDescription },
      { property: 'og:description', content: product.fields.metaDescription },
      { property: 'twitter:description', content: product.fields.metaDescription }
    ] : []),
    ...(product.fields.type === 'Book' ? [
      { property: 'og:type', content: 'book' },
      { property: 'book:author', content: 'Jack Domleo' },
      ...(product.fields.isbn ? [
        { property: 'book:isbn', content: product.fields.isbn }
      ] : []),
      ...(pageData.releaseDate ? [
        { property: 'book:release_date', content: pageData.releaseDate.toString()
      }] : [])
    ] : [])
  ]
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/rich-text' as *;

.product {
  margin-top: 1rem;
  padding-inline: 1rem;

  @media (min-width: $responsive-small-desktop) {
    margin-top: 2rem;
  }

  &__inner {
    max-width: 81rem;
    margin-inline: auto;
  }

  .header {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;

    @media (min-width: $responsive-large-tablet) {
      grid-template-columns: repeat(5, 1fr);
    }

    &__product {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      place-self: center;

      @media (min-width: $responsive-large-tablet) {
        grid-column: span 2;
      }
    }

    &__details {
      align-self: center;
      display: flex;
      flex-direction: column;
      padding-inline: 1rem;

      @media (min-width: $responsive-large-tablet) {
        grid-column: span 3;
        padding-inline: 0;
      }
    }

    &__title {
      font-size: var(--text-title);
      margin-top: 0;
      margin-bottom: 1rem;

      @media (min-width: $responsive-large-tablet) {
        margin-bottom: 1.75rem;
      }
    }

    &__description {
      font-size: var(--text-large);
      margin-top: 0;
      margin-bottom: 1rem;

      @media (min-width: $responsive-large-tablet) {
        margin-bottom: 1.5rem;
      }
    }

    &__price {
      font-size: var(--text-subtitle);
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 2rem;
      text-align: center;

      @media (min-width: $responsive-large-tablet) {
        text-align: left;
      }
    }

    &__ctas {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;

      @media (min-width: $responsive-large-tablet) {
        align-self: flex-start;
        gap: 1.5rem;
      }
    }

    &__cta {
      min-width: 10rem;
    }

    &__amazon {
      display: flex;
    }

    &__goodreads {
      display: flex;

      @media (hover: hover) {
        transition: filter ease var(--quick-animation-timing);

        &:hover {
          filter: brightness(90%);
        }
      }
    }
  }
}

.description {
  margin: 3.5rem auto 3rem;
  max-width: 62.5rem;
  padding-inline: 1rem;
  font-size: var(--text-body);
}

.product-hunt {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  
  a {
    display: inline-flex;
  }
}
</style>