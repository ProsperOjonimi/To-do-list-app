"use strict";

// Selecting elements
const inputField = document.querySelector(".input-field");
const addTaskButton = document.querySelector(".add-task");
const tasksContainer = document.querySelector(".tasks-container");
const tasks = document.querySelector(".tasks");

// Restore page to default
tasksContainer.innerHTML = " ";
// tasksContainer.style.overflow = "hidden";

// Input task functionality
addTaskButton.addEventListener("click", function (e) {
  if (inputField.value) {
    const inputText = inputField.value;
    console.log(inputText);

    const html = `<div class="tasks">
        <p class="task-text">${inputText}</p>
        <div class="btn-container">
          <button class="task-btn done">Done</button>
          <button class="task-btn remove">Remove</button>
        </div>
      </div>`;
    tasksContainer.insertAdjacentHTML("afterbegin", html);
    inputField.value = "";
  } else {
    alert("Please input a task :)");
  }

  // Done button functionality

  const btnDone = document.querySelector(".done");

  btnDone.addEventListener("click", function (e) {
    btnDone.closest(".tasks").classList.add("tasks-cancel");
    btnDone.parentElement.insertAdjacentHTML(
      "afterbegin",
      ` <button class="task-btn undone">Undone</button>`
    );
  });

  // Remove functionality
  const btnRemove = document.querySelector(".remove");

  btnRemove.addEventListener("click", function (e) {
    btnRemove.closest(".tasks").remove();
  });

  if (tasksContainer.children.length > 9) {
    tasksContainer.style.overflowY = "scroll";
  }
});
