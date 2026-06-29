export function decodedResistorValue(sequence: string[]) {
	const values = sequence.map((color) => COLORS.indexOf(color));
	var color_code: number = 0;
	var zeroes: number = 10 ** values[2];

	for (let i = 0; i < COLORS.length; i++) {
		if (sequence[0] === COLORS[i]) {
			color_code += i * 10;
		}
	}

	for (let i = 0; i < COLORS.length; i++) {
		if (sequence[1] === COLORS[i]) {
			color_code += i;
		}
	}

	let resistance_value = color_code * zeroes;

	if (values[2] >= 9) {
		return `${resistance_value / 1000000000} gigaohms`;
	} else if (values[2] >= 6) {
		return `${resistance_value / 1000000} megaohms`;
	} else if (values[2] >= 2) {
		return `${resistance_value / 1000} kiloohms`;
	} else if (values[2] < 2) {
		return `${resistance_value} ohms`;
	} else {
		return `${resistance_value} ohms`;
	}
}

export const COLORS = [
	"black",
	"brown",
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"violet",
	"grey",
	"white",
];
