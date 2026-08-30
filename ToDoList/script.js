function createRow(text, done) {
    let newRow = document.createElement("div");
    newRow.className = "task-row";

    let newcheck = document.createElement("input");
    newcheck.className = "checkbox";
    newcheck.type = "checkbox";
    newcheck.checked = done;
    newcheck.addEventListener("click", function () {
        if (newcheck.checked) {
            newTask.style.textDecoration = "line-through";
            newTaskObj.done = true;
        }
        else {
            newTask.style.textDecoration = "none";
            newTaskObj.done = false;
        }
        localStorage.setItem("tasks", JSON.stringify(tasks));
    })
    newRow.appendChild(newcheck);

    let newTask = document.createElement("p");
    newTask.className = "task";
    newTask.textContent = text;
    if(done){
        newTask.style.textDecoration = "line-through";
    }
    newRow.appendChild(newTask);

    let newdel = document.createElement("i");
    newdel.className = "fa fa-trash-o delete";
    newdel.addEventListener("click", function () {
        let index = Array.from(taskList.children).indexOf(newRow);
        tasks.splice(index, 1);
        taskList.removeChild(newRow);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    })
    newRow.appendChild(newdel);

    let newTaskObj = { text: text, done: done };
    tasks.push(newTaskObj);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskList.appendChild(newRow);
}

const task = document.getElementById("inputtask");
const add = document.getElementById("button");
const taskList = document.querySelector(".task-list");

let tasks = [];

let saved = localStorage.getItem("tasks");
if (saved) {
    let savedTasks = JSON.parse(saved);
    savedTasks.forEach(function (taskObj) {
        createRow(taskObj.text, taskObj.done);
    });
}
add.addEventListener("click", function () {
    createRow(task.value, false);
    task.value = "";
});
