/* 
  @TyDeT Utils - String
*/




/** 
 * Evaluates if the parameter is `null`, `undefined` or an empty `string`.
 * It returns `true` for `null`, `undefined` or any `string` that only contains spaces; otherwise it returns `false`.
 * @param {string} str - String to evaluate.
 * @returns {boolean} Result of the evaluation.
 */
export function isEmpty(str: string) {
  return str === null || str === undefined || (typeof str == 'string' && str.trim() == '')
}

/** 
 * Evaluates if the parameter is a `string`.
 * It returns `true` for any string; otherwise it returns `false`.
 * @param {string} str - String to evaluate.
 * @returns {boolean} Result of the evaluation.
 */
export function isNotEmpty(str: string) {
  return str != null && typeof str == 'string'
}

/** 
 * Evaluates if the parameter is an empty `string`.
 * It returns `true` for any `string` that only contains spaces; otherwise it returns `false`.
 * @param {string} str - String to evaluate.
 * @returns {boolean} Result of the evaluation.
 */
export function isBlank(str: string) {
  return typeof str == "string" && str.trim() == ""
}

/** 
 * Evaluates if the parameter is `string` that not only contains spaces.
 * It returns `true` for any `string` that not only contains spaces; otherwise it returns `false`.
 * @param {string} str - String to evaluate.
 * @returns {boolean} Result of the evaluation.
 */
export function isNotBlank(str: string) {
  return typeof str == "string" && str.trim() != ""
}

/**
 * Returns a `string` with its characters reversed. 
 * Returns `null` if the input is not a `string`.
 * @param {string} str - String to evaluate.
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
 * @param {string} str - String to evaluate.
 * @param {number} position - Char position.
 * @returns {string} Requested char.
 */
export function at(str: string, position: number = 0) {
  return isNotEmpty(str) ? str.at(position) : undefined
}

/**
 * Returns the char at a specified index (position) in a string. 
 * If the input is not a `string` type, it will return an empty `string`.
 * If the position is an invalid index, it will return an empty `string`.
 * If the position is a float number, it will be fixed with the `Math.floor()` operator.
 * @param {string} str - String to evaluate.
 * @param {number} position - Char position.
 * @returns {string} Requested char.
 */
export function charAt(str: string, position: number = 0) {
  return isNotEmpty(str) ? str.charAt(position) : ""
}

/**
 * Returns the Unicode of the char at a specified index (position) in a string.
 * If the input is not a `string` type, it will return `undefined`.
 * If the position is an invalid index, it will return `undefined`.
 * If the position is a float number, it will be fixed with the `Math.floor()` operator.
 * @param {string} str - String to evaluate.
 * @param {number} position - Char position.
 * @returns {number} Requested char code.
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
 * @param {string} str - String to evaluate.
 * @param {number} position - Char position.
 * @returns {number} Requested char code.
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
 * @param {string} str - String to concatenate.
 * @returns {string} Concatenated string.
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
 * Returns `true` if a string ends with a specified string with a safe null.
 * If the input or search string are not a string type, then it will return `false`.
 * @param {string} str - String to search.
 * @param {string} search - String to search for.
 * @param {number} length - The length of the string to search.
 * @returns {boolean} Result of the evaluation.
 */
export function endsWith(str: string, search: string, length?: number) {
  if (isNotEmpty(str) && isNotEmpty(search)) {
    let l = length === undefined ? str.length : length
    return str.endsWith(search, l)
  } else {
    return false;
  }
}

/**
 * Converts Unicode values to characters.
 * If the code is not a `number`, it will be converted to an empty string.
 * @param {number} code - Unicode value to be converted.
 * @returns {string} String representation of the unicode values.
 */
export function fromCharCode(...code: number[]) {
  let str = ""
  for (let item of code) {
    if (typeof item == "number") {
      str = str.concat(String.fromCharCode(item))
    }
  }
  return str
}

/**
 * Returns `true` if a string contains a specified string with a null safe.
 * If the input or search string are not a string type, then it will return `false`.
 * @param {string} str - String to search.
 * @param {string} search - String to search for.
 * @param {number} start - The position to start from. It's default value is `0`.
 * @returns {boolean} Result of the evaluation.
 */
export function includes(str: string, search: string, start: number = 0) {
  if (isNotEmpty(str) && isNotEmpty(search)) {
    return str.includes(search, start)
  } else {
    return false;
  }
}

/**
 * Returns the position of the first occurrence of a value in a string, otherwise the position will be `-1`.
 * If the input or search string are not a string type, then it will return `-1`.
 * @param {string} str - String to search.
 * @param {string} search - String to search for.
 * @param {number} start - The position to start from. It's default value is `0`.
 * @returns {string} The first position where the search-value occurs.
 */
export function indexOf(str: string, search: string, start: number = 0) {
  if (isNotEmpty(str) && isNotEmpty(search)) {
    return str.indexOf(search, start)
  } else {
    return -1;
  }
}

/**
 * Returns the position of the last occurrence of a value in a string, otherwise the position will be `-1`.
 * If the input or search string are not a string type, then it will return `-1`.
 * The method searches the string from the end to the begining.
 * @param {string} str - String to search.
 * @param {string} search - String to search for.
 * @param {number} start - The position to start from. It's default value is the string's length.
 * @returns {string} The first position where the search-value occurs.
 */
export function lastIndexOf(str: string, search: string, start?: number) {
  if (isNotEmpty(str) && isNotEmpty(search)) {
    let l = start === undefined ? str.length : start
    return str.lastIndexOf(search, l)
  } else {
    return -1;
  }
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

/** 
 * Compares two strings in the current locale.
 * Returns `undefined` if one of the strings are not a string type.
 * @param {string} str - String to compare
 * @param {string} compare - String to compare for
 * @returns {number} Returns sort order -1, 1, or 0 (for before, after, or equal).
 */
export function localeCompare(str: string, compare: string) {
  if (isNotEmpty(str) && isNotEmpty(compare)) {
    return str.localeCompare(compare)
  } else {
    return undefined
  }
}

/** 
 * Returns an array of matches with a simple string match or regular expression.
 * Returns an empty array if there are no matches, if the input is not a valid string or if the match variable is not a string or RegExp type.
 * @param {string} str - String to compare
 * @param {string} match - String to compare for, or regex
 * @returns {number} Returns sort order -1, 1, or 0 (for before, after, or equal).
 */
export function match(str: string, match: string | RegExp) {
  if (isNotEmpty(str) && (isNotEmpty(match as any) || match instanceof RegExp)) {
    let result = str.match(match)
    return result === null ? [] : result
  } else {
    return []
  }
}