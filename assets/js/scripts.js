
var taskList = document.getElementById("task-list");
const ADD = document.getElementById("add");
const TASK = document.getElementById("taskName")


function addTask() {
	var li = document.createElement("li");
	li.className = "task-item";

	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";

	var info = TASK.value;
	taskInfo = document.createTextNode(info);

	li.appendChild(checkbox);
	li.appendChild(taskInfo);

	taskList.appendChild(li);

	TASK.value = "";

}

ADD.addEventListener("click", addTask);

taskList.addEventListener("click", function (e) {
	if (e.target.tagName === "INPUT") {
		e.target.parentElement.classList.toggle("done");
	}
}, false);