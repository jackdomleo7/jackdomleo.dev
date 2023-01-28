import type { EntryFields, Entry } from 'contentful'
import type { Project } from './Project'

export interface Projects {
  title: string
  description: EntryFields.RichText
  projectsList: Entry<Project>[]
}