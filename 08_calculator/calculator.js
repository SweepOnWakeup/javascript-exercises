const add = function(num1, num2) {
  return num1+num2;
	
};

const subtract = function(num1, num2) {
  return num1-num2;
	
};

const sum = function(arrNums) {
  var iTot = 0
  for(var iLoop = 0; iLoop < arrNums.length; iLoop++){
    iTot = iTot+arrNums[iLoop]
  }
  return iTot
};

const multiply = function(arrNums) {
var iTot = 1
for(var iLoop = 0; iLoop < arrNums.length; iLoop++){
  iTot = iTot*arrNums[iLoop]
}
return iTot
};

const power = function(num1, num2) {
  return Math.pow(num1, num2)
};

const factorial = function(num1) {
  if(num1 == 0){
    return 1
  }
  var iTot = 1
	for(var iLoop = 1; iLoop <= num1; iLoop++){
    iTot = iTot*iLoop
  }
  return iTot
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
