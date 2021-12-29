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

class LiyClass9GeoWildLifeQB extends QuestionBank {
   constructor() {
       super();
       this.qst_bank = [
	   new QuestionMCQ(`What is a biosphere reserve?`,
               ["Science for Sustainability Support Sites",
                "Wildlife Sanctuary", "Bird Sanctuary", "National Park",
                "Zoological Gardens"], 0),
	   new QuestionMCQ(`How many biosphere reserves are setup in India?`,
               ["18", "14", "21", "9", "31"], 0),
	   new QuestionMCQ(`When was Wildlife Protection Act implemented in
               India?`, ["1972", "1961", "1958", "1982", "1997"], 0),
	   new QuestionMCQ(`Which is the bird sanctuary found in Tamil Nadu?`,
               ["Vedanthangal", "Eturnagaram", "Mudumalai", "Bandipur",
                "Ranganathittu"], 0),
	   new QuestionMCQ(`In which of the following biosphere reserve do we
               see Dugong Dugong (Sea Cow)?`, ["Gulf of Mannar", "Sunderbans",
               "Great Nicobar", "Dibru Saikhowa", "Achankmar Amarkantak"], 0),
	   new QuestionMCQ(`Which of the following states does NOT have a
               biosphere reserve?`, ["Uttar Pradesh", "Tamil Nadu",
               "West Bengal", "Himachal Pradesh", "Assam", "Meghalaya"], 0),
	   new QuestionMCQ(`Which of the following biosphere reserve is located
               in Uttarakhand?`, ["Nanda Devi", "Pachmarhi", "Khangchendzonga",
               "Seshachalam", "Panna"], 0),
	   new QuestionMCQ(`In which state is the Nokrek biosphere reserve
               located?`, ["Meghalaya", "Mizoram", "Bihar", "Assam",
               "Tripura", "Arunachal Pradesh"], 0),
           new QuestionMCQ(`Which of the following is also known as fire fox?`,
               ["Red Panda", "Yak", "Ibex", "Snow Leopard", "Tibetan Wild Ass"]
               , 0),
	   new QuestionMCQ(`Which is the only country that has both tigers and
               lions?`, ["India", "Pakistan", "Sri Lanka", "China", "Russia"],
               0),
	   new QuestionMCQ(`Some of the wetlands of India are popular with
               migratory birds.  During winter, birds such as Siberian Crane,
               come in large numbers. Which of the following is favourable with
               migratory birds?`, ["Rann of Kutch", "Tundra Region",
               "Nanda Devi", "Pachmarhi", "Dehang Debang"], 0),
	   new QuestionMCQ(`Which one of the following bio-reserves of India is
               not included in the world network of bioreserve?`, ["Manas",
               "Gulf of Mannar", "Nilgiri", "Nanda Devi"], 0),
	   new QuestionMCQ(`In which state is the Similipal biosphere reserve
               located?`, ["Odisha", "Meghalaya", "Bihar", "Assam",
               "Madhya Pradesh"], 0),
	   new QuestionMCQ(`Which of the following biosphere reserve is NOT
               located in Tamil Nadu`, ["Seshachalam", "Gulf of Mannar",
               "Nilgiri", "Agasthyamalai"], 0),
	   new QuestionMCQ(`Which is the last remaining natural habitat of the
               Asiatic lion?`, ["Gir Forest", "Nilgiris", "Thar Desert",
               "Ladakh", "Rann of Kachchh" ], 0)];
   }

   initQuestionArray() {
       this.mQuestionArray  = this.qst_bank;
       for (var i = 0; i < this.mQuestionArray.length; ++i) {
           let qst = this.mQuestionArray[i];
           if (qst instanceof QuestionMCQ) {
               qst.shuffleChoices();
           }
       }
   }
}

