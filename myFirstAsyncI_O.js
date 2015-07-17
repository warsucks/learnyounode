var fs = require('fs');
var filePath = process.argv[2];
var contents = fs.readFile(filePath, "utf-8", function(error, data)
{
	if(!error)
	{
		var splitData = data.split("\n");
		var numNewLines = splitData.length-1;
		console.log(numNewLines);
	}
});