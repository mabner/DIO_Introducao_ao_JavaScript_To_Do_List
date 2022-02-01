
var taskList = document.getElementById("task-list");
var add = document.getElementById("add");


function addTask() {
	var li = document.createElement("li");
	var info = document.createElement("taskName").value;
	taskInfo = document.createTextNode(info);

	taskList.appendChild(li);
	li.appendChild(taskInfo);
}

add.addEventListener("click", addTask);

