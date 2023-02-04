import type { Asset, EntryFields } from 'contentful'
import type { IRepeaterItem } from '../RepeaterItem'

export interface Home {
  metaDescription: string;
  title: string
  heroBody: EntryFields.RichText
  heroImage: Asset
  aboutTitle: string
  aboutBody: EntryFields.RichText
  aboutImage: Asset
  skillsTitle: string
  skillsList: IRepeaterItem[]
}