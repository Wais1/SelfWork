export class Task {
    constructor(name) {
        this.name = name;
        this.timeStarted = new Date();
        this.isActive = true;
        this.totalSeconds = 0;
    }

    start() {
        this.timeStarted = new Date();
    }

    // Toggle 
    toggleActive() {
        if(this.isActive) {
            this.totalSeconds += this.getTaskDuration();    // Append to total seconds.
        }
        else {
            this.timeStarted = new Date();  // Start a new Date to measure.
        }
        this.isActive = !this.isActive; // Toggle active
    }

    // Returns total seconds
    getTotalSeconds() {
        return this.totalSeconds;
    }

    // Returns date passed since started.
    getTaskDuration() {
        // if task inactive, return
        if(!this.isActive){ return; }

        let date = new Date();
        let datePassed = this.timeStarted - date; 
        
        // strip the ms
        datePassed /= 1000;

        // get seconds 
        var seconds = Math.abs(Math.round(datePassed));
        return seconds;
    }
}