class SampleQSet extends QSet {
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
];
   }
   getQstList() { return this.qst_bank; }
}
