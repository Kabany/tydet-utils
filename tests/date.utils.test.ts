import { addDays, addHours, addMinutes, addMonths, addYears, daysOfDifference, hoursOfDifference, isExpired, isValid, minutesOfDifference } from "../src/date.utils"

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

  describe("isExpired()", () => {
    it("should return false for a date in the future compared to now", () => {
      let nextWeek = addDays(new Date(), 7)!
      expect(isExpired(nextWeek)).toBeFalsy()
    })
    it("should return true for a date in the past compared to now", () => {
      let lastWeek = addDays(new Date(), -7)!
      expect(isExpired(lastWeek)).toBeTruthy()
    })
    it("should return false if date is invalid", () => {
      expect(isExpired(new Date("ABCDE"))).toBeFalsy()
      expect(isExpired(false as any)).toBeFalsy()
    })
  })

  describe("daysOfDifference()", () => {
    it("should return 7 for a week of diference compared to now", () => {
      let nextWeek = addDays(new Date(), 7)!
      expect(daysOfDifference(nextWeek, new Date())).toBe(7)
    })
    it("should return 1 for a day or even a minute of diference compared to now", () => {
      let tomorrow = addDays(new Date(), 1)!
      expect(daysOfDifference(tomorrow, new Date())).toBe(1)
      let hour = addHours(new Date(), 1)!
      expect(daysOfDifference(hour, new Date())).toBe(1)
      let minute = addMinutes(new Date(), 1)!
      expect(daysOfDifference(minute, new Date())).toBe(1)
    })
    it("should return -7 for a week of diference in the past compared to now", () => {
      let lastWeek = addDays(new Date(), -7)!
      expect(daysOfDifference(lastWeek, new Date())).toBe(-7)
    })
    it("should return -1 for a day or even a minute of diference in the past compared to now", () => {
      let yesterday = addDays(new Date(), -1)!
      expect(daysOfDifference(yesterday, new Date()))
      let hour = addHours(new Date(), -1)!
      expect(daysOfDifference(hour, new Date()))
      let minute = addMinutes(new Date(), -1)!
      expect(daysOfDifference(minute, new Date())).toBe(-1)
    })
    it("should return null if any date is invalid", () => {
      expect(daysOfDifference(new Date("ABCDE"), new Date())).toBeNull()
      expect(daysOfDifference(new Date(), false as any)).toBeNull()
    })
  })

  describe("hoursOfDifference()", () => {
    it("should return 24 for a day of diference compared to now", () => {
      let tomorrow = addDays(new Date(), 1)!
      expect(hoursOfDifference(tomorrow, new Date())).toBe(24)
    })
    it("should return 1 for a minute or even a second of diference compared to now", () => {
      let hour = addHours(new Date(), 1)!
      expect(hoursOfDifference(hour, new Date())).toBe(1)
      let minute = addMinutes(new Date(), 1)!
      expect(hoursOfDifference(minute, new Date())).toBe(1)
    })
    it("should return -24 for a day in the past compared to now", () => {
      let yesterday = addDays(new Date(), -1)!
      expect(hoursOfDifference(yesterday, new Date())).toBe(-24)
    })
    it("should return -1 for an hour or a minute in the past compared to now", () => {
      let lastHour = addHours(new Date(), -1)!
      expect(hoursOfDifference(lastHour, new Date())).toBe(-1)
      let lastMinute = addMinutes(new Date(), -1)!
      expect(hoursOfDifference(lastMinute, new Date())).toBe(-1)
    })
    it("should return null if date is invalid", () => {
      expect(hoursOfDifference(new Date("ABCDE"), new Date())).toBeNull()
      expect(hoursOfDifference(new Date(), false as any)).toBeNull()
    })
  })

  describe("minutesOfDifference()", () => {
    it("should return 1440 for a day of diference compared to now", () => {
      let tomorrow = addDays(new Date(), 1)!
      expect(minutesOfDifference(tomorrow, new Date())).toBe(1440)
    })
    it("should return 1 for an minute or even a second of diference compared to now", () => {
      let minute = addMinutes(new Date(), 1)!
      expect(minutesOfDifference(minute, new Date())).toBe(1)
    })
    it("should return 60 for an hour of diference compared to now", () => {
      let minute = addHours(new Date(), 1)!
      expect(minutesOfDifference(minute, new Date())).toBe(60)
    })
    it("should return -1440 for an hour in the past compared to now", () => {
      let yesterday = addDays(new Date(), -1)!
      expect(minutesOfDifference(yesterday, new Date())).toBe(-1440)
    })
    it("should return null if date is invalid", () => {
      expect(minutesOfDifference(new Date("ABCDE"), new Date())).toBeNull()
      expect(minutesOfDifference(new Date(), false as any)).toBeNull()
    })
  })

})