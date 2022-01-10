export function stringHasNoWhitespace (value: string): boolean {
  return !/\s/g.test(value)
}
