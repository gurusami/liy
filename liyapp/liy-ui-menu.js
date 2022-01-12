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

   addHeader(tableElem) {
       let rowElem = document.createElement("tr");
       let sno = document.createElement("th");
       let col1Elem = document.createElement("th");
       let qcElem = document.createElement("th");
       let col3Elem = document.createElement("th");
       let col4Elem = document.createElement("th");

       sno.style.padding = "4px";
       rowElem.style.padding = "4px";
       col1Elem.style.padding = "4px";
       qcElem.style.padding = "4px";
       col3Elem.style.padding = "4px";
       col4Elem.style.padding = "4px";

       col1Elem.innerHTML = "Action";
       qcElem.innerHTML = "Questions";
       col3Elem.innerHTML = "Question Bank Name";
       col4Elem.innerHTML = "Last Updated";
       sno.innerHTML = "S No. ";

       rowElem.appendChild(sno);
       rowElem.appendChild(col1Elem);
       rowElem.appendChild(col3Elem);
       rowElem.appendChild(qcElem);
       rowElem.appendChild(col4Elem);

       tableElem.appendChild(rowElem);
   }

   addRow(tableElem, qbDetails, serialNumber) {
       let rowElem = document.createElement("tr");
       rowElem.style.padding = "3px";
       let sno = document.createElement("td");
       let col1Elem = document.createElement("td");
       let qcElem = document.createElement("td"); /* Question Count Element */
       let col3Elem = document.createElement("td");
       let col4Elem = document.createElement("td");
       let count = 0;
       let lastUpdated = "";

       if (qbDetails.mBankObj == null) {
           count = 0;
       } else {
           count = qbDetails.mBankObj.getCount();
           lastUpdated = qbDetails.mBankObj.mLastUpdated;
       }


       col3Elem.innerHTML = qbDetails.mTitle;
       col4Elem.innerHTML = lastUpdated;

       qcElem.innerHTML = count;
       sno.innerHTML = serialNumber;

       let inputBtnElem = document.createElement("input");
       inputBtnElem.setAttribute("type", "button");
       inputBtnElem.setAttribute("id", qbDetails.mName);

       if (count == 0) {
           inputBtnElem.disabled = true;
           rowElem.style.backgroundColor = "gainsboro";
       }

       /* If the practice is auto-generated, then don't disable it.  Initially
       it will show as zero questions.  Use a different color to highlight the
       fact that it is auto-generated practice. */
       if (qbDetails.mBankObj == null) {
       } else {
           if (qbDetails.mBankObj.constructor.name == "LiyPractice") {
               inputBtnElem.disabled = false;
               rowElem.style.backgroundColor = "Aquamarine";
           }
       }

       this.setBackgroundColor(rowElem, qbDetails);

       inputBtnElem.setAttribute("value", "Take");
       inputBtnElem.addEventListener("click",
           function(e) {gBankName = e.target.id; liyTakePractice(); });

       col1Elem.appendChild(inputBtnElem);

       rowElem.appendChild(sno);
       rowElem.appendChild(col1Elem);
       rowElem.appendChild(col3Elem);
       rowElem.appendChild(qcElem);
       rowElem.appendChild(col4Elem);

       tableElem.appendChild(rowElem);
   }

   setBackgroundColor(rowElem, qbDetails) {
       if (qbDetails.mTitle.includes("Political Science")) {
           rowElem.style.backgroundColor = "Coral";
       } else if (qbDetails.mTitle.includes("Mathematics")) {
           rowElem.style.backgroundColor = gLiyTheme.getMathsColor();
       } else if (qbDetails.mTitle.includes("History")) {
           rowElem.style.backgroundColor = "SkyBlue";
       } else if (qbDetails.mTitle.includes("Geography")) {
           rowElem.style.backgroundColor = "LightGreen";
       } else if (qbDetails.mTitle.includes("Chemistry")) {
           rowElem.style.backgroundColor = "Yellow";
       } else if (qbDetails.mTitle.includes("MAT")) {
           rowElem.style.backgroundColor = "turquoise";
       }
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
           this.addRow(this.tableElem, itemsArray[i], i + 1);
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
       this.addHeader(this.tableElem);
       this.addRows(gLiyQBC.getQBC());
   }
}

