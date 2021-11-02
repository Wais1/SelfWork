export class Task {
    constructor(name) {
        this.name = name;
        this.timeStarted = new Date();
        this.isActive = true;
        this.totalSeconds = 0;
    }

    // Returns total seconds
    getTotalSeconds() {
        return this.totalSeconds;
    }
    getIsActive() {
        return this.isActive;
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

    // Formats seconds into hours, returns it
    formatSeconds(seconds) {
        seconds = Number(seconds);
        var h = Math.floor(seconds / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 3600 % 60);
        
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return hDisplay + mDisplay + sDisplay; 
    }


    // Returns date passed since started.
    getTaskDuration() {
        // if task inactive, return
        if(!this.isActive){ return; }

        // Calculate time passed since timeStarted
        let date = new Date();
        let datePassed = this.timeStarted - date; 
        
        // strip the ms
        datePassed /= 1000;


        // get seconds 
        var seconds = Math.abs(Math.round(datePassed));

        return seconds;
    }
}