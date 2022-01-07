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

class LiyQuestion {
   constructor(qType) {
       this.mQuestionType = qType;
   }

   getQuestionType() {
       return this.mQuestionType;
   }

   verify(obj) {
       throw new Error("To be implemented in derived class");
   }
}

class QuestionMCQ extends LiyQuestion {
   constructor(q, c, a) {
       super("mcq");
       this.mQuestion = q;
       this.mChoices  = c; 
       this.mAnswer   = a;
   }

   swapChoice(i, j) {
       if (j == this.mAnswer) {
           /* i and j are being swapped. So change answer to j. */
           this.mAnswer = i;
       } else if (i == this.mAnswer) {
           this.mAnswer = j;
       }
       let k = this.mChoices[i];
       this.mChoices[i] = this.mChoices[j];
       this.mChoices[j] = k;
   }

   shuffleChoices() {
       for (var i = this.mChoices.length - 1; i > 0; --i) {
           let j = Math.floor(Math.random() * i);
           this.swapChoice(i, j);
       }
       this.allOfTheAbove();
       this.noneOfTheAbove();
   }

   allOfTheAbove() {
       /* If there is a choice 'All of the above', then ensure that it is the
       last choice. */
       let j = this.mChoices.length - 1;
       for (var i = 0; i < j; i++) {
           if (this.mChoices[i].toLowerCase() == 'all of the above') {
               this.swapChoice(i, j);
           }
       }
   }

   noneOfTheAbove() {
       /* If there is a choice 'None of the above', then ensure that it is the
       last choice. */
       let j = this.mChoices.length - 1;
       for (var i = 0; i < j; i++) {
           if (this.mChoices[i].toLowerCase() == 'none of the above') {
               this.swapChoice(i, j);
           }
       }
   }

   verify(intValue) {
       return this.mAnswer == intValue;
   }
}

/* Question type is Fill in Blanks (FIB). */
class QuestionFIB extends LiyQuestion {
   constructor(q, a) {
       super("fib");
       this.mQuestion = q;
       this.mAnswer   = a;
   }

   verify(val) {
       if (typeof this.mAnswer == "string") {
           return val.toLowerCase() == this.mAnswer.toLowerCase();
       } 
       return (this.mAnswer == val);
   }
}

/******************************************************************************/

class QuestionMTF {
   constructor(left, right) {
       this.mLeftList = left;
       this.mRightList = right;
       this.mJumbledLeft = this.jumbleList(this.mLeftList);
       this.mJumbledRight = this.jumbleList(this.mRightList);
       this.mAnswer = 0;
   }

   getMCQ() {
       let q = this.createQuestion();
       let c = this.allChoices();
       return new QuestionMCQ(q, c, this.mAnswer);
   }

   getCorrectIndex(val) {
       for (var i = 0; i < this.mLeftList.length; i++) {
           if (this.mLeftList[i] == val) {
               return i;
           }
       }
       console.log(`Not Found: ${val}`);
       return -1;
   }

   nextCombination(a) {
       for (var i = 0; i < a.length; i++) {
           a[i] = (++a[i]) % a.length;
       }
       return (a[0] != 0);
   }

   allChoices() {
       let r = new Array();
       let choice = new Array();
       for (var i = 0; i < this.mJumbledLeft.length; ++i) {
           choice.push(i);
           r.push((i + 10).toString(36));
       }

       let all = new Array();
       let isAnswer = true;
       let y = 0;
       do {
           console.log(choice.toString());
       } while (this.nextCombination(choice));

       return all;
   }

   jumbleList(aList) {
       let jList = new Array();
       let dup = new Array();
       for (var i = 0; i < aList.length; ++i) {
           let j = LiY.ryRandom(0, aList.length, dup);
           jList.push(aList[j]);
       }
       return jList;
   }

   createList(aList, aType) {
       let result = `<ol type=${aType}>`;

       for (var i = 0; i < aList.length; ++i) {
           result += `<li> ${aList[i]} </li>`;
       }

       result += "</ol>";

       return result;
   }

   createQuestion() {
       let p = "Match the following: ";
       p += this.createTable();
       return p;
   }

   createTable() {
       let ol1 = this.createList(this.mJumbledLeft, "1");
       let ol2 = this.createList(this.mJumbledRight, "a");

       let result = `<table> <tr>`;

       result += `<td> ${ol1} </td>`;
       result += `<td> ${ol2} </td>`;
       result += `</table>`;
       return result;
   }
}

/******************************************************************************/

class LiY {

   static ryRandomInRange(minValue, maxValue) {
       return Math.floor(Math.random() * (maxValue - minValue) + minValue);
   }

   static ryRandom(minValue, maxValue, dupArray) {
       let n;
       let duplicate = false;
       do {
           duplicate = false;
           n = Math.floor(Math.random() * (maxValue - minValue) + minValue);
           for (var i = 0; i < dupArray.length; ++i) {
               if (n == dupArray[i]) {
                   duplicate = true;
                   break;
               }
           }
       } while (duplicate == true);
       dupArray.push(n);
       return n;
   }
}

