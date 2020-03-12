"use strict";

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:

const yell = str => {
  return str.toUpperCase();
};

//* Begin of tests
const assert = require("assert");

assert.strictEqual(yell("asdf"), "ASDF");

// End of tests */
