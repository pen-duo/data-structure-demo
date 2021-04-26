function selectionSort(arr) {
  let len = arr.length,min
  for (let i = 0; i < len; i++) {
    min = i
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr
}
console.log(selectionSort([2, 1, 3]));