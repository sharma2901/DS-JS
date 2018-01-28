function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var minIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    if (i !== minIndex) {
      var lesser = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

//Example

var arr = [21, 34, 321, 56, 87, 23, 24, 734, 978, 32, 6, 0, 7, 3, -67, -90];
console.log(selectionSort(arr));
