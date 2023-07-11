import { calculateYearsExperience } from './NO_OF_YEARS_EXPERIENCE'

jest.useFakeTimers()

describe('calculateYearsExperience()', () => {
  it('returns "1" when years experience is 1 year', () => {
    jest.setSystemTime(new Date('2019-09-03'))

    expect(calculateYearsExperience()).toBe('1')
  })

  it('returns "just over 1" when years experience is 1 year and 3 months', () => {
    jest.setSystemTime(new Date('2020-01-03'))

    expect(calculateYearsExperience()).toBe('just over 1')
  })

  it('returns "1 and a half" when years experience is 1 year and 6 months', () => {
    jest.setSystemTime(new Date('2020-04-03'))

    expect(calculateYearsExperience()).toBe('1 and a half')
  })

  it('returns "nearly 2" when years experience is 1 year and 9 months', () => {
    jest.setSystemTime(new Date('2020-07-03'))

    expect(calculateYearsExperience()).toBe('nearly 2')
  })

  it('returns "2" when years experience is 2 years', () => {
    jest.setSystemTime(new Date('2020-09-03'))

    expect(calculateYearsExperience()).toBe('2')
  })
})