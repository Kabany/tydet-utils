# Documentation

TyDeT Utils is composed of submodules made up of reusable methods to validate variables depending on their type, such as:

* [String Utils](#string-utils)

## String Utils

### Methods

* `isEmpty(char: any)` -> `boolean`
    * Evaluates if the parameter is `null`, `undefined` or an empty `string`.
    * It returns `true` for `null`, `undefined` or any `string` that only contains spaces; otherwise it returns `false`.
* `isNotEmpty(char: any)` -> `boolean`
    * Evaluates if the parameter is not `null`, `undefined` or an empty `string`.
    * It returns `true` for any string that does not only contains spaces; otherwise it returns `false`.

### Example

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.isEmpty("example"));            // returns false
console.log(StringUtils.isEmpty("   example   "));      // returns false
console.log(StringUtils.isEmpty("  "));                 // returns true
console.log(StringUtils.isEmpty("             "));      // returns true
console.log(StringUtils.isEmpty(null));                 // returns true
console.log(StringUtils.isEmpty(undefined));            // returns true
console.log(StringUtils.isEmpty(0));                    // returns false
console.log(StringUtils.isEmpty(1));                    // returns false
console.log(StringUtils.isEmpty({}));                   // returns false
console.log(StringUtils.isEmpty(new Date()));           // returns false
console.log(StringUtils.isEmpty(true));                 // returns false
console.log(StringUtils.isEmpty(false));                // returns false
console.log(StringUtils.isEmpty([]));                   // returns false

console.log(StringUtils.isNotEmpty("example"));            // returns true
console.log(StringUtils.isNotEmpty("   example   "));      // returns true
console.log(StringUtils.isNotEmpty("  "));                 // returns false
console.log(StringUtils.isNotEmpty("             "));      // returns false
console.log(StringUtils.isNotEmpty(null));                 // returns false
console.log(StringUtils.isNotEmpty(undefined));            // returns false
console.log(StringUtils.isNotEmpty(0));                    // returns false
console.log(StringUtils.isNotEmpty(1));                    // returns false
console.log(StringUtils.isNotEmpty({}));                   // returns false
console.log(StringUtils.isNotEmpty(new Date()));           // returns false
console.log(StringUtils.isNotEmpty(true));                 // returns false
console.log(StringUtils.isNotEmpty(false));                // returns false
console.log(StringUtils.isNotEmpty([]));                   // returns false
```