//add remove button func
//add posibility to mark project complete
//add possibility to edit the task
//add project tag (later)
//sort by date, priority,alphabet
//sort by dates in seperate htmls
//show project page
//delete projects

import { formatDistanceToNow } from "date-fns";

let tasks = [];
const createTaskBtn = document.getElementById("create-task-btn");

//Create task object
const taskFactory = (title, description, date, color) => {
	//Display task DOM
	const createTaskDOM = () => {
		const taskCompletion = document.createElement("button");
		taskCompletion.classList.add("task-completion");

		const taskTitle = document.createElement("h3");
		taskTitle.classList.add("task-title");
		taskTitle.textContent = title;

		const taskDescription = document.createElement("p");
		taskDescription.classList.add("task-desc");
		taskDescription.textContent = description;

		const taskDueDate = document.createElement("p");
		taskDueDate.classList.add("task-date");
		taskDueDate.textContent = date;

		const taskRemove = document.createElement("button");
		taskRemove.classList.add("task-remove");

		const taskDiv = document.createElement("div");
		taskDiv.classList.add("task");
		taskDiv.style.borderLeftColor = color;

		const container = document.querySelector(".container");

		container.appendChild(taskDiv);
		taskDiv.appendChild(taskCompletion);
		taskDiv.appendChild(taskTitle);
		taskDiv.appendChild(taskDescription);
		taskDiv.appendChild(taskDueDate);
		taskDiv.appendChild(taskRemove);
	};

	return {
		createTaskDOM,
		title,
		description,
		date,
		color,
	};
};

//Get border color by checking which priority was selected
function getColor() {
	let priority = document.querySelector(
		'input[name="radioPriority"]:checked'
	).value;
	if (priority === "high") {
		return "var(--high-prio-color)";
	} else if (priority === "medium") {
		return "var(--medium-prio-color)";
	} else {
		return "var(--low-prio-color)";
	}
}

//Push all created tasks to array for sorting
function addTask(task) {
	tasks.push(task);
}

//Populates DOM with objects from tasks array
function displayTasks() {
	const container = document.querySelector(".container");
	container.innerHTML = "";
	for (let i = 0; i < tasks.length; i++) {
		tasks[i].createTaskDOM();
	}
}

// Takes input from task modal and uses the values to create task DOM
function createTask() {
	let title = document.getElementById("task-title").value;
	let description = document.getElementById("create-desc").value;
	let date = formatDistanceToNow(
		new Date(document.getElementById("create-date").value),
		{ addSuffix: true }
	);
	let color = getColor();

	addTask(taskFactory(title, description, date, color));
	resetCreateTask();
	displayTasks();
}

//Makes sure there is input in selected fields and runs createTask()
createTaskBtn.addEventListener("click", () => {
	const titleField = document.getElementById("task-title");
	const dateField = document.getElementById("create-date");
	if (titleField.value.trim() == "") {
		titleField.classList.add("error");
		titleField.addEventListener("input", () => {
			titleField.classList.remove("error");
		});
		return;
	} else if (dateField.value == "") {
		dateField.classList.add("error");
		dateField.addEventListener("input", () => {
			dateField.classList.remove("error");
		});
	}
	createTask();

	let modal = document.getElementById("myModal");
	modal.style.display = "none";
});

//Reset the task creation form
function resetCreateTask() {
	document.getElementById("task-title").value = "";
	document.getElementById("create-desc").value = "";
	document.getElementById("create-date").value = "";
	document.querySelector('input[name="radioPriority"]:checked').checked = false;
	document.getElementById("lowPrio").checked = true;
}

// Create sample task to be shown when first visiting the website
taskFactory(
	"Sample task",
	"Don't forget to describe it!",
	"Today",
	"var(--low-prio-color)"
).createTaskDOM();

export { resetCreateTask };
