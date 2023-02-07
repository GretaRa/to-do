// create functions for displaying the task in DOM
// create factory function for creating many task objects
//add remove button func
//add date 
//make border reflect chosen priority
//add posibility to mark project complete
//add possibility to edit the task
//add project tag (later)

function createTask(title,description,date){
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

  const container = document.querySelector('.container');
  const task = document.createElement('div');
  task.classList.add('task');

  container.appendChild(task);
  task.appendChild(taskCompletion);
  task.appendChild(taskTitle);
  task.appendChild(taskDescription);
  task.appendChild(taskDueDate);

  return{
    task
  }
}

createTask('Title','Description','7th of February');

export {createTask};