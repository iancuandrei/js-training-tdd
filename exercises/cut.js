"use strict";

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:

const cutFirst = str => {
  return str.substring(2);
};

const cutLast = str => {
  return str.substring(0, str.length - 2);
};

const cutFirstLast = str => {
  let str2 = str.substring(2);
  return str2.substring(0, str2.length - 2);
};

//* Begin of tests
const assert = require("assert");

assert.strictEqual(cutFirst("asdfasdf"), "dfasdf");
assert.strictEqual(cutLast("asdfasdf"), "asdfas");
assert.strictEqual(cutFirstLast("asdfasdf"), "dfas");
// End of tests */
