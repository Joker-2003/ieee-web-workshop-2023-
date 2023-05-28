function addTask() {
	let taskInput = document.getElementById("taskInput");
	let taskList = document.getElementById("taskList");

	if (taskInput.value !== "") {
	  let task = document.createElement("li");
	  task.innerText = taskInput.value;
	  
	  let removeButton = document.createElement("button");
	  removeButton.innerText = "Remove";
	  removeButton.addEventListener("click", function() {
		taskList.removeChild(task);
	  });
	  removeButton.classList.add("remove-button");

	  task.appendChild(removeButton);
	  taskList.appendChild(task);
	  
	  taskInput.value = "";
	}
  }
  