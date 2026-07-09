export function score(x: unknown, y: unknown): unknown {
	return Math.sqrt(Number(x) ** 2 + Number(y) ** 2) <= 1? 10: Math.sqrt(Number(x) ** 2 + Number(y) ** 2) <= 5 ? 5	: Math.sqrt(Number(x) ** 2 + Number(y) ** 2) <= 10 ? 1 : 0;
}