// create functions for displaying the task in DOM
// create factory function for creating many task objects
//add remove button func
//add date 
//make border reflect chosen priority
//add posibility to mark project complete
//add possibility to edit the task
//add project tag (later)

let tasks = [];

function createTask(title,description,date,color){
  const taskCompletion = document.createElement('button');
  taskCompletion.classList.add('task-completion');

  const taskTitle = document.createElement('h3');
  taskTitle.classList.add('task-title');
  taskTitle.textContent = title;

  const taskDescription = document.createElement('p');
  taskDescription.classList.add('task-desc');
  taskDescription.textContent = description;

  const taskDueDate = document.createElement('p');
  taskDueDate.classList.add('task-date');
  taskDueDate.textContent = date;

  const taskRemove = document.createElement('button');
  taskRemove.classList.add('task-remove');

  const container = document.querySelector('.container');
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');
  taskDiv.style.borderLeftColor = color;

  container.appendChild(taskDiv);
  taskDiv.appendChild(taskCompletion);
  taskDiv.appendChild(taskTitle);
  taskDiv.appendChild(taskDescription);
  taskDiv.appendChild(taskDueDate);
  taskDiv.appendChild(taskRemove);

  return{
    taskDiv,
    title,
    description,
    date,
    color
  }
}

function addTask (task){
  tasks.push(task);
}

addTask(createTask('Title','Description','7th of February', '#2d97249c'))

export {createTask};