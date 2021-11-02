"use strict";
import { Task } from "./Task.js";


// Update Task timer
const updateTaskTimer =()=> {
    taskList.map((currTask, index) => {
        
        // Get DIV of task. (getelemenbyID, need to get parent then child.)
        let taskDiv = taskContainer.childNodes[index];

        // Get Task duration, 2nd child of "task" div
        let taskDuration = taskDiv.childNodes[1];

        // Get Total Task duration, 4th child of "task" div
        let totalTaskDuration = taskDiv.childNodes[3];


        // If task is not active, set timer to total seconds.
        if(!currTask.getIsActive()){
            // Set to total seconds.
            taskDuration.innerHTML = "";
            // totalTaskDuration.innerHTML = currTask.getTotalSeconds();

        } else {
            // Update task duration text
            taskDuration.innerHTML = currTask.getTaskDuration();
        }

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
    p1.innerText = task.getTaskDuration();

    let p3 = document.createElement("p");
    p3.classList.add("task-total-time");
    p3.innerHTML = task.getTotalSeconds();

    let btn = document.createElement("button");
    btn.classList.add("btn-start");
    btn.classList.add("btn-img-pause");


    // Task's start/pause button
    btn.addEventListener("click", function(e) {
        // alert("Task duration: " + task.getTaskDuration());
        // Toggle active
        task.toggleActive();
        // alert("Total Seconds" + task.getTotalSeconds());

        // Toggles pause svg
        togglePauseImg(btn, task);

        // Update view on the totalSeconds (faster)
        p3.innerHTML = task.formatSeconds(task.getTotalSeconds());
        p1.innerHTML = "";

        // Learn more : alert(e.target)
    });

    // Append the tags
    div.appendChild(p);
    div.appendChild(p1);
    div.appendChild(btn);
    div.appendChild(p3);
    
    taskContainer.appendChild(div);
}

// Toggle pause button img to resume / vice versa

const togglePauseImg =(btn, task)=> {
    if(task.getIsActive()) 
    {
        btn.classList.remove("btn-img-resume");
        btn.classList.add("btn-img-pause");
    }
    else {
        btn.classList.remove("btn-img-pause");
        btn.classList.add("btn-img-resume");
    }

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

    // Update Task UI
    updateTaskUI();

    // Clear input section
    inputNameTask.value = "";
});

// Add listener for pressing enter on input
inputNameTask.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        addTaskButton.click();
    }
});


// Update UI every monitor refresh
setInterval(updateTaskTimer, 1000);