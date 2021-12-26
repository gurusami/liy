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

class LiyUi {
   constructor() {
       if (this.constructor == LiyUi) {
           throw new Error("Abstract classes can't be instantiated.");
       }
   }

   createUi() {
       throw new Error("Not implemented in abstract base class.");
   }
}

class LiyUiDetails {
   constructor(name, obj) {
       this.mName = name;
       this.mUiObj = obj;
       this.mUiElem;
   }

   createElement() {
       this.mUiElem = this.mUiObj.createUi();
   }
}

class LiyUiArray {
   constructor() {
       this.mLiyUiArray = new Array();
   }

   createElements() {
       for (var i = 0; i < this.mLiyUiArray.length; ++i) {
           this.mLiyUiArray[i].createElement();
       }
   }

   getUiDetails(uiName) {
       for (var i = 0; i < this.mLiyUiArray.length; ++i) {
           if (this.mLiyUiArray[i].mName == uiName) {
               return this.mLiyUiArray[i];
           }
       }
       return null;
   }

   getUiObj(uiName) {
       for (var i = 0; i < this.mLiyUiArray.length; ++i) {
           if (this.mLiyUiArray[i].mName == uiName) {
               return this.mLiyUiArray[i].mUiObj;
           }
       }
       return null;
   }

   addUiDetails(uiDetails) {
       /* uiObj is of type LiyUiDetails */
       this.mLiyUiArray.push(uiDetails);
   }
}

let gLiyUiArray = new LiyUiArray();

