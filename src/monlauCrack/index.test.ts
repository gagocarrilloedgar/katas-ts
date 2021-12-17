import data from './Monlau_Data.json'

/* eslint-disable no-undef */
import { highestNumber, sumOfOddNumbers, sumOfPairNumbers, lengthOfList, passwordGenerator } from './index'

describe('MONLAU HACK', () => {
  test('Highest should be 99880', () => {
    const result = highestNumber(data)
    const expectedResult = 99880
    expect(result).toBe(expectedResult)
  })

  test('Odd sum should return 23868927', () => {
    const arr = data
    const result = sumOfOddNumbers(arr)
    const expectedResult = 23868927
    expect(result).toBe(expectedResult)
  })

  test('Pair sum should return 24114222', () => {
    const arr = data
    const result = sumOfPairNumbers(arr)
    const expectedResult = 24114222
    expect(result).toBe(expectedResult)
  })

  test('Length should return 999', () => {
    const arr = data
    const result = lengthOfList(arr)
    const expectedResult = 999
    expect(result).toBe(expectedResult)
  })

  test('Arr should return 80', () => {
    const x = 99880
    const y = 23868927
    const z = 24114222
    const h = 999
    const result = passwordGenerator(x, y, z, h)
    const expectedResult = 'MONLAU-543936'
    expect(result).toBe(expectedResult)
  })
})
