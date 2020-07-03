// minimise use of global variable 

// reason
// 1. save memory, and potentially causing memory leak
// 2. variable collision and pollution 

// using iife we can avoid this 
// immediatelu executable function expression

(function (){
  console.log("immediately executed");
}())

// usage
var script1 = (function () {
  var z = "this is z";
  function a() {
    return 5;
  };
  return {
    a: a,
    z: z
  }
}())


console.log(script1.a(), script1.z);

// also for optimisation , globally declared vars or functions can be sent as a parameter to optimise and avoid global lookup

var myName = "sachin";

var script2 = (function (mn) {

  function printMyName() {
    console.log(mn);
  }
  return {
    printMyName: printMyName
  }
})(myName);

script2.printMyName();

// Node.js is different from client Side JavaScript when it comes to global variables. 