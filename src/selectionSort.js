function selectionSort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    let minIndex = i
    for (var j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex])
        minIndex = j
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
}
