type Props = {
  mat: number[][]
  level: number
}

/**
 * @description
 * @param Props - matrix to flatten and level to flatten to
 * @returns {number[]} - flattened array
 */
const flatArray = ({ mat, level }: Props) => mat.flat(level)

export default flatArray
