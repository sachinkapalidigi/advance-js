// each execution context has its own variable environment
function two() {
  var isValid;
  console.log(isValid); // two's execution context
}

function one() {
  var isValid = true;
  console.log(isValid) // one's execution context
  two();
}

var isValid = false;
console.log(isValid) //global context
one();