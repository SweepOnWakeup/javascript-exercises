const repeatString = function(string, num) 
{
    sLine=''
    if (num < 0)
    {
        return "ERROR"
    }
    
    for(iCount = 0; iCount<num; iCount++)
    {
        sLine = sLine + string;
    }
    return sLine;
};

// Do not edit below this line
module.exports = repeatString;
