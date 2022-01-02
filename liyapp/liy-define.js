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

