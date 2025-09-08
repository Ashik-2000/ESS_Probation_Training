let newTask = document.querySelector("#inputTask");
let form = document.querySelector("form");
let incompleteUL = document.querySelector(".incompleteTask ul");
let completeUL = document.querySelector(".completeTask ul");

// Function to create new li items using the input.
function createTask(task) {
    const listItem = document.createElement("li");
    listItem.className = "task"; // ✅ Added class for consistent styling

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    const label = document.createElement("label");
    label.innerText = task;

    listItem.append(checkBox, label);

    return listItem;
}

// Function to insert newly created li items into incomplete UL
function addTask(event) {
    event.preventDefault();

    if (newTask.value.trim() === "") return; // prevent empty task

    let listItem = createTask(newTask.value);
    incompleteUL.appendChild(listItem);
    newTask.value = "";

    bindIncompleteItems(listItem, completeTask);
}

// Function to move tasks from incomplete to complete list
function completeTask() {
    let listItem = this.parentElement;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn dlt";
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector("input[type=checkbox]");
    checkBox.remove();

    completeUL.appendChild(listItem);

    bindCompleteItems(listItem, deleteTask);
}

// Function to delete completed tasks
function deleteTask() {
    let listItem = this.parentElement;
    let ul = listItem.parentElement;
    ul.removeChild(listItem);
}

// Bind incomplete tasks with checkBox functionality
function bindIncompleteItems(taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}

// Bind complete tasks with delete functionality
function bindCompleteItems(taskItem, deleteClick) {
    let deleteButton = taskItem.querySelector(".dlt");
    deleteButton.onclick = deleteClick;
}

form.addEventListener("submit", addTask);
