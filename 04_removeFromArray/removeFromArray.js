const removeFromArray = function(arrList, ...args) 
{
    
    var iCheck
    for(iInd = 0;iInd<=args.length; iInd++)
    {
        
        iCheck = arrList.indexOf(args[iInd])
        if (iCheck>=0)
        {
            
            arrList.splice(iCheck, 1)
        }
    }
    return arrList

};

// Do not edit below this line
module.exports = removeFromArray;
