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

class LiyClass6MathsKnowingYourNumbersQB extends QuestionBank {
   constructor() {
       super();
       this.mQuestionArray = [
	   new QuestionFIB(`How many lakhs make a million?`, 10),
	   new QuestionFIB(`How many millions make a crore?`, 10),
	   new QuestionFIB(`How many lakhs make a crore?`, 100),
	   new QuestionFIB(`How many millions make a billion?`, 1000),
	   new QuestionFIB(`How many centimetres make a kilometer?`, 100000),
	   new QuestionFIB(`How many millimetres make a kilometer?`, 1000000),
	   new QuestionFIB(`Population of Salem was 2,35,471 in the year 1991.
               In the year 2001 it was found to be increased by 72,958.  What
               was the population of the city in 2001?`, 308429),
           new QuestionFIB(`The town newspaper is published every day. One copy
               has 12 pages. Everyday 11,980 copies are printed. How many total
               pages are printed everyday?`, 143760),
           new QuestionFIB(`The number of sheets of paper available for making
               notebooks is 75,000. Each sheet makes 8 pages of a notebook.
               Each notebook contains 200 pages. How many notebooks can be made
               from the paper available?`, 3000),
           new QuestionFIB(`A book exhibition was held for four days in a
               school. The number of tickets sold at the counter on the first,
               second, third and final day was respectively 1094, 1812, 2050
               and 2751. Find the total number of tickets sold on all the four
               days.`, 7707),
           new QuestionFIB(`Shekhar is a famous cricket player. He has so far
               scored 6980 runs in test matches.  He wishes to complete 10,000
               runs. How many more runs does he need?`, 3020),
           new QuestionFIB(`In an election, the successful candidate registered
               5,77,500 votes and his nearest rival secured 3,48,700 votes. By
               what margin did the successful candidate win the election?`,
               228800),
           new QuestionFIB(`Kirti bookstore sold books worth Rs. 2,85,891/- in
               the first week of June and books worth Rs. 4,00,768/- in the
               second week of the month. How much was the sale for the two weeks
               together?`, 686659),
           new QuestionFIB(`Find the difference between the greatest and the
               least 5-digit number that can be written using the digits 6, 2,
               7, 4, 3 each only once.`, 52965),
           new QuestionFIB(`A machine, on an average, manufactures 2,825 screws
               a day. How many screws did it produce in the month of January
               2006?`, 87575),
           new QuestionFIB(`A merchant had Rs. 78,592/- with her. She placed an
               order for purchasing 40 radio sets at Rs. 1200/- each. How much
               money will remain with her after the purchase?`, 30592),
           new QuestionFIB(`A student multiplied 7236 by 65 instead of
               multiplying by 56. By how much was his answer greater than the
               correct answer?`, 65124),
           new QuestionFIB(`To stitch a shirt, 2 m 15 cm cloth is needed. Out of
               40 m cloth, how many shirts can be stitched?`, 18),
           new QuestionFIB(`Medicine is packed in boxes, each weighing 4 kg
               500g. How many such boxes can be loaded in a van which cannot
               carry beyond 800 kg?`, 177),
           new QuestionFIB(`The distance between the school and a student’s
               house is 1 km 875 m. Everyday she walks both ways. Find the
               total distance (in metres) covered by her in six days.`, 22500),
           new QuestionFIB(`A vessel has 4 litres and 500 ml of curd. In how
               many glasses, each of 25 ml capacity, can it be filled?`, 180),
           new QuestionFIB(`Estimate the value of 5290 + 17986`, 23000),
           new QuestionFIB(`Estimate the value of 5673 - 436`, 5300),
           new QuestionFIB(`Estimate the value of 19 &times 78`, 1600),
           new QuestionFIB(`Estimate the value of 81 &times 479`, 40000),
           new QuestionFIB(`Estimate the product: 578 &times 161`, 120000),
           new QuestionFIB(`Estimate the product: 1291 &times 592`, 780000),
           new QuestionFIB(`What is the Roman numeral for 69?`, "LXIX"),
           new QuestionFIB(`What is the Roman numeral for 98?`, "XCVIII"),
           new QuestionFIB(`What is the Roman numeral for 900?`, "CM"),
           new QuestionFIB(`What is the Roman numeral for 600?`, "DC")
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

