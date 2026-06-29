export function toRna(dna_string: string) {
  var dna_string_split: string[] = dna_string.split("");
  var rna_string: string[] = [];
  
  if (dna_string.includes("XXX")) {
    throw new Error("Invalid input DNA.");
  }

  for (let i = 0; i < dna_string_split.length; i++) {
    switch (dna_string_split[i]) {
      case 'G':
        rna_string[i] = 'C';
        break;
      case 'C':
        rna_string[i] = 'G';
        break;
      case 'T':
        rna_string[i] = 'A';
        break;
      case 'A':
        rna_string[i] = 'U';
        break;
      default:
        throw new Error("Invalid input DNA.");
    }
  }

  return rna_string.join('');
}
