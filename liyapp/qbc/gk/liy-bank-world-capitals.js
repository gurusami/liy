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

class WorldCapitals extends QuestionBank {
   constructor() {
       super();
       this.mLastUpdated = `15-Jan-2022`;
       let capitals = new Map();

       capitals.set("Afghanistan", "Kabul");
       capitals.set("Albania", "Tirana");
       capitals.set("Algeria", "Algiers");
       capitals.set("Andorra", "Andorra la Vella");
       capitals.set("Angola", "Luanda");
       capitals.set("Antigua and Barbuda", "St. John's");
       capitals.set("Argentina", "Buenos Aires");
       capitals.set("Armenia", "Yerevan");
       capitals.set("Australia", "Canberra");
       capitals.set("Austria", "Vienna");
       capitals.set("Azerbaijan", "Baku");

       capitals.set("Bangladesh", "Dhaka");
       capitals.set("Belarus", "Minsk");
       capitals.set("Belgium", "Brussels");
       capitals.set("Benin", "Porto-Novo");
       capitals.set("Bhutan", "Thimphu");
       capitals.set("Bolivia", "La Paz");
       capitals.set("Botswana", "Gaborone");
       capitals.set("Brazil", "Brasília");
       capitals.set("Bulgaria", "Sofia");
       capitals.set("Burkina Faso", "Ouagadougou");
       capitals.set("Burundi", "Gitega");
       capitals.set("Cambodia", "Phnom Penh");
       capitals.set("Cameroon", "Yaoundé");
       capitals.set("Canada", "Ottawa");
       capitals.set("Central African Republic", "Bangui");
       capitals.set("Chad", "N'Djamena");
       capitals.set("China", "Beijing");
       capitals.set("Chile", "Santiago");
       capitals.set("Colombia", "Bogotá");
       capitals.set("Congo", "Kinshasa");
       capitals.set("Costa Rica", "San José");
       capitals.set("Croatia", "Zagreb");
       capitals.set("Cyprus", "Nicosia");
       capitals.set("Djibouti", "Djibouti");
       capitals.set("Ecuador", "Quito");
       capitals.set("Egypt", "Cairo");
       capitals.set("El Salvador", "San Salvador");
       capitals.set("Eritrea", "Asmara");
       capitals.set("Estonia", "Tallinn");
       capitals.set("Ethiopia", "Addis Ababa");
       capitals.set("France", "Paris");
       capitals.set("Finland", "Helsinki");
       capitals.set("Gabon", "Libreville");
       capitals.set("Georgia", "Tbilisi");
       capitals.set("Germany", "Berlin");
       capitals.set("Greece", "Athens");
       capitals.set("Guatemala", "Guatemala City");
       capitals.set("Honduras", "Tegucigalpa");
       capitals.set("India", "New Delhi");
       capitals.set("Indonesia", "Jakarta");
       capitals.set("Iran", "Tehran");
       capitals.set("Iraq", "Baghdad");
       capitals.set("Ireland", "Dublin");
       capitals.set("Israel", "Jerusalem");
       capitals.set("Italy", "Rome");
       capitals.set("Ivory Coast", "Abidjan");
       capitals.set("Japan", "Tokyo");
       capitals.set("Jordan", "Amman");
       capitals.set("Kazakhstan", "Nur-Sultan");
       capitals.set("Kenya", "Nairobi");
       capitals.set("Kosovo", "Pristina");
       capitals.set("Kuwait", "Kuwait City");
       capitals.set("Laos", "Vientiane");
       capitals.set("Latvia", "Riga");
       capitals.set("Lebanon", "Beirut");
       capitals.set("Libya", "Tripoli");
       capitals.set("Lithuania", "Vilnius");
       capitals.set("Madagascar", "Antananarivo");
       capitals.set("Malaysia", "Kuala Lumpur");
       capitals.set("Maldives", "Malé");
       capitals.set("Mali", "Bamako");
       capitals.set("Mauritania", "Nouakchott");
       capitals.set("Mexico", "Mexico City");
       capitals.set("Mongolia", "Ulaanbaatar");
       capitals.set("Montenegro", "Podgorica");
       capitals.set("Morroco", "Rabat");
       capitals.set("Mozambique", "Maputo");
       capitals.set("Myanmar", "Naypyidaw");
       capitals.set("Namibia", "Windhoek");
       capitals.set("Nepal", "Kathmandu");
       capitals.set("New Zealand", "Wellington");
       capitals.set("Nicagarua", "Managua");
       capitals.set("Niger", "Niamey");
       capitals.set("Nigeria", "Abuja");
       capitals.set("North Korea", "Pyongyang");
       capitals.set("North Macedonia", "Skopje");
       capitals.set("Norway", "Oslo");
       capitals.set("Oman", "Muscat");
       capitals.set("Pakistan", "Islamabad");
       capitals.set("Panama", "Panama City");
       capitals.set("Papua New Guinea", "Port Moresby");
       capitals.set("Paraguay", "Asunción");
       capitals.set("Peru", "Lima");
       capitals.set("Philippines", "Manila");
       capitals.set("Poland", "Warsaw");
       capitals.set("Portugal", "Lisbon");
       capitals.set("Romania", "Bucharest");
       capitals.set("Russia", "Moscow");
       capitals.set("Rwanda", "Kigali");
       capitals.set("Saudi Arabia", "Riyadh");
       capitals.set("Serbia", "Belgrade");
       capitals.set("Somalia", "Mogadishu");
       capitals.set("South Africa", "Pretoria");
       capitals.set("South Korea", "Seoul");
       capitals.set("South Ossetia", "Tskhinvali");
       capitals.set("Spain", "Madrid");
       capitals.set("Sri Lanka", "Colombo");
       capitals.set("Sudan", "Khartoum");
       capitals.set("Sweden", "Stockholm");
       capitals.set("Syria", "Damascus");
       capitals.set("Tajikistan", "Dushanbe");
       capitals.set("Tanzania", "Dodoma");
       capitals.set("Thailand", "Bangkok");
       capitals.set("Tunisia", "Tunis");
       capitals.set("Turkey", "Ankara");
       capitals.set("Turkmenistan", "Ashgabat");
       capitals.set("Uganda", "Kampala");
       capitals.set("Ukraine", "Kyiv");
       capitals.set("United Arab Emirates", "Abu Dhabi");
       capitals.set("United Kingdom", "London");
       capitals.set("United States of America", "Washington, D.C.");
       capitals.set("Uzbekistan", "Tashkent"),
       capitals.set("Venezuela", "Caracas");
       capitals.set("Vietnam", "Hanoi");
       capitals.set("Yemen", "Sana'a");
       capitals.set("Zambia", "Lusaka");
       capitals.set("Zimbabwe", "Harare");

       this.mQuestionArray = [];
       this.mCountries = Array.from(capitals.keys());
       this.mChoices = Array.from(capitals.values());

       let fewCountries = this.getCountries(this.mCountries);

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

   getCountries(fullList) {
       let dup = new Array();
       let result = new Array();

       let N = 30; 
       for (var i = 0; i < N; ++i) {
           let j = LiY.ryRandom(0, fullList.length, dup);
           result.push(fullList[j]);
       }

       return result;
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
