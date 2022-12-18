<template>
  <h1>Hello</h1>
  <pre>{{ data }}</pre>
</template>

<script lang="ts" setup>
import { Contentful } from '@/enums/Contentful'
import { ContentfulEntries } from '@/types/CMS/Entries/Home'

const { data } = await useAsyncData((ctx) => { return ctx!.$contentful.getEntry<ContentfulEntries.Home>(Contentful.EntryIDs.HOME)})
</script>