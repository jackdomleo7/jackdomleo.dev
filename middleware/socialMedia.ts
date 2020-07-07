export interface ISocial {
  platform: string;
  url: string;
}

export default class SocialMedia {
  private static readonly _socials: ISocial[] = [
    {
      platform: 'Twitter',
      url: 'https://twitter.com/jackdomleo7'
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/jackdomleo7'
    },
    {
      platform: 'CodePen',
      url: 'https://codepen.io/jackdomleo7'
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jackdomleo7'
    },
    {
      platform: 'DEV',
      url: 'https://dev.to/jackdomleo7'
    }
  ];

  public static get socialMedia (): ISocial[] {
    return this._socials;
  }
}
