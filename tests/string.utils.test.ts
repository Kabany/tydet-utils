import { at, charAt, charCodeAt, codePointAt, concat, endsWith, fromCharCode, includes, indexOf, isBlank, isDomainValid, isEmailValid, isEmpty, isNotBlank, isNotEmpty, isPhoneValid, isUsernameValid, isUuidValid, isWebUrlOnlyPathValid, isWebUrlSimpleValid, isWebUrlValid, lastIndexOf, length, localeCompare, match, padEnd, padStart, repeat, replace, replaceAll, reverse, search, slice, split, startsWith, substring, toLocaleLowerCase, toLocaleUpperCase, toLowerCase, toUpperCase, trim, trimEnd, trimStart } from "../src/string.utils";

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

  describe("isEmailValid()", () => {
    it("should return the input string is a valid email", () => {
      expect(isEmailValid("mail@test.com")).toBeTruthy();
      expect(isEmailValid("mail@test.co")).toBeTruthy();
      expect(isEmailValid("name.mail@test.co")).toBeTruthy();
      expect(isEmailValid("name.mail@test.com.mx")).toBeTruthy();
      expect(isEmailValid("name-mail@test.com")).toBeTruthy();
    });
    it("should false the input string is not a valid email", () => {
      expect(isEmailValid("mail@test.c")).toBeFalsy()
      expect(isEmailValid("mail@test.com.m")).toBeFalsy()
      expect(isEmailValid("")).toBeFalsy()
    });
    it("should return null for any non string value", () => {
      expect(isEmailValid(0 as any)).toBeFalsy();
      expect(isEmailValid(1 as any)).toBeFalsy();
      expect(isEmailValid(null as any)).toBeFalsy();
      expect(isEmailValid(undefined as any)).toBeFalsy();
      expect(isEmailValid(false as any)).toBeFalsy();
      expect(isEmailValid(true as any)).toBeFalsy();
      expect(isEmailValid([] as any)).toBeFalsy();
      expect(isEmailValid([""] as any)).toBeFalsy();
      expect(isEmailValid(new Date() as any)).toBeFalsy();
      expect(isEmailValid({} as any)).toBeFalsy();
    });
  });

  describe("isDomainValid()", () => {
    it("should return true for valid string domains", () => {
      expect(isDomainValid("test.com")).toBeTruthy()
      expect(isDomainValid("test.co")).toBeTruthy()
      expect(isDomainValid("test.com.mx")).toBeTruthy()
      expect(isDomainValid("super-test.com")).toBeTruthy()
      expect(isDomainValid("something.super-test.com")).toBeTruthy()
      expect(isDomainValid("a.net")).toBeTruthy()
      expect(isDomainValid("0-0o.com")).toBeTruthy()
      expect(isDomainValid("0-wh-ao14-0.com-com.net")).toBeTruthy()
    })
    it("should return false for invalid string domains", () => {
      expect(isDomainValid("mail@test.com")).toBeFalsy()
      expect(isDomainValid("mail@test.com.m")).toBeFalsy()
      expect(isDomainValid("-a.dot")).toBeFalsy()
      expect(isDomainValid("com.g")).toBeFalsy()
      expect(isDomainValid("mkyong.com/users")).toBeFalsy()
      expect(isDomainValid("sub.mkyong-.com")).toBeFalsy()
      expect(isDomainValid("sub.-mkyong.com")).toBeFalsy()
      expect(isDomainValid("http://test.com")).toBeFalsy()
      expect(isDomainValid("http://test.com/users")).toBeFalsy()
      expect(isDomainValid("")).toBeFalsy()
      expect(isDomainValid(" ")).toBeFalsy()
    })
    it("should return false for any non string value", () => {
      expect(isDomainValid(0 as any)).toBeFalsy()
      expect(isDomainValid(1 as any)).toBeFalsy()
      expect(isDomainValid(null as any)).toBeFalsy()
      expect(isDomainValid(undefined as any)).toBeFalsy()
      expect(isDomainValid(false as any)).toBeFalsy()
      expect(isDomainValid(true as any)).toBeFalsy()
      expect(isDomainValid([] as any)).toBeFalsy()
      expect(isDomainValid([""] as any)).toBeFalsy()
      expect(isDomainValid(new Date() as any)).toBeFalsy()
      expect(isDomainValid({} as any)).toBeFalsy()
    });
  });

  describe("isWebUrlSimpleValid()", () => {
    it("should return true for valid simple string URL", () => {
      expect(isWebUrlSimpleValid("http://test.com")).toBeTruthy()
      expect(isWebUrlSimpleValid("https://localhost:3000")).toBeTruthy()
      expect(isWebUrlSimpleValid("http://123.123.123.123:3000")).toBeTruthy()
    })
    it("should return false for URL with path, query parameters or fragments", () => {
      expect(isWebUrlSimpleValid("https://localhost:3000/")).toBeFalsy()
      expect(isWebUrlSimpleValid("https://localhost:3000/subpath")).toBeFalsy()
      expect(isWebUrlSimpleValid("http://localhost?param=123")).toBeFalsy()
    })
    it("should return false for invalid string URL", () => {
      expect(isWebUrlSimpleValid("mail@test.com")).toBeFalsy()
      expect(isWebUrlSimpleValid("mail@test.com.m")).toBeFalsy()
      expect(isWebUrlSimpleValid("ftp://mail@test.com.m")).toBeFalsy()
      expect(isWebUrlSimpleValid("ftps://-a.dot")).toBeFalsy()
      expect(isWebUrlSimpleValid("fttp://com.g")).toBeFalsy()
      expect(isWebUrlSimpleValid("mkyong.com/users")).toBeFalsy()
      expect(isWebUrlSimpleValid("mkyong.com/users")).toBeFalsy()
      expect(isWebUrlSimpleValid("http://sub.mkyong-.com")).toBeFalsy()
      expect(isWebUrlSimpleValid("https://sub.-mkyong.com")).toBeFalsy()
      expect(isWebUrlSimpleValid("")).toBeFalsy()
      expect(isWebUrlSimpleValid(" ")).toBeFalsy()
    })
    it("should return false for any non string value", () => {
      expect(isWebUrlSimpleValid(0 as any)).toBeFalsy()
      expect(isWebUrlSimpleValid(1 as any)).toBeFalsy()
      expect(isWebUrlSimpleValid(null as any)).toBeFalsy()
      expect(isWebUrlSimpleValid(undefined as any)).toBeFalsy()
      expect(isWebUrlSimpleValid(false as any)).toBeFalsy()
      expect(isWebUrlSimpleValid(true as any)).toBeFalsy()
      expect(isWebUrlSimpleValid([] as any)).toBeFalsy()
      expect(isWebUrlSimpleValid([""] as any)).toBeFalsy()
      expect(isWebUrlSimpleValid(new Date() as any)).toBeFalsy()
      expect(isWebUrlSimpleValid({} as any)).toBeFalsy()
    })
  });

  describe("isWebUrlOnlyPathValid()", () => {
    it("should return true for valid string URL with path (optional)", () => {
      expect(isWebUrlOnlyPathValid("http://test.com")).toBeTruthy()
      expect(isWebUrlOnlyPathValid("https://localhost:3000")).toBeTruthy()
      expect(isWebUrlOnlyPathValid("http://123.123.123.123:3000")).toBeTruthy()
      expect(isWebUrlOnlyPathValid("https://localhost:3000/")).toBeTruthy()
      expect(isWebUrlOnlyPathValid("https://localhost:3000/subpath")).toBeTruthy()
    })
    it("should return false for URL with query parameters or fragments", () => {
      expect(isWebUrlOnlyPathValid("http://localhost?param=123")).toBeFalsy()
      expect(isWebUrlOnlyPathValid("https://localhost:3000//")).toBeFalsy()
    })
    it("should return false for invalid string URL", () => {
      expect(isWebUrlOnlyPathValid("mail@test.com")).toBeFalsy()
      expect(isWebUrlOnlyPathValid("mail@test.com.m")).toBeFalsy()
      expect(isWebUrlOnlyPathValid("ftp://mail@test.com.m")).toBeFalsy()
      expect(isWebUrlOnlyPathValid("ftps://-a.dot")).toBeFalsy()
      expect(isWebUrlOnlyPathValid("fttp://com.g")).toBeFalsy()
      expect(isWebUrlOnlyPathValid("mkyong.com/users")).toBeFalsy()
      expect(isWebUrlOnlyPathValid("mkyong.com/users")).toBeFalsy()
      expect(isWebUrlOnlyPathValid("http://sub.mkyong-.com")).toBeFalsy()
      expect(isWebUrlOnlyPathValid("https://sub.-mkyong.com")).toBeFalsy()
      expect(isWebUrlOnlyPathValid("")).toBeFalsy()
      expect(isWebUrlOnlyPathValid(" ")).toBeFalsy()
    })
    it("should return false for any non string value", () => {
      expect(isWebUrlOnlyPathValid(0 as any)).toBeFalsy()
      expect(isWebUrlOnlyPathValid(1 as any)).toBeFalsy()
      expect(isWebUrlOnlyPathValid(null as any)).toBeFalsy()
      expect(isWebUrlOnlyPathValid(undefined as any)).toBeFalsy()
      expect(isWebUrlOnlyPathValid(false as any)).toBeFalsy()
      expect(isWebUrlOnlyPathValid(true as any)).toBeFalsy()
      expect(isWebUrlOnlyPathValid([] as any)).toBeFalsy()
      expect(isWebUrlOnlyPathValid([""] as any)).toBeFalsy()
      expect(isWebUrlOnlyPathValid(new Date() as any)).toBeFalsy()
      expect(isWebUrlOnlyPathValid({} as any)).toBeFalsy()
    })
  });

  describe("isWebUrlValid()", () => {
    it("should return true for valid string URL", () => {
      expect(isWebUrlValid("http://test.com")).toBeTruthy()
      expect(isWebUrlValid("https://localhost:3000")).toBeTruthy()
      expect(isWebUrlValid("https://localhost:3000/")).toBeTruthy()
      expect(isWebUrlValid("https://localhost:3000/subpath")).toBeTruthy()
      expect(isWebUrlValid("http://localhost?param=123")).toBeTruthy()
      expect(isWebUrlValid("http://localhost?param=123#fragment")).toBeTruthy()
      expect(isWebUrlValid("http://localhost/#fragment")).toBeTruthy()
      expect(isWebUrlValid("http://123.123.123.123:3000")).toBeTruthy()
    })
    it("should return false for invalid string URL", () => {
      expect(isWebUrlValid("mail@test.com")).toBeFalsy()
      expect(isWebUrlValid("mail@test.com.m")).toBeFalsy()
      expect(isWebUrlValid("ftp://mail@test.com.m")).toBeFalsy()
      expect(isWebUrlValid("ftps://-a.dot")).toBeFalsy()
      expect(isWebUrlValid("fttp://com.g")).toBeFalsy()
      expect(isWebUrlValid("mkyong.com")).toBeFalsy()
      expect(isWebUrlValid("mkyong.com/users")).toBeFalsy()
      expect(isWebUrlValid("http://sub.mkyong-.com")).toBeFalsy()
      expect(isWebUrlValid("https://sub.-mkyong.com")).toBeFalsy()
      expect(isWebUrlValid("")).toBeFalsy()
      expect(isWebUrlValid(" ")).toBeFalsy()
    })
    it("should return false for any non string value", () => {
      expect(isWebUrlValid(0 as any)).toBeFalsy()
      expect(isWebUrlValid(1 as any)).toBeFalsy()
      expect(isWebUrlValid(null as any)).toBeFalsy()
      expect(isWebUrlValid(undefined as any)).toBeFalsy()
      expect(isWebUrlValid(false as any)).toBeFalsy()
      expect(isWebUrlValid(true as any)).toBeFalsy()
      expect(isWebUrlValid([] as any)).toBeFalsy()
      expect(isWebUrlValid([""] as any)).toBeFalsy()
      expect(isWebUrlValid(new Date() as any)).toBeFalsy()
      expect(isWebUrlValid({} as any)).toBeFalsy()
    })
  });

  describe("isUsernameValid()", () => {
    it("should return true for valid string username", () => {
      expect(isUsernameValid("abc")).toBeTruthy()
      expect(isUsernameValid("a1b")).toBeTruthy()
      expect(isUsernameValid("a.b")).toBeTruthy()
      expect(isUsernameValid("ab1")).toBeTruthy()
      expect(isUsernameValid("a.1")).toBeTruthy()
      expect(isUsernameValid("a.b.c")).toBeTruthy()
      expect(isUsernameValid("a.1.2")).toBeTruthy()
      expect(isUsernameValid("a1.2")).toBeTruthy()
      expect(isUsernameValid("a.12")).toBeTruthy()
      expect(isUsernameValid("qwertyuiop")).toBeTruthy()
      expect(isUsernameValid("qwertyuiopqwertyuiop")).toBeTruthy()
      expect(isUsernameValid("qwertyuiopqwertyuiopqwertyuiop")).toBeTruthy()
      expect(isUsernameValid("qwertyuiopqwertyuiopqwertyuiopqwertyuiop")).toBeTruthy()
      expect(isUsernameValid("qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiop")).toBeTruthy()
    })
    it("should return false for invalid string username", () => {
      expect(isUsernameValid("a b")).toBeFalsy()
      expect(isUsernameValid("ab ")).toBeFalsy()
      expect(isUsernameValid(" ab")).toBeFalsy()
      expect(isUsernameValid("1ab")).toBeFalsy()
      expect(isUsernameValid("1.a")).toBeFalsy()
      expect(isUsernameValid(".ab")).toBeFalsy()
      expect(isUsernameValid(".1a")).toBeFalsy()
      expect(isUsernameValid(".a1")).toBeFalsy()
      expect(isUsernameValid("ab.")).toBeFalsy()
      expect(isUsernameValid("a1.")).toBeFalsy()
      expect(isUsernameValid("a..b")).toBeFalsy()
      expect(isUsernameValid("a..1")).toBeFalsy()
      expect(isUsernameValid("ab")).toBeFalsy()
      expect(isUsernameValid("a1")).toBeFalsy()
      expect(isUsernameValid("a.")).toBeFalsy()
      expect(isUsernameValid("a")).toBeFalsy()
      expect(isUsernameValid("1")).toBeFalsy()
      expect(isUsernameValid(".")).toBeFalsy()
      expect(isUsernameValid("qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopp")).toBeFalsy()
      expect(isUsernameValid("")).toBeFalsy()
      expect(isUsernameValid(" ")).toBeFalsy()
      expect(isUsernameValid("   ")).toBeFalsy()
    })
    it("should return false for any non string value", () => {
      expect(isUsernameValid(0 as any)).toBeFalsy()
      expect(isUsernameValid(1 as any)).toBeFalsy()
      expect(isUsernameValid(null as any)).toBeFalsy()
      expect(isUsernameValid(undefined as any)).toBeFalsy()
      expect(isUsernameValid(false as any)).toBeFalsy()
      expect(isUsernameValid(true as any)).toBeFalsy()
      expect(isUsernameValid([] as any)).toBeFalsy()
      expect(isUsernameValid([""] as any)).toBeFalsy()
      expect(isUsernameValid(new Date() as any)).toBeFalsy()
      expect(isUsernameValid({} as any)).toBeFalsy()
    })
  });

  describe("isPhoneValid()", () => {
    it("should return true for valid string phone", () => {
      expect(isPhoneValid("123-456-7890")).toBeTruthy()
      expect(isPhoneValid("718-444-1122")).toBeTruthy()
      expect(isPhoneValid("(123) 456-7890")).toBeTruthy()
      expect(isPhoneValid("123 456 7890")).toBeTruthy()
      expect(isPhoneValid("123.456.7890")).toBeTruthy()
      expect(isPhoneValid("718.444.1122")).toBeTruthy()
      expect(isPhoneValid("+11 (703) 678 5982")).toBeTruthy()
      expect(isPhoneValid("+1 (703) 678 5982")).toBeTruthy()
      expect(isPhoneValid("+11 703 678 5982")).toBeTruthy()
      expect(isPhoneValid("5512341234")).toBeTruthy()
      expect(isPhoneValid("55 1234 1234")).toBeTruthy()
      expect(isPhoneValid("55.1234.1234")).toBeTruthy()
      expect(isPhoneValid("55-1234-1234")).toBeTruthy()
      expect(isPhoneValid("(55) 1234-1234")).toBeTruthy()
    })
    it("should return false for invalid string phone", () => {
      expect(isPhoneValid("180012345670000")).toBeFalsy()
      expect(isPhoneValid("123A231234")).toBeFalsy()
      expect(isPhoneValid("-5551231234")).toBeFalsy()
      expect(isPhoneValid("55,123,1234")).toBeFalsy()
      expect(isPhoneValid("12345678")).toBeFalsy()
      expect(isPhoneValid("123,123,1234")).toBeFalsy()
      expect(isPhoneValid("")).toBeFalsy()
      expect(isPhoneValid(" ")).toBeFalsy()
      expect(isPhoneValid("   ")).toBeFalsy()
    })
    it("should return false for any non string value", () => {
      expect(isPhoneValid(0 as any)).toBeFalsy()
      expect(isPhoneValid(1 as any)).toBeFalsy()
      expect(isPhoneValid(null as any)).toBeFalsy()
      expect(isPhoneValid(undefined as any)).toBeFalsy()
      expect(isPhoneValid(false as any)).toBeFalsy()
      expect(isPhoneValid(true as any)).toBeFalsy()
      expect(isPhoneValid([] as any)).toBeFalsy()
      expect(isPhoneValid([""] as any)).toBeFalsy()
      expect(isPhoneValid(new Date() as any)).toBeFalsy()
      expect(isPhoneValid({} as any)).toBeFalsy()
    })
  });

  describe("isUuidValid()", () => {
    it("should return true for valid string uuid", () => {
      expect(isUuidValid("00000000-0000-0000-0000-000000000000")).toBeTruthy()
      expect(isUuidValid("dc5538c6-cdf3-11ed-afa1-0242ac120002")).toBeTruthy()
      expect(isUuidValid("7a33dc1a-d605-4f3a-b36e-b3557d243789")).toBeTruthy()
      expect(isUuidValid("1f980099-e30b-4b67-addf-aaa6a49f1dce")).toBeTruthy()
      expect(isUuidValid("5fc03087-d265-11e7-b8c6-83e29cd24f4c")).toBeTruthy()
    })
    it("should return false for invalid string uuid", () => {
      expect(isUuidValid("00000000.0000.0000.0000.000000000000")).toBeFalsy()
      expect(isUuidValid("00000000 0000 0000 0000 000000000000")).toBeFalsy()
      expect(isUuidValid("5fc0308-d265-11e7-b8c6-83e29cd24f4c")).toBeFalsy()
      expect(isUuidValid("5fc03087-g265-11e7-b8c6-83e29cd24f4c")).toBeFalsy()
      expect(isUuidValid("")).toBeFalsy()
      expect(isUuidValid(" ")).toBeFalsy()
      expect(isUuidValid("   ")).toBeFalsy()
    })
    it("should return false for any non string value", () => {
      expect(isUuidValid(0 as any)).toBeFalsy()
      expect(isUuidValid(1 as any)).toBeFalsy()
      expect(isUuidValid(null as any)).toBeFalsy()
      expect(isUuidValid(undefined as any)).toBeFalsy()
      expect(isUuidValid(false as any)).toBeFalsy()
      expect(isUuidValid(true as any)).toBeFalsy()
      expect(isUuidValid([] as any)).toBeFalsy()
      expect(isUuidValid([""] as any)).toBeFalsy()
      expect(isUuidValid(new Date() as any)).toBeFalsy()
      expect(isUuidValid({} as any)).toBeFalsy()
    })
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

  describe("split()", () => {
    it("should return part of a string", () => {
      let text = "Hello World!"
      let s1 = split(text, "")
      expect(s1.length).toBe(text.length)
      expect(s1[0]).toBe("H")
      let s2 = split(text)
      expect(s2.length).toBe(1)
      expect(s2[0]).toBe("Hello World!")
      let s3 = split(text, " ")
      expect(s3.length).toBe(2)
      expect(s3[0]).toBe("Hello")
      let s4 = split(text, "", 1)
      expect(s4.length).toBe(1)
      expect(s4[0]).toBe("H")
      let s5 = split(text, "Hello")
      expect(s5.length).toBe(2)
      expect(s5[0]).toBe("")
      expect(s5[1]).toBe(" World!")
      let s6 = split(text, "")
      expect(s6.length).toBe(12)
    });
    it("should use an empty string for any non string value", () => {
      expect(split(null as any)).toEqual([""])
      expect(split(undefined as any)).toEqual([""])
      expect(split(0 as any)).toEqual([""])
      expect(split(1 as any)).toEqual([""])
      expect(split(false as any)).toEqual([""])
      expect(split(true as any)).toEqual([""])
      expect(split([] as any)).toEqual([""])
      expect(split([""] as any)).toEqual([""])
      expect(split(new Date() as any)).toEqual([""])
      expect(split({} as any)).toEqual([""])
    });
  });

  describe("startsWith()", () => {
    it("should return true if search string is included at the start position of the input", () => {
      expect(startsWith("Hello World!", "H")).toBeTruthy()
      expect(startsWith("Hello World!", "Hello")).toBeTruthy()
      expect(startsWith("Hello World!", "World")).toBeFalsy()
      expect(startsWith("Hello World!", "World", 6)).toBeTruthy()
      expect(startsWith("Hello World!", "Hello", 1)).toBeFalsy()
    });
    it("should return false for any non string value", () => {
      expect(startsWith(null as any, "Hello")).toBeFalsy()
      expect(startsWith(undefined as any, "Hello")).toBeFalsy()
      expect(startsWith(0 as any, "Hello")).toBeFalsy()
      expect(startsWith(1 as any, "Hello")).toBeFalsy()
      expect(startsWith(false as any, "Hello")).toBeFalsy()
      expect(startsWith(true as any, "Hello")).toBeFalsy()
      expect(startsWith([] as any, "Hello")).toBeFalsy()
      expect(startsWith([""] as any, "Hello")).toBeFalsy()
      expect(startsWith(new Date() as any, "Hello")).toBeFalsy()
      expect(startsWith({} as any, "Hello")).toBeFalsy()
    });
  });

  describe("substring()", () => {
    it("should return part of a string", () => {
      expect(substring("Hello World!", 0, 5)).toBe("Hello")
      expect(substring("Hello World!", 5, 0)).toBe("Hello")
      expect(substring("Hello World!", 3)).toBe("lo World!")
      expect(substring("Hello World!", 0, 25)).toBe("Hello World!")
      expect(substring("Hello World!")).toBe("Hello World!")
      expect(substring("Hello World!", 0, 25)).toBe("Hello World!")
      expect(substring("Hello World!", -1, 25)).toBe("Hello World!")
    });
    it("should return an empty string for any non string value", () => {
      expect(substring("Hello World!", null as any, null as any)).toBe("Hello World!")
      expect(substring(null as any)).toBe("")
      expect(substring(undefined as any)).toBe("")
      expect(substring(0 as any)).toBe("")
      expect(substring(1 as any)).toBe("")
      expect(substring(false as any)).toBe("")
      expect(substring(true as any)).toBe("")
      expect(substring([] as any)).toBe("")
      expect(substring([""] as any)).toBe("")
      expect(substring(new Date() as any)).toBe("")
      expect(substring({} as any)).toBe("")
    });
  });

  describe("toLocaleLowerCase()", () => {
    it("should return the string converted to lower case, according to any locale-specific case mappings.", () => {
      expect(toLocaleLowerCase("Hello World!")).toBe("hello world!")
    });
    it("should return null string for any non string value", () => {
      expect(toLocaleLowerCase(null as any)).toBe(null)
      expect(toLocaleLowerCase(undefined as any)).toBe(null)
      expect(toLocaleLowerCase(0 as any)).toBe(null)
      expect(toLocaleLowerCase(1 as any)).toBe(null)
      expect(toLocaleLowerCase(false as any)).toBe(null)
      expect(toLocaleLowerCase(true as any)).toBe(null)
      expect(toLocaleLowerCase([] as any)).toBe(null)
      expect(toLocaleLowerCase([""] as any)).toBe(null)
      expect(toLocaleLowerCase(new Date() as any)).toBe(null)
      expect(toLocaleLowerCase({} as any)).toBe(null)
    });
  });

  describe("toLocaleUpperCase()", () => {
    it("should return the string converted to upper case, according to any locale-specific case mappings.", () => {
      expect(toLocaleUpperCase("Hello World!")).toBe("HELLO WORLD!")
    });
    it("should return null string for any non string value", () => {
      expect(toLocaleUpperCase(null as any)).toBe(null)
      expect(toLocaleUpperCase(undefined as any)).toBe(null)
      expect(toLocaleUpperCase(0 as any)).toBe(null)
      expect(toLocaleUpperCase(1 as any)).toBe(null)
      expect(toLocaleUpperCase(false as any)).toBe(null)
      expect(toLocaleUpperCase(true as any)).toBe(null)
      expect(toLocaleUpperCase([] as any)).toBe(null)
      expect(toLocaleUpperCase([""] as any)).toBe(null)
      expect(toLocaleUpperCase(new Date() as any)).toBe(null)
      expect(toLocaleUpperCase({} as any)).toBe(null)
    });
  });

  describe("toLowerCase()", () => {
    it("should return the string converted to lower case, according to any locale-specific case mappings.", () => {
      expect(toLowerCase("Hello World!")).toBe("hello world!")
    });
    it("should return null string for any non string value", () => {
      expect(toLowerCase(null as any)).toBe(null)
      expect(toLowerCase(undefined as any)).toBe(null)
      expect(toLowerCase(0 as any)).toBe(null)
      expect(toLowerCase(1 as any)).toBe(null)
      expect(toLowerCase(false as any)).toBe(null)
      expect(toLowerCase(true as any)).toBe(null)
      expect(toLowerCase([] as any)).toBe(null)
      expect(toLowerCase([""] as any)).toBe(null)
      expect(toLowerCase(new Date() as any)).toBe(null)
      expect(toLowerCase({} as any)).toBe(null)
    });
  });

  describe("toUpperCase()", () => {
    it("should return the string converted to upper case, according to any locale-specific case mappings.", () => {
      expect(toUpperCase("Hello World!")).toBe("HELLO WORLD!")
    });
    it("should return null string for any non string value", () => {
      expect(toUpperCase(null as any)).toBe(null)
      expect(toUpperCase(undefined as any)).toBe(null)
      expect(toUpperCase(0 as any)).toBe(null)
      expect(toUpperCase(1 as any)).toBe(null)
      expect(toUpperCase(false as any)).toBe(null)
      expect(toUpperCase(true as any)).toBe(null)
      expect(toUpperCase([] as any)).toBe(null)
      expect(toUpperCase([""] as any)).toBe(null)
      expect(toUpperCase(new Date() as any)).toBe(null)
      expect(toUpperCase({} as any)).toBe(null)
    });
  });

  describe("trim()", () => {
    it("should return a string with removed whitespace from both ends.", () => {
      expect(trim("    Hello!    ")).toBe("Hello!")
    });
    it("should return null string for any non string value", () => {
      expect(trim(null as any)).toBe(null)
      expect(trim(undefined as any)).toBe(null)
      expect(trim(0 as any)).toBe(null)
      expect(trim(1 as any)).toBe(null)
      expect(trim(false as any)).toBe(null)
      expect(trim(true as any)).toBe(null)
      expect(trim([] as any)).toBe(null)
      expect(trim([""] as any)).toBe(null)
      expect(trim(new Date() as any)).toBe(null)
      expect(trim({} as any)).toBe(null)
    });
  });

  describe("trimEnd()", () => {
    it("should return a string with removed whitespace from the end.", () => {
      expect(trimEnd("    Hello!    ")).toBe("    Hello!")
    });
    it("should return null string for any non string value", () => {
      expect(trimEnd(null as any)).toBe(null)
      expect(trimEnd(undefined as any)).toBe(null)
      expect(trimEnd(0 as any)).toBe(null)
      expect(trimEnd(1 as any)).toBe(null)
      expect(trimEnd(false as any)).toBe(null)
      expect(trimEnd(true as any)).toBe(null)
      expect(trimEnd([] as any)).toBe(null)
      expect(trimEnd([""] as any)).toBe(null)
      expect(trimEnd(new Date() as any)).toBe(null)
      expect(trimEnd({} as any)).toBe(null)
    });
  });

  describe("trimStart()", () => {
    it("should return a string with removed whitespace from the start.", () => {
      expect(trimStart("    Hello!    ")).toBe("Hello!    ")
    });
    it("should return null string for any non string value", () => {
      expect(trimStart(null as any)).toBe(null)
      expect(trimStart(undefined as any)).toBe(null)
      expect(trimStart(0 as any)).toBe(null)
      expect(trimStart(1 as any)).toBe(null)
      expect(trimStart(false as any)).toBe(null)
      expect(trimStart(true as any)).toBe(null)
      expect(trimStart([] as any)).toBe(null)
      expect(trimStart([""] as any)).toBe(null)
      expect(trimStart(new Date() as any)).toBe(null)
      expect(trimStart({} as any)).toBe(null)
    });
  });

});