import type { EntryFieldTypes } from 'contentful'

export interface BlogDetails {
  contentTypeId: 'blogDetails';
  fields: {
    hubTitle: EntryFieldTypes.Text;
    hubDescription?: EntryFieldTypes.RichText;
    articleDisclaimer?: EntryFieldTypes.RichText;
  };
}