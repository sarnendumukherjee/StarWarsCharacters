import {
  getOptionsFromFilms,
  getOptionsFromSpecies,
  getFilteredCharacters
} from "./util";

describe("utils", () => {
  describe("getOptionsFromFilms", () => {
    it("should return false if films is falsy", () => {
      const testInput1 = null;
      const result1 = getOptionsFromFilms(testInput1);
      const testInput2 = undefined;
      const result2 = getOptionsFromFilms(testInput2);
      expect(result2).toBe(testInput2);
    });
    it("should return formatted object which can be used as generic select option", () => {
      const testInput = [
        {
          id: "testId1",
          title: "testTitle1"
        },
        {
          id: "testId2",
          title: "testTitle2"
        }
      ];
      const result = getOptionsFromFilms(testInput);
      expect(result[0].value).toBeDefined();
      expect(result[0].text).toBeDefined();
    });
  });
  describe("getOptionsFromSpecies", () => {
    it("should return false if films is falsy", () => {
      const testInput1 = null;
      const result1 = getOptionsFromSpecies(testInput1);
      const testInput2 = undefined;
      const result2 = getOptionsFromSpecies(testInput2);
      expect(result2).toBe(testInput2);
    });
    it("should return formatted object which can be used as generic select option", () => {
      const testInput = [
        {
          id: "testId1",
          name: "testName1"
        },
        {
          id: "testId2",
          name: "testName2"
        }
      ];
      const result = getOptionsFromSpecies(testInput);
      expect(result[0].value).toBeDefined();
      expect(result[0].text).toBeDefined();
    });
  });
  describe("getFilteredCharacters", () => {
    it("should return characters unfiltered if species is not passed", () => {
      const testCharacters = [
        { species: { id: "testId1" } },
        { species: { id: "testId2" } }
      ];
      const result = getFilteredCharacters(testCharacters, null);
      expect(result).toEqual(testCharacters);
    });
    it("should return characters filtered with matched species", () => {
      const testCharacters = [
        { species: { id: "testId1" } },
        { species: { id: "testSpeciesId" } },
        { species: { id: "testId2" } },
        { species: { id: "testSpeciesId" } }
      ];
      const result = getFilteredCharacters(testCharacters, "testSpeciesId");
      expect(result).toHaveLength(2);
    });
  });
});
