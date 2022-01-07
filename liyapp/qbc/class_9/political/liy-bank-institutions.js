/*******************************************************************************

Learn it Yourself (LiY) - Software to Promote Self Study

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

class C9Institutions extends QuestionBank {

   constructor() {
       const q1 =
   `Match the following:
   <table>
       <tr>
           <td> 
               <ol>
                   <li> Cabinet Ministers </li>
                   <li> Ministers of State with Independent Charge </li>
                   <li> Ministers of State </li>
                   <li> Council of Ministers </li>
                   <li> Cabinet Secretariat </li>
               </ol>
           </td>
           <td>
               <ol type="a"> 
                   <li> Includes many civil servants who try to co-ordinate
                       the working of different ministries. </li>
                   <li> Attached to and required to assist Cabinet Ministers </li>
                   <li> In-charge of smaller ministries. </li>
                   <li> Top-level leaders of the ruling party. </li>
                   <li> Official name for the body that includes all the
                       Ministers. </li>
               </ol>
           </td>
       </tr>

   </table>
`;
       super();
       this.mLastUpdated = `07-Jan-2022`;
       this.mQuestionArray = [
           new QuestionMCQ(q1, ["1-d, 2-c, 3-b, 4-e, 5-a"], 0),

           new QuestionMCQ(`In India, which institution acts as the guardian of
               the Fundamental Rights of the citizens?`,
               ["Judiciary", "Parliament", "Political Executive",
                "Permanent Executive"], 0),

           new QuestionMCQ(`In India, the Supreme Court CANNOT take up which of
               the following disputes?`, ["None of the above",
               "Between citizens of the country",
               "Between citizens and government",
               "Between two or more state governments",
               "Between governments at the union and state level"], 0),

           new QuestionMCQ(`In India, the Supreme Court CANNOT overturn the
               judgements of the High Courts.`, ["True", "False"], 1),

           new QuestionMCQ(`In India, the Supreme Court and the High Courts have
               the power to interpret the Constitution of the country. They can
               declare invalid any law of the legislature or the actions of the
               executive, whether at the Union level or at the state level, if
               they find such a law or action is against the Indian
               Constitution.`, ["True", "False"], 0),

           new QuestionMCQ(`In India, every law passed by the Parliament needs
               approval of the Supreme Court.`, ["True", "False"], 1),

           new QuestionMCQ(`Choose the incorrect statement: `,
               [`President is part of the Political Executive`,
               `Civil Service officials like IAS and IPS officers are part of
                the Permanent Non-Political Executive`,
               `Prime Minister and the Cabinet Ministers are part of the
                Political Executive`,
               `Political Executive is elected by the people for a specific
                period of time`], 0),

           new QuestionFIB(`What is the length of the term (in years) for 
               members of Lok Sabha?`, 5),

           new QuestionFIB(`What is the length of the term (in years) for 
               members of Rajya Sabha?`, 6),

           new QuestionMCQ(`Who elects the members of the Rajya Sabha or
               the Council of States in India?`,
               ["Members of State Legislative Assembly",
                "Members of Parliament",
                "President of India",
                "Prime Minister of India",
                "People of India"], 0),

           new QuestionMCQ(`What is the maximum membership of the Rajya Sabha
               (Council of States) allotted by the Constitution of India?`,
               ["250", "200", "150",  "450", "550"], 0),

           new QuestionMCQ(`What is the maximum membership of the Lok Sabha
               (House of the People) allotted by the Constitution of India?`,
               ["550", "300", "350",  "400", "450"], 0),

           new QuestionMCQ(`Who is the 14th President of India?`,
               ["Ram Nath Kovind", "Rajendra Prasad", "A P J Abdul Kalam",
               "Pratibha Patil", "Pranab Mukherjee" ], 0),

           new QuestionMCQ(`In India, which institution can change an existing
               law?`, ["Parliament", "President", "Prime Minister",
                       "Supreme Court", "Council of Ministers"], 0),

           new QuestionMCQ(`Who among the following is a part of the political
               executive?`, ["Home Minister", "District Collector", 
               "Director General of Police",
               "Secretary of the Ministry of Home Affairs"], 0),

           new QuestionMCQ(`Which of the following is NOT true about Rajya
               Sabha?`, ["It is also known as the Council of States",
               `The potential seating capacity of the Rajya Sabha is 250, of
                which 12 members can be appointed by the President`,
               `Rajya Sabha can only recommend changes to a money bill and
                does not have the power to reject or amend it.`,
               `Rajya Sabha has the power to bring no-confidence motion against
                the government`], 3),

           new QuestionMCQ(`Who won the Supreme Court case of Indira Sawhney
               and Others Vs Union of India?`,
               ["Indira Sawhney", "Union of India"], 1),

           new QuestionMCQ(`The Mandal Commission, was established in India on
               1979 by the Janata Party government with a mandate to "identify
               the socially or educationally backward classes" of India.  Who
               was the Prime Minister at that time?`,
               ["Vishwanath Pratap Singh", "Morarji Desai", "Rajiv Gandhi",
                "Chandra Sekhar", "P V Narasimha Rao", "I K Gujral"], 1),

           new QuestionMCQ(`Which Prime Minister of India implemented the
               Mandal Commission report?`, ["Vishwanath Pratap Singh",
               "Morarji Desai", "Rajiv Gandhi", "Chandra Sekhar",
               "P V Narasimha Rao"], 0),

           new QuestionMCQ(`Mandal Commission recommended job reservations for
               Socially and Educationally Backward Classes (SEBC).  How much
               percentage was recommended?`,
               ["27%", "18%", "22%", "49%", "24%"], 0),

           new QuestionMCQ(`When did Mandal Commission submit its report to the
               Government of India?`, ["31-Dec-1980", "01-Dec-1985",
               "13-Aug-1990", "17-July-1979"], 0)
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

