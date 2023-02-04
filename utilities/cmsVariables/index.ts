import type { LiteralUnion } from 'type-fest'
import { calculateYearsExperience } from './NO_OF_YEARS_EXPERIENCE'

const variables = {
  CURRENT_YEAR: new Date().getFullYear(),
  NO_OF_YEARS_EXPERIENCE: calculateYearsExperience()
}

function getVariable(variable: LiteralUnion<keyof typeof variables, string>): string {
  // @ts-ignore
  const value = variables[variable]

  if (!value) {
    return ''
  }

  return value.toString()
}

function replaceVariablesInString(text: string): string {
  const cmsVariableRegex = /[#][{]([A-Z0-9_]+)[}]/g // Match a variable in the format of #{VAR_HERE}
  const variablesFound = text.match(cmsVariableRegex)

  if (!variablesFound) {
    return text
  }

  // Remove duplicate variables
  const variablesFoundUnique = [...new Set(variablesFound)]

  variablesFoundUnique.forEach(variable => {
    const strippedVariable = variable.replace('#{', '').replace('}', '').trim() // Remove beginning #{ and ending } and trim any whitespace
    const variableRegex = new RegExp(variable, 'g')
    text = text.replace(variableRegex, getVariable(strippedVariable))
  })

  return text
}

export function formatCMSVariables<T>(data: T): T {
  if (typeof data === 'object') {
    for (const i in data) {
      if (typeof data[i] === 'string') {
        data[i] = replaceVariablesInString(data[i]) as T[typeof i]
      }
      else if (data[i] !== null && typeof data[i] === 'object') {
        formatCMSVariables(data[i])
      }
    }
  }

  return data
}