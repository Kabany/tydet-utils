import { charAt, isBlank, isEmpty, isNotBlank, isNotEmpty, length, reverse } from "../src/string.utils";

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
    it("should return true for any string that only contains spaces", () => {
      expect(isNotEmpty("")).toBeTruthy();
      expect(isNotEmpty(" ")).toBeTruthy();
      expect(isNotEmpty("   ")).toBeTruthy();
    });
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
    });
  });

  describe("isBlank()", () => {
    it("should return false for any string that not only contains spaces", () => {
      expect(isBlank("string")).toBeFalsy();
      expect(isBlank("1")).toBeFalsy();
      expect(isBlank("0")).toBeFalsy();
      expect(isBlank("0 ")).toBeFalsy();
      expect(isBlank(" 0")).toBeFalsy();
      expect(isBlank("false")).toBeFalsy();
      expect(isBlank("null")).toBeFalsy();
      expect(isBlank(" -   ")).toBeFalsy();
    });
    it("should return true for any string that only contains spaces", () => {
      expect(isBlank("")).toBeTruthy();
      expect(isBlank(" ")).toBeTruthy();
      expect(isBlank("   ")).toBeTruthy();
    });
    it("should return false for any non string value", () => {
      expect(isBlank(null)).toBeFalsy();
      expect(isBlank(undefined)).toBeFalsy();
      expect(isBlank(0)).toBeFalsy();
      expect(isBlank(1)).toBeFalsy();
      expect(isBlank(false)).toBeFalsy();
      expect(isBlank(true)).toBeFalsy();
      expect(isBlank([])).toBeFalsy();
      expect(isBlank([""])).toBeFalsy();
      expect(isBlank(new Date())).toBeFalsy();
      expect(isBlank({})).toBeFalsy();
    });
  });

  describe("isNotBlank()", () => {
    it("should return false for any string that not only contains spaces", () => {
      expect(isNotBlank("string")).toBeTruthy();
      expect(isNotBlank("1")).toBeTruthy();
      expect(isNotBlank("0")).toBeTruthy();
      expect(isNotBlank("0 ")).toBeTruthy();
      expect(isNotBlank(" 0")).toBeTruthy();
      expect(isNotBlank("false")).toBeTruthy();
      expect(isNotBlank("null")).toBeTruthy();
      expect(isNotBlank(" -   ")).toBeTruthy();
    });
    it("should false true for any string that only contains spaces", () => {
      expect(isNotBlank("")).toBeFalsy();
      expect(isNotBlank(" ")).toBeFalsy();
      expect(isNotBlank("   ")).toBeFalsy();
    });
    it("should return false for any non string value", () => {
      expect(isNotBlank(null)).toBeFalsy();
      expect(isNotBlank(undefined)).toBeFalsy();
      expect(isNotBlank(0)).toBeFalsy();
      expect(isNotBlank(1)).toBeFalsy();
      expect(isNotBlank(false)).toBeFalsy();
      expect(isNotBlank(true)).toBeFalsy();
      expect(isNotBlank([])).toBeFalsy();
      expect(isNotBlank([""])).toBeFalsy();
      expect(isNotBlank(new Date())).toBeFalsy();
      expect(isNotBlank({})).toBeFalsy();
    });
  });

  describe("reverse()", () => {
    it("should return the input string with reversed characters", () => {
      expect(reverse("string")).toBe("gnirts");
      expect(reverse("1")).toBe("1");
      expect(reverse("0")).toBe("0");
      expect(reverse(" 0")).toBe("0 ");
      expect(reverse("false")).toBe("eslaf");
      expect(reverse("null")).toBe("llun");
      expect(reverse(" -   ")).toBe("   - ");
      expect(reverse("")).toBe("");
      expect(reverse(" ")).toBe(" ");
      expect(reverse("   ")).toBe("   ");
    });
    it("should return null for any non string value", () => {
      expect(reverse(0 as any)).toBeNull();
      expect(reverse(1 as any)).toBeNull();
      expect(reverse(null as any)).toBeNull();
      expect(reverse(undefined as any)).toBeNull();
      expect(reverse(false as any)).toBeNull();
      expect(reverse(true as any)).toBeNull();
      expect(reverse([] as any)).toBeNull();
      expect(reverse([""] as any)).toBeNull();
      expect(reverse(new Date() as any)).toBeNull();
      expect(reverse({} as any)).toBeNull();
    });
  });




  describe("charAt()", () => {
    it("should return the selected char", () => {
      expect(charAt("string")).toBe("s");
      expect(charAt("string", 2)).toBe("r");
      expect(charAt(" - ", 1)).toBe("-");
      expect(charAt(" - ", 2)).toBe(" ");
    });
    it("should return an empty string if the position is an invalid index. If the position is a float number, then the index will be fixed with the Math.floor() operator.", () => {
      expect(charAt("string", 6)).toBe("");
      expect(charAt("string", -1)).toBe("");
      expect(charAt("string", 1.5)).toBe("t");
    });
    it("should return an empty string for any non string value", () => {
      expect(charAt(0 as any)).toBe("");
      expect(charAt(1 as any)).toBe("");
      expect(charAt(null as any)).toBe("");
      expect(charAt(undefined as any)).toBe("");
      expect(charAt(false as any)).toBe("");
      expect(charAt(true as any)).toBe("");
      expect(charAt([] as any)).toBe("");
      expect(charAt([""] as any)).toBe("");
      expect(charAt(new Date() as any)).toBe("");
      expect(charAt({} as any)).toBe("");
    });
  });

  describe("length()", () => {
    it("should return the length for any string", () => {
      expect(length("string")).toBe(6);
      expect(length("1")).toBe(1);
      expect(length("0")).toBe(1);
      expect(length("0 ")).toBe(2);
      expect(length(" 0")).toBe(2);
      expect(length("false")).toBe(5);
      expect(length("null")).toBe(4);
      expect(length(" -   ")).toBe(5);
      expect(length("")).toBe(0);
      expect(length(" ")).toBe(1);
      expect(length("   ")).toBe(3);
    });
    it("should return 0 for any non string value", () => {
      expect(length(0)).toBe(0);
      expect(length(1)).toBe(0);
      expect(length(null)).toBe(0);
      expect(length(undefined)).toBe(0);
      expect(length(false)).toBe(0);
      expect(length(true)).toBe(0);
      expect(length([])).toBe(0);
      expect(length([""])).toBe(0);
      expect(length(new Date())).toBe(0);
      expect(length({})).toBe(0);
    });
  });

});