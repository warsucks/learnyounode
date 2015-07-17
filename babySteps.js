var numbers = process.argv.slice(2);
var sum = 0;
numbers.forEach(function(element)
{
	sum += Number(element);
});

console.log(sum);
