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
       this.mHtmlElem = document.createElement("div");
       // this.mHtmlElem.style.border = "green 1px solid";
       this.mHtmlElem.style.width = "99%";
       this.mHtmlElem.style.cssFloat = "left";
       this.mHtmlElem.style.marginLeft = "auto";
       this.mHtmlElem.style.marginRight = "auto";
       this.mHtmlElem.style.padding = "5px";
       this.mHtmlElem.style.margin = "5px";
   }

   createUi() {
   }

   addRow(tableElem, qbDetails) {
       let rowElem = document.createElement("tr");
       rowElem.style.padding = "3px";
       let col1Elem = document.createElement("td");
       let col2Elem = document.createElement("td");
       let col3Elem = document.createElement("td");
       let count = 0;

       if (qbDetails.mBankObj == null) {
           count = 0;
       } else {
           count = qbDetails.mBankObj.getCount();
       }


       col3Elem.innerHTML = qbDetails.mTitle;

       col2Elem.innerHTML = count;

       let inputBtnElem = document.createElement("input");
       inputBtnElem.setAttribute("type", "button");
       inputBtnElem.setAttribute("id", qbDetails.mName);

       // if (qbDetails.mBankObj == null) {
       if (count == 0) {
           inputBtnElem.disabled = true;
           rowElem.style.backgroundColor = "gainsboro";
       }

       inputBtnElem.setAttribute("value", "Take");
       inputBtnElem.addEventListener("click",
           function(e) {gBankName = e.target.id; liyTakePractice(); });

       col1Elem.appendChild(inputBtnElem);

       rowElem.appendChild(col1Elem);
       rowElem.appendChild(col2Elem);
       rowElem.appendChild(col3Elem);

       tableElem.appendChild(rowElem);
   }

   initMenu() {
       this.createMenuTable();
       let total = gLiyQBC.getTotalQuestions();


       let h4 = document.createElement("h4");
       h4.innerHTML = `Total Questions: ${total}`
       this.mHtmlElem.appendChild(h4);
   }

   addUi(uiElem) {
       this.mHtmlElem.appendChild(uiElem);
   }

   addRows(itemsArray) {
       for (var i = 0; i < itemsArray.length; ++i) {
           this.addRow(this.tableElem, itemsArray[i]);
       }
   }

   createMenuTable() {
       this.tableElem = document.createElement("table");
       this.tableElem.setAttribute("id", "table-menu");
       // this.tableElem.setAttribute("align", "center");
       this.tableElem.setAttribute("width", "90%");

       this.tableElem.style.padding = "5px";
       this.tableElem.style.margin = "5px";
       this.mHtmlElem.appendChild(this.tableElem);
       this.addRows(gLiyQBC.getQBC());
   }
}

