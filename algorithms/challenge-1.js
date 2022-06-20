function secondLargest(arr) {
    arr.sort((a, b) => b - a);
    return arr[1]
}
module.exports = secondLargest