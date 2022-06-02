<template>
  <div class="product">
    <div class="product__inner">
      <header class="header">
        <div class="header__product">
          <nuxt-img :src="productPage.data.images[0].image.url" :alt="productPage.data.images[0].image.alt" width="472" height="669" provider="prismic" />
          <a v-if="productPage.data.goodreads_url.url" :href="productPage.data.goodreads_url.url" target="_blank" title="Add to Goodreads" class="header__goodreads">
            <nuxt-img src="/images/goodreads-button.png" alt="Add to Goodreads" width="130" height="41" />
            <span class="sr-only">Add to Goodreads</span>
          </a>
        </div>
        <div class="header__details">
          <h1 class="header__title">{{ productPage.data.title }}</h1>
          <prismic-rich-text :field="productPage.data.short_description" class="header__description" />
          <div class="header__ctas">
            <btn :href="productPage.data.cta_url.url">{{ productPage.data.cta_text }}</btn>
            <a v-if="productPage.data.amazon_url.url" :href="productPage.data.amazon_url.url" target="_blank" title="Buy on Amazon" class="header__amazon">
              <nuxt-img src="/images/amazon-button.png" alt="Buy on Amazon" width="160" height="47" />
              <span class="sr-only">Buy on Amazon</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IPage, IPageProduct } from '@/types/cms'
import Btn from '@/components/Btn.vue'

export default Vue.extend({
  name: 'ProductSlug',
  components: { Btn },
  async asyncData ({ $prismic, error, payload, params }) {
    const productPage: IPage<IPageProduct, 'product'> = payload || await $prismic.api.getByUID('product', params.slug)
    if (productPage) {
      return { productPage }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head () {
    return {
      title: `${(this.productPage as IPage<IPageProduct, 'product'>).data.title} | Products`,
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: `${(this.productPage as IPage<IPageProduct, 'product'>).data.og_image.url}`
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          property: 'og:image:alt',
          content: `${(this.productPage as IPage<IPageProduct, 'product'>).data.og_image.alt}`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: `${(this.productPage as IPage<IPageProduct, 'product'>).data.title} | Products | Jack Domleo`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: `${this.$prismic.asText((this.productPage as IPage<IPageProduct, 'product'>).data.meta_description.length ? (this.productPage as IPage<IPageProduct, 'product'>).data.meta_description : (this.productPage as IPage<IPageProduct, 'product'>).data.short_description)}`
        },
        {
          hid: 'description',
          name: 'description',
          property: 'description',
          content: `${this.$prismic.asText((this.productPage as IPage<IPageProduct, 'product'>).data.meta_description.length ? (this.productPage as IPage<IPageProduct, 'product'>).data.meta_description : (this.productPage as IPage<IPageProduct, 'product'>).data.short_description)}`
        },
        ...((this.productPage as IPage<IPageProduct, 'product'>).data.product_type === 'Ebook' ? [
          {
            hid: 'og:type',
            name: 'og:type',
            property: 'og:type',
            content: 'book'
          },
          {
            hid: 'book:author',
            name: 'book:author',
            property: 'book:author',
            content: 'Jack Domleo'
          },
          ...((this.productPage as IPage<IPageProduct, 'product'>).data.isbn ? [{
            hid: 'book:isbn',
            name: 'book:isbn',
            property: 'book:isbn',
            content: (this.productPage as IPage<IPageProduct, 'product'>).data.isbn
          }] : []),
          ...((this.productPage as IPage<IPageProduct, 'product'>).data.release_date ? [{
            hid: 'book:release_date',
            name: 'book:release_date',
            property: 'book:release_date',
            content: (this.productPage as IPage<IPageProduct, 'product'>).data.release_date
          }] : [])
        ] : [])
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.product {
  margin-top: 1rem;
  padding-inline: 1rem;

  @media (min-width: $responsive-large-tablet) {
    margin-top: 6rem;
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
      margin-bottom: 2rem;

      @media (min-width: $responsive-large-tablet) {
        margin-bottom: 4rem;
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
</style>
