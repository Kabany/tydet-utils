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

/**
 * Returns `true` if the date is greater or equal to an instant (`new Date()`).
 * - If the date is `null` or is not an instance of `Date`, it will return `false`.
 */
export function isExpired(date: Date) {
  if (isValid(date)) {
    var today = new Date()
    return date.getTime() < today.getTime()
  } else {
    return false
  }
}

/**
 * Returns the difference in days between a date and its comparable.
 * - If the date is `null` or is not an instance of `Date`, it will return `null`.
 * - If `date > compared`, it will return a value greater than `0`.
 * - If `date < compared`, it will return a value less than `0`.
 * @param date - Date to compare
 * @param compared - Date compared as reference
 */
export function daysOfDifference(date: Date, compared: Date) {
  if (isValid(date) && isValid(compared)) {
    var ONE_DAY = 1000 * 60 * 60 * 24 // milliseconds
    var diff = date.getTime() - compared.getTime()
    return diff > 0 ? Math.ceil(diff/ONE_DAY) : Math.floor(diff/ONE_DAY)
  } else {
    return null
  }
}



/**
 * Returns the difference in hours between a date and its comparable.
 * If the date is `null` or is not an instance of `Date`, it will return `null`.
 * If `date > compared`, it will return a value greater than `0`.
 * If `date < compared`, it will return a value less than `0`.
 * @param date - Date to compare
 * @param compared - Date compared as reference
 */
export function hoursOfDifference(date: Date, compared: Date) {
  if (isValid(date) && isValid(compared)) {
    var ONE_HOUR = 1000 * 60 * 60 // milliseconds
    var diff = date.getTime() - compared.getTime()
    return diff > 0 ? Math.ceil(diff/ONE_HOUR) : Math.floor(diff/ONE_HOUR)
  } else {
    return null
  }
}


/**
 * Returns the difference in minutes between a date and its comparable.
 * If the date is `null` or is not an instance of `Date`, it will return `null`.
 * If `date > compared`, it will return a value greater than `0`.
 * If `date < compared`, it will return a value less than `0`.
 * @param date - Date to compare
 * @param compared - Date compared as reference
 */
export function minutesOfDifference(date: Date, compared: Date) {
  if (isValid(date) && isValid(compared)) {
    var ONE_MINUTE = 1000 * 60 // milliseconds
    var diff = date.getTime() - compared.getTime()
    return diff > 0 ? Math.ceil(diff/ONE_MINUTE) : Math.floor(diff/ONE_MINUTE)
  } else {
    return null
  }
}