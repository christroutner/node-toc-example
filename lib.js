/*
 Notice that the module.exports function is at the top of the file, rather than in the footer.
 This layout means that the module.exports function can behave as a kind of table-of-contents,
 conveniently displaying the exported functions in this library file.
*/

"use strict"

module.exports = {
 firstFunc, // This is a brief summary of what firstFunc() does.
 secondFunc // This is another concise description.
}

function firstFunc() {
  console.log(`This is the first function`);
  return 4;
}

function secondFunc() {
  console.log(`This is the second function`);
  return 8;
}

// Imagine this library file is huge with lots of support functions beyond this point.

