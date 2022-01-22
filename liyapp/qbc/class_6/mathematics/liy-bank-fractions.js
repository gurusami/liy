/*******************************************************************************

Learn It Yourself (LIY) - Software to Promote Self Study

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

function getHTMLFraction(numerator, denominator) {
  return `<sup>${numerator}</sup>&frasl;<sub>${denominator}</sub>`;
}

class C6Fractions extends QuestionBank {
   constructor() {
       super();
       this.mLastUpdated = '22-Jan-2022';

       const qst = "Convert the given fraction into decimal number: ";

       /* Does NOT include non-terminating divisions. */
       this.mQuestionArray = [
         new QuestionFIB(`${qst} ${getHTMLFraction(1, 2)}`, 0.5),
         new QuestionFIB(`${qst} ${getHTMLFraction(3, 2)}`, 1.5),
         new QuestionFIB(`${qst} ${getHTMLFraction(5, 2)}`, 2.5),
         new QuestionFIB(`${qst} ${getHTMLFraction(7, 2)}`, 3.5),
         new QuestionFIB(`${qst} ${getHTMLFraction(9, 2)}`, 4.5),

         new QuestionFIB(`${qst} ${getHTMLFraction(1, 4)}`, 0.25),
         new QuestionFIB(`${qst} ${getHTMLFraction(3, 4)}`, 0.75),
         new QuestionFIB(`${qst} ${getHTMLFraction(6, 4)}`, 1.5),
         new QuestionFIB(`${qst} ${getHTMLFraction(7, 4)}`, 1.75),
         new QuestionFIB(`${qst} ${getHTMLFraction(9, 4)}`, 2.25),

         new QuestionFIB(`${qst} ${getHTMLFraction(1, 5)}`, 0.2),
         new QuestionFIB(`${qst} ${getHTMLFraction(2, 5)}`, 0.4),
         new QuestionFIB(`${qst} ${getHTMLFraction(3, 5)}`, 0.6),
         new QuestionFIB(`${qst} ${getHTMLFraction(4, 5)}`, 0.8),
         new QuestionFIB(`${qst} ${getHTMLFraction(6, 5)}`, 1.2),
         new QuestionFIB(`${qst} ${getHTMLFraction(7, 5)}`, 1.4),
         new QuestionFIB(`${qst} ${getHTMLFraction(8, 5)}`, 1.6),
         new QuestionFIB(`${qst} ${getHTMLFraction(9, 5)}`, 1.8),

         new QuestionFIB(`${qst} ${getHTMLFraction(1, 8)}`, 0.125),
         new QuestionFIB(`${qst} ${getHTMLFraction(3, 8)}`, 0.375),
         new QuestionFIB(`${qst} ${getHTMLFraction(5, 8)}`, 0.625),
         new QuestionFIB(`${qst} ${getHTMLFraction(6, 8)}`, 0.75),
         new QuestionFIB(`${qst} ${getHTMLFraction(7, 8)}`, 0.875),
         new QuestionFIB(`${qst} ${getHTMLFraction(9, 8)}`, 1.125),

         new QuestionFIB(`${qst} ${getHTMLFraction(1, 10)}`, 0.1),
         new QuestionFIB(`${qst} ${getHTMLFraction(3, 10)}`, 0.3),
         new QuestionFIB(`${qst} ${getHTMLFraction(5, 10)}`, 0.5),
         new QuestionFIB(`${qst} ${getHTMLFraction(6, 10)}`, 0.6),
         new QuestionFIB(`${qst} ${getHTMLFraction(7, 10)}`, 0.7),
         new QuestionFIB(`${qst} ${getHTMLFraction(9, 10)}`, 0.9),

       ];
   }


}
