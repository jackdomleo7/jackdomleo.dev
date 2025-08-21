import dayjs from "dayjs"

export default {
  LINKEDIN_URL: 'https://linkedin.com/in/jackdomleo7/',
  GITHUB_URL: 'https://github.com/jackdomleo7',
  CODEPEN_URL: 'https://codepen.io/jackdomleo7',
  OCCUPATION: 'Senior Frontend & UX Developer',
  CURRENT_YEAR: new Date().getFullYear(),
  NO_OF_YEARS_EXPERIENCE: (() => {
    const firstDayAsDeveloper = dayjs(new Date('2018-09-03'))
    const quarterDifference = Math.abs(firstDayAsDeveloper.diff(new Date(), 'quarter'))
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
  })()
}