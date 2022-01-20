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

class C9Drainage extends QuestionBank {
   constructor() {
       super();
       this.mQuestionArray = [
         new QuestionMCQ(`According to the regulations of the <b>Indus Water Treaty
           (1960)</b>, India can use only ____ per cent of the total water carried by
           the Indus river system.`, ["20", "10", "30", "40", "50"], 0),
         new QuestionMCQ(`River Brahmaputra is known as ______ in Tibet.`,
           ["Tsang Po", "Jamuna", "Dihang", "Dibang", "Lohit"], 0),
         new QuestionMCQ(`Choose the odd one out: `, ["Narmada", "Cauvery",
            "Mahanadi", "Godavari", "Krishna"], 0),
         new QuestionMCQ(`Which is the largest peninsular river?`, ["Godavari",
            "Cauvery", "Krishna", "Narmada", "Periyar"], 0),
          new QuestionMCQ(`Across which river is the Shivasamudram Falls located?`,
            ["Cauvery", "Ganges", "Periyar", "Krishna", "Mahanadi"], 0),
          new QuestionMCQ(`Where is the Wular lake located in India?`,
            ["Jammu and Kashmir", "Manipur", "Odisha", "Gujarat", "Tamil Nadu"], 0),
          new QuestionMCQ(`Which of the following is a salt water lake of India?`,
            ["Sambhar", "Wular", "Chilika", "Loktak", "Bhimtal"], 0),
          new QuestionMCQ(`Water from Sambhar lake is used to produce salt.
            Where is Sambhar lake located in India?`, ["Rajasthan", "Punjab",
            "Tamil Nadu", "Andhra Pradesh", "Odisha"], 0),
          new QuestionMCQ(`Where is the Loktak lake (one of the largest fresh
            water lake) located in India?`, ["Manipur", "Tripura",
            "West Bengal", "Odisha", "Chhattisgarh"], 0),
          new QuestionMCQ(`Where is the source of Narmada river located?`,
            ["Amarkantak Hills", "Satpura Ranges", "Highlands of Chhattisgarh",
            "Mahabaleshwar"], 0)
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
