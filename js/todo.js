const toDoform = document.getElementById("todo-form");
const toDoInput = toDoform.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = newToDo;
  li.appendChild(span);

  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoform.addEventListener("submit", handleToDoSubmit);
