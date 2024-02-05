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
 * Returns `true` if the input is a valid string email.
 * @param str - String to evaluate
 */
export function isEmailValid(str: string) {
  if (isNotEmpty(str)) {
    let t = trim(str)
    return /^\w+([\.-]?\w+)*@(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/.test(t)
  } else {
    return false
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
    let s = typeof start == "number" ? start : 0
    return str.includes(search, s)
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
    let s = typeof start == "number" ? start : 0
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
    let s = typeof start == "number" ? start : str.length
    return str.lastIndexOf(search, s)
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
 * @param {string} str - String to compare.
 * @param {string | RegExp} match - String to compare for, or regex.
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

/** 
 * Pads a string with another string (multiple times) until it reaches a given length.
 * It considers an empty string if the input or the pad are not a string.
 * If the length is a float number, it will be fixed with the `Math.floor()` operator.
 * If the length is not a number, it will be fixed with the input string length.
 * @param {string} str - String to pad.
 * @param {number} length - Length of the resulting string.
 * @param {string} pad - The string to pad with. It's default value is a space in a string.
 * @returns {string} Returns a string of the specified length, with the padding applied at the end.
 */
export function padEnd(str: string, length: number, pad?: string) {
  let s = isNotEmpty(str) ? str : ""
  let l = typeof length == "number" ? length : str.length
  let p = isNotEmpty(pad) ? pad : " "
  return s.padEnd(l, p)
}

/** 
 * Pads a string with another string (multiple times) until it reaches a given length.
 * It considers an empty string if the input or the pad are not a string.
 * If the length is a float number, it will be fixed with the `Math.floor()` operator.
 * If the length is not a number, it will be fixed with the input string length.
 * @param {string} str - String to pad.
 * @param {number} length - Length of the resulting string.
 * @param {string} pad - The string to pad with. It's default value is a space in a string.
 * @returns {string} Returns a string of the specified length, with the padding applied at the end.
 */
export function padStart(str: string, length: number, pad?: string) {
  let s = isNotEmpty(str) ? str : ""
  let l = typeof length == "number" ? length : str.length
  let p = isNotEmpty(pad) ? pad : " "
  return s.padStart(l, p)
}

/** 
 * Returns a string with a number of copies of a string.
 * It considers an empty string if the input is not a string.
 * If the count input is a float number, it will be fixed with the `Math.floor()` operator.
 * If the count input is a negative number, then it will be converted to 0.
 * @param {string} str - String to repeat.
 * @param {number} count - Numbers of copies
 * @param {string} pad - The string to pad with. It's default value is a space in a string.
 * @returns {string} Returns the copies of the original string.
 */
export function repeat(str: string, count: number) {
  let s = isNotEmpty(str) ? str : ""
  let c = typeof count == "number" ? count : 1
  c = c < 1 ? 0 : c
  return s.repeat(c)
}

/** 
 * Searches a string for a value or a regular expression, then returns a new string with the value(s) replaced.
 * It considers an empty string if the input is not a string
 * It considers an empty string if the search value is not a string or a RegExp value
 * It considers an empty string if the newValue is not a string or a function that returns a string.
 * @param {string} str - String to modify.
 * @param {string | RegExp} search - The value, or regular expression, to search for.
 * @param {string | ((x: string)=>string)} newValue - The new value (to replace with).
 * @returns {string} Returns a new string where the specified value(s) has been replaced.
 */
export function replace(str: string, search: string | RegExp, newValue: string | ((x: string) => string)) {
  let s = isNotEmpty(str) ?  str : ""
  let f = isNotEmpty(search as any) || search instanceof RegExp ? search : ""
  if (isNotEmpty(newValue as any) && typeof newValue == "string") {
    return s.replace(f, newValue)
  } else if (typeof newValue == "function") {
    return s.replace(f, newValue)
  } else {
    return s.replace(f, "")
  }
}

/** 
 * Searches a string for a value or a regular expression, then returns a new string with the value(s) replaced.
 * It considers an empty string if the input is not a string.
 * It considers an empty string if the search value is not a string or a RegExp value.
 * It considers an empty string if the newValue is not a string or a function that returns a string.
 * @param {string} str - String to modify.
 * @param {string | RegExp} search - The value, or regular expression, to search for.
 * @param {string | ((x: string)=>string)} newValue - The new value (to replace with).
 * @returns {string} Returns a new string where the specified value(s) has been replaced.
 */
export function replaceAll(str: string, search: string | RegExp, newValue: string | ((x: string) => string)) {
  let s = isNotEmpty(str) ?  str : ""
  let f = isNotEmpty(search as any) || search instanceof RegExp ? search : ""
  if (isNotEmpty(newValue as any) && typeof newValue == "string") {
    return s.replaceAll(f, newValue)
  } else if (typeof newValue == "function") {
    return s.replaceAll(f, newValue)
  } else {
    return s.replaceAll(f, "")
  }
}

/** 
 * Matches a string against a regular expression and returns the index (position) of the first match.
 * It considers an empty string if the input is not a string.
 * It considers an empty string if the search value is not a string or a RegExp value.
 * @param {string} str - String to modify.
 * @param {string | RegExp} search - The value, or regular expression, to search for.
 * @returns {number} Returns the position of the first match or -1 if no match is found.
 */
export function search(str: string, search: string | RegExp) {
  let s = isNotEmpty(str) ?  str : ""
  let f = isNotEmpty(search as any) || search instanceof RegExp ? search : ""
  return s.search(f)
}

/** 
 * Extracts a part of a string.
 * It considers an empty string if the input is not a string.
 * If the start value is not a number, then it will be 0.
 * If the end value is not a number, then it will be the last position of the input string.
 * @param {string} str - String to modify.
 * @param {number} start - The start position.
 * @param {number} end - The end position, but not included
 * @returns {string} Returns the extracted part of the string.
 */
export function slice(str: string, start?: number, end?: number) {
  let s = isNotEmpty(str) ?  str : ""
  let l = typeof start == "number" ? start : 0
  let e = typeof end == "number" ? end : s.length
  return s.slice(l, e)
}

/** 
 * Splits a string into an array of substrings.
 * It considers an empty string if the input is not a string.
 * If the separator is not a string or a RegExp, it will be undefined.
 * If the limit is not a number, it will be undefined.
 * @param {string} str - String to modify.
 * @param {string | RegExp} separator - A string or regular expression to use for splitting. If omitted, an array with the original string is returned.
 * @param {number} limit - An integer that limits the number of splits.
 * @returns {string[]} Returns an array containing the splitted values.
 */
export function split(str: string, separator?: string | RegExp, limit?: number) {
  let s = isNotEmpty(str) ?  str : ""
  let sep = isNotEmpty(separator as any) || separator instanceof RegExp ? separator : undefined
  let l = typeof limit == "number" ? limit : undefined
  return s.split(sep, l)
}

/** 
 * Returns `true` if a string starts with a specified string.
 * It considers an empty string if the input or search values are not a string.
 * If the start is not a number, it will be `0`.
 * @param {string} str - String to compare.
 * @param {string} search - String to compare for.
 * @param {number} limit - Start position.
 * @returns {boolean} Returns the result of the evaluation
 */
export function startsWith(str: string, search: string, limit?: number) {
  if (isNotEmpty(str)) {
    let s = isNotEmpty(search) ? search : ""
    let l = typeof limit == "number" ? limit : 0
    return str.startsWith(s, l)
  } else {
    return false
  }
}

/** 
 * Extracts characters, between two indices (positions), from a string, and returns the substring.
 * If start is greater than end, arguments are swapped.
 * If the start is not a number, it will be `0`.
 * If the end is not a number, it will be the string length.
 * @param {string} str - String to extract.
 * @param {number} start - The start position.
 * @param {number} length - The end position (excluded).
 * @returns {string} A string containing the extracted characters.
 */
export function substring(str: string, start?: number, length?: number) {
  let s = isNotEmpty(str) ? str : ""
  let sta = typeof start == "number" ? start : 0
  let end = typeof length == "number" ? length : s.length
  return s.substring(sta, end)
}

/** 
 * Converts a string to lowercase letters, using current locale.
 * It will return `null` if the input string is not a string type.
 * @param {string} str - String to convert to lowercase.
 * @param {string} locales - A string with a BCP 47 language tag, or an array of such strings
 * @returns {string} Returns a new string converted to lowercase according to current locale.
 */
export function toLocaleLowerCase(str: string, locales?: string) {
  if (isNotEmpty(str)) {
    let l = isNotEmpty(locales) ? locales : undefined
    return str.toLocaleLowerCase(l)
  } else {
    return null
  }
}

/** 
 * Converts a string to uppercase letters, using current locale.
 * It will return `null` if the input string is not a string type.
 * @param {string} str - String to convert to uppercase.
 * @param {string} locales - A string with a BCP 47 language tag, or an array of such strings
 * @returns {string} Returns a new string converted to uppercase according to current locale.
 */
export function toLocaleUpperCase(str: string, locales?: string) {
  if (isNotEmpty(str)) {
    let l = isNotEmpty(locales) ? locales : undefined
    return str.toLocaleUpperCase(l)
  } else {
    return null
  }
}

/** 
 * Converts a string to lowercase letters.
 * It will return `null` if the input string is not a string type.
 * @param {string} str - String to convert to lowercase.
 * @returns {string} Returns a new string converted to lowercase.
 */
export function toLowerCase(str: string) {
  if (isNotEmpty(str)) {
    return str.toLowerCase()
  } else {
    return null
  }
}

/** 
 * Converts a string to uppercase letters.
 * It will return `null` if the input string is not a string type.
 * @param {string} str - String to convert to uppercase.
 * @returns {string} Returns a new string converted to uppercase.
 */
export function toUpperCase(str: string) {
  if (isNotEmpty(str)) {
    return str.toUpperCase()
  } else {
    return null
  }
}

/** 
 * Removes whitespace from both sides of a string.
 * It will return `null` if the input string is not a string type.
 * @param {string} str - String to convert.
 * @returns {string} Returns a string with removed whitespace from both ends.
 */
export function trim(str: string) {
  if (isNotEmpty(str)) {
    return str.trim()
  } else {
    return null
  }
}

/** 
 * Removes whitespace from the start of a string.
 * It will return `null` if the input string is not a string type.
 * @param {string} str - String to convert.
 * @returns {string} Returns a string with removed whitespace from the start of the string.
 */
export function trimStart(str: string) {
  if (isNotEmpty(str)) {
    return str.trimStart()
  } else {
    return null
  }
}

/** 
 * Removes whitespace from the end of a string.
 * It will return `null` if the input string is not a string type.
 * @param {string} str - String to convert.
 * @returns {string} Returns a string with removed whitespace from the end of the string.
 */
export function trimEnd(str: string) {
  if (isNotEmpty(str)) {
    return str.trimEnd()
  } else {
    return null
  }
}