const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
const clearAllButton = document.getElementById("clearAllButton");


function addTask() {
  const taskText = inputBox.value.trim();

  if (taskText === "") {
    alert("Mohon Masukkan Tugas Anda.");
  } else {
    const li = document.createElement("li");
    li.className = "unchecked";
    li.textContent = taskText.toUpperCase();

    const span = document.createElement("span");
    span.className = "delete-button";
    span.textContent = "\u00d7";
    span.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(span);
    listContainer.appendChild(li);

    inputBox.value = "";
  }
}

function toggleTaskStatus(li) {
  li.classList.toggle("checked");
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI" || e.target.tagName === "SPAN") {
    toggleTaskStatus(e.target.closest("li"));
  }
}, false);

document.getElementById("inputBox").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function clearAllTasks() {
    const tasks = listContainer.querySelectorAll("li");
    tasks.forEach(task => {
      task.remove();
    });
  }
  
  clearAllButton.addEventListener("click", clearAllTasks);
