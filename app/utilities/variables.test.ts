import variables, { computeYearsExperience } from './variables'

describe('variables', () => {
  describe('static string values', () => {
    it('LINKEDIN_URL should be the correct LinkedIn profile URL', () => {
      expect(variables.LINKEDIN_URL).toBe('https://linkedin.com/in/jackdomleo7/')
    })

    it('GITHUB_URL should be the correct GitHub profile URL', () => {
      expect(variables.GITHUB_URL).toBe('https://github.com/jackdomleo7')
    })

    it('CODEPEN_URL should be the correct CodePen profile URL', () => {
      expect(variables.CODEPEN_URL).toBe('https://codepen.io/jackdomleo7')
    })

    it('OCCUPATION should be Lead Frontend Engineer', () => {
      expect(variables.OCCUPATION).toBe('Lead Frontend Engineer')
    })
  })

  describe('CURRENT_YEAR', () => {
    it('should be a 4-digit calendar year', () => {
      expect(variables.CURRENT_YEAR).toBeGreaterThanOrEqual(2024)
      expect(variables.CURRENT_YEAR).toBeLessThanOrEqual(2100)
    })

    it('should match the actual current year at runtime', () => {
      expect(variables.CURRENT_YEAR).toBe(new Date().getFullYear())
    })
  })

  describe('computeYearsExperience()', () => {
    // Career start date: 2018-09-03
    // The function counts complete career quarters and maps remainders:
    //   remainder 0 → exactly N years       → "N"
    //   remainder 1 → just past a year mark → "just over N"
    //   remainder 2 → mid-year              → "N and a half"
    //   remainder 3 → approaching next year → "nearly N+1"

    it('returns exact years when on an anniversary (remainder 0)', () => {
      // 2025-09-03 = exactly 28 quarters (7 years) from 2018-09-03
      expect(computeYearsExperience(new Date('2025-09-03'))).toBe('7')
    })

    it('returns "just over N" when 1 quarter past an anniversary (remainder 1)', () => {
      // 2025-12-04 = 29 complete quarters from 2018-09-03, remainder 1
      expect(computeYearsExperience(new Date('2025-12-04'))).toBe('just over 7')
    })

    it('returns "N and a half" when 2 quarters past an anniversary (remainder 2)', () => {
      // 2026-03-04 = 30 complete quarters from 2018-09-03, remainder 2
      expect(computeYearsExperience(new Date('2026-03-04'))).toBe('7 and a half')
    })

    it('returns "nearly N+1" when 3 quarters past an anniversary (remainder 3)', () => {
      // 2026-06-04 = 31 complete quarters from 2018-09-03, remainder 3
      expect(computeYearsExperience(new Date('2026-06-04'))).toBe('nearly 8')
    })

    it('handles earlier career milestones correctly', () => {
      // 2020-09-03 = exactly 8 quarters (2 years)
      expect(computeYearsExperience(new Date('2020-09-03'))).toBe('2')
    })
  })

  describe('NO_OF_YEARS_EXPERIENCE', () => {
    it('should be a non-empty string', () => {
      expect(typeof variables.NO_OF_YEARS_EXPERIENCE).toBe('string')
      expect(variables.NO_OF_YEARS_EXPERIENCE.length).toBeGreaterThan(0)
    })

    it('should match computeYearsExperience() called at the same moment', () => {
      // Both are evaluated at import time so they should be identical
      expect(variables.NO_OF_YEARS_EXPERIENCE).toBe(computeYearsExperience())
    })
  })
})
