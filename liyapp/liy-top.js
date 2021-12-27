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

/* Global Variables. */
let gBankName = "sample";
let gLiyUiStopWatch;
let gLiyUiArray; // For each question type, there is one entry in this array.
let gLiyUiMenu;
let gLiyQBC; // Question Bank Collection (QBC).
let gLiyUiProgressBar;
let gLiyUiVerify;

function liyInitGlobals() {
   gLiyUiArray = new LiyUiArray();
   gLiyUiArray.addUiDetails(new LiyUiDetails("mcq", new LiyMcqUi()));
   gLiyUiArray.addUiDetails(new LiyUiDetails("fai", new LiyUiFai()));
   gLiyUiArray.createElements();

   gLiyQBC = new QuestionBankCollection();
   liyLoadQBC();

   // window.alert(`gLiyQBC.length = ${gLiyQBC.length}`);
   gLiyUiStopWatch = new LiyStopWatchUi();
   gLiyUiStopWatch.createUi();

   gLiyUiMenu = new LiyUiMenu();
   gLiyUiMenu.createUi();
   gLiyUiMenu.initMenu();

   gLiyUiProgressBar = new LiyUiProgressBar();
   gLiyUiProgressBar.createUi();

   gLiyUiVerify = new LiyUiVerify();
   gLiyUiVerify.createUi();
}

/******************************************************************************/

function liyLoadQBC() {
   gLiyQBC.addQB(new QBDetails("sample",
                               "Sample Questions For Development Purposes",
                               new LiySampleSet()));

   gLiyQBC.addQB(new QBDetails("multiply100x100",
                               "Multiply Integers Upto 100 x 100",
                               new LiyMultiplyQB(2, 100, 2, 100)));

   gLiyQBC.addQB(new QBDetails("multiplyNxNN",
                               "Multiply 1-digit with 2-digit Integers",
                               new LiyMultiplyQB(2, 10, 10, 100)));

   gLiyQBC.addQB(new QBDetails("multiplyNxNNN",
                               "Multiply 1-digit with 3-digit Integers",
                               new LiyMultiplyQB(2, 10, 100, 1000)));

   gLiyQBC.addQB(new QBDetails("multiplyNxNNNN",
                               "Multiply 1-digit with 4-digit Integers",
                               new LiyMultiplyQB(2, 10, 1000, 10000)));

   gLiyQBC.addQB(new QBDetails("capitals",
                               "Capitals of Indian States",
                               new CapitalsOfIndianStates()));

   gLiyQBC.addQB(new QBDetails("c6geoagri",
                               "Class 6: Geography: Chapter 4: Agriculture",
                               new Class6GeoAgri()));

   gLiyQBC.addQB(new QBDetails("c9mathtrig",
                               "Class 9: Mathematics: Trigonometry",
                               new LiyClass9TrigonometryQB()));
}
 
/******************************************************************************/

function liyUiRemoveMenu() {
   let divPage = document.getElementById("div-page");
   divPage.removeChild(gLiyUiMenu.mHtmlElem);
}

function liyUiAddStopWatch() {
   let divPage = document.getElementById("div-page");
   divPage.appendChild(gLiyUiStopWatch.mHtmlElem);
}

function liyUiAddQuestion() {
   let divPage = document.getElementById("div-page");
   divPage.appendChild(gLiyUiArray.getUiElem(0));
}

function liyUiAddProgressBar() {
   let divPage = document.getElementById("div-page");
   divPage.appendChild(gLiyUiProgressBar.mHtmlElem);
}

function liyUiReplaceQuestion(newDivQues) {
   let divPage = document.getElementById("div-page");
   let oldDivQues = document.getElementById("div-question");
   divPage.replaceChild(newDivQues, oldDivQues);
}

function liyUiAddVerify() {
   let divPage = document.getElementById("div-page");
   divPage.appendChild(gLiyUiVerify.mHtmlElem);
}

function liyTakePractice() {
   liyUiRemoveMenu();
   liyUiAddProgressBar();
   liyUiAddStopWatch();
   liyUiAddQuestion();
   liyUiAddVerify();

   // Given the name get the question bank.
   let qBankObj = gLiyQBC.getQuestionBank(gBankName);

   // Initialize question bank.
   qBankObj.init();

   // Choose a question.
   liyNextQuestion();

   window.setInterval(function() { gLiyUiStopWatch.update(); }, 1000);
}

function liyNextQuestion() {
   // Given the name get the question bank.
   let qBankObj = gLiyQBC.getQuestionBank(gBankName);

   if (qBankObj.nextQuestion()) {
       let questionObj = qBankObj.getCurrentQuestion();
       let qType = questionObj.getQuestionType();
       let uiDetails = gLiyUiArray.getUiDetails(questionObj.getQuestionType());
       let uiObj = uiDetails.mUiObj;
       let uiQuestionDiv = uiDetails.getUiElem();
       liyUiReplaceQuestion(uiQuestionDiv);
       uiObj.init(qBankObj);
       uiObj.showQuestion();
       let nDone = qBankObj.getCompleted();
       let nRemain = qBankObj.getRemaining();
       gLiyUiProgressBar.update(nDone, nRemain);
       gLiyUiVerify.update();
   } else {
       liyDisplayFinish();
   }
}

function liyShowMenu() {
   let divPage = document.getElementById("div-page");
   while (divPage.lastChild) {
       divPage.removeChild(divPage.lastChild);
   }

   divPage.appendChild(gLiyUiMenu.mHtmlElem);
}

function liyDisplayFinish() {
   window.clearInterval(1000);
   let divPage = document.getElementById("div-page");

   while (divPage.lastChild) {
       divPage.removeChild(divPage.lastChild);
   }

   let spanFinish = document.createElement("span");
   spanFinish.innerHTML = "Success! You have completed this practice!!";

   let spanTimeTaken = document.createElement("span");
   spanTimeTaken.innerHTML = `(Time Taken: ${gLiyUiStopWatch.getValue()})`;

   divPage.appendChild(spanFinish);
   divPage.appendChild(spanTimeTaken);
}

/* The Main Entry Point. */
function liyStart() {
   liyInitGlobals();
   liyShowMenu();
}
