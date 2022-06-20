function sumMix(arr) {
    let allNum = []
   const num =  arr.filter( arr => typeof arr === 'number')
    const strToNum = arr.filter( arr => typeof arr !== 'number').map(a => Number(a))
    allNum.push(...num, ...strToNum)
    

    const sumTotal = allNum.reduce((previousValue, currentValue) => previousValue + currentValue)
     return sumTotal;
    // let sumTotal = 0;
    // for( let i = 0; i < arr.length; i++){
    //     if(typeof arr[i] !== 'number'){
    //         arr[i] = ParseInt(arr[i])
    //         sumTotal += arr[i]
    //     }
    // }
    // return sumTotal
 }

  module.exports = sumMix