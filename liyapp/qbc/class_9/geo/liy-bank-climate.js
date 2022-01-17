/*******************************************************************************

Learn it Yourself (LiY) - Software to Promote Self Study

Copyright (C) 2021, 2022, Annamalai Gurusami <annamalai.gurusami@gmail.com>

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

class C9Climate extends QuestionBank {
   constructor() {
       super();
       this.mQuestionArray = [
           new QuestionMCQ(`________ refers to the state of the atmosphere over
               an area at any point of time.`, ["Weather", "Climate"], 0),
           new QuestionFIB(`The ______ force is responsible for deflecting
               winds towards the right in the northern hemisphere and towards
               the left in the southern hemisphere.`, "Coriolis"),
           new QuestionMCQ(`Which one of the following places receives the
               highest rainfall in the world?`, ["Mawsynram", "Cherrapunji",
               "Silchar", "Guwahati" ], 0),
           new QuestionMCQ(`Which of the following is NOT one of the major
               controls of the climate of a place?`, ["Longitude", "Latitude",
               "Altitude", "Pressure and Wind System", "Distance from the sea"],
               0),
           new QuestionMCQ(`What is the approximate axial tilt of Earth?`,
               ["23&deg;", "19&deg;", "27&deg;", "13&deg;", "33&deg;"], 0),
           new QuestionFIB(`The Coriolis force is responsible for deflecting
               winds towards the ________ in the northern hemisphere.`, "right"),
           new QuestionFIB(`The Coriolis force is responsible for deflecting
               winds towards the ________ in the southern hemisphere.`, "left"),
           new QuestionMCQ(`Jet streams are a narrow belt of high altitude
               (above 12,000 m) westerly winds in the troposphere. Their speed
               varies from about 110 km/h in summer to about ________ km/h in
               winter.`, ["184", "90", "205", "110", "144"], 0),
           new QuestionMCQ(`Jet streams are a narrow belt of high altitude
               (above 12,000 m) westerly winds in the troposphere. Their speed
                varies from about ________ km/h in summer to about 184 km/h in
                winter.`, ["110", "92", "205", "184", "144"], 0),
           new QuestionMCQ(`Approximately when does the monsoon arrive in
               India?`, ["Early June", "Early May", "Early July", "Early August",
               "Early April"], 0),
           new QuestionMCQ(`Which one of the following characterises the cold
               weather season in India?`, ["Warm days and cold nights",
               "Warm days and warm nights", "Cold days and cold nights",
               "Cold days and warm nights"], 0),
           new QuestionMCQ(`Nor'westers or the Kaal Baisakhi generally occur in
               afternoon or just before sunset, when thick dark black clouds
               start appearing over the sky and then bring gale-speed wind with
               torrential rain, often with hail, but spanning only a short
               period of time. Which of the following state does not experience
               Kaal Baisakhi?`, ["Madhya Pradesh", "West Bengal", "Bihar",
               "Jharkhand", "Odisha", "Assam" ], 0),
           new QuestionMCQ(`In which state in India are the houses built on
               stilts?`, ["Assam", "Tamil Nadu", "Punjab", "Odisha",
               "Telangana"], 0)
       ];
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
