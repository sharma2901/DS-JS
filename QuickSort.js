function quickSort(arr, low, high) {
  low = low || 0;
  high = high || arr.length - 1;
  var pivoteIndex = low;
  var pivot = arr[pivoteIndex];
  var i = low,
    j = high;
  while (i <= j) {
    while (arr[i] < pivot) i++;
    while (arr[j] > pivot) j--;
    if (i <= j) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
  if (low < j) quickSort(arr, low, j);
  if (i < high) quickSort(arr, i, high);
  return arr;
}

//Example

var arr = [21, 34, 321, 56, 87, 23, 24, 734, 978, 32, 6, 0, 7, 3, -67, -90];
console.log(quickSort(arr));
