/**
* Client side fuzzy search to loosely search for a term within a string
* @param searchString - the string that is being searched within
* @param searchTerm - the term that is being searched for
* @returns true if loosely matched, false if not matched at all
*/
export function fuzzySearch(searchString: string, searchTerm: string): boolean {
  let startMinusOne = -1;
  searchTerm = searchTerm.toLowerCase().trim();
  searchString = searchString.toLowerCase();

  for (let i = 0; i < searchTerm.length; i++) {
    if (!~(startMinusOne = searchString.indexOf(searchTerm[i], startMinusOne + 1))) {
      return false;
    }
  }

  return true;
}