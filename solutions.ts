// Problem 1
const multiplyValue = (value: number, multiplier?: number): number => {
  return multiplier !== undefined ? value * multiplier : value * 2;
};