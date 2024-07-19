document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
      const taskText = taskInput.value.trim();
      
      if (taskText === '') {
          alert('Please enter a task.');
          return;
      }

      // Create a new list item
      const li = document.createElement('li');
      li.textContent = taskText;

      // Create a remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn'; // Use className instead of classList.add

      // Add click event to remove the task
      removeButton.onclick = () => {
          taskList.removeChild(li);
      };

      // Append the remove button to the list item
      li.appendChild(removeButton);

      // Append the list item to the task list
      taskList.appendChild(li);

      // Clear the input field
      taskInput.value = '';
  }

  // Add task on button click
  addButton.addEventListener('click', addTask);

  // Add task on pressing Enter key
  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          addTask();
      }
  });
});
