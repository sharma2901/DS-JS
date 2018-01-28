function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log('Step', i, arr);
    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

//Example

var arr = [21, 34, 321, 56, 87, 23, 24, 734, 978, 32, 6, 0, 7, 3, -67, -90];
console.log(bubbleSort(arr));
