<<<<<<< HEAD
import Task from "./components/Task"
let element;
let inputElement;
=======
import Task from "./components/Task/index.js"
let element;
let input;
>>>>>>> fe277fcee38e1b953a813f52fa2d0a9fceacf0f6
function runOnLoad()
{
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    input = document.getElementById("taskText");
    // Handle adding a new task
    var addTaskButton = document.getElementById("addTask");
    inputElement = document.getElementById("taskText");
    addTaskButton.addEventListener("click", onClick)
}

function onClick() {
    console.log("clicked!");
<<<<<<< HEAD
    var newTask = new Task({
        content:inputElement.value
    })
=======
    var newTask = new Task({content:input.value,done:false});
>>>>>>> fe277fcee38e1b953a813f52fa2d0a9fceacf0f6
    element.appendChild(newTask.render());
}

window.addEventListener("DOMContentLoaded", runOnLoad);