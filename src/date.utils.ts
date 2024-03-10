/* 
  @TyDeT Utils - Date Utility
*/



/**
 * Returns `true` if the parameter is a valid date. It can accept values of type `string`, `number` or `Date`.
 * @param date - Variable to evaluate.
 */
export function isValid(date: string | number | Date) {
  if (date == null) {
    return false
  } else if (date instanceof Date) {
    return !isNaN(date.getTime())
  } else if (typeof date == 'string') {
    let sd = new Date(date)
    return !isNaN(sd.getTime())
  } else if (typeof date == 'number') {
    let nd = new Date(date)
    return !isNaN(nd.getTime())
  } else {
    return false
  }
}

/**
 * Add years to a date. 
 * - If the date is `null` or is not an instance of `Date`, it returns `null`.
 * - If the year number is `null`, then it will be `0`.
 * @param date - Date to modify
 * @param years - Total of years to add or reduce to a date.
 */
export function addYears(date: Date, years: number) {
  if (isValid(date)) {
    let d = new Date(date);
    d.setFullYear(date.getFullYear() + (years || 0))
    return d
  } else {
    return null
  }
}

/**
 * Add months to a date. 
 * - If the date is `null` or is not an instance of `Date`, it returns `null`.
 * - If the month number is `null`, then it will be `0`.
 * @param date - Date to modify
 * @param months - Total of months to add or reduce to a date
 */
export function addMonths(date: Date, months: number) {
  if (isValid(date)) {
    let d = new Date(date);
    d.setMonth(date.getMonth() + (months || 0))
    return d
  } else {
    return null
  }
}

/**
 * Add days to a date. 
 * - If the date is `null` or is not an instance of `Date`, it returns `null`.
 * - If the day number is `null`, then it will be `0`.
 * @param date - Date to modify
 * @param days - Total of days to add or reduce to a date
 */
export function addDays(date: Date, days: number) {
  if (isValid(date)) {
    let d = new Date(date);
    d.setDate(date.getDate() + (days || 0))
    return d
  } else {
    return null
  }
}

/**
 * Add hours to a date. 
 * - If the date is `null` or is not an instance of `Date`, it returns `null`.
 * - If the hour number is `null`, then it will be `0`
 * @param date - Date to modify
 * @param hours - Total of hours to add or reduce to a date
 */
export function addHours(date: Date, hours: number) {
  if (isValid(date)) {
    let d = new Date(date)
    d.setHours(date.getHours() + (hours || 0))
    return d
  } else {
    return null
  }
}

/**
 * Add minutes to a date. 
 * - If the date is `null` or is not an instance of `Date`, it returns `null`.
 * - If the minute number is `null`, then it will be `0`
 * @param date - Date to modify
 * @param minutes - Total of minutes to add or reduce to a date
 */
export function addMinutes(date: Date, minutes: number) {
  if (isValid(date)) {
    let d = new Date(date)
    d.setMinutes(date.getMinutes() + (minutes || 0))
    return d
  } else {
    return null
  }
}