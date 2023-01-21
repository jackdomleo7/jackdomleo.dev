import type { EntryFields, Entry } from 'contentful'
import type { IRepeaterItem } from '../RepeaterItem'

export interface Footer {
  quickLinks: IRepeaterItem[]
  socialLinks: IRepeaterItem[]
  legalText: EntryFields.RichText
}