const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", () => {
  describe("SUM", () => {
    it("should return 6 when adding 1.4 and 4.5", () => {
      expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
    });

    it("should return -3 when adding -1.4 and -1.5", () => {
      expect(calculateNumber("SUM", -1.4, -1.5)).to.equal(-2);
    });
  });

  describe("SUBTRACT", () => {
    it("should return -4 when subtracting 1.4 and 4.5", () => {
      expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
    });

    it("should return 2 when subtracting 3.7 and 2.4", () => {
      expect(calculateNumber("SUBTRACT", 3.7, 2.4)).to.equal(2);
    });
  });

  describe("DIVIDE", () => {
    it("should return 0.2 when dividing 1.4 by 4.5", () => {
      expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
    });

    it("should return 'Error' when dividing by 0", () => {
      expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal("Error");
    });
  });

  describe("Invalid Type", () => {
    it("should throw an error for invalid type", () => {
      expect(() => calculateNumber("MULTIPLY", 2, 3)).to.throw();
    });
  });
});
