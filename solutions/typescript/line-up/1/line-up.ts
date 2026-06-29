export function format(name: string, number: number): unknown {
  // var position = "0th";
  var pos_suffix = "th";
  
  var right_most_digit = Math.abs(number % 10);
  var last_two_digits = Math.abs(number % 100);

  switch (right_most_digit) {
    case 1:
      // position = `${number}st`;
      pos_suffix = "st";
      break;
    case 2:
      // position = `${number}nd`;
      pos_suffix = "nd";
      break;
    case 3:
      // position = `${number}rd`;
      pos_suffix = "rd";
      break;
  }

  if ((last_two_digits === 11) || (last_two_digits === 12) || (last_two_digits === 13)) {
    // position = `${number}th`;
    pos_suffix = "th"
  }

  return `${name}, you are the ${number}${pos_suffix} customer we serve today. Thank you!`;
}
