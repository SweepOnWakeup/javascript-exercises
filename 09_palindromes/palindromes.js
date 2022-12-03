const palindromes = function (sLine) {
    sLine = sLine.replace(/[^a-zA-Z0-9]/g,'')
    sLine = sLine.toLowerCase()
    var sCheck = ''
    var iLoop = sLine.length - 1
    for(iLoop; iLoop>=0; iLoop--){
        sCheck = sCheck + sLine.charAt(iLoop)
    }

    return sLine === sCheck
};

// Do not edit below this line
module.exports = palindromes;
