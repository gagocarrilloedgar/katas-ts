/* eslint-disable no-undef */
import flatArray from './index'

describe('Highest Number', () => {
  test('When valid input should return a type of number', () => {
    const mat = [[1, 2, 3], [4, 5], [6]]
    const level = 1
    const result = flatArray({ mat, level })
    const expected = [1, 2, 3, 4, 5, 6]
    expect(result).toStrictEqual(expected)
  })
})
