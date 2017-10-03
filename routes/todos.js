const express = require('express'),
      router  = express.Router(),
      // Bring in our database
      db      = require("../models");



// Route to display all todos. Returns promise with todos.
router.get('/', function(req, res) {
    console.log("Hit the get todos route");
    db.Todo.find()
    .then(function(todos) {
        res.json(todos);
    })
    .catch(function(err) {
        res.send(err);
    })
});

// Show route
router.get('/:todoId', function(req, res) {
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo) {
        res.json(foundTodo)
    })
    .catch(function(err) {
        res.send(err);
    })
})

// Post route
router.post('/', function(req, res) {
    console.log(req.body);
    db.Todo.create(req.body)
    .then(function(newTodo) {
        res.status(201).json(newTodo);
        console.log(newTodo);
    })
    .catch(function(err) {
        res.send(err);
    })
});

// Update/Put route
router.put('/:todoID', function(req, res) {
   db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
   .then(function(todo) {
       res.json(todo);
   })
   .catch(function(err) {
       res.send(err);
   });
})



module.exports = router;
