/* This is a way to select elements from the DOM. */
const inputElement = document.querySelector('.new-task-input')
const addTaskButton = document.querySelector('.new-task-button')
const tasksContainer = document.querySelector('.tasks-container')

/**
 * If the value of the input element, after trimming whitespace, is greater than 0, then return true,
 * otherwise return false.
 */
const validateInput = () => inputElement.value.trim().length > 0

/**
 * It creates a new task item, adds it to the DOM, and updates the local storage.
 * @returns the value of the inputElement.value.
 */
const handleAddTask = () => {
  const inputIsValid = validateInput()

  if (!inputIsValid) {
    return inputElement.classList.add('error')
  }

  const taskItemContainer = document.createElement('div')
  taskItemContainer.classList.add('task-item')

  const taskContent = document.createElement('p')
  taskContent.innerText = inputElement.value

  taskContent.addEventListener('click', () => handleClick(taskContent))

  const deleteItem = document.createElement('i')
  deleteItem.classList.add('fa-solid')
  deleteItem.classList.add('fa-trash-can')

  deleteItem.addEventListener('click', () =>
    handleDeleteClick(taskItemContainer, taskContent)
  )

  taskItemContainer.appendChild(taskContent)
  taskItemContainer.appendChild(deleteItem)

  tasksContainer.appendChild(taskItemContainer)

  inputElement.value = ''

  updateLocalStorage()
}

/**
 * When a task is clicked, toggle the class 'completed' on the task's content.
 */
const handleClick = taskContent => {
  const tasks = tasksContainer.childNodes

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent)
    if (currentTaskIsBeingClicked) {
      task.firstChild.classList.toggle('completed')
    }
  }
  updateLocalStorage()
}

/**
 * If the task being clicked is the same as the task being iterated over, remove the task from the DOM.
 * @param taskItemContainer - the div that contains the task content and the delete button
 * @param taskContent - the text of the task
 */
const handleDeleteClick = (taskItemContainer, taskContent) => {
  const tasks = tasksContainer.childNodes

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent)
    if (currentTaskIsBeingClicked) {
      taskItemContainer.remove()
    }
  }
  updateLocalStorage()
}

/**
 * If the input is valid, remove the error class from the input element.
 * @returns Nothing.
 */
const handleInputChange = () => {
  const inputIsValid = validateInput()

  if (inputIsValid) {
    return inputElement.classList.remove('error')
  }
}

/**
 * It takes the tasks from the DOM, converts them into an array of objects, and then saves that array
 * to local storage.
 */
const updateLocalStorage = () => {
  const tasks = tasksContainer.childNodes

  const localStorageTasks = [...tasks].map(task => {
    const content = task.firstChild
    const isCompleted = content.classList.contains('completed')

    return { description: content.innerText, isCompleted }
  })

  localStorage.setItem('tasks', JSON.stringify(localStorageTasks))
}


/**
 * It takes the tasks from local storage, creates a div for each task, adds a p element for the task
 * description, adds a click event listener to the p element, adds a delete icon, adds a click event
 * listener to the delete icon, and appends the div to the tasks container.
 * @returns undefined.
 */
const refreshTasksUsingLocalStorage = () => {
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'))

  if (!tasksFromLocalStorage) return

  for (const task of tasksFromLocalStorage) {
    const taskItemContainer = document.createElement('div')
    taskItemContainer.classList.add('task-item')

    const taskContent = document.createElement('p')
    taskContent.innerText = task.description

    if (task.isCompleted) {
      taskContent.classList.add('completed')
    }

    taskContent.addEventListener('click', () => handleClick(taskContent))

    const deleteItem = document.createElement('i')
    deleteItem.classList.add('fa-solid')
    deleteItem.classList.add('fa-trash-can')

    deleteItem.addEventListener('click', () =>
      handleDeleteClick(taskItemContainer, taskContent)
    )

    taskItemContainer.appendChild(taskContent)
    taskItemContainer.appendChild(deleteItem)

    tasksContainer.appendChild(taskItemContainer)
  }
}

/* Adding event listeners to the add task button and the input element. */
refreshTasksUsingLocalStorage()
addTaskButton.addEventListener('click', () => handleAddTask())
inputElement.addEventListener('change', () => handleInputChange())
