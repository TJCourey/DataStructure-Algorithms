const func = require("./main");

test("x", () => {
  expect(func("x")).toStrictEqual(10);
});
test("XVI", () => {
  expect(func("XVI")).toStrictEqual(16);
});
test("XXVII", () => {
  expect(func("XXVII")).toStrictEqual(27);
});
test("IX", () => {
  expect(func("IX")).toStrictEqual(9);
});
test("XIX", () => {
  expect(func("XIX")).toStrictEqual(19);
});
test("5", () => {
  expect(func("5")).toStrictEqual("error");
});

