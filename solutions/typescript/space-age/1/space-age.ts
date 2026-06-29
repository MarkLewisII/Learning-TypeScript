export function age(planet: string, seconds: number) {
	var seconds_in_a_year_earth: number = 31557600;
	var earth_years: number = seconds / seconds_in_a_year_earth;

	var planet_multiplier: number = 1;

	switch (planet) {
		case "mercury":
			planet_multiplier = 0.2408467;
			break;
		case "venus":
			planet_multiplier = 0.61519726;
			break;
		case "earth":
			planet_multiplier = 1;
			break;
		case "mars":
			planet_multiplier = 1.8808158;
			break;
		case "jupiter":
			planet_multiplier = 11.862615;
			break;
		case "saturn":
			planet_multiplier = 29.447498;
			break;
		case "uranus":
			planet_multiplier = 84.016846;
			break;
		case "neptune":
			planet_multiplier = 164.79132;
			break;
		default:
			throw new Error("Planet not found.");
  }
  
  return Math.round((earth_years / planet_multiplier) * 100) / 100; 
}
