import type { EntryFieldTypes } from 'contentful'

export interface Projects {
  contentTypeId: 'projects';
  fields: {
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
  };
}