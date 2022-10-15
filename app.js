var toDoTask = [];

var input = document.getElementById('input');
var button = document.getElementById('button');
var toDoList = document.getElementById('todoList');

button.onclick = addTasks;

function addTasks() {

    toDoTask.push(input.value);
    input.value = '';
    displayList();
}

function displayList() {
    toDoList.innerHTML = '';
    toDoTask.forEach(function(item,index){
         toDoList.innerHTML += "<li>" + item + "<a onclick = 'edit(" + index + ")'>Edit</a>" + "<a onclick = 'deleteTask(" + index + ")'>  &times | &nbsp  </a></li>";
    }) // item=task  | | index=index of task
}

function deleteTask(index) {
    toDoTask.splice(index, 1);
    displayList();
}

function edit(index) {
    var updatedTask = prompt('Kindly update the task');
    toDoTask.slice(index, 1, updatedTask);
    displayList();

}
