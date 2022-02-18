import isTrue from './isTrue'

test("False is false", () => {
  expect(isTrue(false)).toBe(false)
})

test("True is true", () => {
  expect(isTrue(true)).toBe(true)
})