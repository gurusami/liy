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
   static degreesPerHour = 30;
   static secondsInDegree = 3600;

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
   static secondsInHour = 3600; // Number of seconds in one hour. 

   constructor(h, m, s) {
       this.mHour = h;
       this.mMinute = m;
       this.mSecond = s;
       this.normalize();
   }

   tick() {
       this.mSecond++;
       this.normalize();
   }

   tickMinute() {
       this.mMinute++;
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

/* The hour hand of the clock. */
class LiyHourHand {

   // Position of the hour hand repeats every 12 hours.
   static posRepeatInHours = 12;

   // Position of the hour hand repeats every 12*60 = 720 minutes.
   static posRepeatInMinutes = 720;

   // Position of the hour hand repeats every 12*60*60 = 43200 seconds.
   static posRepeatInSeconds = 43200;

   // In 1 second hour hand moves 30'' (angle = 30 seconds)
   static movePerSecond = 30; 

   constructor() {
       /* The initial position of the hour hand is on 12. Consider this position
       as 0 degree 0 minutes and 0 seconds. */
       this.mPosition = new LiyAngle(0, 0, 0);
   }

   /* Get the position of the hour hand.  The position is given by degree,
   minute and seconds. */
   toString() {
       return this.mPosition.toString();
   }

   /* Get the hour based on the position of the hour hand. Using the hour hand
   we should only identify the hour.  But the position of the hour hand will
   depend on minutes and seconds.  Therefore, while converting position to hour,
   ignore the minutes and seconds. */
   getHours() {
       let angleInSeconds = this.mPosition.inSeconds();   
       let angleInDegrees =
           Math.floor(angleInSeconds / LiyAngle.secondsInDegree);
       // console.log(`angleInSeconds=${angleInSeconds}`);
       // console.log(`angleInDegrees=${angleInDegrees}`);
       return Math.floor(angleInDegrees/LiyAngle.degreesPerHour);
   }

   /* Move the hour hand from the current position, for the given time
   interval. */
   move(tiObj) {
       let y = this.timeToAngle(tiObj);
       this.mPosition.add(y);
   }

   /* Move the hour hand if the given number of hours have elapsed. */
   moveInHours(timeInHour) {
       let timeInHour2 = timeInHour % LiyHourHand.posRepeatInHours;
       let x = new LiyTimeInterval(timeInHour2, 0, 0);
       let y = this.timeToAngle(x);
       this.mPosition.add(y);
   }

   /* Move the hour hand if the given number of minutes have elapsed. */
   moveInMinutes(timeInMinutes) {
       let timeInMin2 = timeInMinutes % LiyHourHand.posRepeatInMinutes;
       let x = new LiyTimeInterval(0, timeInMin2, 0);
       let y = this.timeToAngle(x);
       this.mPosition.add(y);
   }

   /* Move the hour hand if the given number of seconds have elapsed. */
   moveInSeconds(timeInSeconds) {
       let timeInSec2 = timeInSeconds % LiyHourHand.posRepeatInSeconds;
       let x = new LiyTimeInterval(0, 0, timeInSec2);
       let y = this.timeToAngle(x);
       this.mPosition.add(y);
   }

   /* Move the position of the hour hand to the given angle position, whence
   the current position. */
   movePosition(angleObj) {
       this.mPosition.add(angleObj);
   }

   /* Get the position of the hour hand in seconds. */
   getAngleInSeconds() {
       let val = this.mPosition.inSeconds();
       return val;
   }

   /* Get the movement of the hour hand in angle, for the given time interval.*/
   timeToAngle(liyTimeObj) {
       let timeInSecs = liyTimeObj.inSeconds();
       let timeInSec2 = timeInSecs % LiyHourHand.posRepeatInSeconds;
       // In 1 second hour hand moves 30''
       let angleInSecs = timeInSec2 * LiyHourHand.movePerSecond;
       let liyAngleObj = new LiyAngle();
       liyAngleObj.setAngle(angleInSecs);
       return liyAngleObj;
   }
};

class LiyMinuteHand {
   // Position of the minute hand repeats every 1 hour or 60 minutes.
   static posRepeatInMinutes = 60;

   // Position of the minute hand repeats every 60*60 seconds.
   static posRepeatInSeconds = 3600;

   // In 1 minute, minute hand moves 6 degree
   // In 60 seconds, minute hand moves 6*3600''
   // In 1 second, minute hand moves 360''
   static movePerSecond = 360; 

   constructor() {
       this.mPosition = new LiyAngle(0, 0, 0);
   }

   toString() {
       return this.mPosition.toString();
   }

   /* Get the minutes from the minute hand.  Don't attempt to calculate seconds
   using this hand.  Minute hand is only for minute hand.  For seconds, you need
   a second hand. */
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

   /* Move the minute hand if given minutes have elapsed. */
   moveInMinutes(timeInMinutes) {
       let timeInMin = timeInMinutes % LiyMinuteHand.posRepeatInMinutes;
       let x = new LiyTimeInterval(0, timeInMin, 0);
       let y = this.timeToAngle(x);
       this.mPosition.add(y);
   }

   /* Move the minute hand if given seconds have elapsed. */
   moveInSeconds(timeInSeconds) {
       let timeInSec = timeInSeconds % LiyMinuteHand.posRepeatInSeconds;
       let x = new LiyTimeInterval(0, 0, timeInSec);
       let y = this.timeToAngle(x);
       this.mPosition.add(y);
   }

   /* How much to move the minute hand, if given time has elapsed. */
   timeToAngle(liyTimeObj) {
       let timeInSecs = liyTimeObj.inSeconds();
       let timeInSecs2 = timeInSecs % LiyMinuteHand.posRepeatInSeconds;
       let angleInSecs = timeInSecs2 * LiyMinuteHand.movePerSecond;
       let liyAngleObj = new LiyAngle();
       liyAngleObj.setAngle(angleInSecs);
       return liyAngleObj;
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

   getHour() {
       return this.mHourHand.getHours();
   }

   setTime(hour, minute, seconds) {
       let tiObj = new LiyTimeInterval(hour, minute, seconds);
       // console.log(`Time Interval: ${tiObj.toString()}`);
       this.setClock(tiObj);
   }

   setClock(tiObj) {
       this.mHourHand.move(tiObj);
       this.mMinuteHand.move(tiObj);
       // console.log(`Hour Hand: ${this.mHourHand.toString()}`);
       // console.log(`Minute Hand: ${this.mMinuteHand.toString()}`);
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

   closeToOverlap() {
       let hourAngle = this.mHourHand.getAngleInSeconds();
       let minuteAngle = this.mMinuteHand.getAngleInSeconds();
       return Math.abs(hourAngle - minuteAngle) < 70;
   }

   doTheyOverlap() {
       let hourAngle = this.mHourHand.getAngleInSeconds();
       let minuteAngle = this.mMinuteHand.getAngleInSeconds();
       return Math.abs(hourAngle - minuteAngle) < 200;
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
/* Find the overlap positions. */
class ClockProblemType4 {

   randomMcqArray() {
       let mcqs = new Array();

       for (let hour = 1; hour < 12; ++hour) {
           mcqs.push(this.getOverlapMCQ(hour));
            
       }

       return mcqs;
   }

   getOverlapMCQ(hour) {
       let q = this.getOverlapQuestion(hour);
       let c = this.getOverlapChoices(hour);
       let a = this.getOverlapAnswer(hour, c);
       return new QuestionMCQ(q, c, a);
   }

   getOverlapAnswer(hour, choices) {
       let ans = this.findOneOverlap(hour);
       for (var i = 0; i < choices.length; ++i) {
           console.log(`choices=${choices[i]}, answer=${ans}`);
           if (ans == choices[i]) {
               console.log(`${choices[i]}, ${ans}`);
               return i;
           }
       }
       return null;
   }

   getOverlapChoices(hour) {
       const N = 6;
       let choices = new Array(N);
       let tiObj = new LiyTimeInterval(hour, hour*5, 0);
       let clock = new LiyClock();
       clock.setClock(tiObj);
       for (var i = 0; i < N; ++i) {
           choices[i] = clock.timeString();
           clock.tickMinute();
       }
       return choices;
   }


   getOverlapQuestion(from) {
       return `Between ${from} O'Clock and ${from + 1} O'Clock, when do the hour hand
           and minute hand of the clock overlap (assuming that each have 
           exactly 360 positions)`;
   }

   findOneOverlap(hour) {
       let clock = new LiyClock();
       let curTimeInterval = new LiyTimeInterval(hour, hour*5, 0);
       clock.setClock(curTimeInterval);

       while (true) {
           if (clock.doTheyOverlap()) {
               console.log(`Found Overlap: ${clock.timeString()}`);
               break;
           }
           clock.tickSecond();
           curTimeInterval.tick();
       }
       return clock.timeString();
   }

   static findOverlap() {
       let clock = new LiyClock();
       let curTimeInterval = new LiyTimeInterval(0, 0, 0);
       let endTimeInterval = new LiyTimeInterval(11, 59, 59);

       while (curTimeInterval.equals(endTimeInterval) == false) {
           clock.tickSecond();
           curTimeInterval.tick();

           if (clock.doTheyOverlap()) {
               console.log(`Found Overlap: ${clock.timeString()}`);
               break;
           }

       }
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

       this.mQuestionArray.push(new QuestionMCQ(`How many times does the hour
           and minute hand of the clock overlap in a day?`, ["21", "12", "24",
           "20", "22"], 0));

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

       // Type 4 Problems
       let type4Obj = new ClockProblemType4();
       let type4 = type4Obj.randomMcqArray();
       for (let i = 0; i < type4.length; ++i) {
           this.mQuestionArray.push(type4[i]);
       }

       // ClockProblemType4.findOverlap();
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


