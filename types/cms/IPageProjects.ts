import { IImage } from "./IImage"
import { ILink } from "./ILink"
import { TRichText } from "./TRichText"

export interface IProject {
  name: string;
  url: ILink;
  project_type: 'standard' | 'mini' | 'website';
  short_description: TRichText;
  long_description: TRichText;
  tech_1: string | null;
  tech_2: string | null;
  tech_3: string | null;
  tech_4: string | null;
  thumbnail: IImage;
  mockup: IImage;
}

export interface IPageProjects {
  projects_intro: TRichText;
  mini_intro: TRichText;
  websites_intro: TRichText;
  projects: IProject[];
}