/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 */
export default function maxBy(array, iteratee) {
    let lastMax;
    let index;
    array.forEach((item,idx)=>{
      const value = iteratee(item,idx,array);
      console.log("value",value,lastMax,value > lastMax)
      if(lastMax === undefined ||(value!==undefined && value > lastMax)){
        index = idx
       lastMax = value
      }
    })
    return  lastMax ? array[index]:lastMax;
  }

console.log(maxBy([{ n: 1 }, { n: 2 }], function (o) {
    return o.n;
  }))