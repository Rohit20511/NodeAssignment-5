var lib = {};

lib.multiplier = (number1, number2)=>{
  if (typeof number1 === "number" && typeof number2 === "number") {
    return number1 * number2;
  }
  return "The passed parameters but be numerical";
};


lib.palindrome = (str)=>{
  str = str.trim();
  str = str.toLowerCase();

  var reverseStr = str.split('').reverse().join('');

  return str == reverseStr;
};

module.exports = lib;
