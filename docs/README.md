# Documentation

TyDeT Utils is composed of submodules made up of reusable methods to validate variables depending on their type, such as:

* [String Utils](#string-utils)
    * [isEmpty()](#isemptystr-string---boolean)
    * [isNotEmpty()](#isnotemptystr-string---boolean)
    * [isBlank()](#isblankstr-string---boolean)
    * [isNotBlank()](#isnotblankstr-string---boolean)
    * [reverse()](#reversestr-string---string--null)
    * [at()](#atstr-string-position-number---number)
    * [charAt()](#charatstr-string-position-number---string)
    * [charCodeAt()](#charcodeatstr-string-position-number---number)
    * [codePointAt()](#codepointatstr-string-position-number---number)
    * [concat()](#concatstr-string---string)
    * [endsWith()](#endswithstr-string-search-string-length-number---boolean)
    * [fromCharCode()](#fromcharcodecode-number---string)
    * [includes()](#includesstr-string-search-string-position-number---boolean)
    * [length()](#lengthstr-string---number)

## String Utils

### Methods

##### Extended String operators:

###### `isEmpty(str: string)` -> `boolean`
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

###### `isNotEmpty(str: string)` -> `boolean`
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

###### `isBlank(str: string)` -> `boolean`
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

###### `isNotBlank(str: string)` -> `boolean`
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

###### `reverse(str: string)` -> `string` | `null`
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

###### `at(str: string, position: number)` -> `number`
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

###### `charAt(str: string, position: number)` -> `string`
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

###### `charCodeAt(str: string, position: number)` -> `number`
* Returns the char at a specified index (position) in a string. 
* If the input is not a `string` type, it will return `undefined`.
* If the position is an invalid index, it will return `undefined`.
* If the position is a float number, it will be fixed with the `Math.floor()` operator.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.charCodeAt("example"));             // returns 101
console.log(StringUtils.charCodeAt("example", 2));          // returns 97
console.log(StringUtils.charCodeAt("he-llo", 2));           // returns 45
console.log(StringUtils.charCodeAt("he llo"), 2);           // returns 32
console.log(StringUtils.charCodeAt("hello", -1));           // returns undefined
console.log(StringUtils.charCodeAt("hello", 6));            // returns undefined
console.log(StringUtils.charCodeAt(null));                  // returns undefined
console.log(StringUtils.charCodeAt(undefined));             // returns undefined
console.log(StringUtils.charCodeAt(0));                     // returns undefined
console.log(StringUtils.charCodeAt(1));                     // returns undefined
```

###### `codePointAt(str: string, position: number)` -> `number`
* Returns the char at a specified index (position) in a string.
* `charCodeAt()` is UTF-16, `codePointAt()` is Unicode. Both methods return an integer representing the UTF-16 code of a character, but only `codePointAt()` can return the full value of a Unicode value greather 0xFFFF (65535).
* If the input is not a `string` type, it will return `undefined`.
* If the position is an invalid index, it will return `undefined`.
* If the position is a float number, it will be fixed with the `Math.floor()` operator.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.codePointAt("example"));            // returns 101
console.log(StringUtils.codePointAt("example", 2));         // returns 97
console.log(StringUtils.codePointAt("he-llo", 2));          // returns 45
console.log(StringUtils.codePointAt("he llo"), 2);          // returns 32
console.log(StringUtils.codePointAt("hello", -1));          // returns undefined
console.log(StringUtils.codePointAt("hello", 6));           // returns undefined
console.log(StringUtils.codePointAt(null));                 // returns undefined
console.log(StringUtils.codePointAt(undefined));            // returns undefined
console.log(StringUtils.codePointAt(0));                    // returns undefined
console.log(StringUtils.codePointAt(1));                    // returns undefined
```

###### `concat(...str: string[])` -> `string`
* Joins two or more strings with a safe null.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.concat("str1", " ", "str2"));       // returns 'str1 str2'
console.log(StringUtils.concat("str1", null, "str2"));      // returns 'str1str2'
console.log(StringUtils.concat(null));                      // returns ''
console.log(StringUtils.concat(undefined));                 // returns ''
console.log(StringUtils.concat(0));                         // returns ''
console.log(StringUtils.concat(1));                         // returns ''
```

###### `endsWith(str: string, search: string, length?: number)` -> `boolean`
* Returns `true` if a string ends with a specified string with a safe null.
* If the input or search string are not a string type, then it will return `false`.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.endsWith("Hello World!", "World!"));        // returns true
console.log(StringUtils.endsWith("Hello World!", "Hello", 5));      // returns true
console.log(StringUtils.endsWith("Hello World!", "World!", 20));    // returns true
console.log(StringUtils.endsWith("Hello World!", "H", 0));          // returns false
console.log(StringUtils.endsWith("Hello World!", "H", 1));          // returns true
console.log(StringUtils.endsWith("Hello World!", "H", -1));         // returns false
console.log(StringUtils.endsWith("Hello World!", "!", -1));         // returns false
console.log(StringUtils.endsWith("Hello World!", null));            // returns false
console.log(StringUtils.endsWith("Hello World!", undefined));       // returns false
console.log(StringUtils.endsWith("Hello World!", 0));               // returns false
console.log(StringUtils.endsWith("Hello World!", 1));               // returns false
```

###### `fromCharCode(...code: number[])` -> `boolean`
* Converts Unicode values to characters.
* If the code is not a `number`, it will be converted to an empty string.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.fromCharCode(65));                          // returns 'A'
console.log(StringUtils.fromCharCode(72, 69, 76, 76, 79));          // returns 'HELLO'
console.log(StringUtils.fromCharCode(null));                        // returns ''
console.log(StringUtils.fromCharCode(undefined));                   // returns ''
```

###### `includes(str: string, search: string, position?: number)` -> `boolean`
* Returns `true` if a string contains a specified string with a null safe.
* If the input or search string are not a string type, then it will return `false`.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.includes("Hello World!", "World!"));        // returns true
console.log(StringUtils.includes("Hello World!", "Hello", 5));      // returns false
console.log(StringUtils.includes("Hello World!", "World!", 5));     // returns true
console.log(StringUtils.includes("Hello World!", "Hello", 0));      // returns true
console.log(StringUtils.includes("Hello World!", "Hello", 1));      // returns false
console.log(StringUtils.includes("Hello World!", "Hello", -1));     // returns true
console.log(StringUtils.includes("Hello World!", null));            // returns false
console.log(StringUtils.includes("Hello World!", undefined));       // returns false
console.log(StringUtils.includes("Hello World!", 0));               // returns false
console.log(StringUtils.includes("Hello World!", 1));               // returns false
```

###### `length(str: string)` -> `number`
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
