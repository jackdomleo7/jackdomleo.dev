import type { EntryFieldTypes } from 'contentful'

export interface Home {
  contentTypeId: 'home';
  fields: {
    metaDescription: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    heroBody: EntryFieldTypes.RichText;
    heroImage: EntryFieldTypes.AssetLink;
    aboutTitle: EntryFieldTypes.Text;
    aboutBody: EntryFieldTypes.RichText;
    aboutImage: EntryFieldTypes.AssetLink;
    skillsTitle: EntryFieldTypes.Text;
    skillsList: EntryFieldTypes.Object<{
      id: string;
      key: string;
      value: string;
    }[]>;
  };
}