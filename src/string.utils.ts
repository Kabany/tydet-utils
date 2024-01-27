/* 
  @TyDeT Utils - String
*/




/** 
 * Evaluates if the parameter is `null`, `undefined` or an empty `string`.
 * It returns `true` for `null`, `undefined` or any `string` that only contains spaces; otherwise it returns `false`.
 * @param {string} str - String to evaluate
 * @returns {boolean} Result of the evaluation
 */
export function isEmpty(str: string) {
  return str === null || str === undefined || (typeof str == 'string' && str.trim() == '')
}

/** 
 * Evaluates if the parameter is a `string`.
 * It returns `true` for any string; otherwise it returns `false`.
 * @param {string} str - String to evaluate
 * @returns {boolean} Result of the evaluation
 */
export function isNotEmpty(str: string) {
  return str != null && typeof str == 'string'
}

/** 
 * Evaluates if the parameter is an empty `string`.
 * It returns `true` for any `string` that only contains spaces; otherwise it returns `false`.
 * @param {string} str - String to evaluate
 * @returns {boolean} Result of the evaluation
 */
export function isBlank(str: string) {
  return typeof str == "string" && str.trim() == ""
}

/** 
 * Evaluates if the parameter is `string` that not only contains spaces.
 * It returns `true` for any `string` that not only contains spaces; otherwise it returns `false`.
 * @param {string} str - String to evaluate
 * @returns {boolean} Result of the evaluation
 */
export function isNotBlank(str: string) {
  return typeof str == "string" && str.trim() != ""
}

/**
 * Returns a `string` with its characters reversed. 
 * Returns `null` if the input is not a `string`.
 * @param {string} str - String to evaluate
 * @returns {string | null} String with its characters reversed.
 */
export function reverse(str: string) {
  if (isNotBlank(str)) {
    var newText = ""
    for (var x = 0; x < str.length; x++) {
      newText = str.charAt(x) + newText
    }
    return newText
  } else if (isBlank(str)) {
    return str;
  } else {
    return null
  }
}




/**
 * Returns the char at a specified index (position) in a string. 
 * If the input is not a `string` type, it will return `undefined`.
 * If the position is an invalid index, it will return `undefined`.
 * If the position is a float number, it will be fixed with the `Math.floor()` operator.
 * The index can be a negative number to get the latest char in a string.
 * @param {string} str - String to evaluate
 * @param {number} position - Char position
 * @returns {string} Requested char
 */
export function at(str: string, position: number = 0) {
  return isNotEmpty(str) ? str.at(position) : undefined
}

/**
 * Returns the char at a specified index (position) in a string. 
 * If the input is not a `string` type, it will return an empty `string`.
 * If the position is an invalid index, it will return an empty `string`.
 * If the position is a float number, it will be fixed with the `Math.floor()` operator.
 * @param {string} str - String to evaluate
 * @param {number} position - Char position
 * @returns {string} Requested char
 */
export function charAt(str: string, position: number = 0) {
  return isNotEmpty(str) ? str.charAt(position) : ""
}

/**
 * Returns the Unicode of the char at a specified index (position) in a string.
 * If the input is not a `string` type, it will return `undefined`.
 * If the position is an invalid index, it will return `undefined`.
 * If the position is a float number, it will be fixed with the `Math.floor()` operator.
 * @param {string} str - String to evaluate
 * @param {number} position - Char position
 * @returns {number} Requested char code
 */
export function charCodeAt(str: string, position: number = 0) {
  if (isNotEmpty(str)) {
    let result = str.charCodeAt(position)
    return Number.isNaN(result) ? undefined : result
  } else {
    return undefined
  }
}

/**
 * Returns the Unicode of the char at a specified index (position) in a string.
 * `charCodeAt()` is UTF-16, `codePointAt()` is Unicode. Both methods return an integer representing the UTF-16 code of a character, but only `codePointAt()` can return the full value of a Unicode value greather 0xFFFF (65535).
 * If the input is not a `string` type, it will return `undefined`.
 * If the position is an invalid index, it will return `undefined`.
 * If the position is a float number, it will be fixed with the `Math.floor()` operator.
 * @param {string} str - String to evaluate
 * @param {number} position - Char position
 * @returns {number} Requested char code
 */
export function codePointAt(str: string, position: number = 0) {
  if (isNotEmpty(str)) {
    let result = str.codePointAt(position)
    return Number.isNaN(result) ? undefined : result
  } else {
    return undefined
  }
}

/**
 * Joins two or more strings with a safe null.
 * @param {string} str - String to concatenate
 * @returns {string} Concatenated string
 */
export function concat(...str: string[]) {
  let result = ""
  for (let item of str) {
    if (isNotEmpty(item)) {
      result = result.concat(item)
    }
  }
  return result
}

/** 
 * Returns the length of a `string`. 
 * If the parameter is `null` or is not a `string`, the result will be `0`.
 * @param {string} str - String to evaluate
 * @returns {number} The length of the string
 */
export function length(str: string) {
  return str != null && typeof str == 'string' ? str.length : 0
}