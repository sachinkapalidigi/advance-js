console.log("1_______________")

// var is partially hoisted, function declaration fully
console.log(sing);
console.log(sing2());
console.log(sing3);


var sing = "la la la la sing";

// function declaration
function sing2 () {
  console.log("ha la la ha sing 2");
}

// function expression , not declaration: not hoisted like declared functions 
var sing3 = function() {
  console.log("ooo lalal la sing3");
}

// var and function hoisted only
// const , let are not hoisted

// below function is not hoisted
(function sing4(){
  console.log("sing 4")
})