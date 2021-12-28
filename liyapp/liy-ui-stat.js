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

class LiyUiStats extends LiyUi {
   constructor() {
       super();
       this.mTableElem;
   }

   createUi() {
       let divElem = document.createElement("div");
       divElem.setAttribute("id", "div-stat"); 
       this.mHtmlElem = divElem;

       this.mTableElem = document.createElement("table");
       this.mTableElem.setAttribute("id", "liy-stat-table");
       this.mTableElem.style.marginLeft = "auto";
       this.mTableElem.style.marginRight = "auto";
       this.addHeaderRow();
       this.addSuccessMessage();
       divElem.appendChild(this.mTableElem);
       return divElem;
   }

   addHeaderRow() {
       let rowElem = document.createElement("tr");
       let colElem1 = document.createElement("th");
       let colElem2 = document.createElement("th");

       colElem1.innerHTML = 'Name';
       colElem2.innerHTML = 'Value';

       rowElem.appendChild(colElem1);
       rowElem.appendChild(colElem2);

       this.mTableElem.appendChild(rowElem);
   }

   addSuccessMessage() {
       let h1 = document.createElement("h1");
       h1.setAttribute("align", "center");
       h1.innerHTML = 'Success! You Have Completed!';
       this.mHtmlElem.appendChild(h1);
   }

   addRow(value, key) {
       let rowElem = document.createElement("tr");
       let colElem1 = document.createElement("td");
       let colElem2 = document.createElement("td");

       colElem1.innerHTML = key;
       colElem2.innerHTML = value;

       rowElem.appendChild(colElem1);
       rowElem.appendChild(colElem2);

       this.mTableElem.appendChild(rowElem);
   }

   display(liyStatistics) {
       let m = liyStatistics.getMap();
       console.log(`Map has ${m.size} entries`);
       liyStatistics.getMap().forEach(this.addRow, this);
   }
}

/******************************************************************************/

class LiyStatistics {
   constructor() {
       this.mKeyMap = new Map();
   }

   setStartTime() {
       this.mKeyMap.set("Start Time", new Date().toString());
   }

   setEndTime() {
       this.mKeyMap.set("End Time", new Date().toString());
   }

   setTimeTaken(timeString) {
       this.mKeyMap.set('Time Taken', timeString);
   }

   getMap() {
       return this.mKeyMap;
   }
}
