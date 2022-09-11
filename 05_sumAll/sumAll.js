const sumAll = function (iFirst, iSecond) {
    var iLow = 0
    var iSum = 0

    //Check if parameters ar numbers
    if(!Number.isInteger(iFirst) || !Number.isInteger(iSecond)){
        return "ERROR"
    }

    //Check if parameters are greater or equal to zero
    if (iFirst >= 0 && iSecond >= 0) {
        
        //Check which is larger
        if (iFirst < iSecond) {
            iLow = iFirst
        }
        else {
            iLow = iSecond
            iSecond = iFirst
        }
        for (iLow; iLow <= iSecond; iLow++) {
            iSum = iSum + iLow
        }
        return iSum
    }
    else {
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = sumAll;
