function weird() {
  height = 50; //not allowed in strict mode : 'use strict'
  return height;
}

weird();

var hey = function doodle() {
  // doodle() // accesible here in its own lexical environment but it will call it self , stack overflow in this condition
  return "hey hey"
}

console.log(hey());
// doodle(); not accessible here : doodle is present in its own environment : not in the global env