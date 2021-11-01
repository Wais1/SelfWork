"use strict";
import { Task } from "./Task.js";


// Update Task timer
const updateTaskTimer =()=> {
    console.log("test");
    taskList.map(x => {
        // Get DIV of task
        let taskDiv = document.getElementById(taskList.indexOf(0).toString());
        console.log(taskDiv);
        // if(taskList.length < 1)
        // {
        //     console.log("Empty");
        //     return;
        // }
        // let taskDuration = taskDiv.childNodes[1];
        // console.log("reached");

        // taskDuration.innerHTML = x.getTaskDuration();

    });
}


// reference task container
let taskContainer = document.getElementById("task-container");

// empty task list
// map function
let taskList = [];



const btnStart = document.getElementById("btn-start");

const addTask = (name) => {
    let task = new Task(name);
    taskList.push(task);

   // addTaskToUI(name);
}

const addTaskToUI = (task) => {
    let div = document.createElement("div");
    div.classList.add("task");

    // Sets id to taskList length
    div.id = taskList.length.toString();

    let p = document.createElement("p");
    p.classList.add("task-name");
    p.innerHTML = task.name;

    let p1 = document.createElement("p");
    p1.classList.add("task-time-spent");
    p1.innerText = task.getTaskDuration().toString();

    let btn = document.createElement("button");
    btn.classList.add("btn-toggle-start");

    btn.addEventListener("click", function(e) {
        alert(task.getTaskDuration());
        // Learn more : alert(e.target)
    });

    // Append the tags
    div.appendChild(p);
    div.appendChild(p1);
    div.appendChild(btn);
    
    taskContainer.appendChild(div);
}


// Deletes tasks and regenerates DOM Tree
const updateTaskUI =()=> {
    // Delete all tasks in container first
    while (taskContainer.firstChild) {
        taskContainer.firstChild.remove()
    }

    // x is each task in the taskList
    taskList.map( x => {
        addTaskToUI(x);
    });
}

/* <p class="task-name">Test name</p>
   <p class="task-time-spent">Time</p>
   <button class="btn-toggle-start"></button> */

// Add task button
let addTaskButton = document.getElementById("addTask");
let inputNameTask = document.getElementById("name-task");

addTaskButton.addEventListener("click", function(e) {
    // Add task
    addTask(inputNameTask.value);
    alert(inputNameTask.value);

    // Update Task UI
    updateTaskUI();
});


// Update UI every monitor refresh
setInterval(updateTaskTimer, 1000);