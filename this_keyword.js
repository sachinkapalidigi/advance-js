// "this" is the object that the function is a property of

function a() {
  console.log(this, "a");
}
a();
// this.a(); // not valid in node only in browser gets added to window object
// when we invoke a(), we are actually doing window.a() in browser or global.a() in node, the global execution context

function b() {
  'use strict'
  console.log(this, "b")
}
b();
// this will be undefined here

const obj = {
  name: "billy",
  sing: function () {
    return "lalala "+this.name
  },
  singAgain(){
    return this.sing() + "!!!"
  }
}
console.log(obj.sing());
console.log(obj.singAgain());
// this is the object the function is a property of

// use of this
// 1. gives methods access to their object
// 2. execute same code for multiple objects

// variables declared using the var keyword get defined on window and variables declared with const and let not defined on window

function importantPerson( ) {
  console.log(this.name + "!");
}

// const name = "sunny";
var name = "sunny"; // not available in node => this.
const obj1 = {
  name: "cossy",
  importantPerson: importantPerson
}
const obj2 = {
  name: "jacob",
  importantPerson: importantPerson
}
console.log(this.name); // result is different for node and browser
importantPerson(); // result is different for node and browser
obj1.importantPerson();
obj2.importantPerson();
// this => means, who(object) called me

// Node.js is different from client Side JavaScript when it comes to global variables. 