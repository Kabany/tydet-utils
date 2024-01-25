/* 
  @TyDeT Utils - String
*/




/** 
 * Evaluates if the parameter is `null`, `undefined` or an empty `string`.
 * It returns `true` for `null`, `undefined` or any `string` that only contains spaces; otherwise it returns `false`.
 * @param {any} text - Text to evaluate
 * @returns {boolean} Result of the evaluation
 */
export function isEmpty(text: any) {
  return text === null || text === undefined || (typeof text == 'string' && text.trim() == '');
}

/** 
 * Evaluates if the parameter is a `string`.
 * It returns `true` for any string; otherwise it returns `false`.
 * @param {any} text - Text to evaluate
 * @returns {boolean} Result of the evaluation
 */
export function isNotEmpty(text: any) {
  return text != null && typeof text == 'string';
}

/** 
 * Evaluates if the parameter is an empty `string`.
 * It returns `true` for any `string` that only contains spaces; otherwise it returns `false`.
 * @param {any} text - Text to evaluate
 * @returns {boolean} Result of the evaluation
 */
export function isBlank(text: any) {
  return typeof text == "string" && text.trim() == "";
}

/** 
 * Evaluates if the parameter is `string` that not only contains spaces.
 * It returns `true` for any `string` that not only contains spaces; otherwise it returns `false`.
 * @param {any} text - Text to evaluate
 * @returns {boolean} Result of the evaluation
 */
export function isNotBlank(text: any) {
  return typeof text == "string" && text.trim() != "";
}

/**
 * Returns a text with its characters reversed. 
 * Returns `null` if the input is not a `string`.
 * @param {string} text - Text to evaluate
 * @returns {string | null} String with its characters reversed.
 */
export function reverse(text: string) {
  if (isNotBlank(text)) {
    var newText = ""
    for (var x = 0; x < text.length; x++) {
      newText = text.charAt(x) + newText
    }
    return newText
  } else if (isBlank(text)) {
    return text;
  } else {
    return null
  }
}



/**
 * Returns the char at a specified index (position) in a string. 
 * If the input is not a `string` type, it will return an empty `string`.
 * @param {string} text - Text to evaluate
 * @param {number} position - Char position
 * @returns {string} Requested char
 */
export function charAt(text: string, position: number = 0) {
  return isNotEmpty(text) ? text.charAt(position) : ""
}

/** 
 * Returns the length of a `string`. 
 * If the parameter is `null` or is not a `string`, the result will be `0`.
 * If the position is an invalid index, it will return an empty `string`.
 * If the position is a float number, it will be fixed with the `Math.floor()` operator.
 * @param {any} text - Text to evaluate
 * @returns {number} The length of the string
 */
export function length(text: any) {
  return text != null && typeof text == 'string' ? text.length : 0
}