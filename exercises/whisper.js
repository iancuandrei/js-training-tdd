"use strict";

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:

const whisper = str => {
  return str.toLowerCase();
};

//* Begin of tests
const assert = require("assert");

assert.strictEqual(whisper("ASDF"), "asdf");
// End of tests */
