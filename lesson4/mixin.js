//ex1
const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}
Object.assign(Car.prototype, Speed);

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}
Object.assign(Truck.prototype, Speed);

let car = new Car();
car.goSlow();
car.goFast();

let truck = new Truck();
truck.goVerySlow();
truck.goFast();

console.log('goFast' in car);
console.log('goFast' in truck);

//ex3
const Wheeled = {
  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  },

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
};

const Finned = {

}

class Vehicle {
  constructor(kmTravelledPerLiter, fuelCapInLiter) {
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  range() {
    return this.fuelCap *  this.fuelEfficiency;
  }
}

class Auto extends Vehicle {
  constructor() {
    // the array represents tire pressure for four tires
    this.tires = [30,30,32,32];
    super(50, 25.0);
  }
}

Object.assign(Auto.prototype, Wheeled);

class Motorcycle extends Vehicle {
  constructor() {
    // array represents tire pressure for two tires
    this.tired = [20,20];
    super(80, 8.0);
  }
}

Object.assign(Motorcycle.prototype, Wheeled);

class Catamaran extends Vehicle{
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic
    super(kmTravelledPerLiter, fuelCapInLiter);
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
  }
}

Object.assign(Catamaran, Finned);