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

class LiyClass9SocialismQB extends QuestionBank {
   constructor() {
       super();
       this.mQuestionArray = [
           new QuestionMCQ(`Who was the leader of the Bolsheviks?`,
               ["Vladimir Lenin", "Karl Marx", "Giuseppe Mazzini",
                "Friedrich Engels", "Alexander Shlyapnikov"], 0),
           new QuestionFIB(`Soviet Union (USSR) was created by the Bolsheviks
               from the the Russian empire in December 1922.  What is the
               expansion of USSR?`, "Union of Soviet Socialist Republics"),
           new QuestionMCQ(`Russia followed the Julian calendar until
               1 February 1918. The country then changed to the Gregorian
               calendar, which is followed everywhere today. How many days does
               the Julian and Gregorian calendar differ?`,
               ["Gregorian dates are 13 days ahead of Julian dates",
                "Julian dates are 13 days ahead of Gregorian dates",
                "Julian dates are 17 days ahead of Gregorian dates",
                "Julian dates are 17 days behind of Gregorian dates"], 0),
           new QuestionMCQ(`In April 1917, the Bolshevik leader Vladimir Lenin
               returned to Russia from his exile. Which of the following is
               NOT one of Lenin's three demands that were called the
               <i>April Theses</i>?`,
               ["War be bought to a close",
                "Land be transferred to the peasants",
                "Banks be nationalised",
                "Bolshevik Party be renamed to Communist Party"], 3),
           new QuestionMCQ(`Internationl Women's Day (IWD) became a mainstream
               global holiday following its adoption by the United Nations in
               1977. On which day is it celebrated annually?`,
               ["March 8", "February 28", "January 25", "April 1", "May 13"],
               0),
           new QuestionMCQ(`Which of the following European countries formed an
               alliance during First World War?`,
               ["Germany, Austria, Turkey", "Germany, Britain, Russia",
                "France, Germany, Italy", "Austria, Russia, France"], 0),
           new QuestionMCQ(`Which of the following European countries formed an
               alliance during First World War?`,
               ["France, Britain, Russia", "Germany, Britain, Russia",
                "France, Germany, Italy", "Austria, Russia, France"], 0),
           new QuestionMCQ(`The Russian Revolution (1917-1923) started while
               Russia was still waging the First World War.`,
               ["True", "False"], 0),
           new QuestionMCQ(`In which year did the February Revolution (part of
               Russian Revolution) happened that toppled Tsar Nicholas II of
               Russia and replaced his government with the Russian Provisional
               Government.`, ["1917", "1923", "1914", "1919", "1918"], 0),
           new QuestionMCQ(`What is meant by suffragette movement?`,
               ["A movement to give women the right to vote.",
                "A movement to give the poor the right to vote.",
                "A movement to give the third estate the right to vote.",
                "A movement to give everyone the right to vote."],0)
       ];
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

