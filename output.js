let x = 100;
{
  let x = 20;
  console.log(x); // What is the output?  20
}
console.log(x); // What is the output? 20

x = 50;
function xyz(){
    
    let x = 10;
if(true){
  let x = 20;
  console.log(x); // What is the output?  20
}
console.log(x); // What is the output? 20

}
console.log(x);

xyz();

//console.log(a); // What is the output?
var a = 5; // undefined



async function fetchData() {
    let success = false;
    
    try {
        if(success){
        return await Promise.resolve("Promise is resolved");

        }else{
            return await Promise.reject("Promise is rejected")
        }
    } catch (error) {
      console.error(`Some error occured` , error);
    }
  }
  
//   fetchData().then(console.log)
//   .catch(console.log); // What is the output? "Caught in try-catch"
  // Some error occured Promise is rejected

//   setTimeout(() => {
//     console.log("First");
//     setTimeout(() => {
//         console.log("Second");
//         setTimeout(()=> {
//             console.log("Third");
            
//         } , 100);
//     } , 200)
    
//   }, 300);

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  async function runInSequence() {
    await delay(300);
    console.log("First");
  
    await delay(200);
    console.log("Second");
  
    await delay(100);
    console.log("Third");
  }
  
  //runInSequence();
  
// callbacks hells
// to avoid this we use promise 

let p = new Promise((resolve, reject) => {
    resolve("Success");
  });
  
//   p.then((data) => {
//     console.log(data);
//     return "Next success";
//   }).then((data) => {
//     console.log(data);
//     throw new Error("Something went wrong!");
//   }).catch((error) => {
//     console.log(error.message);
//   }).then((data) => {
//     console.log("After error");
//   });

let user = { name: "John", age: 30 };
let { name, age } = user;
console.log(name); // What is the output?
console.log(age);  // What is the output?
const nums = [1,2,3];

const newArr = [...nums , 4 ,5];
console.log(newArr);
const operation = (...nums) => { return nums.reduce((total, num) => total + num , 0);}

console.log(operation(1 , 2 ,3 ,4 , 5)); /// 


function greet(name = "Guest") {
    return `Hello, ${name}!`;
  }
  
//   console.log(greet()); // What is the output?
//   console.log(greet("Alice")); // What is the output?
  
  (function() {
    console.log("Hello from IIFE");
  })(); // What is the output?
  

  const EventEmitter = require("events");
  const emitter = new EventEmitter();
  
  emitter.on("message", (data) => {
    console.log(`Message received: ${data}`);
  });
  
  emitter.emit("message", "Hello, World!"); // What is the output?
  

  const fs = require("fs");

// fs.readFile("nonexistent.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("Error occurred:", err.message);
//     return;
//   }
//   console.log("File content:", data);
// });


const promise1 = Promise.resolve("One");
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "Two"));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 1000, "Three"));

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => console.error(err));


  console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");


function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  let john = new Person("John");
  john.greet(); // What is the output?
  console.log(john.hasOwnProperty('greet')); // What is the output?

  const add = (x) => (y) => x + y;
const addFive = add(5);
console.log(addFive(10)); // What is the output?



class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog("Rex");
  dog.speak(); // What is the output?
  