import type { Article as EntryArticle } from './Article'
import type { BlogDetails as EntryBlogDetails } from './BlogDetails'
import type { Home as EntryHome } from './Home'
import type { Footer as EntryFooter } from './Footer'

export namespace ContentfulEntries {
  export interface Article extends EntryArticle {}
  export interface BlogDetails extends EntryBlogDetails {}
  export interface Home extends EntryHome {}
  export interface Footer extends EntryFooter {}
}