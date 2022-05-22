import { IImage } from "./IImage";
import { ILink } from "./ILink";
import { TRichText } from "./TRichText";

export interface IPageProduct {
  uid: string;
  meta_description: string;
  title: string;
  product_type: 'Ebook' | 'Course' | 'Saas';
  short_description: TRichText;
  images: {
    image: IImage
  }[];
  cta_text: string;
  cta_url: ILink;
  amazon_url: ILink;
  goodreads_url: ILink;
  product_hunt_url: ILink;
  product_hunt_id: string;
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