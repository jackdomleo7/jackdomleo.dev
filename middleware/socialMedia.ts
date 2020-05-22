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
      url: 'https://github.com/JDomleo'
    },
    {
      platform: 'CodePen',
      url: 'https://codepen.io/JackDomleo'
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jack-domleo'
    },
    {
      platform: 'CodeCademy',
      url: 'https://www.codecademy.com/profiles/JackDomleo'
    },
    {
      platform: 'Buy Me a Coffee',
      url: 'https://www.buymeacoffee.com/jackdomleo'
    }
  ];

  public static get socialMedia (): ISocial[] {
    return this._socials;
  }
}
