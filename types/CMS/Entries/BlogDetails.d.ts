import type { EntryFieldTypes } from 'contentful'

export interface BlogDetails {
  hubTitle: EntryFieldTypes.Text;
  hubDescription?: EntryFieldTypes.RichText;
  articleDisclaimer?: EntryFieldTypes.RichText;
}