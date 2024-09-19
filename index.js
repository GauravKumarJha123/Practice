// showing difference between let const and var

// var is functional scoped whereas let and const are block scoped

//xyz(); // top of scope
const https = require('https');
function xyz(){
    var a = 100;
    if(true){
        a = 10;
    }
    console.log(a);
    
}

function abc(){
    let b = 100;
    const c = 50;
    if(true){
        b = 20;
        //c = 40;
    }
    console.log(b);
    console.log(c);   // reference error when trying for block scope typeerror assignment to a const variable  
}

xyz();
abc();

// since the whole code of the function is there in the memory component so the execution context is has the whole code 

// now for this keyword 

// The this keyword refers to the object that is executing the current function. 
// Its value depends on the context in which it is used.

/*
Global Context (in non-strict mode): this refers to the global object (window in browsers).
Method Context: When this is used in an object’s method, it refers to the object that owns the method.
Arrow Functions: Arrow functions don’t have their own this. Instead, they inherit this from the surrounding lexical context.

*/
const person = {
    name : 'John',
    age : 30,
    greet : function () {
        console.log(this.name); // john because this refers to the person obj in which it is declared        
    }
}

const arrowFunction = () => {
    const name = 'Jane';
    console.log(this.name);
}

const person2 = {
    name : 'Veeresh',
    age : 30,
    greet : arrowFunction
}

person.greet() // john 
person2.greet() // undefined because arrow functions inherit this form their lexical scope and not the current scope

// closures and why they are useful 
// a functions bundled with it's lexical scope i.e. parent 
// it's surrounding state as well as lexical parent 


// example 
function outerFunction(){
    let cnt = 0;
    return function incrementCounter(){
        cnt++;
        console.log(cnt);        
    }
}

// const increment = outerFunction();
// increment();
// increment();


function Counter() {
    //constructor function. Good coding would be to capitalize first letter of constructor function.
     var count = 0;
     this.incrementCounter = function() { //anonymous function
     count++;
     console.log(count);
     }
     this.decrementCounter = function() {
     count--;
     console.log(count);
     }
    }
    // var counter1 = new Counter(); // new keyword for constructor fun
    // counter1.incrementCounter();
    // counter1.incrementCounter();
    // counter1.decrementCounter();

    /*
Overconsumption of memory when using closure as everytime as those closed over variables are not garbage
collected till program expires. So when creating many closures, more memory is accumulated and this can create memory
leaks if not handled.

    */


// == vs === loose vs strict
// undefined false 0 -0 "" null NAN rest other are falsy value
// console.log(5 == '5');  // true (because '5' is coerced auto casting into a number)
// console.log(5 === '5'); // false (different types: number and string)
// always use === to avoid unexpected behaviors 


// prototypal inheritance how does it works in js 

function Person(name){
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
//   const john = new Person('John');
//   john.greet(); // "Hello, my name is John"

  // answer is there
  // Here, greet is defined on the Person.prototype, so every instance of Person inherits it.

  const arr = [1,2,3,4,5,6]
  const doubleArr = arr.map( num => num * 2);

  const divideByTwo = arr.filter(num => num % 2 === 0);

  const sumOfArray = arr.reduce( (acc, curr) => {
    return acc + curr;
  } , 0 );

//   console.log(doubleArr);
//   console.log(divideByTwo);
//   console.log(sumOfArray);
  
  // event loop 
  // helps in executing non blocking operations 
  // we have both sync calls and async calls sync calls will block the thread
  // any function part of web api setTimeout setInterval I/O operations are macro task which are placed in the task queue 
  // and are processed after microtask ie.e promises process.nexttick 

// console.log("Hi There")

// setTimeout(() => {
//     console.log("Inside Macro task will be printe at last");
    
// } , 0);

// Promise.resolve().then( () => {
//     console.log("Inside MicroTask will be printed second");
    
// })

// console.log("I am Gaurav");
// sure promises 


const promise = new Promise((resolve , reject) => {
    const success = true;

    if(success){
        resolve("Op Successful")
    }else{
        reject("Op unsuccessful");
    }
});

console.log(typeof promise);

// promise
// .then(result => console.log(result)) // these are my arguments passed to the respective cb functions
// .catch(gaurav => console.log(gaurav));
// both result and gaurav will act as argument holding the value returned form these 
// reject and resolve function with a relevant message
/*
When explaining the `promise` code snippet to an interviewer, you can refer to `result` and `error` as arguments that are passed to the respective callback functions within the `.then()` and `.catch()` methods of the Promise's resolution or rejection handling.

Here is how you might describe them:

"The `promise` variable is assigned to a new Promise object, which takes a single argument: an executor function. The executor function further takes two arguments, `resolve` and `reject`, which are themselves functions used to resolve or to reject the promise, respectively.

Inside the promise, we simulate an asynchronous operation with `success` being a boolean that determines the outcome. If `success` is `true`, we call `resolve` with the message `'Operation successful'`. If not, we call `reject` with the message `'Operation failed'`.

The `promise` is then followed by a `.then()` method call, which takes a callback function as its argument. This callback is executed if the Promise is successfully resolved. The parameter `result` is the argument that will hold the resolved value of the Promise, which is `'Operation successful'` in this case.

There is also a `.catch()` method call, which takes a callback function as well. This callback is executed if the Promise is rejected. The parameter `error` is the argument that will hold the error information from the Promise's rejection, which would be `'Operation failed'` if the `success` variable was `false`.

In conclusion, `result` and `error` can be referred to as parameters or arguments to the `then` and `catch` callback functions, respectively. These callback functions are used to handle the fulfilled result or the rejection error of the Promise."


*/


// async and await work in js 
// these are just syntax sugar built on top of promises in es6
// it allows us to write js code that is async to look sync 
// once that particular promises is resolved then go to the next one 
// async: Declares a function as asynchronous, which means it implicitly returns a promise.
// Inside an async function, you can use the await keyword.
// await: Pauses the execution of the function until the promise is resolved or rejected.

//const https = require('https'); // Require the 'https' module

function fetchData() {
    return new Promise((resolve , reject) => {
        https.get('https://jsonplaceholder.typicode.com/todos/1', (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(JSON.parse(data)));
        }).on('error', reject);
    });
}

async function fetchAsync(){
    try {
        const data = await fetchData();
        console.log(data);        
    } catch (error) {
        console.error(`Error`, error);
    }
}

fetchAsync();

// how does it make and aysnc code looks synchronous 
/* 
Synchronous-Like Flow: With async/await, the flow of the code is linear, much like synchronous code. The await keyword pauses the execution of the async function until the awaited Promise resolves or rejects, before moving on to the next line.

Error Handling: Traditional promise-based code often requires .then() and .catch() for error handling, which can lead to deeply nested structures. async/await allows you to use standard try/catch blocks around asynchronous code as you would with synchronous code.

Eliminates Callbacks: Instead of chaining several .then() calls with callbacks, you can simply await each asynchronous operation one after the other, leading to code that is less nested and more straight-line.

Readability and Maintenance: Because async/await improves the structure and readability of the code, it becomes easier to maintain and update, especially when it comes to long sequences of asynchronous operations.



*/

// only advatage of having asycn await is having to avoid promise chain


function fetchAsyncCall1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Async Call 1");
        resolve("Data from call 1");
      }, 2000); // delays for 2 seconds
    });
  }
  
  function fetchAsyncCall2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Async Call 2");
        resolve("Data from call 2");
      }, 1000); // delays for 1 second
    });
  }
  
  function fetchSequentialPromises() {
    fetchAsyncCall1()
      .then((data1) => {
        console.log(data1);
        return fetchAsyncCall2(); // Fetches data 2 after data 1 is fetched
      })
      .then((data2) => {
        console.log(data2);
      })
      .catch((error) => {
        console.error(`Error`, error);
      });
  }
  
  async function fetchAsyncSequentially() {
    try {
      const data1 = await fetchAsyncCall1(); // Waits for fetchAsyncCall1 to resolve
      console.log(data1); // Logs: "Data from call 1"
      
      const data2 = await fetchAsyncCall2(); // Waits for fetchAsyncCall2 to resolve
      console.log(data2); // Logs: "Data from call 2"
      
    } catch (error) {
      // If an error occurs in either fetchAsyncCall1 or fetchAsyncCall2, it's caught here
      console.error(`Error`, error);
    }
  }
  
  fetchAsyncSequentially();


  //fetchSequentialPromises();