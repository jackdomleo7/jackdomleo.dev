<template>
  <h1>Hello</h1>
  <pre>{{ data }}</pre>
</template>

<script lang="ts" setup>
import { Contentful } from '@/enums/Contentful'
import type { ContentfulEntries } from '@/types/CMS/Entries'
import { formatCMSVariables } from '@/utilities/cmsVariables'

const { data } = await useAsyncData((ctx) => { return ctx!.$contentful.getEntry<ContentfulEntries.Home>(Contentful.EntryIDs.HOME)})
data.value!.fields = formatCMSVariables(data.value!.fields)
</script>