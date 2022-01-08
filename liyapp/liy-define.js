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

/* Refer to Johnson-Trotter Algorithm Listing All Permutations

Refer to the following websites for more details:
https://www.geeksforgeeks.org/johnson-trotter-algorithm/
https://www.cut-the-knot.org/Curriculum/Combinatorics/JohnsonTrotter.shtml */

class DirectedInteger {
   constructor(val) {
       this.mInteger = val;
       this.mDirection = false; // Initially all are left facing.
   }

   /** Determine if the integer is left facing.
   @return true if the integer is left facing. */
   isLeft() {
       return this.mDirection == false;
   }

   /** Determine if the integer is right facing.
   @return true if the integer is right facing. */
   isRight() {
       return this.mDirection == true;
   }

   isEqual(obj) {
       return this.mInteger == obj.mInteger;
   }

   isGreater(obj) {
       if (obj == null) {
           return true;
       }
       return this.mInteger > obj.mInteger;
   }

   flip() {
       if (this.mDirection == true) {
           this.mDirection = false;
       } else {
           this.mDirection = true;
       }
   }

   toString() {
       if (this.mDirection == false) {
           return `<${this.mInteger}`;
       } else {
           return `>${this.mInteger}`;
       }
   }
}

class LiyPermutation {
   constructor(size) {
       this.mArray = new Array(size);

       /* Initialize the array. */
       for (var i = 0; i < size; ++i) {
           this.mArray[i] = new DirectedInteger(i + 1);
       }
   }

   getLargestMobile() {
       let largestMobile = null;

       for (var x = 0; x < this.mArray.length; ++x) {
           let cur = this.mArray[x];
           if (cur.isLeft()) {
               if (x > 0) {
                   let prev = this.mArray[x-1];
                   if (cur.isGreater(prev) && cur.isGreater(largestMobile)) {
                       largestMobile = cur;
                   }
               }
           } else {
               if (x < this.mArray.length -1) {
                   let next = this.mArray[x+1];
                   if (cur.isGreater(next) && cur.isGreater(largestMobile)) {
                       largestMobile = cur;
                   }
               }
           }
       }

       return largestMobile;
   }

   getPosition(mobile) {
       for (var x = 0; x < this.mArray.length; ++x) {
           if (this.mArray[x].isEqual(mobile)) {
               return x;
           }
       }
   }

   getAllPermutations() {
       let total = 1;
       for (var f = this.mArray.length; f >0; --f) {
           total *= f;
       }

       let result = new Array();
       for (var i = 1; i < total; ++i) {
           result.push(this.getOnePermutation());
       }

       return result;
   }

   getOnePermutation() {
       let mobile = this.getLargestMobile();
       let pos = this.getPosition(mobile);

       if (mobile.isLeft()) {
           let tmp = this.mArray[pos];
           this.mArray[pos] = this.mArray[pos - 1];
           this.mArray[pos - 1] = tmp;
       } else {
           let tmp = this.mArray[pos];
           this.mArray[pos] = this.mArray[pos + 1];
           this.mArray[pos + 1] = tmp;
       }

       for (var x = 0; x < this.mArray.length; ++x) {
           if (this.mArray[x].isGreater(mobile)) {
               this.mArray[x].flip();
           }
       }


       let result = new Array(this.mArray.length);
       for (var i = 0; i < result.length; ++i) {
           result[i] = this.mArray[i].mInteger;
       }

       return result;
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

       this.mP = new LiyPermutation(this.mLeftList.length);
       this.mChoices = this.mP.getAllPermutations();
   }

   getMCQ() {
       let q = this.createQuestion();
       let c = this.allChoices();
       let fewChoices = this.getFewChoices(c);
       let a = 0;
       return new QuestionMCQ(q, fewChoices, a);
   }

   getFewChoices(fullChoice) {
       const numChoices = 5;

       let ans = this.getAnswer();
       let ansIndex = this.getAnswerIndex(fullChoice, ans);

       let result = new Array();
       result.push(ans);

       let dup = new Array();
       dup.push(ansIndex);

       for (var i = 0; i < numChoices; ++i) {
         let r = LiY.ryRandom(0, fullChoice.length, dup);
         result.push(fullChoice[r]);
       }

       return result;
   }


   getCorrectIndex(val) {
       for (var i = 0; i < this.mLeftList.length; i++) {
           if (this.mLeftList[i] == val) {
               return i;
           }
       }
       return -1;
   }

   findLeftPosition(val) {
       for (var i = 0; i < this.mLeftList.length; ++i) {
           if (val == this.mLeftList[i]) {
               return i;
           }
       }
   }

   findAnswerPosition(val) {
       for (var i = 0; i < this.mJumbledRight.length; ++i) {
           if (val == this.mJumbledRight[i]) {
               return i;
           }
       }
   }

   getAnswerIndex(c, ans) {
       for (var i =0; i < c.length; ++i) {
           if (c[i] == ans) {
               return i;
           }
       }
   }

   getAnswer() {
       let result = "";
       for (var i = 0; i < this.mJumbledLeft.length; ++i) {
           let left = this.mJumbledLeft[i];
           /* Find pos of the left. */
           let idx = this.findLeftPosition(left);
           let ans = this.mRightList[idx];
           let ansPos = this.findAnswerPosition(ans);
           let ansString = (ansPos + 10).toString(36);
           if (i > 0) {
               result += ", ";
           }
           result += `${i + 1} - ${ansString}`
       }
       return result;
   }

   getChoice(posArray, r) {
       let result = "";
       for (var i = 0; i < posArray.length; ++i) {
           let j = posArray[i] - 1;
           if (i > 0) {
               result += ", ";
           }
           result += `${i + 1} - ${r[j]}`
       }
       return result;
   }


   allChoices() {
       let r = new Array();
       let choice = new Array();
       for (var i = 0; i < this.mJumbledLeft.length; ++i) {
           r.push((i + 10).toString(36));
       }


       for (var j = 0; j < this.mChoices.length; ++j) {
           let p1 = this.getChoice(this.mChoices[j], r);
           choice.push(p1);
       }

       return choice;
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

