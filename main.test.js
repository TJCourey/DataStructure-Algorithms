const func = require("./main");

test("5", () => {
  expect(func(5)).toBe(25);
});
test("10", () => {
  expect(func(10)).toBe(100);
});
test("5", () => {
  expect(func(4)).toBe(16);
});
