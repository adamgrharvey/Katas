const squareCode = function(message) {
  message = message.toLowerCase();
  message = message.replace(/\s/g, '');
  let output = "";

  for (let i = 0; i < Math.ceil(Math.sqrt(message.length)); i++) {
    for (let j = i; j < message.length; j = j + Math.ceil(Math.sqrt(message.length))) {
      if (message[j] !== undefined) {
        output += message[j];
      }
    }
    output += " ";
  }
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));