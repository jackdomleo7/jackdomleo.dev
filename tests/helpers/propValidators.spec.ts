import { stringHasNoWhitespace } from '@/helpers/propValidators'

describe('stringHasNoWhitespace()', () => {
  const acceptableStrings = ['', 'user', 'user-name', 'user_name', 'userName']
  acceptableStrings.forEach((value: string) => {
    it(`returns true when "${value}" is given as value`, () => {
      const result = stringHasNoWhitespace(value)
      expect(result).toBe(true)
    })
  })

  const unacceptableStrings = [' ', ' user', 'user ', ' user ', 'user name']
  unacceptableStrings.forEach((value: string) => {
    it(`returns false when "${value}" is given as value`, () => {
      const result = stringHasNoWhitespace(value)
      expect(result).toBe(false)
    })
  })
})
