import type { EntryFieldTypes } from 'contentful'

export interface Project {
  name: EntryFieldTypes.Text
  type: 'Project'|'Mini'|'Client'
  url: EntryFieldTypes.Text
  description: EntryFieldTypes.RichText
  tech: EntryFieldTypes.Object<string[]>
  tags?: EntryFieldTypes.Object<string[]>
  image: EntryFieldTypes.AssetLink
}