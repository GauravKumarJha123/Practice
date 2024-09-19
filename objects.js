const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 22 },
    { name: 'Mike', age: 30 }
  ];
  
  const names = users.map(user => user.name);
  console.log(names); // Output: ['John', 'Jane', 'Mike']

  const adults = users.filter(user => user.age >= 25);
  console.log(adults);
    

  const totalAge = users.reduce( (acc , curr) => {
    return acc + curr.age;
  } , 0)

  console.log(totalAge);
  
  users.forEach(user => console.log(user.name));
// Output: 'John', 'Jane', 'Mike'

const jane = users.find(user => user.name === 'Jane');
console.log(jane); // Output: { name: 'Jane', age: 22 }

const sortedUsers = users.sort((a, b) => a.age - b.age);
console.log(sortedUsers);
// Output: [ { name: 'Jane', age: 22 }, { name: 'John', age: 25 }, { name: 'Mike', age: 30 } ]

const nums = [1, 2, 3];
const newNums = [...nums, 4, 5]; // Spreading the array
console.log(newNums); // Output: [1, 2, 3, 4, 5]

const sum = (...numbers) => numbers.reduce((acc, num) => acc + num);
console.log(sum(1, 2, 3)); // Output: 6 // here args 1 , 2 , 3 becomes array due to rest operator


/*

The JavaScript ES6 spread and rest syntax both use the `...` operator, but they are used in different contexts and serve different purposes:

1. **Spread Operator (`...`)** - It is used to expand or spread an iterable (like an array) into individual elements in places like function calls, arrays, or objects.

   In your first example, the spread operator is used to create a new array `newNums` which consists of the individual elements of the original `nums` array followed by `4` and `5`:
   
   ```javascript
   const nums = [1, 2, 3];
   const newNums = [...nums, 4, 5]; // The ...nums expands the nums array into its components
   ```

   Here, `...nums` spreads the elements of the `nums` array out, so that they become individual elements of the `newNums` array. The new array `newNums` is `[1, 2, 3, 4, 5]`.

2. **Rest Parameters (`...`)** - The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

   In your second example, the rest parameter is used to gather all arguments passed to the function into a single array `numbers`:
   
   ```javascript
   const sum = (...numbers) => numbers.reduce((acc, num) => acc + num);
   ```

   In this `sum` function, `...numbers` gathers all the arguments into an array called `numbers` inside the function. If you call `sum(1, 2, 3)`, the parameters `1`, `2`, and `3` will be collected into an array `[1, 2, 3]` that `numbers` represents.

   Inside the implementation of the `sum` function, `numbers` is an array of all the arguments that were passed to the function. The `reduce` method is then used on this array to compute the sum of all these numbers.

So, in summary:
- The **spread operator** is used to spread out elements of an iterable into individual elements in a list.
- **Rest parameters** are used to collect all remaining arguments into an array.

They look the same (both use `...`), but you can tell them apart by their context. Spread is used in the context of function calls and array or object literals, while rest parameters are used in function parameter definitions.


*/

const result = (function(){
    const name = 'John Doe';
    return `Hello, ${name}`
})();

console.log(result);

const { name , age} = {name : 'Abc', age : 30};

console.log(name , age);
// Allows unpacking values from arrays or properties from objects into distinct variables.
// const { name, age } = { name: 'John', age: 30 };
// console.log(name); // John


