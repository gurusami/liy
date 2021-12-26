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

class LiyUiProgressBar extends LiyUi {
   constructor() {
       super();
       this.tableElem;
   }

   createUi() {
       let divElem = document.createElement("div");
       divElem.setAttribute("id", "div_progress"); 

       this.tableElem = document.createElement("table");
       this.tableElem.setAttribute("id", "table_progress");
       this.tableElem.style.width = "100%";
       let rowElem = document.createElement("tr");

       let c1Elem = document.createElement("td");
       c1Elem.setAttribute("id", "progress_1");
       c1Elem.style.textAlign = "center";
       c1Elem.style.width = "0%";
       c1Elem.style.borderStyle = "solid";
       c1Elem.style.borderColor = "darkseagreen";
       c1Elem.style.backgroundColor = "darkseagreen";

       let c2Elem = document.createElement("td");
       c2Elem.setAttribute("id", "progress_2");
       c2Elem.style.textAlign = "center";
       c2Elem.style.width = "100%";
       c2Elem.style.borderStyle = "solid";
       c2Elem.style.borderColor = "gainsboro";
       c2Elem.style.backgroundColor = "gainsboro";

       rowElem.appendChild(c1Elem);
       rowElem.appendChild(c2Elem);

       this.tableElem.appendChild(rowElem);
       divElem.appendChild(this.tableElem);

       this.mHtmlElem = divElem;
   }

   update(nDone, nRemain) {
       let p_1 = (nDone * 100)/(nDone + nRemain);
       let p_2 = (100 - p_1);
       let progress_1 = document.getElementById("progress_1");
       let progress_2 = document.getElementById("progress_2");
       progress_1.style.width = `${p_1}%`;
       progress_1.innerHTML = nDone;
       progress_2.style.width = `${p_2}%`;
       progress_2.innerHTML = nRemain;
   }
}

