import type { Asset, EntryFields } from 'contentful'

export interface Article {
  title: string;
  slug: string;
  image: Asset;
  description: string;
  publishDate: string;
  tags: string[];
  body: EntryFields.RichText;
}