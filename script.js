let addButton = document.getElementById('add');
let toDoContainer = document.getElementById('to-do-container');
let inputField = document.getElementById('task');

addButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener('dblclick', function(){
        paragraph.removeChild(paragraph);
    });
});