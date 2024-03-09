let input = document.querySelector("#input-box");
let button = document.querySelector("button");
let listContainer = document.querySelector("#list-container");

function addTask() {
  if (input.value === "") {
    alert("Please enter a task.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  input.value = "";
}

listContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveData();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("tasks");
}

showData();