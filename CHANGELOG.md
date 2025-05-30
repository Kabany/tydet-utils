# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.3.1] 2025-04-24
* Update 'typescript' repository.
* Add isWebUrlSimpleValid, isWebUrlOnlyPathValid methods.
* Update regex for isWebUrlValid method.

## [v1.3.1] 2024-09-19
* Update 'typescript' repository.

## [v1.3.0] 2024-04-21
* Add CompareUtils module:
    * isEqual

## [v1.2.1] 2024-03-18
* Build fix

## [v1.2.0] 2024-03-11
* Add DateUtils module:
    * isValid
    * addYears
    * addMonths
    * addDays
    * addHours
    * addMinutes
    * isExpired
    * daysOfDifference
    * hoursOfDifference
    * minutesOfDifference

## [v1.1.0] 2024-03-02
* Add NumberUtils module:
    * isValid
    * isInteger
    * isPositiveInteger

## [v1.0.0] 2024-02-06
* Add StringUtils module:
    * isEmpty
    * isNotEmpty
    * isBlank
    * isNotBlank
    * reverse
    * isEmailValid
    * isDomainValid
    * isWebUrlValid
    * isUsernameValid
    * isPhoneValid
    * isUuidValid
* Add NullSafe to native methods:
    * at
    * charAt
    * charCodeAt
    * codePointAt
    * concat
    * endsWith
    * fromCharCode
    * includes
    * indexOf
    * lastIndexOf
    * length
    * localeCompare
    * match
    * padEnd
    * padStart
    * repeat
    * replace
    * replaceAll
    * search
    * slice
    * split
    * startsWith
    * substring
    * toLocaleLowerCase
    * toLocaleUpperCase
    * toLowerCase
    * toUpperCase
    * trim
    * trimEnd
    * trimStart