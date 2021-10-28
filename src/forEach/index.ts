/**
 * Given a list of values it should execute a given callback with the element it's iterating over.
 * @param numArray
 * @returns
 */
const forEach = (numArray: any[], callback: (el: any) => void): void => numArray.forEach((el) => callback(el))

export default forEach
