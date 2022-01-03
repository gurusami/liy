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
// Question Type: Fill in Blanks (FIB) 
// This UI is to be used when the question type is "fib".

class LiyUiFib extends LiyUiQues {
   constructor() {
       super();
       this.mQuestElem;
   }

   createUi() {
       this.mQuestElem = document.createElement("p");
       this.mQuestElem.setAttribute("id", "question");
       this.mQuestElem.style.fontSize = "large";

       let inputElem = document.createElement("input");
       inputElem.setAttribute("id", "user_answer");
       inputElem.setAttribute("type", "text");
       inputElem.setAttribute("size", "80");
       inputElem.style.margin = "10px";
       inputElem.style.padding = "10px";
       inputElem.addEventListener('keypress', this.handleKeyPress);

       this.mHtmlElem.appendChild(this.mQuestElem);
       this.mHtmlElem.appendChild(inputElem);

       return this.mHtmlElem;
   }

   handleKeyPress(e) {
       if (e.keyCode == 13) {
           /* Enter key has been pressed. */
           liyVerifyAnswer(e);
       }
   }

   showQuestion() {
       var qb = this.mQuestionBank;
       var ques = qb.getCurrentQuestion();
       let qstElem = document.getElementById("question");
       qstElem.innerHTML = `<i>Question: </i> ${ques.mQuestion}`;
       qstElem.style.backgroundColor = "none";
       let userInput = document.getElementById("user_answer");
       userInput.value = "";
       this.clearBgColor();
       userInput.disabled = false;
       userInput.focus();
   }

   getUserAnswer() {
       let inElem = document.getElementById("user_answer");
       return inElem.value;
   }

   clearBgColor() {
       this.mQuestElem.style.backgroundColor = "white";
   }

   respondCorrect(obj) {
       this.mQuestElem.style.backgroundColor = "darkseagreen";
   }

   respondWrong(obj) {
       this.mQuestElem.style.backgroundColor = "red";
   }
}
