function CreateCar(make, fuelLevel, engineOn) {
  // To be implemented by you.
  this.make = make;
  this.fuelLevel = fuelLevel;
  this.engineOn = engineOn;

  this.startEngine = function() {
    this.engineOn = true;
  };

  this.drive = function() {
    this.fuelLevel -= 0.1;
  };

  this.stopEngine = function() {
    this.engineOn = false;
  };

  this.refuel = function(percent) {
    if ((this.fuelLevel + (percent / 100)) <= 1) {
      this.fuelLevel += (percent / 100);
    } else {
      this.fuelLevel = 1;
    }
  };
}

let raceCar1 = new CreateCar('BMW', 0.5, false);
raceCar1.drive();

let raceCar2 = new CreateCar('Ferrari', 0.7, true);
raceCar2.drive();

let raceCar3 = new CreateCar('Jaguar', 0.4, false);
raceCar3.drive();

//pp1
let book1 = {
  title: 'Mythos',
  author: 'Stephen Fry',
  getDescription: function() {
    return `${this.title} is a book by ${this.author}.`;
  },
};

let book2 = {
  title: 'Me Talk Pretty One Day',
  author: 'David Sedaris',
  getDescription: function() {
    return `${this.title} is a book by ${this.author}.`;
  },
};

let book3 = {
  title: "Aunts aren't Gentlemen",
  author: 'David Sedaris',
  getDescription: function() {
    return `${this.title} is a book by ${this.author}.`;
  },
}

console.log(book1.getDescription());
console.log(book2.getDescription());
console.log(book3.getDescription());

//pp2
// Yes, it duplicates the structure, and the getDescription function.

//pp3
function createBook(title, author, read = false){
  return {
    title, //shorthand for title: title
    author, //shorthand for author: author
    read, //for pp4 and pp5

    getDescription: function() {
      //pp7
      let desc = `${this.title} is a book by ${this.author}.`
      let readStatus = this.read? "I have read it" : "I haven't read it";
      return desc + " " + readStatus;
    },

    //pp6
    readBook: function() {
      this.read = true;
    },
  };
}

book1 = createBook('Mythos', 'Stephen Fry');
book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

console.log(book1.getDescription());

console.log(book2.getDescription());
book2.readBook();
console.log(book2.getDescription());

console.log(book3.getDescription());
