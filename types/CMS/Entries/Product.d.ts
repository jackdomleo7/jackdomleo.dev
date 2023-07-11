import type { Asset, EntryFieldTypes } from 'contentful'

export interface Product {
  title: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Text;
  metaDescription?: EntryFieldTypes.Text;
  type: 'Book';
  isbn?: EntryFieldTypes.Text;
  releaseDate?: EntryFieldTypes.Date;
  image: EntryFieldTypes.AssetLink;
  price?: EntryFieldTypes.Text;
  ctaText?: EntryFieldTypes.Text;
  ctaUrl?: EntryFieldTypes.Text;
  gumroadId?: EntryFieldTypes.Text;
  amazonUrl?: EntryFieldTypes.Text;
  goodreadsUrl?: EntryFieldTypes.Text;
  productHuntUrl?: EntryFieldTypes.Text;
  productHuntId?: EntryFieldTypes.Text;
  description?: EntryFieldTypes.RichText;
}