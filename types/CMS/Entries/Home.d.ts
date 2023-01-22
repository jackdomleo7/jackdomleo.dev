import type { Asset, EntryFields } from 'contentful'

export interface Home {
  title: string
  heroBody: EntryFields.RichText
  heroImage: Asset
  aboutTitle: string
  aboutBody: EntryFields.RichText
  aboutImage: Asset
}