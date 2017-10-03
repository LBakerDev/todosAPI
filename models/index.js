var mongoose = require('mongoose');
// Set debugger to see errors for DB
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

// Enabling promises to be utilized
mongoose.Promise = Promise;

// Import 
module.exports.Todo = require("./todo");