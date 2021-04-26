function shellSort(arr) {
  let len = arr.length;
  let gap = Math.floor(len / 2)
  while (gap >= 1) {
    for (let i = gap; i < len; i++) {
      var j = i
      var temp = arr[i]
      while (arr[j - gap] > temp && j > gap - 1) {
        arr[j] = arr[j - gap]
        j -= gap
      }
      arr[j] = temp
    }
    gap = Math.floor(gap / 2)
  }
  return arr
}
console.log(shellSort([2, 3, 1]));