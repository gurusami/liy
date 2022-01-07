/*******************************************************************************

Learn it Yourself (LiY) - Software to Promote Self Study

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

class LiyPractice extends QuestionBank {
   constructor(qbArray) {
       super();

       /* Contains an array of question bank names. */
       this.mQBArray = qbArray;

       /* Minimum number of questions in practice. */
       this.mMinCount = 30;

       /* Number of questions per question bank. */
       this.mCountPerQB = Math.ceil(this.mMinCount / this.mQBArray.length);
       this.mLastUpdated = 'Auto-generated';
       this.mQuestionArray = new Array();
   }

   initQuestionArray() {

       for (var i = 0; i < this.mQBArray.length; ++i) {
           /* Given name of QB get the QBDetails. */
           let qbObj = gLiyQBC.getQuestionBank(this.mQBArray[i]);
           qbObj.provideRandomQuestions(this.mQuestionArray, this.mCountPerQB);
       }

       for (var i = 0; i < this.mQuestionArray.length; ++i) {
           let qst = this.mQuestionArray[i];
           if (qst instanceof QuestionMCQ) {
               this.mQuestionArray[i].shuffleChoices();
           }
       }
   }
}

