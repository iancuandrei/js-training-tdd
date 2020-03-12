"use strict";

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:

const keepFirst = str => {
  return str.slice(0, 2);
};

const keepLast = str => {
  return str.slice(str.length - 2, str.length);
};

const keepFirstLast = str => {
  let str2 = str.slice(3, 5);
  return str2;
};

//* Begin of tests
const assert = require("assert");

assert.strictEqual(keepFirst("asdfasdf"), "as");
assert.strictEqual(keepLast("asdfasdf"), "df");
assert.strictEqual(keepFirstLast("asdfasdf"), "fa");
// End of tests */
