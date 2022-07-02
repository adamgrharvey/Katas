const sumLargestNumbers = function(data) {
  let biggest = 0;
  let secBiggest = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > biggest) {
      secBiggest = biggest;
      biggest = data[i];
      continue;
    }
    if (data[i] > secBiggest) {
      secBiggest = data[i];
    }
  }
  return (biggest + secBiggest);
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));