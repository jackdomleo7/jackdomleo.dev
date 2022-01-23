export interface IImage {
  url: string | null;
  alt: string | null;
  copyright: string | null;
  dimensions: {
    height: number;
    width: number;
  }
}