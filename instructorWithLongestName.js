const urlEncode = function(text) {
  text = text.trim();
  for (let i = 0; i < text.length - 1; i++) {
    if (text[i] === ' ' && text[i + 1] !== ' ') {
      text = text.replace(' ', '%20');
    }
  }
  return text;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));