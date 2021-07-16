`String.prototype.at(index)`

- Returns the character at the specified index. Accepts negative integers, which count back from the last string character.

`String.prototype.charAt(index)`

- Returns the character at the specified index.

`String.prototype.charCodeAt(index)`

- Returns a number that is the UTF-16 code unit value at the given index.

String.prototype.codePointAt(pos)

- Returns a nonnegative integer Number that is the code point value of the UTF-16 encoded code point starting at the specified pos.
  const sentence = 'The quick';
  const index = 4;
  console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
  // expected output: "The character code 113 is equal to q"

`String.prototype.concat(str [, ...strN ])`

- Combines the text of two (or more) strings and returns a new string.

`String.prototype.includes(searchString [, position])`

- Determines whether the calling string contains searchString.

`String.prototype.endsWith(searchString [, length])`

- Determines whether a string ends with the characters of the string searchString.

`String.prototype.indexOf(searchValue [, fromIndex])`

- Returns the index within the calling String object of the first occurrence of searchValue, or -1 if not found.

`String.prototype.lastIndexOf(searchValue [, fromIndex])`

- Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found.

`String.prototype.match(regexp)`

- Used to match regular expression regexp against a string.
  const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
  const regex = /[A-Z]/g;
  const found = paragraph.match(regex);
  console.log(found);
  // expected output: Array ["T", "I"]

`String.prototype.padEnd(targetLength [, padString])`

- Pads the current string from the end with a given string and returns a new string of the length targetLength.
  const str1 = 'Breaded Mushrooms';
  console.log(str1.padEnd(25, '.'));
  // expected output: "Breaded Mushrooms........"

`String.prototype.padStart(targetLength [, padString]`)

- Pads the current string from the start with a given string and returns a new string of the length targetLength.
  const fullNumber = '2034399002125581';
  const last4Digits = fullNumber.slice(-4);
  const maskedNumber = last4Digits.padStart(fullNumber.length, '\*');
  // expected output: "****\*\*\*\*****5581"

`String.prototype.repeat(count)`

- Returns a string consisting of the elements of the object repeated count times.

`String.prototype.replace(searchFor, replaceWith)`

- Used to replace occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression,
  and replaceWith may be a string or function.
  const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
  console.log(p.replace('dog', 'monkey'));
  // expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

`String.prototype.replaceAll(searchFor, replaceWith)`

- Used to replace all occurrences of searchFor using replaceWith. searchFor may be a string or Regular Expression,
  and replaceWith may be a string or function.

`String.prototype.search(regexp)`

- Search for a match between a regular expression regexp and the calling string.
  `return` index of the first match between the regular expression and the given string, or -1 if no match

`String.prototype.slice(beginIndex[, endIndex])`

- Extracts a section of a string and returns a new string.
  const str = 'The quick brown fox jumps over the lazy dog.';
  console.log(str.slice(31));
  // expected output: "the lazy dog."
  console.log(str.slice(4, 19));
  // expected output: "quick brown fox"

`String.prototype.split([separator [, limit] ])`

- Returns an array of strings populated by splitting the calling string at occurrences of the substring sep.
  const str = 'The quick brown fox jumps over the lazy dog.';
  const words = str.split(' ');
  console.log(words[3]);
  // expected output: "fox"

`String.prototype.startsWith(searchString [, length])`

- Determines whether the calling string begins with the characters of string searchString.
  const str1 = 'Saturday night plans';
  console.log(str1.startsWith('Sat'));
  // expected output: true

`String.prototype.substring(indexStart [, indexEnd])`

- Returns a new string containing characters of the calling string from (or between) the specified index (or indeces).
  const str = 'Mozilla';
  console.log(str.substring(1, 3));
  // expected output: "oz"

`String.prototype.toLocaleLowerCase( [locale, ...loca`les])
The characters within a string are converted to lowercase while respecting the current locale.
For most languages, this will return the same as toLowerCase().
const dotted = 'İstanbul';

    console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`);
    // expected output: "i̇stanbul"

    console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`);
    // expected output: "istanbul"

`String.prototype.toLocaleUpperCase( [locale, ...locales])`

- The characters within a string are converted to uppercase while respecting the current locale.
  For most languages, this will return the same as toUpperCase().
  const city = 'istanbul';
  console.log(city.toLocaleUpperCase('en-US'));
  // expected output: "ISTANBUL"
  console.log(city.toLocaleUpperCase('TR'));
  // expected output: "İSTANBUL"

`String.prototype.toLowerCase()`

- Returns the calling string value converted to lowercase.

`String.prototype.toString()`

- Returns a string representing the specified object. Overrides the Object.prototype.toString() method.

`String.prototype.toUpperCase()`

- Returns the calling string value converted to uppercase.

`String.prototype.trim()`

- Trims whitespace from the beginning and end of the string. Part of the ECMAScript 5 standard.
  const greeting = ' Hello world! ';
  console.log(greeting.trim());
  // expected output: "Hello world!";

`String.prototype.trimStart()`

- Trims whitespace from the beginning of the string.

`String.prototype.trimEnd()`

- Trims whitespace from the end of the string.

`String.prototype.valueOf()`

- Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method.
  const stringObj = new String('foo');
  console.log(stringObj);
  // expected output: String { "foo" }
  console.log(stringObj.valueOf());
  // expected output: "foo"

`String.prototype.@@iterator()`
Returns a new iterator object that iterates over the code points of a String value, returning each code point as a String value.
