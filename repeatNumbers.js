const camelCase = function(input) {
  for (let i = 0; i < input.length - 1; i++) { // look at entire string
    if (input[i,i + 1] === " ") { // if there is a space at pointer
      input = input.substring(0,i + 1) + input.substring(i + 2, i + 3).toUpperCase() + input.substring(i + 3, input.length);
      // string= - from the start to point, without the space, upperCase 1st letter, and add the rest on.
      i = 0;
      // then loop back through to double check. for extra space
    }

  }
  return input;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));