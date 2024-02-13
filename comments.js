// Create web server
// In the server, create a route to handle GET requests to /comments
// In the route, send back the entire array of comments
// Start the server

const express = require('express');
const app = express();
const PORT = 3000;

const comments = [
  { username: 'Tammy', comment: 'lol that is so funny' },
  { username: 'Giorgio', comment: 'I like this' },
  { username: 'Marta', comment: 'wow' }
];

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});