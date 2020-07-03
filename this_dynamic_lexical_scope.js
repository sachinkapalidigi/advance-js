// Dynamic and lexical scope for "this" keyword
// case 1:
const a = function () {
  console.log(this, "a");
  const b = function () {
    console.log(this, "b");
    const c = {
      hi: function () {
        console.log(this);
      }
    }
    c.hi();
  }
  b();
}
a()
// case 2:
const obj = {
  name: "billy",
  sing() {
    console.log("a", this);
    var anotherFunc = function() {
      console.log("b", this);
    }
    anotherFunc()
  }
}
obj.sing();
// here another function this is the global this, since obj didnot invoke it

// "this" is dynamically scoped, matters who called it , not where its written 
// quite opp to lexical scope behaviour of javascript

// how to avoid this pitfall

// 1. use of arrow functions
const obj1 = {
  name: "billy",
  sing() {
    console.log("a", this);
    var anotherFunc = () => {
      console.log("b", this);
    };
    anotherFunc();
  },
};
obj1.sing();
// arrow functions lexically binds this

// 2. user of "bind"
const obj2 = {
  name: "billy",
  sing() {
    console.log("a", this);
    var anotherFunc = function() {
      console.log("b", this);
    };
    anotherFunc.bind(this)();
  },
};
obj2.sing();

// 2. using a reference
const obj3 = {
  name: "billy",
  sing: function () {
    console.log(this)
    var self = this
    var anotherFunc = function () {
      console.log(self)
    }
    anotherFunc()
  }
}
obj3.sing()