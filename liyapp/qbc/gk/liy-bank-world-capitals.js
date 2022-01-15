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

       capitals.set("Bahamas (Commonwealth of The Bahamas)", "Nassau");
       capitals.set("Bahrain (Kingdom of Bahrain)", "Manama")
       capitals.set("Bangladesh", "Dhaka");
       capitals.set("Barbados", "Bridgetown");
       capitals.set("Belarus", "Minsk");
       capitals.set("Belgium", "Brussels");
       capitals.set("Belize", "Belmopan")
       capitals.set("Benin", "Porto-Novo");
       capitals.set("Bhutan", "Thimphu");
       capitals.set("Bolivia", "La Paz");
       capitals.set("Bosnia and Herzegovina", "Sarajevo")
       capitals.set("Botswana", "Gaborone");
       capitals.set("Brazil", "Brasília");
       capitals.set("Brunei (Nation of Brunei, the Abode of Peace)", "Bandar Seri Begawan");
       capitals.set("Bulgaria", "Sofia");
       capitals.set("Burkina Faso", "Ouagadougou");
       capitals.set("Burundi", "Gitega");

       capitals.set("Cambodia", "Phnom Penh");
       capitals.set("Cameroon", "Yaoundé");
       capitals.set("Canada", "Ottawa");
       capitals.set("Cape Verde (Republic of Cabo Verde)", "Praia");
       capitals.set("Central African Republic", "Bangui");
       capitals.set("Chad", "N'Djamena");
       capitals.set("Chile", "Santiago");
       capitals.set("China (People's Republic of China)", "Beijing");
       capitals.set("Colombia (Republic of Colombia)", "Bogotá");
       capitals.set("Comoros (Union of the Comoros)", "Moroni");
       capitals.set("Congo (Democratic Republic of the Congo)", "Kinshasa");
       capitals.set("Congo (Republic of the Congo)", "Brazzaville");
       capitals.set("Costa Rica (Republic of Costa Rica)", "San José");
       capitals.set("Croatia (Republic of Croatia)", "Zagreb");
       capitals.set("Cuba (Republic of Cuba)", "Havana");
       capitals.set("Cyprus (Republic of Cyprus)", "Nicosia");
       capitals.set("Czech Republic", "Prague");

       capitals.set("Denmark (Kingdom of Denmark )", "Copenhagen");
       capitals.set("Djibouti (Republic of Djibouti)", "Djibouti");
       capitals.set("Dominica (Commonwealth of Dominica)", "Roseau");
       capitals.set("Dominican Republic", "Santo Domingo");

       capitals.set("East Timor (Democratic Republic of Timor-Leste)", "Dili");
       capitals.set("Ecuador (Republic of Ecuador)", "Quito");
       capitals.set("Egypt (Arab Republic of Egypt)", "Cairo");
       capitals.set("El Salvador (Republic of El Salvador)", "San Salvador");
       capitals.set("Equatorial Guinea (Republic of Equatorial Guinea)", "Malabo");
       capitals.set("Eritrea (State of Eritrea)", "Asmara");
       capitals.set("Estonia", "Tallinn");
       capitals.set("Eswatini (Kingdom of Eswatini)", "Mbabane");
       capitals.set("Ethiopia", "Addis Ababa");

       capitals.set("Fiji (Republic of Fiji)", "Suva");
       capitals.set("Finland (Republic of Finland)", "Helsinki");
       capitals.set("France", "Paris");

       capitals.set("Gabon (Gabonese Republic)", "Libreville");
       capitals.set("Gambia (Republic of The Gambia)", "Banjul");
       capitals.set("Georgia", "Tbilisi");
       capitals.set("Germany (Federal Republic of Germany)", "Berlin");
       capitals.set("Ghana (Republic of Ghana)", "Accra");
       capitals.set("Greece (Hellenic Republic)", "Athens");
       capitals.set("Grenada", "St. George's");
       capitals.set("Guatemala (Republic of Guatemala)", "Guatemala City");
       capitals.set("Guinea (Republic of Guinea)", "Conakry");
       capitals.set("Guinea-Bissau (Republic of Guinea-Bissau)", "Bissau");
       capitals.set("Guyana (Co‑operative Republic of Guyana)", "Georgetown");

       capitals.set("Haiti (Republic of Haiti)", "Port-au-Prince");
       capitals.set("Honduras (Republic of Honduras)", "Tegucigalpa");
       capitals.set("Hungary", "Budapest");

       capitals.set("Iceland", "Reykjavík")
       capitals.set("India (Republic of India)", "New Delhi");
       capitals.set("Indonesia", "Jakarta");
       capitals.set("Iran", "Tehran");
       capitals.set("Iraq", "Baghdad");
       capitals.set("Ireland", "Dublin");
       capitals.set("Israel", "Jerusalem");
       capitals.set("Italy", "Rome");
       capitals.set("Ivory Coast", "Abidjan");

       capitals.set("Jamaica", "Kingston");
       capitals.set("Japan", "Tokyo");
       capitals.set("Jordan (Hashemite Kingdom of Jordan)", "Amman");

       capitals.set("Kazakhstan", "Nur-Sultan");
       capitals.set("Kenya", "Nairobi");
       capitals.set("Kiribati (Republic of Kiribati)", "South Tarawa");
       capitals.set("Kosovo", "Pristina");
       capitals.set("Kuwait", "Kuwait City");
       capitals.set("Kyrgyzstan (Kyrgyz Republic)", "Bishkek");

       capitals.set("Laos (Lao People's Democratic Republic)", "Vientiane");
       capitals.set("Latvia", "Riga");
       capitals.set("Lebanon", "Beirut");
       capitals.set("Lesotho (Kingdom of Lesotho)", "Maseru");
       capitals.set("Liberia (Republic of Liberia)", "Monrovia")
       capitals.set("Libya", "Tripoli");
       capitals.set("Liechtenstein (Principality of Liechtenstein)", "Vaduz");
       capitals.set("Lithuania", "Vilnius");
       capitals.set("Luxembourg (Grand Duchy of Luxembourg)", "Luxembourg City");

       capitals.set("Madagascar (Republic of Madagascar)", "Antananarivo");
       capitals.set("Malawi (Republic of Malawi)", "Lilongwe");
       capitals.set("Malaysia", "Kuala Lumpur");
       capitals.set("Maldives", "Male");
       capitals.set("Mali", "Bamako");
       capitals.set("Malta (Republic of Malta)", "Valletta");
       capitals.set("Marshall Islands", "Majuro");
       capitals.set("Mauritania", "Nouakchott");
       capitals.set("Mauritius", "Port Louis");
       capitals.set("Mexico", "Mexico City");
       capitals.set("Micronesia (Federated States of Micronesia)", "Palikir");
       capitals.set("Moldova (Republic of Moldova)", "Chișinău");
       capitals.set("Monaco (Principality of Monaco)", "Monaco");
       capitals.set("Mongolia", "Ulaanbaatar");
       capitals.set("Montenegro", "Podgorica");
       capitals.set("Morroco (Kingdom of Morocco)", "Rabat");
       capitals.set("Mozambique (Republic of Mozambique)", "Maputo");
       capitals.set("Myanmar (Republic of the Union of Myanmar)", "Naypyidaw");

       capitals.set("Namibia", "Windhoek");
       capitals.set("Nauru (Republic of Nauru)", "Yaren");
       capitals.set("Nepal", "Kathmandu");
       capitals.set("Netherlands (Kingdom of the Netherlands)", "Amsterdam");
       capitals.set("New Zealand", "Wellington");
       capitals.set("Nicagarua", "Managua");
       capitals.set("Niger", "Niamey");
       capitals.set("Nigeria", "Abuja");
       capitals.set("North Korea (Democratic People's Republic of Korea)", "Pyongyang");
       capitals.set("North Macedonia", "Skopje");
       capitals.set("Norway", "Oslo");

       capitals.set("Oman", "Muscat");

       capitals.set("Pakistan (Islamic Republic of Pakistan)", "Islamabad");
       capitals.set("Palau (Republic of Palau)", "Ngerulmud");
       capitals.set("Panama", "Panama City");
       capitals.set("Papua New Guinea", "Port Moresby");
       capitals.set("Paraguay", "Asunci�n");
       capitals.set("Peru", "Lima");
       capitals.set("Philippines", "Manila");
       capitals.set("Poland", "Warsaw");
       capitals.set("Portugal", "Lisbon");

       capitals.set("Qatar", "Doha");

       capitals.set("Romania", "Bucharest");
       capitals.set("Russia", "Moscow");
       capitals.set("Rwanda", "Kigali");

       capitals.set("Saint Kitts and Nevis (Federation of Saint Christopher and Nevi)", "Basseterre");
       capitals.set("Saint Lucia", "Castries");
       capitals.set("Saint Vincent and the Grenadines", "Kingstown");
       capitals.set("Samoa (Independent State of Samoa)", "Apia");
       capitals.set("San Marino (Republic of San Marino)", "San Marino");
       capitals.set("São Tomé and Príncipe", "São Tomé");
       capitals.set("Saudi Arabia", "Riyadh");
       capitals.set("Senegal", "Dakar");
       capitals.set("Serbia", "Belgrade");
       capitals.set("Seychelles", "Victoria");
       capitals.set("Sierra Leone (Republic of Sierra Leone)", "Freetown");
       capitals.set("Slovakia", "Bratislava");
       capitals.set("Slovenia", "Ljubljana");
       capitals.set("Solomon Islands", "Honiara");
       capitals.set("Somalia", "Mogadishu");
       capitals.set("South Africa", "Pretoria");
       capitals.set("South Sudan", "Juba");
       capitals.set("South Korea", "Seoul");
       capitals.set("Spain", "Madrid");
       capitals.set("Sri Lanka", "Colombo");
       capitals.set("Sudan (Republic of the Sudan)", "Khartoum");
       capitals.set("Suriname", "Paramaribo");
       capitals.set("Sweden", "Stockholm");
       capitals.set("Switzerland", "Bern");
       capitals.set("Syria", "Damascus");

       capitals.set("Tajikistan", "Dushanbe");
       capitals.set("Tanzania", "Dodoma");
       capitals.set("Thailand", "Bangkok");
       capitals.set("Togo", "Lomé");
       capitals.set("Tonga (Kingdom of Tonga)", "Nukuʻalofa")
       capitals.set("Trinidad and Tobago", "Port of Spain");
       capitals.set("Tunisia", "Tunis");
       capitals.set("Turkey", "Ankara");
       capitals.set("Turkmenistan", "Ashgabat");
       capitals.set("Tuvalu", "Funafuti");

       capitals.set("Uganda", "Kampala");
       capitals.set("Ukraine", "Kyiv");
       capitals.set("United Arab Emirates", "Abu Dhabi");
       capitals.set("United Kingdom", "London");
       capitals.set("United States of America", "Washington, D.C.");
       capitals.set("Uruguay (Oriental Republic of Uruguay)", "Montevideo");
       capitals.set("Uzbekistan", "Tashkent"),

       capitals.set("Vanuatu (Republic of Vanuatu)", "Port Vila");
       capitals.set("Venezuela", "Caracas");
       capitals.set("Vietnam", "Hanoi");

       capitals.set("Yemen (Republic of Yemen)", "Sana'a");

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
