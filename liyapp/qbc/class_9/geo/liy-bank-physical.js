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

class C9Physical extends QuestionBank {
   constructor() {
       super();
       this.mQuestionArray = [
           new QuestionMCQ(`Geologically, which of the following regions of
               India is the most stable?`, ["Himalayas", "Northern Plains",
               "Peninsular Plateau", "Indian Desert", "Coastal Plains"], 2),

           new QuestionMCQ(`Geologically, which of the following regions of
               India is the most unstable?`, ["Himalayas", "Northern Plains",
               "Peninsular Plateau", "Indian Desert", "Coastal Plains"], 0),

           new QuestionMCQ(`Geologically, which of the following regions of
               India is the youngest?`, ["Himalayas", "Northern Plains",
               "Peninsular Plateau", "Indian Desert", "Coastal Plains"], 0),

           new QuestionMCQ(`What kind of rocks does the Deccan Trap have?`,
               ["Igneous", "Sedimentary", "Sandstones", "Metamorphic rocks",
                "Clay"], 0),

           new QuestionMCQ(`Purvachal, also known as Eastern Highlands, are the
               mountain ranges in eastern India.  Which of the following is not
               part of Purvachal?`, ["Pir Panjal", "Patkai Hills", "Naga Hills",
               "Manipur Hills", "Mizo Hills"], 0),

           new QuestionMCQ(`The part of Himalayas lying between Indus and
               Satluj rivers is known as ________`, ["Kumaon Himalayas",
               "Punjab Himalayas", "Assam Himalayas", "Nepal Himalayas"], 1),

           new QuestionMCQ(`The part of Himalayas lying between Teesta and
               Dihang rivers is known as ________`, ["Kumaon Himalayas",
               "Punjab Himalayas", "Assam Himalayas", "Nepal Himalayas"], 2),

           new QuestionMCQ(`The part of Himalayas lying between Kali and Teesta
               rivers is known as ________`, ["Kumaon Himalayas",
               "Punjab Himalayas", "Assam Himalayas", "Nepal Himalayas"], 3),

           new QuestionMCQ(`The part of Himalayas lying between Satluj and Kali
               rivers is known as ________`, ["Kumaon Himalayas",
               "Punjab Himalayas", "Assam Himalayas", "Nepal Himalayas"], 0),

           new QuestionMCQ(`In which Indian state are the following popular
               tourist places located - Nainital, Mussoorie, Haridwar,
               Kedarnath, Rishikesh, Badrinath?`, ["Uttarkhand",
               "Uttar Pradesh", "Haryana", "Himachal Pradesh"], 0),

           new QuestionMCQ(`Choose the odd one out: `, ["Narmada River",
               "Mahanadi River", "Cauvery River", "Krishna River",
               "Godavari River"], 0),

           new QuestionMCQ(`Choose the odd one out: `, ["Coromandel Coast",
               "Konkan Coast", "Kannad Coast", "Malabar Coast"], 0),

           new QuestionMCQ(`The Chilika lake is the largest salt water lake
               in India. In which state is this lake located?`,
               ["Odisha", "Chattisgarh", "Jharkhand", "Telangana", "Bihar"], 0),

           new QuestionMCQ(`Which is the highest peak in the Western Ghats?`,
               ["Mahendragiri", "Anai Mudi", "Doda Betta", "Kanchenjunga",
                "Nanga Parbat"], 1),
              
           new QuestionMCQ(`Which is the highest peak in the Eastern Ghats?`,
               ["Mahendragiri", "Anai Mudi", "Doda Betta", "Kanchenjunga"], 0),

           new QuestionMCQ(`Which of the following is a tributary of
               Brahmaputra?`, ["Teesta", "Chenab", "Ravi", "Beas", "Satluj",
               "Jhelum"], 0),

           new QuestionMCQ(`In which range of Himalayas do the following peaks
               exists - Kanchenjunga, Nanda Parbat, Nanda Devi, Kamet?`,
               ["Himadri", "Himachal", "Shiwaliks", "Purvachal"], 0),

           new QuestionMCQ(`Which of the following peak of Himalayas lies in
               Nepal?`, ["Dhaulagiri", "Kanchenjunga", "Nanga Parbat",
               "Nanda Devi", "Kamet", "Namcha Barwa"], 0),

           new QuestionMCQ(`Which of the following peak of Himalayas lies in
               India?`, ["Namcha Barwa", "Makalu", "Dhaulagiri", "Annapurna",
               "Gurla Mandhata"], 0),

           new QuestionMCQ(`Which is the highest peak of Himalayas in India?`,
               ["Mt. Everest", "Kanchenjunga", "Nanga Parbat", "Nanda Devi",
                "Annapurna"], 1),

           new QuestionMCQ(`Which is the highest peak of Himalayas?`,
               ["Mt. Everest", "Kanchenjunga", "Nanga Parbat", "Nanda Devi",
                "Annapurna"], 0),

           new QuestionMCQ(`Geologically, which of the following land of India
               constitutes one of the ancient landmasses on the earth's
               surface?`,
               ["Peninsular Plateau", "Himalayan Mountains", "Northern Plains",
                "Indian Desert", "Coastal Plains"], 0)
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

