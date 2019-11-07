import expect from "./expect"
import generate, { instance } from "../src"

describe("tinyId", () => {
  it("generates ids", () => {
    expect(generate()).toBe("a")
    expect(generate()).toBe("b")
  })

  it("resets", () => {
    instance.reset()
    expect(generate()).toBe("a")
    instance.reset()
    expect(generate()).toBe("a")
  })
})
