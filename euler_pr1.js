// FIND THE SUM OF ALL MULTIPLES OF 3 AND 5 BELOW 1000

var sum = 0;

for (var i = 0; i < 1000; i++){
	
if (i % 3 === 0 || i % 5 === 0){
	sum += i;
}
}

console.log(sum);

