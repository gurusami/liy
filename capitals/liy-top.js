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

function liyMainRun(bName) {
   gStopWatchUi = new LiyStopWatchUi();
   gStopWatchDiv = gStopWatchUi.createUi();
   gLiyUiArray.createElements();

   // Given the name get the question bank.
   let qBankObj = gQuestionBankCollection.getQuestionBank(bName);

   // Initialize question bank.
   qBankObj.init();

   // Choose a question.
   liyNextQuestion();

   window.setInterval(function() { gStopWatchUi.update(); }, 1000);
}

function liyNextQuestion() {
   // Given the name get the question bank.
   let qBankObj = gQuestionBankCollection.getQuestionBank(gBankName);

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

function liyDisplayFinish() {
   window.clearInterval(1000);
   let divPage = document.getElementById("div-page");

   while (divPage.lastChild) {
       divPage.removeChild(divPage.lastChild);
   }
   let divProgress = document.getElementById("div_progress");
   divProgress.parentNode.removeChild(divProgress);

   let spanFinish = document.createElement("span");
   spanFinish.innerHTML = "Success! You have completed this practice!!";

   let spanTimeTaken = document.createElement("span");
   spanTimeTaken.innerHTML = `(Time Taken: ${gStopWatchUi.getValue()})`;

   divPage.appendChild(spanFinish);
   divPage.appendChild(spanTimeTaken);
}

