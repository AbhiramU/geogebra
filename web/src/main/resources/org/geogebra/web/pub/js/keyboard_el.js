/* Greek */
if (!window.__GGB__keyboard) {
	__GGB__keyboard = {};
}

__GGB__keyboard.el = {}

__GGB__keyboard.el.lowerCase = {

		// \\varphi
		"B0_0": "\u03D5",
		
		"B0_1": "\u03C2",
		"B0_2": "\u03B5",
		"B0_3": "\u03C1",
		"B0_4": "\u03C4",
		"B0_5": "\u03C5",
		"B0_6": "\u03B8",
		"B0_7": "\u03B9",
		"B0_8": "\u03BF",
		"B0_9": "\u03C0",
		"B0_10": "",
		"B0_11": "",
		
		"B1_0": "\u03B1",
		"B1_1": "\u03C3",
		"B1_2": "\u03B4",
		"B1_3": "\u03C6",
		"B1_4": "\u03B3",
		"B1_5": "\u03B7",
		"B1_6": "\u03BE",
		"B1_7": "\u03BA",
		"B1_8": "\u03BB",
		"B1_9": "",
		"B1_10": "",
		"B1_11": "",
	
		"B2_0": "",
		"B2_1": "\u03B6",
		"B2_2": "\u03C7",
		"B2_3": "\u03C8",
		"B2_4": "\u03C9",
		"B2_5": "\u03B2",
		"B2_6": "\u03BD",
		"B2_7": "\u03BC",
		"B2_8": "'",
		"B2_9": "",
		"B2_10": "",
}


__GGB__keyboard.el.shiftDown = {
		// these two are lower-case
		// but needed to stop the keys jumping around
		"B0_0": "\u03A6",//same for varphi and phi, see B1_3
		"B0_1": "\u03A3",//same for varsigma and sigma, see B1_1
		
		"B0_2": "\u0395",
		"B0_3": "\u03A1",
		"B0_4": "\u03A4",
		"B0_5": "\u03A5",
		"B0_6": "\u0398",
		"B0_7": "\u0399",
		"B0_8": "\u039F",
		"B0_9": "\u03A0",
		"B0_10": "",
		"B0_11": "",
		
		"B1_0": "\u0391",
		"B1_1": "\u03A3",
		"B1_2": "\u0394",
		"B1_3": "\u03A6",
		"B1_4": "\u0393",
		"B1_5": "\u0397",
		"B1_6": "\u039E",
		"B1_7": "\u039A",
		"B1_8": "\u039B",
		"B1_9": "",
		"B1_10": "",
		"B1_11": "",
	
		"B2_0": "",
		"B2_1": "\u0396",
		"B2_2": "\u03A7",
		"B2_3": "\u03A8",
		"B2_4": "\u03A9",
		"B2_5": "\u0392",
		"B2_6": "\u039D",
		"B2_7": "\u039C",
		"B2_8": "'",
		"B2_9": "",
		"B2_10": "",
}