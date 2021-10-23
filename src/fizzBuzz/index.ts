/**
 * Create a program that introducing a number it return a list that starts on 1 and ends with that number. Every time a number in that list is divisible by 3 replace the number with "fizz". Every time a number is divisible by 5 replace the number with "buzz'.
 * When a number is divisible between 3 and 5 at the same time replace with "fizzbuzz".
 */

const FIZZ = 'fizz'
const BUZZ = 'buzz'
const FIZZBUZZ = 'fizzBuzz'
export const checkDivider = (index: number, divider: number): boolean => index % divider === 0

const fizzBuzz = (lastIndex: number): any[] => {
  const fizzBuzzList: any[] = Array.from({ length: lastIndex }, (_, i) => {
    const val = i + 1
    const checkThree = checkDivider(val, 3)
    const checkFive = checkDivider(val, 5)
    return checkFive && checkThree ? FIZZBUZZ : checkThree ? FIZZ : checkFive ? BUZZ : val
  })

  return fizzBuzzList
}

export default fizzBuzz
