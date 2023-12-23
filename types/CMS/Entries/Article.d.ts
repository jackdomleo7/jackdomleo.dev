import type { EntryFieldTypes } from 'contentful'

export interface Article {
  title: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Text;
  image: EntryFieldTypes.AssetLink;
  description: EntryFieldTypes.Text;
  publishDate: EntryFieldTypes.Date;
  tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  body: EntryFieldTypes.RichText;
  suggestedArticles: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<{ contentTypeId: 'article', fields: Article }>>;
}