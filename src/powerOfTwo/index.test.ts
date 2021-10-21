/* eslint-disable no-undef */
import powerOfTwo from './index'

describe('Power of Two', () => {
  test('Array should be returned by the power', () => {
    const arr = [10, 20, 40, 50]
    const expextedResult = [100, 400, 1600, 2500]
    const result = powerOfTwo(arr)

    expect(result).toStrictEqual(expextedResult)
  })
})
