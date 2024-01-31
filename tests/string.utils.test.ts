import { at, charAt, charCodeAt, codePointAt, concat, endsWith, fromCharCode, includes, indexOf, isBlank, isEmpty, isNotBlank, isNotEmpty, lastIndexOf, length, localeCompare, match, padEnd, padStart, repeat, replace, replaceAll, reverse, search, slice } from "../src/string.utils";

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

  describe("endsWith()", () => {
    it("should return true if the search string is included at the end in the input string.", () => {
      expect(endsWith("Hello World!", "World!")).toBeTruthy();
      expect(endsWith("Hello World!", "Hello", 5)).toBeTruthy();
      expect(endsWith("Hello World!", "World!", 20)).toBeTruthy();
    });
    it("should return false if the search string is not included at the end in the input string.", () => {
      expect(endsWith("Hello World!", "Hello")).toBeFalsy();
      expect(endsWith("Hello World!", "Hello", 3)).toBeFalsy();
    });
    it("should return false if the input or search string are not a string.", () => {
      expect(endsWith("Hello World!", null as any)).toBeFalsy();
      expect(endsWith(null as any, "Hello World!")).toBeFalsy();
      expect(endsWith(null as any, null as any)).toBeFalsy();
      expect(endsWith("Hello World!", 0 as any)).toBeFalsy();
      expect(endsWith("Hello World!", 1 as any)).toBeFalsy();
      expect(endsWith("Hello World!", undefined as any)).toBeFalsy();
      expect(endsWith("Hello World!", false as any)).toBeFalsy();
      expect(endsWith("Hello World!", true as any)).toBeFalsy();
      expect(endsWith("Hello World!", [] as any)).toBeFalsy();
      expect(endsWith("Hello World!", [""] as any)).toBeFalsy();
      expect(endsWith("Hello World!", new Date() as any)).toBeFalsy();
      expect(endsWith("Hello World!", {} as any)).toBeFalsy();
    });
    it("should return false if the length is not positive", () => {
      expect(endsWith("Hello World!", "!", -1)).toBeFalsy();
      expect(endsWith("Hello World!", "H", -1)).toBeFalsy();
      expect(endsWith("Hello World!", "H", 0)).toBeFalsy();
    });
  });

  describe("fromCharCode()", () => {
    it("should return a string based on the unicode codes", () => {
      expect(fromCharCode(65)).toBe("A");
      expect(fromCharCode(72, 69, 76, 76, 79)).toBe("HELLO");
    });
    it("should return an empty string if the code is not a number.", () => {
      expect(fromCharCode(null as any)).toBe("");
      expect(fromCharCode(undefined as any)).toBe("");
      expect(fromCharCode(false as any)).toBe("");
      expect(fromCharCode(true as any)).toBe("");
      expect(fromCharCode([] as any)).toBe("");
      expect(fromCharCode([""] as any)).toBe("");
      expect(fromCharCode(new Date() as any)).toBe("");
      expect(fromCharCode({} as any)).toBe("");
    });
  });

  describe("includes()", () => {
    it("should return true if the search string is included in the input string.", () => {
      expect(includes("Hello World!", "World!")).toBeTruthy();
      expect(includes("Hello World!", "Hello")).toBeTruthy();
      expect(includes("Hello World!", "World!", 5)).toBeTruthy();
      expect(includes("Hello World!", "Hello", -1)).toBeTruthy();
      expect(includes("Hello World!", "Hello", -5)).toBeTruthy();
    });
    it("should return false if the search string is not included input string considering the start position.", () => {
      expect(includes("Hello World!", "Hi")).toBeFalsy();
      expect(includes("Hello World!", "Hello", 5)).toBeFalsy();
    });
    it("should return false if the input or search string are not a string.", () => {
      expect(includes("Hello World!", null as any)).toBeFalsy();
      expect(includes(null as any, "Hello World!")).toBeFalsy();
      expect(includes(null as any, null as any)).toBeFalsy();
      expect(includes("Hello World!", 0 as any)).toBeFalsy();
      expect(includes("Hello World!", 1 as any)).toBeFalsy();
      expect(includes("Hello World!", undefined as any)).toBeFalsy();
      expect(includes("Hello World!", false as any)).toBeFalsy();
      expect(includes("Hello World!", true as any)).toBeFalsy();
      expect(includes("Hello World!", [] as any)).toBeFalsy();
      expect(includes("Hello World!", [""] as any)).toBeFalsy();
      expect(includes("Hello World!", new Date() as any)).toBeFalsy();
      expect(includes("Hello World!", {} as any)).toBeFalsy();
    });
  });

  describe("indexOf()", () => {
    it("should return a positive number if the search string is included in the input string.", () => {
      expect(indexOf("Hello World!", "World!")).toBe(6);
      expect(indexOf("Hello World! Hello Everyone!", "Hello")).toBe(0);
      expect(indexOf("Hello World!", "Hello")).toBe(0);
      expect(indexOf("Hello World!", "World!", 5)).toBe(6);
      expect(indexOf("Hello World!", "Hello", -1)).toBe(0);
      expect(indexOf("Hello World!", "Hello", -5)).toBe(0);
    });
    it("should return -1 if the search string is not included input string considering the start position.", () => {
      expect(indexOf("Hello World!", "Hi")).toBe(-1);
      expect(indexOf("Hello World!", "Hello", 5)).toBe(-1);
    });
    it("should return -1 if the input or search string are not a string.", () => {
      expect(indexOf("Hello World!", null as any)).toBe(-1);
      expect(indexOf(null as any, "Hello World!")).toBe(-1);
      expect(indexOf(null as any, null as any)).toBe(-1);
      expect(indexOf("Hello World!", 0 as any)).toBe(-1);
      expect(indexOf("Hello World!", 1 as any)).toBe(-1);
      expect(indexOf("Hello World!", undefined as any)).toBe(-1);
      expect(indexOf("Hello World!", false as any)).toBe(-1);
      expect(indexOf("Hello World!", true as any)).toBe(-1);
      expect(indexOf("Hello World!", [] as any)).toBe(-1);
      expect(indexOf("Hello World!", [""] as any)).toBe(-1);
      expect(indexOf("Hello World!", new Date() as any)).toBe(-1);
      expect(indexOf("Hello World!", {} as any)).toBe(-1);
    });
  });

  describe("lastIndexOf()", () => {
    it("should return a positive number if the search string is included in the input string.", () => {
      expect(lastIndexOf("Hello World!", "World!")).toBe(6);
      expect(lastIndexOf("Hello World! Hello Everyone!", "Hello")).toBe(13);
      expect(lastIndexOf("Hello World!", "Hello")).toBe(0);
      expect(lastIndexOf("Hello World!", "Hello", 5)).toBe(0);
    });
    it("should return -1 if the search string is not included input string considering the start position.", () => {
      expect(lastIndexOf("Hello World!", "Hi")).toBe(-1);
      expect(lastIndexOf("Hello World!", "World!", 5)).toBe(-1);
    });
    it("should return -1 if the input or search string are not a string.", () => {
      expect(lastIndexOf("Hello World!", null as any)).toBe(-1);
      expect(lastIndexOf(null as any, "Hello World!")).toBe(-1);
      expect(lastIndexOf(null as any, null as any)).toBe(-1);
      expect(lastIndexOf("Hello World!", 0 as any)).toBe(-1);
      expect(lastIndexOf("Hello World!", 1 as any)).toBe(-1);
      expect(lastIndexOf("Hello World!", undefined as any)).toBe(-1);
      expect(lastIndexOf("Hello World!", false as any)).toBe(-1);
      expect(lastIndexOf("Hello World!", true as any)).toBe(-1);
      expect(lastIndexOf("Hello World!", [] as any)).toBe(-1);
      expect(lastIndexOf("Hello World!", [""] as any)).toBe(-1);
      expect(lastIndexOf("Hello World!", new Date() as any)).toBe(-1);
      expect(lastIndexOf("Hello World!", {} as any)).toBe(-1);
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

  describe("localeCompare()", () => {
    it("should return a number depending of the result of the comparision", () => {
      expect(localeCompare("ab", "ab")).toBe(0);
      expect(localeCompare("cd", "ab")).toBe(1);
      expect(localeCompare("ab", "cd")).toBe(-1);
      expect(localeCompare("b", "a")).toBe(1);
      expect(localeCompare("a", "b")).toBe(-1);
      expect(localeCompare("A", "a")).toBe(1);
    });
    it("should return undefined for any non string value", () => {
      expect(localeCompare("Hello World!", null as any)).toBe(undefined);
      expect(localeCompare(null as any, "Hello World!")).toBe(undefined);
      expect(localeCompare(null as any, null as any)).toBe(undefined);
      expect(localeCompare("Hello World!", 0 as any)).toBe(undefined);
      expect(localeCompare("Hello World!", 1 as any)).toBe(undefined);
      expect(localeCompare("Hello World!", undefined as any)).toBe(undefined);
      expect(localeCompare("Hello World!", false as any)).toBe(undefined);
      expect(localeCompare("Hello World!", true as any)).toBe(undefined);
      expect(localeCompare("Hello World!", [] as any)).toBe(undefined);
      expect(localeCompare("Hello World!", [""] as any)).toBe(undefined);
      expect(localeCompare("Hello World!", new Date() as any)).toBe(undefined);
      expect(localeCompare("Hello World!", {} as any)).toBe(undefined);
    });
  });

  describe("match()", () => {
    it("should return an array with the string match", () => {
      let r1 = match("The rain in SPAIN stays mainly in the plain", "ain")
      expect(Array.isArray(r1)).toBeTruthy()
      expect(r1.length).toBe(1)
      expect(r1[0]).toBe("ain")
      let r2 = match("The rain in SPAIN stays mainly in the plain", /ain/)
      expect(Array.isArray(r2)).toBeTruthy()
      expect(r2.length).toBe(1)
      expect(r2[0]).toBe("ain")
      let r3 = match("The rain in SPAIN stays mainly in the plain", /ain/g)
      expect(Array.isArray(r3)).toBeTruthy()
      expect(r3.length).toBe(3)
      expect(r3[0]).toBe("ain")
      expect(r3[1]).toBe("ain")
      expect(r3[2]).toBe("ain")
    });
    it("should return an empty array when there is no match", () => {
      let r1 = match("The rain in SPAIN stays mainly in the plain", "ei")
      expect(Array.isArray(r1)).toBeTruthy()
      expect(r1.length).toBe(0)
    });
    it("should return an empty array for any non string value", () => {
      expect(match("Hello World!", null as any)).toEqual([])
      expect(match(null as any, "Hello World!")).toEqual([])
      expect(match(null as any, null as any)).toEqual([])
      expect(match("Hello World!", 0 as any)).toEqual([])
      expect(match("Hello World!", 1 as any)).toEqual([])
      expect(match("Hello World!", undefined as any)).toEqual([])
      expect(match("Hello World!", false as any)).toEqual([])
      expect(match("Hello World!", true as any)).toEqual([])
      expect(match("Hello World!", [] as any)).toEqual([])
      expect(match("Hello World!", [""] as any)).toEqual([])
      expect(match("Hello World!", new Date() as any)).toEqual([])
      expect(match("Hello World!", {} as any)).toEqual([])
    });
  });

  describe("padEnd()", () => {
    it("should return a string padded", () => {
      expect(padEnd("Hello", 10)).toBe("Hello     ")
      expect(padEnd("Hello", 10, "o")).toBe("Helloooooo")
      expect(padEnd("Hello", 10, null as any)).toBe("Hello     ")
    });
    it("should return the same string if the length is lower than the input string ot if the length is not a number", () => {
      expect(padEnd("Hello", 1)).toBe("Hello")
      expect(padEnd("Hello", null as any)).toBe("Hello")
      expect(padEnd("Hello", 5.5)).toBe("Hello")
    });
    it("should return an empty string for any non string value", () => {
      expect(padEnd(null as any, 5)).toBe("     ")
      expect(padEnd(null as any, 1)).toBe(" ")
      expect(padEnd(undefined as any, 1)).toBe(" ")
      expect(padEnd(0 as any, 1)).toBe(" ")
      expect(padEnd(1 as any, 1)).toBe(" ")
      expect(padEnd(false as any, 1)).toBe(" ")
      expect(padEnd(true as any, 1)).toBe(" ")
      expect(padEnd([] as any, 1)).toBe(" ")
      expect(padEnd([""] as any, 1)).toBe(" ")
      expect(padEnd(new Date() as any, 1)).toBe(" ")
      expect(padEnd({} as any, 1)).toBe(" ")
    });
  });

  describe("padStart()", () => {
    it("should return a string padded", () => {
      expect(padStart("Hello", 10)).toBe("     Hello")
      expect(padStart("Hello", 10, "H")).toBe("HHHHHHello")
      expect(padStart("Hello", 10, null as any)).toBe("     Hello")
    });
    it("should return the same string if the length is lower than the input string ot if the length is not a number", () => {
      expect(padStart("Hello", 1)).toBe("Hello")
      expect(padStart("Hello", null as any)).toBe("Hello")
      expect(padStart("Hello", 5.5)).toBe("Hello")
    });
    it("should return an empty string for any non string value", () => {
      expect(padStart(null as any, 5)).toBe("     ")
      expect(padStart(null as any, 1)).toBe(" ")
      expect(padStart(undefined as any, 1)).toBe(" ")
      expect(padStart(0 as any, 1)).toBe(" ")
      expect(padStart(1 as any, 1)).toBe(" ")
      expect(padStart(false as any, 1)).toBe(" ")
      expect(padStart(true as any, 1)).toBe(" ")
      expect(padStart([] as any, 1)).toBe(" ")
      expect(padStart([""] as any, 1)).toBe(" ")
      expect(padStart(new Date() as any, 1)).toBe(" ")
      expect(padStart({} as any, 1)).toBe(" ")
    });
  });

  describe("repeat()", () => {
    it("should return a string repeated", () => {
      expect(repeat("Hello", 1)).toBe("Hello")
      expect(repeat("Hello", 3)).toBe("HelloHelloHello")
    });
    it("should use Math.floor() operator for float numbers.", () => {
      expect(repeat("Hello", 1.5)).toBe("Hello")
    });
    it("should retrun an empty string for numbers < 1", () => {
      expect(repeat("Hello", 0)).toBe("")
      expect(repeat("Hello", -1)).toBe("")
    });
    it("should return an empty string for any non string value", () => {
      expect(repeat(null as any, 1)).toBe("")
      expect(repeat(undefined as any, 1)).toBe("")
      expect(repeat(0 as any, 1)).toBe("")
      expect(repeat(1 as any, 1)).toBe("")
      expect(repeat(false as any, 1)).toBe("")
      expect(repeat(true as any, 1)).toBe("")
      expect(repeat([] as any, 1)).toBe("")
      expect(repeat([""] as any, 1)).toBe("")
      expect(repeat(new Date() as any, 1)).toBe("")
      expect(repeat({} as any, 1)).toBe("")
    });
  });

  describe("replace()", () => {
    it("should return a string with some of its characters modified", () => {
      expect(replace("Hello Everyone!", "Everyone", "World")).toBe("Hello World!")
      expect(replace("Mr Blue has a blue house and a blue car.", "blue", "red")).toBe("Mr Blue has a red house and a blue car.")
      expect(replace("Mr Blue has a blue house and a blue car.", /blue/g, "red")).toBe("Mr Blue has a red house and a red car.")
      expect(replace("Mr Blue has a blue house and a blue car.", /blue|house|car/gi, (x) => {return x.toUpperCase()})).toBe("Mr BLUE has a BLUE HOUSE and a BLUE CAR.")
    });
    it("should return an empty string for any non string value", () => {
      expect(replace("Hello World!", null as any, "-")).toBe("-Hello World!")
      expect(replace("Hello World!", "World", null as any)).toBe("Hello !")
      expect(replace(null as any, "Hello", "")).toBe("")
      expect(replace(undefined as any, "Hello", "")).toBe("")
      expect(replace(0 as any, "Hello", "")).toBe("")
      expect(replace(1 as any, "Hello", "")).toBe("")
      expect(replace(false as any, "Hello", "")).toBe("")
      expect(replace(true as any, "Hello", "")).toBe("")
      expect(replace([] as any, "Hello", "")).toBe("")
      expect(replace([""] as any, "Hello", "")).toBe("")
      expect(replace(new Date() as any, "Hello", "")).toBe("")
      expect(replace({} as any, "Hello", "")).toBe("")
    });
  });

  describe("replaceAll()", () => {
    it("should return a string with some of its characters modified", () => {
      expect(replaceAll("Hello Everyone!", "Everyone", "World")).toBe("Hello World!")
      expect(replaceAll("Mr Blue has a blue house and a blue car.", "blue", "red")).toBe("Mr Blue has a red house and a red car.")
      expect(replaceAll("Mr Blue has a blue house and a blue car.", /blue/g, "red")).toBe("Mr Blue has a red house and a red car.")
      expect(replaceAll("Mr Blue has a blue house and a blue car.", /blue|house|car/gi, (x) => {return x.toUpperCase()})).toBe("Mr BLUE has a BLUE HOUSE and a BLUE CAR.")
    });
    it("should return an empty string for any non string value", () => {
      expect(replaceAll("Hello World!", null as any, "-")).toBe("-H-e-l-l-o- -W-o-r-l-d-!-")
      expect(replaceAll("Hello World!", "World", null as any)).toBe("Hello !")
      expect(replaceAll(null as any, "Hello", "")).toBe("")
      expect(replaceAll(undefined as any, "Hello", "")).toBe("")
      expect(replaceAll(0 as any, "Hello", "")).toBe("")
      expect(replaceAll(1 as any, "Hello", "")).toBe("")
      expect(replaceAll(false as any, "Hello", "")).toBe("")
      expect(replaceAll(true as any, "Hello", "")).toBe("")
      expect(replaceAll([] as any, "Hello", "")).toBe("")
      expect(replaceAll([""] as any, "Hello", "")).toBe("")
      expect(replaceAll(new Date() as any, "Hello", "")).toBe("")
      expect(replaceAll({} as any, "Hello", "")).toBe("")
    });
  });

  describe("search()", () => {
    it("should return the index of the seached text", () => {
      expect(search("Hello World!", "World")).toBe(6)
      expect(search("Mr. Blue has a blue house", "blue")).toBe(15)
      expect(search("Mr. Blue has a blue house", "Blue")).toBe(4)
      expect(search("Mr. Blue has a blue house", /Blue/)).toBe(4)
      expect(search("Mr. Blue has a blue house", /blue/)).toBe(15)
      expect(search("Mr. Blue has a blue house", /blue/i)).toBe(4)
      expect(search("Mr. Blue has a blue house", /red/i)).toBe(-1)
    });
    it("should use an empty string for any non string value", () => {
      expect(search("Hello World!", null as any)).toBe(0)
      expect(search(null as any, "Hello")).toBe(-1)
      expect(search(undefined as any, "Hello")).toBe(-1)
      expect(search(0 as any, "Hello")).toBe(-1)
      expect(search(1 as any, "Hello")).toBe(-1)
      expect(search(false as any, "Hello")).toBe(-1)
      expect(search(true as any, "Hello")).toBe(-1)
      expect(search([] as any, "Hello")).toBe(-1)
      expect(search([""] as any, "Hello")).toBe(-1)
      expect(search(new Date() as any, "Hello")).toBe(-1)
      expect(search({} as any, "Hello")).toBe(-1)
    });
  });

  describe("slice()", () => {
    it("should return part of a string", () => {
      expect(slice("Hello World!", 0, 5)).toBe("Hello")
      expect(slice("Hello World!", 3)).toBe("lo World!")
      expect(slice("Hello World!", -6, -1)).toBe("World")
      expect(slice("Hello World!", 5, 0)).toBe("")
      expect(slice("Hello World!", 0, 25)).toBe("Hello World!")
      expect(slice("Hello World!")).toBe("Hello World!")
      expect(slice("Hello World!", 0, 25)).toBe("Hello World!")
      expect(slice("Hello World!", -1, 25)).toBe("!")
    });
    it("should use an empty string for any non string value", () => {
      expect(slice("Hello World!", null as any, null as any)).toBe("Hello World!")
      expect(slice(null as any)).toBe("")
      expect(slice(undefined as any)).toBe("")
      expect(slice(0 as any)).toBe("")
      expect(slice(1 as any)).toBe("")
      expect(slice(false as any)).toBe("")
      expect(slice(true as any)).toBe("")
      expect(slice([] as any)).toBe("")
      expect(slice([""] as any)).toBe("")
      expect(slice(new Date() as any)).toBe("")
      expect(slice({} as any)).toBe("")
    });
  });

});