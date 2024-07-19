document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to load tasks from Local Storage
  function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false)); // false to prevent saving again to Local Storage
  }

  // Function to add a new task
  function addTask(taskText, save = true) {
      const task = taskText || taskInput.value.trim();

      if (task === '') {
          alert('Please enter a task.');
          return;
      }

      // Create a new list item
      const li = document.createElement('li');
      li.textContent = task;

      // Create a remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn'; // Use className instead of classList.add

      // Add click event to remove the task
      removeButton.onclick = () => {
          taskList.removeChild(li);
          removeTaskFromStorage(task);
      };

      // Append the remove button to the list item
      li.appendChild(removeButton);

      // Append the list item to the task list
      taskList.appendChild(li);

      // Clear the input field if taskText is not provided
      if (!taskText) taskInput.value = '';

      // Save to Local Storage
      if (save) {
          saveTaskToStorage(task);
      }
  }

  // Function to save a task to Local Storage
  function saveTaskToStorage(task) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  // Function to remove a task from Local Storage
  function removeTaskFromStorage(task) {
      let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks = storedTasks.filter(storedTask => storedTask !== task);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  // Add task on button click
  addButton.addEventListener('click', () => addTask());

  // Add task on pressing Enter key
  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          addTask();
      }
  });

  // Load tasks from Local Storage when the page loads
  loadTasks();
});

