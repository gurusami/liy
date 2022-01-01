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

class QuestionBank {
   constructor() {
       if (this.constructor == QuestionBank) {
           throw new Error("Abstract classes can't be instantiated.");
       }
       this.mQuestionArray;
       this.mCorrectArray;
       this.mCurrentIndex = 0;
   }

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
       throw new Error("Not yet implemented.");
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

/*
   verifyChoice(userChoice) {
       var curq = this.getCurrentQuestion();
       var isCorrect = curq.verify(userChoice);

       if (isCorrect) {
           this.mCorrectArray[this.mCurrentIndex] = true;
       } else {
           this.mCorrectArray[this.mCurrentIndex] = false;
       }
       return (isCorrect);
   }
*/

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

   getRemainingPercentage() {
       // window.alert(`Remaining: ${this.getRemaining()}`);
       // window.alert(`mCorrectArray.length: ${this.mCorrectArray.length}`);
       return ((this.getRemaining() * 100) / this.getTotal());
   }

   getCompleted() {
       return (this.getTotal() - this.getRemaining());
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
       this.mQuestionBankArray = new Array();
   }

   getQBDetails(idx) {
       return this.mQuestionBankArray[idx];
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

   // Add a question bank to the collection
   addQB(qBankDetails) {
       this.mQuestionBankArray.push(qBankDetails);
   }

   createBankObj(bankName) {
       let bankObj = null;

       if (bankName == "Class9GeoWildLife") {
           bankObj = new LiyClass9GeoWildLifeQB();
       } else if (bankName == "Class9EconomicsPoverty") {
           bankObj = new LiyClass9EconomicsPovertyQB();
       } else if (bankName == "matseries") {
           bankObj = new LiySeriesQB();
       } else if (bankName == "Class9FrenchRevolution") {
           bankObj = new LiyClass9FrenchRevolutionQB();
       }

       if (bankObj instanceof QuestionBank) {
           let bankDetails = this.findQBDetails(bankName);
           bankDetails.mBankObj = bankObj;
       }
   }
}

