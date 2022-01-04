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

class LiyClass9ColonialismQB extends QuestionBank {
   constructor() {
       super();
       this.mQuestionArray = [
           new QuestionFIB(`_______ cultivation was a system in which local
               farmers were allowed to cultivate temporarily within a
               plantation.`, "Taungya"),

           new QuestionMCQ(`In swidden cultivation, parts of the forest are cut
               and burnt in rotation. This method of cultivation has many local
               names in different countries.  Which one of the following is its
               local name in Sri Lanka?`, ["Chena", "Milpa", "Jhum",
               "Chitemene", "Penda"], 0),

           new QuestionMCQ(`In shifting cultivation, parts of the forest are cut
               and burnt in rotation. This method of cultivation has many local
               names in different countries.  Which one of the following is its
               local name in Central America?`, ["Milpa", "Lading", "Jhum",
               "Chitemene", "Penda", "Khandad"], 0),

           new QuestionMCQ(`In swidden or shifting cultivation, parts of the
               forest are cut and burnt in rotation. This method of cultivation
               has many local names in different countries.  Which one of the
               following is NOT its local name in India?`,
               ["Tavy", "Bewar", "Jhum", "Podu", "Penda", "Nevad"], 0),

           new QuestionMCQ(`After the Indian Forest Act of 1878 divided forests
               into three categories: reserved, protected and village forests.
               From which category of forests can wood be taken for the purpose
               of house building or fuel?`,
               ["Protected and Village forests",
                "Village and Reserved forests",
                "Reserved and Protected forests",
                "Reserved, Protected and Village forests"], 0),

           new QuestionMCQ(`After the Indian Forest Act of 1878 divided forests
               into three categories: reserved, protected and village forests.
               From which category, villagers could not take anything even for
               their own person use?`, ["Reserved forests", "Protected forests",
               "Village forests", "Reserved and Protected forests"], 0),

           new QuestionMCQ(`After the Indian Forest Act was enacted in 1865,
               it was amended twice, once in 1878 and then in 1927.  The 1878
               Act divided forests into three categories: reserved, protected
               and village forests.  The best forests were categorized as?`,
               ["Reserved forests", "Protected forests", "Village forests"], 0),

           new QuestionMCQ(`Indus Valley Railway, consisting of about 300 miles
               of railway track, connected which of the following cities?`,
               ["Multan and Sukkur", "Multan and Lahore", "Sukkur and Lahore",
                "Karachi and Multan", "Lahore and Karachi"], 0),

           new QuestionMCQ(`Sleepers are wooden planks laid across railway
               tracks, which hold the tracks in position.  How many sleepers
               were required per mile of railway track?`, ["1760 to 2000"
               , "1130 to 1590", "510 to 1040", "2170 to 2780",
               "3222 to 3777"], 0),

           new QuestionFIB(`Where is the Forest Research Institute (India)
               located?`, "Dehradun"),
           new QuestionFIB(`Who was the first Inspector General of Forests in
               India?`, "Dietrich Brandis"),
           new QuestionMCQ(`Dietrich Brandis, was the first Inspector General
               of Forests in India.  He helped formulate the Indian Forest Act.
               When was Indian Forest Act first enacted?`,
               ["1865", "1878", "1927", "1864", "1906"], 0),
           new QuestionMCQ(`When was the Indian Forest Service setup?`,
               ["1864", "1857", "1906", "1878", "1927"], 0),
           new QuestionFIB(`The disappearance of forests is referred to as
           _____________.  _____________ is not a recent problem. The process
           began many centuries ago; but under colonial rule it became more
           systematic and extensive.`, "Deforestation")
       ];
   }

   initQuestionArray() {
       for (var i = 0; i < this.mQuestionArray.length; ++i) {
           let qst = this.mQuestionArray[i];
           if (qst instanceof QuestionMCQ) {
               qst.shuffleChoices();
           }
       }
   }
}

