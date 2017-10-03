const express = require('express'),
      router  = express.Router(),
      // Bring in our database
      db      = require("../models"),
      helpers   = require("../helpers/todos");



// Routes got index of all todos and add todo
router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodo)

// Routes to get single, update single and delete single todo
router.route('/:todoId')
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo)


module.exports = router;
