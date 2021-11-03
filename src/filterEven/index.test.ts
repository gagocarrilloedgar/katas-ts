/* eslint-disable no-undef */
import filterEven from './index'

describe('Highest Number', () => {
  test('When valid input should return a type of number', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const result = filterEven(arr)
    const expected = [2, 4, 6, 8, 10]
    expect(result).toStrictEqual(expected)
  })
})
