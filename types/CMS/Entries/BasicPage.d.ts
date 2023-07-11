import type { EntryFieldTypes } from 'contentful'

export interface BasicPage {
  metaDescription?: EntryFieldTypes.Text;
  title: EntryFieldTypes.Text,
  slug: EntryFieldTypes.Text,
  body: EntryFieldTypes.RichText,
}