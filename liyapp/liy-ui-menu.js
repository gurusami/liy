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
       // this.mHtmlElem.style.display = "flex";
       this.mDivMap = new Map();
   }

   createUi() {
   }

   addRow(tableElem, qbDetails) {
       let rowElem = document.createElement("tr");
       let col1Elem = document.createElement("td");
       let col2Elem = document.createElement("td");

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
       tableElem.appendChild(rowElem);
   }

   initMenu() {
       this.addGKMenu();
       this.addClass6Menu();
       this.addClass7Menu();
       this.addClass8Menu();
       this.addClass9Menu();
       this.addClass10Menu();
       this.addClass11Menu();
       this.addClass12Menu();
   }

   addUi(uiElem) {
       this.mHtmlElem.appendChild(uiElem);
   }

   addGKMenu() {
       let menu = [
           new QBDetails("sample", "Sample Questions For Development Purposes",
               new LiySampleSet()),

           new QBDetails("multiply100x100", "Multiply Integers Upto 100 x 100",
               new LiyMultiplyQB(2, 100, 2, 100)),

           new QBDetails("multiplyNxNN", `Multiply 1-digit with 2-digit
               Integers`, new LiyMultiplyQB(2, 10, 10, 100)),

           new QBDetails("multiplyNxNNN", `Multiply 1-digit with 3-digit
               Integers`, new LiyMultiplyQB(2, 10, 100, 1000)),

           new QBDetails("multiplyNxNNNN", `Multiply 1-digit with 4-digit
               Integers`, new LiyMultiplyQB(2, 10, 1000, 10000)),

           new QBDetails("capitals", "Capitals of Indian States",
               new CapitalsOfIndianStates()),

           new QBDetails("matclock", "MAT: Clock Problems",
               new LiyClockProblemQB()),

           new QBDetails("matseries", "MAT: Number Series", null)];

       let ui = this.createMenuUi("gk", "General Knowledge", menu);
       addToGlobalQBC(menu);
       this.addUi(ui);
   }

   addClass6Menu() {
       let menu = [
           new QBDetails("Class6MathsKnowingYourNumbers",
               "Class 6: Mathematics: Knowing Your Numbers", null),
           new QBDetails("Class6AirAroundUs",
               "Class 6: Chemistry: Air Around Us", null),
           new QBDetails("Class6Agriculture",
               "Class 6: Geography: Agriculture", null)
       ];

       let ui = this.createMenuUi("Class6", "Class 6", menu);
       addToGlobalQBC(menu);
       this.addUi(ui);
   }

   addClass7Menu() {
       let menu = [];
       let ui = this.createMenuUi("Class7", "Class 7", menu);
       addToGlobalQBC(menu);
       this.addUi(ui);
   }

   addClass8Menu() {
       let menu = [];
       let ui = this.createMenuUi("Class8", "Class 8", menu);
       addToGlobalQBC(menu);
       this.addUi(ui);
   }


   addClass9Menu() {
       let menu = [
           new QBDetails("Class9FrenchRevolution", `Class 9:
               History: French Revolution`, null),

           new QBDetails("Class9Socialism", `Class 9: History:
               Socialism in Europe and the Russian Revolution`, null),

           new QBDetails("Class9Nazism", `Class 9: History: Nazism
               and the Rise of Hitler`, null),

           new QBDetails("Class9Colonialism", `Class 9: History:
               Forest Society and Colonialism`, null),

           new QBDetails("Class9Pastoralist", `Class 9: History:
               Pastoralists in the Modern World`, null),

           new QBDetails("c9mathtrig", `Class 9: Mathematics:
               Trigonometry`, new LiyClass9TrigonometryQB()),

           new QBDetails("c9geoveg", `Class 9: Geography: Natural
               Vegetation`, new LiyClass9GeoVegetationQB()),

           new QBDetails("Class9GeoWildLife", `Class 9: Geography:
               Wildlife`, null),

           new QBDetails("Class9BiologyWhyIll", `Class 9: Biology:
               Why do we fall ill?`, null),

           new QBDetails("Class9EconomicsPoverty", `Class 9:
               Economics: Poverty`, null)];
       let ui = this.createMenuUi("Class9", "Class 9", menu);
       addToGlobalQBC(menu);
       this.addUi(ui);
   }

   addClass10Menu() {
       let menu = [];
       let ui = this.createMenuUi("Class10", "Class 10", menu);
       addToGlobalQBC(menu);
       this.addUi(ui);
   }

   addClass11Menu() {
       let menu = [];
       let ui = this.createMenuUi("Class11", "Class 11", menu);
       addToGlobalQBC(menu);
       this.addUi(ui);
   }

   addClass12Menu() {
       let menu = [];
       let ui = this.createMenuUi("Class12", "Class 12", menu);
       addToGlobalQBC(menu);
       this.addUi(ui);
   }


   hideOrShow(e) {
       let btnId = e.target.id;
       let idx = btnId.indexOf('-');
       let menuName = btnId.substring(idx+1);
       let tableName = document.getElementById(`table-${menuName}`);
       if (e.target.value == "Show") {
           e.target.value = "Hide";
           tableName.style.display = "block";
       } else {
           e.target.value = "Show";
           tableName.style.display = "none";
       }
   }

   createMenuDiv(name) {
       let div = document.createElement("div");
       div.setAttribute("id", `div-${name}`);
       // div.style.width = "330px";
       div.style.width = "30%";
       div.style.cssFloat = "left";
       div.style.border = "solid 1px blue";
       div.style.padding = "7px";
       div.style.margin = "7px";

       return div;
   }

   createMenuUi(name, title, menu) {
       let div = this.createMenuDiv(name);

       let h3 = document.createElement("h3");
       h3.setAttribute("id", `h3-${name}`);
       h3.setAttribute("align", "center");
       h3.innerHTML = title;
       div.appendChild(h3);

       let tableElem = document.createElement("table");
       tableElem.setAttribute("id", `table-${name}`);
       tableElem.setAttribute("align", "center");
       tableElem.setAttribute("width", "100%");

       div.appendChild(tableElem);

       for (var i = 0; i < menu.length; ++i) {
            this.addRow(tableElem, menu[i]);
       }
       return div;
   }

}

