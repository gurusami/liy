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
           ${LiY.makeTable([[4.97, 5.05, 5.08, 5.03, 5.00, 5.06, 5.08, 4.98,
                             5.04, 5.07, 5.00]])}
           Find the probability (in percentage, upto 2 decimal places) that any
           of these bags chosen at random contains more than 5kg of flour.`;

       const q2 = `In a sample study of 642 people, it was found that 514
           people have a high school certificate (HSC). If a person is selected
           at random, what is the probability that the person has a HSC (in
           percentage, upto 2 decimal places)?`;

       const q3 = `In a cricket match, a batswoman hits a boundary 6 times out
           of 30 balls she plays. Find the probability that she did not hit a
           boundary (in percentage, upto 2 decimal places).`;

       const q4 = `1500 families with 2 children were selected randomly, and the
           following data were recorded:
           ${LiY.makeTable([["Number of girls in a family", 2, 1, 0],
                            ["Number of families", 475, 814, 211]])}
           Compute the probability (in percentage, upto 2 decimal places) of a
           family, chosen at random, having 2 girls.`

       this.mLastUpdated = "14-Jan-2022";

       this.mQuestionArray = [
           new QuestionFIB(q1, 63.63),
           new QuestionFIB(q2, 80.00),
           new QuestionFIB(q3, 80.00),
           new QuestionFIB(q4, 31.67)
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
