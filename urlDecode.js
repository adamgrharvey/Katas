const urlDecode = function(text) {
  let output = {

  };
  let strings = [];

  // this for loop separates the initial string into separate strings in an array, separated by the &
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '&') {
      strings.push(text.substring(0,i));
      text = text.substring(i + 1,text.length);
    }
  }
  strings.push(text);

  // this for loop replaces instances of %20 with whitespace
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].replaceAll("%20", " ");
  }
  
  // this nested for loop iterates through the array 'strings' and adds the key and its value to the output object.
  for (const i in strings) {
    for (let j = 0; j < strings[i].length; j++) {
      if (strings[i][j] === '=') {
        output[strings[i].substring(0,j)] = strings[i].substring(j + 1,strings[i].length);
      }
    }
  }
  
  return output;

};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);