
var taskList = document.getElementById("tasks");
var add = document.getElementById("add");


function addTask(info) {
	var taskItem = document.createElement("li");
	taskItem = document.createTextNode(info);
	taskList.appendChild(taskItem);
}

add.addEventListener("click", addTask);

