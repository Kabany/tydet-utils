import { at, charAt, charCodeAt, codePointAt, concat, isBlank, isEmpty, isNotBlank, isNotEmpty, length, reverse } from "../src/string.utils";

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
      expect(isEmpty(null as any)).toBeTruthy();
      expect(isEmpty(undefined as any)).toBeTruthy();
      expect(isEmpty("")).toBeTruthy();
      expect(isEmpty(" ")).toBeTruthy();
      expect(isEmpty("   ")).toBeTruthy();
    });
    it("should return false for any non string value", () => {
      expect(isEmpty(0 as any)).toBeFalsy();
      expect(isEmpty(1 as any)).toBeFalsy();
      expect(isEmpty(false as any)).toBeFalsy();
      expect(isEmpty(true as any)).toBeFalsy();
      expect(isEmpty([] as any)).toBeFalsy();
      expect(isEmpty([""] as any)).toBeFalsy();
      expect(isEmpty(new Date() as any)).toBeFalsy();
      expect(isEmpty({} as any)).toBeFalsy();
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
      expect(isNotEmpty(0 as any)).toBeFalsy();
      expect(isNotEmpty(1 as any)).toBeFalsy();
      expect(isNotEmpty(null as any)).toBeFalsy();
      expect(isNotEmpty(undefined as any)).toBeFalsy();
      expect(isNotEmpty(false as any)).toBeFalsy();
      expect(isNotEmpty(true as any)).toBeFalsy();
      expect(isNotEmpty([] as any)).toBeFalsy();
      expect(isNotEmpty([""] as any)).toBeFalsy();
      expect(isNotEmpty(new Date() as any)).toBeFalsy();
      expect(isNotEmpty({} as any)).toBeFalsy();
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
      expect(isBlank(null as any)).toBeFalsy();
      expect(isBlank(undefined as any)).toBeFalsy();
      expect(isBlank(0 as any)).toBeFalsy();
      expect(isBlank(1 as any)).toBeFalsy();
      expect(isBlank(false as any)).toBeFalsy();
      expect(isBlank(true as any)).toBeFalsy();
      expect(isBlank([] as any)).toBeFalsy();
      expect(isBlank([""] as any)).toBeFalsy();
      expect(isBlank(new Date() as any)).toBeFalsy();
      expect(isBlank({} as any)).toBeFalsy();
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
      expect(isNotBlank(null as any)).toBeFalsy();
      expect(isNotBlank(undefined as any)).toBeFalsy();
      expect(isNotBlank(0 as any)).toBeFalsy();
      expect(isNotBlank(1 as any)).toBeFalsy();
      expect(isNotBlank(false as any)).toBeFalsy();
      expect(isNotBlank(true as any)).toBeFalsy();
      expect(isNotBlank([] as any)).toBeFalsy();
      expect(isNotBlank([""] as any)).toBeFalsy();
      expect(isNotBlank(new Date() as any)).toBeFalsy();
      expect(isNotBlank({} as any)).toBeFalsy();
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




  describe("at()", () => {
    it("should return the selected char", () => {
      expect(at("string")).toBe("s");
      expect(at("string", 2)).toBe("r");
      expect(at(" - ", 1)).toBe("-");
      expect(at(" - ", 2)).toBe(" ");
      expect(at("string", -1)).toBe("g");
      expect(at("string", -2)).toBe("n");
    });
    it("should use Math.floor() operator for float numbers and return the result position char.", () => {
      expect(at("string", 1.5)).toBe("t");
      expect(at("string", 1.9)).toBe("t");
      expect(at("string", 1.01)).toBe("t");
    });
    it("should return undefined if the position is an invalid index.", () => {
      expect(at("string", 6)).toBe(undefined);
      expect(at("string", -7)).toBe(undefined);
    });
    it("should return undefined for any non string value", () => {
      expect(at(0 as any)).toBe(undefined);
      expect(at(1 as any)).toBe(undefined);
      expect(at(null as any)).toBe(undefined);
      expect(at(undefined as any)).toBe(undefined);
      expect(at(false as any)).toBe(undefined);
      expect(at(true as any)).toBe(undefined);
      expect(at([] as any)).toBe(undefined);
      expect(at([""] as any)).toBe(undefined);
      expect(at(new Date() as any)).toBe(undefined);
      expect(at({} as any)).toBe(undefined);
    });
  });

  describe("charAt()", () => {
    it("should return the selected char", () => {
      expect(charAt("string")).toBe("s");
      expect(charAt("string", 2)).toBe("r");
      expect(charAt(" - ", 1)).toBe("-");
      expect(charAt(" - ", 2)).toBe(" ");
    });
    it("should return an empty string if the position is an invalid index.", () => {
      expect(charAt("string", 6)).toBe("");
      expect(charAt("string", -1)).toBe("");
    });
    it("should use Math.floor() operator for float numbers and return the result position char.", () => {
      expect(charAt("string", 1.5)).toBe("t");
      expect(charAt("string", 1.9)).toBe("t");
      expect(charAt("string", 1.01)).toBe("t");
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

  describe("charCodeAt()", () => {
    it("should return the char code from the selected char", () => {
      expect(charCodeAt("string")).toBe(115);
      expect(charCodeAt("string", 2)).toBe(114);
      expect(charCodeAt(" - ", 1)).toBe(45);
      expect(charCodeAt(" - ", 2)).toBe(32);
    });
    it("should return undefined if the position is an invalid index.", () => {
      expect(charCodeAt("string", 6)).toBe(undefined);
      expect(charCodeAt("string", -1)).toBe(undefined);
    });
    it("should use Math.floor() operator for float numbers and return the result position char.", () => {
      expect(charCodeAt("string", 1.5)).toBe(116);
      expect(charCodeAt("string", 1.9)).toBe(116);
      expect(charCodeAt("string", 1.01)).toBe(116);
    });
    it("should return an empty string for any non string value", () => {
      expect(charCodeAt(0 as any)).toBe(undefined);
      expect(charCodeAt(1 as any)).toBe(undefined);
      expect(charCodeAt(null as any)).toBe(undefined);
      expect(charCodeAt(undefined as any)).toBe(undefined);
      expect(charCodeAt(false as any)).toBe(undefined);
      expect(charCodeAt(true as any)).toBe(undefined);
      expect(charCodeAt([] as any)).toBe(undefined);
      expect(charCodeAt([""] as any)).toBe(undefined);
      expect(charCodeAt(new Date() as any)).toBe(undefined);
      expect(charCodeAt({} as any)).toBe(undefined);
    });
  });

  describe("codePointAt()", () => {
    it("should return the char code from the selected char", () => {
      expect(codePointAt("string")).toBe(115);
      expect(codePointAt("string", 2)).toBe(114);
      expect(codePointAt(" - ", 1)).toBe(45);
      expect(codePointAt(" - ", 2)).toBe(32);
    });
    it("should return undefined if the position is an invalid index.", () => {
      expect(codePointAt("string", 6)).toBe(undefined);
      expect(codePointAt("string", -1)).toBe(undefined);
    });
    it("should use Math.floor() operator for float numbers and return the result position char.", () => {
      expect(codePointAt("string", 1.5)).toBe(116);
      expect(codePointAt("string", 1.9)).toBe(116);
      expect(codePointAt("string", 1.01)).toBe(116);
    });
    it("should return an empty string for any non string value", () => {
      expect(codePointAt(0 as any)).toBe(undefined);
      expect(codePointAt(1 as any)).toBe(undefined);
      expect(codePointAt(null as any)).toBe(undefined);
      expect(codePointAt(undefined as any)).toBe(undefined);
      expect(codePointAt(false as any)).toBe(undefined);
      expect(codePointAt(true as any)).toBe(undefined);
      expect(codePointAt([] as any)).toBe(undefined);
      expect(codePointAt([""] as any)).toBe(undefined);
      expect(codePointAt(new Date() as any)).toBe(undefined);
      expect(codePointAt({} as any)).toBe(undefined);
    });
  });

  describe("concat()", () => {
    it("should return concatenated strings", () => {
      expect(concat("str1", " ", "str2")).toBe("str1 str2");
    });
    it("should return an empty string if the input is not a string", () => {
      expect(concat("str1", null as any, "str2")).toBe("str1str2");
      expect(concat(0 as any)).toBe("");
      expect(concat(1 as any)).toBe("");
      expect(concat(null as any)).toBe("");
      expect(concat(undefined as any)).toBe("");
      expect(concat(false as any)).toBe("");
      expect(concat(true as any)).toBe("");
      expect(concat([] as any)).toBe("");
      expect(concat([""] as any)).toBe("");
      expect(concat(new Date() as any)).toBe("");
      expect(concat({} as any)).toBe("");
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
      expect(length(0 as any)).toBe(0);
      expect(length(1 as any)).toBe(0);
      expect(length(null as any)).toBe(0);
      expect(length(undefined as any)).toBe(0);
      expect(length(false as any)).toBe(0);
      expect(length(true as any)).toBe(0);
      expect(length([] as any)).toBe(0);
      expect(length([""] as any)).toBe(0);
      expect(length(new Date() as any)).toBe(0);
      expect(length({} as any)).toBe(0);
    });
  });

});