const listContainer = document.getElementById("list-container");
const inputField = document.getElementById("input-box");
const addButton = document.getElementById("add-button");

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
    //listContainer.innerHTML = localStorage.getItem("data");
};

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
};

addButton.addEventListener("click", function(){
        let span = document.createElement("span");
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        let checkButton = document.createElement("button");
        //checkButton.innerHTML = '<i class="fa fa-check"></i>';
        checkButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        let editButton = document.createElement("button");
        editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
        let deleteButton = document.createElement("button");
        //deleteButton.innerHTML = '<i class = "fa fa-trash-o"></i>';
        deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

        span.appendChild(li);
        span.appendChild(checkButton);
        span.appendChild(editButton);
        span.appendChild(deleteButton);

        listContainer.appendChild(span);

        inputField.value = "";

        saveData();

        deleteButton.addEventListener("click", function(){
            const parent = deleteButton.parentElement;
            parent.parentElement.removeChild(parent);
        });

        checkButton.addEventListener("click", function(){
            const item = checkButton.parentElement;
            const li = item.querySelector("li");
            li.style.textDecoration = "line-through";
        });

        editButton.addEventListener("click", function(){
            inputField.value = li.innerText;
            const parent = editButton.parentElement;
            parent.parentElement.removeChild(parent);
        });
});

//showTask();