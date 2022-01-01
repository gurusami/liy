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

class LiySeriesQB extends QuestionBank {
   constructor() {
       super();
       this.mQuestionArray = new Array();
           this.addQuestionsType1();
           this.addQuestionsType2();
   }

   getQuestionFIB(series) {
       /* Last element is the answer. */
       let answer = series.pop();
       let qst = `What is the next term in the given number series:
           ${series.toString()}?`;
       return new QuestionFIB(qst, answer);
   }

   /* Type 1 Number Series: Each number in the series is sum of two numbers:
   previous number and a multiple of the position. */
   getSeriesType1(multiple) {
       let series = new Array();
       let prev = 1;

       for (let pos = 1; pos < 11; ++pos) {

           /*******************************/
           let next = prev + (multiple*pos); // Formula of the series.
           /*******************************/

           series.push(prev);
           prev = next;
       }
       return series;
   }

   /* Type 2 Number Series: Power Series: Each number in the series is a
   constant to the power of position. */
   getSeriesType2(num) {
       let series = new Array();

       for (let pos = 0; pos < 8; ++pos) {

           /***************************/
           let cur = Math.pow(num, pos); // Formula of the series.
           /***************************/

           series.push(cur);
       }
       return series;
   }

   addQuestionsType1() {
       for (let multiple = 1; multiple < 11; ++multiple) {
           let series = this.getSeriesType1(multiple);
           let fibQues = this.getQuestionFIB(series);
           this.mQuestionArray.push(fibQues);
       }
   }

   addQuestionsType2() {
       for (let num = 2; num < 11; ++num) {
           let series = this.getSeriesType2(num);
           let fibQues = this.getQuestionFIB(series);
           this.mQuestionArray.push(fibQues);
       }
   }


   initQuestionArray() {
       for (var i = 0; i < this.mQuestionArray.length; ++i) {
           let qst = this.mQuestionArray[i];
           if (qst instanceof QuestionMCQ) {
               this.mQuestionArray[i].shuffleChoices();
           }
       }
   }
}


