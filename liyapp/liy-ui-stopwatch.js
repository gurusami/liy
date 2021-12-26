/*******************************************************************************

Learn It Yourself (LIY) - Software to Promote Self Study

Copyright (C) 2021, Annamalai Gurusami <annamalai.gurusami@gmail.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

*******************************************************************************/

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

function updateStopWatch() {
   let stopWatch = document.getElementById("stop_watch");
   stopWatch.textContent = `Timer: ${gStopWatch.tick()}`;
}

class LiyStopWatchUi extends LiyUi {
   constructor() {
       super();
       this.mStopWatch = new StopWatch(0, 0);
       this.spanElem;
   }

   getValue() {
       return this.mStopWatch.getValue();
   }

   createUi() {
       let divElem = document.createElement("div");
       divElem.setAttribute("id", "div-stop-watch"); 

       this.spanElem = document.createElement("span");
       this.spanElem.setAttribute("id", "span-stop-watch");
       this.spanElem.textContent = `Timer: ${this.mStopWatch.tick()}`;

       divElem.appendChild(this.spanElem);

       this.mHtmlElem = divElem;
       return (divElem);
   }

   update() {
       let stopWatch = document.getElementById("stop_watch");
       this.spanElem.textContent = `Timer: ${this.mStopWatch.tick()}`;
   }
}

