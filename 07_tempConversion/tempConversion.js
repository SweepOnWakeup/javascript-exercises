const ftoc = function(nTemp) {  //formula f=(c*1.8)+32
  nTemp=(nTemp-32)/1.8
  if(nTemp%1==0){
    return nTemp
  }
  fRet = parseFloat(nTemp.toFixed(1))
  console.log(fRet)
  return fRet
};

const ctof = function(nTemp) {  //formula c=(f-32)/1.8
  nTemp=(nTemp*1.8)+32
  if(nTemp%1==0){
    return nTemp
  }
  fRet = parseFloat(nTemp.toFixed(1))
  console.log(fRet)
  return fRet
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
