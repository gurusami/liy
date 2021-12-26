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

class LiyUiMenu extends LiyUi {
   constructor() {
       super();
       this.tableElem;
   }

   createUi() {
       let divElem = document.createElement("div");
       divElem.setAttribute("id", "div-menu"); 

       this.tableElem = document.createElement("table");
       this.tableElem.setAttribute("id", "liy_table_menu");

       divElem.appendChild(this.tableElem);

       this.mHtmlElem = divElem;
   }

   initMenu() {
       for (var i = 0; i < gLiyQBC.getCount(); ++i) {
           let rowElem = document.createElement("tr");
           let col1Elem = document.createElement("td");
           let col2Elem = document.createElement("td");

           let qbDetails = gLiyQBC.getQBDetails(i);
           col1Elem.innerHTML = qbDetails.mTitle;

           let inputBtnElem = document.createElement("input");
           inputBtnElem.setAttribute("type", "button");
           inputBtnElem.setAttribute("id", qbDetails.mName);
           inputBtnElem.setAttribute("value", "Take");
           inputBtnElem.addEventListener("click",
               function(e) {gBankName = e.target.id; liyTakePractice(); });

           col2Elem.appendChild(inputBtnElem);

           rowElem.appendChild(col1Elem);
           rowElem.appendChild(col2Elem);
           this.tableElem.appendChild(rowElem);
       }
   }
}

