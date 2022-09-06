const reverseString = function(string) 
{
    sWord = string; 
    iLength = sWord.length;
    iPos = iLength-1;
    sRet = '';
    for(iLoop = 0; iLoop<iLength; iLoop++)
    {
        sRet = sRet + sWord.charAt(iPos);
        iPos--;
    }
    return sRet;
};

// Do not edit below this line
module.exports = reverseString;
