import type { Asset, EntryFields } from 'contentful'

export interface Product {
  title: string;
  slug: string;
  metaDescription?: string;
  type: 'Book';
  isbn?: string;
  releaseDate?: string;
  image: Asset;
  price?: string;
  ctaText?: string;
  ctaUrl?: string;
  gumroadId?: string;
  amazonUrl?: string;
  goodreadsUrl?: string;
  productHuntUrl?: string;
  productHuntId?: string;
  description?: EntryFields.RichText;
}