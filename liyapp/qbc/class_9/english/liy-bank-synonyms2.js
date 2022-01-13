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

class C9Synonyms2 extends QuestionBank {

   constructor() {
       super();
       this.mLastUpdated = `13-Jan-2022`;

       let T = new Map();
       T.set("Rival", "Competitor");
       T.set("Fragment", "Scrap");
       T.set("Peril", "Hazard");
       T.set("Magnificence", "Splendor");
       T.set("Emancipate", "Liberate");
       T.set("Propensity", "Bias");
       T.set("Heinous", "Vicious");
       T.set("Impediment", "Deterrent");
       T.set("Insolent", "Abusive");
       T.set("Reverence", "Esteem");
       T.set("Spurious", "Artificial");
       T.set("Cajole", "Entice");
       T.set("Ephemeral", "Transitory");
       T.set("Impertinent", "Brash");
       T.set("Obsolete", "Archaic");
       T.set("Pensive", "Contemplative");
       T.set("Reiterate", "Echo");
       T.set("Satiate", "Satisfy");
       T.set("Tranquil", "Calm");
       T.set("Savage", "Barbaric");
       T.set("Exacerbate", "Worsen");
       T.set("Garrulous", "Glib");
       T.set("Morbid", "Gruesome");
       T.set("Obtrude", "Impose");
       T.set("Flounder", "Stumble");
       T.set("Retrieve", "Salvage");
       T.set("Remission", "Forgiveness");
       T.set("Ostentatious", "Extravagant");
       T.set("Meagre", "Inadequate");
       T.set("Subservient", "Docile");
       T.set("Capacious", "Abundant");
       T.set("Defiance", "Rebellion");
       T.set("Commensurate", "Proportionate");
       T.set("Exorbitant", "Outrageous");
       T.set("Requite", "Reciprocate");
       T.set("Feign", "Pretend");
       T.set("Abnigation", "Self-denial");
       T.set("Vilify", "Denigrate");
       T.set("Massacre", "Slaughter");
       T.set("Extrigate", "Free");
       T.set("Assimilate", "Absorb");
       T.set("Taciturn", "Reserve");
       T.set("Pilfer", "Steal");
       T.set("Nepotism", "Favoritism");
       T.set("Rancour", "Enmity");
       T.set("Indigenous", "Native");
       T.set("Ennui", "Weariness");
       T.set("Expostulate", "Protest");
       T.set("Judicious", "Sagacious");
       T.set("Arduous", "Rigorous");
       T.set("Annihilate", "Destroy");
       T.set("Sanguine", "Optimistic");
       T.set("Corroborate", "Confirm");
       T.set("Pejorative", "Disapproval");

       this.mQuestionArray = [];
       this.mChoices = Array.from(T.values());

       for (const [word, meaning] of T) {
           this.mQuestionArray.push(new QuestionMCQ(
               `What is the synonym of ${word.toUpperCase()}?`, this.getChoices(meaning), 0));
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
           } else {
               result.push(x);
           }
       }

       return result;
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

