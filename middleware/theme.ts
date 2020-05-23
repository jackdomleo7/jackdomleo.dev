export default class Theme {
  private static readonly localStorageThemeVariable: string = 'jackdomleo.dev-theme';

  public static get localStorageThemeVar () {
    return this.localStorageThemeVariable;
  }
}
