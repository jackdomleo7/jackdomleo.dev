export default class Search {
  // Returns true if the searchTerm is found anywhere in searchString
  public static fuzzySearch (searchString: string | null | undefined, searchTerm: string): boolean {
    if (searchString === null || searchString === undefined) {
      return false;
    }

    let startMinusOne = -1;
    searchTerm = searchTerm.toString();
    searchString = searchString.toString();
    searchTerm = searchTerm.toLowerCase().trim();
    searchString = searchString.toLowerCase();

    for (let i = 0; i < searchTerm.length; i++) {
      if (!~(startMinusOne = searchString.indexOf(searchTerm[i], startMinusOne + 1))) {
        return false;
      }
    }

    return true;
  }
}
