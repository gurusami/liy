/*******************************************************************************

Learn it Yourself (LiY) - Software to Promote Self Study

Copyright (C) 2022, Annamalai Gurusami <annamalai.gurusami@gmail.com>

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

class C9Probability extends QuestionBank {
   constructor() {
       super();

       const q1 = `Eleven bags of wheat flour, each marked 5 kg, actually
           contained the following weights of flour (in kg):
           <table style="padding: 5px;"> 
               <tr> <td>4.97</td> <td>5.05</td> <td>5.08</td> <td>5.03</td>
               <td>5.00</td> <td>5.06</td> <td>5.08</td> <td>4.98</td>
               <td>5.04</td> <td>5.07</td> <td>5.00</td> </tr>
           </table>
           Find the probability that any of these bags chosen at random
           contains more than 5kg of flour.`;

       this.mLastUpdated = "13-Jan-2022";

       this.mQuestionArray = [
           new QuestionFIB(q1, 0)
       ];
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
