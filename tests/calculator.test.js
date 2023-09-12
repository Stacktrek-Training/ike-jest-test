const calculator = require("./../src/calculator.js");

describe("calculator", () => {
    test("adds two numbers", () => {
        expect(calculator(1, 2, "+")).toBe(3);
    });

    test("subtracts two numbers", () => {
        expect(calculator(5, 3, "-")).toBe(2);
    });

    test("multiplies two numbers", () => {
        expect(calculator(3, 4, "*")).toBe(12);
    });

    test("divides two numbers", () => {
        expect(calculator(12, 3, "/")).toBe(4);
    });

    test("returns error for invalid operator", () => {
        expect(calculator(1, 2, "%")).toBe("Invalid Operator");
    });
});
