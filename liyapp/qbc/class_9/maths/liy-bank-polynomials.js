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
       this.sqrt_7 = `&radic;<span style="text-decoration:overline;">7</span>`;

       this.mLastUpdated = "10-Jan-2022";

       const lhsIdentity5 = "(x + y + z)<sup>2</sup>";
       const lhsIdentity6 = "(x + y)<sup>3</sup>";
       const lhsIdentity7 = "(x - y)<sup>3</sup>";
       const lhsIdentity8 = "x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> - 3xyz";

       const rhsIdentity5 = "x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 2xy + 2yz + 2zx";
       const rhsIdentity6 = "x<sup>3</sup> + 3x<sup>2</sup>y + 3xy<sup>2</sup> + y<sup>3</sup>";
       const rhsIdentity7 = "x<sup>3</sup> - 3x<sup>2</sup>y + 3xy<sup>2</sup> - y<sup>3</sup>";
       const rhsIdentity8 = "(x + y + z)(x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> - xy - yz - zx)";

       /* Identities 1 to 4. */
       const mtf_1 = new QuestionMTF(["(x + y)<sup>2</sup>",
           "(x - y)<sup>2</sup>", "x<sup>2</sup> - y<sup>2</sup>",
           "(x + a)(x + b)"],
           ["x<sup>2</sup> + 2xy + y<sup>2</sup>",
            "x<sup>2</sup> - 2xy + y<sup>2</sup>",
            "(x + y)(x - y)",
            "x<sup>2</sup> + (a + b)x + ab"]);

       const mtf_2 = new QuestionMTF([lhsIdentity5, lhsIdentity6, lhsIdentity7, lhsIdentity8],
           [rhsIdentity5, rhsIdentity6, rhsIdentity7, rhsIdentity8]);
   
       this.mQuestionArray = [
           mtf_1.getMCQ(),

           mtf_2.getMCQ(),

           new QuestionMCQ(`Check whether the polynomial <i>q(t) =
               4t<sup>3</sup> + 4t<sup>2</sup> - t - 1</i> is a multiple of
               <i>2t + 1</i>.`,
               ["Yes, it is a multiple", "No, it is NOT a multiple"], 0),

           new QuestionFIB(`What is the remainder when <i>x<sup>4</sup> +
               x<sup>3</sup> -2x<sup>2</sup> + x + 1</i> is divided by
               <i>x - 1</i>?`, 2),

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
           new QuestionMCQ(`Is the algebraic expression <i>x + x<sup>-1</sup>
               </i> a polynomial?`,
               ["Yes, it is a polynomial",
                "No, it is not a polynomial",
                `No, it is not a polynomial because exponent of variable
                 <i>x</i> should be a whole number`], 2),
           new QuestionMCQ(`Which of the following is a monomial?`,
               ["-5x<sup>3</sup>", "y<sup>9</sup> + 1",
                "x + x<sup>2</sup> + &#960;", 
                "3x<sup>7</sup> - 4x<sup>6</sup> + x + 9"], 0),
           new QuestionMCQ(`Which of the following is a binomial?`,
               ["u<sup>15</sup> - u<sup>2</sup>",
                "u + u<sup>2</sup> - 82",
                "u<sup>4</sup>",
                "2022",
                "2 - y<sup>2</sup> - y<sup>3</sup> + 2y<sup>8</sup>"], 0),
           new QuestionMCQ(`Which of the following is a trinomial?`,
               ["u<sup>15</sup> - u<sup>2</sup>",
                "u + u<sup>2</sup> - 82",
                "u<sup>4</sup>",
                "2022",
                "2 - y<sup>2</sup> - y<sup>3</sup> + 2y<sup>8</sup>"], 1),
           new QuestionFIB(`What is the degree of the polynomial <i>
               x<sup>5</sup> - x<sup>4</sup> + 3 </i>?`, 5),
           new QuestionFIB(`What is the degree of a non-zero constant
               polynomial?`, 0),
           new QuestionFIB(`What is the degree of a linear polynomial?`, 1),
           new QuestionFIB(`What is the degree of a quadratic polynomial?`, 2),
           new QuestionFIB(`What is the degree of a cubic polynomial?`, 3),
           new QuestionMCQ(`Which of the following is a linear polynomial?`,
               ["2x -1", "2x<sup>2</sup> + 5", "4x<sup>3</sup>", "10"], 0),

           new QuestionMCQ(`The degree of the zero polynomial is <i>not
               defined</i>?`, ["True", "False"], 0),

           new QuestionMCQ(`Can we have polynomials in two variables?`,
               ["Yes, we can have polynomials in two variables",
                "No, we cannot have polynomials in two variables"], 0),

           new QuestionMCQ(`Is the algebraic expression
               <i>y + <sup>2</sup>&frasl;<sub>y</sub></i> a polynomial?`,
               ["Yes", "No"], 1),

           new QuestionMCQ(`Which of the following is a quadratic polynomial?`,
               ["4 - y<sup>2</sup>", `5t - ${this.sqrt_7}`,
               "5x<sup>3</sup> + 4x<sup>2</sup> + 7x", "3000"], 0),

           new QuestionMCQ(`Which of the following is a cubic polynomial?`,
               ["4 - y<sup>2</sup>", `5t - ${this.sqrt_7}`,
               "5x<sup>3</sup> + 4x<sup>2</sup> + 7x", `${this.sqrt_2}`], 2),

           new QuestionFIB(`Consider the polynomial <i> p(x) = 5x<sup>3</sup> -
               2x<sup>2</sup> + 3x - 2 </i>.  Find the value of p(1).`, 4),

           new QuestionFIB(`Find the zero of the polynomial
               <i> p(x) = x - 7</i>?`, 7)
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
