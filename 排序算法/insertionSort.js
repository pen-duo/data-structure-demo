function insertionSort(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let j = i;
    let temp = arr[i]
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
  return arr
}
console.log(insertionSort([9,8,7,6,5,4,3,2,1]));