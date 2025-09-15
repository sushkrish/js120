/**
 * private fields and methods
 *  private field name starts with #, declared at top of class
 *  private method name starts with #
 * getters and setters
 *  methods for accessing and editing private fields.
 *  work like ordinary properties, without ()
 *  get and set keyword
 *  can be used in any object, not just classes
 *  A single leading underscore is a JavaScript convention that marks something as intended for internal use only.
 * static fields and methods
 *  static keyword
 */

class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  set age(num) {
    if (num < 0) throw new RangeError("Age can't be less than 0.");
    this.#age = num;
  }

  get age() {
    return this.#age;
  }

  showAge() {
    console.log(this.age);
  }
}

let person = new Person('John', 30);
person.showAge(); // 30
person.age = 31;
person.showAge(); // 31

try {
  // This line should raise a RangeError,
  // but does not.
  person.age = -5;
  person.showAge(); // -5
} catch (e) {
  // The following line should run, but won't
  console.log('RangeError: Age must be positive');
}

//ex2
class Book {
  #title;
  #author;
  #year;

  constructor(title, author, year) {
    this.#title = title;
    this.#author = author;
    this.year = year;
  }

  get title() {
    return this.#title;
  }

  get author() {
    return this.#author;
  }

  get year() {
    return this.#year;
  }

  set year(newYear) {
    if (typeof(newYear) !== 'number' || newYear < 1900) {
      throw new RangeError("Year must be greater than 1900.");
    } else {
      this.#year = newYear;
    }
  }
}

let book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
console.log(book.title);  // The Great Gatsby
console.log(book.author); // F. Scott Fitzgerald
console.log(book.year);   // 1925

book.year = 1932;         // Changing year
console.log(book.year);   // 1932

try {
  book.year = 1825;
} catch (e) {
  console.log(e);   // RangeError: Invalid year
}

try {
  let book2 = new Book('A Tale of Two Cities', 'Charles Dickens', 1859);
} catch (e) {
  console.log(e);   // RangeError: Invalid year
}


//ex5
class MathUtils {
  static add(num1, num2) {
    return num1 + num2;
  }

  static subtract(num1 , num2) {
    return num1 + num2;
  }

  static multiply(num1, num2) {
    return num1 * num2; 
  }

  static divide(num1, num2) {
    if (num2 === 0) {
      throw new RangeError("Division by zero");
    } else {
      return num1/ num2;
    }
  }
}

console.log(MathUtils.add(5, 3));       // 8
console.log(MathUtils.subtract(10, 4)); // 6
console.log(MathUtils.multiply(6, 7));  // 42
console.log(MathUtils.divide(20, 5));   // 4
console.log(MathUtils.divide(10, 0));   // RangeError: Division by zero
