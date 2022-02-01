
var taskList = document.getElementById("task-list");
var add = document.getElementById("add");


function addTask() {
	var li = document.createElement("li");
	li.className = "task-item";

	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";

	var info = document.getElementById("taskName").value;

	li.innerHTML = info;

	taskList.appendChild(checkbox);
	taskList.appendChild(li);

}

add.addEventListener("click", addTask);

