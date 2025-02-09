<template>
  <div class="container">
    <div v-if="showFilter">
      <ComboboxInput id="filter" label="Filters" :multiselectable="true" :value="routeFilters" :options="filterOptions" class="filter" @selected-options="updateFilters($event)" @focus="scrollComboboxToTop()" />
    </div>
    <ul class="posts">
      <li v-for="(item, index) in displayedList" v-show="articleMatchesFilter(item)" :key="item.sys.id">
        <nuxt-link :to="`/blog/${new Date(item.fields.publishDate).getFullYear()}/${item.fields.slug}`" class="post">
          <article class="post__article">
            <p v-if="props.suggested.titles.includes(item.fields.title)" class="post__banner">Suggested</p>
            <nuxt-picture class="post__img" provider="contentful" :src="item.fields.image!.fields.file!.url" :alt="item.fields.image!.fields.description" width="424" height="223" sizes="4kdesktop:424px" loading="lazy" :preload="index <= props.preloadArticleImages" />
            <div class="post__details">
              <ul class="post__tags">
                <li v-for="tag in item.fields.tags" :key="tag" class="tag" :class="{ 'tag--bold': props.suggested.tags.includes(tag) }">
                  {{ tag }}
                </li>
              </ul>
              <h2 class="post__title">{{ item.fields.title }}</h2>
              <p class="post__description">{{ item.fields.description }}</p>
              <footer>
                <p class="post__date">
                  <span class="sr-only">Publish date:</span>
                  <time :datetime="dayjs(new Date(item.fields.publishDate)).format('YYYY-MM-DD')">
                    {{ dayjs(new Date(item.fields.publishDate)).format('MMMM D, YYYY') }}
                  </time>
                </p>
              </footer>
            </div>
          </article>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue';
import dayjs from 'dayjs'
import type { LastArrayElement } from 'type-fest';
import type { ContentfulEntries } from '@/types/CMS/Entries'
import { formatCMSVariables } from '@/utilities/cmsVariables';
import type { ComboboxOption } from '@/types/components/ComboboxInput'

interface Suggested {
  current: string;
  titles: string[];
  tags: string[];
}

const ComboboxInput = defineAsyncComponent(() => import('./ComboboxInput.vue'))

const $route = useRoute()
const $router = useRouter()

const filters = ref<string[]>([])

const props = defineProps({
  limit: {
    type: Number,
    default: undefined,
    validator(value: number): boolean {
      return value >= 0 && value <= 1000
    }
  },
  preloadArticleImages: {
    type: Number,
    default: 0,
    validator(value: number): boolean {
      return value >= 0
    }
  },
  showFilter: {
    type: Boolean,
    default: false
  },
  suggested: {
    type: Object as PropType<Suggested>,
    default: {
      current: '',
      titles: [],
      tags: []
    } satisfies Suggested
  }
})

const { data: blog } = await useAsyncData(`article-list-${$route.params.slug}`, (ctx) => { return ctx!.$contentful.getEntries<{ fields: Pick<ContentfulEntries.Article['fields'], 'title'|'description'|'image'|'tags'|'publishDate'|'slug'>, contentTypeId: ContentfulEntries.Article['contentTypeId'] }>({ content_type: 'article', limit: 1000, order: ['-fields.publishDate'], select: ['fields.title', 'fields.description', 'fields.image', 'fields.tags', 'fields.publishDate', 'fields.slug'] })})
const list = formatCMSVariables(blog.value!.items)

const displayedList = ref<typeof list>([]);

if (props.suggested.current) {
  // Remove current article from the suggested article list
  list.splice(list.indexOf(list.filter(article => article.fields.title === props.suggested.current)[0]), 1)

  if (props.suggested.titles.length > 0) {
    const suggestedArticles = list.filter(x => props.suggested.titles.includes(x.fields.title))
    for (const article of suggestedArticles) {
      if (!displayedList.value.includes(article)) {
        displayedList.value.push(article)
      }
    }
  }

  if (!props.limit || displayedList.value.length < props.limit) {
    for (const tag of props.suggested.tags) {
      const similarArticles = list.filter(x => x.fields.tags.includes(tag))
      for (const article of similarArticles) {
        if (!displayedList.value.includes(article)) {
          displayedList.value.push(article)
        }
      }
    }
  }

  if (!props.limit || displayedList.value.length < props.limit) {
    for (const article of list) {
      if (!displayedList.value.includes(article)) {
        displayedList.value.push(article)
      }
    }
  }
}
else {
  displayedList.value = [...list] // Create a clone of the array
}

if (props.limit && props.limit <= displayedList.value.length) {
  displayedList.value.length = props.limit;
}

/***************/
/** Filtering **/
/***************/

const tags = [...new Set(list.map(x => x.fields.tags.join(',')).join(',').split(','))].filter(Boolean).sort()
const years = [...new Set(list.map(x => `${new Date(x.fields.publishDate).getFullYear()}`))].filter(Boolean)
const filterOptions: ComboboxOption[] = [...tags.map(x => { return { value: x, text: x }}), ...years.map(x => { return { value: x, text: x } })]
const routeFilters: ComboboxOption[] = ($route.query.filters ? ($route.query.filters as string).split(',').map(filter => { return filterOptions.find(x => x.value.toLowerCase() === filter.toLowerCase() || x.text.toLowerCase() === filter.toLowerCase())! }) : []).filter(Boolean)

function articleMatchesFilter(article: LastArrayElement<typeof list>): boolean {
  if (!filters.value.length || !article.fields.tags.length) return true
  else {
    for (const filter of filters.value) {
      if (article.fields.tags.map(x => x.toLowerCase()).includes(filter.toLowerCase()) || `${new Date(article.fields.publishDate).getFullYear()}` === filter) return true
    }
    return false
  }
}

function updateFilters(event: string[]): void {
  filters.value = event
  $router.replace({ query: { filters: event.length ? event.join(',').toLowerCase() : undefined } })
}

function scrollComboboxToTop() {
  const combobox = document.getElementById('filter')!
  const headerOffset = 72;
  const elementPosition = combobox.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}
</script>

<style lang="scss" scoped>
$postWidth: 26.5rem;

.filter {
  max-width: $postWidth;
}

.posts {
  list-style-type: none;
  padding: 1rem 0;
  margin-block: 0;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem 0.5rem;

  .container--thinner & > li {
    width: 23rem;
  }

  > li {
    width: $postWidth;
    max-width: 100%;
  }
}

.post {
  position: relative;
  display: block;
  overflow: hidden;
  background-color: var(--color-bg);
  border-radius: var(--border-radius-standard);
  box-shadow: var(--shadow);
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;

  @media (forced-colors: active) {
    border: 1px solid transparent;
  }

  &:hover {
    background-color: var(--color-fg1);
  }

  &__banner {
    position: absolute;
    background-color: var(--color-accent);
    color: #27242b;
    transform-origin: center;
    transform: rotate(-45deg);
    margin: 0;
    padding: 0.25rem 0;
    top: 1.75rem;
    left: -2.75rem;
    font-weight: 700;
    text-align: center;
    min-width: 11.25rem;
    max-width: 11.25rem;
  }

  &__article {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__details {
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__title {
    font-size: var(--text-heading);
    margin: 0;
  }

  &__description {
    flex: 1;
    font-size: var(--text-body);
    margin: 0;
  }

  &__date {
    font-size: var(--text-body);
    margin-top: 1rem;
    margin-bottom: 0;
  }

  &__tags {
    font-size: var(--text-body);
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    > li:not(:first-of-type) {
      position: relative;

      &::before {
        content: '•';
        position: absolute;
        left: -0.75rem;
        top: 50%;
        transform: translateY(-50%);
        display: block;
      }
    }
  }
}

.tag {
  color: var(--color-accent);

  &--bold {
    font-weight: 700;
  }
}
</style>
