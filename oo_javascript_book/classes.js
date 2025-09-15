/**
 * Classes in js are sytantic sugar over protypal inheritance. it's not a separate concept.
 * It also solves the disadvantages of using object factories.
 * 
 * When you need inheritance.
+ When your inheritance needs are complex.
+ When you're interested in writing readable OO code.
+ When your team prefers to use classes.
+ When you need many objects with methods.
+ When the types of your objects are essential to your application.
+ When your application already uses classes.
+ When writing code meant for use with TypeScript.
 */

//ex1
class Phone {
  constructor(brand, model, releaseYear) {
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
    this.batteryLevel = 100;
  }

  checkBattery() {
    return `Battery level is ${this.batteryLevel}%`;
  }

  getInfo() {
    return `This is a ${this.brand} ${this.model} phone from ${this.releaseYear}`;
  }
}

let applePhone = new Phone('Apple', 'iPhone12', 2020);
let samsungPhone = new Phone('Samsung', 'GalaxyS21', 2021);

console.log(applePhone.getInfo(), samsungPhone.checkBattery());

//ex2
console.log(applePhone instanceof Phone);

//ex3
class Vehicle {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
  }

  accelerate() {
    console.log(`accelerating.`);
  }

  decelerate() {
    console.log(`decelerating.`);
  }
}

class Car extends Vehicle {
  constructor(color, weight, licenseNumber) {
    super(color, weight);
    this.licenseNumber = licenseNumber;
  }

  honk() {
    console.log(`car is honking!`);
  }
}

class Boat extends Vehicle {
  constructor(color, weight, homePort) {
    super(color,weight);
    this.homePort = homePort;
  }

  dropAnchor() {
    console.log(`boat is dropping anchor.`);
  }
}

class Plane extends Vehicle {
  constructor(color, weight, airline) {
    super(color, weight);
    this.airline = airline;
  }

  takeOff() {
    console.log('Taking off');
  }

  land() {
    console.log('Landing');
  }
}


let car = new Car('red', 3300, 'BXY334');
car.accelerate();             // Accelerate
car.honk();                   // Honk
car.decelerate();             // Decelerate
console.log(car.color, car.weight, car.licenseNumber);
// red 3300 BXY334

let boat = new Boat('yellow', 12000, 'Bahamas');
boat.accelerate();            // Accelerate
boat.decelerate();            // Decelerate
boat.dropAnchor();            // Drop anchor
console.log(boat.color, boat.weight, boat.homePort);
// yellow 12000 Bahamas

let plane = new Plane('blue', 83000, 'Southwest');
plane.accelerate();           // Accelerate
plane.takeOff();              // Take off
plane.land();                 // Land
plane.decelerate();           // Decelerate
console.log(plane.color, plane.weight, plane.airline);
// blue 83000 Southwest


//ex4
console.log(car instanceof Vehicle);
console.log(boat instanceof Vehicle);
console.log(car instanceof Car);
console.log(boat instanceof Car); // false