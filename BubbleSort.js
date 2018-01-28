function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        var lesser = arr[j];
        arr[j] = arr[i];
        arr[i] = lesser;
      }
    }
  }
  return arr;
}

//Example

var arr = [21, 34, 321, 56, 87, 23, 24, 734, 978, 32, 6, 0, 7, 3, -67, -90];
console.log(bubbleSort(arr));
