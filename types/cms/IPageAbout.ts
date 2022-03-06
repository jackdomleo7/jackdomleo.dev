import { IImage } from "./IImage"
import { TRichText } from "./TRichText"

export interface IAboutSection {
  image_1?: IImage;
  image_2?: IImage;
  image_position: 'left'|'right';
  text: TRichText;
}

export interface IPageAbout {
  about_intro: TRichText;
  about_sections: IAboutSection[];
}