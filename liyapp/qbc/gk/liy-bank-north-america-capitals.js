/*******************************************************************************

Learn it Yourself (LiY) - Software to Promote Self Study

Copyright (C) 2022, Annamalai Gurusami <annamalai.gurusami@gmail.com>

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

// Refer to the following URL.
// https://en.wikipedia.org/wiki/List_of_sovereign_states

class NorthAmericaCapitals extends QuestionBank {
   constructor() {
       super();
       this.mLastUpdated = `28-Feb-2022`;
       let capitals = new Map();

       capitals.set("Antigua and Barbuda", "Saint John's");
       capitals.set("Bahamas (Commonwealth of The Bahamas)", "Nassau");
       capitals.set("Barbados", "Bridgetown");
       capitals.set("Belize", "Belmopan")
       capitals.set("Canada", "Ottawa");
       capitals.set("Costa Rica (Republic of Costa Rica)", "San José");
       capitals.set("Cuba (Republic of Cuba)", "Havana");
       capitals.set("Dominica (Commonwealth of Dominica)", "Roseau");
       capitals.set("Dominican Republic", "Santo Domingo");
       capitals.set("El Salvador (Republic of El Salvador)", "San Salvador");
       capitals.set("Grenada", "St. George's");
       capitals.set("Guatemala (Republic of Guatemala)", "Guatemala City");
       capitals.set("Haiti (Republic of Haiti)", "Port-au-Prince");
       capitals.set("Honduras (Republic of Honduras)", "Tegucigalpa");
       capitals.set("Jamaica", "Kingston");
       capitals.set("Mexico", "Mexico City");
       capitals.set("Nicagarua", "Managua");
       capitals.set("Panama", "Panama City");
       capitals.set("Saint Kitts and Nevis (Federation of Saint Christopher and Nevi)", "Basseterre");
       capitals.set("Saint Lucia", "Castries");
       capitals.set("Saint Vincent and the Grenadines", "Kingstown");
       capitals.set("Trinidad and Tobago", "Port of Spain");
       capitals.set("United States of America", "Washington, D.C.");

       this.mQuestionArray = [];
       this.mCountries = Array.from(capitals.keys());
       this.mChoices = Array.from(capitals.values());

       let fewCountries = this.mCountries;

       /* Add some more well known cities. */
       this.mChoices.push("Chennai");
       this.mChoices.push("Ho Chi Minh City");
       this.mChoices.push("Istanbul");
       this.mChoices.push("Kolkata");
       this.mChoices.push("Mumbai");
       this.mChoices.push("New York City");
       this.mChoices.push("Saint Petersburg");
       this.mChoices.push("São Paulo");
       this.mChoices.push("Shanghai");
       this.mChoices.push("Toronto");
       this.mChoices.push("Yangon");

       for (var i = 0; i < fewCountries.length; ++i) {
           let country = fewCountries[i];
           let capital = capitals.get(country);
           this.mQuestionArray.push(new QuestionMCQ(
               `What is the capital of ${country}?`,
               this.getChoices(capital), 0));
       }
   }

   getChoices(answer) {
       let dup = new Array();
       let result = new Array();

       result.push(answer);

       let N = 4; /* Totally 5 choices */
       for (var i = 0; i < N; ++i) {
           let j = LiY.ryRandom(0, this.mChoices.length, dup);
           let x = this.mChoices[j];
           if (x == answer) {
               N++;
               if (N > 10) break; // For safety.
           } else {
               result.push(x);
           }
       }

       return result;
   }

   initQuestionArray() {
       for (var i = 0; i < this.mQuestionArray.length; ++i) {
           this.mQuestionArray[i].shuffleChoices();
       }
   }
}
