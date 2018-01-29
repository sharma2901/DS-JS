/**
 * Simplest implementation for quick sort algorithm
 */
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var left = [];
  var right = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return quickSort(left)
    .concat(pivot)
    .concat(quickSort(right));
}

//Example

var arr = [21, 34, 321, 56, 87, 23, 24, 734, 978, 32, 6, 0, 7, 3, -67, -90];
console.log(quickSort(arr));
