import { isEqual } from "../src/compare.utils"

describe("Compare Utils", () => {
  describe("isValid()", () => {
    it("should return true for two equal strings", () => {
      expect(isEqual("Hello World!", "Hello World!")).toBeTruthy()
      expect(isEqual("123ABC", "123ABC")).toBeTruthy()
      expect(isEqual("", "")).toBeTruthy()
    })
    it("should return false for two non equal strings", () => {
      expect(isEqual("Hello World!", "hello world!")).toBeFalsy()
      expect(isEqual("123ABC", "123AbC")).toBeFalsy()
      expect(isEqual(" ", "")).toBeFalsy()
    })
    it("should return true for two equal numbers", () => {
      expect(isEqual(1000, 1000)).toBeTruthy()
      expect(isEqual(10.5, 10.5)).toBeTruthy()
      expect(isEqual(0xfff, 0xFFF)).toBeTruthy()
      expect(isEqual(10e2, 10e2)).toBeTruthy()
    })
    it("should return false for two non equal numbers", () => {
      expect(isEqual(10000, 1000)).toBeFalsy()
      expect(isEqual(10.5, 10.4)).toBeFalsy()
      expect(isEqual(0xfff, 0xaaa)).toBeFalsy()
      expect(isEqual(10e2, -10e2)).toBeFalsy()
    })
    it("should return true for two equal booleans", () => {
      expect(isEqual(true, true)).toBeTruthy()
      expect(isEqual(false, false)).toBeTruthy()
    })
    it("should return false for two non equal booleans", () => {
      expect(isEqual(false, true)).toBeFalsy()
      expect(isEqual(true, false)).toBeFalsy()
    })
    it("should return true for two equal nulls", () => {
      expect(isEqual(null, null)).toBeTruthy()
      expect(isEqual(undefined, undefined)).toBeTruthy()
      expect(isEqual(null, undefined)).toBeTruthy()
    })
    it("should return false for two non equal nulls", () => {
      expect(isEqual(false, undefined)).toBeFalsy()
      expect(isEqual(0, null)).toBeFalsy()
    })
    it("should return true for two equal dates", () => {
      let now = new Date()
      expect(isEqual(new Date(now.getTime()), new Date(now.getTime()))).toBeTruthy()
      expect(isEqual(new Date("2024-12-12"), new Date("2024-12-12"))).toBeTruthy()
      expect(isEqual(new Date(2014, 6, 10), new Date(2014, 6, 5 + 5))).toBeTruthy()
    })
    it("should return false for two non equal dates", () => {
      expect(isEqual(new Date("2024-12-13"), new Date("2014"))).toBeFalsy()
      expect(isEqual(0, null)).toBeFalsy()
    })
    it("should return true for two equal objects", () => {
      let a = {status: true, message: "Hello World!", id: 10}
      let b: any = {}
      b.id = 10
      b.message = "Hello World"
      b.message += "!"
      b.status = true
      expect(isEqual(a, b)).toBeTruthy()
    })
    it("should return false for two non equal objects", () => {
      let a = {status: true, message: "Hello World!", id: 10}
      let b: any = {}
      b.id = 10
      b.message = "Hello World"
      b.status = true
      expect(isEqual(a, b)).toBeFalsy()
    })
    it("should return true for two equal arrays", () => {
      let now = new Date()
      let array1 = [1, "Hello", {user: 24, created: now}, ["1", "2"]]
      let array2: any[] = []
      array2.push(1)
      array2.push("Hello")
      let obj: any = {}
      obj.user = 24
      obj.created = new Date(now)
      array2.push(obj, ["1", "2"])

      expect(isEqual(array1, array2)).toBeTruthy()
    })
    it("should return false for two non equal arrays", () => {
      let now = new Date()
      let array1 = [1, "Hello", {user: 24, created: now}, ["1", "2"]]
      let array2: any[] = []
      array2.push(1)
      array2.push("Hello")
      let obj: any = {}
      obj.user = 24
      obj.created = new Date(now)
      array2.push(obj, ["2", "1"])

      expect(isEqual(array1, array2)).toBeFalsy()
    })
  })
})