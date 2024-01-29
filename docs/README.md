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
    * [includes()](#includesstr-string-search-string-start-number---boolean)
    * [indexOf()](#indexofstr-string-search-string-start-number---number)
    * [lastIndexOf()](#lastindexofstr-string-search-string-start-number---number)
    * [length()](#lengthstr-string---number)
    * [localeCompare()](#localcomparestr-string-compare-string---number)
    * [match()](#matchstr-string-match-string--regex---string)

## String Utils

### Methods

##### Extended String operators:

###### `isEmpty(str: string)` -> `boolean`
* Evaluates if the parameter is `null`, `undefined` or an empty `string`.
* It returns `true` for `null`, `undefined` or any `string` that only contains spaces; otherwise it returns `false`.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.isEmpty("example"));                // false
console.log(StringUtils.isEmpty("   example   "));          // false
console.log(StringUtils.isEmpty(""));                       // true
console.log(StringUtils.isEmpty("  "));                     // true
console.log(StringUtils.isEmpty("             "));          // true
console.log(StringUtils.isEmpty(null));                     // true
console.log(StringUtils.isEmpty(undefined));                // true
console.log(StringUtils.isEmpty(0));                        // false
console.log(StringUtils.isEmpty(1));                        // false
console.log(StringUtils.isEmpty({}));                       // false
console.log(StringUtils.isEmpty(new Date()));               // false
console.log(StringUtils.isEmpty(true));                     // false
console.log(StringUtils.isEmpty(false));                    // false
console.log(StringUtils.isEmpty([]));                       // false
```

###### `isNotEmpty(str: string)` -> `boolean`
* Evaluates if the parameter is a `string`.
* It returns `true` for any string; otherwise it returns `false`.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.isNotEmpty("example"));             // true
console.log(StringUtils.isNotEmpty("   example   "));       // true
console.log(StringUtils.isNotEmpty(""));                    // true
console.log(StringUtils.isNotEmpty("  "));                  // true
console.log(StringUtils.isNotEmpty("             "));       // true
console.log(StringUtils.isNotEmpty(null));                  // false
console.log(StringUtils.isNotEmpty(undefined));             // false
console.log(StringUtils.isNotEmpty(0));                     // false
console.log(StringUtils.isNotEmpty(1));                     // false
console.log(StringUtils.isNotEmpty({}));                    // false
console.log(StringUtils.isNotEmpty(new Date()));            // false
console.log(StringUtils.isNotEmpty(true));                  // false
console.log(StringUtils.isNotEmpty(false));                 // false
console.log(StringUtils.isNotEmpty([]));                    // false
```

###### `isBlank(str: string)` -> `boolean`
* Evaluates if the parameter is an empty `string`.
* It returns `true` for any `string` that only contains spaces; otherwise it returns `false`.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.isBlank("example"));                // false
console.log(StringUtils.isBlank("   example   "));          // false
console.log(StringUtils.isBlank(""));                       // true
console.log(StringUtils.isBlank("  "));                     // true
console.log(StringUtils.isBlank("             "));          // true
console.log(StringUtils.isBlank(null));                     // false
console.log(StringUtils.isBlank(undefined));                // false
console.log(StringUtils.isBlank(0));                        // false
console.log(StringUtils.isBlank(1));                        // false
console.log(StringUtils.isBlank({}));                       // false
console.log(StringUtils.isBlank(new Date()));               // false
console.log(StringUtils.isBlank(true));                     // false
console.log(StringUtils.isBlank(false));                    // false
console.log(StringUtils.isBlank([]));                       // false
```

###### `isNotBlank(str: string)` -> `boolean`
* Evaluates if the parameter is `string` that not only contains spaces.
* It returns `true` for any `string` that not only contains spaces; otherwise it returns `false`.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.isBlank("example"));                // true
console.log(StringUtils.isBlank("   example   "));          // true
console.log(StringUtils.isBlank(""));                       // false
console.log(StringUtils.isBlank("  "));                     // false
console.log(StringUtils.isBlank("             "));          // false
console.log(StringUtils.isBlank(null));                     // false
console.log(StringUtils.isBlank(undefined));                // false
console.log(StringUtils.isBlank(0));                        // false
console.log(StringUtils.isBlank(1));                        // false
console.log(StringUtils.isBlank({}));                       // false
console.log(StringUtils.isBlank(new Date()));               // false
console.log(StringUtils.isBlank(true));                     // false
console.log(StringUtils.isBlank(false));                    // false
console.log(StringUtils.isBlank([]));                       // false
```

###### `reverse(str: string)` -> `string` | `null`
* Returns a `string` with its characters reversed. 
* Returns `null` if the input is not a `string`.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.reverse("example"));                // 'elpmaxe'
console.log(StringUtils.reverse("   example   "));          // '   elpmaxe   '
console.log(StringUtils.reverse(""));                       // ''
console.log(StringUtils.reverse("  "));                     // '  '
console.log(StringUtils.reverse("             "));          // '             '
console.log(StringUtils.reverse(null));                     // null
console.log(StringUtils.reverse(undefined));                // null
console.log(StringUtils.reverse(0));                        // null
console.log(StringUtils.reverse(1));                        // null
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

console.log(StringUtils.at("example"));                     // 'e'
console.log(StringUtils.at("example", 2));                  // 'a'
console.log(StringUtils.at("he-llo", 2));                   // '-'
console.log(StringUtils.at("he llo"), 2);                   // ' '
console.log(StringUtils.at("hello", -1));                   // 'o'
console.log(StringUtils.at("hello", -2));                   // 'l'
console.log(StringUtils.at("hello", 6));                    // undefined
console.log(StringUtils.at("hello", -7));                   // undefined
console.log(StringUtils.at(null));                          // undefined
console.log(StringUtils.at(undefined));                     // undefined
console.log(StringUtils.at(0));                             // undefined
console.log(StringUtils.at(1));                             // undefined
```

###### `charAt(str: string, position: number)` -> `string`
* Returns the char at a specified index (position) in a string. 
* If the input is not a `string` type, it will return an empty `string`.
* If the position is an invalid index, it will return an empty `string`.
* If the position is a float number, it will be fixed with the `Math.floor()` operator.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.charAt("example"));                 // 'e'
console.log(StringUtils.charAt("example", 2));              // 'a'
console.log(StringUtils.charAt("he-llo", 2));               // '-'
console.log(StringUtils.charAt("he llo"), 2);               // ' '
console.log(StringUtils.charAt("hello", -1));               // ''
console.log(StringUtils.charAt("hello", 6));                // ''
console.log(StringUtils.charAt(null));                      // ''
console.log(StringUtils.charAt(undefined));                 // ''
console.log(StringUtils.charAt(0));                         // ''
console.log(StringUtils.charAt(1));                         // ''
```

###### `charCodeAt(str: string, position: number)` -> `number`
* Returns the char at a specified index (position) in a string. 
* If the input is not a `string` type, it will return `undefined`.
* If the position is an invalid index, it will return `undefined`.
* If the position is a float number, it will be fixed with the `Math.floor()` operator.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.charCodeAt("example"));             // 101
console.log(StringUtils.charCodeAt("example", 2));          // 97
console.log(StringUtils.charCodeAt("he-llo", 2));           // 45
console.log(StringUtils.charCodeAt("he llo"), 2);           // 32
console.log(StringUtils.charCodeAt("hello", -1));           // undefined
console.log(StringUtils.charCodeAt("hello", 6));            // undefined
console.log(StringUtils.charCodeAt(null));                  // undefined
console.log(StringUtils.charCodeAt(undefined));             // undefined
console.log(StringUtils.charCodeAt(0));                     // undefined
console.log(StringUtils.charCodeAt(1));                     // undefined
```

###### `codePointAt(str: string, position: number)` -> `number`
* Returns the char at a specified index (position) in a string.
* `charCodeAt()` is UTF-16, `codePointAt()` is Unicode. Both methods return an integer representing the UTF-16 code of a character, but only `codePointAt()` can return the full value of a Unicode value greather 0xFFFF (65535).
* If the input is not a `string` type, it will return `undefined`.
* If the position is an invalid index, it will return `undefined`.
* If the position is a float number, it will be fixed with the `Math.floor()` operator.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.codePointAt("example"));            // 101
console.log(StringUtils.codePointAt("example", 2));         // 97
console.log(StringUtils.codePointAt("he-llo", 2));          // 45
console.log(StringUtils.codePointAt("he llo"), 2);          // 32
console.log(StringUtils.codePointAt("hello", -1));          // undefined
console.log(StringUtils.codePointAt("hello", 6));           // undefined
console.log(StringUtils.codePointAt(null));                 // undefined
console.log(StringUtils.codePointAt(undefined));            // undefined
console.log(StringUtils.codePointAt(0));                    // undefined
console.log(StringUtils.codePointAt(1));                    // undefined
```

###### `concat(...str: string[])` -> `string`
* Joins two or more strings with a safe null.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.concat("str1", " ", "str2"));       // 'str1 str2'
console.log(StringUtils.concat("str1", null, "str2"));      // 'str1str2'
console.log(StringUtils.concat(null));                      // ''
console.log(StringUtils.concat(undefined));                 // ''
console.log(StringUtils.concat(0));                         // ''
console.log(StringUtils.concat(1));                         // ''
```

###### `endsWith(str: string, search: string, length?: number)` -> `boolean`
* Returns `true` if a string ends with a specified string with a safe null.
* If the input or search string are not a string type, then it will return `false`.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.endsWith("Hello World!", "World!"));        // true
console.log(StringUtils.endsWith("Hello World!", "Hello", 5));      // true
console.log(StringUtils.endsWith("Hello World!", "World!", 20));    // true
console.log(StringUtils.endsWith("Hello World!", "H", 0));          // false
console.log(StringUtils.endsWith("Hello World!", "H", 1));          // true
console.log(StringUtils.endsWith("Hello World!", "H", -1));         // false
console.log(StringUtils.endsWith("Hello World!", "!", -1));         // false
console.log(StringUtils.endsWith("Hello World!", null));            // false
console.log(StringUtils.endsWith("Hello World!", undefined));       // false
console.log(StringUtils.endsWith("Hello World!", 0));               // false
console.log(StringUtils.endsWith("Hello World!", 1));               // false
```

###### `fromCharCode(...code: number[])` -> `boolean`
* Converts Unicode values to characters.
* If the code is not a `number`, it will be converted to an empty string.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.fromCharCode(65));                          // 'A'
console.log(StringUtils.fromCharCode(72, 69, 76, 76, 79));          // 'HELLO'
console.log(StringUtils.fromCharCode(null));                        // ''
console.log(StringUtils.fromCharCode(undefined));                   // ''
```

###### `includes(str: string, search: string, start?: number)` -> `boolean`
* Returns `true` if a string contains a specified string with a null safe.
* If the input or search string are not a string type, then it will return `false`.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.includes("Hello World!", "World!"));        // true
console.log(StringUtils.includes("Hello World!", "Hello", 5));      // false
console.log(StringUtils.includes("Hello World!", "World!", 5));     // true
console.log(StringUtils.includes("Hello World!", "Hello", 0));      // true
console.log(StringUtils.includes("Hello World!", "Hello", 1));      // false
console.log(StringUtils.includes("Hello World!", "Hello", -1));     // true
console.log(StringUtils.includes("Hello World!", null));            // false
console.log(StringUtils.includes("Hello World!", undefined));       // false
console.log(StringUtils.includes("Hello World!", 0));               // false
console.log(StringUtils.includes("Hello World!", 1));               // false
```

###### `indexOf(str: string, search: string, start?: number)` -> `number`
* Returns the position of the first occurrence of a value in a string, otherwise the position will be `-1`.
* If the input or search string are not a string type, then it will return `-1`.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.indexOf("Hello World!", "World!"));         // 6
console.log(StringUtils.indexOf("Hello World!", "Hello", 5));       // -1
console.log(StringUtils.indexOf("Hello World!", "World!", 5));      // 6
console.log(StringUtils.indexOf("Hello World!", "Hello", 0));       // 0
console.log(StringUtils.indexOf("Hello World!", "Hello", 1));       // -1
console.log(StringUtils.indexOf("Hello World!", "Hello", -1));      // 0
console.log(StringUtils.indexOf("Hello World!", null));             // -1
console.log(StringUtils.indexOf("Hello World!", undefined));        // -1
console.log(StringUtils.indexOf("Hello World!", 0));                // -1
console.log(StringUtils.indexOf("Hello World!", 1));                // -1
```

###### `lastIndexOf(str: string, search: string, start?: number)` -> `number`
* Returns the position of the last occurrence of a value in a string, otherwise the position will be `-1`.
* If the input or search string are not a string type, then it will return `-1`.
* The method searches the string from the end to the begining.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.lastIndexOf("Hello World!", "World!"));         // 6
console.log(StringUtils.lastIndexOf("Hello World!", "Hello"));          // 0
console.log(StringUtils.lastIndexOf("Hello World!", "World!", 5));      // -1
console.log(StringUtils.lastIndexOf("Hello World!", "Hello", 5));       // 0
console.log(StringUtils.lastIndexOf("Hello World!", "Hello", 1));       // 0
console.log(StringUtils.lastIndexOf("Hello World!", "Hello", -1));      // -1
console.log(StringUtils.lastIndexOf("Hello World!", null));             // -1
console.log(StringUtils.lastIndexOf("Hello World!", undefined));        // -1
console.log(StringUtils.lastIndexOf("Hello World!", 0));                // -1
console.log(StringUtils.lastIndexOf("Hello World!", 1));                // -1
```

###### `length(str: string)` -> `number`
* Returns the length of a `string`.
* If the input is `null` or is not a `string`, the result will be `0`.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.length("example"));                 // 7
console.log(StringUtils.length("   example   "));           // 13
console.log(StringUtils.length(""));                        // 0
console.log(StringUtils.length("  "));                      // 2
console.log(StringUtils.length("             "));           // 13
console.log(StringUtils.length(null));                      // 0
console.log(StringUtils.length(undefined));                 // 0
console.log(StringUtils.length(0));                         // 0
console.log(StringUtils.length(1));                         // 0
```

###### `localeCompare(str: string, compare: string)` -> `number`
* Compares two strings in the current locale.
* Returns `undefined` if one of the strings are not a string type.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.localeCompare("ab", "ab"));             // 0
console.log(StringUtils.localeCompare("ab", "cd"));             // -1
console.log(StringUtils.localeCompare("cd", "ab"));             // 1
console.log(StringUtils.localeCompare("A", "a"));               // 1
console.log(StringUtils.localeCompare("hello", null));          // undefined
console.log(StringUtils.localeCompare("hello", undefined));     // undefined
console.log(StringUtils.localeCompare("hello", 0));             // undefined
console.log(StringUtils.localeCompare("hello", 1));             // undefined
```

###### `match(str: string, match: string | RegExp)` -> `string[]`
* Returns an array of matches with a simple string match or regular expression.
* Returns an empty array if there are no matches, if the input is not a valid string or if the match variable is not a string or RegExp type.

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.match("The rain in SPAIN stays mainly in the plain", "ain"));       // ["ain"]
console.log(StringUtils.match("The rain in SPAIN stays mainly in the plain", /ain/));       // ["ain"]
console.log(StringUtils.match("The rain in SPAIN stays mainly in the plain", /ain/g));      // ["ain", "ain", "ain"]
console.log(StringUtils.match("The rain in SPAIN stays mainly in the plain", "ein"));       // []
console.log(StringUtils.match("The rain in SPAIN stays mainly in the plain", null));        // []
console.log(StringUtils.match("The rain in SPAIN stays mainly in the plain", 1));           // []
```