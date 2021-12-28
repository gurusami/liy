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


class LiyClockProblem {
   constructor() {
   }

   getChoices(degreeValue, answer, minDegree, maxDegree) {
       const nChoices = 5;
       let c = new Array(nChoices);
       let dupArray = new Array();

       c[0] = answer; // Correct answer is placed in this fixed index position.

       for (var i = 1; i < nChoices; ++i) {
           let deg = LiY.ryRandom(minDegree, maxDegree, dupArray);
           c[i] = this.getAnswerString(deg);
       }

       return c;
   }
}

class HourHandDeg2Min extends LiyClockProblem {
   constructor() {
       super();
   }

   getAnswerString(degreeValue) {
       let minutes = this.getAnswerMinutes(degreeValue);
       return `${minutes} minutes`;
   }

   getAnswerMinutes(degreeValue) {
       return degreeValue * 2;
   }


   getRandomMCQ(dupArray) {
       const minDegree = 1;
       const maxDegree = 31;
       let degree = LiY.ryRandom(minDegree, maxDegree, dupArray);
       let qst = `If the hour hand has moved ${degree}&deg;, how many minutes
               have elapsed?`;
       let ans =  this.getAnswerString(degree);
       let choices = this.getChoices(degree, ans, minDegree, maxDegree);
       return new QuestionMCQ(qst, choices, 0); 
   }
}

class MinuteHandDeg2Min extends LiyClockProblem {
   constructor() {
       super();
   }
   
   getAnswerString(degreeValue) {
       let totalSecs = this.getAnswerSeconds(degreeValue);
       let minutes = Math.floor(totalSecs / 60);
       // let seconds = totalSecs % 60;
       return `${minutes} minutes`;
       // return `${minutes} minutes ${seconds} seconds`;
   }

   getAnswerSeconds(degreeValue) {
       return (degreeValue * 10)
   }

   getRandomMCQ(dupArray) {
       const minDegree = 0;
       const maxDegree = 360;
       let degree = LiY.ryRandom(minDegree, maxDegree, dupArray);
       let qst = `If the minute hand has moved ${degree}&deg;, how many minutes
               have elapsed?`;
       let ans =  this.getAnswerString(degree);
       let choices = this.getChoices(degree, ans, minDegree, maxDegree);
       return new QuestionMCQ(qst, choices, 0); 
   }
}

/******************************************************************************/

class LiyAngle {
   constructor(d, m, s) {
       this.mDegree = d;
       this.mMinute = m;
       this.mSecond = s;
       this.normalize();
   }

   static random() {
       let degree = LiY.ryRandomInRange(0, 360);
       let minute = LiY.ryRandomInRange(0, 60);
       let seconds = LiY.ryRandomInRange(0, 60);
       return new LiyAngle(degree, minute, seconds);
   }

   normalize() {
       if (this.mSecond >= 60) {
           this.mMinute += Math.floor(this.mSecond / 60);
           this.mSecond = this.mSecond % 60;
       }
       if (this.mMinute >= 60) {
           this.mDegree += Math.floor(this.mMinute / 60);
           this.mMinute = this.mMinute % 60;
       }
       if (this.mDegree >= 360) {
           this.mDegree = this.mDegree % 360;
       }
   }

   set(d, m, s) {
       this.mDegree = d;
       this.mMinute = m;
       this.mSecond = s;
   }

   equals(angleObj) {
       return ((this.mDegree == angleObj.mDegree) &&
               (this.mMinute == angleObj.mMinute) &&
               (this.mSecond == angleObj.mSecond));
   }

   setFrom(angleObj) {
       this.mDegree = angleObj.mDegree;
       this.mMinute = angleObj.mMinute;
       this.mSecond = angleObj.mSecond;
   }

   setAngle(totalSeconds) {
       const maxAngleInSeconds = 360 * 3600;
       let remain = totalSeconds % maxAngleInSeconds;
       this.mDegree = Math.floor(remain / 3600);
       remain = remain % 3600;
       this.mMinute = Math.floor(remain / 60);
       this.mSecond = remain % 60;
   }

   add(otherAngleObj) {
       let total = this.inSeconds() + otherAngleObj.inSeconds();
       this.setAngle(total);
   }

   toString() {
       return `${this.mDegree}&deg; ${this.mMinute}' ${this.mSecond}''`;
   }

   inSeconds() {
       return ((this.mDegree * 3600) + (this.mMinute * 60) + this.mSecond);
   }
}

class LiyTimeInterval {
   constructor(h, m, s) {
       this.mHour = h;
       this.mMinute = m;
       this.mSecond = s;
       this.normalize();
   }

   equals(tiObj) {
       return ((this.mHour == tiObj.mHour) &&
               (this.mMinute == tiObj.mMinute) &&
               (this.mSecond == tiObj.mSecond));
   }

   normalize() {
       if (this.mSecond >= 60) {
           this.mMinute += Math.floor(this.mSecond / 60);
           this.mSecond = this.mSecond % 60;
       }
       if (this.mMinute >= 60) {
           this.mHour += Math.floor(this.mMinute / 60);
           this.mMinute = this.mMinute % 60;
       }

       /* For every 12 hours, the position of the clock with become the same.
       So there is no need to store more hours. */
       if (this.mHour >= 12) {
           this.mHour = this.mHour % 12;
       }
   }

   toString() {
       if (this.mHour > 0) {
           return `${this.mHour} hr ${this.mMinute} min ${this.mSecond} sec`;
       } else {
           return `${this.mMinute} min ${this.mSecond} sec`;
       }
   }

   setTime(totalSeconds) {
       this.mHour = Math.floor(totalSeconds / 3600);
       let remain = totalSeconds % 3600;
       this.mMinute = Math.floor(totalSeconds / 60);
       this.mSecond = remain % 60;
   }

   inSeconds() {
       return ((this.mHour * 3600) + (this.mMinute * 60) + this.mSecond);
   }
}

class LiyHourHand {
   constructor() {
       this.mPosition = new LiyAngle(0, 0, 0);
   }

   toString() {
       return this.mPosition.toString();
   }

   getHours() {
       let angleInSeconds = this.mPosition.inSeconds();   
       let angleInDegrees = Math.floor(angleInSeconds / 3600);
       return Math.floor(angleInDegrees/30);
   }

   move(tiObj) {
       let y = this.timeToAngle(tiObj);
       this.mPosition.add(y);
   }

   moveInHours(timeInHour) {
       let x = new LiyTimeInterval(timeInHour, 0, 0);
       let y = this.timeToAngle(x);
       this.mPosition.add(y);
   }

   moveInMinutes(timeInMinutes) {
       let x = new LiyTimeInterval(0, timeInMinutes, 0);
       let y = this.timeToAngle(x);
       this.mPosition.add(y);
   }

   moveInSeconds(timeInSeconds) {
       let x = new LiyTimeInterval(0, 0, timeInSeconds);
       let y = this.timeToAngle(x);
       this.mPosition.add(y);
   }

   movePosition(angleObj) {
       this.mPosition.add(angleObj);
   }

   getAngleInSeconds() {
       let val = this.mPosition.inSeconds();
       return val;
   }

   timeToAngle(liyTimeObj) {
       let liyAngleObj = new LiyAngle();
       let timeInSecs = liyTimeObj.inSeconds();
       // In 1 second hour hand moves 30''
       let angleInSecs = timeInSecs * 30;
       liyAngleObj.setAngle(angleInSecs);
       return liyAngleObj;
   }

   angleToTime(liyAngleObj) {
       let liyTimeObj = new LiyTimeInterval();
       let angleInSecs = liyAngleObj.inSeconds();
       // Hour hand moves 30'' angle, for every second.
       let timeInSecs = Math.floor(angleInSecs / 3);
       liyTimeObj.setTime(timeInSecs);
       // 1 degree to 2 minutes.
       // 1 degree to 120 seconds.
       // 60' to 120 seconds.
       // 360'' to 120 seconds.
       // 3'' to 1 seconds.
       // 1'' to 1/3 seconds.
       return liyTimeObj;
   }
};

class LiyMinuteHand {
   constructor() {
       this.mPosition = new LiyAngle(0, 0, 0);
   }

   toString() {
       return this.mPosition.toString();
   }

   getMinutes() {
       let angleInSeconds = this.mPosition.inSeconds();   
       let angleInDegrees = Math.floor(angleInSeconds/3600);
       return Math.floor(angleInDegrees/6);
   }

   getAngleInSeconds() {
       let val = this.mPosition.inSeconds();
       return val;
   }

   move(tiObj) {
       let y = this.timeToAngle(tiObj);
       this.mPosition.add(y);
   }

   moveInMinutes(timeInMinutes) {
       let x = new LiyTimeInterval(0, timeInMinutes, 0);
       let y = this.timeToAngle(x);
       this.mPosition.add(y);
   }

   moveInSeconds(timeInSeconds) {
       let x = new LiyTimeInterval(0, 0, timeInSeconds);
       let y = this.timeToAngle(x);
       this.mPosition.add(y);
   }

   timeToAngle(liyTimeObj) {
       let timeInSecs = liyTimeObj.inSeconds();
       // In 1 minute, minute hand moves 6 degree
       // In 60 seconds, minute hand moves 6*3600''
       // In 1 second, minute hand moves 360''
       let angleInSecs = timeInSecs * 360;
       let liyAngleObj = new LiyAngle();
       liyAngleObj.setAngle(angleInSecs);
       return liyAngleObj;
   }

   angleToTime(liyAngleObj) {
       let liyTimeObj = new LiyTimeInterval();
       let angleInSecs = liyAngleObj.inSeconds();
       // Minute hand moves 1 degree for 10 seconds.
       // Minute hand moves 360'' degree for 10 seconds.
       // Minute hand moves 36'' degree for 1 seconds.
       // 1 degree to 10 seconds.
       let timeInSecs = angleInSecs * 36;
       liyTimeObj.setTime(timeInSecs);
       return liyTimeObj;
   }
}

class LiyClock {
   constructor() {
       this.mHourHand = new LiyHourHand();
       this.mMinuteHand = new LiyMinuteHand();
   }

   toString() {
       return `Hour hand: ${this.mHourHand.toString()},
           Minute hand: ${this.mMinuteHand.toString()}`;
   }

   timeString() {
       let hr = this.mHourHand.getHours();
       let min = this.mMinuteHand.getMinutes();
       let minString = min < 10 ? `0${min}`: `${min}`;
       let hrString = hr < 10 ? `0${hr}`: `${hr}`;
       return `${hrString}:${minString}`;
   }

   setClock(tiObj) {
       this.mHourHand.move(tiObj);
       this.mMinuteHand.move(tiObj);
   }

   tickSecond() {
       this.mHourHand.moveInSeconds(1);
       this.mMinuteHand.moveInSeconds(1);
   }

   tickMinute() {
       this.mHourHand.moveInMinutes(1);
       this.mMinuteHand.moveInMinutes(1);
   }

   tickHour() {
       this.mHourHand.moveInHours(1);
   }

   angleBetweenHands() {
       let hourAngle = this.mHourHand.getAngleInSeconds();
       let minuteAngle = this.mMinuteHand.getAngleInSeconds();
       let angle = Math.abs(hourAngle - minuteAngle);
       let angleObj = new LiyAngle();
       angleObj.setAngle(angle);
       return angleObj;
   }
}

/******************************************************************************/

// Problem Type 3: Given time what is the angle between hour and minute hands?
class ClockProblemType3
{
   static liyMakeChoicesDegrees(answer, minDegree, maxDegree) {
       const nChoices = 5;
       let c = new Array(nChoices);
       let dupArray = new Array();

       // Correct answer is placed in this fixed index position.
       c[0] = answer.toString(); 

       for (var i = 1; i < nChoices; ++i) {
           let randChoice = LiyAngle.random();
           while (randChoice.equals(answer)) {
               randChoice = LiyAngle.random();
           }
           c[i] = randChoice.toString();
       }

       return c;
   }

   static randomMcqArray(nCount) {
       let mcqArray = new Array(nCount);
       let dup = new Array();

       for (var i = 0; i < mcqArray.length; ++i) {
           // Generate a time, Ensure that it is not duplicated.
           let hour = LiY.ryRandomInRange(0, 12);
           let min = LiY.ryRandomInRange(0, 60);
           let sec = LiY.ryRandomInRange(0, 60);
           // Ensure that ti is not a duplicate.
           let ti;
           let duplicate = false;
           do {
               duplicate = false;
               ti = new LiyTimeInterval(hour, min, sec);
               for (var j = 0; j < dup.length; ++j) {
                   if (ti.equals(dup[j])) {
                       duplicate = true;
                       break;
                   }
               }
           } while (duplicate);
           dup.push(ti);
           let clock = new LiyClock();
           clock.setClock(ti);
           let ans = clock.angleBetweenHands();

           let qst = `If the time is ${clock.timeString()}, what is the angle
               between the hour and minute handle?`;
           let choices = ClockProblemType3.liyMakeChoicesDegrees(ans, 0, 181);
           mcqArray[i] = new QuestionMCQ(qst, choices, 0);
       }

       return mcqArray;
   }
}

/******************************************************************************/

class LiyClockProblemQB extends QuestionBank {
   constructor() {
       super();
       this.hourHandDegree = new HourHandDeg2Min();
       this.minuteHandDegree = new MinuteHandDeg2Min();
       this.mQuestionArray = new Array();
       let dup = new Array();

       // Five problems of this kind.
       for (let i = 0; i < 5; ++i) {
           this.mQuestionArray.push(this.hourHandDegree.getRandomMCQ(dup));
       }

       dup = [];
       // Five problems of this kind.
       for (let i = 0; i < 5; ++i) {
           this.mQuestionArray.push(this.minuteHandDegree.getRandomMCQ(dup));
       }

       // Five problems of this kind.
       let x = ClockProblemType3.randomMcqArray(5);
       for (let i = 0; i < x.length; ++i) {
           this.mQuestionArray.push(x[i]);
       }

   }

   initQuestionArray() {
       for (var i = 0; i < this.mQuestionArray.length; ++i) {
           let qst = this.mQuestionArray[i];
           if (qst instanceof QuestionMCQ) {
               this.mQuestionArray[i].shuffleChoices();
           }
       }
   }
}


