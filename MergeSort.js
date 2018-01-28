function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  var center = Math.floor(arr.length / 2);
  var left = arr.slice(0, center);
  var right = arr.slice(center);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
}

//Example

var arr = [21, 34, 321, 56, 87, 23, 24, 734, 978, 32, 6, 0, 7, 3, -67, -90];
console.log(mergeSort(arr));
