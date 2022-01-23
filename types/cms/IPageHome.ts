import { IImage } from "./IImage"
import { TRichText } from "./TRichText"

export interface IPageHome {
  page_title: string;
  page_intro: TRichText;
  header_cta_text: string;
  header_cta_link: string;
  show_header_cta: boolean;
  about_heading: string;
  about_text: TRichText;
  about_avatar: IImage
  skills_heading: string;
  skills: {
    name: string;
    logo: IImage;
  }[];
}
