/*******************************************************************************

Learn it Yourself (LiY) - Software to Promote Self Study

Copyright (C) 2022, Annamalai Gurusami <annamalai.gurusami@gmail.com>

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

class ChemicalElement {
   constructor(name, symbol, atomicNumber, massNumber) {
       this.mName = name;
       this.mSymbol = symbol;
       this.mAtomicNumber = atomicNumber;
       this.mMassNumber = massNumber;
   }

   getName() { return this.mName; }
   getSymbol() { return this.mSymbol; }
   getAtomicNumber() { return this.mAtomicNumber; }
   getMassNumber() { return this.mMassNumber; }
}

class PeriodicTable {
   constructor() {
       this.mPT = [
           new ChemicalElement("Hydrogen", "H", 1, 1),
           new ChemicalElement("Helium", "He", 2, 4),
           new ChemicalElement("Lithium", "Li", 3, 7),
           new ChemicalElement("Beryllium", "Be", 4, 9),
           new ChemicalElement("Boron", "B", 5, 10),
           new ChemicalElement("Carbon", "C", 6, 12),
           new ChemicalElement("Nitrogen", "N", 7, 14),
           new ChemicalElement("Oxygen", "O", 8, 16),
           new ChemicalElement("Flourine", "F", 9, 19),
           new ChemicalElement("Neon", "Ne", 10, 20),
           new ChemicalElement("Sodium", "Na", 11, 23),
           new ChemicalElement("Magnesium", "Mg", 12, 24),
           new ChemicalElement("Aluminium", "Al", 13, 27),
           new ChemicalElement("Silicon", "Si", 14, 28),
           new ChemicalElement("Phosphorus", "P", 15, 31),
           new ChemicalElement("Sulphur", "S", 16, 32),
           new ChemicalElement("Chlorine", "Cl", 17, 35),
           new ChemicalElement("Argon", "Ar", 18, 40),
           new ChemicalElement("Potassium", "K", 19, 39),
           new ChemicalElement("Calcium", "Ca", 20, 40),
           new ChemicalElement("Scandium", "Sc", 21, 45),
           new ChemicalElement("Titanium", "Ti", 22, 48),
           new ChemicalElement("Vanadium", "V", 23, 51),
           new ChemicalElement("Chromium", "Cr", 24, 52),
           new ChemicalElement("Manganese", "Mn", 25, 55),
           new ChemicalElement("Iron", "Fe", 26, 56),
           new ChemicalElement("Cobalt", "Co", 27, 59),
           new ChemicalElement("Nickel", "Ni", 28, 58),
           new ChemicalElement("Copper", "Cu", 29, 64),
           new ChemicalElement("Zinc", "Zn", 30, 65),
           new ChemicalElement("Gallium", "Ga", 31, 70),
           new ChemicalElement("Germanium", "Ge", 32, 73),
           new ChemicalElement("Arsenic", "As", 33, 75),
           new ChemicalElement("Selenium", "Se", 34, 79),
           new ChemicalElement("Bromine", "Br", 35, 80),
           new ChemicalElement("Krypton", "Kr", 36, 84),
           new ChemicalElement("Rubidium", "Rb", 37, 85),
           new ChemicalElement("Strontium", "Sr", 38, 88),
           new ChemicalElement("Yttrium", "Y", 39, 89),
           new ChemicalElement("Zirconium", "Zr", 40, 91),
           new ChemicalElement("Niobium", "Nb", 41, 93),
           new ChemicalElement("Molybdenum", "Mo", 42, 96),
           new ChemicalElement("Technetium", "Tc", 43, 98),
           new ChemicalElement("Ruthenium", "Ru", 44, 101),
           new ChemicalElement("Rhodium", "Rh", 45, 103),
           new ChemicalElement("Palladium", "Pd", 46, 106),
           new ChemicalElement("Silver", "Ag", 47, 108),
           new ChemicalElement("Cadmium", "Cd", 48, 112),
           new ChemicalElement("Indium", "In", 49, 115),
           new ChemicalElement("Tin", "Sn", 50, 119),
           new ChemicalElement("Antimony", "Sb", 51, 122),
           new ChemicalElement("Tellurium", "Te", 52, 128),
           new ChemicalElement("Iodine", "I", 53, 127),
           new ChemicalElement("Xenon", "Xe", 54, 131),
           new ChemicalElement("Cesium", "Cs", 55, 133),
           new ChemicalElement("Barium", "Ba", 56, 137),
           new ChemicalElement("Lanthanum", "La", 57, 139),
           new ChemicalElement("Cerium", "Ce", 58, 140),
           new ChemicalElement("Praseodymium", "Pr", 59, 141),
           new ChemicalElement("Neodymium", "Nd", 60, 144),
           new ChemicalElement("Promethium", "Pm", 61, 145),
           new ChemicalElement("Samarium", "Sm", 62, 150),
           new ChemicalElement("Europium", "Eu", 63, 152),
           new ChemicalElement("Gadolinium", "Gd", 64, 157),
           new ChemicalElement("Terbium", "Tb", 65, 159),
           new ChemicalElement("Dysprosium", "Dy", 66, 163),
           new ChemicalElement("Holmium", "Ho", 67, 165),
           new ChemicalElement("Erbium", "Er", 68, 167),
           new ChemicalElement("Thulium", "Tm" , 69, 169),
           new ChemicalElement("Ytterbium", "Yb", 70, 173),
           new ChemicalElement("Lutetium", "Lu", 71, 175),
           new ChemicalElement("Hafnium", "Hf", 72, 178),
           new ChemicalElement("Tantalum", "Ta", 73, 181),
           new ChemicalElement("Tungsten", "W", 74, 184),
           new ChemicalElement("Rhenium", "Re", 75, 186),
           new ChemicalElement("Osmium", "Os", 76, 190),
           new ChemicalElement("Iridium", "Ir", 77, 192),
           new ChemicalElement("Platinum", "Pt", 78, 195),
           new ChemicalElement("Gold", "Au", 79, 197),
           new ChemicalElement("Mercury", "Hg", 80, 201),
           new ChemicalElement("Thallium", "Tl", 81, 204),
           new ChemicalElement("Lead", "Pb", 82, 207),
           new ChemicalElement("Bismuth", "Bi", 83, 209),
           new ChemicalElement("Polonium", "Po", 84, 209),
           new ChemicalElement("Astatine", "At", 85, 210),
           new ChemicalElement("Radon", "Rn", 86, 222),
           new ChemicalElement("Francium", "Fr", 87, 223),
           new ChemicalElement("Radium", "Ra", 88, 226),
           new ChemicalElement("Actinium", "Ac", 89, 227),
           new ChemicalElement("Thorium", "Th", 90, 232),
           new ChemicalElement("Protactinium", "Pa", 91, 231),
           new ChemicalElement("Uranium", "U" , 92, 238),
           new ChemicalElement("Neptunium", "Np" , 93, 237),
           new ChemicalElement("Plutonium", "Pu", 94, 244),
           new ChemicalElement("Americium", "Am", 95, 243),
           new ChemicalElement("Curium", "Cm", 96, 247),
           new ChemicalElement("Berkelium", "Bk", 97, 247 ),
           new ChemicalElement("Californium", "Cf" , 98, 251),
           new ChemicalElement("Einsteinium","Es" , 99, 252),
           new ChemicalElement("Fermium", "Fm", 100, 257),
           new ChemicalElement("Mendelevium", "Md", 101, 258),
           new ChemicalElement("Nobelium", "No", 102, 259),
           new ChemicalElement("Lawrencium", "Lr" , 103, 266),
           new ChemicalElement("Rutherfordium", "Rf", 104, 267),
           new ChemicalElement("Dubnium", "Db", 105, 268),
           new ChemicalElement("Seaborgium", "Sg", 106, 269),
           new ChemicalElement("Bohrium", "Bh" , 107, 270),
           new ChemicalElement("Hassium", "Hs", 108, 269),
           new ChemicalElement("Meitnerium", "Mt", 109, 278),
           new ChemicalElement("Darmstadtium", "Ds", 110, 281),
           new ChemicalElement("Roentgenium", "Rg" , 111, 282),
           new ChemicalElement("Copernicium", "Cn", 112, 285),
           new ChemicalElement("Nihonium", "Nh", 113, 286),
           new ChemicalElement("Flerovium", "Fl", 114, 289),
           new ChemicalElement("Moscovium", "Mc", 115, 290),
           new ChemicalElement("Livermorium", "Lv", 116, 293),
           new ChemicalElement("Tennessine", "Ts", 117, 294),
           new ChemicalElement("Oganesson", "Og", 118, 294),
       ];
   }

   getPT() {
       return this.mPT;
   }
}

class ElementSymbols extends QuestionBank {
   constructor() {
       super();
       this.mLastUpdated = "10-Jan-2022";
       this.mTable =  new PeriodicTable();
       let pt = this.mTable.getPT();
       let dup = new Array();
       for (var i = 0; i < 30; ++i) {
           let j = LiY.ryRandom(0, pt.length, dup);
           let elem = pt[j];
           let quest = `What is the symbol of the chemical element ${elem.getName()}?`
           let ans = elem.getSymbol();
           this.mQuestionArray.push(new QuestionFIB(quest, ans));
       }
   }
}

class SymbolToName extends QuestionBank {
   constructor() {
       super();
       this.mLastUpdated = "10-Jan-2022";
       this.mTable =  new PeriodicTable();
       let pt = this.mTable.getPT();
       let dup = new Array();
       for (var i = 0; i < 30; ++i) {
           let j = LiY.ryRandom(0, pt.length, dup);
           let elem = pt[j];
           let quest = `What is the name of the chemical element with symbol <i>${elem.getSymbol()}</i>?`
           let ans = elem.getName();
           this.mQuestionArray.push(new QuestionFIB(quest, ans));
       }
   }
}

class CAtomicNumber extends QuestionBank {
   constructor() {
       super();
       this.mLastUpdated = "10-Jan-2022";
       this.mTable =  new PeriodicTable();
       let pt = this.mTable.getPT();
       let dup = new Array();
       for (var i = 0; i < 30; ++i) {
           let j = LiY.ryRandom(0, pt.length, dup);
           let elem = pt[j];
           let quest = `What is the atomic number of the chemical element ${elem.getName()} (${elem.getSymbol()})?`
           let ans = elem.getAtomicNumber();
           this.mQuestionArray.push(new QuestionFIB(quest, ans));
       }
   }
}

class CMassNumber extends QuestionBank {
   constructor() {
       super();
       this.mLastUpdated = "10-Jan-2022";
       this.mTable =  new PeriodicTable();
       let pt = this.mTable.getPT();
       let dup = new Array();
       for (var i = 0; i < 30; ++i) {
           let j = LiY.ryRandom(0, pt.length, dup);
           let elem = pt[j];
           let quest = `What is the mass number of the chemical element ${elem.getName()} (${elem.getSymbol()})?`
           let ans = elem.getMassNumber();
           this.mQuestionArray.push(new QuestionFIB(quest, ans));
       }
   }
}
