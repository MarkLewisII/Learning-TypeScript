export function decodedValue(sequence: string[]) {
  var color_code:number = 0;

  for (let i = 0; i < COLORS.length; i++) {
    if (sequence[0] === COLORS[i]) {
      color_code += i*10;
    }
  }

  for (let i = 0; i < COLORS.length; i++) {
    if (sequence[1] === COLORS[i]) {
      color_code += i;
    }
  }

  return color_code;
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
