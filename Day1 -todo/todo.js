// To-Do List: JavaScript file

document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    document.getElementById("addTaskBtn").addEventListener("click", () => {
      const task = taskInput.value.trim();
      if (task) {
        const li = document.createElement("li");
        li.innerHTML = `${task} <span class="remove" onclick="removeTask(this)">X</span>`;
        taskList.appendChild(li);
        taskInput.value = "";
      }
    });
  
    window.removeTask = (taskElement) => {
      taskElement.parentElement.remove();
    };
  });
  