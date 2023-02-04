import type { EntryFields } from 'contentful'

export interface Project {
  name: string
  type: 'Project'|'Mini'|'Client'
  url: string
  description: EntryFields.RichText
  tech: string[]
  tags?: string[]
  image: Asset
}