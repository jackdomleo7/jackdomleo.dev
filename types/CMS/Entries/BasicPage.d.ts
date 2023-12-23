import type { EntryFieldTypes } from 'contentful'

export interface BasicPage {
  contentTypeId: 'basicPage';
  fields: {
    metaDescription?: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    body: EntryFieldTypes.RichText;
  };
}