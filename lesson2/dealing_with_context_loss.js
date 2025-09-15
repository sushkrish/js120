/**
 * Three cases of context loss:
 * 1. Method copied from an object and used elsewhere as a bare function
 * 2. Inner function not using the surrounding context
 * 3. Function as argument losing surrounding context ( same as method copied case)
 * 
 * Solutions include:
 *  1. 3. binding the function 
 *  1.2.3. passing this as a parameter
 *  2. call with explicit context (call or apply)
 *  2.3. use self = this, use arrow function
 */

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings: function() {
    repeatThreeTimes(() => console.log('hello, ' + this.firstName + ' ' + this.lastName))
  },
};

john.greetings();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined

//pp1
let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription: function() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);

//pp2
const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    }, this);
  }
};

TESgames.listGames();

//pp8
let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    };

    increment.call(this);
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);

let logResult = function(func) {
  let result = func();
  console.log(result);
  return result;
};

//quiz-2 Q11

let logResult2 = function(func) {
  let result = func();
  console.log(result);
  return result;
};

let boo = function() {
  let sue = {
    name: 'Sue Perkins',
    age: 37,
    myAge() {
      return `${this.name} is ${this.age} years old.`;
    },
  };
  logResult2(sue.myAge.bind(sue));
};

boo();

//qui-2 Q12
let cats = {
  names: [ 'Butterscotch', 'Pudding', 'Fluffy' ],
  foo() {
    [1, 2, 3].forEach((function (number) {
      console.log(`${number}: ${this.names[number - 1]}`);
    }).bind(this));
  },
};

cats.foo();