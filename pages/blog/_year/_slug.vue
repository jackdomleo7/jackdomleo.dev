<template>
  <PageTemplate :page-heading="page.title" :footer="footer">
    <article class="markdown">
      <nuxt-content :document="page" />
    </article>
  </PageTemplate>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  // head () {
  //   return {
  //     title: this.$data.page.title,
  //     meta: [
  //       {
  //         hid: 'og:image',
  //         name: 'og:image',
  //         property: 'og:image',
  //         content: `${process.env.BASE_URL}${this.$route.path}${this.$route.path.endsWith('/') ? '' : '/'}og.png`
  //       },
  //       {
  //         hid: 'og:image:alt',
  //         name: 'og:image:alt',
  //         property: 'og:image:alt',
  //         content: `Article cover: ${this.$data.$route.title}`
  //       },
  //       {
  //         hid: 'og:title',
  //         name: 'og:title',
  //         property: 'og:title',
  //         content: `${this.$data.page.title} | Blog | Jack Domleo`
  //       },
  //       {
  //         hid: 'og:description',
  //         name: 'og:description',
  //         property: 'og:description',
  //         content: `${this.$data.page.description}`
  //       },
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         property: 'description',
  //         content: `${this.$data.page.description}`
  //       },
  //       {
  //         hid: 'og:type',
  //         name: 'og:type',
  //         property: 'og:type',
  //         content: 'article'
  //       },
  //       {
  //         hid: 'article:published_time',
  //         name: 'article:published_time',
  //         property: 'article:published_time',
  //         content: `${this.$data.page.date}`
  //       },
  //       {
  //         hid: 'article:author',
  //         name: 'article:author',
  //         property: 'article:author',
  //         content: 'Jack Domleo'
  //       },
  //       {
  //         hid: 'article:tag',
  //         name: 'article:tag',
  //         property: 'article:tag',
  //         content: `${this.$data.page.hashtags}`
  //       }
  //     ]
  //   }
  // }
})
export default class BlogSlug extends Vue {
  async asyncData ({ $content, $prismic, route, error, payload }: any) {
    const footer = await $prismic.api.getSingle('footer')

    const path = route.path.replace('/blog', '')
    let page = payload || await $content({ deep: true }).where({ path }).only(['title', 'body']).fetch()
    if (page.length) {
      page = page[0]
    }

    if (page && footer) {
      return { page, footer }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style lang="scss" scoped>
.blog {
  &__back {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    margin-top: 1rem;

    svg {
      height: 1.8rem;
      width: 1.8rem;
    }
  }

  &__meta {
    padding-left: 0;
    display: flex;
    align-items: center;

    li {
      &:nth-child(1) {
        list-style-type: none;
        margin-right: 2rem;
        font-weight: 700;
      }
    }
  }

  &__devto {
    font-weight: var(--body-font-weight);
    font-size: 90%;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.8rem;
      height: 2rem;
      width: 2rem;
      color: var(--body-color);
    }

    a:nth-child(2) {
      margin-left: 0.2rem;
    }
  }

  &__hashtags {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style-type: none;
    margin-bottom: 0;
    margin: 1rem 0;
    padding-left: 0;

    li {
      display: inline-block;
    }
  }
}

.social-share {
  align-items: center;
  display: flex;
  gap: 1rem;
  list-style-type: none;
  margin-bottom: 0;
  margin: 1rem 0 3rem;
  padding-left: 0;

  li {
    display: inline-block;
  }
  a {
    display: block;
    color: inherit;
    transition: color 160ms ease;

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }
  svg {
    height: 1rem;
    width: 1rem;
  }
}
</style>
