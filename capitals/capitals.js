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

class QuestionMCQ {
   constructor(q, c, a) {
       this.mQuestion = q;
       this.mChoices  = c; 
       this.mAnswer   = a;
   }

   shuffleChoices() {
       for (var i = this.mChoices.length - 1; i !== 0; --i) {
           let j = Math.floor(Math.random() * i);
           if (j == this.mAnswer) {
               /* i and j are being swapped. So change answer to j. */
               this.mAnswer = i;
           } else if (i == this.mAnswer) {
               this.mAnswer = j;
           }
           let k = this.mChoices[i];
           this.mChoices[i] = this.mChoices[j];
           this.mChoices[j] = k;
       }
   }
}

class CapitalsOfIndianStates extends QuestionBank {
   constructor() {
       super();
       this.mQ = [
           new QuestionMCQ("What is the legislative capital of Tamil Nadu?",
               ["Chennai", "Salem", "Madurai", "Coimbatore", "Trivandrum",
                "Kanyakumari"], 0),
           new QuestionMCQ("What is the legislative capital of Kerala?",
               ["Thiruvananthapuram", "Kochi", "Thrissur", "Kannur",
                "Thalassery"], 0),
           new QuestionMCQ("What is the legislative capital of Karnataka?",
               ["Bengaluru", "Mysore", "Hubli", "Mangaluru",
                "Belagavi", "Kalaburagi"], 0),
           new QuestionMCQ("What is the capital of Andhra Pradesh?",
               ["Amaravati", "Nellore", "Vijayawada", "Visakhapatnam",
                "Kakinada"], 0),
           new QuestionMCQ("What is the capital of Telangana?",
               ["Hyderabad", "Karimnagar", "Nizamabad", "Khamman",
                "Rajahmundry"], 0),
           new QuestionMCQ("What is the administrative capital of Maharashtra?",
               ["Mumbai", "Pune", "Nashik", "Nagpur", "Aurangabad"], 0),
           new QuestionMCQ("What is the legislative capital of Odisha?",
               ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur", "Brahmapur"],
               0),
           new QuestionMCQ("What is the legislative capital of Odisha?",
               ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur", "Brahmapur"],
               0),
           new QuestionMCQ("What is the capital of Chattisgarh?",
               ["Raipur", "Bilaspur", "Raigarh", "Korba", "Ambikapur",
                "Chirmiri"], 0),
           new QuestionMCQ("What is the capital of Arunachal Pradesh?",
               ["Itanagar", "Dibrugarh", "Pasighat", "Tezu", "Dirang"], 0),
           new QuestionMCQ("What is the legislative capital of Jharkhand?",
               ["Ranchi", "Jamshedpur", "Gaya", "Durgapur"], 0),
           new QuestionMCQ("What is the capital of Assam?",
               ["Dispur", "Guwahati", "Nagaon", "Silchar", "Golaghat"], 0),
           new QuestionMCQ("What is the capital of Bihar?",
               ["Patna", "Motihari", "Darbhanga", "Muzaffarpur", "Purnia"], 0),
           new QuestionMCQ("What is the capital of Goa?",
               ["Panaji", "Vasco da Gama", "Margao", "Mapusa", "Ponda"], 0),
           new QuestionMCQ("What is the capital of Gujarat?",
               ["Gandhinagar", "Ahmedabad", "Rajkot", "Porbandar", "Vadodara"],
               0),
           new QuestionMCQ("What is the capital of Haryana?",
               ["Chandigarh", "Faridabad", "Panipat", "Sonipat", "Hisar"],
               0),
           new QuestionMCQ("What is the summer capital of Himachal Pradesh?",
               ["Shimla", "Manali", "Chamba", "Dharamsala", "Kullu"],
               0),
           new QuestionMCQ("What is the winter capital of Himachal Pradesh?",
               ["Dharamsala", "Manali", "Chamba", "Shimla", "Kullu"],
               0),
           new QuestionMCQ("What is the capital of Madhya Pradesh?",
               ["Bhopal", "Indore", "Ujjain", "Gwalior", "Satna", "Jabalpur"],
               0),
           new QuestionMCQ("What is the capital of Manipur?",
               ["Imphal", "Churachandpur", "Senapati", "Thoubal", "Kakching"],
               0),
           new QuestionMCQ("What is the capital of Meghalaya?",
               ["Shillong", "Cherrapunji", "Jowai", "Tura", "Dawki"],
               0),
           new QuestionMCQ("What is the capital of Mizoram?",
               ["Aizawl", "Champhai", "Lunglei", "Siaha", "Kolasib",
                "Lawngtlai"], 0),
           new QuestionMCQ("What is the capital of Nagaland?",
               ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Zunheboto"], 0),
           new QuestionMCQ("What is the capital of Punjab?",
               ["Chandigarh", "Ludhiana", "Amritsar", "Patiala", "Pathankot"],
                0),
           new QuestionMCQ("What is the capital of Rajasthan?",
               ["Jaipur", "Jodhpur", "Ajmer", "Udaipur", "Kota"],
                0),
           new QuestionMCQ("What is the capital of Sikkim?",
               ["Gangtok", "Pelling", "Lachung", "Rangpo", "Namchi"],
                0),
           new QuestionMCQ("What is the capital of Tripura?",
               ["Agartala", "Ambassa", "Udaipur", "Sabroom", "Kailashahar"],
                0),
           new QuestionMCQ("What is the capital of Uttar Pradesh?",
               ["Lucknow", "Kanpur", "Allahabad", "Agra", "Ghaziabad"],
                0),
           new QuestionMCQ("What is the winter capital of Uttarakhand?",
               ["Dehradun", "Bhararisen", "Nainital", "Haridwar", "Sitarganj"],
                0),
           new QuestionMCQ("What is the summer capital of Uttarakhand?",
               ["Bhararisen", "Dehradun", "Nainital", "Haridwar", "Sitarganj"],
                0),
           new QuestionMCQ("What is the judicial capital of Uttarakhand?",
               ["Nainital", "Bhararisen", "Dehradun", "Haridwar", "Sitarganj"],
                0),
           new QuestionMCQ("What is the capital of West Bengal?",
               ["Kolkata", "Asansol", "Kharagpur", "Siliguri", "Durgapur"],
                0),
           new QuestionMCQ("What is the capital of Lakshadweep?",
               ["Kavaratti", "Agatti", "Amini", "Kalpeni", "Andrott"],
                0),
           new QuestionMCQ(
               "What is the capital of Union Territory Puducherry?",
               ["Puducherry", "Karaikal", "Mahe", "Yanam", "Machilipatnam"],
                0)
       ];
   }

   initQuestionArray() {
       this.mQuestionArray = this.mQ;

       for (var i = 0; i < this.mQuestionArray.length; ++i) {
           this.mQuestionArray[i].shuffleChoices();
       }
   }
}

var gMcqData = new CapitalsOfIndianStates();
