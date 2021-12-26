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

class LiySampleSet extends QuestionBank {
   constructor() {
       super();
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
                "<sup>Adjacent</sup>&frasl;<sub>Opposite</sub>"], 1)];
   }

   initQuestionArray() {
       this.mQuestionArray  = this.qst_bank;
       for (var i = 0; i < this.mQuestionArray.length; ++i) {
           this.mQuestionArray[i].shuffleChoices();
       }
   }
}
