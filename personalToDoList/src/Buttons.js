const ol = document.querySelector('#tasks-list');

function createTaskBtn() {
  const btn = document.querySelector('#criar-tarefa');
  btn.addEventListener('click', () => {
    const getTask = handleInputText();

    createTasksList(getTask);
  });
}

function clearAllTasksBtn() {
  ol.innerHTML = '';
}

function clearCompletedTasks() {
  const completedTasks = document.querySelectorAll('.completed');
  completedTasks.forEach((task) => ol.removeChild(task));
}

function saveTasks() {
  const allTasks = document.querySelectorAll('.tasks');

  const tasksToSave = [];
  allTasks.forEach((task) => (
    tasksToSave.push({
      taskText: task.innerHTML,
      taskClass: task.className, 
    })
  ));

  saveToLocalStorage(tasksToSave);
}