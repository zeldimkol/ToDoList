// const form = document.getElementById('form');
const form = document.querySelector("#form");
// const taskInput = document.getElementById('task');
const taskInput = document.querySelector("#task");
// const tasks = document.getElementById('tasks');
const tasks = document.querySelector("#tasks");
console.log(form);

form.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();

  if (taskInput.value == "") {
    return;
  }

  const task = document.createElement("li");
  task.innerHTML = `
        <input type="checkbox">
        <p>${taskInput.value}</p>
        <button type="button">Delete</button>
    `;

  task
    .querySelector('input[type="checkbox"]')
    .addEventListener("change", toggleDone);
  task.querySelector("button").addEventListener("click", removeTask);

  tasks.appendChild(task);

  taskInput.value = "";
}

function toggleDone(e) {
  const task = e.target.parentNode;
  task.querySelector("p").classList.toggle("done");
}

function removeTask(e) {
  const task = e.target.parentNode;
  tasks.removeChild(task);
}
