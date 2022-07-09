export type TDocumentType = 'home' | 'projects' | 'blog' | 'about' | 'product' | 'amazon_affiliate_legal'

export interface IPage<DataType extends Record<string, any>, DocumentType extends TDocumentType> {
  alternate_languages: any[];
  first_publication_date: Date;
  last_publication_date: Date;
  href: string;
  id: string;
  uid: string | null;
  url: string | null;
  lang: 'en-gb';
  type: DocumentType;
  linked_documents: any[];
  slugs: string[];
  tags: string[];
  data: DataType;
}
