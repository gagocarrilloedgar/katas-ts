/* eslint-disable no-undef */
import fizzBuzz, { checkDivider } from './index'

describe('Fiz Buzz', () => {
  test('3 should return fizz', () => {
    const inputNumber = 3
    const expextedResult = [1, 2, 'fizz']
    const result = fizzBuzz(inputNumber)

    expect(result).toEqual(expextedResult)
  })

  test('5 should return buzz', () => {
    const inputNumber = 5
    const expextedResult = [1, 2, 'fizz', 4, 'buzz']
    const result = fizzBuzz(inputNumber)

    expect(result).toEqual(expextedResult)
  })

  test('3 & 5 divider  should return fizzBuzz', () => {
    const inputNumber = 15
    const expextedResult = 'fizzBuzz'
    const result = fizzBuzz(inputNumber)

    expect(result[result.length - 1]).toEqual(expextedResult)
  })

  test('If 0 should return an empy list', () => {
    const inputNumber = 0
    const expextedResult = 0
    const result = fizzBuzz(inputNumber)

    expect(result.length).toBe(expextedResult)
  })
})

describe('Check Divider', () => {
  test('2 % 2 should return true', () => {
    const index = 2
    const divider = 2

    const result = checkDivider(index, divider)

    expect(result).toBeTruthy()
  })

  test('5 % 3 should return false', () => {
    const index = 5
    const divider = 3

    const result = checkDivider(index, divider)

    expect(result).toBeFalsy()
  })

  test('0 % 0 should return false', () => {
    const index = 0
    const divider = 0

    const result = checkDivider(index, divider)

    expect(result).toBeFalsy()
  })
})
