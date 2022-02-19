export interface INuxtContentGeneric {
  toc: {
    id: string;
    depth: number;
    text: string;
  }[];
  dir: string;
  path: string;
  extension: '.md';
  createdAt: string; // Not sure why Nuxt Content doesn't set this to a date
  updatedAt: string; // Not sure why Nuxt Content doesn't set this to a date
  body: any;
  excerpt: any;
  text: string;
}

export type TNuxtContentGenericRuntime = Omit<INuxtContentGeneric, 'excerpt'|'text'> // excerpt and text only exist during build time

export interface IArticle extends TNuxtContentGenericRuntime {
  slug: string;
  description: string;
  title: string;
  date: string; // In format of yyyy-mm-dd
  tags: string[];
  img: {
    url: string;
    alt: string;
  };
  readingTime: number; // Automatically calculated during build time
  embeds?: 'twitter'[]
}
