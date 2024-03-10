# Documentation

TyDeT Utils is composed of submodules made up of reusable methods to validate variables depending on their type, such as:

* [String Utils](#string-utils)
    * [isEmpty()](#isemptystr-string---boolean)
    * [isNotEmpty()](#isnotemptystr-string---boolean)
    * [isBlank()](#isblankstr-string---boolean)
    * [isNotBlank()](#isnotblankstr-string---boolean)
    * [reverse()](#reversestr-string---string--null)
    * [isEmailValid()](#isemailvalidstr-string---boolean)
    * [isDomainValid()](#isdomainvalidstr-string---boolean)
    * [isWebUrlValid()](#isweburlvalidstr-string---boolean)
    * [isUsernameValid()](#isusernamevalidstr-string---boolean)
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
    * [match()](#matchstr-string-match-string--regexp---string)
    * [padEnd()](#padendstr-string-length-number-pad-string---string)
    * [padStart()](#padstartstr-string-length-number-pad-string---string)
    * [repeat()](#repeatstr-string-count-number---string)
    * [replace()](#replacestr-string-search-string--regexp-newvalue-string--x-string--string---string)
    * [replaceAll()](#replaceallstr-string-search-string--regexp-newvalue-string--x-string--string---string)
    * [search()](#searchstr-string-search-string--regexp---number)
    * [slice()](#slicestr-string-start-number-end-number---string)
    * [split()](#splitstr-string-separator-string--regexp-limit-number---string)
    * [startsWith()](#startswithstr-string-search-string-limit-number---boolean)
    * [substring()](#substringstr-string-start-number-length-number---string)
    * [toLocaleLowerCase()](#tolocalelowercasestr-string-locales-string---string)
    * [toLocaleUpperCase()](#tolocaleuppercasestr-string-locales-string---string)
    * [toLowerCase()](#tolowercasestr-string---string)
    * [toUpperCase()](#touppercasestr-string---string)
    * [trim()](#trimstr-string---string)
    * [trimEnd()](#trimendstr-string---string)
    * [trimStart()](#trimstartstr-string---string)
* [Number Utils](#number-utils)
    * [isValid()](#isvalidvalue-number-string---boolean)
    * [isPositiveInteger()](#ispositiveintegervalue-number-string---boolean)
    * [isInteger()](#isintegervalue-number-string---boolean)
* [Date Utils](#date-utils)
    * [isValid()](#isvalidvalue-number-string-date---boolean)
    * [addYears()](#addyearsdate-date-years-number---date)
    * [addMonths()](#addmonthsdate-date-months-number---date)
    * [addDays()](#adddaysdate-date-days-number---date)
    * [addHours()](#addhoursdate-date-hours-number---date)
    * [addMinutes()](#addminutesdate-date-minutes-number---date)

## String Utils

### Methods

##### Extended String operators:

###### `isEmpty(str: string)` -> `boolean`
* Evaluates if the parameter is `null`, `undefined` or an empty `string`.
* It returns `true` for `null`, `undefined` or any `string` that only contains spaces; otherwise it returns `false`.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.isEmpty("example")               // false
StringUtils.isEmpty("   example   ")         // false
StringUtils.isEmpty("")                      // true
StringUtils.isEmpty("  ")                    // true
StringUtils.isEmpty("             ")         // true
StringUtils.isEmpty(null)                    // true
StringUtils.isEmpty(undefined)               // true
StringUtils.isEmpty(0)                       // false
StringUtils.isEmpty(1)                       // false
StringUtils.isEmpty({})                      // false
StringUtils.isEmpty(new Date())              // false
StringUtils.isEmpty(true)                    // false
StringUtils.isEmpty(false)                   // false
StringUtils.isEmpty([])                      // false
```

###### `isNotEmpty(str: string)` -> `boolean`
* Evaluates if the parameter is a `string`.
* It returns `true` for any string; otherwise it returns `false`.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.isNotEmpty("example")            // true
StringUtils.isNotEmpty("   example   ")      // true
StringUtils.isNotEmpty("")                   // true
StringUtils.isNotEmpty("  ")                 // true
StringUtils.isNotEmpty("             ")      // true
StringUtils.isNotEmpty(null)                 // false
StringUtils.isNotEmpty(undefined)            // false
StringUtils.isNotEmpty(0)                    // false
StringUtils.isNotEmpty(1)                    // false
StringUtils.isNotEmpty({})                   // false
StringUtils.isNotEmpty(new Date())           // false
StringUtils.isNotEmpty(true)                 // false
StringUtils.isNotEmpty(false)                // false
StringUtils.isNotEmpty([])                   // false
```

###### `isBlank(str: string)` -> `boolean`
* Evaluates if the parameter is an empty `string`.
* It returns `true` for any `string` that only contains spaces; otherwise it returns `false`.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.isBlank("example")               // false
StringUtils.isBlank("   example   ")         // false
StringUtils.isBlank("")                      // true
StringUtils.isBlank("  ")                    // true
StringUtils.isBlank("             ")         // true
StringUtils.isBlank(null)                    // false
StringUtils.isBlank(undefined)               // false
StringUtils.isBlank(0)                       // false
StringUtils.isBlank(1)                       // false
StringUtils.isBlank({})                      // false
StringUtils.isBlank(new Date())              // false
StringUtils.isBlank(true)                    // false
StringUtils.isBlank(false)                   // false
StringUtils.isBlank([])                      // false
```

###### `isNotBlank(str: string)` -> `boolean`
* Evaluates if the parameter is `string` that not only contains spaces.
* It returns `true` for any `string` that not only contains spaces; otherwise it returns `false`.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.isBlank("example")               // true
StringUtils.isBlank("   example   ")         // true
StringUtils.isBlank("")                      // false
StringUtils.isBlank("  ")                    // false
StringUtils.isBlank("             ")         // false
StringUtils.isBlank(null)                    // false
StringUtils.isBlank(undefined)               // false
StringUtils.isBlank(0)                       // false
StringUtils.isBlank(1)                       // false
StringUtils.isBlank({})                      // false
StringUtils.isBlank(new Date())              // false
StringUtils.isBlank(true)                    // false
StringUtils.isBlank(false)                   // false
StringUtils.isBlank([])                      // false
```

###### `reverse(str: string)` -> `string` | `null`
* Returns a `string` with its characters reversed. 
* Returns `null` if the input is not a `string`.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.reverse("example")               // 'elpmaxe'
StringUtils.reverse("   example   ")         // '   elpmaxe   '
StringUtils.reverse("")                      // ''
StringUtils.reverse("  ")                    // '  '
StringUtils.reverse("             ")         // '             '
StringUtils.reverse(null)                    // null
StringUtils.reverse(undefined)               // null
StringUtils.reverse(0)                       // null
StringUtils.reverse(1)                       // null
```

###### `isEmailValid(str: string)` -> `string`
* Returns `true` if the input is a valid string email.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.isEmailValid("mail@test.com")                   // true
StringUtils.isEmailValid("name.mail@test.com.mx")           // true
StringUtils.isEmailValid("mail@test.c")                     // false
StringUtils.isEmailValid("mail@test")                       // false
StringUtils.isEmailValid(undefined)                         // false
StringUtils.isEmailValid(null)                              // false
StringUtils.isEmailValid(5)                                 // false
StringUtils.isEmailValid(new Date())                        // false
```

###### `isDomainValid(str: string)` -> `string`
* Returns `true` if the input is a valid domain name sting.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.isDomainValid("test.com")                       // true
StringUtils.isDomainValid("test.com.mx")                    // true
StringUtils.isDomainValid("mail@test.com")                  // false
StringUtils.isDomainValid("test.c")                         // false
StringUtils.isDomainValid("test")                           // false
StringUtils.isDomainValid(undefined)                        // false
StringUtils.isDomainValid(null)                             // false
StringUtils.isDomainValid(5)                                // false
StringUtils.isDomainValid(new Date())                       // false
```

###### `isWebUrlValid(str: string)` -> `string`
* Returns `true` if the input is a valid URL string.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.isWebUrlValid("http://test.com")                // true
StringUtils.isWebUrlValid("http://localhost?param=123")     // true
StringUtils.isWebUrlValid("http://123.123.123.123:3000")    // true
StringUtils.isWebUrlValid("mail@test.com")                  // false
StringUtils.isWebUrlValid("mkyong.com/users")               // false
StringUtils.isWebUrlValid(undefined)                        // false
StringUtils.isWebUrlValid(null)                             // false
StringUtils.isWebUrlValid(5)                                // false
StringUtils.isWebUrlValid(new Date())                       // false
```

###### `isUsernameValid(str: string)` -> `string`
* Returns `true` if the input is a valid username. A username must meet these conditions:
    - Must contain at least 3 characters.
    - All letters must be in lowercase.
    - Must start with a lowercase letter.
    - Can have numbers but it can't start with it.
    - Can have periods `.` but it can't start or end with it.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.isUsernameValid("abc")                          // true
StringUtils.isUsernameValid("a.1.2")                        // true
StringUtils.isUsernameValid("qwertyuiop")                   // true
StringUtils.isUsernameValid("1.a")                          // false
StringUtils.isUsernameValid("a b")                          // false
StringUtils.isUsernameValid(undefined)                      // false
StringUtils.isUsernameValid(null)                           // false
StringUtils.isUsernameValid(5)                              // false
StringUtils.isUsernameValid(new Date())                     // false
```

###### `isPhoneValid(str: string)` -> `string`
* Returns `true` if the input is a valid Phone Number.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.isPhoneValid("123-456-7890")                    // true
StringUtils.isPhoneValid("(123) 456-7890")                  // true
StringUtils.isPhoneValid("123 456 7890")                    // true
StringUtils.isPhoneValid("123.456.7890")                    // true
StringUtils.isPhoneValid("+11 (703) 678 5982")              // true
StringUtils.isPhoneValid("5512341234")                      // true
StringUtils.isPhoneValid("55 1234 1234")                    // true
StringUtils.isPhoneValid("55.1234.1234")                    // true
StringUtils.isPhoneValid("55-1234-1234")                    // true
StringUtils.isPhoneValid("(55) 1234-1234")                  // true
StringUtils.isPhoneValid("55,123,1234")                     // false
StringUtils.isPhoneValid("55,123,1234")                     // false
StringUtils.isPhoneValid("123,123,1234")                    // false
StringUtils.isPhoneValid("12345678")                        // false
StringUtils.isPhoneValid("180012345670000")                 // false
StringUtils.isPhoneValid("123A231234")                      // false
StringUtils.isPhoneValid(undefined)                         // false
StringUtils.isPhoneValid(null)                              // false
StringUtils.isPhoneValid(5)                                 // false
StringUtils.isPhoneValid(new Date())                        // false
```

###### `isUuidValid(str: string)` -> `string`
* Returns `true` if the input is a valid UUID string.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.isUuidValid("00000000-0000-0000-0000-000000000000")     // true
StringUtils.isUuidValid("dc5538c6-cdf3-11ed-afa1-0242ac120002")     // true
StringUtils.isUuidValid("00000000.0000.0000.0000.000000000000")     // false
StringUtils.isUuidValid("00000000 0000 0000 0000 000000000000")     // false
StringUtils.isUuidValid("5fc0308-d265-11e7-b8c6-83e29cd24f4c")      // false (missing a character)
StringUtils.isUuidValid(undefined)                                  // false
StringUtils.isUuidValid(null)                                       // false
StringUtils.isUuidValid(5)                                          // false
StringUtils.isUuidValid(new Date())                                 // false
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

StringUtils.at("example")                    // 'e'
StringUtils.at("example", 2)                 // 'a'
StringUtils.at("he-llo", 2)                  // '-'
StringUtils.at("he llo"), 2                  // ' '
StringUtils.at("hello", -1)                  // 'o'
StringUtils.at("hello", -2)                  // 'l'
StringUtils.at("hello", 6)                   // undefined
StringUtils.at("hello", -7)                  // undefined
StringUtils.at(null)                         // undefined
StringUtils.at(undefined)                    // undefined
StringUtils.at(0)                            // undefined
StringUtils.at(1)                            // undefined
```

###### `charAt(str: string, position: number)` -> `string`
* Returns the char at a specified index (position) in a string. 
* If the input is not a `string` type, it will return an empty `string`.
* If the position is an invalid index, it will return an empty `string`.
* If the position is a float number, it will be fixed with the `Math.floor()` operator.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.charAt("example")                // 'e'
StringUtils.charAt("example", 2)             // 'a'
StringUtils.charAt("he-llo", 2)              // '-'
StringUtils.charAt("he llo"), 2              // ' '
StringUtils.charAt("hello", -1)              // ''
StringUtils.charAt("hello", 6)               // ''
StringUtils.charAt(null)                     // ''
StringUtils.charAt(undefined)                // ''
StringUtils.charAt(0)                        // ''
StringUtils.charAt(1)                        // ''
```

###### `charCodeAt(str: string, position: number)` -> `number`
* Returns the char at a specified index (position) in a string. 
* If the input is not a `string` type, it will return `undefined`.
* If the position is an invalid index, it will return `undefined`.
* If the position is a float number, it will be fixed with the `Math.floor()` operator.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.charCodeAt("example")            // 101
StringUtils.charCodeAt("example", 2)         // 97
StringUtils.charCodeAt("he-llo", 2)          // 45
StringUtils.charCodeAt("he llo"), 2          // 32
StringUtils.charCodeAt("hello", -1)          // undefined
StringUtils.charCodeAt("hello", 6)           // undefined
StringUtils.charCodeAt(null)                 // undefined
StringUtils.charCodeAt(undefined)            // undefined
StringUtils.charCodeAt(0)                    // undefined
StringUtils.charCodeAt(1)                    // undefined
```

###### `codePointAt(str: string, position: number)` -> `number`
* Returns the char at a specified index (position) in a string.
* `charCodeAt()` is UTF-16, `codePointAt()` is Unicode. Both methods return an integer representing the UTF-16 code of a character, but only `codePointAt()` can return the full value of a Unicode value greather 0xFFFF (65535).
* If the input is not a `string` type, it will return `undefined`.
* If the position is an invalid index, it will return `undefined`.
* If the position is a float number, it will be fixed with the `Math.floor()` operator.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.codePointAt("example")           // 101
StringUtils.codePointAt("example", 2)        // 97
StringUtils.codePointAt("he-llo", 2)         // 45
StringUtils.codePointAt("he llo"), 2         // 32
StringUtils.codePointAt("hello", -1)         // undefined
StringUtils.codePointAt("hello", 6)          // undefined
StringUtils.codePointAt(null)                // undefined
StringUtils.codePointAt(undefined)           // undefined
StringUtils.codePointAt(0)                   // undefined
StringUtils.codePointAt(1)                   // undefined
```

###### `concat(...str: string[])` -> `string`
* Joins two or more strings with a safe null.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.concat("str1", " ", "str2")      // 'str1 str2'
StringUtils.concat("str1", null, "str2")     // 'str1str2'
StringUtils.concat(null)                     // ''
StringUtils.concat(undefined)                // ''
StringUtils.concat(0)                        // ''
StringUtils.concat(1)                        // ''
```

###### `endsWith(str: string, search: string, length?: number)` -> `boolean`
* Returns `true` if a string ends with a specified string with a safe null.
* If the input or search string are not a string type, then it will return `false`.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.endsWith("Hello World!", "World!")       // true
StringUtils.endsWith("Hello World!", "Hello", 5)     // true
StringUtils.endsWith("Hello World!", "World!", 20)   // true
StringUtils.endsWith("Hello World!", "H", 0)         // false
StringUtils.endsWith("Hello World!", "H", 1)         // true
StringUtils.endsWith("Hello World!", "H", -1)        // false
StringUtils.endsWith("Hello World!", "!", -1)        // false
StringUtils.endsWith("Hello World!", null)           // false
StringUtils.endsWith("Hello World!", undefined)      // false
StringUtils.endsWith("Hello World!", 0)              // false
StringUtils.endsWith("Hello World!", 1)              // false
```

###### `fromCharCode(...code: number[])` -> `boolean`
* Converts Unicode values to characters.
* If the code is not a `number`, it will be converted to an empty string.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.fromCharCode(65)                         // 'A'
StringUtils.fromCharCode(72, 69, 76, 76, 79)         // 'HELLO'
StringUtils.fromCharCode(null)                       // ''
StringUtils.fromCharCode(undefined)                  // ''
```

###### `includes(str: string, search: string, start?: number)` -> `boolean`
* Returns `true` if a string contains a specified string with a null safe.
* If the input or search string are not a string type, then it will return `false`.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.includes("Hello World!", "World!")       // true
StringUtils.includes("Hello World!", "Hello", 5)     // false
StringUtils.includes("Hello World!", "World!", 5)    // true
StringUtils.includes("Hello World!", "Hello", 0)     // true
StringUtils.includes("Hello World!", "Hello", 1)     // false
StringUtils.includes("Hello World!", "Hello", -1)    // true
StringUtils.includes("Hello World!", null)           // false
StringUtils.includes("Hello World!", undefined)      // false
StringUtils.includes("Hello World!", 0)              // false
StringUtils.includes("Hello World!", 1)              // false
```

###### `indexOf(str: string, search: string, start?: number)` -> `number`
* Returns the position of the first occurrence of a value in a string, otherwise the position will be `-1`.
* If the input or search string are not a string type, then it will return `-1`.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.indexOf("Hello World!", "World!")        // 6
StringUtils.indexOf("Hello World!", "Hello", 5)      // -1
StringUtils.indexOf("Hello World!", "World!", 5)     // 6
StringUtils.indexOf("Hello World!", "Hello", 0)      // 0
StringUtils.indexOf("Hello World!", "Hello", 1)      // -1
StringUtils.indexOf("Hello World!", "Hello", -1)     // 0
StringUtils.indexOf("Hello World!", null)            // -1
StringUtils.indexOf("Hello World!", undefined)       // -1
StringUtils.indexOf("Hello World!", 0)               // -1
StringUtils.indexOf("Hello World!", 1)               // -1
```

###### `lastIndexOf(str: string, search: string, start?: number)` -> `number`
* Returns the position of the last occurrence of a value in a string, otherwise the position will be `-1`.
* If the input or search string are not a string type, then it will return `-1`.
* The method searches the string from the end to the begining.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.lastIndexOf("Hello World!", "World!")        // 6
StringUtils.lastIndexOf("Hello World!", "Hello")         // 0
StringUtils.lastIndexOf("Hello World!", "World!", 5)     // -1
StringUtils.lastIndexOf("Hello World!", "Hello", 5)      // 0
StringUtils.lastIndexOf("Hello World!", "Hello", 1)      // 0
StringUtils.lastIndexOf("Hello World!", "Hello", -1)     // -1
StringUtils.lastIndexOf("Hello World!", null)            // -1
StringUtils.lastIndexOf("Hello World!", undefined)       // -1
StringUtils.lastIndexOf("Hello World!", 0)               // -1
StringUtils.lastIndexOf("Hello World!", 1)               // -1
```

###### `length(str: string)` -> `number`
* Returns the length of a `string`.
* If the input is `null` or is not a `string`, the result will be `0`.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.length("example")                // 7
StringUtils.length("   example   ")          // 13
StringUtils.length("")                       // 0
StringUtils.length("  ")                     // 2
StringUtils.length("             ")          // 13
StringUtils.length(null)                     // 0
StringUtils.length(undefined)                // 0
StringUtils.length(0)                        // 0
StringUtils.length(1)                        // 0
```

###### `localeCompare(str: string, compare: string)` -> `number`
* Compares two strings in the current locale.
* Returns `undefined` if one of the strings are not a string type.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.localeCompare("ab", "ab")            // 0
StringUtils.localeCompare("ab", "cd")            // -1
StringUtils.localeCompare("cd", "ab")            // 1
StringUtils.localeCompare("A", "a")              // 1
StringUtils.localeCompare("hello", null)         // undefined
StringUtils.localeCompare("hello", undefined)    // undefined
StringUtils.localeCompare("hello", 0)            // undefined
StringUtils.localeCompare("hello", 1)            // undefined
```

###### `match(str: string, match: string | RegExp)` -> `string[]`
* Returns an array of matches with a simple string match or regular expression.
* Returns an empty array if there are no matches, if the input is not a valid string or if the match variable is not a string or RegExp type.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.match("The rain in SPAIN stays mainly in the plain", "ain")      // ["ain"]
StringUtils.match("The rain in SPAIN stays mainly in the plain", /ain/)      // ["ain"]
StringUtils.match("The rain in SPAIN stays mainly in the plain", /ain/g)     // ["ain", "ain", "ain"]
StringUtils.match("The rain in SPAIN stays mainly in the plain", "ein")      // []
StringUtils.match("The rain in SPAIN stays mainly in the plain", null)       // []
StringUtils.match("The rain in SPAIN stays mainly in the plain", 1)          // []
```

###### `padEnd(str: string, length: number, pad?: string)` -> `string`
* Pads a string with another string (multiple times) until it reaches a given length.
* It considers an empty string if the input or the pad are not a string.
* If the length is a float number, it will be fixed with the `Math.floor()` operator.
* If the length is not a number, it will be fixed with the input string length.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.padEnd("Hello", 10)              // 'Hello     '
StringUtils.padEnd("Hello", 10, "o")         // 'Helloooooo'
StringUtils.padEnd("Hello", 1)               // 'Hello'
StringUtils.padEnd("Hello", 5.5)             // 'Hello'
StringUtils.padEnd(null, 5)                  // ''
```

###### `padStart(str: string, length: number, pad?: string)` -> `string`
* Pads a string with another string (multiple times) until it reaches a given length.
* It considers an empty string if the input or the pad are not a string.
* If the length is a float number, it will be fixed with the `Math.floor()` operator.
* If the length is not a number, it will be fixed with the input string length.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.padStart("Hello", 10)            // '     Hello'
StringUtils.padStart("Hello", 10, "H")       // 'HHHHHHello'
StringUtils.padStart("Hello", 1)             // 'Hello'
StringUtils.padStart("Hello", 5.5)           // 'Hello'
StringUtils.padStart(null, 5)                // ''
```

###### `repeat(str: string, count: number)` -> `string`
* Returns a string with a number of copies of a string.
* It considers an empty string if the input is not a string.
* If the count input is a float number, it will be fixed with the `Math.floor()` operator.
* If the count input is a negative number, then it will be converted to 0.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.repeat("Hello", 1)               // 'Hello'
StringUtils.repeat("Hello", 3)               // 'HelloHelloHello'
StringUtils.repeat("Hello", 1.5)             // 'Hello'
StringUtils.repeat("Hello", 0)               // ''
StringUtils.repeat("Hello", -1)              // ''
StringUtils.repeat(null, 5)                  // ''
```

###### `replace(str: string, search: string | RegExp, newValue: string | ((x: string) => string))` -> `string`
* Searches a string for a value or a regular expression, then returns a new string with the value(s) replaced.
* It considers an empty string if the input is not a string
* It considers an empty string if the search value is not a string or a RegExp value
* It considers an empty string if the newValue is not a string or a function that returns a string.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.replace("Hello Everyone!", "Everyone", "World")                                     // 'Hello World!'
StringUtils.replace("Mr Blue has a blue house and a blue car.", "blue", "red")                  // 'Mr Blue has a red house and a blue car.'
StringUtils.replace("Mr Blue has a blue house and a blue car.", /blue/g, "red")                 // 'Mr Blue has a red house and a red car.'
StringUtils.replace("Mr Blue has a blue house and a blue car.", /blue|house|car/gi, (x) => {
    return x.toUpperCase()
    })                                                                                          // 'Mr BLUE has a BLUE HOUSE and a BLUE CAR.'
StringUtils.replace("Hello World!", " ", null)                                                  // 'HelloWorld!'
```

###### `replaceAll(str: string, search: string | RegExp, newValue: string | ((x: string) => string))` -> `string`
* Searches a string for a value or a regular expression, then returns a new string with the value(s) replaced.
* It considers an empty string if the input is not a string
* It considers an empty string if the search value is not a string or a RegExp value
* It considers an empty string if the newValue is not a string or a function that returns a string.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.replaceAll("Hello Everyone!", "Everyone", "World")                                     // 'Hello World!'
StringUtils.replaceAll("Mr Blue has a blue house and a blue car.", "blue", "red")                  // 'Mr Blue has a red house and a red car.'
StringUtils.replaceAll("Mr Blue has a blue house and a blue car.", /blue/g, "red")                 // 'Mr Blue has a red house and a red car.'
StringUtils.replaceAll("Mr Blue has a blue house and a blue car.", /blue|house|car/gi, (x) => {
    return x.toUpperCase()
    })                                                                                             // 'Mr BLUE has a BLUE HOUSE and a BLUE CAR.'
StringUtils.replaceAll("Hello World!", " ", null)                                                  // 'HelloWorld!'
```

###### `search(str: string, search: string | RegExp)` -> `number`
* Matches a string against a regular expression and returns the index (position) of the first match.
* It considers an empty string if the input is not a string.
* It considers an empty string if the search value is not a string or a RegExp value.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.search("Hello World!", "World")                 // 6
StringUtils.search("Mr Blue has a blue house.", "blue")     // 14
StringUtils.search("Mr Blue has a blue house.", /blue/)     // 14
StringUtils.search("Mr Blue has a blue house.", /Blue/)     // 3
StringUtils.search("Mr Blue has a blue house.", /blue/i)    // 3
StringUtils.search("Mr Blue has a blue house.", null)       // 0
```

###### `slice(str: string, start?: number, end?: number)` -> `string`
* Extracts a part of a string.
* It considers an empty string if the input is not a string.
* If the start value is not a number, then it will be 0.
* If the end value is not a number, then it will be the last position of the input string.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.slice("Hello World!", 0, 5)                     // 'Hello'
StringUtils.slice("Hello World!", 3)                        // 'lo World!'
StringUtils.slice("Hello World!", -6, -1)                   // 'World'
StringUtils.slice("Hello World!", 5, 1)                     // ''
StringUtils.slice("Hello World!")                           // 'Hello World!'
StringUtils.slice("Hello World!", 0, 25)                    // 'Hello World!'
StringUtils.slice("Hello World!", -1, 25)                   // '!'
StringUtils.slice(null, 0, 2)                               // ''
```

###### `split(str: string, separator?: string | RegExp, limit?: number)` -> `string[]`
* Splits a string into an array of substrings.
* It considers an empty string if the input is not a string.
* If the separator is not a string or a RegExp, it will be undefined.
* If the limit is not a number, it will be undefined.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.split("Hello World!")                           // ['Hello World!']
StringUtils.split("Hello World!", " ")                      // ['Hello', 'World!']
StringUtils.split("Hello World!", "Hello")                  // ['', ' World!']
StringUtils.split("Hello World!", "")                       // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!']
StringUtils.split("Hello World!", "", 1)                    // ['H']
StringUtils.split(null)                                     // ['']
```

###### `startsWith(str: string, search: string, limit?: number)` -> `boolean`
* Returns `true` if a string starts with a specified string.
* It considers an empty string if the input or search values are not a string.
* If the start is not a number, it will be `0`.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.startsWith("Hello World!", "Hello")             // true
StringUtils.startsWith("Hello World!", "H")                 // true
StringUtils.startsWith("Hello World!", "Hello", 1)          // false
StringUtils.startsWith("Hello World!", "World")             // false
StringUtils.startsWith("Hello World!", "World", 6)          // true
StringUtils.startsWith(null, "Hello")                       // false
```

###### `substring(str: string, start?: number, length?: number)` -> `string`
* Extracts characters, between two indices (positions), from a string, and returns the substring.
* If start is greater than end, arguments are swapped.
* If the start is not a number, it will be `0`.
* If the end is not a number, it will be the string length.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.substring("Hello World!", 0, 5)                 // 'Hello'
StringUtils.substring("Hello World!", 3)                    // 'lo World!'
StringUtils.substring("Hello World!", 5, 1)                 // 'ello'
StringUtils.substring("Hello World!")                       // 'Hello World!'
StringUtils.substring("Hello World!", 0, 25)                // 'Hello World!'
StringUtils.substring("Hello World!", -1, 25)               // 'Hello World!'
StringUtils.substring(null, 0, 2)                           // ''
```

###### `toLocaleLowerCase(str: string, locales?: string)` -> `string`
* Converts a string to lowercase letters, using current locale.
* It will return `null` if the input string is not a string type.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.toLocaleLowerCase("Hello World!")               // 'hello world!'
StringUtils.toLocaleLowerCase(undefined)                    // null
StringUtils.toLocaleLowerCase(null)                         // null
StringUtils.toLocaleLowerCase(5)                            // null
StringUtils.toLocaleLowerCase(new Date())                   // null
```

###### `toLocaleUpperCase(str: string, locales?: string)` -> `string`
* Converts a string to uppercase letters, using current locale.
* It will return `null` if the input string is not a string type.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.toLocaleUpperCase("Hello World!")               // 'HELLO WORLD!'
StringUtils.toLocaleUpperCase(undefined)                    // null
StringUtils.toLocaleUpperCase(null)                         // null
StringUtils.toLocaleUpperCase(5)                            // null
StringUtils.toLocaleUpperCase(new Date())                   // null
```

###### `toLowerCase(str: string)` -> `string`
* Converts a string to lowercase letters.
* It will return `null` if the input string is not a string type.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.toLowerCase("Hello World!")                     // 'hello world!'
StringUtils.toLowerCase(undefined)                          // null
StringUtils.toLowerCase(null)                               // null
StringUtils.toLowerCase(5)                                  // null
StringUtils.toLowerCase(new Date())                         // null
```

###### `toUpperCase(str: string)` -> `string`
* Converts a string to uppercase letters.
* It will return `null` if the input string is not a string type.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.toUpperCase("Hello World!")                     // 'HELLO WORLD!'
StringUtils.toUpperCase(undefined)                          // null
StringUtils.toUpperCase(null)                               // null
StringUtils.toUpperCase(5)                                  // null
StringUtils.toUpperCase(new Date())                         // null
```

###### `trim(str: string)` -> `string`
* Removes whitespace from both sides of a string.
* It will return `null` if the input string is not a string type.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.trim("    Hello!    ")                          // 'Hello!'
StringUtils.trim(undefined)                                 // null
StringUtils.trim(null)                                      // null
StringUtils.trim(5)                                         // null
StringUtils.trim(new Date())                                // null
```

###### `trimEnd(str: string)` -> `string`
* Removes whitespace from the end of a string.
* It will return `null` if the input string is not a string type.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.trimEnd("    Hello!    ")                       // '    Hello!'
StringUtils.trimEnd(undefined)                              // null
StringUtils.trimEnd(null)                                   // null
StringUtils.trimEnd(5)                                      // null
StringUtils.trimEnd(new Date())                             // null
```

###### `trimStart(str: string)` -> `string`
* Removes whitespace from the start of a string.
* It will return `null` if the input string is not a string type.

```js
import { StringUtils } from 'tydet-utils';

StringUtils.trimStart("    Hello!    ")                     // 'Hello!    '
StringUtils.trimStart(undefined)                            // null
StringUtils.trimStart(null)                                 // null
StringUtils.trimStart(5)                                    // null
StringUtils.trimStart(new Date())                           // null
```



## Number Utils

### Methods

#### Extended Number operators

###### `isValid(value: number | string)` -> `boolean`
* Evaluates if the value is valid number, integer or decimal.
* It returns `true` if the value is a valid number.

```js
import { NumberUtils } from 'tydet-utils';

NumberUtils.isValid(123456)                 // true
NumberUtils.isValid(0x1AF)                  // true
NumberUtils.isValid("123456")               // true
NumberUtils.isValid("-123.123")             // true
NumberUtils.isValid("0x1AF")                // true
NumberUtils.isValid("L123J45")              // false
NumberUtils.isValid("-0x1AF")               // false
NumberUtils.isValid(null)                   // false
NumberUtils.isValid(undefined)              // false
NumberUtils.isValid({})                     // false
NumberUtils.isValid(new Date())             // false
NumberUtils.isValid(true)                   // false
NumberUtils.isValid(false)                  // false
NumberUtils.isValid([])                     // false
```

###### `isPositiveInteger(value: number | string)` -> `boolean`
* Evaluates if the value is a positive integer. 
* It returns `true` if the value is a positive integer in a `number` or `string` type.

```js
import { NumberUtils } from 'tydet-utils';

NumberUtils.isPositiveInteger(123456)               // true
NumberUtils.isPositiveInteger(0B1001)               // true
NumberUtils.isPositiveInteger(0x1AF)                // true
NumberUtils.isPositiveInteger(123.123)              // false
NumberUtils.isPositiveInteger(-123456)              // false
NumberUtils.isPositiveInteger("123456")             // true
NumberUtils.isPositiveInteger("0B1001")             // true
NumberUtils.isPositiveInteger("0x1AF")              // true
NumberUtils.isPositiveInteger("123.123")            // false
NumberUtils.isPositiveInteger("-123456")            // false
NumberUtils.isPositiveInteger(null)                 // false
NumberUtils.isPositiveInteger(undefined)            // false
NumberUtils.isPositiveInteger({})                   // false
NumberUtils.isPositiveInteger(new Date())           // false
NumberUtils.isPositiveInteger(true)                 // false
NumberUtils.isPositiveInteger(false)                // false
NumberUtils.isPositiveInteger([])                   // false
```

#### Common JS operators:

###### `isInteger(value: number | string)` -> `boolean`
* Evaluates if the value is a integer. 
* It returns `true` if the value is a integer in a `number` or `string` type.

```js
import { NumberUtils } from 'tydet-utils';

NumberUtils.isInteger(123456)               // true
NumberUtils.isInteger(0B1001)               // true
NumberUtils.isInteger(0x1AF)                // true
NumberUtils.isInteger(123.123)              // false
NumberUtils.isInteger(-123456)              // true
NumberUtils.isInteger("123456")             // true
NumberUtils.isInteger("0B1001")             // true
NumberUtils.isInteger("0x1AF")              // true
NumberUtils.isInteger("123.123")            // false
NumberUtils.isInteger("-123456")            // true
NumberUtils.isInteger(null)                 // false
NumberUtils.isInteger(undefined)            // false
NumberUtils.isInteger({})                   // false
NumberUtils.isInteger(new Date())           // false
NumberUtils.isInteger(true)                 // false
NumberUtils.isInteger(false)                // false
NumberUtils.isInteger([])                   // false
```



## Date Utils

### Methods

#### Extended Number operators

###### `isValid(value: number | string | Date)` -> `boolean`
* Returns `true` if the parameter is a valid date. It can accept values of type `string`, `number` or `Date`.

```js
import { DateUtils } from 'tydet-utils';

DateUtils.isValid(new Date())                       // true
DateUtils.isValid("2023-08-12")                     // true
DateUtils.isValid("12-08-2012")                     // true
DateUtils.isValid(100000)                           // true
DateUtils.isValid("ABCDE")                          // false
DateUtils.isValid({day: 10, month: 6, year: 2000})  // false
```

###### `addYears(date: Date, years: number)` -> `Date`
* Add years to a date. 
* If the date is `null` or is not an instance of `Date`, it returns `null`.
* If the year number is `null`, then it will be `0`.

```js
import { DateUtils } from 'tydet-utils';

let today = new Date()
let modified = DateUtils.addYears(today, 10)
modified.getFullYear()          // 2024
```

###### `addMonths(date: Date, months: number)` -> `Date`
* Add months to a date. 
* If the date is `null` or is not an instance of `Date`, it returns `null`.
* If the month number is `null`, then it will be `0`.

```js
import { DateUtils } from 'tydet-utils';

let date = new Date(2024, 0, 1)
let modified = DateUtils.addMonths(date, 6)
let nextYear = DateUtils.addMonths(date, 12)
modified.getMonth()             // 5
nextYear.getMonth()             // 0
nextYear.getFullYear()          // 2025
```

###### `addDays(date: Date, days: number)` -> `Date`
* Add days to a date. 
* If the date is `null` or is not an instance of `Date`, it returns `null`.
* If the day number is `null`, then it will be `0`.

```js
import { DateUtils } from 'tydet-utils';

let date = new Date(2024, 0, 1)
let modified = DateUtils.addDays(date, 5)
modified.getDate()          // 6
```

###### `addHours(date: Date, hours: number)` -> `Date`
* Add hours to a date. 
* If the date is `null` or is not an instance of `Date`, it returns `null`.
* If the hour number is `null`, then it will be `0`

```js
import { DateUtils } from 'tydet-utils';

let date = new Date(2024, 0, 1)
let modified = DateUtils.addHours(date, 5)
modified.getHours()          // 5
```

###### `addMinutes(date: Date, minutes: number)` -> `Date`
* Add minutes to a date. 
* If the date is `null` or is not an instance of `Date`, it returns `null`.
* If the minute number is `null`, then it will be `0`

```js
import { DateUtils } from 'tydet-utils';

let date = new Date(2024, 0, 1)
let modified = DateUtils.addMinutes(date, 5)
modified.getMinutes()       // 5
```

#### Common JS operators: