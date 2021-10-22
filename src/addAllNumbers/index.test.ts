/* eslint-disable no-undef */
import addAllNumbers from './index'

describe('Add all numbers', () => {
  test('For a given array of num it should return the addtion', () => {
    const arr = [10, 20, 40, 50]
    const expextedResult = 120
    const result = addAllNumbers(arr)

    expect(result).toStrictEqual(expextedResult)
  })
})
