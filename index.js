const express = require('express'),
      app = express(), 
      port = process.env.PORT || 8080,
      bodyParser = require('body-parser');

const todoRoutes = require('./routes/todos');

// Body parser is used to turn incoming data from string to JSON object
// Allows data to come in as put/post request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Root route
app.get('/', function(req, res) {
    res.json({message: "hello"});
})

// Shortcut for todos routes from router file.
app.use('/api/todos', todoRoutes);









app.listen(port, function() {
    console.log("App is running on port " + 8080 );
})