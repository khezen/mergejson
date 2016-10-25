#!/usr/bin/env node

var mergejson = require("./mergejson");
var args = process.argv.slice(2);
console.log(mergejson(args));