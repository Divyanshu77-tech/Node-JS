// 🧠 Express.js Framework – Notes

// ✅ 1. Introduction to Express.js
// Express.js is a minimal and flexible Node.js web application framework.
// It simplifies routing, middleware, request & response handling.

// 📦 2. Express.js is an npm package
// Installed via:
// npm install express
// It's a third-party package used to create backend servers easily.

// 🧱 3. Framework Role
// Manages everything from:
//   - Receiving the request
//   - Sending the response
// Handles routing, middleware, and server logic efficiently.

// ⚙️ 4. Setting up a Basic Express Application

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// 🛣️ 5. Routing
// Routing = Defining how your app responds to client requests.

app.get('/about', (req, res) => {
  res.send('About Page');
});


// 🛡️ 6. Middleware
// Functions that execute before the final route handler.
// Used for logging, authentication, adding data to the request, etc.

app.use((req, res, next) => {
  console.log('Middleware ran');
  next(); // Pass control to next middleware/route
});


// 🔁 7. Request and Response Handling
// req → Incoming request data (URL, params, body)
// res → What you send back (text, HTML, JSON)

app.get('/user', (req, res) => {
  res.json({ name: "Divyanshu", role: "Student" });
});


// 🚨 8. Error Handling
// Special middleware for catching errors.
/*
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
*/
