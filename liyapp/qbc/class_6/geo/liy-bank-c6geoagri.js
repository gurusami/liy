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

class Class6GeoAgri extends QuestionBank {
   constructor() {
       super();
       this.mQuestionArray = [
	   new QuestionMCQ(`In which of the following countries is intensive
               subsistence agriculture practiced?`,
               ["Canada",
                "Australia",
                "Japan",
                "USA"], 2), 

	   new QuestionMCQ(`Plantation agriculture is commercial cultivation
               of a single crop done on large farms that are managed like
               factories.  These farms are also called?`,
               ["ranches",
                "estates",
                "stations",
                "colonies"], 1), 

	   new QuestionMCQ(`Which of the following is not part of Green
               Revolution?`,
               ["Organic Manure",
                "High yielding variety seeds",
                "Irrigation",
                "Chemical Fertilizers"], 0), 

	   new QuestionMCQ(`Which of the following is a food crop?`,
               ["Millet", "Cotton", "Jute", "Sugarcane", "tea", "rubber"], 0), 

	   new QuestionMCQ(`Which of the following is a food crop?`,
               ["Rice", "Cotton", "Jute", "Sugarcane", "tea", "rubber"], 0), 

	   new QuestionMCQ(`Which of the following is a food crop?`,
               ["Wheat", "Cotton", "Jute", "Sugarcane", "tea", "rubber"], 0), 

	   new QuestionMCQ(`Which of the following is a food crop?`,
               ["Corn", "Cotton", "Jute", "Sugarcane", "tea", "rubber"], 0), 

	   new QuestionMCQ(`Which of the following is a cash crop?`,
               ["Cotton", "Millet", "Rice", "Wheat", "Corn"], 0), 

	   new QuestionMCQ(`Which of the following is a cash crop?`,
               ["Jute", "Millet", "Rice", "Wheat", "Corn"], 0), 

	   new QuestionMCQ(`Which of the following is a cash crop?`,
               ["Sugarcane", "Millet", "Rice", "Wheat", "Corn"], 0), 

	   new QuestionMCQ(`Which of the following is a cash crop?`,
               ["Tea", "Millet", "Rice", "Wheat", "Corn"], 0), 

	   new QuestionMCQ(`Which of the following is a cash crop?`,
               ["Rubber", "Millet", "Rice", "Wheat", "Corn"], 0), 

	   new QuestionMCQ(`Which of the following is called golden fibre?`,
               ["Jute", "Cotton", "Nylon", "Silk", "Polyester"], 0), 

	   new QuestionMCQ(`Shifting agriculture is known by different names
               in different parts of the world.  What is it called in North
               Eastern India?`,
               ["Jhumming", "Milpa", "Roca", "Masole", "Ladang"], 0), 

	   new QuestionMCQ(`What is meant by agriculture?`,
               ["Growing of crops", "Raising Livestock", "Forestry", "Fishing",
                "All of the above"], 4), 

	   new QuestionMCQ(`The type of agriculture that is practised for
               domestic consumption of the farmers is called?`,
               ["Subsistence Agriculture", "Commercial Agriculture"], 0), 

	   new QuestionMCQ(`The type of agriculture that is practised with
               the aim of selling the produce in the market to earn profit is
               called?`,
               ["Subsistence Agriculture", "Commercial Agriculture"], 1), 

	   new QuestionMCQ(`What type is plantation agriculture?`,
               ["Subsistence Agriculture", "Commercial Agriculture"], 1), 

	   new QuestionMCQ(`What type is extensive agriculture?`,
               ["Subsistence Agriculture", "Commercial Agriculture"], 1), 

	   new QuestionMCQ(`What of the following does NOT belong to commercial
               agriculture type?`,
               ["Shifting cultivation", "Plantations", "Dairy farming",
                "Orchard Farming", "Horticulture"], 0), 

	   new QuestionMCQ(`Which of the following is not a plantation crop?`,
               ["Rice", "Tea", "Coffee", "Coconut", "Sugarcane"], 0), 

	   new QuestionMCQ(`Which of the following is not a plantation crop?`,
               ["Wheat", "Oil palm", "Rubber", "Cocoa", "Banana"], 0), 

	   new QuestionMCQ(`Who is considered as the Father of Green
               Revolution?`,
               ["Norman Borlaug", "Antoine Lavoisier",
                "M S Swaminathan", "Robert Hooke"], 0), 

	   new QuestionMCQ(`Which of the following is NOT true about extensive
               agriculture?`,
               ["Large amount of human labour",
                "Sparsely populated region", "Highly mechanised",
                "Farms are large", "Commercial agriculture"], 0), 

	   new QuestionMCQ(`Which of the following is NOT true about intensive
               agriculture?`,
               ["Sparsely populated region",
                "Large amount of human labour", "Farms are small",
                "Productivity is high", "Subsistence agriculture"], 0), 

	   new QuestionMCQ(`Green Revolution was most successful in which part
               of India?`, ["North", "South", "East", "West", "North East"], 0), 

	   new QuestionMCQ(`The jute fibre is obtained from the seed hair of
               the plant?`, ["False", "True"], 0), 

	   new QuestionMCQ(`The cotton fibre is obtained from the seed hair of
               the plant?`, ["False", "True"], 1), 

	   new QuestionMCQ(`The jute fibre is obtained from the stem of
               the plant?`, ["False", "True"], 1), 

	   new QuestionMCQ(`Cotton fibre is obtained from white, fluffy seed
               hair.  It is classified according to the length of the fibre.
               Which of them is of the finest quality?`,
               ["short staple cotton",
                "long staple cotton",
                "medium staple cotton",
                "All are considered equal"], 1)];
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

