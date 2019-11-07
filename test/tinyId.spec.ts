import expect from "./expect"
import tinyId from "../src"

describe("tinyId", () => {
  it("generates ids", () => {
    expect(tinyId.generate()).toBe("a")
    expect(tinyId.generate()).toBe("b")
  })

  it("resets", () => {
    tinyId.reset()
    expect(tinyId.generate()).toBe("a")
    tinyId.reset()
    expect(tinyId.generate()).toBe("a")
  })
})
