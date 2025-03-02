import type { Article as EntryArticle } from './Article'
import type { BasicPage as EntryBasicPage } from './BasicPage'
import type { BlogDetails as EntryBlogDetails } from './BlogDetails'
import type { Home as EntryHome } from './Home'
import type { Links as EntryLinks } from './Links'
import type { Footer as EntryFooter } from './Footer'
import type { Project as EntryProject } from './Project'
import type { Projects as EntryProjects } from './Projects'
import type { Work as EntryWork } from './Work'

export namespace ContentfulEntries {
  export interface Article extends EntryArticle {}
  export interface BasicPage extends EntryBasicPage {}
  export interface BlogDetails extends EntryBlogDetails {}
  export interface Home extends EntryHome {}
  export interface Links extends EntryLinks {}
  export interface Footer extends EntryFooter {}
  export interface Project extends EntryProject {}
  export interface Projects extends EntryProjects {}
  export interface Work extends EntryWork {}
}