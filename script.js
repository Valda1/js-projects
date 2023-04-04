const todoList = [];

/*window.onload = function() {
    document.getElementById('add');
}*/

/*window.addEventListener('load', function functionName(){

})*/

document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('task').value;
    
    if(value){
       console.log('Task added!');
       addTask(value);
    }
    
})

function addTask(text){
    var task = document.createElement('li');
    task.innerText = text;
}

var buttons = document.createElement('div');
buttons.classList.add('buttons');

var complete = document.createElement('buttons');
complete.classList.add('complete');

var remove = document.createElement('buttons');
remove.classList.add('remove');

/*const addTask = (task) => {
    let task;

    todoList.push(task);
    //console.log(todoList);
};*/

/*const removeTask = () => {
    let task;

    todoList.pop(task);
}*/

/*const printList = () => {
    print
}*/