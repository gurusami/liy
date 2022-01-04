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
let gBankObj;
let gBankDetails;
let gLiyUiStopWatch;
let gLiyUiArray; // For each question type, there is one entry in this array.
let gLiyUiMenu;
let gLiyQBC; // Question Bank Collection (QBC).
let gLiyUiProgressBar;
let gLiyUiVerify;
let gLiyStatistics;

function liyInitGlobals() {
   gLiyUiArray = new LiyUiArray();
   gLiyUiArray.addUiDetails(new LiyUiDetails("mcq", new LiyMcqUi()));
   gLiyUiArray.addUiDetails(new LiyUiDetails("fib", new LiyUiFib()));
   gLiyUiArray.createElements();

   gLiyQBC = new QuestionBankCollection();

   gLiyUiStopWatch = new LiyStopWatchUi();
   gLiyUiStopWatch.createUi();

   gLiyUiMenu = new LiyUiMenu();
   gLiyUiMenu.createUi();
   gLiyUiMenu.initMenu();

   gLiyUiProgressBar = new LiyUiProgressBar();
   gLiyUiProgressBar.createUi();

   gLiyUiVerify = new LiyUiVerify();
   gLiyUiVerify.createUi();

   gLiyStatistics = new LiyStatistics();
   gLiyStatistics.setStartTime();
}

/******************************************************************************/

function liyUiRemoveMenu() {
   let divPage = document.getElementById("div-page");
   divPage.removeChild(gLiyUiMenu.mHtmlElem);
}

function liyAddTitle() {
   let h3 = document.createElement("h3");
   h3.innerHTML = gBankDetails.mTitle;
   h3.setAttribute("align", "center");
   h3.setAttribute("id", `h3-${gBankName}`);
   let divPage = document.getElementById("div-page");
   divPage.appendChild(h3);
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
   // Given the name get the question bank.
   let qBankDetails = gLiyQBC.findQBDetails(gBankName);
   let qBankObj = qBankDetails.mBankObj;
   gBankDetails = qBankDetails;

   liyUiRemoveMenu();
   liyUiAddProgressBar();
   liyUiAddStopWatch();
   liyAddTitle();
   liyUiAddQuestion();
   liyUiAddVerify();

   gLiyStatistics.getMap().set("Question Bank Name", gBankName);
   gLiyStatistics.getMap().set("Question Bank Title", qBankDetails.mTitle);
   gLiyStatistics.getMap().set("JavaScript Class", qBankObj.constructor.name);

   // Initialize question bank.
   qBankObj.init();

   gBankObj = qBankObj;

   gLiyStatistics.getMap().set("Total Questions", gBankObj.getTotal());

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
   gLiyStatistics.setTimeTaken(gLiyUiStopWatch.getValue());
   gLiyStatistics.setEndTime();

   let liyUiStats = new LiyUiStats();
   let htmlElem = liyUiStats.createUi();
   liyUiStats.display(gLiyStatistics);
   divPage.appendChild(htmlElem);
}

/* The Main Entry Point. */
function liyStart() {
   liyInitGlobals();
   liyShowMenu();
}
