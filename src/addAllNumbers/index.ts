type NumberList = number[]
type SumResult = number

/**
 * Given a list of numbers it should get the total by adding them together.
 * @param {number[]} NumberList array of input numbers
 * @returns {SumResult} result of the addition
 */
const addAllNumbers = (arr: NumberList): SumResult => arr.reduce((a, b) => a + b)

export default addAllNumbers
