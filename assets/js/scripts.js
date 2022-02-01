
var taskList = document.getElementById("task-list");
var add = document.getElementById("add");


function addTask() {
	var li = document.createElement("li");
	console.log(li);
	var info = document.getElementById("taskName").value;
	console.log(info);
	taskInfo = document.createTextNode(info);
	console.log(taskInfo);

	taskList.appendChild(li);
	console.log(taskList);
	li.appendChild(taskInfo);
	console.log(li);
}

add.addEventListener("click", addTask);

