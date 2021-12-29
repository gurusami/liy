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

/* Not Related to Question Type. */
class LiyUiVerify extends LiyUi {
   constructor() {
       super();
   }

   createUi() {
       let topDivElem = document.createElement("div");
       topDivElem.setAttribute("id", "div-verify");

       let inputElemVerify = document.createElement("input");
       inputElemVerify.setAttribute("id", "btn_verify");
       inputElemVerify.setAttribute("type", "button");
       inputElemVerify.setAttribute("value", "Verify");
       inputElemVerify.addEventListener("click", liyVerifyAnswer);

       let inputElemNext = document.createElement("input");
       inputElemNext.setAttribute("id", "btn_next");
       inputElemNext.setAttribute("type", "button");
       inputElemNext.setAttribute("value", "Next");
       inputElemNext.addEventListener("click", liyNextQuestion);

       topDivElem.appendChild(inputElemVerify);
       topDivElem.appendChild(inputElemNext);
       this.mHtmlElem = topDivElem;
       return topDivElem;
   }

   update() {
       let verifyBtn = document.getElementById("btn_verify");
       verifyBtn.disabled = false;
   }
}

function liyVerifyAnswer(e) {
   let qBankObj = gLiyQBC.getQuestionBank(gBankName);
   let questionObj = qBankObj.getCurrentQuestion();
   let qType = questionObj.getQuestionType();
   let uiDetails = gLiyUiArray.getUiDetails(questionObj.getQuestionType());
   let uiObj = uiDetails.mUiObj;
   let userAnswer = uiObj.getUserAnswer();
   if (questionObj.verify(userAnswer)) {
       uiObj.respondCorrect(userAnswer);
       qBankObj.markCorrect();
       gLiyStatistics.incrCorrect();
   } else {
       uiObj.respondWrong(userAnswer);
       qBankObj.markWrong();
       gLiyStatistics.incrWrong();
   }
   e.target.disabled = true;
}

