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

class C9Synonyms extends QuestionBank {

   constructor() {
       super();
       this.mLastUpdated = `12-Jan-2022`;

       let synonyms = new Map();
       synonyms.set("Plush", "Luxurious");
       synonyms.set("Sagacity", "Wisdom");
       synonyms.set("Coy", "Shy");
       synonyms.set("Ecstasy", "Rapture");
       synonyms.set("Acrimonious", "Caustic");
       synonyms.set("Dogmatic", "Opinionated");
       synonyms.set("Gullible", "Credulous");
       synonyms.set("Repudiate", "Reject");
       synonyms.set("Poignant", "Pitiful");
       synonyms.set("Naive", "Childlike");
       synonyms.set("Malleable", "Supple");
       synonyms.set("Redundant", "Excessive");
       synonyms.set("Stringent", "Rigid");
       synonyms.set("Inquisitive", "Prying");
       synonyms.set("Lucid", "Clear");
       synonyms.set("Odious", "Repulsive");
       synonyms.set("Morose", "Sulky");
       synonyms.set("Precarious", "Insecure");
       synonyms.set("Conceit", "Vanity");
       synonyms.set("Nimble", "Swift");
       synonyms.set("Tenacious", "Persistent");
       synonyms.set("Boisterous", "Spirited");
       synonyms.set("Prudence", "Wisdom");
       synonyms.set("Obstinate", "Steadfast");
       synonyms.set("Vivacious", "Exuberant");
       synonyms.set("Derogatory", "Offensive");
       synonyms.set("Credulous", "Unwary");
       synonyms.set("Insipid", "Banal");
       synonyms.set("Coarse", "Boorish");
       synonyms.set("Succinct", "Brief");
       synonyms.set("Reluctant", "Averse");
       synonyms.set("Acumen", "Brilliance");
       synonyms.set("Podgy", "Stout");
       synonyms.set("Astute", "Idiotic");
       synonyms.set("Onerous", "Strenuous");
       synonyms.set("Erudite", "Scholarly");
       synonyms.set("Dauntless", "Courageous");
       synonyms.set("Malicious", "Spiteful");
       synonyms.set("Ruthless", "Callous");
       synonyms.set("Dilapidated", "Decaying");
       synonyms.set("Squander", "Lavish");
       synonyms.set("Perspicuity", "Accuracy");
       synonyms.set("Crestfallen", "Consoled");
       synonyms.set("Suavity", "Urbanity");
       synonyms.set("Facile", "Superficial");
       synonyms.set("Prerogative", "Privilege");
       synonyms.set("Promulgate", "Proclaim");
       synonyms.set("Vehement", "Forceful");
       synonyms.set("Tangible", "Actual");
       synonyms.set("Sycophant", "Flatterer");

       this.mQuestionArray = [];
       this.mChoices = Array.from(synonyms.values());

       for (const [word, meaning] of synonyms) {
           this.mQuestionArray.push(new QuestionMCQ(
               `What is the synonym of ${word}?`, this.getChoices(meaning), 0));
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

