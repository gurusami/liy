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

class C9AtomicStructure extends QuestionBank {

   constructor() {
       super();
       this.mLastUpdated = `08-Jan-2022`;

       const mtf_1 = new QuestionMTF(
               ["Electron", "Proton", "Neutron", "Nucleus"],
               ["J J Thomson", "E Goldstein", "J Chadwick", "Rutherford"]);

       this.mQuestionArray = [

           new QuestionFIB(`If bromine atom is available in the form of, say,
               two isotopes <sub>35</sub>Br<sup>70</sup> (49.7%) and
               <sub>35</sub>Br<sup>81</sup> (50.3%), calculate the average
               atomic mass of bromine atom. (upto 3 decimal places)`, "80.006"),

           mtf_1.getMCQ(),

           new QuestionMCQ(`Rutherford’s alpha-particle scattering experiment
               was responsible for the discovery of:`,
               ["Atomic Nucleus", "Proton", "Electron", "Neutron"], 0),

           new QuestionMCQ(`Isotopes of an element have:`, 
               ["the same physical properties",
                "different chemical properties",
                "different number of neutrons",
                "different atomic numbers"], 2),

           new QuestionFIB(`What is the name given to atoms of different
               elements with different atomic numbers, but having the same mass
               number?`, "isobars"),

           new QuestionFIB(`An isotope of which element is used as a fuel in
               nuclear reactors?`, "Uranium"),

           new QuestionFIB(`An isotope of which element is used in the
               treatment of cancer?`, "Cobalt"),

           new QuestionFIB(`An isotope of which element is used in the
               treatment of goitre?`, "Iodine"),

           new QuestionFIB(`What is the valency of Hydrogen?`, 1),
           new QuestionFIB(`What is the valency of Helium?`, 0),
           new QuestionFIB(`What is the valency of Neon?`, 0),
           new QuestionFIB(`What is the valency of Argon?`, 0),
           new QuestionFIB(`How many protons does an Hydrogen atom have?`, 1),
           new QuestionFIB(`How many electrons does an Hydrogen atom have?`, 1),
           new QuestionFIB(`How many neutrons does an Hydrogen atom have?`, 0),

           new QuestionFIB(`If an atom has 8 electrons in the outermost shell,
               then what is its valency?`, 0),

           new QuestionFIB(`If K and L shells are full, then what would be the
               total number of electrons in the atom?`, 10),

           new QuestionFIB(`The distribution of electrons into different orbits
               of an atom was suggested by Bohr and Bury. What is the maximum
               number of electrons allowed in the outermost shell of an atom?`,
               8),

           new QuestionFIB(`What is the maximum number of electrons in the
               K-shell?`, 2),

           new QuestionFIB(`What is the maximum number of electrons in the
               L-shell?`, 8),

           new QuestionFIB(`What is the maximum number of electrons in the
               M-shell?`, 18),

           new QuestionFIB(`What is the maximum number of electrons in the
               N-shell?`, 32),

           new QuestionMCQ(`Who discovered the subatomic particle neutrons?`,
               ["J Chadwick", "J J Thomson", "E Rutherford", "E Goldstein",
               "Neils Bohr"], 0),

           new QuestionMCQ(`Who wrote the following books:
               <ul>
                   <li>The Theory of Spectra and Atomic Constitution</li>
                   <li>Atomic Theory</li>
                   <li>The Description of Nature</li>
               </ul>`,
               ["Ernest Rutherford", "J J Thomson", "John Dalton",
                "J Chadwick", "Neils Bohr"], 4),

           new QuestionMCQ(`Who is known as the <i>Father of Nuclear
               Physics</i>?`,
               ["Ernest Rutherford", "J J Thomson", "John Dalton",
                "J Chadwick", "Neils Bohr"], 0),

           new QuestionMCQ(`Who said the following <i>"This result was almost as
               incredible as if you fire a 15-inch shell at a piece of tissue
               paper and it comes back and hits you."</i>?`,
               ["Ernest Rutherford", "J J Thomson", "John Dalton",
                "J Chadwick", "Neils Bohr"], 0),

           new QuestionMCQ(`Who designed an experiment involving fast moving
               alpha (&alpha;) particles falling on a thin gold foil?`,
               ["Ernest Rutherford", "J J Thomson", "John Dalton",
                "J Chadwick", "Neils Bohr"], 0),

           new QuestionMCQ(`Who proposed a model of an atom similar to a
               watermelon?  The positive charge in the atom is spread all over
               like the red edible part of the watermelon, while the electrons
               are studded in the positively charged sphere, like the seeds in
               the watermelon.`, ["J J Thomson", "E Rutherford", "John Dalton",
               "J Chadwick", "Neils Bohr"], 0),

           new QuestionMCQ(`Who proposed a model of an atom similar to that of
               a Christmas pudding? The electrons were like currants (dry
               fruits) in a spherical Christmas pudding.`, ["J J Thomson",
               "E Rutherford", "John Dalton", "J Chadwick", "Neils Bohr"], 0),

           new QuestionMCQ(`Who was awarded the Nobel prize in Physics in 1906
               for his work on the discovery of electrons?`, ["J J Thomson",
               "E Goldstein", "John Dalton", "E Rutherford", "Neils Bohr"], 0)
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

