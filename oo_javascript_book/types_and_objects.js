function Cat(name) {
  this.name = name;

  this.purr = function() {
    console.log(this.name + " purr");
  }
}
let butterscortch = new Cat("Butterscotch");
let pudding = new Cat("Pudding");
pudding.purr();

let student = {
  name: 'Joanna',
  age: 27,

  study() {
    console.log(`${this.name} is studying`);
  },

  pass() {
    console.log(`${this.name} has passed.`);
  },
};

student.study();
student.pass();
student2 = Object.assign({}, student);
student2.name = 'Bo';
student2.age = '12';
student2.pass();

//Ex1

let states = ['parked', 'takingOff', 'inFlight', 'Landing'];
let cessna152 = {
  name: 'Cessna 152',
  fuelCapacityGallons: 24.5,
  cruisingSpeedKnots: 111,
  state: states[0],

  takeOff() {
    this.state = states[1];
    console.log(`${this.name} is ${this.state}`);
  },

  land() {
    this.state = states[3];
    console.log(`${this.name} is ${this.state}`);
  }
};
cessna152.takeOff();
cessna152.land();

// Ex2
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

let book1 = new Book("Neuromancer", "William Gibson", "1984");
let book2 = new Book("Doomsday Book", "Connie Willis", "1992");
console.log([book1, book2]);

// Ex3
function Album(title, artist, year) {
  this.title = title;
  this.artist = artist;
  this.year = year; 
}

let album1 = new Album("Thriller", "Michael Jackson", "1982");
let album2 = new Album("The Dark Side of the Moon", "Pink Floyd", "1973");

console.log([album1, album2]);

//Ex4
function Phone(brand, model, year){
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.battery = 100;

  this.checkBattery = function() {
    return `${this.brand} ${this.model} has ${this.battery}% battery remaining.`;
  }

  this.getInfo = function() {
    return `${this.year} ${this.brand} ${this.model}`;
  }
}

let phone1 = new Phone("apple", "iphone 12", "2020");
let phone2 = new Phone("samsung", "galaxy s21", "2021");
console.log(phone1.getInfo());
console.log(phone2.checkBattery());