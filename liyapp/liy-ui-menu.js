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
       this.addClass9Menu();
   }

   addUi(uiElem) {
       this.mHtmlElem.appendChild(uiElem);
   }

   addClass9Menu() {
       let menu = this.createClass9Menu();
       let ui = this.createClass9MenuUi(menu);
       addToGlobalQBC(menu);
       this.addUi(ui);
   }

   /* Class 9 */
   createClass9Menu() {
       let class9Menu = new Array();

       class9Menu.push(new QBDetails("c9mathtrig",
                               "Class 9: Mathematics: Trigonometry",
                               new LiyClass9TrigonometryQB()));

       class9Menu.push(
           new QBDetails("c9geoveg", "Class 9: Geography: Natural Vegetation",
           new LiyClass9GeoVegetationQB()));

       class9Menu.push(new QBDetails("Class9GeoWildLife", `Class 9: Geography:
       Wildlife`, null));

       class9Menu.push(new QBDetails("Class9EconomicsPoverty",
       `Class 9: Economics: Poverty`, null));

       /* Class 9: History */
       class9Menu.push(new QBDetails("Class9FrenchRevolution",
       `Class 9: History: French Revolution`, null));

       class9Menu.push(
           new QBDetails("Class9Socialism",
           `Class 9: History: Socialism in Europe and the Russian Revolution`,
           null));

       return class9Menu;
   }

   createClass9MenuUi(menu) {
       let div = document.createElement("div");
       div.setAttribute("id", "div-class9"); 

       let tableElem = document.createElement("table");
       tableElem.setAttribute("id", "class9-table-menu");

       div.appendChild(tableElem);

       for (var i = 0; i < menu.length; ++i) {
            this.addRow(tableElem, menu[i]);
       }
       return div;
   }
}

