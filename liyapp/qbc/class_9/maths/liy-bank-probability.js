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

       const PROB = "the probability (in percentage, upto 2 decimal places)";

       const q1 = `Eleven bags of wheat flour, each marked 5 kg, actually
           contained the following weights of flour (in kg):
           ${LiY.makeTable([[4.97, 5.05, 5.08, 5.03, 5.00, 5.06, 5.08, 4.98,
                             5.04, 5.07, 5.00]])}
           Find ${PROB} that any of these bags chosen at random contains more
           than 5kg of flour.`;

       const q2 = `In a sample study of 642 people, it was found that 514
           people have a high school certificate (HSC). If a person is selected
           at random, what is ${PROB} that the person has a HSC?`;

       const q3 = `In a cricket match, a batswoman hits a boundary 6 times out
           of 30 balls she plays. Find ${PROB} that she did not hit a
           boundary.`;

       const q4 = `1500 families with 2 children were selected randomly, and the
           following data were recorded:
           ${LiY.makeTable([["Number of girls in a family", 2, 1, 0],
                            ["Number of families", 475, 814, 211]])}
           Compute ${PROB} of a family, chosen at random, having 2 girls.`

       const q5 = `A die is thrown 1000 times with the frequencies for the
           outcomes 1, 2, 3, 4, 5 and 6 as given in the following table:
           ${LiY.makeTable([["Outcome", 1, 2, 3, 4, 5, 6],
                            ["Frequency", 179, 150, 157, 149, 175, 190]])}
           Find ${PROB} of getting a 4.`;

       const q6 = `A tyre manufacturing company kept a record of the distance
           covered before a tyre needed to be replaced. The table shows the
           results of 1000 cases.
           ${LiY.makeTable([["Distance (km)", "less than 4000", "4000 to 9000",
                             "9001 to 14000", "more than 14000"],
                            ["Frequency", 20, 210, 325, 445]])}
           If you buy a tyre of this company, what is ${PROB} that it will
           last more than 9000 km?`;

       this.mLastUpdated = "15-Jan-2022";

       this.mQuestionArray = [
           new QuestionFIB(q1, 63.63),
           new QuestionFIB(q2, 80.00),
           new QuestionFIB(q3, 80.00),
           new QuestionFIB(q4, 31.67),
           new QuestionFIB(q5, 14.90),
           new QuestionFIB(q6, 77.00)
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
