function sumTwoSmallestNums(arr) {
  let positiveNum = arr.filter(arr => arr > 0).sort((a,b) => a - b)
  return positiveNum[0] + positiveNum[1]
  
 }
  module.exports =sumTwoSmallestNums