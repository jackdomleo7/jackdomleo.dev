export interface IPage<T> {
  alternate_languages: any[];
  first_publication_date: Date;
  last_publication_date: Date;
  href: string;
  id: string;
  uid: string | null;
  url: string | null;
  lang: 'en-gb';
  type: string;
  linked_documents: any[];
  slugs: string[];
  tags: string[];
  data: T;
}
