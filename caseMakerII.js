const pascal = function(input) {
  for (let i = 0; i < input.length - 1; i++) { // look at entire string
    if (input[i,i + 1] === " ") { // if there is a space at pointer
      input = input.substring(0, i + 1) + input.substring(i + 2, i + 3).toUpperCase() + input.substring(i + 3, input.length);
      // string= - from the start to point, without the space, upperCase 1st letter, and add the rest on.
      i = 0;
      // then loop back through to double check. for extra space
    }

  }
  return (input[0].toUpperCase() + input.substring(1)).trim();
};

const snake = function(input) {
  input = input.trim();
  for (let i = 0; i < input.length; i++) {
    input = input.replace(" ", "_");
  }
  return input.trim();
};

const kebab = function(input) {
  input = input.trim();
  for (let i = 0; i < input.length; i++) {
    input = input.replace(" ", "-");
  }
  return input.trim();
};

const title = function(input) {
  input = input[0].toUpperCase() + input.substring(1);
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      input = input.substring(0, i + 1) + input.substring(i + 1, i + 2).toUpperCase() + input.substring(i + 2);
    }
  }
  return input.trim();
};

const vowel = function(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
      input = input.substring(0, i) + input.substring(i, i + 1).toUpperCase() + input.substring(i + 1);
    }
  }
  return input.trim();
};

const consonant = function(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== "a" && input[i] !== "e" && input[i] !== "i" && input[i] !== "o" && input[i] !== "u" && input[i] !== " ") {
      // if you find something that isnt a vowel or a " "
      input = input.substring(0, i) + input.substring(i, i + 1).toUpperCase() + input.substring(i + 1);
      // replace it with a captialized version of that consonant
    }
  }
  return input.trim();
};

const camel = function(input) {
  for (let i = 0; i < input.length - 1; i++) { // look at entire string
    if (input[i,i + 1] === " ") { // if there is a space at pointer
      input = input.substring(0 , i + 1) + input.substring(i + 2, i + 3).toUpperCase() + input.substring(i + 3, input.length);
      // string= - from the start to point, without the space, upperCase 1st letter, and add the rest on.
      // then loop back through to double check. for extra space
    }

  }
  return input.trim();
};

const makeCase = function(input, styles) {
  if (typeof styles === 'string') {
    switch (styles) {
    case "camel": return camel(input);
    case "pascal": return pascal(input);
    case "snake": return snake(input);
    case "kebab": return kebab(input);
    case "title": return title(input);
    case "vowel": return vowel(input);
    case "consonant": return consonant(input);
    case "upper": return input.toUpperCase();
    case "lower": return input.toLowerCase();
    }
  } else {
    for (let i = 0; i < styles.length; i++) {
      switch (styles[i]) {
      case "camel": input = camel(input); continue;
      case "pascal": input = pascal(input); continue;
      case "snake": input = snake(input); continue;
      case "kebab": input = kebab(input); continue;
      case "title": input = title(input); continue;
      }
    }
    for (let i = 0; i < styles.length; i++) {
      switch (styles[i]) {
      case "consonant": input = consonant(input); continue;
      case "vowel": input = vowel(input); continue;
      }
    }
    for (let i = 0; i < styles.length; i++) {
      switch (styles[i]) {
      case "upper": input = input.toUpperCase(); continue;
      case "lower": input = input.toLowerCase(); continue;
      }
    }
  }
  return input;
};


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));