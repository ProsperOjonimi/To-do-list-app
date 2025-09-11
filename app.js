"use strict";

const inputField = document.querySelector(".input-field");
const addTaskButton = document.querySelector(".add-task");
const tasksContainer = document.querySelector(".tasks-container");
const tasks = document.querySelector(".tasks");
tasksContainer.innerHTML = " ";

const taskItems = [];

let taskMain = JSON.parse(localStorage.getItem("tasks"));
const renderTasks = function () {
  taskMain?.forEach((element, i) => {
    const html = `<div class="tasks" >
        <p class="task-text">${element}</p>
        <div class="btn-container">
          <button class="task-btn done">Done</button>
          <button class="task-btn remove" data-index=${i}>Remove</button>
        </div>
      </div>`;
    tasksContainer.insertAdjacentHTML("afterbegin", html);

    const btnDone = document.querySelector(".done");

    btnDone.addEventListener("click", function (e) {
      btnDone.closest(".tasks").classList.add("tasks-cancel");
      btnDone.parentElement.insertAdjacentHTML(
        "afterbegin",
        ` <button class="task-btn undone">Undone</button>`
      );

      const btnUndone = btnDone.parentElement.querySelector(".undone");
      btnUndone.addEventListener("click", function (e) {
        btnUndone.closest(".tasks").classList.remove("tasks-cancel");
        btnUndone.remove();
        btnUndone.parentElement.insertAdjacentHTML(
          "afterbegin",
          ` <button class="task-btn done">Done</button>`
        );
      });
    });

    const btnRemove = btnDone.parentElement.querySelector(".remove");

    btnRemove.addEventListener("click", function (e) {
      console.log(taskMain);
      // Devlopment tests
      console.log(i);
      console.log(e.target.dataset.index);
      console.log(Number(e.target.dataset.index) === i);
      console.log("Checking...", Number(e.target.dataset.index), i);
      console.log(taskMain, taskItems);
      // .......................
      if (e.target) {
        e.target.closest(".tasks").remove();
        taskMain.splice(i, 1);
        // Development test
        console.log("MATCH! Removing...");
        localStorage.setItem("tasks", JSON.stringify(taskMain));
        console.log(taskMain);
        // ........................
      }
    });
  });

  if (tasksContainer.children.length > 9) {
    tasksContainer.style.overflowY = "scroll";
  }
};
let a = -1;
const appFunctionality = function () {
  taskMain = JSON.parse(localStorage.getItem("tasks"));
  a++;
  console.log(taskItems);
  const inputText = inputField.value.trim();
  if (inputText) {
    console.log(inputText);
    taskItems.push(inputText);
    // console.log(taskItems);

    localStorage.setItem("tasks", JSON.stringify(taskItems));

    const html = `<div class="tasks " >
        <p class="task-text">${inputText}</p>
        <div class="btn-container">
          <button class="task-btn done">Done</button>
          <button class="task-btn remove" data-index=${a}>Remove</button>
        </div>
      </div>`;
    tasksContainer.insertAdjacentHTML("afterbegin", html);
    inputField.value = "";
  } else if (inputText.length < 1) {
    alert("Please input a task :)");
  }
  console.log(inputText.length);

  const btnDone = document.querySelector(".done");

  btnDone.addEventListener("click", function (e) {
    btnDone.closest(".tasks").classList.add("tasks-cancel");
    btnDone.parentElement.insertAdjacentHTML(
      "afterbegin",
      ` <button class="task-btn undone">Undone</button>`
    );

    const btnUndone = btnDone.parentElement.querySelector(".undone");
    btnUndone.addEventListener("click", function (e) {
      btnUndone.closest(".tasks").classList.remove("tasks-cancel");
      btnUndone.remove();
      btnUndone.parentElement.insertAdjacentHTML(
        "afterbegin",
        ` <button class="task-btn done">Done</button>`
      );
    });
  });
  const btnRemove = document.querySelector(".remove");

  btnRemove.addEventListener("click", function (e) {
    // Devlopment tests
    console.log(a);
    console.log(e.target.dataset.index);
    console.log(Number(e.target.dataset.index) === a);
    console.log("Checking...", Number(e.target.dataset.index), a);
    console.log(taskMain, taskItems);
    // .......................
    if (e.target) {
      e.target.closest(".tasks").remove();
      taskItems.splice(a, 1);
      // Development test
      console.log("MATCH! Removing...");
      localStorage.setItem("tasks", JSON.stringify(taskMain));
      console.log(taskMain);
      // ........................
    }
  });

  if (tasksContainer.children.length > 9) {
    tasksContainer.style.overflowY = "scroll";
  }
};

addTaskButton.addEventListener("click", appFunctionality);
renderTasks();
