/**
 * Returns the max value whithn an array
 * @param {number[]} arrOfNums
 * @returns {number}
 */
const highestNumber = (arrOfNums: number[]): number => Math.max(...arrOfNums)

/**
 * Sum of the odd numbers
 * @param arrOfNums
 * @returns
 */
const sumOfOddNumbers = (arrOfNums: number[]): number =>
  arrOfNums.filter((num: number) => num % 2 !== 0).reduce((a, b) => a + b)

/**
 * Returns the summ of all pair numbers
 * @param arrOfNums
 */
const sumOfPairNumbers = (arrOfNums: number[]): number =>
  arrOfNums.filter((num: number) => num % 2 === 0).reduce((a, b) => a + b)

const lengthOfList = (arrOfNums: number[]): number => arrOfNums.length

const passwordGenerator = (x: number, y: number, z: number, h: number): string => `MONLAU-${3 * x - y + z - h}`
export { highestNumber, sumOfPairNumbers, sumOfOddNumbers, lengthOfList, passwordGenerator }
