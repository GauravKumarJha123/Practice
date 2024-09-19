try {
    throw new Error("Something went wrong!");
  } catch (err) {
    console.log(err.message); // Output: Something went wrong!
    console.log(err.stack);   // Outputs the stack trace
  }

  // custom errors 
  class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = ValidationError;
        this.statusCode = 400;
    }
  }

  try {
    throw new ValidationError("User Id is invalid");
  } catch (err) {
    console.log(err.name);      // Output: ValidationError
    console.log(err.message);   // Output: Invalid input!
    console.log(err.statusCode); // Output: 400
  }


  const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Error listener
myEmitter.on('error', (err) => {
  console.error('Caught error:', err.message);
});

// Trigger an error
myEmitter.emit('error', new Error('Oops, something went wrong!'));
