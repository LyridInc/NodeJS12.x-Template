#!/usr/bin/env node
require('dotenv').config()
const entry = require('./src/YOUR_FUNCTION_NAME')

entry.LyFnInputParams.InputSample = "Hello"

entry.PreRun();
var output = entry.Run(entry.LyFnInputParams);
entry.PostRun();

console.log("Function Input: " + entry.LyFnInputParams.InputSample )
console.log("Function Output: " + output.OutputSample )
