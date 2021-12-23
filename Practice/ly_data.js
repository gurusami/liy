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

/******************************************************************************/
/* Class 9 - Chemistry - SI Units */

class Class9_Chemistry_SIUnits_QSet extends QSet {
   constructor() {
       super();
       this.qst_bank = [

        /* Question: 1 */
	{ q: "What is the SI Unit of temperature?",
          c: ["Celsius", "Fahrenheit", "Kelvin", "Centigrade"],
          a: 2 }, 

        /* Question: 2 */
	{ q: "What is the SI Unit of length?",
          c: ["kilometer", "meter", "mile", "feet"],
          a: 1 }, 

        /* Question: 3 */
	{ q: "What is the SI Unit of mass?",
          c: ["kilogram", "gram", "pound", "metric tonne"],
          a: 0 }, 

        /* Question: 4 */
	{ q: "What is the SI Unit of weight?",
          c: ["kilogram", "gram", "pound", "newton"],
          a: 3 }, 

        /* Question: 5 */
	{ q: "What is the SI Unit of volume?",
          c: ["litre", "cubic meter", "cubic centimeter", "milli litre"],
          a: 1 }, 

        /* Question: 6 */
	{ q: "What is the SI Unit of density?",
          c: ["gram per litre",
              "kilogram per litre",
              "kilogram per cubic meter",
              "gram per cubic meter"],
          a: 2 }, 

        /* Question: 7 */
	{ q: "What is the SI Unit of pressure?",
          c: ["pascal",
              "pounds per square inch (psi)",
              "bar",
              "standard atmosphere (atm)"],
          a: 0 }, 

        /* Question: 8 */
	{ q: "Unit of pressure, pascal (Pa), is equivalent to?",
          c: ["pounds per square inch (psi)",
              "bar",
              "standard atmosphere (atm)",
              "newton per square meter"],
          a: 3 }, 

        /* Question: 9 */
	{ q: "The pressure of air in atmosphere is called atmospheric pressure. It is equal to:",
          c: ["1.01 &times; 10<sup>5</sup> Pa",
              "1.01 &times; 10<sup>3</sup> psi",
              "10 standard atmosphere (atm)",
              "2.01 &times; 10<sup>5</sup> Pa"],
          a: 0 }, 

        /* Question: 10 */
	{ q: "Convert 1 litres to the SI unit of volume.",
          c: ["1000 mL",
              "1000 cc",
              "1 cubic meter",
              "0.001 m<sup>3</sup>"],
          a: 3 }, 

        /* Question: 11 */
	{ q: "Convert temperature 573K to celsius scale: ",
          c: ["373&deg; C",
              "273&deg; C",
              "300&deg; C",
              "173&deg; C"],
          a: 2 }, 

        /* Question: 12 */
	{ q: "What is the boiling point of water in Kelvin scale?",
          c: ["100&deg; C",
              "373&deg; C",
              "373K",
              "473K",
              "200K"],
          a: 2 }, 

        /* Question: 13 */
	{ q: "What is the SI unit of the amount of substance?",
          c: ["dozen",
              "mole",
              "atomic mass",
              "molecular mass",
              "Avogadro number"],
          a: 1 }, 
];
   }

   getQstList() { return this.qst_bank; }
}

/******************************************************************************/

const is_qset = false;
const is_group = true;
let ly_groups = new Array(5);

class ly_group {
   constructor(gid, pgid, name, title, is_group, qobj) {
       this.gid = gid; /* Group id */
       this.pgid = pgid; /* Parent group id */
       this.name = name; /* Short name of the group. */
       this.title = title; /* Title of the group. */
       this.is_group = is_group; /* If true, it is a group, else it is qset. */
       this.qobj = qobj; /* Derived class of QSet interface. */
   }
};

ly_groups[0] = new ly_group(1, 0, "Sample", "Just for development work",
                            is_qset, new SampleQSet());
ly_groups[1] = new ly_group(2, 0, "Trigonometry", "Basic Trigonometric Ratios",
                            false, new Trigonometry());
ly_groups[2] = new ly_group(3, 0, "Class_9", "Class 9 Standard", is_group,
                            null);
ly_groups[3] = new ly_group(4, 3, "Chemistry", "Chemistry", true, null);
ly_groups[4] = new ly_group(5, 4, "Class9_Chemistry_SIUnits",
                            "Class 9 - Chemistry - SI Units", is_qset,
                            new Class9_Chemistry_SIUnits_QSet());
ly_groups[5] = new ly_group(6, 0, "Dummy", "Dummy", is_group, null);

/******************************************************************************/
