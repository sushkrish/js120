function Animal(name) {
  this.name;
}

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating.`);
};

function Mammal(name, hasFur) {
  Animal.call(this, name);
  this.hasFur = hasFur;
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

Mammal.prototype.sleep = function() {
  console.log(`${this.name} is sleeping.`);
};

function Dog(name, hasFur, breed) {
  Mammal.call(this, name, hasFur);
  this.breed = breed;
}

Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(`${this.name} the ${this.breed} ` + 'is barking.');
};

let myDog = new Dog('Rex', true, 'German Shepherd');
console.log(myDog instanceof Dog);     // true
console.log(myDog instanceof Mammal);  // true
console.log(myDog instanceof Animal);  // true

myDog.eat();    // Rex is eating.
myDog.sleep();  // Rex is sleeping.
myDog.bark();   // Rex the German Shepherd is barking.

let myMammal = new Mammal('Flipper', false);
console.log(myMammal instanceof Mammal);  // true
console.log(myMammal instanceof Animal);  // true

console.log(Dog.prototype.constructor.name);