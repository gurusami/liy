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

class C9Polynomials extends QuestionBank {
   constructor() {
       super();

       this.sqrt_2 = `&radic;<span style="text-decoration:overline;">2</span>`;
       this.sqrt_3 = `&radic;<span style="text-decoration:overline;">3</span>`;
   
       this.mQuestionArray = [
           new QuestionFIB(`How many terms does the polynomial
               <i>p(x) = x<sup>3</sup> - x<sup>2</sup> + 4x + 7</i> have?`, 4),
           new QuestionFIB(`What is the coefficient of <i>x</i> in the
               polynomial <i>p(x) = x<sup>31</sup> - x<sup>25</sup> + 7x + 27
               </i>?`, 7),
           new QuestionMCQ(`Which of the following is a constant polynomial?`,
               ["5", "<i>x<sup>3</sup> - x<sup>2</sup> + 4x + 7</i>",
               "<i>x<sup>31</sup> - x<sup>25</sup> + 7x + 27 </i>",
               "<i>7x</i>",
               "<i>8x<sup>2</sup></i>"], 0),
           new QuestionMCQ(`The zero polynomial is a constant polynomial.`,
               ["True", "False"], 0),
           new QuestionMCQ(`Is the algebraic expression <i>x + x<sup>-1</sup></i> a polynomial?`
               ["Yes, it is a polynomial",
                "No, it is not a polynomial",
                `No, it is not a polynomial because exponent of variable
                 <i>x</i> should be a whole number`], 2),
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
