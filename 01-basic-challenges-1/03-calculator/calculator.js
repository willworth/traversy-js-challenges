function calculator(a, b, operator) {
  // Check if a and b are numbers
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both operands must be numbers.");
  }
  // duplicated below, but kept for reference
  if (!["+", "-", "*", "/"].includes(operator)) {
    throw new Error("invalid operator");
  }
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b !== 0) {
        return a / b;
      } else {
        throw new Error("Division by zero is not allowed.");
      }
    default:
      throw new Error("Invalid operator provided.");
  }
}

module.exports = calculator;
