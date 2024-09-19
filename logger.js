const winston = require('winston');

// Set up logger with a file transport
const logger = winston.createLogger({
  level: 'error',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log' })
  ]
});

// Express error-handling middleware with logging
app.use((err, req, res, next) => {
  logger.error(`Error: ${err.message} | Stack: ${err.stack}`);
  res.status(500).send('Internal Server Error');
});

const express = require('express');
const app = express();

// Route that triggers an error
app.get('/', (req, res, next) => {
  next(new Error('Something went wrong!')); // Passes error to the next middleware
});

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error stack trace for debugging
  res.status(500).send({ error: err.message });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});


process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason.message || reason);
  });
  
  process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.message || err);
  });
  