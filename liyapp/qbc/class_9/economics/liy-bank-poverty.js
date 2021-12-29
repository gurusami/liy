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

class LiyClass9EconomicsPovertyQB extends QuestionBank {
   constructor() {
       super();
       this.qst_bank = [
	   new QuestionMCQ(`The poverty ratio of India is worse than Pakistan
               and Bangladesh`, ["True", "False"], 0),
	   new QuestionMCQ(`Poverty ratio is the percentage of the population
               living below the poverty line.  According to the Indian Census
               2011, which state has highest poverty ratio?`, ["Bihar",
               "Odisha", "Assam", "Madhya Pradesh", "Uttar Pradesh"], 0),
	   new QuestionMCQ(`Poverty ratio is the percentage of the population
               living below the poverty line.  According to the Indian Census
               2011, which state has lowest poverty ratio?`, ["Kerala",
               "Tamil Nadu", "Himachal Pradesh", "Punjab", "Andhra Pradesh"],
               0),
	   new QuestionMCQ(`What is the poverty ratio of Tamil Nadu (according
               to 2011 census data)?`, ["8.3%", "11.3%", "14.7%", "19.9",
               "31.7"], 1),
	   new QuestionMCQ(`What is the average poverty ratio of India
               (according to 2011 census data)?`, ["21.2%", "11.3%", "33.7%",
               "19.9%", "7.1%"], 0),
	   new QuestionMCQ(`What is human poverty?`, [`Method used to measure
               poverty by considering money, clean water, food, shelter,
               education, healthcare, cloths`, `Common method used to 
               measure poverty based on income or consumption levels`, `Same
               as the concept of poverty line`, `It is about minimum subsistence
               level of living`], 0),
	   new QuestionMCQ(`What is poverty line?`, [`Common method used to 
               measure poverty based on income or consumption levels`, `Measure
               of reasonable level of living`, `Takes into account if access to
               health care is available`, `Identify the poor based on
               education`, `Method used to measure poverty based on clothing,
               shelter, clean water`], 0),
	   new QuestionMCQ(`What is the aim of Mahatma Gandhi National Rural
               Employment Guarantee Act (MGNREGA) 2005?`, [`Provide 100 days of
               wage employment to every household to ensure livelihood security
               in rural areas`, `Create self employment opportunities for
               educated unemployed youth in rural areas and small towns`, `Bring
               the assisted poor families above the poverty line by organising
               them into self help groups through a mix of bank credit and
               government subsidy`, `Provide highly subsidised food to millions
               of the poorest families`], 0),
	   new QuestionMCQ(`For making comparisons between developing countries,
               many international organisations like the World Bank use a 
               uniform standard for the poverty line.  As of year 2011, this
               poverty line is:`, ["$1.90 per person per day",
               "$3.75 per person per day",
               "$2.80 per person per day",
               "$0.90 per person per day"], 0),
	   new QuestionMCQ(`The poverty line is estimated periodically by
               conducting sample surveys, which are carried out by National
               Sample Survey Organisation (NSSO) in India.  How often are these
               sample surveys done?`, ["5", "1", "3", "10", "7"], 0),
	   new QuestionMCQ(`For the year 2011-12, what is the poverty line
               w.r.t monthly income per person in rural areas of India?`,
               ["Rs. 816", "Rs. 926", "Rs. 1000", "Rs. 1400", "Rs. 750"], 0),
	   new QuestionMCQ(`For the year 2011-12, what is the poverty line
               w.r.t monthly income per person in urban areas of India?`,
               ["Rs. 1000", "Rs. 816", "Rs. 2000", "Rs. 1400", "Rs. 750"], 0),
	   new QuestionMCQ(`The poverty line will change from country to
               country, and it will also change with time within the same
               country`, ["True", "False"], 0),
	   new QuestionMCQ(`What is the accepted average calorie requirement
               per person per day in India for urban and rural area?`,
               ["Urban: 2400 calories, Rural: 2100 calories",
                "Urban: 2100 calories, Rural: 2400 calories",
                "Urban: 2700 calories, Rural: 2700 calories",
                "Urban: 1400 calories, Rural: 1400 calories"], 1),
	   new QuestionMCQ(`Which of the following is NOT considered
               as an indicator of poverty in India?`,
               ["Inability to purchase a small car",
               "Parents not able to send their children to school",
               "Sick people cannot afford treatment",
               "Lack of clean water and sanitation facilities",
               "Lack of a regular job at minimum decent wages"], 0)];

       console.log(`Initialized Question Bank: LiyClass9EconomicsPovertyQB`);
   }

   initQuestionArray() {
       this.mQuestionArray  = this.qst_bank;
       for (var i = 0; i < this.mQuestionArray.length; ++i) {
           let qst = this.mQuestionArray[i];
           if (qst instanceof QuestionMCQ) {
               qst.shuffleChoices();
           }
       }
   }
}

