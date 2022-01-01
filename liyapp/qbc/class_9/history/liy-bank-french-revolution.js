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

class LiyClass9FrenchRevolutionQB extends QuestionBank {
   constructor() {
       super();
       this.mQuestionArray = [
           new QuestionMCQ(`What was the main idea of the book <i>Two Treatises
               of Government</i>?`,
               [`Refute the doctrine of the divine and absolute right of the
                 monarch`,
                `Propose a form of government based on a social contract
                 between people and their representatives.`,
                `Propose a division of power within the government between
                 the legislative, the executive and the judiciary.`,
                `Argue that civil society was founded on a divinely sanctioned
                 patriarchalism.`], 0),

           new QuestionMCQ(`Who is the author of <i>Two Treatises of
               Government</i>?`,
               ["John Locke", "Jean Jacques Rousseau", "Montesquieu",
                "Georges Danton", "Maximilian Robespierre"], 0),

           new QuestionMCQ(`Tithe is a tax levied by: `, ["The Church",
               "The Nobility", "The State", "Third Estate"], 0),
           new QuestionMCQ(`Which of the following is false?`,
               [`The nobles enjoyed feudal privileges, which included feudal
                dues, which they extracted from the peasants.`,
                `The Church extracted its share of taxes called tithes from the
                peasants.`,
                `The State collected direct tax called taille and a number of
                 indirect taxes which were levied on articles of everyday
                 consumption like salt or tobacco`,
                `Merchants were obliged to render services to the lord - to work
                 in his house and fields - to serve in the army or to
                 participate in building roads.`], 3),
           new QuestionMCQ(`French society in the 18th century was divided into
               three estates. Who constituted the first estate?`,
               ["Clergy", "Nobility", "Merchants", "Lawyers", "Peasants"], 0),
           new QuestionMCQ(`French society in the 18th century was divided into
               three estates. Who constituted the second estate?`,
               ["Clergy", "Nobility", "Merchants", "Lawyers", "Peasants"], 1),
           new QuestionMCQ(`French society in the 18th century was divided into
               three estates. Who constituted the third estate?`,
               ["Big businessmen, Peasants, Lawyers, Clergy",
                "Merchants, Nobility, Servants, Landless Labour",
                "Big businessmen, Merchants, Lawyers, Court officials",
                "Clergy, Small peasants, Landless Labour, Servants"], 2),
           new QuestionMCQ(`French society in the 18th century was divided into
               three estates.  Members of which estates paid taxes?`,
               ["Third estate", "First estate", "Second estate",
                   "First and Second estates", "Second and Third estates",
                   "First, Second and Third estates"], 0),
           new QuestionFIB(`What was the currency of France that was
               discontinued in the year 1794?`, "livre"),
           new QuestionMCQ(`The Bastille was a fortress in Paris, known
               formally as the Bastille Saint-Antoine. It played an important
               role in the internal conflicts of France and for most of its
               history was used as a state prison by the kings of France. When
               did the Storming of the Bastille happen?`, ["14 July 1789",
               "17 July 1889", "15 Aug 1920", "20 Jun 1689"], 0)];
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

