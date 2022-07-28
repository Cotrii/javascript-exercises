const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {

  // let val = 0;
	
  // for (let i = 0; i < arr.length; i++){
  //   val += arr[i];
  // }

  // return val;


  //.reduce method
  // return arr.reduce((total, val) => {
  //   return total + val;
  // }, 0);

  return arr.reduce((total, curr) => total + curr, 0); //much better
};

const multiply = function(arr) {

  return val = arr.reduce((total, val) => {
    return total * val;
  }, 1);
};

const power = function(a, b) {

  let val = a;

  for (let i = 1; i < b; i++){
    val *= a;
  }

  return val;

};

const factorial = function(a) {

  let fact = 1;

  for (let i = 1; i <= a; i++) {
    fact *= i;
  }

  return fact;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
