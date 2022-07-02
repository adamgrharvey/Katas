const multiplicationTable = function(maxValue) {
  let out = "";
  for (let i = 1; i < maxValue + 1; i++) {
    for (let j = i; j < maxValue * (i) + 1; j = j + i) {
      out += (j + " ");
    }
    out += "\n"; // separate lines
    
    out = out.substring(0,out.length - 2) + ("\n"); // remove extra space at end of each line

  }
  return out;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));