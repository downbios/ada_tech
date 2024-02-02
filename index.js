const toForm = document.querySelector("#all-form");
const toInput = document.querySelector("#task-title-input");
const toUl = document.querySelector("#all-task");

let toTasks = [];
toForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const toTitle = toInput.value;

  if (toTitle.length < 4) {
    alert("your task is very short!");
    return;
  }

  toTasks.push({
    title: toTasks,
    done: false,
  });

  const li = document.createElement("li");

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  const span = document.createElement("span");
  span.textContent = toTitle;

  const button = document.createElement("button");
  button.textContent = "remove";
  button.addEventListener("click", (event) => {
    toUl.removeChild(event.target.parentElement);
  });

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  toUl.appendChild(li);

  toInput.value = "";
});
