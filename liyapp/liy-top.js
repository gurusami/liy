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

function liyInitGlobals() {
   gLiyUiArray = new LiyUiArray();
   gLiyUiArray.addUiDetails(new LiyUiDetails("mcq", new LiyMcqUi()));
   gLiyUiArray.createElements();

   gLiyQBC = new QuestionBankCollection();

   gLiyQBC.addQB(new QBDetails("sample",
                               "Sample Questions For Development Purposes",
                               new LiySampleSet()));

   gLiyQBC.addQB(new QBDetails("capitals",
                               "Capitals of Indian States",
                               new CapitalsOfIndianStates()));

   // window.alert(`gLiyQBC.length = ${gLiyQBC.length}`);
   gLiyUiStopWatch = new LiyStopWatchUi();
   gLiyUiStopWatch.createUi();

   gLiyUiMenu = new LiyUiMenu();
   gLiyUiMenu.createUi();
   gLiyUiMenu.initMenu();

   gLiyUiProgressBar = new LiyUiProgressBar();
   gLiyUiProgressBar.createUi();
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

function liyTakePractice() {
   liyUiRemoveMenu();
   liyUiAddProgressBar();
   liyUiAddStopWatch();
   liyUiAddQuestion();

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
       uiObj.init(qBankObj);
       uiObj.showQuestion();
       uiObj.updateProgress();
   } else {
       liyDisplayFinish();
   }
}

function liyShowMenu() {
   let divPage = document.getElementById("div-page");
   while (divPage.lastChild) {
       divPage.removeChild(divPage.lastChild);
   }
   // window.alert(`${gLiyUiMenu.mHtmlElem}`);

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
