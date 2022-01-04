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

class LiyClass9GeoVegetationQB extends QuestionBank {
   constructor() {
       super();
       this.mQuestionArray  = [
	   new QuestionMCQ(`Which of the following vegetation zone is the
               coldest?`,
               ["Alpine", "Tropical", "Subtropical", "Temperate"], 0),

	   new QuestionMCQ(`Which of the following vegetation zone is the
               hotest?`, ["Alpine", "Tropical", "Subtropical", "Temperate"], 1),

	   new QuestionMCQ(`What is meant by virgin vegetation?`,
               ["Natural Vegetation", "Cultivated Crops", "Orchards",
                "Plantations"], 0),

	   new QuestionMCQ(`The juice from this ripe fruit is used to prepare
               vinegar, which is carminative and diuretic, and has digestive
               properties. The powder of its seed is used for controlling
               diabetes. What fruit is this?`,
               ["Jamun", "Sarpagandha", "Arjun", "Babool", "Neem", "Tulsi",
                "Kachnar"], 0),

	   new QuestionMCQ(`Rubber trees grow in which type of vegetation?`,
               ["Tropical Evergreen Forests", "Tropical Deciduous Forests",
                "Tropical Thorn Forests and Scrubs", "Montane Forests",
                "Mangrove Forests"], 0),

	   new QuestionMCQ(`Which of the following forests requires maximum
               rainfall?`,
               ["Tropical Evergreen Forests", "Tropical Deciduous Forests",
                "Tropical Thorn Forests and Scrubs", "Montane Forests",
                "Mangrove Forests"], 0),

	   new QuestionMCQ(`Cinchona trees grow in which type of vegetation?`,
               ["Tropical Evergreen Forests", "Tropical Deciduous Forests",
                "Tropical Thorn Forests and Scrubs", "Montane Forests",
                "Mangrove Forests"], 0),

	   new QuestionMCQ(`Which is the most common type of forest in India?`,
               ["Tropical Evergreen Forests", "Tropical Deciduous Forests",
                "Tropical Thorn Forests and Scrubs", "Montane Forests",
                "Mangrove Forests"], 1),

	   new QuestionMCQ(`Which of the following is also known as monsoon
               forests?`,
               ["Tropical Evergreen Forests", "Tropical Deciduous Forests",
                "Tropical Thorn Forests and Scrubs", "Montane Forests",
                "Mangrove Forests"], 1),

	   new QuestionMCQ(`What type of climate does montane forests have?`,
               ["Tropical", "Temperate", "Subtropical", "Alpine"], 3),

	   new QuestionMCQ(`What type of climate does mongrove forests need?`,
               ["Tropical", "Temperate", "Subtropical", "Alpine",
                "Tropical/Subtropical" ], 4),

	   new QuestionMCQ(`Which type of forest exists in brackish water?`,
               ["Tropical Evergreen", "Mangrove", "Montane", "Tropical Deciduous",
                "Tropical Thorn and Scrubs" ], 1),

	   new QuestionMCQ(`What are the main plant species of Tropical Thorn
               and Scrub forests?`,
               ["Acacias, palms, euphorbias, cacti",
                "Teak, sal, peepal, neem",
                "Bamboos, sandalwood, mulberry",
                "Silver fir, junipers, pines, birches",
                "Sundari trees, palm, coconut",
                "Ebony, mahogany, rosewood, rubber, cinchona"], 0),

	   new QuestionMCQ(`What are the main plant species of Tropical
               Evergreen forests?`,
               ["Acacias, palms, euphorbias, cacti",
                "Teak, sal, peepal, neem",
                "Teak, Bamboos, sandalwood, mulberry",
                "Silver fir, junipers, pines, birches",
                "Sundari trees, palm, coconut",
                "Ebony, mahogany, rosewood, rubber, cinchona"], 5),

	   new QuestionMCQ(`What are the main plant species of tropical
               moist deciduous forests?`,
               ["Acacias, palms, euphorbias, cacti",
                "Teak, sal, peepal, neem",
                "Teak, Bamboos, sandalwood, mulberry",
                "Silver fir, junipers, pines, birches",
                "Sundari trees, palm, coconut",
                "Ebony, mahogany, rosewood, rubber, cinchona"], 2),

	   new QuestionMCQ(`What are the main plant species of tropical
               dry deciduous forests?`,
               ["Teak, sal, peepal, neem",
                "Acacias, palms, euphorbias, cacti",
                "Teak, Bamboos, sandalwood, mulberry",
                "Silver fir, junipers, pines, birches",
                "Sundari trees, palm, coconut",
                "Ebony, mahogany, rosewood, rubber, cinchona"], 0),

	   new QuestionMCQ(`What are the main plant species of montane
               forests?`,
               ["Acacias, palms, euphorbias, cacti",
                "Teak, sal, peepal, neem",
                "Teak, Bamboos, sandalwood, mulberry",
                "Silver fir, junipers, pines, birches",
                "Sundari trees, palm, coconut",
                "Ebony, mahogany, rosewood, rubber, cinchona"], 3),

	   new QuestionMCQ(`What are the main plant species of mangrove
               forests?`,
               ["Acacias, palms, euphorbias, cacti",
                "Teak, sal, peepal, neem",
                "Teak, Bamboos, sandalwood, mulberry",
                "Silver fir, junipers, pines, birches",
                "Sundari trees, palm, coconut",
                "Ebony, mahogany, rosewood, rubber, cinchona"], 4),

	   new QuestionMCQ(`What is the forest cover of India, according to
               Indian State of Forest Report 2011?`,
               ["21.05", "10.50", "27.33", "35.82"], 0),

	   new QuestionMCQ(`Which of the mean annual average temperature of
               temperate vegetation zone?`,
               ["Above 24&deg;C", "17&deg;C to 24&deg;C", "7&deg;C to 17&deg;C",
                "Below 7&deg;C"], 2)];
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

