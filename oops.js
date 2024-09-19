class Car {
    constructor(brand) {
      this._brand = brand; // private variable convention
    }
  
    get brand() {
      return this._brand; // getter for encapsulated property
    }
  
    set brand(newBrand) {
      this._brand = newBrand; // setter for encapsulated property
    }
  
    startEngine() {
      console.log(`${this._brand}'s engine started`);
    }
  }
  
  const myCar = new Car('Toyota');
  myCar.startEngine(); // Outputs: "Toyota's engine started"
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks`);
    }
  }
  
  const dog = new Dog('Rex');
  dog.speak(); // Outputs: "Rex barks"


  class Animal {
    speak() {
      console.log("Animal makes a sound");
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log("Cat meows");
    }
  }
  
  const myCat = new Cat();
  myCat.speak(); // Outputs: "Cat meows"
  
  class CoffeeMachine {
    _brewCoffee() {
      console.log("Brewing coffee...");
    }
  
    makeCoffee() {
      this._brewCoffee(); // Users only interact with the public method
      console.log("Coffee is ready!");
    }
  }
  
  const machine = new CoffeeMachine();
  machine.makeCoffee();
  // Output: "Brewing coffee..."
  // "Coffee is ready!"
  