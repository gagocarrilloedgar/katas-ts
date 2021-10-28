/* eslint-disable no-undef */
import forEach from './index'

describe('forEach', () => {
  test('should execute a callback for each iteration of a given array', () => {
    const arr = [10, 20, 20, 50]
    const expextedResult = 4

    let total = 0

    forEach(arr, () => {
      total++
    })

    expect(total).toBe(expextedResult)
  })

  test('should access the element it is iterating over', () => {
    const given = [1, 2, 3]
    const actual: number[] = []

    forEach(given, (element) => {
      actual.push(element)
    })

    expect(actual).toEqual([1, 2, 3])
  })
})
