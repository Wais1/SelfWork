export default class Task {
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
        return date.getSeconds() - this.timeStarted.getSeconds();
    }
}