import type { EntryFieldTypes } from 'contentful'

export interface Links {
  title: EntryFieldTypes.Text;
  description: EntryFieldTypes.RichText;
  links: EntryFieldTypes.Object<{
    items: {
      name: EntryFieldTypes.Text;
      url: EntryFieldTypes.Text;
      icon?: EntryFieldTypes.Text;
    }[]
  }>;
}