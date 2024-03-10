import { addDays, addHours, addMinutes, addMonths, addYears, isValid } from "../src/date.utils"

describe("Date Utils", () => {

  describe("isValid()", () => {
    it("should return true for any valid date value", () => {
      expect(isValid(new Date())).toBeTruthy()
      expect(isValid("2023-08-12")).toBeTruthy()
      expect(isValid("12-08-2012")).toBeTruthy()
      expect(isValid("2022-08-12 12:00:00")).toBeTruthy()
      expect(isValid("2022-08-12T12:00:00.000Z")).toBeTruthy()
      expect(isValid(100000)).toBeTruthy()
      expect(isValid(-100000)).toBeTruthy()
      expect(isValid(100000.555)).toBeTruthy()
    })
    it("should return false for any non valid date value", () => {
      expect(isValid("ABCDE")).toBeFalsy()
      expect(isValid([1,2,3] as any)).toBeFalsy()
      expect(isValid(false as any)).toBeFalsy()
      expect(isValid(true as any)).toBeFalsy()
      expect(isValid({day: 10, month: 6, year: 2000} as any)).toBeFalsy()
      expect(isValid(null as any)).toBeFalsy()
      expect(isValid(undefined as any)).toBeFalsy()
    })
  })

  describe("addYears()", () => {
    it("should return a date with years added", () => {
      let date = new Date(2024, 5, 10)
      expect(addYears(date, 10)?.getFullYear()).toEqual(new Date(2034, 5, 10).getFullYear())
      expect(addYears(date, -10)?.getFullYear()).toEqual(new Date(2014, 5, 10).getFullYear())
    })
    it("should return null if date is invalid", () => {
      expect(addYears(new Date("ABCDE"), 10)).toBeNull()
      expect(addYears(false as any, 10)).toBeNull()
    })
  })

  describe("addMonths()", () => {
    it("should return a date with months added", () => {
      let date = new Date(2023, 5, 10)
      expect(addMonths(date, 2)?.getMonth()).toBe(new Date(2033, 7, 10).getMonth())
      expect(addMonths(date, -2)?.getMonth()).toBe(new Date(2013, 3, 10).getMonth())
      expect(addMonths(new Date(2023, 11, 10), 1)?.getMonth()).toBe(new Date(2024, 0, 10).getMonth())
      expect(addMonths(new Date(2023, 0, 10), -1)?.getMonth()).toBe(new Date(2022, 11, 10).getMonth())
    })
    it("should return null if date is invalid", () => {
      expect(addMonths(new Date("ABCDE"), 10)).toBeNull()
      expect(addMonths(false as any, 10)).toBeNull()
    })
  })

  describe("addDays()", () => {
    it("should return a date with days added", () => {
      let date = new Date(2023, 5, 10)
      expect(addDays(date, 2)?.getDate()).toBe(new Date(2033, 5, 12).getDate())
      expect(addDays(date, -2)?.getDate()).toBe(new Date(2013, 5, 8).getDate())
      expect(addDays(new Date(2023, 1, 28), 1)?.getDate()).toBe(new Date(2023, 2, 1).getDate())
      expect(addDays(new Date(2023, 0, 1), -1)?.getDate()).toBe(new Date(2022, 11, 31).getDate())
    })
    it("should return null if date is invalid", () => {
      expect(addDays(new Date("ABCDE"), 10)).toBeNull()
      expect(addDays(false as any, 10)).toBeNull()
    })
  })

  describe("addHours()", () => {
    it("should return a date with hours added", () => {
      let date = new Date(2023, 5, 10, 12)
      expect(addHours(date, 5)?.getHours()).toBe(new Date(2033, 5, 10, 17).getHours())
      expect(addHours(date, -5)?.getHours()).toBe(new Date(2013, 5, 10, 7).getHours())
      expect(addHours(new Date(2023, 5, 10, 20), 5)?.getHours()).toBe(new Date(2023, 5, 11, 1).getHours())
      expect(addHours(new Date(2023, 5, 10, 4), -5)?.getHours()).toBe(new Date(2023, 5, 9, 23).getHours())
    })
    it("should return null if date is invalid", () => {
      expect(addHours(new Date("ABCDE"), 10)).toBeNull()
      expect(addHours(false as any, 10)).toBeNull()
    })
  })

  describe("addMinutes()", () => {
    it("should return a date with minutes added", () => {
      let date = new Date(2023, 5, 10, 12, 30)
      expect(addMinutes(date, 15)?.getMinutes()).toBe(new Date(2033, 5, 10, 12, 45).getMinutes())
      expect(addMinutes(date, -15)?.getMinutes()).toBe(new Date(2013, 5, 10, 12, 15).getMinutes())
      expect(addMinutes(new Date(2023, 5, 10, 12, 30), 45)?.getMinutes()).toBe(new Date(2023, 5, 10, 13, 15).getMinutes())
      expect(addMinutes(new Date(2023, 5, 10, 12, 30), -45)?.getMinutes()).toBe(new Date(2023, 5, 10, 11, 45).getMinutes())
    })
    it("should return null if date is invalid", () => {
      expect(addMinutes(new Date("ABCDE"), 10)).toBeNull()
      expect(addMinutes(false as any, 10)).toBeNull()
    })
  })

})