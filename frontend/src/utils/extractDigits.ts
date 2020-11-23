export const extractNumbers = (string: string): [string, number] => {
  const digitsIndex = string.search(/\d/g);
  const textPart = string.slice(0, digitsIndex);
  const digitsPart = parseInt(string.slice(digitsIndex));
  return [textPart, digitsPart];
};
