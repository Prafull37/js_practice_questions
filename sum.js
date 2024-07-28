/**
 * @param {number} value
 * @return {Function}
 */
export default function sum(value) {
    return function (valueB){
        return value === undefined ? value : sum(value+valueB)
    }
  }


  const addTwo = sum(2);
  // @ts-ignore
  console.log(addTwo(3)())
  // @ts-ignore
  console.log(addTwo(4)())
  // @ts-ignore
  console.log(addTwo(3)(4)())