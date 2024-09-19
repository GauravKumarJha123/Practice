const { add } = require('./module');

console.log(add(2,3));


// nodes js event-driven architecture 

/*
Node.js uses an event-driven architecture to handle I/O operations efficiently. Instead of creating multiple threads (as done in traditional servers), Node.js operates on a single-threaded event loop. I/O operations, like file reading or network requests, are offloaded to the system's thread pool, and Node.js continues handling other tasks.

Once an I/O operation completes, the event loop invokes the associated callback function.

This model allows Node.js to handle a large number of concurrent operations without blocking the main thread, making it well-suited for scalable, real-time applications.

*/