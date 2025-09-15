/**
 * An object factory is simply a function that returns a new object. 
 * Each time the function is called, it creates a new instance of the object, 
 *  perhaps configured with different properties based on the arguments passed to it.
 * 
 * ++ When inheritance isn't needed, this is a straightforward way to create objects
 * ++ by passes execution context and the "this" complications.
 * 
 * -- uses high memory as the methods are copied, not shared.
 * -- if inheritance is needed, it's cumbersome.
 * -- objects from object factories don't have a "type", 
 *    can't use instanceof operator or the constructor property.
 * 
 * 
 */

function createCat(name, color, age) {
  return {
    name,
    color,
    age,

    speak() {
      console.log(
        `Meow. I am ${this.name}. ` +
        `I am a ${this.age}-year-old ${this.color} cat.`
      );
    }
  };
}

let cocoa = createCat("Cocoa", "black", 5);
let leo = createCat("Leo", "orange", 3);

cocoa.speak();
// Meow. I am Cocoa. I am a 5-year-old black cat.

leo.speak();
// Meow. I am Leo. I am a 3-year-old orange cat.


// Instaceof operator and constructor property fail for object factories
function Foo() {
  return {
    foo: 42,
  };
}

let obj = Foo();
console.log(obj instanceof Foo); // false
console.log(obj.constructor);    // [Function: Object]


//ex1
function createFruit(name, color) {
  return {
    name,
    color,

    isRipe: function() {
      return `This ${this.name} is ripe.`;
    },

    describe: function() {
      return `This ${this.name} is ${this.color}.`;
    },
  };
}

let apple = createFruit('Apple', 'Red');
let banana = createFruit('Banana', 'Yellow');
let blackberry = createFruit('Blackberry', 'Black');

console.log(apple.isRipe(), banana.describe(), blackberry.isRipe());

//ex2
function createPhone(brand, model, releaseYear) {
  return {
    brand,
    model,
    releaseYear,
    batteryLevel : 100,

    checkBattery : function() {
      return `Battery level is ${this.batteryLevel}%`;
    },

    getInfo : function(){
      return `This is a ${this.brand} ${this.model} phone from ${releaseYear}`;
    }
  };
}

let applePhone = createPhone('Apple', 'iPhone12', 2020);
let samsungPhone = createPhone('Samsung', 'GalaxyS21', 2021);

console.log(applePhone.getInfo(), samsungPhone.checkBattery());

//ex3

function createInstrument(name, type) {
  return {
    name,
    type,

    play: function() {
      return `We are playing a tune on this ${this.name}.`;
    },

    showType: function() {
      return `This ${this.name} is a ${this.type} instrument.`;
    },
  };
}

let violin = createInstrument('violin', 'string');
console.log(violin.play());     // We are playing a tune on this violin
console.log(violin.showType()); // This violin is a string instrument

let flute = createInstrument('flute', 'wind');
console.log(flute.play());      // We are playing a tune on this flute
console.log(flute.showType());  // This flute is a wind instrument

let drum = createInstrument('drum', 'percussion');
console.log(drum.play());       // We are playing a tune on this drum
console.log(drum.showType());   // This drum is a percussion instrument