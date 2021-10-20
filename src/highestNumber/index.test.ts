/* eslint-disable no-undef */
import highestNumber from './index'

describe('Highest Number', () => {
  test('When valid input should return a type of number', () => {
    const arr = [10, 30, 60, 80]
    const result = highestNumber(arr)
    expect(typeof result).toBe('number')
  })

  test('Arr should return 80', () => {
    const arr = [10, 30, 60, 80]
    const result = highestNumber(arr)
    const expectedResult = 80
    expect(result).toBe(expectedResult)
  })
})
