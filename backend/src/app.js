const express = require('express');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.send('Hello World!');
});

// routes
const apiRoutes = require('./routes/index');

app.use('/api', apiRoutes);



// swagger setup








module .exports = app;