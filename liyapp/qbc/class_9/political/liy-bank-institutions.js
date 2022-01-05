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

class C9Institutions extends QuestionBank {
   constructor() {
       super();
       this.mQuestionArray = [
           new QuestionMCQ(`Who won the Supreme Court case of Indira Sawhney
               and Others Vs Union of India?`,
               ["Indira Sawhney", "Union of India"], 1),

           new QuestionMCQ(`The Mandal Commission, was established in India on
               1979 by the Janata Party government with a mandate to "identify
               the socially or educationally backward classes" of India.  Who
               was the Prime Minister at that time?`,
               ["Vishwanath Pratap Singh", "Morarji Desai", "Rajiv Gandhi",
                "Chandra Sekhar", "P V Narasimha Rao", "I K Gujral"], 1),

           new QuestionMCQ(`Which Prime Minister of India implemented the
               Mandal Commission report?`, ["Vishwanath Pratap Singh",
               "Morarji Desai", "Rajiv Gandhi", "Chandra Sekhar",
               "P V Narasimha Rao"], 0),

           new QuestionMCQ(`Mandal Commission recommended job reservations for
               Socially and Educationally Backward Classes (SEBC).  How much
               percentage was recommended?`,
               ["27%", "18%", "22%", "49%", "24%"], 0),

           new QuestionMCQ(`When did Mandal Commission submit its report to the
               Government of India?`, ["31-Dec-1980", "01-Dec-1985",
               "13-Aug-1990", "17-July-1979"], 0)
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

