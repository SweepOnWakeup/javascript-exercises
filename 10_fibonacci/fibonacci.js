const fibonacci = function(iNum) {
    const arrNums = [1, 1]

    if(iNum == 1 || iNum == 2){
        return 1
    }
    if(iNum<1){
        return "OOPS"
    }

    for(var iLoop = 2; iLoop < iNum; iLoop++){
        arrNums[arrNums.length] = arrNums[iLoop-1] + arrNums[iLoop-2]
    }
    return arrNums[arrNums.length - 1]

};

// Do not edit below this line
module.exports = fibonacci;
