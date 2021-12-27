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

class LiyClass9TrigonometryQB extends QuestionBank {
   constructor() {
       super();

       this.sqrt_2 = `&radic;<span style="text-decoration:overline;">2</span>`;
       this.sqrt_3 = `&radic;<span style="text-decoration:overline;">3</span>`;
   
       this.qst_bank = [
	   new QuestionMCQ("What is sin &theta;?",
               ["<sup>Opposite</sup>&frasl;<sub>Hypotenuse</sub>",
                "<sup>Adjacent</sup>&frasl;<sub>Hypotenuse</sub>",
                "<sup>Opposite</sup>&frasl;<sub>Adjacent</sub>",
                "<sup>Adjacent</sup>&frasl;<sub>Opposite</sub>"], 0), 

	   new QuestionMCQ("What is cos &theta;?",
               ["<sup>Opposite</sup>&frasl;<sub>Hypotenuse</sub>",
                "<sup>Opposite</sup>&frasl;<sub>Adjacent</sub>",
                "<sup>Adjacent</sup>&frasl;<sub>Hypotenuse</sub>",
                "<sup>Adjacent</sup>&frasl;<sub>Opposite</sub>"], 2), 

           /* tan(x) = sin(x)/cos(x) = Opposite/Adjacent. */
	   new QuestionMCQ("What is tan &theta;?",
               ["<sup>Opposite</sup>&frasl;<sub>Hypotenuse</sub>",
                "<sup>Opposite</sup>&frasl;<sub>Adjacent</sub>",
                "<sup>Adjacent</sup>&frasl;<sub>Hypotenuse</sub>",
                "<sup>Adjacent</sup>&frasl;<sub>Opposite</sub>"], 1), 

           /* sec(x) = 1/cos(x) = hyp/adj */
	   new QuestionMCQ("What is sec &theta;?",
               ["<sup>Opposite</sup>&frasl;<sub>Hypotenuse</sub>",
                "<sup>Opposite</sup>&frasl;<sub>Adjacent</sub>",
                "<sup>Hypotenuse</sup>&frasl;<sub>Adjacent</sub>",
                "<sup>Hypotenuse</sup>&frasl;<sub>Opposite</sub>",
                "<sup>Adjacent</sup>&frasl;<sub>Hypotenuse</sub>",
                "<sup>Adjacent</sup>&frasl;<sub>Opposite</sub>"], 2), 

           /* cosec(x) = 1/sin(x) = hyp/opp */
	   new QuestionMCQ("What is cosec &theta;?",
               ["<sup>Opposite</sup>&frasl;<sub>Hypotenuse</sub>",
                "<sup>Opposite</sup>&frasl;<sub>Adjacent</sub>",
                "<sup>Hypotenuse</sup>&frasl;<sub>Adjacent</sub>",
                "<sup>Hypotenuse</sup>&frasl;<sub>Opposite</sub>",
                "<sup>Adjacent</sup>&frasl;<sub>Hypotenuse</sub>",
                "<sup>Adjacent</sup>&frasl;<sub>Opposite</sub>"], 3), 

           /* cot(x) = 1/tan(x) = cos(x)/sin(x) = adj/opp */
	   new QuestionMCQ("What is cot &theta;?", 
               ["<sup>Opposite</sup>&frasl;<sub>Hypotenuse</sub>",
                "<sup>Opposite</sup>&frasl;<sub>Adjacent</sub>",
                "<sup>Hypotenuse</sup>&frasl;<sub>Adjacent</sub>",
                "<sup>Hypotenuse</sup>&frasl;<sub>Opposite</sub>",
                "<sup>Adjacent</sup>&frasl;<sub>Hypotenuse</sub>",
                "<sup>Adjacent</sup>&frasl;<sub>Opposite</sub>"], 5), 

	   new QuestionMCQ("What is sin 0&deg;?", this.choice(), 0),
	   new QuestionMCQ("What is sin 30&deg;?", this.choice(), 2),
	   new QuestionMCQ("What is sin 45&deg;?", this.choice(), 3),
	   new QuestionMCQ("What is sin 60&deg;?", this.choice(), 6),
	   new QuestionMCQ("What is sin 90&deg;?", this.choice(), 10),
	   new QuestionMCQ("What is cos 0&deg;?", this.choice(), 10),
	   new QuestionMCQ("What is cos 30&deg;?", this.choice(), 6),
	   new QuestionMCQ("What is cos 45&deg;?", this.choice(), 3),
	   new QuestionMCQ("What is cos 60&deg;?", this.choice(), 2),
	   new QuestionMCQ("What is cos 90&deg;?", this.choice(), 0),
	   new QuestionMCQ("What is tan 0&deg;?", this.choice(), 0),
	   new QuestionMCQ("What is tan 30&deg;?", this.choice(), 4),
	   new QuestionMCQ("What is tan 45&deg;?", this.choice(), 10),
	   new QuestionMCQ("What is tan 60&deg;?", this.choice(), 7),
	   new QuestionMCQ("What is tan 90&deg;?", this.choice(), 9),
	   new QuestionMCQ("What is cosec 0&deg;?", this.choice(), 9),
	   new QuestionMCQ("What is cosec 30&deg;?", this.choice(), 1),
	   new QuestionMCQ("What is cosec 45&deg;?", this.choice(), 8),
	   new QuestionMCQ("What is cosec 60&deg;?", this.choice(), 5),
	   new QuestionMCQ("What is cosec 90&deg;?", this.choice(), 10),
	   new QuestionMCQ("What is sec 0&deg;?", this.choice(), 10),
	   new QuestionMCQ("What is sec 30&deg;?", this.choice(), 5),
	   new QuestionMCQ("What is sec 45&deg;?", this.choice(), 8),
           new QuestionMCQ("What is sec 60&deg;?", this.choice(), 1),
	   new QuestionMCQ("What is sec 90&deg;?", this.choice(), 9),
	   new QuestionMCQ("What is cot 0&deg;?", this.choice(), 9),
	   new QuestionMCQ("What is cot 30&deg;?", this.choice(), 7),
	   new QuestionMCQ("What is cot 45&deg;?", this.choice(), 10),
	   new QuestionMCQ("What is cot 60&deg;?", this.choice(), 4),
	   new QuestionMCQ("What is cot 90&deg;?", this.choice(), 0)];
   }

   // Create choice array
   choice() {
       return new Array(
           "0", // 0
           "2", // 1
           "&frac12;", // 2
           `<sup>1</sup>&frasl;<sub>${this.sqrt_2}</sub>`, // 3
           `<sup>1</sup>&frasl;<sub>${this.sqrt_3}</sub>`, // 4
           `<sup>2</sup>&frasl;<sub>${this.sqrt_3}</sub>`, // 5
           `<sup>${this.sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
           `${this.sqrt_3}`, // 7
           `${this.sqrt_2}`, // 8
           "&infin;", // 9
           "1" // 10
       );
   }

   initQuestionArray() {
       this.mQuestionArray  = this.qst_bank;
       for (var i = 0; i < this.mQuestionArray.length; ++i) {
           let qst = this.mQuestionArray[i];
           if (qst instanceof QuestionMCQ) {
               this.mQuestionArray[i].shuffleChoices();
           }
       }
   }
}
