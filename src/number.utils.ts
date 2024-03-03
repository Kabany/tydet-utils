/* 
  @TyDeT Utils - Numbers
*/

/**
 * Evaluates if the value is valid number, integer or decimal.
 * - It returns `true` if the value is a valid number.
 * @param value - Number to evaluate
 */
export function isValid(value: number | string) {
  if (typeof value === "number") {
    return !isNaN(value);
  } else if (typeof value === "string") {
    let n = new Number(value.trim())
    return value.trim() !== "" && !Number.isNaN(n.valueOf());
  } else {
    return false
  }
}

/**
 * Evaluates if the value is a positive integer. 
 * - It returns `true` if the value is a positive integer in a `number` or `string` type.
 * @param value - Number to evaluate
 */
export function isPositiveInteger(value: number | string) {
  if (typeof value == 'number') {
    return Number.isInteger(value) && value >= 0
  } else if (typeof value == 'string') {
    let parsed = new Number(value)
    return value.trim() !== "" && !Number.isNaN(parsed.valueOf()) && Number.isInteger(parsed.valueOf()) && parsed as number >= 0
  } else {
    return false
  }
}




/**
 * Evaluates if the value is a integer. 
 * - It returns `true` if the value is a integer in a `number` or `string` type.
 * @param value - Number to evaluate
 */
export function isInteger(value: any) {
  if (typeof value == 'number') {
    return Number.isInteger(value)
  } else if (typeof value == 'string') {
    let parsed = new Number(value)
    return value.trim() !== "" && !Number.isNaN(parsed.valueOf()) && Number.isInteger(parsed.valueOf())
  } else {
    return false
  }
}