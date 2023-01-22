import MockDate from 'mockdate'
import { calculateYearsExperience } from './NO_OF_YEARS_EXPERIENCE'

describe('calculateYearsExperience()', () => {
  it('returns "1" when years experience is 1 year', () => {
    MockDate.set('2019-09-03')

    expect(calculateYearsExperience()).toBe('1')

    MockDate.reset()
  })

  it('returns "just over 1" when years experience is 1 year and 3 months', () => {
    MockDate.set('2020-01-03')

    expect(calculateYearsExperience()).toBe('just over 1')

    MockDate.reset()
  })

  it('returns "1 and a half" when years experience is 1 year and 6 months', () => {
    MockDate.set('2020-04-03')

    expect(calculateYearsExperience()).toBe('1 and a half')

    MockDate.reset()
  })

  it('returns "nearly 2" when years experience is 1 year and 9 months', () => {
    MockDate.set('2020-07-03')

    expect(calculateYearsExperience()).toBe('nearly 2')

    MockDate.reset()
  })

  it('returns "2" when years experience is 2 years', () => {
    MockDate.set('2020-09-03')

    expect(calculateYearsExperience()).toBe('2')

    MockDate.reset()
  })
})