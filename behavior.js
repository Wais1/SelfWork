import Task from "./Task";

const btnStart = document.getElementById("btn-start");

btnStart.addEventListener("click", function() {
    alert("Test");
    let t = new Task('Study');
    alert(t.getTaskDuration());
});

