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

class LiyClass9BiologyWhyIllQB extends QuestionBank {
   constructor() {
       super();
       this.mQuestionArray = [
           new QuestionMCQ(`Which of the following disease is NOT caused by
               bacteria?`, ["Kala-azar", "Typhoid", "Cholera", "Tuberculosis",
               "Anthrax"], 0),
           new QuestionMCQ(`Which of the following is NOT a disease but a
               sign?`, ["Jaundice", "AIDS", "Malaria", "Typhoid",
               "Elephantiasis", "Tuberculosis"], 0),
           new QuestionMCQ(`Which of the following disease is caused by
               protozoan microbes?`, ["Kala-azar", "Typhoid", "Cholera",
               "Dengue Fever", "AIDS", "Anthrax"], 0),
           new QuestionMCQ(`Which of the following disease is caused by
               protozoan microbes?`, ["Malaria", "Typhoid", "Cholera",
               "Dengue Fever", "AIDS", "Anthrax"], 0),
           new QuestionMCQ(`Which of the following disease is caused by
               bacteria?`, ["Anthrax", "Malaria", "Influenza", "AIDS",
               "Kala-azar"], 0),
           new QuestionFIB(`What is the expansion of AIDS?`,
               `Acquired Immuno Deficiency Syndrome`),
           new QuestionMCQ(`Which of the following is not an infectious
               disease?`,
               ["Cancers caused by genetic defects", "Peptic Ulcers",
                "Malaria", "AIDS", "Influenza"], 0),
           new QuestionMCQ(`Two Australians, Robin Warren and Barry Marshall,
               discovered that a bacterium, <i>Helicobacter pylori</i>, was
               responsible for peptic ulcers.  When did they receive Nobel prize
               for physiology and medicine?`,
               ["2005", "2000", "2010", "2015"], 0),
           new QuestionMCQ(`Peptic ulcers affect which part of the body?`,
               ["Stomach and Duodenum", "Heart", "Lungs", "Brain",
                "Urinary Tract"], 0),
           new QuestionMCQ(`Peptic ulcers are caused by:`,
               ["Bacteria", "Stressful Life", "Virus", "Fungi"], 0),
           new QuestionMCQ(`Choose the incorrect statement:`,
               [`Tuberculosis of the lungs is an acute disease, which gets
                 cured within a few weeks and has no lasting effects on our
                 health`,
                `All diseases will have immediate and contributory causes`,
                `Chronic diseases have very drastic long-term effects on
                 people's health as compared to acute diseases`,
                `Most diseases will have many causes, rather than a single
                 cause`], 0),
           new QuestionMCQ(`Choose the incorrect statement:`,
               ["A headache is most likely caused by meningitis",
                "Chronic diseases last for long duration of time",
                "Elephantiasis is an example of chronic disease",
                "Common cold is an example of acute disease",
                "Acute diseases last for short duration of time"], 0),
           new QuestionMCQ(`Elephantiasis is an example of acute disease`,
               ["True", "False"], 1),
           new QuestionMCQ(`Common cold is an example of an acute disease`,
               ["True", "False"], 0),
           new QuestionMCQ(`Tuberculosis affects which organ of our body?`,
               ["Brain", "Kidney", "Heart", "Lungs", "Stomach"], 3),
           new QuestionMCQ(`Meningitis affects which organ of our body?`,
               ["Brain", "Kidney", "Heart", "Lungs", "Stomach"], 0)];
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

