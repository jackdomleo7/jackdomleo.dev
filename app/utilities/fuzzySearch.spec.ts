import { fuzzySearch } from './fuzzySearch';

describe('fuzzySearch()', () => {
  it('returns true when the searchTerm matches the searchString exactly', () => {
    const searchString = 'foo';
    const searchTerm = 'foo';

    expect(fuzzySearch(searchString, searchTerm)).toBe(true);
  });

  it('returns false when the searchTerm does not match the searchString exactly', () => {
    const searchString = 'foo';
    const searchTerm = 'bar';

    expect(fuzzySearch(searchString, searchTerm)).toBe(false);
  });

  it('returns true when the searchTerm matches the searchString exactly (with spaces)', () => {
    const searchString = 'foo foo';
    const searchTerm = 'foo foo';

    expect(fuzzySearch(searchString, searchTerm)).toBe(true);
  });

  it('returns false when the searchTerm does not match the searchString exactly (with spaces)', () => {
    const searchString = 'foo foo';
    const searchTerm = 'bar bar';

    expect(fuzzySearch(searchString, searchTerm)).toBe(false);
  });

  it('returns true when the searchTerm is at the beginning of the searchString', () => {
    const searchString = 'foo is a strange word';
    const searchTerm = 'foo';

    expect(fuzzySearch(searchString, searchTerm)).toBe(true);
  });

  it('returns true when the searchTerm is at the end of the searchString', () => {
    const searchString = 'strange word is foo';
    const searchTerm = 'foo';

    expect(fuzzySearch(searchString, searchTerm)).toBe(true);
  });

  it('returns true when the searchTerm is somewhere within the searchString', () => {
    const searchString = 'strange word foo is';
    const searchTerm = 'foo';

    expect(fuzzySearch(searchString, searchTerm)).toBe(true);
  });

  it('returns false when the searchTerm is nowhere within the searchString', () => {
    const searchString = 'bar bar wooly sheep';
    const searchTerm = 'foo';

    expect(fuzzySearch(searchString, searchTerm)).toBe(false);
  });

  it('returns true when the searchTerm (with spaces) is somewhere within the searchString separated by other words', () => {
    const searchString = 'foo is not the same word as bar';
    const searchTerm = 'foo bar';

    expect(fuzzySearch(searchString, searchTerm)).toBe(true);
  });

  it('returns true when the searchTerm matches the searchString but the searchString characters are separated by another character', () => {
    const searchString = 'F*o*o*B*a*r';
    const searchTerm = 'FooBar';

    expect(fuzzySearch(searchString, searchTerm)).toBe(true);
  });

  it('returns true when the searchTerm matches the searhString exactly differing only in capitalisation', () => {
    const searchString = 'FoO';
    const searchTerm = 'fOo';

    expect(fuzzySearch(searchString, searchTerm)).toBe(true);
  });

  it('returns true when the searchTerm (prefixed and suffixed with whitespace) matches the searchString (prefixed and suffixed with no whitespace)', () => {
    const searchString = 'foo';
    const searchTerm = '   foo    ';

    expect(fuzzySearch(searchString, searchTerm)).toBe(true);
  });
});