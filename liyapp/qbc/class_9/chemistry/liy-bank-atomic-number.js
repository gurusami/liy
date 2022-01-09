/*******************************************************************************

Learn it Yourself (LiY) - Software to Promote Self Study

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

class C9AtomicNumber extends QuestionBank {

   constructor() {
       super();

       const mElem = ["Hydrogen (H)", "Helium (He)", "Lithium (Li)",
           "Beryllium (Be)", "Boron (B)", "Carbon (C)", "Nitrogen (N)", 
           "Oxygen (O)", "Flourine (F)", "Neon (Ne)", "Sodium (Na)",
           "Magnesium (Mg)", "Aluminium (Al)", "Silicon (Si)", "Phosphorus (P)",
           "Sulphur (S)", "Chlorine (Cl)", "Argon (Ar)", "Potassium (K)",
           "Calcium (Ca)", "Scandium (Sc)", "Titanium (Ti)", "Vanadium (V)",
           "Chromium (Cr)", "Manganese (Mn)", "Iron (Fe)", "Cobalt (Co)",
           "Nickel (Ni)", "Copper (Cu)", "Zinc (Zn)"];

       this.mLastUpdated = `09-Jan-2022`;
       this.mQuestionArray = [];

       for (var i = 0; i < mElem.length; ++i) {
           let fib = new QuestionFIB(`What is the atomic number of the
               element - ${mElem[i]}`, i + 1);
           this.mQuestionArray.push(fib);
       }
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

