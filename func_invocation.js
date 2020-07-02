// function has its own invocation context
// function has access to "this" and "arguments"
// also the variables environment

function marry(person1, person2) {
  console.log(arguments, "arguments");
  console.log(Array.from(arguments));
  return `${person1} is now married to ${person2}`
}

console.log(marry());

console.log(marry('a', 'b'));

function marry2(...args){
  console.log(args, "arguments");
  console.log(Array.from(arguments));
  return `${args[0]} married to ${args[1]}`
}

console.log(marry2());
console.log(marry2('a', '2'));

