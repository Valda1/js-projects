//let addButton = document.getElementById('add');
let listContainer = document.getElementById('list-container');
let inputField = document.getElementById('input-box');

/*addButton.addEventListener('click', function(){
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
});*/

const addTask = () => {
    if(inputField.value === ''){
        alert('You must write something!')
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputField.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHtml);
};

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
};

showTask();