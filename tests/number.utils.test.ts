import { isInteger, isPositiveInteger, isValid } from "../src/number.utils"

describe("Number Utils", () => {

  describe("isValid()", () => {
    it("should return true for any valid number", () => {
      expect(isValid(123456)).toBeTruthy()
      expect(isValid(0)).toBeTruthy()
      expect(isValid(+0)).toBeTruthy()
      expect(isValid(+123)).toBeTruthy()
      expect(isValid(0B1001)).toBeTruthy()
      expect(isValid(0b1001)).toBeTruthy()
      expect(isValid(0x1AF)).toBeTruthy()
      expect(isValid(0X1af)).toBeTruthy()
      expect(isValid(100E2)).toBeTruthy()
      expect(isValid(100e2)).toBeTruthy()
      expect(isValid(0.255e4)).toBeTruthy()
      expect(isValid(5.0)).toBeTruthy()
      expect(isValid(5.00001)).toBeTruthy()
      expect(isValid(-5.00001)).toBeTruthy()
      expect(isValid(-0.01)).toBeTruthy()
      expect(isValid(0.01)).toBeTruthy()
      expect(isValid(5e-1)).toBeTruthy()
    })
    it("should return true for any number in a string", () => {
      expect(isValid("123456")).toBeTruthy()
      expect(isValid("0")).toBeTruthy()
      expect(isValid("0b1001")).toBeTruthy()
      expect(isValid("0x1AF")).toBeTruthy()
      expect(isValid("-123456")).toBeTruthy()
      expect(isValid("-123")).toBeTruthy()
      expect(isValid("-1001")).toBeTruthy()
      expect(isValid("-123.123")).toBeTruthy()
      expect(isValid("123.123")).toBeTruthy()
    })
    it("should return false for any non valid type", () => {
      expect(isValid("")).toBeFalsy()
      expect(isValid(" ")).toBeFalsy()
      expect(isValid("   ")).toBeFalsy()
      expect(isValid(" -  ")).toBeFalsy()
      expect(isValid("-0b1001")).toBeFalsy()
      expect(isValid("-0x1AF")).toBeFalsy()
      expect(isValid("L123J45")).toBeFalsy()
      expect(isValid("ABC-ABC")).toBeFalsy()
      expect(isValid("1af")).toBeFalsy()
      expect(isValid("-1af")).toBeFalsy()
      expect(isValid(null as any)).toBeFalsy()
      expect(isValid(undefined as any)).toBeFalsy()
      expect(isValid(false as any)).toBeFalsy()
      expect(isValid(true as any)).toBeFalsy()
      expect(isValid([] as any)).toBeFalsy()
      expect(isValid([""] as any)).toBeFalsy()
      expect(isValid(new Date() as any)).toBeFalsy()
      expect(isValid({} as any)).toBeFalsy()
    })
  })

  describe("isPositiveInteger()", () => {
    it("should return true for any positive integer number", () => {
      expect(isPositiveInteger(123456)).toBeTruthy()
      expect(isPositiveInteger(0)).toBeTruthy()
      expect(isPositiveInteger(+0)).toBeTruthy()
      expect(isPositiveInteger(+123)).toBeTruthy()
      expect(isPositiveInteger(0B1001)).toBeTruthy()
      expect(isPositiveInteger(0b1001)).toBeTruthy()
      expect(isPositiveInteger(0x1AF)).toBeTruthy()
      expect(isPositiveInteger(0X1af)).toBeTruthy()
      expect(isPositiveInteger(100E2)).toBeTruthy()
      expect(isPositiveInteger(100e2)).toBeTruthy()
      expect(isPositiveInteger(0.255e4)).toBeTruthy()
      expect(isPositiveInteger(5.0)).toBeTruthy()
    })
    it("should return true for any positive integer number in a string", () => {
      expect(isPositiveInteger("123456")).toBeTruthy()
      expect(isPositiveInteger("0")).toBeTruthy()
      expect(isPositiveInteger("0b1001")).toBeTruthy()
      expect(isPositiveInteger("0x1AF")).toBeTruthy()
    })
    it("should return false for any negative number or decimal", () => {
      expect(isPositiveInteger(-123456)).toBeFalsy()
      expect(isPositiveInteger(-123)).toBeFalsy()
      expect(isPositiveInteger(-0b1001)).toBeFalsy()
      expect(isPositiveInteger(-0x1AF)).toBeFalsy()
      expect(isPositiveInteger(-100E2)).toBeFalsy()
      expect(isPositiveInteger(-100e2)).toBeFalsy()
      expect(isPositiveInteger(123.123)).toBeFalsy()
      expect(isPositiveInteger(-123.123)).toBeFalsy()
      expect(isPositiveInteger(-0.01)).toBeFalsy()
      expect(isPositiveInteger(0.01)).toBeFalsy()
      expect(isPositiveInteger(5e-1)).toBeFalsy()
    })
    it("should return false for any negative number or decimal in a string", () => {
      expect(isPositiveInteger("-123456")).toBeFalsy()
      expect(isPositiveInteger("-123")).toBeFalsy()
      expect(isPositiveInteger("-1001")).toBeFalsy()
      expect(isPositiveInteger("-123.123")).toBeFalsy()
      expect(isPositiveInteger("123.123")).toBeFalsy()
    })
    it("should return false for any non valid type", () => {
      expect(isPositiveInteger("")).toBeFalsy()
      expect(isPositiveInteger(" ")).toBeFalsy()
      expect(isPositiveInteger("   ")).toBeFalsy()
      expect(isPositiveInteger(" -  ")).toBeFalsy()
      expect(isPositiveInteger("-0b1001")).toBeFalsy()
      expect(isPositiveInteger("-0x1AF")).toBeFalsy()
      expect(isPositiveInteger("L123J45")).toBeFalsy()
      expect(isPositiveInteger("ABC-ABC")).toBeFalsy()
      expect(isPositiveInteger("1af")).toBeFalsy()
      expect(isPositiveInteger("-1af")).toBeFalsy()
      expect(isPositiveInteger(null as any)).toBeFalsy()
      expect(isPositiveInteger(undefined as any)).toBeFalsy()
      expect(isPositiveInteger(false as any)).toBeFalsy()
      expect(isPositiveInteger(true as any)).toBeFalsy()
      expect(isPositiveInteger([] as any)).toBeFalsy()
      expect(isPositiveInteger([""] as any)).toBeFalsy()
      expect(isPositiveInteger(new Date() as any)).toBeFalsy()
      expect(isPositiveInteger({} as any)).toBeFalsy()
    })
  })








  describe("isInteger()", () => {
    it("should return true for any integer number", () => {
      expect(isInteger(123456)).toBeTruthy()
      expect(isInteger(0)).toBeTruthy()
      expect(isInteger(+0)).toBeTruthy()
      expect(isInteger(+123)).toBeTruthy()
      expect(isInteger(0B1001)).toBeTruthy()
      expect(isInteger(0b1001)).toBeTruthy()
      expect(isInteger(0x1AF)).toBeTruthy()
      expect(isInteger(0X1af)).toBeTruthy()
      expect(isInteger(100E2)).toBeTruthy()
      expect(isInteger(100e2)).toBeTruthy()
      expect(isInteger(0.255e4)).toBeTruthy()
      expect(isInteger(5.0)).toBeTruthy()
      expect(isInteger(-123456)).toBeTruthy()
      expect(isInteger(-123)).toBeTruthy()
      expect(isInteger(-0b1001)).toBeTruthy()
      expect(isInteger(-0x1AF)).toBeTruthy()
      expect(isInteger(-100E2)).toBeTruthy()
      expect(isInteger(-100e2)).toBeTruthy()
    })
    it("should return true for any integer number in a string", () => {
      expect(isInteger("123456")).toBeTruthy()
      expect(isInteger("0")).toBeTruthy()
      expect(isInteger("0b1001")).toBeTruthy()
      expect(isInteger("0x1AF")).toBeTruthy()
      expect(isInteger("-123456")).toBeTruthy()
      expect(isInteger("-123")).toBeTruthy()
      expect(isInteger("-1001")).toBeTruthy()
    })
    it("should return false for any decimal", () => {
      expect(isInteger(123.123)).toBeFalsy()
      expect(isInteger(-123.123)).toBeFalsy()
      expect(isInteger(-0.01)).toBeFalsy()
      expect(isInteger(0.01)).toBeFalsy()
      expect(isInteger(5e-1)).toBeFalsy()
    })
    it("should return false for any negative number or decimal in a string", () => {
      expect(isInteger("-123.123")).toBeFalsy()
      expect(isInteger("123.123")).toBeFalsy()
    })
    it("should return false for any non valid type", () => {
      expect(isInteger("")).toBeFalsy()
      expect(isInteger(" ")).toBeFalsy()
      expect(isInteger("   ")).toBeFalsy()
      expect(isInteger(" -  ")).toBeFalsy()
      expect(isInteger("-0b1001")).toBeFalsy()
      expect(isInteger("-0x1AF")).toBeFalsy()
      expect(isInteger("L123J45")).toBeFalsy()
      expect(isInteger("ABC-ABC")).toBeFalsy()
      expect(isInteger("1af")).toBeFalsy()
      expect(isInteger("-1af")).toBeFalsy()
      expect(isInteger(null as any)).toBeFalsy()
      expect(isInteger(undefined as any)).toBeFalsy()
      expect(isInteger(false as any)).toBeFalsy()
      expect(isInteger(true as any)).toBeFalsy()
      expect(isInteger([] as any)).toBeFalsy()
      expect(isInteger([""] as any)).toBeFalsy()
      expect(isInteger(new Date() as any)).toBeFalsy()
      expect(isInteger({} as any)).toBeFalsy()
    })
  })
})