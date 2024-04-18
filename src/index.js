document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskDescription = document.getElementById("new-task-description").value;
    const priority = document.getElementById("priority").value;
    const user = document.getElementById("user").value;
    const duration = document.getElementById("duration").value;
    const dateDue = document.getElementById("date-due").value;

    const task = createTaskElement(taskDescription, priority, user, duration, dateDue);
    taskList.appendChild(task);

    form.reset();
  });

  taskList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      event.target.parentElement.remove();
    }
  });

  document.getElementById("sort-ascending").addEventListener("click", () => {
    sortTasks("ascending");
  });

  document.getElementById("sort-descending").addEventListener("click", () => {
    sortTasks("descending");
  });
});

function createTaskElement(description, priority, user, duration, dateDue) {
  const task = document.createElement("li");
  task.innerHTML = `
    <span class="description" style="color: ${getColorForPriority(priority)};">${description}</span>
    <span class="priority">${priority}</span>
    <span class="user">${user}</span>
    <span class="duration">${duration}</span>
    <span class="date-due">${dateDue}</span>
    <button class="delete-button">Delete</button>
  `;
  return task;
}

function getColorForPriority(priority) {
  switch (priority) {
    case "High":
      return "red";
    case "Medium":
      return "yellow";
    case "Low":
      return "green";
    default:
      return "black";
  }
}

function sortTasks(order) {
  const taskList = document.getElementById("tasks");
  const tasks = Array.from(taskList.children);

  tasks.sort((a, b) => {
    const priorityA = a.querySelector(".priority").textContent;
    const priorityB = b.querySelector(".priority").textContent;
    return order === "ascending"
      ? priorityA.localeCompare(priorityB)
      : priorityB.localeCompare(priorityA);
  });

  taskList.innerHTML = "";
  tasks.forEach((task) => {
    taskList.appendChild(task);
  });
}
