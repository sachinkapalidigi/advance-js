function PrintHello() {
  console.log("Hello From Print Hello")
}

function baz() {
  setTimeout(PrintHello, 3000);
}

function bar() {
  console.log("2")
  baz()
}

function foo() {
  console.log("1")
  bar()
}

foo()