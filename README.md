# Climbing grade recognizer

[![MIT License][license-image]][license-url]

> Climbing grade recognizer is a module wirtten in JavaScript (ES6), that simply recognizes which climbing grade system is provided. 

## Installation

With node:

```bash
npm install climbing-grade
```

## Usage

Recognize a climbing grade system.

### API

#### recognize

Parameter: `string`

Return an array of possible systems or throws an error when provided parameter is not a string.

### Node

```javascript
var GradeRecognizer = require('climbing-grade-recognizer'); 
GradeRecognizer.recognize('6a'); // ['french']
GradeRecognizer.recognize('VI.2'); // ['kurtyki']
GradeRecognizer.recognize('5.12a'); // ['yds']
```
### Systems

* 'french'
* 'yds'
* 'kurtyki'

## Tests

```bash
npm test
```

## License

[MIT][license-url]

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE