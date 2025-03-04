<template>
  <div class="work">
    <header class="container">
      <h1 class="work__title">{{ work.fields.title }}</h1>
      <div v-if="work.fields.description" class="work__description" v-html="parseRichText(work.fields.description)" />
    </header>
    <div class="container">
      <ol class="work__places">
        <li v-for="(place, index) in work.fields.workPlaces" :key="place?.fields.name" class="place">
          <div class="place__details">
            <nuxt-picture class="place__logo" provider="contentful" :src="place?.fields.logo?.fields.file?.url" :alt="place?.fields.logo?.fields.description" width="80" height="80" sizes="largemobile:40px standardtablet:80px" :preload="index === 0" :loading="index !== 0 ? 'lazy' : undefined" />
            <h2 class="place__name">{{ place?.fields.name }}</h2>
            <p class="place__duration">{{ (() => {
              const roles = place!.fields.workRoles
              const startDate = dayjs(roles.at(-1)!.fields.startDate)
              const endDate = roles.at(0)!.fields.endDate ? dayjs(new Date(roles.at(0)!.fields.endDate)) : dayjs()
              const years = Math.floor(endDate.diff(startDate, 'months') / 12)
              const yearsLabel = years > 1 ? 'years' : 'year'
              const months = endDate.diff(startDate, 'months') % 12
              const monthsLabel = months > 1 ? 'months' : 'month'
              return `${years > 0 ? `${years} ${yearsLabel}` : ''} ${months > 0 ? `${months} ${monthsLabel}` : ''} | ${startDate.format('MMMM YYYY')} - ${roles.at(0)!.fields.endDate ? endDate.format('MMMM YYYY') : 'present'}`
            })() }}</p>
          </div>
          <ol class="place__roles">
            <li v-for="role in place!.fields.workRoles" :key="role?.fields.title" class="role">
              <h3 class="role__name">{{ role?.fields.title }}</h3>
              <p class="role__dates">{{ dayjs(new Date(role?.fields.startDate!)).format('MMMM YYYY') }} - {{ role?.fields.endDate ? dayjs(new Date(role?.fields.endDate)).format('MMMM YYYY') : 'present' }}</p>
              <div class="rich-text role__description" v-html="parseRichText(role?.fields.description)" />
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { parseRichText } from '@/utilities/parseRichText'
import { formatCMSVariables } from '@/utilities/cmsVariables';
import type { ContentfulEntries } from '@/types/CMS/Entries';

const workEntries = await useAsyncData((ctx) => { return ctx!.$contentful.getEntries<ContentfulEntries.Work>({ content_type: 'work', limit: 1, include: 10 })})
const work = formatCMSVariables(workEntries.data.value!.items[0])

useHead({
  title: 'Work'
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/rich-text' as *;

.work {
  padding: 1rem;

  @media (min-width: $responsive-standard-tablet) {
    margin-top: 2rem;
  }

  &__title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: var(--text-title);
  
    @media (min-width: $responsive-standard-tablet) {
      margin-bottom: 2rem;
    }
  }

  &__description {
    font-size: var(--text-body);
  }

  &__places {
    list-style-type: none;
    padding: 0;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }
}

.place {
  --logo-size: 2.5rem;
  --logo-gap: 0.5rem;
  padding: 1rem 0;

  @media (min-width: $responsive-standard-tablet) {
    --logo-size: 5rem;
    --logo-gap: 2rem;
  }
  
  &__details {
    display: grid;
    grid-template-areas: 'logo name' 'logo duration';
    grid-template-columns: var(--logo-size) 1fr;
    gap: 0 var(--logo-gap);
  }

  &__logo {
    grid-area: logo;
    height: var(--logo-size);
    width: var(--logo-size);
    border-radius: var(--border-radius-standard);
    overflow: hidden;
  }

  &__name {
    grid-area: name;
    margin: 0;
    font-size: var(--text-subtitle);
  }

  &__duration {
    grid-area: duration;
    margin: 0;
    font-size: var(--text-small);
  }

  &__roles {
    list-style-type: disclosure-closed;
    padding-left: calc(var(--logo-size) + var(--logo-gap));
    margin-top: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
}

.role {
  padding: 0;

  &__name {
    margin: 0;
    font-size: var(--text-heading);
  }

  &__dates {
    margin: 0;
    font-size: var(--text-small);
  }
}

:deep() .rich-text {
  // Overrides
  h4 {
    margin-top: 1.5rem;
  }

  ul { // This is needed to make it seem like these are top-level lists because of the lists for each role
    list-style-type: disc;
  }
}
</style>