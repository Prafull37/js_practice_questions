/**
 * @param {Array} array - Array from which different elements are to be removed.
 * @param {Array} values - Array of values that are to be removed from the original array.
 * @return {Array} Returns filtered array.
 */
export default function difference(array, values) {
    return array.reduce((acc,item)=>{
      if(values.includes(item)){
        acc.push(item)
      }
      return acc;
    },[])
  }

  console.log(difference([1, 2, 3], []))