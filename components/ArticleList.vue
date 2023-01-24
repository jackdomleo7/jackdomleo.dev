<template>
  <ul class="posts container">
    <li v-for="(item, index) in blog!.items" :key="item.fields.slug">
      <nuxt-link :to="`/blog/${new Date(item.fields.publishDate).getFullYear()}/${item.fields.slug}`" class="post">
        <article class="post__article">
          <nuxt-picture class="post__img" provider="contentful" :src="item.fields.image.fields.file.url" :alt="item.fields.image.fields.description" width="424" height="223" sizes="4kdesktop:424px" loading="lazy" :preload="index <= 2" format="webp" />
          <div class="post__details">
            <ul class="post__tags">
              <li v-for="tag in item.fields.tags" :key="tag" class="tag">
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
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import type { ContentfulEntries } from '@/types/CMS/Entries'

const props = defineProps({
  limit: {
    type: Number,
    required: true,
    validator(value: number) {
      return value >= 0 && value <= 1000
    }
  }
})

const { data: blog } = await useAsyncData((ctx) => { return ctx!.$contentful.getEntries<Omit<ContentfulEntries.Article, 'body'>>({ content_type: 'article', limit: props.limit, order: '-fields.publishDate', select: 'fields.title,fields.description,fields.image,fields.tags,fields.publishDate,fields.slug' })})
</script>

<style lang="scss" scoped>
.posts {
  list-style-type: none;
  padding: 1rem;
  margin-block: 0;
  display: flex;
  align-items: stretch;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 3rem;

  > li {
    width: 26.5rem;
    max-width: 100%;
  }
}

.post {
  display: block;
  overflow: hidden;
  background-color: var(--color-bg);
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: var(--color-fg1);
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
    gap: 0.75rem;
    flex-wrap: wrap;
  }
}

.tag {
  color: var(--color-accent);
}
</style>