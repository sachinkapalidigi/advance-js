function sayMyName() {
  var a = 'a';
  console.log(a);
  return function findName() {
    var b = 'b';
    console.log(a, b);
    // console.log(c); reference error here 
    return function printName() {
      var c = 'c';
      console.log(a, b, c);
      return 'sachin'
    }
  }
}

sayMyname()()();