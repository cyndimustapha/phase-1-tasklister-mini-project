document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.getElementById('create-task-form');

  form.addEventListener("submit", (event) => {

    event.preventDefault();

    const input = document.getElementById("new-task-description");
    const taskDescription = input.value;

    const task = document.createElement("li");
    task.innerHTML = taskDescription;

    const taskList = document.getElementById("tasks");
    taskList.appendChild(task);

    input.value = "";

  })
});
