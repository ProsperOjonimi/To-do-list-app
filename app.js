// "use strict";

// const inputField = document.querySelector(".input-field");
// const addTaskButton = document.querySelector(".add-task");
// const tasksContainer = document.querySelector(".tasks-container");
// const tasks = document.querySelector(".tasks");
// tasksContainer.innerHTML = " ";

// let taskItems = JSON.parse(localStorage.getItem("tasks")) || [];
// let taskMain = taskItems;
// const renderTasks = function () {
//   tasksContainer.innerHTML = "";
//   taskMain?.forEach((element, i) => {
//     if (element.done) {
//       console.log(
//         "This task has been marked as done and when i refresh, i render it as done"
//       );
//     } else {
//       console.log("This task has not been done hence i render undone state");
//     }
//     console.log(element);
//     console.log(element.done);
//     const html = `<div class="tasks ${element.done ? "tasks-cancel" : ""}">
//         <p class="task-text">${element.taskText}</p>
//         <div class="btn-container">
// <button class="task-btn ${element.done ? "undone" : "done"}">${
//       element.done ? "Undone" : "Done"
//     }</button>

//           <button class="task-btn remove" data-index=${i}>Remove</button>
//         </div>
//       </div>`;
//     tasksContainer.insertAdjacentHTML("afterbegin", html);

//     // element.done = false;

//     if (element.done) {
//       const btnUnDone = document.querySelector(".undone");
//       btnUnDone.addEventListener("click", function (e) {
//         btnUnDone.closest(".tasks").classList.remove("tasks-cancel");
//         btnUnDone.parentElement.insertAdjacentHTML(
//           "afterbegin",
//           ` <button class="task-btn done">Done</button>`
//         );
//         btnUnDone.remove();
//       });

//       const btnRemove = btnUnDone.parentElement.querySelector(".remove");

//       btnRemove.addEventListener("click", function (e) {
//         console.log(taskMain);
//         // Devlopment tests
//         console.log(i);
//         console.log(e.target.dataset.index);
//         console.log(Number(e.target.dataset.index) === i);
//         console.log("Checking...", Number(e.target.dataset.index), i);
//         console.log(taskMain, taskItems);
//         // .......................
//         if (e.target) {
//           e.target.closest(".tasks").remove();
//           taskMain.splice(i, 1);
//           // Development test
//           console.log("MATCH! Removing...");
//           localStorage.setItem("tasks", JSON.stringify(taskMain));
//           console.log(taskMain);
//           // ........................
//         }
//       });
//     }

//     //nnnnnnnn
//     if (tasksContainer.children.length > 9) {
//       tasksContainer.style.overflowY = "scroll";
//     }
//   });
// };
// let a = -1;

// // ....................................
// const appFunctionality = function () {
//   taskMain = JSON.parse(localStorage.getItem("tasks"));
//   a++;
//   const inputText = inputField.value.trim();
//   if (inputText) {
//     // taskItems.push(inputText);
//     taskItems.push({ taskText: inputText, done: false });

//     localStorage.setItem("tasks", JSON.stringify(taskItems));

//     const html = `<div class="tasks " >
//         <p class="task-text">${inputText}</p>
//         <div class="btn-container">
//           <button class="task-btn done">Done</button>
//           <button class="task-btn remove" data-index=${a}>Remove</button>
//         </div>
//       </div>`;
//     tasksContainer.insertAdjacentHTML("afterbegin", html);
//     inputField.value = "";
//   } else if (inputText.length < 1) {
//     alert("Please input a task :)");
//   }

//   const btnDone = document.querySelector(".done");

//   btnDone.addEventListener("click", function (e) {
//     console.log(a);
//     taskItems[a].done = true;
//     localStorage.setItem("tasks", JSON.stringify(taskItems));
//     console.log(taskItems[a].done);

//     btnDone.closest(".tasks").classList.add("tasks-cancel");
//     btnDone.parentElement.insertAdjacentHTML(
//       "afterbegin",
//       ` <button class="task-btn undone">Undone</button>`
//     );

//     const btnUndone = btnDone.parentElement.querySelector(".undone");
//     btnUndone.addEventListener("click", function (e) {
//       taskItems[a].done = false;
//       localStorage.setItem("tasks", JSON.stringify(taskItems));
//       console.log(taskItems[a].done);
//       btnUndone.closest(".tasks").classList.remove("tasks-cancel");
//       btnUndone.remove();
//       btnUndone?.parentElement?.insertAdjacentHTML(
//         "afterbegin",
//         ` <button class="task-btn done">Done</button>`
//       );
//     });
//   });
//   const btnRemove = document.querySelector(".remove");

//   btnRemove.addEventListener("click", function (e) {
//     // Devlopment tests
//     console.log(a);
//     console.log(e.target.dataset.index);
//     console.log(Number(e.target.dataset.index) === a);
//     console.log("Checking...", Number(e.target.dataset.index), a);
//     console.log(taskMain, taskItems);
//     // .......................
//     if (e.target) {
//       e.target.closest(".tasks").remove();
//       taskItems.splice(a, 1);
//       // Development test
//       console.log("MATCH! Removing...");
//       localStorage.setItem("tasks", JSON.stringify(taskMain));
//       console.log(taskMain);
//       // ........................
//     }
//   });

//   if (tasksContainer.children.length > 9) {
//     tasksContainer.style.overflowY = "scroll";
//   }
// };

// addTaskButton.addEventListener("click", appFunctionality);
// renderTasks();

// // else if (element.done === false) {
// //       document.querySelector(".done").addEventListener("click", function (e) {
// //         e.target.closest(".tasks").classList.add("tasks-cancel");
// //         e.target.remove();
// //         e.target.parentElement.insertAdjacentHTML(
// //           "afterbegin",
// //           ` <button class="task-btn done">undone</button>`
// //         );
// //       });
// //     }

"use strict";

const inputField = document.querySelector(".input-field");
const addTaskButton = document.querySelector(".add-task");
const tasksContainer = document.querySelector(".tasks-container");
// const tasks = document.querySelector(".tasks");
tasksContainer.innerHTML = "";

let taskItems = JSON.parse(localStorage.getItem("tasks")) || [];
let taskMain = taskItems;

const renderTasks = function () {
  tasksContainer.innerHTML = ""; // clear before rendering
  taskMain?.forEach((element, i) => {
    const html = `<div class="tasks ${element.done ? "tasks-cancel" : ""}">
        <p class="task-text">${element.taskText}</p>
        <div class="btn-container">
          <button class="task-btn ${
            element.done ? "undone" : "done"
          }" data-index="${i}">${element.done ? "Undone" : "Done"}</button>
          <button class="task-btn remove" data-index="${i}">Remove</button>
        </div>
      </div>`;
    tasksContainer.insertAdjacentHTML("afterbegin", html);
  });

  if (tasksContainer.children.length > 9) {
    tasksContainer.style.overflowY = "scroll";
  }
};

const appFunctionality = function () {
  const inputText = inputField.value.trim();
  if (!inputText) {
    alert("Please input a task :)");
    return;
  }
  taskItems.push({ taskText: inputText, done: false });
  localStorage.setItem("tasks", JSON.stringify(taskItems));
  inputField.value = "";
  renderTasks();
};

// delegation for done/undone/remove
tasksContainer.addEventListener("click", function (e) {
  const btn = e.target;
  if (!btn.classList.contains("task-btn")) return;

  const index = Number(btn.dataset.index);
  if (Number.isNaN(index)) return;

  if (btn.classList.contains("done")) {
    taskItems[index].done = true;
    localStorage.setItem("tasks", JSON.stringify(taskItems));
    renderTasks();
  } else if (btn.classList.contains("undone")) {
    taskItems[index].done = false;
    localStorage.setItem("tasks", JSON.stringify(taskItems));
    renderTasks();
  } else if (btn.classList.contains("remove")) {
    taskItems.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(taskItems));
    renderTasks();
  }
});

addTaskButton.addEventListener("click", appFunctionality);
renderTasks();
