class StopWatch {
   constructor(min, sec) {
       this.min = min;
       this.sec = sec;
   }

   getMin() {
       return this.min < 10 ? `0${this.min}` : `${this.min}`;
   }

   getSec() {
       return this.sec < 10 ? `0${this.sec}` : `${this.sec}`;
   }

   getValue() {
       return `${this.getMin()}:${this.getSec()}`;
   }

   tick() {
       this.sec++;
       if (this.sec == 60) {
           this.min++;
           this.sec = 0;
       }
       if (this.min == 60) {
           this.min = 0;
       }
       return `${this.getMin()}:${this.getSec()}`;
   }

   init() {
       window.setInterval(updateStopWatch, 1000);
   }
}

var gStopWatch = new StopWatch(0, 0);

function updateStopWatch() {
   let stopWatch = document.getElementById("stop_watch");
   stopWatch.textContent = `Timer: ${gStopWatch.tick()}`;
}


