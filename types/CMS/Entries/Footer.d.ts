import type { EntryFields, Entry } from 'contentful'
import type { Link } from './Link'

export interface Footer {
  quickLinks: Entry<Link>[]
  socialLinks: Entry<Link>[]
  legalText: EntryFields.RichText
}