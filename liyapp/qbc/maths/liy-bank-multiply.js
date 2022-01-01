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

class TwoNumbers {
   constructor(x, y) {
       this.x = x;
       this.y = y;
   }

   is_same(obj) {
       if ((obj.x == this.x && obj.y == this.y) ||
           (obj.x == this.y && obj.y == this.x)) {
           return true;
       }
       return false;
   }

   makeQuestion() {
       return new QuestionFIB(`What is ${this.x} &times; ${this.y}?`,
                              this.x*this.y);
   }
}

class LiyMultiplyQB extends QuestionBank {
   constructor(minX, maxX, minY, maxY) {
       super();
       this.mQuestionArray  = new Array(30);
       this.mXmin = minX;
       this.mXmax = maxX;
       this.mYmin = minY;
       this.mYmax = maxY;
   }

   makeX() {
       return Math.floor(Math.random() * (this.mXmax - this.mXmin)
                         + this.mXmin);
   }

   makeY() {
       return Math.floor(Math.random() * (this.mYmax - this.mYmin)
                         + this.mYmin);
   }

   initQuestionArray() {
       const xUpto = 100;
       const yUpto = 100;
       var x;
       var y;

       let numArray = new Array(30);

       let duplicate = false;
       for (var i = 0; i < this.mQuestionArray.length; ++i) {
           let twoNums;
           do {
               duplicate = false;
               x = this.makeX();
               y = this.makeY();

               twoNums = new TwoNumbers(x, y);
               for (var j = 0; j < i; ++j) {
                   if (twoNums.is_same(numArray[j])) {
                       duplicate = true;
                       break;
                   }
               }
           } while (duplicate);
           numArray[i] = twoNums;
           this.mQuestionArray[i] = twoNums.makeQuestion();
       }
   }
}

