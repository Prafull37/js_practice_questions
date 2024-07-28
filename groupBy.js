/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 */
export default function groupBy(array, iteratee) {
    return array.reduce((acc,item)=>{
      const value = iteratee(item);
      if(acc[value]){
        acc[value].push(item)
      }else{
        acc[value]=[item]
      }
      return acc;
    },{})
  }