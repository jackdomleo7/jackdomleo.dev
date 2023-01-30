import type { EntryFields } from 'contentful'

export interface Link {
  name: string;
  url: string;
  icon?: string;
}

export interface Links {
  title: string;
  description: EntryFields.RichText;
  links: {
    items: Link[]
  };
}