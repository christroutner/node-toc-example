/*
 This node.js app doesn't do anything interesting. It's only purpose is to require the library
 file in this same directory and call a couple functions in it.
*/

"use strict"

const lib = require("./lib.js");

console.log(`Starting...`);

lib.firstFunc();

lib.secondFunc();

console.log(`...Finished`);
