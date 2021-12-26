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

// This UI is to be used when the question type is "mcq".
class LiyMcqUi extends LiyUi {
   constructor() {
       super();
       this.mQuestionBank;
       this.mStopWatch;
   }

   init(questionBank) {
       this.mQuestionBank = questionBank;
   }

   showQuestion() {
       var qb = this.mQuestionBank;
       var mcq = qb.getCurrentQuestion();
       var choices = mcq.mChoices;

       let qstElem = document.getElementById("question");
       qstElem.innerHTML = mcq.mQuestion;
       let ulChoiceElem = document.getElementById("ul_choice");

       while (ulChoiceElem.lastChild) {
           ulChoiceElem.removeChild(ulChoiceElem.lastChild);
       }

       for (var i = 0; i < choices.length; ++i) {
           let liChoice = document.createElement("li");
           liChoice.setAttribute("id", `li_choice_${i}`);
           liChoice.style.background = "none";

           let liInput = document.createElement("input");
           liInput.setAttribute("type", "radio");
           liInput.setAttribute("name", "choice");
           liInput.setAttribute("id", `choice_${i}`);
           if (mcq.mAnswer == i) {
               liInput.setAttribute("value", true);
           } else {
               liInput.setAttribute("value", false);
           }
           liChoice.appendChild(liInput);
           ulChoiceElem.appendChild(liChoice);

           let spanElem = document.createElement("span");
           spanElem.innerHTML = choices[i];
           liChoice.appendChild(spanElem);
       }
       this.updateProgress();
   }

   getSelectedChoice() {
       let choices = document.getElementsByName('choice');
       var j = choices.length;
       for (var i = 0; i < choices.length; ++i) {
           var liElemId = `li_choice_${i}`;
           var liElem = document.getElementById(liElemId);
           liElem.style.background = "none";
           if (choices[i].checked) {
               j = i;
           }
       }
       return j;
   }

   verifyChoice() {
       let userChoice = this.getSelectedChoice();
       var qb = this.mQuestionBank;
       var mcq = qb.getCurrentQuestion();
       var choices = mcq.mChoices;
       if (userChoice == choices.length) {
           return;
       }

       let isCorrect = qb.verifyChoice(userChoice);

       var liElemId = `li_choice_${userChoice}`;
       var liElem = document.getElementById(liElemId);

       if (isCorrect == true) {
           liElem.style.background = "green";
       } else {
           liElem.style.background = "red";
       }
   }

   updateProgress() {
       let p_2 = this.mQuestionBank.getRemainingPercentage();
       let p_1 = 100 - p_2;
       let progress_1 = document.getElementById("progress_1");
       let progress_2 = document.getElementById("progress_2");
       progress_1.style.width = `${p_1}%`;
       progress_1.innerHTML = this.mQuestionBank.getCompleted();
       progress_2.style.width = `${p_2}%`;
       progress_2.innerHTML = this.mQuestionBank.getRemaining();
   }

/*
   nextQuestion() {
       var isNextExists = this.mQuestionBank.nextQuestion();

       if (isNextExists == true) {
           this.showQuestion();
       } else {
           this.displayFinish();
       }
   }
*/

/*
   displayFinish() {
       window.clearInterval(1000);
       let divMcq = document.getElementById("mcq");
       let divProgress = document.getElementById("div_progress");
       divMcq.parentNode.removeChild(divMcq);
       divProgress.parentNode.removeChild(divProgress);

       let spanFinish = document.getElementById("finish");
       spanFinish.innerHTML = "Success! You have completed this practice!!";

       let spanTimeTaken = document.getElementById("time_taken");
       spanTimeTaken.innerHTML = `(Time Taken: ${this.mStopWatch.getValue()})`;
   }
*/

   setStopWatch(stopWatch) {
       this.mStopWatch = stopWatch;
       window.setInterval(this.updateStopWatch, 1000);
   }

   updateStopWatch() {
       let stopWatch = document.getElementById("stop_watch");
       stopWatch.textContent = `Timer: ${gStopWatch.tick()}`;
   }

   createUi() {
       let topDivElem = document.createElement("div");
       topDivElem.setAttribute("id", "mcq");

       let pQuestElem = document.createElement("p");
       pQuestElem.setAttribute("id", "question");

       let ulChoiceElem = document.createElement("ul");
       ulChoiceElem.setAttribute("id", "ul_choice");
       ulChoiceElem.style.listStyleType = "none";

       let inputElemVerify = document.createElement("input");
       inputElemVerify.setAttribute("id", "btn_verify");
       inputElemVerify.setAttribute("type", "button");
       inputElemVerify.setAttribute("value", "Verify");
       inputElemVerify.addEventListener("click", verifyChoice);

       let inputElemNext = document.createElement("input");
       inputElemNext.setAttribute("id", "btn_next");
       inputElemNext.setAttribute("type", "button");
       inputElemNext.setAttribute("value", "Next");
       inputElemNext.addEventListener("click", liyNextQuestion);

       // let spanElem = document.createElement("span");
       // spanElem.setAttribute("id", "stop_watch");
       // spanElem.textContent = `Timer: 00:00`;
        
       // topDivElem.appendChild(spanElem);
       topDivElem.appendChild(pQuestElem);
       topDivElem.appendChild(ulChoiceElem);
       topDivElem.appendChild(inputElemVerify);
       topDivElem.appendChild(inputElemNext);

       let divPage = document.getElementById("div-page");
       divPage.appendChild(topDivElem);

       return topDivElem;
   }
}

gLiyUiArray.addUiDetails(new LiyUiDetails("mcq", new LiyMcqUi()));

function verifyChoice() {
   gLiyUiArray.getUiObj("mcq").verifyChoice();
}

/*
function nextQuestion() {
   gLiyUiArray.getUiObj("mcq").nextQuestion();
}
*/

