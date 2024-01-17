import { isEmpty, isNotEmpty } from "../src/string.utils";

describe("String Utils", () => {

  describe("isEmpty()", () => {
    it("should return false for any string that not only contains spaces", () => {
      expect(isEmpty("string")).toBeFalsy();
      expect(isEmpty("1")).toBeFalsy();
      expect(isEmpty("0")).toBeFalsy();
      expect(isEmpty("0 ")).toBeFalsy();
      expect(isEmpty(" 0")).toBeFalsy();
      expect(isEmpty("false")).toBeFalsy();
      expect(isEmpty("null")).toBeFalsy();
      expect(isEmpty(" -   ")).toBeFalsy();
    });
    it("should return true for null, undefined or for any string that only contains spaces", () => {
      expect(isEmpty(null)).toBeTruthy();
      expect(isEmpty(undefined)).toBeTruthy();
      expect(isEmpty("")).toBeTruthy();
      expect(isEmpty(" ")).toBeTruthy();
      expect(isEmpty("   ")).toBeTruthy();
    });
    it("should return false for any non string value", () => {
      expect(isEmpty(0)).toBeFalsy();
      expect(isEmpty(1)).toBeFalsy();
      expect(isEmpty(false)).toBeFalsy();
      expect(isEmpty(true)).toBeFalsy();
      expect(isEmpty([])).toBeFalsy();
      expect(isEmpty([""])).toBeFalsy();
      expect(isEmpty(new Date())).toBeFalsy();
      expect(isEmpty({})).toBeFalsy();
    });
  });

  describe("isNotEmpty()", () => {
    it("should return true for any string that not only contains spaces", () => {
      expect(isNotEmpty("string")).toBeTruthy();
      expect(isNotEmpty("1")).toBeTruthy();
      expect(isNotEmpty("0")).toBeTruthy();
      expect(isNotEmpty("0 ")).toBeTruthy();
      expect(isNotEmpty(" 0")).toBeTruthy();
      expect(isNotEmpty("false")).toBeTruthy();
      expect(isNotEmpty("null")).toBeTruthy();
      expect(isNotEmpty(" -   ")).toBeTruthy();
    });
    it("should return false for any string that only contains spaces", () => {
      expect(isNotEmpty("")).toBeFalsy();
      expect(isNotEmpty(" ")).toBeFalsy();
      expect(isNotEmpty("   ")).toBeFalsy();
    })
    it("should return false for any non string value", () => {
      expect(isNotEmpty(0)).toBeFalsy();
      expect(isNotEmpty(1)).toBeFalsy();
      expect(isNotEmpty(null)).toBeFalsy();
      expect(isNotEmpty(undefined)).toBeFalsy();
      expect(isNotEmpty(false)).toBeFalsy();
      expect(isNotEmpty(true)).toBeFalsy();
      expect(isNotEmpty([])).toBeFalsy();
      expect(isNotEmpty([""])).toBeFalsy();
      expect(isNotEmpty(new Date())).toBeFalsy();
      expect(isNotEmpty({})).toBeFalsy();
    })
  })

});