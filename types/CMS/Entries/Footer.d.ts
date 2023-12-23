import type { EntryFieldTypes } from 'contentful'

export interface Footer {
  contentTypeId: 'footer';
  fields: {
    quickLinks: EntryFieldTypes.Object<{
      id: string;
      key: string;
      value: string;
    }[]>;
    socialLinks: EntryFieldTypes.Object<{
      id: string;
      key: string;
      value: string;
    }[]>;
    legalText: EntryFieldTypes.RichText;
  };
}