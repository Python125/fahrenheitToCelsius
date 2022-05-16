function convertToC(fahrenheit) {
  let celsius = (fahrenheit - 32)/1.8;
  return celsius;
};

console.log(convertToC(98.6));
