// javascript is a functon scope , most other languages are blocked scoped

// functional scope meaning 
if(5>4) {
  var secret = '12345';
}
// we have access to secret variable here
console.log(secret);

// other languages are block scoped : where secret will not be available outside the block in which it is declared in

function a() {
  var secret2 = "xyz";
}
// secret is not accessible here

// Javascript with es5 and es6 , with introduction of const and let , it made variable declaration block scoped
// meaning

if(5>4) {
  const secret3 = "5678";
}
// console.log(secret3); // this is not accessible here , only accessible in its block 


// one more example
function loop() {
  for(var i=0; i<5; i++) {
    console.log(i)
  }
  console.log("final", i);
  // accessible here: function scope
}
loop();

function loop2() {
  for(let i=0; i<5; i++) {
    console.log(i)
  }
  // console.log("final", i)
  // reference error : i not defined
}
loop2()