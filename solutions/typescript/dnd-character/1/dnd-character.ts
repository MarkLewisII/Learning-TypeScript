export class DnDCharacter {
	public static generateAbilityScore(): number {
		var abilityScore: number = 0;
		var rolls: number[] = [];

		for (let i = 0; i < 4; i++) {
			rolls[i] = ((Math.random() * 10) % 6) + 1;
		}

		rolls.sort((a, b) => a - b);

		for (let i = 0; i < 3; i++) {
			abilityScore += rolls[i];
		}

		return abilityScore;
	}

	public static getModifierFor(abilityValue: number): number {
		return abilityValue === 10 ? 0 : Math.floor((abilityValue - 10) / 2);
	}

	public strength: number = DnDCharacter.generateAbilityScore();
	public constitution: number = DnDCharacter.generateAbilityScore();
	public intelligence: number = DnDCharacter.generateAbilityScore();
	public wisdom: number = DnDCharacter.generateAbilityScore();
	public dexterity: number = DnDCharacter.generateAbilityScore();
	public charisma: number = DnDCharacter.generateAbilityScore();
	public hitpoints: number = 10 + DnDCharacter.getModifierFor(this.constitution);
}
