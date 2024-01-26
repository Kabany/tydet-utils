# Documentation

TyDeT Utils is composed of submodules made up of reusable methods to validate variables depending on their type, such as:

* [String Utils](#string-utils)

## String Utils

### Methods

##### Extended String operators:

`isEmpty(text: any)` -> `boolean`
* Evaluates if the parameter is `null`, `undefined` or an empty `string`.
* It returns `true` for `null`, `undefined` or any `string` that only contains spaces; otherwise it returns `false`.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.isEmpty("example"));                // returns false
console.log(StringUtils.isEmpty("   example   "));          // returns false
console.log(StringUtils.isEmpty(""));                       // returns true
console.log(StringUtils.isEmpty("  "));                     // returns true
console.log(StringUtils.isEmpty("             "));          // returns true
console.log(StringUtils.isEmpty(null));                     // returns true
console.log(StringUtils.isEmpty(undefined));                // returns true
console.log(StringUtils.isEmpty(0));                        // returns false
console.log(StringUtils.isEmpty(1));                        // returns false
console.log(StringUtils.isEmpty({}));                       // returns false
console.log(StringUtils.isEmpty(new Date()));               // returns false
console.log(StringUtils.isEmpty(true));                     // returns false
console.log(StringUtils.isEmpty(false));                    // returns false
console.log(StringUtils.isEmpty([]));                       // returns false
```

`isNotEmpty(text: any)` -> `boolean`
* Evaluates if the parameter is a `string`.
* It returns `true` for any string; otherwise it returns `false`.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.isNotEmpty("example"));             // returns true
console.log(StringUtils.isNotEmpty("   example   "));       // returns true
console.log(StringUtils.isNotEmpty(""));                    // returns true
console.log(StringUtils.isNotEmpty("  "));                  // returns true
console.log(StringUtils.isNotEmpty("             "));       // returns true
console.log(StringUtils.isNotEmpty(null));                  // returns false
console.log(StringUtils.isNotEmpty(undefined));             // returns false
console.log(StringUtils.isNotEmpty(0));                     // returns false
console.log(StringUtils.isNotEmpty(1));                     // returns false
console.log(StringUtils.isNotEmpty({}));                    // returns false
console.log(StringUtils.isNotEmpty(new Date()));            // returns false
console.log(StringUtils.isNotEmpty(true));                  // returns false
console.log(StringUtils.isNotEmpty(false));                 // returns false
console.log(StringUtils.isNotEmpty([]));                    // returns false
```

`isBlank(text: any)` -> `boolean`
* Evaluates if the parameter is an empty `string`.
* It returns `true` for any `string` that only contains spaces; otherwise it returns `false`.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.isBlank("example"));                // returns false
console.log(StringUtils.isBlank("   example   "));          // returns false
console.log(StringUtils.isBlank(""));                       // returns true
console.log(StringUtils.isBlank("  "));                     // returns true
console.log(StringUtils.isBlank("             "));          // returns true
console.log(StringUtils.isBlank(null));                     // returns false
console.log(StringUtils.isBlank(undefined));                // returns false
console.log(StringUtils.isBlank(0));                        // returns false
console.log(StringUtils.isBlank(1));                        // returns false
console.log(StringUtils.isBlank({}));                       // returns false
console.log(StringUtils.isBlank(new Date()));               // returns false
console.log(StringUtils.isBlank(true));                     // returns false
console.log(StringUtils.isBlank(false));                    // returns false
console.log(StringUtils.isBlank([]));                       // returns false
```

`isNotBlank(text: any)` -> `boolean`
* Evaluates if the parameter is `string` that not only contains spaces.
* It returns `true` for any `string` that not only contains spaces; otherwise it returns `false`.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.isBlank("example"));                // returns true
console.log(StringUtils.isBlank("   example   "));          // returns true
console.log(StringUtils.isBlank(""));                       // returns false
console.log(StringUtils.isBlank("  "));                     // returns false
console.log(StringUtils.isBlank("             "));          // returns false
console.log(StringUtils.isBlank(null));                     // returns false
console.log(StringUtils.isBlank(undefined));                // returns false
console.log(StringUtils.isBlank(0));                        // returns false
console.log(StringUtils.isBlank(1));                        // returns false
console.log(StringUtils.isBlank({}));                       // returns false
console.log(StringUtils.isBlank(new Date()));               // returns false
console.log(StringUtils.isBlank(true));                     // returns false
console.log(StringUtils.isBlank(false));                    // returns false
console.log(StringUtils.isBlank([]));                       // returns false
```

`reverse(text: any)` -> `string` | `null`
* Returns a `string` with its characters reversed. 
* Returns `null` if the input is not a `string`.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.reverse("example"));                // returns 'elpmaxe'
console.log(StringUtils.reverse("   example   "));          // returns '   elpmaxe   '
console.log(StringUtils.reverse(""));                       // returns ''
console.log(StringUtils.reverse("  "));                     // returns '  '
console.log(StringUtils.reverse("             "));          // returns '             '
console.log(StringUtils.reverse(null));                     // returns null
console.log(StringUtils.reverse(undefined));                // returns null
console.log(StringUtils.reverse(0));                        // returns null
console.log(StringUtils.reverse(1));                        // returns null
```

##### Common JS operators:

`at(text: any, position: number)` -> `number`
* Returns the char at a specified index (position) in a string. 
* If the input is not a `string` type, it will return `undefined`.
* If the position is an invalid index, it will return `undefined`.
* If the position is a float number, it will be fixed with the `Math.floor()` operator.
* The index can be a negative number to get the latest char in a string.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.at("example"));                     // returns 'e'
console.log(StringUtils.at("example", 2));                  // returns 'a'
console.log(StringUtils.at("he-llo", 2));                   // returns '-'
console.log(StringUtils.at("he llo"), 2);                   // returns ' '
console.log(StringUtils.at("hello", -1));                   // returns 'o'
console.log(StringUtils.at("hello", -2));                   // returns 'l'
console.log(StringUtils.at("hello", 6));                    // returns undefined
console.log(StringUtils.at("hello", -7));                   // returns undefined
console.log(StringUtils.at(null));                          // returns undefined
console.log(StringUtils.at(undefined));                     // returns undefined
console.log(StringUtils.at(0));                             // returns undefined
console.log(StringUtils.at(1));                             // returns undefined
```

`charAt(text: any, position: number)` -> `number`
* Returns the char at a specified index (position) in a string. 
* If the input is not a `string` type, it will return an empty `string`.
* If the position is an invalid index, it will return an empty `string`.
* If the position is a float number, it will be fixed with the `Math.floor()` operator.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.charAt("example"));                 // returns 'e'
console.log(StringUtils.charAt("example", 2));              // returns 'a'
console.log(StringUtils.charAt("he-llo", 2));               // returns '-'
console.log(StringUtils.charAt("he llo"), 2);               // returns ' '
console.log(StringUtils.charAt("hello", -1));               // returns ''
console.log(StringUtils.charAt("hello", 6));                // returns ''
console.log(StringUtils.charAt(null));                      // returns ''
console.log(StringUtils.charAt(undefined));                 // returns ''
console.log(StringUtils.charAt(0));                         // returns ''
console.log(StringUtils.charAt(1));                         // returns ''
```

`length(text: any)` -> `number`
* Returns the length of a `string`.
* If the input is `null` or is not a `string`, the result will be `0`.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.length("example"));                 // returns 7
console.log(StringUtils.length("   example   "));           // returns 13
console.log(StringUtils.length(""));                        // returns 0
console.log(StringUtils.length("  "));                      // returns 2
console.log(StringUtils.length("             "));           // returns 13
console.log(StringUtils.length(null));                      // returns 0
console.log(StringUtils.length(undefined));                 // returns 0
console.log(StringUtils.length(0));                         // returns 0
console.log(StringUtils.length(1));                         // returns 0
```
