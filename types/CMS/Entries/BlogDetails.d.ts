import type { EntryFields } from 'contentful'

export interface BlogDetails {
  hubTitle: string;
  hubDescription?: EntryFields.RichText;
  articleDisclaimer?: EntryFields.RichText;
}