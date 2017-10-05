$(document).ready(function() {
    $.getJSON("api/todos")
    .then(addTodos) 

    $('#todoInput').keypress(function(event) {
        if(event.which === 13) {
            createTodo();
        }
    })

    $('.list').on("click",'span', function() {
        removeTodo($(this).parent());
    })
});

function addTodos(todos) {
    // add todos to the page here
    todos.forEach(function(todo) {
       addTodo(todo);
    })
}

function createTodo() {
    // send post request
    var usrInput = $('#todoInput').val();
    $.post('/api/todos', {name: usrInput })
    // We get newTodo back from server and then run to append
    .then(function(newTodo) {
       $('#todoInput').val('');
       addTodo(newTodo);
    })
    .catch(function(err) {
        console.log(err);
    })
}

// Function to add single to do
function addTodo(todo) {
    var newTodo = $('<li class="task">' +todo.name + ' <span>X</span></li>');
    newTodo.data('id', todo._id);
    if(todo.completed) {
        newTodo.addClass("done");
    }
    $('.list').append(newTodo);
}

function removeTodo(todo) {
    var clickedId = todo.data('id');
    var deleteUrl = '/api/todos/' + clickedId;
    $
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
    .then(function(data) {
        todo.remove();
    })
}