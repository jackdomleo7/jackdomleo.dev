import { IImage } from "./IImage";
import { ILink } from "./ILink";
import { TRichText } from "./TRichText";

export interface IPageProduct {
  uid: string;
  meta_description?: TRichText;
  og_image: IImage;
  title: string;
  product_type: 'Ebook' | 'Course' | 'Saas';
  isbn?: string;
  release_date?: `${number}-${number}-${number}`;
  short_description: TRichText;
  images: {
    image: IImage
  }[];
  price?: string;
  cta_text?: string;
  cta_url?: ILink;
  amazon_url?: ILink;
  goodreads_url?: ILink;
  product_hunt_url?: ILink;
  product_hunt_id?: string;
  long_description: TRichText;
  testimonies: {
    avatar: IImage;
    name: string;
    profile_url: ILink;
    quote: TRichText;
  }[];
  faqs: {
    question: string;
    answer: TRichText;
  }[];
}