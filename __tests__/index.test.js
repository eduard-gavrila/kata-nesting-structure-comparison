const { functionInputData } = require("./testData");
const { sameStructureAs } = require("../index");

describe("Given: sameStructureAs function", () => {
  test("Then: It should return the correct result, given it's input ", () => {
    functionInputData.forEach((dataPoint) => {
      expect(
        sameStructureAs(dataPoint.input1, dataPoint.input2)
      ).toBe(dataPoint.isSameStructure);
    });
  });
});
