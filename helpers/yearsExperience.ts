import { differenceInQuarters } from 'date-fns'

export const NO_OF_YEARS_EXPERIENCE_PRISMIC_VAR = '#{NO_OF_YEARS_EXPERIENCE}'

export function calculateYearsExperience(): string {
  const firstDayAsDeveloper = new Date('2018-09-03')
  const quarterDifference = Math.abs(differenceInQuarters(firstDayAsDeveloper, new Date()))
  const yearsDifference = Math.floor(quarterDifference / 4)
  const yearsDifferenceRemainder = quarterDifference % 4

  let yearsExperience = ''

  if (yearsDifferenceRemainder === 1) {
    yearsExperience = `just over ${yearsDifference}`
  }
  else if (yearsDifferenceRemainder === 2) {
    yearsExperience = `${yearsDifference} and a half`
  }
  else if (yearsDifferenceRemainder === 3) {
    yearsExperience = `nearly ${yearsDifference + 1}`
  }
  else {
    yearsExperience = `${yearsDifference}`
  }

  return yearsExperience
}