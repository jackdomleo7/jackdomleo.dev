import { IImage } from "./IImage";
import { TRichText } from "./TRichText";

export interface IPageUses {
  intro: TRichText
  uses: TRichText
  office_setup: IImage
}