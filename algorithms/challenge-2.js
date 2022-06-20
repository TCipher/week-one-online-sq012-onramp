function filterArray(arr) {
  return arr.filter( arr => typeof arr === 'number')
//   for(i = 0; i < arr.length; i++){
//     if(typeof arr[i] === 'number'){
//         return arr[i]
//     }
//   }
}

module.exports = filterArray