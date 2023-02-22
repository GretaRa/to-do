//add remove button func
//add date
//make border reflect chosen priority
//add posibility to mark project complete
//add possibility to edit the task
//add project tag (later)

import { formatDistanceToNow } from "date-fns";

let tasks = [];

function addTask(task) {
	tasks.push(task);
}

const taskFactory = (title, description, date, color) => {
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

	const container = document.querySelector(".container");
	const taskDiv = document.createElement("div");
	taskDiv.classList.add("task");
	taskDiv.style.borderLeftColor = color;

	container.appendChild(taskDiv);
	taskDiv.appendChild(taskCompletion);
	taskDiv.appendChild(taskTitle);
	taskDiv.appendChild(taskDescription);
	taskDiv.appendChild(taskDueDate);
	taskDiv.appendChild(taskRemove);

	return {
		taskDiv,
		title,
		description,
		date,
		color,
	};
};

function createTask() {
	let title = document.getElementById("task-title").value;
	let description = document.getElementById("create-desc").value;
	let date = formatDistanceToNow(
		new Date(document.getElementById("create-date").value),
		{ addSuffix: true }
	);
  let color = getColor();

	addTask(taskFactory(title, description, date, color));
  resetCreateTask()

	return;
}

function getColor() {
  let priority = document.querySelector('input[name="radioPriority"]:checked').value;
  if ( priority === 'high') {
    return 'var(--high-prio-color)'
  } else if ( priority === 'medium') {
    return 'var(--medium-prio-color)'
  } else {
    return 'var(--low-prio-color)'
  }
}

const createTaskBtn = document.getElementById("create-task-btn");

createTaskBtn.addEventListener("click", () => {
	const titleField = document.getElementById("task-title");
	const dateField = document.getElementById("create-date");
	if (titleField.value.trim() == ""){
		titleField.classList.add('error')
		titleField.addEventListener('input', () => {
			titleField.classList.remove('error')
		})
		return
	} else if (dateField.value == ""){
		dateField.classList.add('error')
		dateField.addEventListener('input', () => {
			dateField.classList.remove('error')
		})
	}
	createTask();
	
	let modal = document.getElementById("myModal");
	modal.style.display = "none";
});

// Create sample task to be shown when first visiting the website
const sampleTask = taskFactory(
	"Sample task",
	"Don't forget to describe it!",
	"Today",
	"var(--low-prio-color)"
);

//Reset the task creation form
function resetCreateTask() {
  document.getElementById("task-title").value = '';
  document.getElementById("create-desc").value = '';
  document.getElementById("create-date").value = '';
  document.querySelector('input[name="radioPriority"]:checked').checked = false;
  document.getElementById('lowPrio').checked = true;
}

export { taskFactory, addTask, resetCreateTask};
