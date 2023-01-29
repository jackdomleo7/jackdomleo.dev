import type { EntryFields } from 'contentful'

export interface BasicPage {
  metaDescription?: string;
  title: string,
  slug: string,
  body: EntryFields.RichText,
}