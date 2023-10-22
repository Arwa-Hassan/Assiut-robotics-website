const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // You can change the port if needed

// Define a route to serve the login.html file when the root URL is accessed
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './Login Page/login.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
