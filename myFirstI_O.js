var fs = require('fs');
var filePath = process.argv[2];
var contents = fs.readFileSync(filePath);
contents = contents.toString();
var splitContents = contents.split('\n');
var numLines = splitContents.length-1;
console.log(numLines);