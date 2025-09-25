//ex1
function Phone(brand, model, releaseYear) {
  this.brand = brand;
  this.model = model;
  this.releaseYear = releaseYear;
  this.batteryLevel = 100;
}

Phone.prototype.checkBattery = function() {
  return `Battery level is ${this.batteryLevel}%`;
}

Phone.prototype.getInfo = function() {
  return `This is a ${this.brand} ${this.model} phone from ${this.releaseYear}.`;
}

let applePhone = new Phone('Apple', 'iPhone12', 2020);
let samsungPhone = new Phone('Samsung', 'GalaxyS21', 2021);

console.log(applePhone.getInfo(), samsungPhone.checkBattery());

//ex2
function Vehicle(color, weight) {
  this.color = color;
  this.weight = weight;
}

Vehicle.prototype.accelerate = function() {
  console.log(`accelerating.`);
}

Vehicle.prototype.decelerate = function() {
  console.log(`decelerating.`);
}

function Car(color, weight, licenseNumber)  {
  Vehicle.call(this, color, weight);
  this.licenseNumber = licenseNumber;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function() {
  console.log(`car is honking!`);
};

function Boat(color, weight, homePort) {
  Vehicle.call(this, color, weight);
  this.homePort = homePort;
}
Boat.prototype = Object.create(Vehicle.prototype);
Boat.prototype.constructor = Boat;

Boat.prototype.dropAnchor = function() {
  console.log(`boat is dropping anchor.`);
};

function Plane(color, weight, airline) {
  Vehicle.call(this, color, weight);
  this.airline = airline;
}

Plane.prototype = Object.create(Vehicle.prototype);
Plane.prototype.constructor = Plane;

Plane.prototype.takeOff = function() {
  console.log('Taking off');
};

Plane.prototype.land = function() {
  console.log('Landing');
};

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