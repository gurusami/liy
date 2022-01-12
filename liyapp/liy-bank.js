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

class QuestionBank {
   constructor() {
       if (this.constructor == QuestionBank) {
           throw new Error("Abstract classes can't be instantiated.");
       }
       this.mLastUpdated = `07-Jan-2022`;
       this.mQuestionArray = [];
       this.mCorrectArray = [];
       this.mCurrentIndex = 0;
   }

   /** Initialize the question bank. NOTE: Calling this multiple times should
   not be a problem for the question bank. */
   init() {
       this.initQuestionArray();
       this.shuffleQuestions();
       this.initCorrect();
   }

   getCurrentQuestion() {
       return this.mQuestionArray[this.mCurrentIndex];
   }

   initCorrect() {
       this.mCorrectArray = new Array(this.mQuestionArray.length);
       for (var i = 0; i < this.mCorrectArray.length; ++i) {
           this.mCorrectArray[i] = false;
       }
   }

   /* This needs to be implemented by derived classes. */
   initQuestionArray() {
       for (var i = 0; i < this.mQuestionArray.length; ++i) {
           let qst = this.mQuestionArray[i];
           if (qst instanceof QuestionMCQ) {
               this.mQuestionArray[i].shuffleChoices();
           }
       }
   }

   shuffleQuestions() {
       for (var i = this.mQuestionArray.length - 1; i > 0; --i) {
           let j = Math.floor(Math.random() * i);
           let k = this.mQuestionArray[i];
           this.mQuestionArray[i] = this.mQuestionArray[j];
           this.mQuestionArray[j] = k;
       }
   }

   nextQuestion() {
       this.mCurrentIndex++;

       if (this.mCurrentIndex == this.mQuestionArray.length) {
           this.mCurrentIndex = 0;
       }

       if (this.getRemaining() == 0) {
           this.mCurrentIndex = this.mQuestionArray.length;
           return false;
       }

       while (this.mCorrectArray[this.mCurrentIndex] == true) {
           this.mCurrentIndex++;
           if (this.mCurrentIndex == this.mQuestionArray.length) {
               this.mCurrentIndex = 0;
           }
       }
       return true;
   }

   markCorrect() {
       this.mCorrectArray[this.mCurrentIndex] = true;
   }

   markWrong() {
       this.mCorrectArray[this.mCurrentIndex] = false;
   }

   getRemaining() {
      var r = 0;
      for (var i = 0; i < this.mCorrectArray.length; ++i) {
         if (this.mCorrectArray[i] == false) {
            r++;
         }
      }
      return r;
   }

   getTotal() {
       return this.mCorrectArray.length;
   }

   getCount() {
       return this.mQuestionArray.length;
   }

   getRemainingPercentage() {
       return ((this.getRemaining() * 100) / this.getTotal());
   }

   getCompleted() {
       return (this.getTotal() - this.getRemaining());
   }

   /** Provide random questions to the caller.
   @param[in,out]  outArray  an output array. The randomly selected questions
                             are appended to this array.
   @param[in]  count  the number of questions requested by the caller. */
   provideRandomQuestions(outArray, count) {
       if (count < this.mQuestionArray.length) {
           let dup = new Array();
           for (var i = 0; i < count; ++i) {
               let j = LiY.ryRandom(0, this.mQuestionArray.length, dup);
               outArray.push(this.mQuestionArray[j]);
           }
       } else {
           for (var i = 0; i < this.mQuestionArray.length; ++i) {
               outArray.push(this.mQuestionArray[i]);
           }
       }
   }
}

class QBDetails {
   constructor(name, title, obj) {
       this.mName = name;
       this.mTitle = title;
       this.mBankObj = obj;
   }
}

class QuestionBankCollection {
   constructor() {

       /***********************************************************************/
       /** Class 9: English */
       /********************/
       const c9Synonyms = new QBDetails("C9Synonyms",
           `Class 9: English: Vocabulary Building (Synonyms)`,
           new C9Synonyms())

       this.mQuestionBankArray = [
           /*******************************************************************/
           /* General Knowledge */
           /********************/

           new QBDetails("sample", "Sample Questions For Development Purposes",
               new LiySampleSet()),

           new QBDetails("multiply100x100", "Basic Mathematics: Multiply Integers Upto 100 x 100",
               new LiyMultiplyQB(2, 100, 2, 100)),

           new QBDetails("multiplyNxNN", `Basic Mathematics: Multiply 1-digit with 2-digit
               Integers`, new LiyMultiplyQB(2, 10, 10, 100)),

           new QBDetails("multiplyNxNNN", `Basic Mathematics: Multiply 1-digit with 3-digit
               Integers`, new LiyMultiplyQB(2, 10, 100, 1000)),

           new QBDetails("multiplyNxNNNN", `Basic Mathematics: Multiply 1-digit with 4-digit
               Integers`, new LiyMultiplyQB(2, 10, 1000, 10000)),

           new QBDetails("capitals", "General Knowledge: Capitals of Indian States",
               new CapitalsOfIndianStates()),

           new QBDetails("matclock", "MAT: Clock Problems",
               new LiyClockProblemQB()),

           new QBDetails("matseries", "MAT: Number Series", new LiySeriesQB()),

           /*******************************************************************/
           /* Chemistry */
           /********************/

           new QBDetails("ElementSymbols", "Chemistry: Symbols of Chemical Elements",
               new ElementSymbols()),

           new QBDetails("SymbolToName", "Chemistry: Given Symbol, Name the Chemical Element",
               new SymbolToName()),

           new QBDetails("CAtomicNumber", "Chemistry: Atomic Number of Chemical Elements",
               new CAtomicNumber()),

           new QBDetails("CMassNumber", "Chemistry: Mass Number of Chemical Elements",
               new CMassNumber()),

           // General Knowledge ^
           /*******************************************************************/
           /* Class 6 */
           /**********/

           new QBDetails("Class6MathsKnowingYourNumbers", `Class 6: Mathematics:
               Knowing Your Numbers`, new LiyClass6MathsKnowingYourNumbersQB()),

           new QBDetails("Class6AirAroundUs", `Class 6: Chemistry: Air Around
               Us`, new LiyClass6AirAroundUsQB()),

           new QBDetails("Class6Agriculture", `Class 6: Geography: Agriculture`,
               new Class6GeoAgri()),

           /*******************************************************************/
           /* Class 9 */
           /**********/

           /* Class 9: Social Science: History */
           new QBDetails("Class9History", `Class 9: Social Science: History`,
               new LiyPractice(["Class9FrenchRevolution", "Class9Socialism",
                   "Class9Nazism", "Class9Colonialism", "Class9Pastoralist"])),

           new QBDetails("Class9FrenchRevolution", `Class 9: Social Science:
               History: French Revolution`, new LiyClass9FrenchRevolutionQB()),

           new QBDetails("Class9Socialism", `Class 9: Social Science: History:
               Socialism in Europe and the Russian Revolution`,
               new LiyClass9SocialismQB()),

           new QBDetails("Class9Nazism", `Class 9: Social Science: History:
               Nazism and the Rise of Hitler`, new LiyClass9NazismQB()),

           new QBDetails("Class9Colonialism", `Class 9: Social Science: History:
               Forest Society and Colonialism`, new LiyClass9ColonialismQB()),

           new QBDetails("Class9Pastoralist", `Class 9: Social Science: History:
               Pastoralists in the Modern World`, new LiyClass9PastoralistQB()),

           new QBDetails("C9Democracy",
               `Class 9: Social Science: Political Science: What is Democracy? Why Democracy?`,
               new C9Democracy()),
           new QBDetails("C9Constitution",
               `Class 9: Social Science: Political Science: Constitutional Design`,
               new C9Constitution()),
           new QBDetails("C9Election",
               `Class 9: Social Science: Political Science: Electoral Politics`,
               new C9Election()),
           new QBDetails("C9Institutions",
               `Class 9: Social Science: Political Science: Working of Institutions`,
               new C9Institutions()),
           new QBDetails("C9Rights",
               `Class 9: Social Science: Political Science: Democratic Rights`,
               new C9Rights()),

           new QBDetails("C9Palambur", `Class 9: Social Science:
               Economics: The Story of Village Palambur`, new C9Palambur()),

           new QBDetails("C9People", `Class 9: Social Science: Economics:
               People as Resource`, new C9People()),

           new QBDetails("Class9EconomicsPoverty", `Class 9: Social Science:
               Economics: Poverty as a Challenge`,
               new LiyClass9EconomicsPovertyQB()),

           new QBDetails("C9FoodSecurity", `Class 9: Social Science: Economics:
               Food Security in India`, new C9FoodSecurity()),

           new QBDetails("C9Location", `Class 9: Social Science: Geography:
               India - Size and Location`, new C9Location()),

           new QBDetails("C9Physical", `Class 9: Social Science:
               Geography: Physical Features of India`, new C9Physical()),

           new QBDetails("C9Drainage", `Class 9: Social Science:
               Geography: Drainage`, new C9Drainage()),

           new QBDetails("C9Climate", `Class 9: Social Science:
               Geography: Climate`, new C9Climate()),

           new QBDetails("c9geoveg", `Class 9: Social Science: Geography:
               Natural Vegetation`, new LiyClass9GeoVegetationQB()),

           new QBDetails("Class9GeoWildLife", `Class 9: Social Science:
               Geography: Wildlife`, new LiyClass9GeoWildLifeQB()),

           new QBDetails("Class9Science", `Class 9: Science: Chemistry: Matter
               in our Surroundings`, null),

           new QBDetails("Class9Science", `Class 9: Science: Chemistry: Is
               Matter around us Pure?`, null),

           new QBDetails("Class9Science", `Class 9: Science: Chemistry: Atoms
               and Molecules`, null),

           new QBDetails("C9AtomicStructure", `Class 9: Science: Chemistry:
               Structure of the atom`, new C9AtomicStructure()),

           new QBDetails("C9AtomicNumber", `Class 9: Science: Chemistry:
               Atomic Number From 1 to 30`, new C9AtomicNumber()),

           new QBDetails("Class9Science", `Class 9: Science: Biology: The 
               Fundamental Unit of Life`, null),

           new QBDetails("Class9Science", `Class 9: Science: Biology: Tissues`,
               null),

           new QBDetails("Class9Science", `Class 9: Science: Biology: Diversity
               in living organisms`, null),

           new QBDetails("Class9BiologyWhyIll", `Class 9: Science: Biology: Why
               do we fall ill?`, new LiyClass9BiologyWhyIllQB()),

           new QBDetails("Class9Science", `Class 9: Science: Physics: Motion`,
               null),

           new QBDetails("Class9Science", `Class 9: Science: Physics: Force and
               Laws of Motion`, null),

           new QBDetails("Class9Science", `Class 9: Science: Physics:
               Gravitation`, null),

           new QBDetails("Class9Science", `Class 9: Science: Physics: Work and
               Energy`, null),

           new QBDetails("Class9Science", `Class 9: Science: Physics: Sound`,
               null),

           new QBDetails("Class9Science", `Class 9: Science: Physics: Natural
               Resources`, null),

           new QBDetails("Class9Science", `Class 9: Science: Physics:
               Improvement in Food Resources`, null),

           new QBDetails("c9mathtrig", `Class 9: Mathematics: Trigonometry`, new LiyClass9TrigonometryQB()),
           new QBDetails("Class9Maths", `Class 9: Mathematics: Number Systems`, null),
           new QBDetails("C9Polynomials", `Class 9: Mathematics: Polynomials`,
               new C9Polynomials()),
/*
           new QBDetails("Class9Maths", `Class 9: Mathematics: Coordinate Geometry`, null),
           new QBDetails("Class9Maths", `Class 9: Mathematics: Linear Equations in Two Variables`, null),
           new QBDetails("Class9Maths", `Class 9: Mathematics: Introduction to Euclid's Geometry`, null),
           new QBDetails("Class9Maths", `Class 9: Mathematics: Lines and Angles`, null),
           new QBDetails("Class9Maths", `Class 9: Mathematics: Triangles`, null),
           new QBDetails("Class9Maths", `Class 9: Mathematics: Quadrilaterals`, null),
           new QBDetails("Class9Maths", `Class 9: Mathematics: Areas of Parallelograms and Triangles`, null),
           new QBDetails("Class9Maths", `Class 9: Mathematics: Circles`, null),
           new QBDetails("Class9Maths", `Class 9: Mathematics: Constructions`, null),
           new QBDetails("Class9Maths", `Class 9: Mathematics: Heron's Formula`, null),
           new QBDetails("Class9Maths", `Class 9: Mathematics: Surface Areas and Volumns`, null),
           new QBDetails("Class9Maths", `Class 9: Mathematics: Statistics`, null),
           new QBDetails("Class9Maths", `Class 9: Mathematics: Probability`, null),
*/

           /** Class 9: English */
           c9Synonyms

           // The End.
           /*******************************************************************/
       ];
   }

   getQBC() {
       return this.mQuestionBankArray;
   }

   getQBDetails(idx) {
       return this.mQuestionBankArray[idx];
   }

   /** Initialize the question bank collection by initialization each of the
   question bank. For auto generated questions (Refer to LiyPractice), this is
   needed to populate the questions and get proper question count. */
   init() {
       for (var i = 0; i < this.mQuestionBankArray.length; ++i) {
           if (this.mQuestionBankArray[i].mBankObj == null) {
           } else {
               this.mQuestionBankArray[i].mBankObj.init();
           }
       }
   }

   getQuestionBank(qBankName) {
       for (var i = 0; i < this.mQuestionBankArray.length; ++i) {
           if (this.mQuestionBankArray[i].mName == qBankName) {
               return this.mQuestionBankArray[i].mBankObj;
           }
       }
       return null;
   }

   findQBDetails(qBankName) {
       for (var i = 0; i < this.mQuestionBankArray.length; ++i) {
           if (this.mQuestionBankArray[i].mName == qBankName) {
               return this.mQuestionBankArray[i];
           }
       }
       return null;
   }

   getCount() {
       return this.mQuestionBankArray.length;
   }

   getTotalQuestions() {
       let total = 0;
       for (var i = 0; i < this.mQuestionBankArray.length; ++i) {
           let bankObj = this.mQuestionBankArray[i].mBankObj;
           if (bankObj == null) {
           } else {
               total += this.mQuestionBankArray[i].mBankObj.getCount();
           }
       }
       return total;
   }
}

