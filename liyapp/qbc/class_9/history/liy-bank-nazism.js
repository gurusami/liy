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

class LiyClass9NazismQB extends QuestionBank {
   constructor() {
       super();
       this.mLastUpdated = "09-Jan-2022";

       this.mQuestionArray = [

           new QuestionFIB(`<i>"The image of Germans carrying cartloads of
               currency notes to buy a loaf of bread was widely publicised
               evoking worldwide sympathy"</i>. What is the name of this crisis
               that happened between 1921 to 1923 in Weimar Republic?`,
               "Hyperinflation"),

           new QuestionMCQ(`What is the sole currency of Germany since year
               2002?`, ["Euro", "Deutsche Mark", "Reichsmark", "Saar Franc",
               "Saar Mark"], 0),

           new QuestionMCQ(`Who was the chief propangandist for the Nazi Party,
               and then Reich Minister of Propaganda from 1933 to 1945?`,
               ["Paul Joseph Goebbels", "Adolf Hitler", ], 0),

           new QuestionMCQ(`The German Revolution or November Revolution was a
           civil conflict in the German Empire at the end of the First World War
           that resulted in the replacement of the German federal constitutional
           monarchy with a democratic parliamentary republic that later became
           known as the Weimar Republic. When did the Proclamation of the
           Weimar Republic happen?`, ["9 November 1918", "1 December 1919",
           "13 Jan 1918", "17 March 1919", "15 Aug 1920"], 0),

           new QuestionMCQ(`The second atomic bomb was dropped by United States
               of America on the Japanese city of Nagasaki during the Second
               World War. When did this happen?`, ["6 Aug 1945",
               "9 Aug 1945", "6 Sep 1945", "9 Sep 1945", "6 July 1945",
               "9 July 1945"], 1),
           new QuestionMCQ(`The first atomic bomb was dropped by United States
               of America on the Japanese city of Hiroshima during the Second
               World War. When did this happen?`, ["6 Aug 1945",
               "9 Aug 1945", "6 Sep 1945", "9 Sep 1945", "6 July 1945",
               "9 July 1945"], 0),
           new QuestionMCQ(`Federal elections were held in Germany on 31 July
               1932, following the premature dissolution of the Reichstag, the
               German Parliament.  Nazi Party became the largest party for the
               first time.  What is the percentage of votes received by Nazi
               Party?`,["37", "27", "41", "19", "55"],0),

           new QuestionMCQ(`The Allies, later known formally as the United
               Nations, were an international military coalition formed during
               the Second World War (1939–1945) to oppose the Axis powers. Which
               countries were part of this alliance?`,
               ["United Kingdom, United States, Soviet Union, China",
                "United States, Germany, Italy, Japan",
                "Germany, Poland, Russia, United Kingdom",
                "France, Italy, Japan, United Kingdom"], 0),

           new QuestionMCQ(`The Axis powers was a military coalition that
               initiated Second World War and fought against the Allies. Which
               countries were part of the axis powers?`,
               ["Germany, Italy and Japan",
                "Italy, Germany and Poland",
                "Britain, Japan and Russia",
                "USA, Britain and France"],0)];
   }

   initQuestionArray() {
       for (var i = 0; i < this.mQuestionArray.length; ++i) {
           let qst = this.mQuestionArray[i];
           if (qst instanceof QuestionMCQ) {
               qst.shuffleChoices();
           }
       }
   }
}

