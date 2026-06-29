export function isLeap(year: number) {
	var leap_year = false;

  if ((year % 4) === 0) {
    if ((year % 100) === 0) {
      if ((year % 400) === 0) {
        leap_year = true;
      } else {
        leap_year = false
      }
    } else {
      leap_year = true;
    }
  }
  
  return leap_year;
}
