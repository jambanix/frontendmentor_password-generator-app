export const generatePassword = ({
  length,
  includeUpperCase,
  includeLowerCase,
  includeNumbers,
  includeSymbols
}) => {

  // return random number between min and max
  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // shuffle base chars for better randomness
  const shuffle = (base) => [...base].sort(() => Math.random() - 0.5).join("");

  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseLetters = lowercaseLetters.toUpperCase();
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+=";

  let baseChars = "";
  let out = "";

  if (includeUpperCase) baseChars += uppercaseLetters;
  if (includeLowerCase) baseChars += lowercaseLetters;
  if (includeNumbers) baseChars += numbers;
  if (includeSymbols) baseChars += symbols;

  baseChars = shuffle(baseChars);
  for (let x = 0; x < length; x++) {
    const index = randomNum(0, baseChars.length - 1);
    out += baseChars[index];
  }

  return out;

};
