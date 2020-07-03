// exercise 1
var b = {
  name: "joy",
  say() {
    console.log(this);
  }
}

var c = {
  name: "lobo",
  say() {
    return function () {
      console.log(this);
    };
  }
}
var d = {
  name: "jay",
  say() {
    return () => console.log(this);
  }
}

b.say()
c.say()()
d.say()()


// exercise 2

const character = {
  name: "simon",
  getCharacter() {
    return this.name;
  }
}

const giveMeTheCharacterNow = character.getCharacter;

console.log("?", giveMeTheCharacterNow());

// how to fix the undefined issue here , the result should be "simon"