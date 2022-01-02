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
   }

   createUi() {
       let divElem = document.createElement("div");
       divElem.style.cssFloat = "left";
       divElem.style.border = "solid 1px blue";
       divElem.setAttribute("id", "div-menu"); 

       this.tableElem = document.createElement("table");
       this.tableElem.setAttribute("id", "liy_table_menu");

       divElem.appendChild(this.tableElem);

       this.mHtmlElem.appendChild(divElem);
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
       for (var i = 0; i < gLiyQBC.getCount(); ++i) {
           let qbDetails = gLiyQBC.getQBDetails(i);
           this.addRow(this.tableElem, qbDetails);
       }
       this.addClass6Menu();
       this.addClass9Menu();
   }

   addUi(uiElem) {
       this.mHtmlElem.appendChild(uiElem);
   }

   addClass6Menu() {
       let ui = this.createMenuUi("Class6", "Class 6", [], true);
       this.addUi(ui);
       this.addClass6ChemistryMenu(ui);
       this.addClass6GeographyMenu(ui);
   }

   addClass6ChemistryMenu(parentUi) {
       let menu = [
           new QBDetails("Class6AirAroundUs",
               "Class 6: Chemistry: Air Around Us", null)
       ];

       let ui = this.createMenuUi("Class6Chemistry", "Class 6: Chemistry",
           menu, false);
       parentUi.appendChild(ui);
       addToGlobalQBC(menu);
   }

   addClass6GeographyMenu(parentUi) {
       let menu = [
           new QBDetails("Class6Agriculture",
               "Class 6: Geography: Agriculture", null)
       ];

       let ui = this.createMenuUi("Class6Geography", "Class 6: Geography",
           menu, false);
       parentUi.appendChild(ui);
       addToGlobalQBC(menu);
   }


   addClass9Menu() {
       let menu = this.createClass9Menu();
       let ui = this.createMenuUi("Class9", "Class 9", menu, true);
       addToGlobalQBC(menu);
       this.addUi(ui);
       this.addClass9HistoryMenu(ui);
   }

   createClass9Menu() {
       let class9Menu = new Array();

       class9Menu.push(new QBDetails("c9mathtrig", `Class 9: Mathematics:
           Trigonometry`, new LiyClass9TrigonometryQB()));

       class9Menu.push(new QBDetails("c9geoveg", `Class 9: Geography: Natural
           Vegetation`, new LiyClass9GeoVegetationQB()));

       class9Menu.push(new QBDetails("Class9GeoWildLife", `Class 9: Geography:
           Wildlife`, null));

       class9Menu.push(new QBDetails("Class9EconomicsPoverty", `Class 9:
           Economics: Poverty`, null));

       return class9Menu;
   }

   addClass9HistoryMenu(class9MenuUi) {
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
               Pastoralists in the Modern World`, null)];

       let ui = this.createMenuUi("Class9History", "Class 9: History", menu,
           false);
       class9MenuUi.appendChild(ui);
       addToGlobalQBC(menu);
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

   createMenuDiv(name, isContainer) {
       let div = document.createElement("div");
       div.setAttribute("id", `div-${name}`);

       if (isContainer) {
           div.style.width = "330px";
       } else {
           div.style.width = "300px";
       }

       div.style.cssFloat = "left";
       div.style.border = "solid 1px blue";
       div.style.marginLeft = "5px";
       div.style.marginRight = "5px";
       div.style.marginTop = "5px";
       div.style.marginBottom = "5px";
       div.style.padding = "7px";

       return div;
   }

   createMenuUi(name, title, menu, isContainer) {
       let div = this.createMenuDiv(name, isContainer);

       let hideButton = document.createElement("input");
       hideButton.setAttribute("type", "button");
       hideButton.setAttribute("id", `button-${name}`);
       hideButton.setAttribute("value", "Hide");
       hideButton.addEventListener("click", this.hideOrShow);
       div.appendChild(hideButton);

       let h3 = document.createElement("h3");
       h3.setAttribute("id", `h3-${name}`);
       h3.setAttribute("align", "center");
       h3.innerHTML = title;
       div.appendChild(h3);

       let tableElem = document.createElement("table");
       tableElem.setAttribute("id", `table-${name}`);

       div.appendChild(tableElem);

       for (var i = 0; i < menu.length; ++i) {
            this.addRow(tableElem, menu[i]);
       }
       return div;
   }

   createListMenu() {
   }
}

