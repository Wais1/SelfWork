export class Task {
    constructor(name) {
        this.name = name;
        this.timeStarted = new Date();
        this.taskStarted = false;
    }

    // Sets new date
    start() {
        this.timeStarted = new Date();
    }

    // Returns date passed since started.
    getTaskDuration() {
        let date = new Date();
        let datePassed = this.timeStarted - date; 
        
        // strip the ms
        datePassed /= 1000;

        // get seconds 
        var seconds = Math.round(datePassed);
        return seconds;
    }
}