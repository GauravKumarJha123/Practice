/*
A callback function is a function passed as an argument to another function 
and is executed after the completion of that function. In JavaScript,
 callbacks are often used for asynchronous operations like reading files, 
 making network requests, or handling events.

While callbacks can be powerful, they can lead to callback hell, 
where nested callbacks become hard to manage.


*/
const EventEmitter =  require('events');


function getData(callbackFn) {
    setTimeout(() => {
      callbackFn("Data received");
    }, 1000);
  }
  
  function processData(data) {
    console.log(data);
  }
  
  //getData(processData); // Logs "Data received" after 1 second

  // event emitter 

  // part of event module it allows obj to emit events and register listeners on those event 
  // specially in core node js lib like https fs module 

  const event = new EventEmitter();

  event.on('data' , name => {
    console.log(`Hello, ${name}`);
    
  })

//   event.emit('data' , 'Gaurav');

  // Here, an event 'greet' is emitted with an argument 'Gaurav', and the listener function is triggered.
  

  // middleware in node js
  /*
In Express.js, middleware functions are functions that have access to the request (req), response (res), and the next() middleware function in the application’s request-response cycle. Middleware functions can perform operations like parsing request bodies, logging requests, authentication, or modifying the request/response objects.

Middleware can be:

Application-level middleware (applies to all routes or specific ones)
Router-level middleware
Built-in middleware (like express.json() for JSON parsing)
Error-handling middleware


  */


// const express = require('express');

// const app = express();

// app.use((req , res, next) => {
//     console.log(`Request Type:` , req.method , `Request Body`, req.url);
//     next();
// })

// app.get('/' , (req , res) => {
//     res.send("hello from get request");
// });

// app.post

// app.listen(1000, () => {
//     console.log(`Port started at 1000`);
// });


const express = require('express');
const app = express();

// Use middleware to parse JSON bodies
app.use(express.json());

// Application-level middleware for logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} request to ${req.path}`);
  next(); // Pass control to the next handler
});

// GET request handler for the root path
app.get('/', (req, res) => {
  res.send('Hello World from GET request');
});

// POST request handler for adding an item
app.post('/item', (req, res) => {
  // "req.body" contains the parsed JSON body sent by the client
  const item = req.body;
  console.log(`Adding item: ${JSON.stringify(item)}`);
  res.status(201).json({
    success : true,
    message : 'Successfully added an item',
    data : item,
    err : {}
  });
});

// PUT request handler for updating an item
app.put('/item/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  console.log(`Updating item with id ${itemId}: ${JSON.stringify(updatedItem)}`);
  res.status(200).json({
    success : true,
    message : 'Successfully updated an item',
    data : updatedItem,
    err : {}
  });
});

// DELETE request handler for removing an item
app.delete('/item/:id', (req, res) => {
  const itemId = req.params.id;
  console.log(`Deleting item with id ${itemId}`);
  res.status(201).json({
    success : true,
    message : 'Successfully deleted an item',
    data : {},
    err : {}
  });
});

// Starting the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//cors 
/*
CORS (Cross-Origin Resource Sharing) is a security feature implemented by browsers to control how resources on a web page can be requested from another domain, which is different from the one the web page is being served from.

By default, browsers block such cross-origin requests. To enable them, the server needs to set specific headers (e.g., Access-Control-Allow-Origin).

In Express, you can enable CORS using the cors middleware.


*/

// const express = require('express');
// const cors = require('cors');
// const app = express();

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'CORS enabled!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
