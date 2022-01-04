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

class LiyClass6AirAroundUsQB extends QuestionBank {
   constructor() {
       super();
       this.mQuestionArray = [
           new QuestionMCQ(`Which gas when present in excess amount in the 
               atmosphere causes <i>global warming</i>?`,
               ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen", "Air",
                "Helium"], 0),

           new QuestionFIB(`Which is the second most abundant gas in the
               atmosphere?`, "Oxygen"),

           new QuestionFIB(`What is the name of the process by which food is
               burnt in the presence of oxygen to release energy in our body?`,
               "Respiration"),

           new QuestionFIB(`What is the name of the process by which plants
               make their own food in the presence of chlorophyll, sunlight
               and carbon dioxide?`, "Photosynthesis"),

           new QuestionMCQ(`Which of the following gases is released during
               respiration?`, ["Carbon Dioxide", "Oxygen", "Nitrogen",
               "Hydrogen", "Argon"], 0),

           new QuestionMCQ(`Plants need nitrogen for their proper growth and
               development. Plants absorb nitrogen in the form of:`,
               ["Nitrites and Nitrates", "Nitrogen gas", "Proteins",
                "Fertilizers"], 0),

           new QuestionMCQ(`Plants need nitrogen for their proper growth and
               development.  Plants take nitrogen directly from the air.`,
               ["False", "True"], 0),

           new QuestionMCQ(`Which gas is used to flush the packets of chips
               to prevent their spoilage?`,
               ["Nitrogen", "Oxygen", "Hydrogen", "Air", "Helium"], 0),

           new QuestionMCQ(`Plants take carbon dioxide present in air and
               convert it to carbohydrates.`, ["True", "False"], 0),

           new QuestionMCQ(`What happens to eatables such as biscuits and chips
               when left uncovered during rainy season?  They become soggy.
               This demonstrates the presence of what in air?`,
               ["Water Vapour", "Oxygen", "Carbon dioxide", "Hydrogen",
                "Nitrogen", "Argon"], 0),

           new QuestionMCQ(`Take a glass and fill it with ice cubes.  Keep it
               on a table and observe for a few minutes.  You will observe
               tiny droplets of water on the outer surface of the glass.
               This demonstrates the presence of what in air?`,
               ["Water Vapour", "Oxygen", "Carbon dioxide", "Hydrogen",
                "Nitrogen", "Argon"], 0),

           new QuestionMCQ(`Which inert gas emits reddish orange light when
               electric current is passes through it?`,
               ["Helium", "Argon", "Neon", "Krypton", "Nitrogen"], 2),

           new QuestionMCQ(`Which of the following is NOT an inert gas?`,
               ["Nitrogen", "Helium", "Argon", "Neon", "Krypton"], 0),

           new QuestionMCQ(`When air is passed through lime water it turns
               milky white. This demonstrates the presence of which gas in
               air?`, 
               ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen",
                "Helium"], 2),

	   new QuestionMCQ(`Which gas is needed by plants to make their food
               by the process of photosynthesis?`,
               ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen",
                "Water Vapour"], 2),

	   new QuestionFIB(`What is the percentage of Nitrogen in air? (Note: 
               Enter without percentage symbol %)`, 78),
	   new QuestionFIB(`What is the percentage of Oxygen in air? (Note: 
               Enter without percentage symbol %)`, 21),
	   new QuestionFIB(`What is the percentage of Carbon Dioxide in air?
               (Note: Enter without percentage symbol %)`, "0.03"),

	   new QuestionMCQ(`Which gas is also known as the inactive
               component of the air?`,
               ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen",
                "Water Vapour"], 0),

	   new QuestionMCQ(`Which is the most abundant gas in the atmosphere?`,
               ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen",
                "Water Vapour"], 0),
	   new QuestionMCQ(`Which layer of atmosphere protects us from the
               harmful ultraviolet rays of the sun?`,
               ["Troposphere", "Stratosphere", "Mesophere", "Thermosphere",
                "Exosphere"] , 1),
	   new QuestionMCQ(`Which is the outermost layer of atmosphere?`,
               ["Troposphere", "Stratosphere", "Mesophere", "Thermosphere",
                "Exosphere"] , 4),
	   new QuestionMCQ(`In which layer of atmosphere does the satellites
               orbit the earth?`,
               ["Troposphere", "Stratosphere", "Mesophere", "Thermosphere",
                "Exosphere"] , 3),
	   new QuestionMCQ(`Meteors that enter the earth's atmosphere get
               burned in this layer and are seen as shooting stars.  Which is
               this layer?`,
               ["Troposphere", "Stratosphere", "Mesophere", "Thermosphere",
                "Exosphere"], 2),
	   new QuestionMCQ(`Which layer of atmosphere contains the ozone
               layer?`,
               ["Troposphere", "Stratosphere", "Mesophere", "Thermosphere",
                "Exosphere"], 1),
	   new QuestionMCQ(`Which layer of atmosphere is present above the
               Troposphere?`, 
               ["Stratosphere", "Mesophere", "Thermosphere", "Exosphere"] , 0),
	   new QuestionMCQ(`In which layer of atmosphere does all the weather
               changes happen?`, 
               ["Troposphere", "Stratosphere", "Mesophere", "Thermosphere",
                "Exosphere"] , 0),
	   new QuestionMCQ(`In which layer of atmosphere does the clouds that
               we can see occur?`, 
               ["Troposphere", "Stratosphere", "Mesophere", "Thermosphere",
                "Exosphere"] , 0),

	   new QuestionMCQ(`In which layer of atmosphere, aeroplanes fly?`,
               ["Troposphere", "Stratosphere", "Mesophere",
               "Thermosphere", "Exosphere"] , 0),

	   new QuestionMCQ(`What is the layer of the atmosphere nearest to the
               surface of earth?`, ["Troposphere", "Stratosphere", "Mesophere",
               "Thermosphere", "Exosphere"] , 0),
	   new QuestionFIB(`The earth is surrounded by an invisible thick layer
               of air.  What is it called?`, "atmosphere")
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

