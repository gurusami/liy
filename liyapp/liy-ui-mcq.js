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
class LiyMcqUi extends LiyUiQues {
   constructor() {
       super();
       this.mStopWatch;
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
   }

   respondCorrect(userChoice) {
       var liElemId = `li_choice_${userChoice}`;
       var liElem = document.getElementById(liElemId);
       liElem.style.background = "darkseagreen";
   }

   respondWrong(userChoice) {
       var liElemId = `li_choice_${userChoice}`;
       var liElem = document.getElementById(liElemId);
       liElem.style.background = "red";
   }

   getUserAnswer() {
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

   createUi() {
       let topDivElem = document.createElement("div");
       topDivElem.setAttribute("id", "div-question");

       let pQuestElem = document.createElement("p");
       pQuestElem.setAttribute("id", "question");

       let ulChoiceElem = document.createElement("ul");
       ulChoiceElem.setAttribute("id", "ul_choice");
       ulChoiceElem.style.listStyleType = "none";

       topDivElem.appendChild(pQuestElem);
       topDivElem.appendChild(ulChoiceElem);

       this.mHtmlElem = topDivElem;
       return topDivElem;
   }
}

