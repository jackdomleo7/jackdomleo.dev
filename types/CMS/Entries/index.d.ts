import type { Home as EntryHome } from './Home'
import type { Footer as EntryFooter } from './Footer'
import type { Link as EntryLink } from './Link'

export namespace ContentfulEntries {
  export interface Home extends EntryHome {}
  export interface Footer extends EntryFooter {}
  export interface Link extends EntryLink {}
}