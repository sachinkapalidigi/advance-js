// lexixal scope (available data + variables where function was defined) ...L>
// determine our available variables.Not where the function is called(dynamic scope)
var x = 'x';

function findName() {
  console.log(x);
  // console.log(a, "a");
  var b = 'b'
  return printName()
}

function printName() {
  var c = 'c';
  // console.log(b, "b"); will not have access: i.e lexical scope where function is defined , check there whethen it has access to variable not where its invoked
  // console.log(a, "a");
  return 'sachin'
}

function sayMyname() {
  var a = 'a';
  return findName()
}

sayMyname()


