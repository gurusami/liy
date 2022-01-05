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

class C9Location extends QuestionBank {
   constructor() {
       super();
       this.mQuestionArray = [
           new QuestionMCQ(`What is the significance of Tropic of Cancer?`,
               ["Northernmost latitude where the Sun can be directly overhead",
                "It is the latitude where the day is always the longest",
                "It is the latitude where the day is always the shortest",
                "It is the latitude where the days and nights are always equal",
                "Southernmost latitude where the Sun can be directly overhead"],
               0),

           new QuestionMCQ(`In terms of land area, which is the largest state
               in India?`, ["Rajasthan", "Madhya Pradesh", "Uttar Pradesh",
               "Maharashtra", "Tamil Nadu"], 0),

           new QuestionMCQ(`Which of the following countries is NOT bigger than
               India, in terms of land area?`, ["Argentina", "USA", "Canada",
               "China", "Brazil", "Russia", "Australia"], 0),

           new QuestionMCQ(`The southernmost point of India's territory is
               Indira point, named in honour of former Prime Minister Indira
               Gandhi.  This was previously known as Pygmalion Point.  Where
               is this place located?`, ["Andaman and Nicobar Islands",
               "Tamil Nadu", "Kerala", "Lakshadweep", "Maldives"], 0),

           new QuestionMCQ(`Tropic of Cancer passes through 8 states. Which of
               the following is NOT one of them?`, ["Meghalaya", "Gujarat",
               "Rajasthan", "Madhya Pradesh", "Chattisgarh", "Jharkhand",
               "West Bengal", "Tripura", "Mizoram"], 0),

           new QuestionMCQ(`Tropic of Cancer passes through 8 states. Which of
               the following is NOT one of them?`, ["Manipur", "Gujarat",
               "Rajasthan", "Madhya Pradesh", "Chattisgarh", "Jharkhand",
               "West Bengal", "Tripura", "Mizoram"], 0),

           new QuestionMCQ(`Tropic of Cancer passes through 8 states. Which of
               the following is NOT one of them?`, ["Odisha", "Gujarat",
               "Rajasthan", "Madhya Pradesh", "Chattisgarh", "Jharkhand",
               "West Bengal", "Tripura", "Mizoram"], 0),

           new QuestionMCQ(`Which of the following state does NOT share a land
               boundary with Nepal?`, ["Jharkhand", "Uttarakhand",
               "Uttar Pradesh", "Bihar", "Sikkim"], 0),

           new QuestionMCQ(`Which of the following state does NOT share a land
               boundary with Pakistan?`, ["Haryana", "Gujarat", "Rajasthan",
               "Punjab"], 0),

           new QuestionMCQ(`Which of the following country does NOT share a land
               boundary with India?`, ["Tajikistan", "Pakistan", "China",
               "Nepal", "Bhutan", "Bangladesh", "Myanmar"], 0),

           new QuestionMCQ(`What is the easternmost longitude of India?`,
               ["97&deg;25'E", "98&deg;7'W", "99&deg;6'E", "96&deg;22'E"], 0),

           new QuestionMCQ(`What is the westernmost longitude of India?`,
               ["68&deg;7'E", "67&deg;8'E", "65&deg;10'E", "66&deg;13'E"], 0),

           new QuestionMCQ(`What is the nothernmost latitude of India?`,
               ["37&deg;6'N", "30&deg;20'N", "28&deg;30'N", "22&deg;40'N",
                "15&deg; 50'N"], 0),

           new QuestionMCQ(`What is the southernmost latitude of India?`,
               ["8&deg;4'N", "3&deg;8'N", "12&deg; 12'N", "16&deg; 8'N",
                "20&deg; 25'N"], 0),

           new QuestionMCQ(`Since the opening of the Suez Canal in 1869, India's
               distance from Europe has been reduced by how many kilometers?`,
               ["7000 km", "6000 km", "5000 km", "4000 km", "3000 km"], 0),

           new QuestionMCQ(`Because of the Earth's rotation, there is a close
               connection between longitude and time. If the longitude of two
               places differ by 15&deg; what will be the difference in their
               local times (based on the position of the Sun)?`,
               ["1 hr", "2 hr", "3 hr", "4 hr", "5 hr"], 0),

           new QuestionMCQ(`Because of the Earth's rotation, there is a close
               connection between longitude and time. If the longitude of two
               places differ by 1&deg; what will be the difference in their
               local times (based on the position of the Sun)?`,
               ["4 min", "5 min", "6 min", "7 min", "8 min"], 0),

           new QuestionMCQ(`The Standard Meridian of India does NOT pass through
               the following state`, ["Tamil Nadu", "Uttar Pradesh",
               "Andhra Pradesh", "Madhya Pradesh", "Chattisgarh", "Odisha"], 0),

           new QuestionMCQ(`Which longitude has been selected as the Standard
               Meridian of India?`, ["82&deg;30'E", "80&deg;40'W",
               "72&deg;10'E", "92&deg;50'W"], 0),
           new QuestionMCQ(`India is ______ largest country in the world.`,
               ["Seventh", "Fifth", "Sixth", "Eighth", "Fourth"], 0),
           new QuestionMCQ(`Which of the following latitude is called the
               Tropic of Cancer?`, ["23&deg;30'N", "23&deg;N", "22&deg;N",
               "22&deg;S", "22&deg;40'S"], 0)
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

