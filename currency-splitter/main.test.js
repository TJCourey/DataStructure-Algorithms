const func = require("./main");

test("5.05", () => {
  expect(func("5.05")).toStrictEqual([5, 5]);
});
test("100.86", () => {
  expect(func("100.86")).toStrictEqual([100, 86]);
});
test("1,000.25", () => {
  expect(func("1,000.25")).toStrictEqual([1000, 25]);
});
test("1,000,000.25", () => {
  expect(func("1,000,000.25")).toStrictEqual([1000000, 25]);
});
test("0.25", () => {
  expect(func("0.25")).toStrictEqual([0, 25]);
});
test("5", () => {
  expect(func("5")).toStrictEqual([5, 0]);
});
test("1dollar.11cents", () => {
  expect(func("1dollar.11cents")).toStrictEqual([0, 0]);
});
