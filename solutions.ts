// Problem 1
const multiplyValue = (value: number, multiplier?: number): number => {
  return multiplier !== undefined ? value * multiplier : value * 2;
};

// Problem 2
const processInput = (input: string | number | boolean): string | number => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
};