# TyDeT Utils
> A Typescript & Javascript library with reusable components for common validations.

TyDeT (Typescript Developer Tools) Utils is a set of resuable components for variable manipulation and validation.
The package has utilities and validations for strings, numbers, dates and enumerations.

## Installation

This is a Node.js module available through the npm registry. Installation is done using the npm install command:

```shell
npm install tydet-utils
```

## Usage

### Basic usage

```js
import { StringUtils } from 'tydet-utils';

console.log(StringUtils.isEmpty("   a   "));    // returns false
console.log(StringUtils.isEmpty("  "));         // returns true
```

Check the [docs][docs] for all the available components.

## Changelog

[Learn about the latest improvements][changelog].

## License

[MIT License][license].

## Contributing

We'd love for you to contribute to TyAPI-Utils and help make it even better than it is today! Find out how you can contribute [here][contribute].



<!-- Markdown link & img dfn's -->
[license]: ./LICENSE
[changelog]: ./CHANGELOG.md
[contribute]: ./CONTRIBUTING.md
[docs]: ./DOCS/README.md