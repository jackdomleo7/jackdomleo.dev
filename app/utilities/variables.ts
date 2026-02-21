import dayjs from "dayjs"

/** Returns a human-readable years-of-experience string based on complete
 *  career quarters from 2018-09-03 to the given date (defaults to now).
 *  Exported so it can be unit-tested with arbitrary dates.
 */
export function computeYearsExperience(now: Date = new Date()): string {
  const firstDayAsDeveloper = dayjs(new Date('2018-09-03'))
  const quarterDifference = Math.abs(firstDayAsDeveloper.diff(now, 'quarter'))
  const yearsDifference = Math.floor(quarterDifference / 4)
  const yearsDifferenceRemainder = quarterDifference % 4

  // TODO: From Sept 2028, change to just outputting yearsDifference
  if (yearsDifferenceRemainder === 1) return `just over ${yearsDifference}`
  if (yearsDifferenceRemainder === 2) return `${yearsDifference} and a half`
  if (yearsDifferenceRemainder === 3) return `nearly ${yearsDifference + 1}`
  return `${yearsDifference}`
}

export default {
  LINKEDIN_URL: 'https://linkedin.com/in/jackdomleo7/',
  GITHUB_URL: 'https://github.com/jackdomleo7',
  CODEPEN_URL: 'https://codepen.io/jackdomleo7',
  OCCUPATION: 'Lead Frontend Engineer',
  CURRENT_YEAR: new Date().getFullYear(),
  NO_OF_YEARS_EXPERIENCE: computeYearsExperience()
}