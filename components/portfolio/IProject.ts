export default interface IProject {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  tech?: ITech[];
  url?: string;
  searchAliases?: string[];
  // eslint-disable-next-line
};

export interface ITech {
  name: string;
  icon: string;
};
