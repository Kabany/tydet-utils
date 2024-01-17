/* 
  @TyDeT Utils - String
*/




/** 
 * Evaluates if the parameter is `null`, `undefined` or an empty `string`. It returns `true` for `null`, `undefined` or any `string` that only contains spaces; otherwise it returns `false`.
 * @param {any} char - Text to evaluate
 * @returns {boolean} Result of the evaluation
 */
export function isEmpty(char: any) {
  return char === null || char === undefined || (typeof char == 'string' && char.trim() == '');
}

/** 
 * Evaluates if the parameter is not `null`, `undefined` or an empty `string`. It returns `true` for any string that does not only contains spaces; otherwise it returns `false`.
 * @param {any} char - Text to evaluate
 * @returns {boolean} Result of the evaluation
 */
export function isNotEmpty(char: any) {
  return char != null && typeof char == 'string' && char.trim() != '';
}