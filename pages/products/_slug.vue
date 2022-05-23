<template>
  
</template>

<script lang="ts">
import Vue from 'vue'
import { IPage, IPageProduct } from '@/types/cms'

export default Vue.extend({
  name: 'ProductSlug',
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

</style>
