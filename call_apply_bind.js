function a() {
  console.log('hi')
}

a.call();
a.apply()

// ex:1
const wizard = {
  name: "Merlin",
  health: 90,
  heal() {
    return this.health = 100;
  }
}

const archer = {
  name: "Robin Hood",
  health: 30 
}

wizard.heal();
console.log(wizard)

console.log(archer);
wizard.heal.call(archer)
console.log(archer)

// ex2
const wizard2 = {
  name: "Merlin Jr",
  heal(num1, num2) {
    return this.health += num1 + num2;
  }
}
console.log(archer);
wizard2.heal.call(archer, 50, 30)
console.log(archer);

wizard2.heal.apply(archer, [50, 90])

// bind: binds for later usage

const healArcher = wizard2.heal.bind(archer, 100, 100);
healArcher();
console.log(archer)

// Function Currying 

function multiply(a, b) {
  return a*b;
}

// no use of this here, the argument is of importance
let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));

let multiplyByTen = multiply.bind(null, 10);
console.log(multiplyByTen(3))