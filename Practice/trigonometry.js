const sqrt_2 = `&radic;<span style="text-decoration:overline;">2</span>`;
const sqrt_3 = `&radic;<span style="text-decoration:overline;">3</span>`;

class Trigonometry extends QSet {
   constructor() {
       super();
   
   this.qst_bank = [
	{ q: "What is sin &theta;?",
          c: ["<sup>Opposite</sup>&frasl;<sub>Hypotenuse</sub>",
              "<sup>Adjacent</sup>&frasl;<sub>Hypotenuse</sub>",
              "<sup>Opposite</sup>&frasl;<sub>Adjacent</sub>",
              "<sup>Adjacent</sup>&frasl;<sub>Opposite</sub>"],
          a: 0 }, 

	{ q: "What is cos &theta;?",
          c: ["<sup>Opposite</sup>&frasl;<sub>Hypotenuse</sub>",
              "<sup>Opposite</sup>&frasl;<sub>Adjacent</sub>",
              "<sup>Adjacent</sup>&frasl;<sub>Hypotenuse</sub>",
              "<sup>Adjacent</sup>&frasl;<sub>Opposite</sub>"],
          a: 2 }, 

        /* tan(x) = sin(x)/cos(x) = Opposite/Adjacent. */
	{ q: "What is tan &theta;?",
          c: ["<sup>Opposite</sup>&frasl;<sub>Hypotenuse</sub>",
              "<sup>Opposite</sup>&frasl;<sub>Adjacent</sub>",
              "<sup>Adjacent</sup>&frasl;<sub>Hypotenuse</sub>",
              "<sup>Adjacent</sup>&frasl;<sub>Opposite</sub>"],
          a: 1 }, 

        /* sec(x) = 1/cos(x) = hyp/adj */
	{ q: "What is sec &theta;?",
          c: ["<sup>Opposite</sup>&frasl;<sub>Hypotenuse</sub>",
              "<sup>Opposite</sup>&frasl;<sub>Adjacent</sub>",
              "<sup>Hypotenuse</sup>&frasl;<sub>Adjacent</sub>",
              "<sup>Hypotenuse</sup>&frasl;<sub>Opposite</sub>",
              "<sup>Adjacent</sup>&frasl;<sub>Hypotenuse</sub>",
              "<sup>Adjacent</sup>&frasl;<sub>Opposite</sub>"],
          a: 2 }, 

        /* cosec(x) = 1/sin(x) = hyp/opp */
	{ q: "What is cosec &theta;?",
          c: ["<sup>Opposite</sup>&frasl;<sub>Hypotenuse</sub>",
              "<sup>Opposite</sup>&frasl;<sub>Adjacent</sub>",
              "<sup>Hypotenuse</sup>&frasl;<sub>Adjacent</sub>",
              "<sup>Hypotenuse</sup>&frasl;<sub>Opposite</sub>",
              "<sup>Adjacent</sup>&frasl;<sub>Hypotenuse</sub>",
              "<sup>Adjacent</sup>&frasl;<sub>Opposite</sub>"],
          a: 3 }, 

        /* cot(x) = 1/tan(x) = cos(x)/sin(x) = adj/opp */
	{ q: "What is cot &theta;?",
          c: ["<sup>Opposite</sup>&frasl;<sub>Hypotenuse</sub>",
              "<sup>Opposite</sup>&frasl;<sub>Adjacent</sub>",
              "<sup>Hypotenuse</sup>&frasl;<sub>Adjacent</sub>",
              "<sup>Hypotenuse</sup>&frasl;<sub>Opposite</sub>",
              "<sup>Adjacent</sup>&frasl;<sub>Hypotenuse</sub>",
              "<sup>Adjacent</sup>&frasl;<sub>Opposite</sub>"],
          a: 5 }, 

	{ q: "What is sin 0&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 0 }, 

	{ q: "What is sin 30&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 2 }, 

	{ q: "What is sin 45&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 3 }, 

	{ q: "What is sin 60&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 6 }, 

	{ q: "What is sin 90&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 10 }, 

	{ q: "What is cos 0&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 10 }, 

	{ q: "What is cos 30&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 6 }, 

	{ q: "What is cos 45&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 3 }, 

	{ q: "What is cos 60&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 2 }, 

	{ q: "What is cos 90&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 0 }, 

	{ q: "What is tan 0&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 0 }, 

	{ q: "What is tan 30&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 4 }, 

	{ q: "What is tan 45&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 10 }, 

	{ q: "What is tan 60&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 7 }, 

	{ q: "What is tan 90&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 9 }, 

	{ q: "What is cosec 0&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 9 }, 

	{ q: "What is cosec 30&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 1 }, 

	{ q: "What is cosec 45&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 8 }, 

	{ q: "What is cosec 60&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 5 }, 

	{ q: "What is cosec 90&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 10 }, 

	{ q: "What is sec 0&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 10 }, 

	{ q: "What is sec 30&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 5 }, 

	{ q: "What is sec 45&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 8 }, 

	{ q: "What is sec 60&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 1 }, 

	{ q: "What is sec 90&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 9 }, 

	{ q: "What is cot 0&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 9 }, 

	{ q: "What is cot 30&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 7 }, 

	{ q: "What is cot 45&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 10 }, 

	{ q: "What is cot 60&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 4 }, 

	{ q: "What is cot 90&deg;?",
          c: ["0", // 0
              "2", // 1
              "&frac12;", // 2
              `<sup>1</sup>&frasl;<sub>${sqrt_2}</sub>`, // 3
              `<sup>1</sup>&frasl;<sub>${sqrt_3}</sub>`, // 4
              `<sup>2</sup>&frasl;<sub>${sqrt_3}</sub>`, // 5
              `<sup>${sqrt_3}</span></sup>&frasl;<sub>2</sub>`, // 6
              `${sqrt_3}`, // 7
              `${sqrt_2}`, // 8
              "&infin;", // 9
              "1"], // 10
          a: 0 }, 
];
   }

   getQstList() { return this.qst_bank; }
} /* class Trigonometry */
